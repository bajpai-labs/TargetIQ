import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Target, Layers, Network, Zap } from "lucide-react";
import { PageSection } from "@/components/page-section";
import { SectionBackdrop } from "@/components/section-backdrop";
import { SiteLayout } from "@/components/site-layout";
import { BAJPAI_LABS_URL, PRODUCT_BYLINE, PRODUCT_NAME, SITE_ORIGIN } from "@/lib/site";
import { pageSocialHead } from "@/lib/seo";

export const Route = createFileRoute("/about")({
  head: () =>
    pageSocialHead({
      title: `About TargetIQ: Bajpai Labs Disease Target Discovery Engine`,
      description: `What ${PRODUCT_NAME} is, why it exists, and the mission behind Bajpai Labs' multi-omics target discovery platform. Gate-ready dossiers, not gene lists.`,
      canonical: `${SITE_ORIGIN}/about`,
      ogTitle: `About ${PRODUCT_NAME} by Bajpai Labs`,
      ogDescription: `${PRODUCT_NAME} exists to rank druggable targets before expensive chemistry begins. Multi-omics intelligence from Bajpai Labs.`,
    }),
  component: AboutPage,
});

const pillars = [
  {
    icon: Target,
    title: "Rank before chemistry",
    body: "Surface the 8 to 15 targets worth investing in, not hundreds of undifferentiated GWAS hits. Every engagement is scoped to a portfolio decision.",
  },
  {
    icon: Layers,
    title: "Evidence dossiers, not dashboards",
    body: "From multi-omics integration through druggability scoring and competitive landscape: one ranked deliverable with gate-ready documentation.",
  },
  {
    icon: Zap,
    title: "Portfolio gate timelines",
    body: "Typical engagements deliver in 2–4 weeks with full evidence dossiers. Built for teams that cannot wait six months for internal bioinformatics.",
  },
  {
    icon: Network,
    title: "Knowledge-graph depth",
    body: "GNNs over curated biological networks surface targets missed by single-source GWAS or expression analysis alone.",
  },
];

function AboutPage() {
  return (
    <SiteLayout>
      <section className="relative overflow-hidden border-b border-border/40 section-tone-vellum">
        <div className="section-grid-overlay pointer-events-none absolute inset-0 z-[1] opacity-40" aria-hidden />
        <SectionBackdrop variant="hero-field" className="z-[2]" />
        <div className="section-inner relative z-10 py-20 lg:py-28">
          <div className="max-w-3xl">
            <div className="font-mono text-[11px] uppercase tracking-[0.28em] text-[var(--gold)]">
              About · {PRODUCT_BYLINE}
            </div>
            <h1 className="mt-3 font-display text-4xl tracking-tight text-[var(--charcoal)] sm:text-5xl">
              Target discovery built for{" "}
              <span className="gold-gradient">portfolio gates</span>, not gene lists.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              {PRODUCT_NAME} is Bajpai Labs&apos; disease target discovery engine: a multi-omics
              AI platform that ranks druggable targets with full evidence dossiers before any
              chemistry or screening begins.
            </p>
          </div>
        </div>
      </section>

      <PageSection
        eyebrow="Our aim"
        title="Get teams to the right target decision faster."
        description={`${PRODUCT_NAME} exists because most discovery programs waste capital pursuing targets without concordant genetic evidence, druggability assessment, or competitive context. We replace internal gene lists with ranked, gate-ready dossiers.`}
        tone="parchment"
        backdrop="approach-arcs"
        folioTop
      >
        <div className="grid gap-6 md:grid-cols-2">
          {pillars.map((p, i) => (
            <div key={p.title} className="glass-elevated flex gap-4 p-6">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border bg-[var(--vellum)]">
                <p.icon className="h-5 w-5 text-[var(--gold)]" />
              </span>
              <div>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-[10px] text-[var(--gold)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="font-semibold text-foreground">{p.title}</div>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              </div>
            </div>
          ))}
        </div>
      </PageSection>

      <PageSection
        eyebrow="Mission"
        title="Bridge multi-omics intelligence and portfolio decisions."
        tone="charcoal-deep"
        backdrop="lab-graph"
        folioTop
        align="center"
      >
        <blockquote className="mx-auto max-w-3xl text-center font-display text-2xl font-medium leading-snug text-[var(--vellum)] sm:text-3xl">
          &ldquo;Enable discovery teams to commit chemistry budget only to targets that
          multi-omics evidence, druggability scoring, and competitive analysis say are worth the investment.&rdquo;
        </blockquote>
      </PageSection>

      <PageSection
        eyebrow="What we believe"
        title="The principles behind every target ranking."
        tone="vellum"
        backdrop="catalog-lattice"
        folioTop
      >
        <ul className="grid gap-5 md:grid-cols-2">
          {[
            [
              "Concordance over single-source",
              "A target supported by GWAS, expression, and pathway evidence beats a lone GWAS hit every time.",
            ],
            [
              "Gate-ready accountability",
              "Evidence dossiers with decision frameworks. Not spreadsheet exports.",
            ],
            [
              "Multi-omics + GNN methods",
              "Knowledge-graph neural networks composed with published genetic and pathway techniques from Bajpai Labs.",
            ],
            [
              "Senior-led engagement",
              "Direct access to the architects who designed the engine, from scoping through dossier delivery.",
            ],
          ].map(([title, body]) => (
            <li key={title} className="glass-elevated p-6">
              <div className="font-semibold text-[var(--charcoal)]">{title}</div>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
            </li>
          ))}
        </ul>
      </PageSection>

      <PageSection
        eyebrow="Part of Bajpai Labs"
        title="Early-stage intelligence for drug discovery."
        description={`${PRODUCT_NAME} is Bajpai Labs' target discovery platform—upstream of chemistry engines like HelixForge and GeneForge. The same research depth and production accountability that drives the parent lab drives every TargetIQ engagement.`}
        tone="parchment-2"
        backdrop="fabric-mesh"
        folioTop
      >
        <div className="flex flex-wrap gap-3">
          <a
            href={BAJPAI_LABS_URL}
            className="inline-flex items-center gap-2 rounded-md border border-border bg-[var(--vellum)] px-5 py-3 text-sm font-semibold text-foreground hover:border-[var(--gold)]/40"
          >
            Visit bajpailabs.com <ArrowRight className="h-4 w-4" />
          </a>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground glow hover:opacity-90"
          >
            Start a project <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </PageSection>
    </SiteLayout>
  );
}
