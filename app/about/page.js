export const metadata = {
  title: "About",
  description: "What DocuStackHQ is, how we test, and why we built it.",
};

export default function AboutPage() {
  return (
    <section className="section">
      <div className="wrap">
        <div className="article-layout">
          <div className="article-body">
            <h1 style={{ fontFamily: "var(--serif)", fontSize: "2rem", fontWeight: 400, marginBottom: "1em" }}>About DocuStackHQ</h1>
            <p>
              DocuStackHQ reviews PDF and document tools for people who just want
              to get a task done — merge a contract, compress a scan, convert a
              report — without wading through ten browser tabs first.
            </p>

            <h2>How we test</h2>
            <p>
              Every tool we review is run against the same small set of real
              documents: a multi-page scanned report, a batch of mixed-format
              invoices, and a contract with tables and signatures. We score each
              tool on:
            </p>
            <ul>
              <li><strong>Speed</strong> — how long the task actually takes, including upload and download.</li>
              <li><strong>Output quality</strong> — does compression keep text sharp? Does conversion keep formatting intact?</li>
              <li><strong>Interface</strong> — can a non-technical person use it without a tutorial?</li>
              <li><strong>Value</strong> — what do you get for free, and is the paid tier worth it?</li>
            </ul>
            <p>
              Scores are assigned independently for each criterion, then averaged
              into a final score out of 10. We update reviews when a tool makes
              significant changes to pricing or features.
            </p>

            <h2>Affiliate relationships</h2>
            <p>
              Some links on this site are affiliate links — we may earn a small
              commission if you sign up for a tool through our link. This does not
              affect our scores or rankings. See our full{" "}
              <a href="/affiliate-disclosure" style={{ color: "var(--green-mid)", textDecoration: "underline" }}>
                affiliate disclosure
              </a>{" "}
              for details.
            </p>

            <h2>Get in touch</h2>
            <p>
              Spotted something inaccurate, or want a tool reviewed?{" "}
              <a href="/contact" style={{ color: "var(--green-mid)", textDecoration: "underline" }}>
                Contact us
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
