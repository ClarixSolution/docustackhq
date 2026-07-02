import Link from "next/link";
import { getAllItems } from "../../lib/posts";
import PromoBanner from "../../components/PromoBanner";

export const metadata = {
  title: "PDF How-To Guides",
  description: "Step-by-step guides for the everyday PDF tasks: compress, merge, convert, sign, redact, protect, and more.",
};

export default function GuidesPage() {
  const guides = getAllItems("guides");

  return (
    <section className="section">
      <div className="wrap">
        <div className="section-hd">
          <h2>How-to guides</h2>
        </div>
        <p style={{ color: "var(--ink-soft)", marginBottom: 36, maxWidth: "58ch", lineHeight: 1.65 }}>
          Step-by-step walkthroughs for the PDF tasks people search for most.
          Written to work regardless of which tool you use.
        </p>

        <div className="guide-grid">
          {guides.map((g, i) => (
            <Link key={g.slug} href={`/guides/${g.slug}`} className="guide-card">
              <div className="guide-num">{String(i + 1).padStart(2, "0")}</div>
              <span className="guide-tag">{g.category}</span>
              <h3>{g.title}</h3>
              <p>{g.description}</p>
              <span className="guide-link">Read guide →</span>
            </Link>
          ))}
        </div>

        <div style={{ marginTop: 40 }}>
          <PromoBanner variant="merge" />
        </div>
      </div>
    </section>
  );
}
