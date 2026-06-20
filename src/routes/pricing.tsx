import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/site-layout";
import { PRODUCT_NAME, SITE_ORIGIN } from "@/lib/site";
import { pageSocialHead } from "@/lib/seo";

export const Route = createFileRoute("/pricing")({
  head: () =>
    pageSocialHead({
      title: `Target Discovery Pricing: Engagement Packages | ${PRODUCT_NAME}`,
      description: `Transparent engagement pricing for AI-powered target discovery. Programs range from $75K to $300K depending on indication and scope. 2 to 4 week delivery.`,
      canonical: `${SITE_ORIGIN}/pricing`,
      ogTitle: `${PRODUCT_NAME} Pricing`,
      ogDescription: `Transparent project packages for multi-omics target discovery. Engagements from $75K per program.`,
    }),
  component: PricingPage,
});

const tiers = [
  {
    name: "Explorer",
    scope: "Single indication, public multi-omics data, up to 500 genes evaluated",
    price: "$75K",
    timeline: "2 weeks",
    features: ["Multi-omics integration", "Ranked target list (top 8)", "Druggability + safety scores", "Evidence summary per target", "Email support"],
  },
  {
    name: "Professional",
    scope: "Multi-omics + proprietary cohorts, knowledge-graph GNN, gate package",
    price: "$175K",
    timeline: "3 weeks",
    features: ["Everything in Explorer", "Up to 15 priority targets with dossiers", "Competitive landscape briefs", "Portfolio gate presentation deck", "Validation roadmap", "Priority support"],
    featured: true,
  },
  {
    name: "Enterprise",
    scope: "Multi-indication franchise, resistance mapping, custom knowledge graphs",
    price: "Custom",
    timeline: "Flexible",
    features: ["Everything in Professional", "Dedicated project lead", "Proprietary cohort integration", "Resistance pathway mapping", "Quarterly model refinement", "On-site scientist exchange"],
  },
];

const faqs = [
  ["How do you validate target rankings?", "Across closed engagements, 75 to 90 percent of Priority A targets were supported by independent clinical or genetic evidence at portfolio review. Rankings are calibrated against gate outcomes, not public benchmarks alone."],
  ["What data formats do you accept?", "GWAS summary statistics, bulk and single-cell RNA-seq (FASTQ or count matrices), proteomics tables, and structured CSV gene lists. We integrate public repositories (GEO, Open Targets) and client proprietary cohorts under NDA."],
  ["Can you reconcile with our internal target lists?", "Yes. We produce reconciliation reports showing which internal hits are upgraded, downgraded, or confirmed—with documented rationale for each change."],
  ["What's included in an evidence dossier?", "Each dossier covers genetic evidence, expression context, pathway role, druggability score, safety tier, competitive landscape, evidence concordance tier, and recommended validation experiments."],
  ["Do you sign IP and confidentiality agreements?", "Always. We sign a mutual NDA before any technical discussion. All generated analysis and dossiers belong to the client by default."],
];

function PricingPage() {
  return (
    <SiteLayout>
      <section className="border-b border-border bg-[var(--parchment)]">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-secondary">Pricing</div>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Project-based pricing. Gate-ready deliverables.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
            Each tier is a fixed-fee engagement with ranked targets and evidence dossiers.
            Resistance mapping, proprietary cohort integration, and custom GNN training are quoted per scope.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-6 md:grid-cols-3">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={
                "relative flex flex-col rounded-2xl border p-8 " +
                (t.featured
                  ? "border-primary bg-foreground text-background shadow-[var(--shadow-elegant)]"
                  : "border-border bg-background text-foreground shadow-[var(--shadow-soft)]")
              }
            >
              {t.featured && (
                <div className="absolute -top-3 left-8 rounded-full bg-accent px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-accent-foreground">
                  Most popular
                </div>
              )}
              <div className="text-sm font-semibold uppercase tracking-wider opacity-80">{t.name}</div>
              <div className="mt-6 text-4xl font-bold tracking-tight">{t.price}</div>
              <div className={"mt-1 text-sm " + (t.featured ? "text-background/70" : "text-muted-foreground")}>
                {t.timeline} delivery
              </div>
              <p className={"mt-4 text-sm " + (t.featured ? "text-background/70" : "text-muted-foreground")}>{t.scope}</p>
              <ul className="mt-6 space-y-3 text-sm">
                {t.features.map((f) => (
                  <li key={f} className="flex gap-3">
                    <Check className={"mt-0.5 h-4 w-4 shrink-0 " + (t.featured ? "text-accent" : "text-secondary")} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className={
                  "mt-8 inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-semibold " +
                  (t.featured ? "bg-accent text-accent-foreground hover:opacity-90" : "bg-primary text-primary-foreground hover:opacity-90")
                }
              >
                {t.name === "Enterprise" ? "Contact sales" : "Start project"} <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-border bg-muted/40 p-6 text-sm text-muted-foreground">
          <span className="font-semibold text-foreground">Add-ons:</span> Resistance pathway mapping, proprietary cohort integration, investor diligence packages, and custom knowledge-graph model training are quoted separately.
        </div>
      </section>

      <section className="border-t border-border bg-background">
        <div className="mx-auto max-w-3xl px-6 py-20">
          <h2 className="text-3xl font-bold tracking-tight text-foreground">Frequently asked questions</h2>
          <dl className="mt-10 divide-y divide-border">
            {faqs.map(([q, a]) => (
              <div key={q} className="py-6">
                <dt className="text-base font-semibold text-foreground">{q}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">{a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </SiteLayout>
  );
}
