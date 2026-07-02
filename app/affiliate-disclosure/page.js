export const metadata = {
  title: "Affiliate Disclosure",
  description: "How DocuStackHQ makes money and how that affects our reviews.",
};

export default function AffiliateDisclosurePage() {
  return (
    <section className="section">
      <div className="wrap">
        <div className="article-layout">
          <div className="article-body">
            <h1 style={{ fontFamily: "var(--serif)", fontSize: "2rem", fontWeight: 400, marginBottom: "1em" }}>Affiliate Disclosure</h1>
            <p>
              DocuStackHQ is reader-supported. Some links on this site —
              including links to PDF tools, software, and services — are affiliate
              links. If you click one and sign up or make a purchase, we may earn
              a commission at no extra cost to you.
            </p>

            <h2>How this affects our reviews</h2>
            <p>
              Affiliate relationships do not determine our scores or
              recommendations. We test tools the same way regardless of whether
              an affiliate program exists. A tool that performs poorly in testing
              will receive a lower score regardless of commercial relationships.
            </p>

            <h2>Sponsored content</h2>
            <p>
              Occasionally we run sponsored banner advertisements, clearly labeled
              with the word &ldquo;Sponsored.&rdquo; Sponsored placements are kept
              separate from editorial content and do not influence review scores
              or rankings.
            </p>

            <h2>Questions</h2>
            <p>
              If you have questions about a specific recommendation or how we
              evaluated a tool, reach out via our{" "}
              <a href="/contact" style={{ color: "var(--green-mid)", textDecoration: "underline" }}>
                contact page
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
