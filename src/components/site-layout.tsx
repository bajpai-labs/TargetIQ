import { Link } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { Menu, X } from "lucide-react";
import { BrandLogo } from "@/components/brand-logo";
import { SiteFooter } from "@/components/site-footer";
import { BAJPAI_LABS_TEAM_URL, PRODUCT_BYLINE, PRODUCT_NAME } from "@/lib/site";

type NavLink =
  | { label: string; to: string }
  | { label: string; href: string; external: true };

const nav: NavLink[] = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Case Studies", to: "/case-studies" },
  { label: "Pricing", to: "/pricing" },
  { label: "About", to: "/about" },
  { label: "Resources", to: "/blog" },
  { label: "Team", href: BAJPAI_LABS_TEAM_URL, external: true },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`glass-nav sticky top-0 z-40 ${scrolled ? "glass-nav--scrolled" : ""}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4">
        <Link to="/" className="flex items-center gap-3">
          <div className="relative h-9 w-9 overflow-hidden rounded-full border border-[var(--gold)]/40 bg-[var(--parchment)] shadow-[0_2px_8px_rgb(22_18_10/0.04)]">
            <BrandLogo className="h-full w-full object-cover" priority />
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-display text-base tracking-tight text-[var(--charcoal)] sm:text-lg">
              {PRODUCT_NAME}
            </span>
            <span className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--gold)]">
              {PRODUCT_BYLINE}
            </span>
          </div>
        </Link>
        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((item) =>
            "external" in item ? (
              <a
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-[var(--parchment)] hover:text-foreground"
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.to}
                to={item.to}
                className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-[var(--parchment)] hover:text-foreground"
                activeProps={{
                  className:
                    "rounded-md px-3 py-2 text-sm font-semibold text-foreground bg-[var(--parchment)]",
                }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>
        <div className="hidden lg:block">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground glow transition-transform hover:-translate-y-0.5"
          >
            Schedule a Consultation
          </Link>
        </div>
        <button
          className="rounded-md p-2 text-foreground lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-border bg-[var(--vellum)] lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-4">
            {nav.map((item) =>
              "external" in item ? (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-2.5 text-sm font-medium text-foreground hover:bg-[var(--parchment)]"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-2.5 text-sm font-medium text-foreground hover:bg-[var(--parchment)]"
                >
                  {item.label}
                </Link>
              ),
            )}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-md bg-primary px-4 py-2.5 text-center text-sm font-semibold text-primary-foreground"
            >
              Schedule a Consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}
