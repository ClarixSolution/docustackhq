export default function VerdictStrip({ label = "Our verdict", text, linkText = "Full methodology →", linkHref = "/about" }) {
  return (
    <div className="verdict-strip">
      <div className="wrap verdict-inner">
        <span className="verdict-label">{label}</span>
        <div className="verdict-divider" />
        <p className="verdict-text">&ldquo;{text}&rdquo;</p>
        <a href={linkHref} className="verdict-arrow">{linkText}</a>
      </div>
    </div>
  );
}
