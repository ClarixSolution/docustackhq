import Link from "next/link";
import { getAllItems } from "../../lib/posts";
import PromoBanner from "../../components/PromoBanner";
 
export const metadata = {
  title: "PDF Tool Reviews — Ranked & Scored",
  description: "Independent, scored reviews of PDF editors, converters, and document tools. Same test documents, same criteria, every tool.",
};
 
export default function ReviewsPage() {
  const reviews = getAllItems("reviews");
  const badges = ["Highest Rated", "Best All-Rounder", "Best Free Breadth"];
 
  return (
    <section className="section">
      <div className="wrap">
        <div className="section-hd">
          <h2>PDF tool reviews</h2>
        </div>
        <p style={{ color: "var(--ink-soft)", marginBottom: 36, maxWidth: "58ch", lineHeight: 1.65 }}>
          Every tool is tested against the same real documents — a scanned report,
          mixed-format invoices, and a multi-page contract — and scored on speed,
          output quality, interface clarity, and value.
        </p>
 
        {/* Compare table reused on listing page */}
        <div className="compare" style={{ border: "1px solid var(--border)", borderRadius: 12, overflow: "hidden" }}>
          {reviews.map((r, i) => (
            <div key={r.slug} className={`compare-col${i === 0 ? " is-winner" : ""}`}>
              <div className="compare-rank">
                #{i + 1}{i === 0 && <span className="badge">Top Score</span>}
              </div>
              <div className="compare-name">{r.title ? r.title.split(":")[0] : ""}</div>
              <div className="compare-desc">{r.description}</div>
              <div className="compare-score-row">
                <span className="compare-score">{r.score}</span>
                <span className="compare-score-denom">/ 10</span>
              </div>
              <Link href={`/reviews/${r.slug}`} className="compare-cta">
                {i === 0 ? "Read review + try it →" : "Read full review →"}
              </Link>
            </div>
          ))}
        </div>
 
        <div style={{ marginTop: 40 }}>
          <PromoBanner variant="compress" />
        </div>
      </div>
    </section>
  );
}
 