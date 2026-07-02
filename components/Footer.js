import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-inner">
        <div className="footer-logo">Docu<b>Stack</b>HQ</div>
        <ul className="footer-links">
          <li><Link href="/about">About</Link></li>
          <li><Link href="/affiliate-disclosure">Affiliate Disclosure</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
        <span className="footer-copy">© {new Date().getFullYear()} DOCUSTACKHQ</span>
      </div>
    </footer>
  );
}
