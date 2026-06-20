import { Link } from "@tanstack/react-router";
import { BrandLogo } from "@/components/brand-logo";
import { SectionBackdrop } from "@/components/section-backdrop";
import {
  BAJPAI_LABS_LOCATION,
  BAJPAI_LABS_TEAM_URL,
  BAJPAI_LABS_URL,
  CONTACT_EMAIL,
  LEGAL_COMPANY_CIN,
  LEGAL_COMPANY_NAME,
  PRODUCT_BYLINE,
  PRODUCT_NAME,
  SITE_BRAND_SHORT_NAME,
} from "@/lib/site";

const EXPLORE_LINKS = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/case-studies", label: "Case Studies" },
  { to: "/pricing", label: "Pricing" },
  { to: "/about", label: "About" },
  { to: "/blog", label: "Resources" },
  { href: BAJPAI_LABS_TEAM_URL, label: "Team", external: true },
  { to: "/contact", label: "Contact" },
] as const;

const LEGAL_LINKS = [
  { href: `${BAJPAI_LABS_URL}/legal/privacy-policy`, label: "Privacy Policy" },
  { href: `${BAJPAI_LABS_URL}/legal/terms`, label: "Terms of Service" },
  { href: `${BAJPAI_LABS_URL}/legal/cookie-policy`, label: "Cookie Policy" },
] as const;

export function SiteFooter() {
  return (
    <footer className="site-footer relative overflow-hidden border-t-2 border-[var(--gold)]/30 bg-[var(--vellum)] text-muted-foreground">
      <div className="section-grid-overlay pointer-events-none absolute inset-0 z-[1] opacity-20" aria-hidden />
      <SectionBackdrop variant="footer-ledger" className="z-[2]" />

      <div className="section-inner relative z-10 py-10 md:py-12">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 md:gap-10">
          <div className="sm:col-span-2 md:col-span-1">
            <Link to="/" className="inline-flex items-center gap-2.5">
              <BrandLogo className="h-8 w-8 rounded-full border border-[var(--gold)]/40 object-cover" />
              <div className="flex flex-col leading-none">
                <span className="font-display text-lg text-[var(--charcoal)]">{PRODUCT_NAME}</span>
                <span className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--gold)]">
                  {PRODUCT_BYLINE}
                </span>
              </div>
            </Link>
            <p className="mt-3 max-w-sm text-sm leading-relaxed">
              AI-powered computational biology for drug and gene therapy discovery. A research-driven
              product from{" "}
              <a
                href={BAJPAI_LABS_URL}
                className="font-medium text-[var(--charcoal)] hover:text-[var(--gold)]"
              >
                {SITE_BRAND_SHORT_NAME}
              </a>
              .
            </p>
          </div>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-[var(--gold)]">
              Explore
            </p>
            <nav className="mt-3 flex flex-col gap-2" aria-label="Site">
              {EXPLORE_LINKS.map((link) =>
                "external" in link ? (
                  <a
                    key={link.href}
                    href={link.href}
                    className="inline-flex min-h-10 items-center text-sm text-[var(--charcoal)]/75 transition-colors hover:text-[var(--gold)] sm:min-h-0"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="inline-flex min-h-10 items-center text-sm text-[var(--charcoal)]/75 transition-colors hover:text-[var(--gold)] sm:min-h-0"
                  >
                    {link.label}
                  </Link>
                ),
              )}
            </nav>
          </div>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-[var(--gold)]">
              Legal
            </p>
            <nav className="mt-3 flex flex-col gap-2" aria-label="Legal">
              {LEGAL_LINKS.map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  className="inline-flex min-h-10 items-center text-sm text-[var(--charcoal)]/75 transition-colors hover:text-[var(--gold)] sm:min-h-0"
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>
        </div>

        <div className="folio-rule my-8" aria-hidden />

        <div className="flex flex-col gap-3 text-xs text-muted-foreground md:flex-row md:items-start md:justify-between">
          <p>
            © {new Date().getFullYear()} {LEGAL_COMPANY_NAME}. All rights reserved.{" "}
            <span className="text-muted-foreground/90">
              ({PRODUCT_NAME} {PRODUCT_BYLINE})
            </span>
          </p>
          <div className="space-y-1 font-mono text-[10px] uppercase tracking-wider md:text-right">
            <p>CIN {LEGAL_COMPANY_CIN}</p>
            <p>
              <a href={`mailto:${CONTACT_EMAIL}`} className="normal-case hover:text-[var(--gold)]">
                {CONTACT_EMAIL}
              </a>
            </p>
            <p>{BAJPAI_LABS_LOCATION}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
