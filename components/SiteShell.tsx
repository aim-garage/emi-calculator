import Link from "next/link";

const footerLinks = [
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy-policy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/disclaimer", label: "Disclaimer" },
];

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className="site-header">
        <div className="site-header-inner">
          <Link className="wordmark" href="/" aria-label="ClearEMI home">
            <span className="wordmark-mark" aria-hidden="true">₹</span>
            <span>Clear<span className="wordmark-light">EMI</span></span>
          </Link>
          <nav className="main-nav" aria-label="Main navigation">
            <Link href="/emi-calculator">EMI calculator</Link>
            <Link href="/about">About</Link>
          </nav>
        </div>
      </header>
      <main>{children}</main>
      <footer className="site-footer">
        <div className="footer-inner">
          <div>
            <Link className="footer-brand" href="/">ClearEMI</Link>
            <p>Understand the numbers before you borrow.</p>
          </div>
          <nav className="footer-nav" aria-label="Footer navigation">
            {footerLinks.map((link) => (
              <Link key={link.href} href={link.href}>{link.label}</Link>
            ))}
          </nav>
          <p className="footer-note">Estimates are for planning and do not constitute financial advice.</p>
        </div>
      </footer>
    </>
  );
}