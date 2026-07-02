const VARIANTS = {
  compress: {
    headline: "The highest-rated PDF tool in our latest round of testing",
    subtext: "Merge, compress, convert and e-sign — free in your browser, no install required.",
  },
  esign: {
    headline: "Need a signature on that PDF? Skip the printer entirely.",
    subtext: "E-sign documents in seconds — free for everyday use, no account needed.",
  },
  merge: {
    headline: "Combine PDFs in the right order, in seconds",
    subtext: "Drag, reorder, and merge — no software install, no upload limits on the basics.",
  },
};

export default function PromoBanner({ variant = "compress" }) {
  const c = VARIANTS[variant] || VARIANTS.compress;
  return (
    <div className="promo-band">
      <div className="promo-band-left">
        <div className="promo-icon">
          <svg viewBox="0 0 24 24">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
            <polyline points="14 2 14 8 20 8"/>
            <line x1="12" y1="18" x2="12" y2="12"/>
            <line x1="9" y1="15" x2="15" y2="15"/>
          </svg>
        </div>
        <div className="promo-band-text">
          <span className="promo-tag">Sponsored</span>
          <strong>{c.headline}</strong>
          <span>{c.subtext}</span>
        </div>
      </div>
      <a
        href="https://clarixpdf.com"
        className="promo-btn"
        target="_blank"
        rel="noopener noreferrer"
      >
        Try it free →
      </a>
    </div>
  );
}
