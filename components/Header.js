import Link from "next/link";

export default function Header() {
  return (
    <header className="hdr">
      <div className="wrap hdr-inner">
        <Link href="/" className="logo">
          Docu<b>Stack</b>HQ
        </Link>
        <ul className="site-nav">
          <li><Link href="/reviews">Reviews</Link></li>
          <li><Link href="/guides">Guides</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/reviews" className="nav-cta">Top PDF Tool →</Link></li>
        </ul>
      </div>
    </header>
  );
}
