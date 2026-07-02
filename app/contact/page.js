export const metadata = {
  title: "Contact",
  description: "Get in touch with the DocuStackHQ team.",
};

export default function ContactPage() {
  return (
    <section className="section">
      <div className="wrap">
        <div className="article-layout">
          <div className="article-body">
            <h1 style={{ fontFamily: "var(--serif)", fontSize: "2rem", fontWeight: 400, marginBottom: "1em" }}>Contact</h1>
            <p>
              Spotted something inaccurate in a review? Want to suggest a tool
              for us to test? Or just have a question about a guide?
            </p>
            <p>
              Reach us at{" "}
              <a href="mailto:hello@docustackhq.com" style={{ color: "var(--green-mid)", textDecoration: "underline" }}>
                hello@docustackhq.com
              </a>
              . We aim to respond within a couple of business days.
            </p>
            <p>
              Tool vendors: we don&rsquo;t accept payment for review scores or
              rankings. See our{" "}
              <a href="/affiliate-disclosure" style={{ color: "var(--green-mid)", textDecoration: "underline" }}>
                affiliate disclosure
              </a>{" "}
              for how we make money.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
