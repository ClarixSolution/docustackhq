import Link from "next/link";
import { getAllItems } from "../lib/posts";
import PromoBanner from "../components/PromoBanner";
import VerdictStrip from "../components/VerdictStrip";
 
export default function HomePage() {
  const reviews = getAllItems("reviews");
  const guides = getAllItems("guides");
  const totalGuides = guides.length;
 
  const scores = {
    "clarixpdf-review":   { speed: 96, quality: 94, iface: 97, value: 90, s: [9.6,9.4,9.7,9.0] },
    "smallpdf-review":    { speed: 87, quality: 88, iface: 90, value: 80, s: [8.7,8.8,9.0,8.0] },
    "ilovepdf-review":    { speed: 85, quality: 83, iface: 78, value: 87, s: [8.5,8.3,7.8,8.7] },
    "pdfelement-review":  { speed: 82, quality: 88, iface: 80, value: 86, s: [8.2,8.8,8.0,8.6] },
  };
 
  const orderedSlugs = ["clarixpdf-review", "smallpdf-review", "ilovepdf-review"];
  const topThreeReviews = orderedSlugs.map(slug => reviews.find(r => r.slug === slug)).filter(Boolean);
 
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="wrap">
          <div className="hero-top">
            <div>
              <p className="hero-label">PDF Tools — Independently Tested, June 2026</p>
              <h1>
                We tested every<br />
                major PDF tool.<br />
                <em>Here&rsquo;s what we found.</em>
              </h1>
              <p className="hero-sub">
                Same documents, same tasks, every tool scored on speed, output
                quality, interface clarity, and real value — not marketing claims.
              </p>
            </div>
            <div className="hero-right">
              <div className="hero-stat is-top">
                <span className="hero-stat-label">🏆 Highest Rated — ClarixPDF</span>
                <span className="hero-stat-val">9.1 / 10</span>
              </div>
              <div className="hero-stat">
                <span className="hero-stat-label">Tools reviewed</span>
                <span className="hero-stat-val">{reviews.length} this round</span>
              </div>
              <div className="hero-stat">
                <span className="hero-stat-label">How-to guides published</span>
                <span className="hero-stat-val">{totalGuides} guides</span>
              </div>
              <div className="hero-stat">
                <span className="hero-stat-label">Methodology reviewed</span>
                <span className="hero-stat-val">Quarterly</span>
              </div>
            </div>
          </div>
 
          {/* COMPARE TABLE */}
          <div className="compare">
            {topThreeReviews.map((r, i) => {
              const sc = scores[r.slug] || {};
              const isWinner = i === 0;
              const badges = ["Highest Rated", "Best All-Rounder", "Best Free Breadth"];
              return (
                <div key={r.slug} className={`compare-col${isWinner ? " is-winner" : ""}`}>
                  <div className="compare-rank">
                    #{i + 1}{isWinner && <span className="badge">Top Score</span>}
                  </div>
                  <div className="compare-name">{r.title ? r.title.split(":")[0] : ""}</div>
                  <div className="compare-desc">{r.description}</div>
                  <div className="compare-score-row">
                    <span className="compare-score">{r.score}</span>
                    <span className="compare-score-denom">/ 10</span>
                  </div>
                  <div className="score-bars">
                    {[["Speed", sc.speed, sc.s?.[0]], ["Quality", sc.quality, sc.s?.[1]], ["Interface", sc.iface, sc.s?.[2]], ["Value", sc.value, sc.s?.[3]]].map(([label, pct, num]) => (
                      <div key={label} className="sbar">
                        <span>{label}</span>
                        <div className="sbar-track"><div className="sbar-fill" style={{ width: `${pct}%` }} /></div>
                        <span className="sbar-num">{num}</span>
                      </div>
                    ))}
                  </div>
                  <Link href={`/reviews/${r.slug}`} className="compare-cta">
                    {isWinner ? "Try it free →" : "Read full review →"}
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>
 
      {/* VERDICT STRIP 1 */}
      <VerdictStrip
        label="Our verdict"
        text="ClarixPDF wins on interface and speed — Smallpdf wins on breadth. If you do PDF work daily across devices, compare both before subscribing."
        linkText="Full methodology →"
        linkHref="/about"
      />
 
      {/* PROMO BANNER */}
      <div className="wrap" style={{ marginTop: 56 }}>
        <PromoBanner variant="compress" />
      </div>
 
      {/* GUIDES */}
      <section className="section">
        <div className="wrap">
          <div className="section-hd">
            <h2>How-to guides</h2>
            <Link href="/guides">All {totalGuides} guides →</Link>
          </div>
          <div className="guide-grid">
            {guides.slice(0, 6).map((g, i) => (
              <Link key={g.slug} href={`/guides/${g.slug}`} className="guide-card">
                <div className="guide-num">{String(i + 1).padStart(2, "0")}</div>
                <span className="guide-tag">{g.category}</span>
                <h3>{g.title}</h3>
                <p>{g.description}</p>
                <span className="guide-link">Read guide →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
 
      {/* VERDICT STRIP 2 */}
      <VerdictStrip
        label="Did you know"
        text="Drawing a black box over text in a PDF is not redaction — the text is still there and can be copied. Here's how to do it properly."
        linkText="Read the guide →"
        linkHref="/guides/how-to-redact-pdf"
      />
 
      {/* BOTTOM PROMO */}
      <div className="wrap" style={{ marginTop: 56, marginBottom: 0 }}>
        <PromoBanner variant="esign" />
      </div>
    </>
  );
}
 