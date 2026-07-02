import { getAllSlugs, getItemBySlug } from "../../../lib/posts";
import PromoBanner from "../../../components/PromoBanner";
import VerdictStrip from "../../../components/VerdictStrip";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return getAllSlugs("reviews").map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  try {
    const r = await getItemBySlug("reviews", params.slug);
    return { title: r.title, description: r.description };
  } catch { return {}; }
}

export default async function ReviewPage({ params }) {
  let review;
  try { review = await getItemBySlug("reviews", params.slug); }
  catch { notFound(); }

  const isTop = review.slug === "clarixpdf-review";

  return (
    <>
      <div className="article-header">
        <div className="wrap">
          <p className="article-tag">{review.category} · Review</p>
          <h1>{review.title}</h1>
          <div className="article-meta">
            <span className={`verdict-badge${isTop ? "" : " muted"}`}>{review.verdict}</span>
            <span className="article-score">{review.score} / 10</span>
            {review.ctaUrl && (
              <a
                href={review.ctaUrl}
                className="nav-cta"
                target={review.ctaUrl.startsWith("http") ? "_blank" : undefined}
                rel={review.ctaUrl.startsWith("http") ? "noopener noreferrer" : undefined}
              >
                {review.ctaLabel || "Visit site"}
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="wrap">
        <div className="article-layout">
          <div className="article-body" dangerouslySetInnerHTML={{ __html: review.contentHtml }} />
          <aside className="sidebar">
            <PromoBanner variant="compress" />
            <div className="sidebar-card">
              <p className="article-tag" style={{ marginBottom: 8 }}>More reviews</p>
              <h4>Compare other tools</h4>
              <p>See how this tool stacks up against the full ranking.</p>
              <Link href="/reviews" className="sidebar-link">Full ranking →</Link>
            </div>
          </aside>
        </div>
      </div>

      <VerdictStrip
        label="Bottom line"
        text={`${review.title.split(":")[0]} scores ${review.score}/10 in our testing. ${review.verdict}.`}
        linkText="See full ranking →"
        linkHref="/reviews"
      />
    </>
  );
}
