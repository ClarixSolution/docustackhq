import { getAllSlugs, getItemBySlug } from "../../../lib/posts";
import PromoBanner from "../../../components/PromoBanner";
import VerdictStrip from "../../../components/VerdictStrip";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return getAllSlugs("guides").map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  try {
    const g = await getItemBySlug("guides", params.slug);
    return { title: g.title, description: g.description };
  } catch { return {}; }
}

export default async function GuidePage({ params }) {
  let guide;
  try { guide = await getItemBySlug("guides", params.slug); }
  catch { notFound(); }

  return (
    <>
      <div className="article-header">
        <div className="wrap">
          <p className="article-tag">{guide.category}</p>
          <h1>{guide.title}</h1>
          {guide.ctaUrl && (
            <div className="article-meta" style={{ marginTop: 16 }}>
              <a
                href={guide.ctaUrl}
                className="nav-cta"
                target={guide.ctaUrl.startsWith("http") ? "_blank" : undefined}
                rel={guide.ctaUrl.startsWith("http") ? "noopener noreferrer" : undefined}
              >
                {guide.ctaLabel || "Open tool"}
              </a>
            </div>
          )}
        </div>
      </div>

      <div className="wrap">
        <div className="article-layout">
          <div className="article-body" dangerouslySetInnerHTML={{ __html: guide.contentHtml }} />
          <aside className="sidebar">
            <PromoBanner variant="esign" />
            <div className="sidebar-card">
              <p className="article-tag" style={{ marginBottom: 8 }}>More guides</p>
              <h4>Browse all guides</h4>
              <p>Step-by-step walkthroughs for every common PDF task.</p>
              <Link href="/guides" className="sidebar-link">All guides →</Link>
            </div>
            <div className="sidebar-card">
              <p className="article-tag" style={{ marginBottom: 8 }}>Tool reviews</p>
              <h4>Which tool should you use?</h4>
              <p>See our scored comparison of the top PDF tools.</p>
              <Link href="/reviews" className="sidebar-link">See rankings →</Link>
            </div>
          </aside>
        </div>
      </div>

      <VerdictStrip
        label="Quick tip"
        text="Not sure which PDF tool handles this task best? We ranked and scored three tools head-to-head."
        linkText="See the rankings →"
        linkHref="/reviews"
      />
    </>
  );
}
