import { createFileRoute, Link } from "@tanstack/react-router";
import { Target, Network, FlaskConical, LineChart, ArrowRight, CheckCircle2, Brain, Database, Dna } from "lucide-react";
import { PRODUCT_NAME, SITE_ORIGIN } from "@/lib/site";
import { pageSocialHead } from "@/lib/seo";
import { SiteLayout } from "@/components/site-layout";

export const Route = createFileRoute("/services")({
  head: () =>
    pageSocialHead({
      title: `Target Discovery Services: Multi-Omics, Druggability, Pathway Mapping | ${PRODUCT_NAME}`,
      description: `Four AI-powered target discovery capabilities: multi-omics integration, druggability assessment, resistance pathway mapping, and portfolio gate packages. Delivered in 2 to 4 weeks.`,
      canonical: `${SITE_ORIGIN}/services`,
      ogTitle: `${PRODUCT_NAME} Target Discovery Services`,
      ogDescription: `Multi-omics target discovery from indication brief to ranked dossiers. Engagements from $75K.`,
    }),
  component: ServicesPage,
});

const services = [
  {
    icon: Target,
    title: "Multi-Omics Target Discovery",
    problem: "Identifying druggable disease targets with concordant genetic, expression, and pathway evidence across hundreds of candidates.",
    steps: [
      "Ingest GWAS, bulk/scRNA-seq, proteomics, and client proprietary cohorts",
      "Knowledge-graph GNN scoring over gene–pathway–disease networks",
      "Genetic colocalization and Mendelian randomization causal scoring",
      "Deliver 8–15 priority targets with full evidence dossiers",
    ],
    output: "Ranked target list + evidence dossiers + pathway maps + validation playbook",
    timeline: "2–3 weeks",
    price: "Engagements typically $75K–$200K per program",
  },
  {
    icon: Network,
    title: "Druggability & Safety Assessment",
    problem: "Filtering target lists by structural tractability, modality fit, and essential-gene safety before portfolio investment.",
    steps: [
      "AlphaFold/PDB structural analysis and binding pocket scoring",
      "Modality fit assessment (small molecule, biologic, degrader, gene therapy)",
      "Essential-gene and tissue liability filtering (DepMap, GTEx, knockout phenotypes)",
      "Competitive landscape brief per target (trials, patents, approved drugs)",
    ],
    output: "Druggability scores + safety tiers + competitive briefs per target",
    timeline: "1–2 weeks",
    price: "Engagements typically $50K–$125K per program",
  },
  {
    icon: FlaskConical,
    title: "Resistance Pathway Mapping",
    problem: "Mapping acquired resistance mechanisms and combination targets after targeted therapy failure in oncology.",
    steps: [
      "Integrate post-progression biopsy RNA-seq with public resistance cohorts",
      "Resistance subtype clustering and pathway bypass detection via GNN",
      "Combination target scoring with synergy and orthogonality analysis",
      "Biomarker stratification panel for clinical protocol support",
    ],
    output: "Resistance map + combination targets + biomarker panel + protocol appendix",
    timeline: "2–3 weeks",
    price: "Engagements typically $175K–$300K per program",
  },
  {
    icon: LineChart,
    title: "Portfolio Gate Decision Packages",
    problem: "Converting target analysis into investment-committee-ready deliverables with decision frameworks.",
    steps: [
      "Assemble evidence dossiers with concordance tiers per target",
      "Build competitive white-space matrix and risk assessment",
      "Draft portfolio gate presentation with budget allocation recommendations",
      "Include validation roadmap and recommended experiments per priority target",
    ],
    output: "Gate deck + dossier pack + decision framework + validation roadmap",
    timeline: "1–2 weeks (often bundled with discovery)",
    price: "Engagements typically $100K–$250K per program",
  },
];

const methods = [
  { icon: Dna, title: "Multi-omics fusion", body: "GWAS, eQTL, scRNA-seq, proteomics cross-layer integration." },
  { icon: Brain, title: "Knowledge-graph GNNs", body: "Disease signal propagation over Reactome, STRING, and DisGeNET networks." },
  { icon: Database, title: "Druggability models", body: "Structure, modality fit, and safety calibrated against approved drug precedents." },
  { icon: Network, title: "Pathway reconstruction", body: "Bypass detection, resistance subtyping, and causal pathway mapping." },
];

function ServicesPage() {
  return (
    <SiteLayout>
      <section className="border-b border-border bg-[var(--parchment)]">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-secondary">Services</div>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Four target intelligence capabilities. Built for portfolio gates.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
            Every engagement returns ranked targets with evidence dossiers plus the gate-ready
            documentation your committee needs to allocate budget.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl space-y-12 px-6 py-20">
        {services.map((s, i) => (
          <article key={s.title} className="grid gap-8 rounded-2xl border border-border bg-background p-8 shadow-[var(--shadow-soft)] md:grid-cols-[1fr_1.4fr] md:p-10">
            <div>
              <div className="font-mono text-xs text-muted-foreground">Service 0{i + 1}</div>
              <div className="mt-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <s.icon className="h-6 w-6" />
              </div>
              <h2 className="mt-5 text-2xl font-bold tracking-tight text-foreground">{s.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.problem}</p>
              <dl className="mt-6 space-y-3 text-sm">
                <div className="flex justify-between border-t border-border pt-3"><dt className="text-muted-foreground">Timeline</dt><dd className="font-semibold text-foreground">{s.timeline}</dd></div>
                <div className="flex justify-between border-t border-border pt-3"><dt className="text-muted-foreground">Starting price</dt><dd className="font-semibold text-foreground">{s.price}</dd></div>
              </dl>
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Process</div>
              <ol className="mt-3 space-y-3">
                {s.steps.map((step, idx) => (
                  <li key={step} className="flex gap-3 text-sm text-foreground">
                    <span className="font-mono text-xs text-primary">{String(idx + 1).padStart(2, "0")}</span>
                    <span className="leading-relaxed">{step}</span>
                  </li>
                ))}
              </ol>
              <div className="mt-6 rounded-lg border border-border bg-muted/40 p-4">
                <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Deliverable</div>
                <div className="mt-1 text-sm text-foreground">{s.output}</div>
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="border-y border-border bg-foreground text-background">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Methodology</div>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">The science behind target ranking.</h2>
              <p className="mt-4 max-w-md text-background/70">
                We compose published multi-omics methods with knowledge-graph GNNs and
                druggability scoring calibrated on portfolio gate outcomes.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {methods.map((m) => (
                <div key={m.title} className="rounded-xl border border-background/10 bg-background/5 p-5">
                  <m.icon className="h-5 w-5 text-accent" />
                  <div className="mt-3 font-semibold">{m.title}</div>
                  <p className="mt-1 text-sm text-background/70">{m.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-2xl border border-border bg-background p-8 md:p-10">
          <h2 className="text-2xl font-bold tracking-tight text-foreground">Custom & Enterprise Programs</h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Multi-indication franchise mapping, proprietary cohort integration, real-time collaboration
            with your bioinformatics team, and bespoke GNN training on internal knowledge graphs.
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {["Multi-indication franchise mapping", "Proprietary cohort integration", "Real-time scientist collaboration", "Custom knowledge-graph model training"].map((f) => (
              <li key={f} className="flex items-center gap-2 text-sm text-foreground"><CheckCircle2 className="h-4 w-4 text-secondary" />{f}</li>
            ))}
          </ul>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90">
            Contact sales <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
