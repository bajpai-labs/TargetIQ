import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, FileText, BookOpen } from "lucide-react";
import { SiteLayout } from "@/components/site-layout";
import { PRODUCT_NAME, SITE_ORIGIN } from "@/lib/site";
import { pageSocialHead } from "@/lib/seo";

export const Route = createFileRoute("/blog")({
  head: () =>
    pageSocialHead({
      title: `Drug Discovery Resources and Insights | ${PRODUCT_NAME}`,
      description: `Articles, white papers, and technical resources on AI-powered drug discovery, molecular docking, virtual screening, and gene therapy sequence design by Bajpai Labs.`,
      canonical: `${SITE_ORIGIN}/blog`,
      ogTitle: `${PRODUCT_NAME} Resources`,
      ogDescription: `Insights from the frontier of computational drug discovery and AI-powered molecular design.`,
    }),
  component: BlogPage,
});

const posts = [
  { tag: "AI/ML", title: "AI in Drug Discovery: How Machine Learning Is Accelerating Timelines", read: "8 min", excerpt: "A grounded look at where ML actually moves the needle and where it still does not." },
  { tag: "Methods", title: "Molecular Docking 101: Virtual Screening for Small Molecules", read: "12 min", excerpt: "What docking is, what it can predict, and how modern scoring functions have shifted in the last 5 years." },
  { tag: "Industry", title: "Why 90% of Drug Candidates Fail (And How AI Changes That)", read: "10 min", excerpt: "The attrition math behind pharma R&D and where computational screening compresses the funnel." },
  { tag: "Gene Therapy", title: "Gene Therapy Design: CRISPR Guide Sequence Optimization", read: "9 min", excerpt: "Off-target prediction, on-target activity, and the trade-offs that decide a payload." },
  { tag: "Economics", title: "The True Cost of Drug Discovery: A Data-Driven Analysis", read: "11 min", excerpt: "Where the $2.6B per-drug number comes from, and which line items computational methods can erase." },
];

const resources = [
  { icon: FileText, title: "White paper: AI-driven small molecule screening", body: "Benchmarks on internal datasets vs. published baselines." },
  { icon: BookOpen, title: "Technical documentation", body: "Methods, scoring functions, and data formats we accept." },
  { icon: FileText, title: "Publications", body: "Peer-reviewed work from our group on Google Scholar." },
];

function BlogPage() {
  return (
    <SiteLayout>
      <section className="border-b border-border bg-[var(--parchment)]">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-secondary">Resources</div>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Insights from the frontier of computational drug discovery.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
            Working notes, white papers, and field guides for teams evaluating AI in their pipeline.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="text-2xl font-bold tracking-tight text-foreground">Latest articles</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {posts.map((p) => (
            <article key={p.title} className="group flex flex-col rounded-2xl border border-border bg-background p-7 transition hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]">
              <div className="flex items-center gap-2 text-xs">
                <span className="rounded-full bg-secondary/10 px-2.5 py-1 font-semibold text-secondary">{p.tag}</span>
                <span className="text-muted-foreground">{p.read} read</span>
              </div>
              <h3 className="mt-4 text-lg font-semibold leading-snug text-foreground">{p.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{p.excerpt}</p>
              <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                Read article <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </article>
          ))}
        </div>

        <h2 className="mt-20 text-2xl font-bold tracking-tight text-foreground">Downloads & references</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {resources.map((r) => (
            <div key={r.title} className="rounded-2xl border border-border bg-muted/40 p-6">
              <r.icon className="h-5 w-5 text-primary" />
              <div className="mt-4 font-semibold text-foreground">{r.title}</div>
              <p className="mt-2 text-sm text-muted-foreground">{r.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 overflow-hidden rounded-3xl border border-border bg-[var(--charcoal-deep)] p-10 text-[var(--vellum)] sm:p-14">
          <h2 className="max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">Want the white paper before it's public?</h2>
          <p className="mt-4 max-w-xl text-primary-foreground/80">We share early drafts with active and prospective clients.</p>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-md bg-background px-5 py-3 text-sm font-semibold text-foreground hover:opacity-90">
            Request access <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}