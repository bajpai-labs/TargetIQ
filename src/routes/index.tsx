import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Brain,
  CheckCircle2,
  Clock,
  Database,
  DollarSign,
  Dna,
  FlaskConical,
  LineChart,
  Network,
  RefreshCw,
  ShieldCheck,
  Target,
  Upload,
} from "lucide-react";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageSection } from "@/components/page-section";
import { SectionBackdrop } from "@/components/section-backdrop";
import { SiteLayout } from "@/components/site-layout";
import {
  HOME_DEFINITIONS,
  HOME_KEY_FACTS,
  TARGETIQ_FAQS,
} from "@/lib/aeo-content";
import {
  homeJsonLdGraph,
  pageSocialHead,
} from "@/lib/seo";
import {
  PRODUCT_BYLINE,
  PRODUCT_NAME,
  SITE_META_DESCRIPTION,
  SITE_META_KEYWORDS,
  SITE_META_TITLE,
  SITE_ORIGIN,
} from "@/lib/site";

const homeCanonical = `${SITE_ORIGIN}/`;

export const Route = createFileRoute("/")({
  head: () =>
    pageSocialHead({
      title: SITE_META_TITLE,
      description: SITE_META_DESCRIPTION,
      canonical: homeCanonical,
      keywords: SITE_META_KEYWORDS,
    }),
  component: Index,
});

const designChoices = [
  {
    title: "Rank before chemistry",
    body: "Most teams screen against the wrong target. TargetIQ optimizes for decision quality: surfacing the 8 to 15 targets worth investing in, not hundreds of GWAS hits.",
  },
  {
    title: "Evidence-concordant scoring",
    body: "Targets are ranked by concordance across genetic, expression, and pathway layers—not single-source lists that fail at portfolio gate.",
  },
  {
    title: "Gate-ready dossiers",
    body: "Every priority target ships with a full evidence dossier, competitive brief, and validation plan your committee can act on immediately.",
  },
  {
    title: "Direct line to leadership",
    body: "You work with the architects who built the pipeline, not a sales team relaying requirements to a black box.",
  },
];

const advancedFeatures = [
  {
    icon: Network,
    title: "Knowledge-graph GNNs",
    body: "Graph neural networks over curated gene–pathway–disease networks propagate disease signals and surface targets missed by single-omics analysis.",
  },
  {
    icon: Dna,
    title: "Multi-omics integration",
    body: "GWAS, bulk and single-cell RNA-seq, proteomics, and eQTL colocalization fused into composite disease relevance scores.",
  },
  {
    icon: Target,
    title: "Druggability scoring",
    body: "Structural tractability, modality fit, known ligand classes, and AlphaFold pocket analysis for every ranked target.",
  },
  {
    icon: Brain,
    title: "Pathway analysis",
    body: "Disease pathway reconstruction, bypass detection, and resistance subtype mapping for oncology and complex indications.",
  },
  {
    icon: Database,
    title: "Safety & liability filters",
    body: "Essential-gene databases, knockout phenotypes, and tissue expression breadth remove high-liability targets pre-gate.",
  },
  {
    icon: LineChart,
    title: "Competitive landscape",
    body: "Clinical trial, patent, and approved-drug mapping per target—white-space analysis included in every dossier.",
  },
];

function Index() {
  const jsonLd = homeJsonLdGraph({
    faqs: TARGETIQ_FAQS,
    definitions: HOME_DEFINITIONS,
    keyFacts: HOME_KEY_FACTS,
  });

  return (
    <SiteLayout>
      <JsonLd data={jsonLd} id="ld-json-home" />
      {/* ── Hero ─────────────────────────────────────── */}
      <section
        id="top"
        className="relative overflow-hidden section-tone-vellum pt-[calc(4rem+1.75rem)] pb-16 sm:pb-20 md:pt-[calc(4rem+2.5rem)] md:pb-24"
      >
        {/* base grid overlay */}
        <div className="section-grid-overlay pointer-events-none absolute inset-0 z-[1] opacity-30" aria-hidden />

        {/* ── existing hero-field backdrop (right orbital rings + warm glow) ── */}
        <SectionBackdrop variant="hero-field" className="z-[2]" />

        {/* ── warm radial — right-biased ── */}
        <div
          className="pointer-events-none absolute -right-32 -top-32 z-[1] hidden h-[560px] w-[560px] rounded-full opacity-60 lg:block"
          style={{ background: "radial-gradient(ellipse at center, rgb(184 134 11 / 0.10) 0%, transparent 68%)" }}
          aria-hidden
        />

        {/* ── top-left orbital arcs (mirror of right-side rings) ── */}
        <svg
          aria-hidden
          className="pointer-events-none absolute -left-24 -top-24 z-[2] hidden h-[380px] w-[380px] text-[var(--gold)] opacity-[0.13] lg:block"
          viewBox="0 0 200 200"
          fill="none"
        >
          <circle cx="56" cy="56" r="84" stroke="currentColor" strokeWidth="0.7" />
          <circle cx="56" cy="56" r="58" stroke="currentColor" strokeWidth="0.5" opacity="0.7" />
          <circle cx="56" cy="56" r="34" stroke="currentColor" strokeWidth="0.4" opacity="0.5" />
          <circle cx="56" cy="56" r="14" stroke="currentColor" strokeWidth="0.3" opacity="0.35" />
        </svg>

        {/* ── hex lattice — left panel, very faint ── */}
        <svg
          aria-hidden
          className="pointer-events-none absolute left-0 top-0 z-[2] hidden h-full w-[46%] text-[var(--gold)] opacity-[0.055] lg:block"
          viewBox="0 0 400 600"
          preserveAspectRatio="xMidYMid slice"
          fill="none"
        >
          {Array.from({ length: 8 }).map((_, row) =>
            Array.from({ length: 6 }).map((_, col) => {
              const r = 28;
              const h = r * 0.866;
              const cx = col * h * 2 + (row % 2 === 1 ? h : 0) + h;
              const cy = row * r * 1.5 + r;
              const pts = Array.from({ length: 6 })
                .map((_, i) => {
                  const a = (Math.PI / 3) * i - Math.PI / 6;
                  return `${cx + r * Math.cos(a)},${cy + r * Math.sin(a)}`;
                })
                .join(" ");
              return (
                <polygon
                  key={`${row}-${col}`}
                  points={pts}
                  stroke="currentColor"
                  strokeWidth="0.7"
                  fill="none"
                />
              );
            })
          )}
        </svg>

        {/* ── molecular compound graph — bottom-left ── */}
        <svg
          aria-hidden
          className="pointer-events-none absolute bottom-0 left-[2%] z-[2] hidden h-[55%] w-[30%] text-[var(--charcoal)] opacity-[0.09] md:block"
          viewBox="0 0 280 200"
          fill="none"
        >
          {/* edges */}
          {([
            [50,100,120,60],[120,60,200,75],[200,75,248,138],
            [200,75,218,28],[120,60,138,10],[50,100,78,160],
            [78,160,158,178],[158,178,248,138],[120,60,50,100],
            [200,75,158,178],
          ] as [number,number,number,number][]).map(([x1,y1,x2,y2],i) => (
            <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth="1" />
          ))}
          {/* double-bond parallel line */}
          <line x1="122" y1="57" x2="198" y2="72" stroke="currentColor" strokeWidth="0.6" opacity="0.55" />
          {/* nodes */}
          {([[50,100],[120,60],[200,75],[248,138],[218,28],[138,10],[78,160],[158,178]] as [number,number][]).map(([x,y],i) => (
            <circle key={i} cx={x} cy={y} r="5" fill="currentColor" opacity="0.55" />
          ))}
        </svg>

        {/* ── data-node scatter — right-mid, gold dots + thin connectors ── */}
        <svg
          aria-hidden
          className="pointer-events-none absolute right-[6%] top-[28%] z-[2] hidden h-[220px] w-[220px] text-[var(--gold)] opacity-[0.20] xl:block"
          viewBox="0 0 100 100"
          fill="none"
        >
          {([
            [20,30],[45,18],[72,34],[86,60],
            [62,76],[30,72],[14,54],[50,50],
          ] as [number,number][]).map(([x,y],i) => (
            <circle key={i} cx={x} cy={y} r="2" fill="currentColor" />
          ))}
          {([
            [20,30,45,18],[45,18,72,34],[72,34,86,60],
            [86,60,62,76],[62,76,30,72],[30,72,14,54],
            [14,54,20,30],[50,50,45,18],[50,50,72,34],[50,50,62,76],
          ] as [number,number,number,number][]).map(([x1,y1,x2,y2],i) => (
            <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth="0.5" opacity="0.55" />
          ))}
        </svg>

        {/* ── helix arc stripe — center background ── */}
        <svg
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-[45%] w-full text-[var(--gold)] opacity-[0.045]"
          viewBox="0 0 1200 280"
          preserveAspectRatio="none"
          fill="none"
        >
          <path
            d="M0 200 C100 120 200 240 300 160 S500 80 600 140 S800 220 900 140 S1100 60 1200 120"
            stroke="currentColor"
            strokeWidth="1.2"
          />
          <path
            d="M0 230 C100 150 200 270 300 190 S500 110 600 170 S800 250 900 170 S1100 90 1200 150"
            stroke="currentColor"
            strokeWidth="0.7"
            opacity="0.6"
          />
          {/* rungs connecting the two strands */}
          {Array.from({ length: 14 }).map((_, i) => {
            const x = 80 + i * 82;
            return <line key={i} x1={x} y1={195} x2={x} y2={225} stroke="currentColor" strokeWidth="0.5" opacity="0.4" />;
          })}
        </svg>

        <div className="section-inner relative z-10">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-16">

            {/* left: copy */}
            <div className="text-center lg:text-left">
              <p className="inline-flex items-center justify-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.28em] text-[var(--gold)] lg:justify-start">
                <span className="hero-pulse-dot" aria-hidden />
                {PRODUCT_BYLINE} · Target discovery
              </p>
              <h1 className="mt-4 font-display text-h1 text-[var(--charcoal)]">
                Ranked targets{" "}
                <span className="gold-gradient block sm:inline-block">before chemistry</span>{" "}
                in 2–4 weeks.
              </h1>
              <p className="mx-auto mt-5 max-w-[52ch] text-base leading-relaxed text-foreground/70 md:text-lg lg:mx-0">
                {PRODUCT_NAME} replaces months of internal bioinformatics with a multi-omics AI engine that
                delivers 8–15 druggable targets—with full evidence dossiers—before a single screen runs.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">
                <Link
                  to="/contact"
                  className="group inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-[var(--charcoal-deep)] px-6 py-3 text-sm font-medium text-[var(--vellum)] transition-colors hover:bg-[var(--charcoal)] sm:w-auto"
                >
                  Schedule a Consultation
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md border-2 border-[var(--gold)] px-6 py-3 text-sm font-medium text-[var(--charcoal)] transition-colors hover:bg-[var(--parchment-2)] sm:w-auto"
                >
                  View Services
                </Link>
              </div>
            </div>

            {/* right: delivery stack — mirrors HeroCapabilityStack from Bajpai Labs */}
            <div className="mx-auto w-full max-w-md lg:max-w-none lg:justify-self-end">
              <div className="glass-elevated card-bevel-profile relative overflow-hidden rounded-xl border border-[var(--gold)]/25 bg-[var(--parchment)]/80 p-5 sm:p-6">
                {/* corner glow */}
                <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-[var(--gold)]/8 blur-2xl" aria-hidden />
                <p className="relative font-mono text-[10px] uppercase tracking-[0.28em] text-[var(--gold)]">
                  Delivery pipeline
                </p>
                <ul className="relative mt-4 divide-y divide-[var(--gold)]/15">
                  {[
                    {
                      step: "01",
                      label: "Multi-Omics Integration",
                      detail: "GWAS · scRNA-seq · proteomics · knowledge-graph GNN scoring",
                      icon: Dna,
                    },
                    {
                      step: "02",
                      label: "Druggability & Safety",
                      detail: "Structural tractability · liability filters · competitive landscape",
                      icon: Target,
                    },
                    {
                      step: "03",
                      label: "Ranked Dossiers",
                      detail: "8–15 priority targets · evidence tables · portfolio gate deck",
                      icon: LineChart,
                    },
                  ].map(({ step, label, detail, icon: Icon }) => (
                    <li key={step}>
                      <div className="flex items-start gap-3 rounded-lg px-1 py-3.5">
                        <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[var(--gold)]/20 bg-[var(--vellum)]">
                          <Icon className="h-4 w-4 text-[var(--gold)]" aria-hidden />
                        </span>
                        <span className="min-w-0 flex-1 text-left">
                          <span className="flex items-baseline gap-2 text-sm font-medium text-[var(--charcoal)]">
                            {label}
                            <span className="font-mono text-[9px] text-[var(--gold)]/70">{step}</span>
                          </span>
                          <span className="mt-0.5 block text-xs leading-relaxed text-muted-foreground">
                            {detail}
                          </span>
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="relative mt-4 flex items-center gap-2 border-t border-border/50 pt-4 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                  <span className="hero-pulse-dot scale-75" aria-hidden />
                  Research-grade · AI-accelerated · 2–4 weeks
                </div>
              </div>
            </div>

          </div>

          {/* ── stats strip (below the 2-col grid, like HeroMetricsStrip) ── */}
          <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-border/60 pt-8 sm:mt-14 lg:mt-16">
            {[
              ["847+", "Targets evaluated per program"],
              ["3–6×", "Faster than internal bioinformatics"],
              ["2–4 wks","Typical delivery"],
            ].map(([val, label]) => (
              <div key={label} className="text-center">
                <dt className="font-display text-2xl font-bold text-[var(--charcoal)] sm:text-3xl">{val}</dt>
                <dd className="mt-1 text-xs text-muted-foreground">{label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <PageSection
        id="problem"
        eyebrow="The Problem"
        title="Most programs fail because the wrong target was chosen—not because chemistry was slow."
        tone="charcoal"
        backdrop="lab-graph"
        folioTop
      >
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              icon: DollarSign,
              title: "$400K+ internal cost",
              body: "FTE bioinformatics teams spend months producing GWAS gene lists without druggability, safety, or competitive context.",
            },
            {
              icon: Clock,
              title: "4–6 months lost",
              body: "Lengthy internal debates and incomplete evidence delay portfolio gates and push programs past funding milestones.",
            },
            {
              icon: ShieldCheck,
              title: "Gene lists ≠ decisions",
              body: "200+ GWAS hits without dossiers, pathway context, or gate-ready deliverables leave leadership unable to commit budget.",
            },
          ].map((c) => (
            <div key={c.title} className="rounded-xl border border-[var(--gold)]/20 bg-[var(--charcoal-deep)] p-6">
              <c.icon className="h-6 w-6 text-[var(--gold)]" />
              <div className="mt-4 text-lg font-semibold text-[var(--vellum)]">{c.title}</div>
              <p className="mt-2 text-sm leading-relaxed text-[var(--vellum)]/65">{c.body}</p>
            </div>
          ))}
        </div>
      </PageSection>

      <PageSection
        id="solution"
        eyebrow="The Solution"
        title="A multi-omics target discovery engine that ranks druggable targets before any chemistry begins."
        tone="vellum"
        backdrop="delivery-steps"
        folioTop
      >
        <ol className="grid gap-6 md:grid-cols-3">
          {[
            {
              step: "01",
              icon: Upload,
              title: "Define your indication",
              body: "Provide disease area, modality preference, proprietary cohorts, and any internal target lists to reconcile.",
            },
            {
              step: "02",
              icon: Brain,
              title: "AI engine runs",
              body: "Multi-omics integration, knowledge-graph GNNs, druggability scoring, and pathway analysis.",
            },
            {
              step: "03",
              icon: LineChart,
              title: "Ranked dossiers delivered",
              body: "8–15 priority targets with evidence tables, competitive briefs, and portfolio gate presentation.",
            },
          ].map((s) => (
            <li key={s.step} className="glass-elevated relative p-7">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-medium text-muted-foreground">{s.step}</span>
                <s.icon className="h-5 w-5 text-[var(--gold)]" />
              </div>
              <h3 className="mt-6 text-lg font-semibold text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
            </li>
          ))}
        </ol>

        <div className="mt-14 grid gap-6 rounded-2xl border border-border bg-[var(--parchment)]/90 p-8 backdrop-blur md:grid-cols-3">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
              Traditional
            </div>
            <div className="mt-2 font-display text-2xl font-bold text-foreground line-through decoration-[var(--burgundy)]/60">
              200 genes · $400K · 6 months
            </div>
          </div>
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-[var(--gold)]">
              {PRODUCT_NAME}
            </div>
            <div className="mt-2 font-display text-2xl font-bold text-foreground">
              12 dossiers · $125K · 3 weeks
            </div>
          </div>
          <div className="flex items-end">
            <Link
              to="/case-studies"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--gold)] hover:underline"
            >
              See the case study <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </PageSection>

      <PageSection
        id="design-choices"
        eyebrow="Design choices"
        title="Built for decisions, not dashboards."
        description={`Every architectural choice in ${PRODUCT_NAME} serves one goal: get your team to the right target decision before committing chemistry budget.`}
        tone="parchment"
        backdrop="ledger-columns"
        folioTop
        align="center"
      >
        <div className="grid gap-6 md:grid-cols-2">
          {designChoices.map((choice, i) => (
            <div key={choice.title} className="glass-elevated flex gap-4 p-6">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-border bg-[var(--vellum)] font-mono text-xs text-[var(--gold)]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <div className="font-semibold text-foreground">{choice.title}</div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{choice.body}</p>
              </div>
            </div>
          ))}
        </div>
      </PageSection>

      <PageSection
        id="features"
        eyebrow="Advanced features"
        title="The science behind target discovery."
        description="Multi-omics integration, knowledge-graph neural networks, and druggability modeling from Bajpai Labs."
        tone="charcoal"
        backdrop="catalog-lattice"
        folioTop
        align="center"
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {advancedFeatures.map((f) => (
            <div key={f.title} className="rounded-xl border border-[var(--gold)]/20 bg-[var(--charcoal-deep)] p-6">
              <f.icon className="h-6 w-6 text-[var(--gold)]" />
              <div className="mt-4 font-semibold text-[var(--vellum)]">{f.title}</div>
              <p className="mt-2 text-sm leading-relaxed text-[var(--vellum)]/65">{f.body}</p>
            </div>
          ))}
        </div>

        {/* ── Closed-loop optimization callout ── */}
        <div className="mt-10 overflow-hidden rounded-2xl border border-[var(--gold)]/30 bg-[var(--charcoal-deep)]">
          <div className="border-b border-[var(--gold)]/20 px-6 py-4 md:px-8">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[var(--gold)]/30 bg-[var(--charcoal)] text-[var(--gold)]">
                <RefreshCw className="h-4 w-4" aria-hidden />
              </span>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--gold)]">
                  Methodology
                </p>
                <h3 className="font-display text-lg text-[var(--vellum)] md:text-xl">
                  Evidence Integration Loop
                </h3>
              </div>
            </div>
          </div>

          <div className="px-6 py-6 md:px-8">
            {/* loop flow diagram */}
            <div className="mb-6 flex flex-wrap items-center gap-2 text-xs">
              {[
                "Multi-omics ingest",
                "GNN scoring",
                "Dossier assembly",
                "Gate feedback",
              ].map((label, i, arr) => (
                <span key={label} className="flex items-center gap-2">
                  <span className="rounded-md border border-[var(--gold)]/25 bg-[var(--charcoal)] px-3 py-1.5 font-mono text-[10px] uppercase tracking-wider text-[var(--vellum)]/80">
                    {label}
                  </span>
                  {i < arr.length - 1 ? (
                    <ArrowRight className="h-3 w-3 shrink-0 text-[var(--gold)]/60" aria-hidden />
                  ) : (
                    <span className="font-mono text-[var(--gold)]/60" aria-hidden>↩</span>
                  )}
                </span>
              ))}
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {[
                {
                  icon: Dna,
                  title: "Cross-layer concordance",
                  body: "Each target scored by genetic, expression, pathway, and single-cell evidence—not single-source lists.",
                },
                {
                  icon: Brain,
                  title: "Portfolio gate feedback",
                  body: "Committee outcomes and validation results refine scoring models for follow-on indication expansions.",
                },
                {
                  icon: ShieldCheck,
                  title: "Safety pre-filtering",
                  body: "Essential-gene and tissue liability filters remove unsafe targets before they reach your gate deck.",
                },
              ].map(({ icon: Icon, title, body }) => (
                <div key={title} className="flex gap-3">
                  <Icon className="mt-0.5 h-5 w-5 shrink-0 text-[var(--gold)]" aria-hidden />
                  <div>
                    <div className="text-sm font-semibold text-[var(--vellum)]">{title}</div>
                    <p className="mt-1 text-xs leading-relaxed text-[var(--vellum)]/60">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </PageSection>

      <PageSection
        id="why"
        eyebrow={`Why ${PRODUCT_NAME}`}
        title="Research rigor. Commercial speed."
        description={`${PRODUCT_NAME} combines multi-omics bioinformatics, knowledge-graph AI, and portfolio gate experience that most point-tool vendors lack.`}
        tone="charcoal-deep"
        backdrop="lab-graph"
        folioTop
      >
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-md bg-[var(--vellum)] px-5 py-3 text-sm font-semibold text-[var(--charcoal-deep)] hover:bg-[var(--parchment)]"
            >
              Start your first project <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <ul className="space-y-5">
            {[
              [
                "Gate-ready deliverables",
                "Evidence dossiers, competitive briefs, and decision frameworks—not gene lists in a spreadsheet.",
              ],
              [
                "Multi-omics + GNN depth",
                "Knowledge-graph neural networks surface targets missed by GWAS-only or expression-only analysis.",
              ],
              [
                "Production accountability",
                "Ranked targets with full technical documentation your committee can take straight into budget allocation.",
              ],
              [
                "Direct line to leadership",
                "You work with the architects who built the engine, not a sales team.",
              ],
            ].map(([t, b]) => (
              <li
                key={t}
                className="flex gap-4 rounded-xl border border-[var(--gold)]/20 bg-[var(--vellum)]/5 p-5"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[var(--gold)]" />
                <div>
                  <div className="font-semibold text-[var(--vellum)]">{t}</div>
                  <p className="mt-1 text-sm text-[var(--vellum)]/72">{b}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </PageSection>

      {/* ── Services — vertical ledger (mirrors HomeBoutiqueServices) ── */}
      <PageSection id="services" tone="charcoal-deep" backdrop="folio-stack" folioTop title="">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-start lg:gap-14 xl:gap-16">
          {/* left: thesis — sticky on desktop */}
          <div className="max-w-md lg:sticky lg:top-28">
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-[var(--gold)]">
              Target intelligence services
            </p>
            <h2 className="mt-4 font-display text-h2 leading-[1.12] text-[var(--vellum)]">
              Four capabilities.{" "}
              <span className="gold-gradient block">One decision engine.</span>
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-[var(--vellum)]/72 md:text-base">
              From multi-omics target discovery through resistance mapping and portfolio gate packages,
              each capability shares the same knowledge-graph infrastructure and senior team.
            </p>
            <Link
              to="/services"
              className="mt-8 inline-flex min-h-11 items-center gap-2 rounded-md border border-[var(--vellum)]/30 px-5 py-3 text-sm font-medium text-[var(--vellum)] transition-colors hover:border-[var(--gold)]/45 hover:bg-[var(--vellum)]/5"
            >
              All services
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>

          {/* right: ledger */}
          <div className="relative">
            {/* gold spine */}
            <div className="pointer-events-none absolute left-[1.375rem] top-6 bottom-6 hidden w-px bg-[var(--gold)]/20 md:block" aria-hidden />
            <ol className="space-y-0">
              {[
                {
                  step: "00",
                  icon: Target,
                  title: "Multi-Omics Target Discovery",
                  tagline: "GWAS · scRNA · GNN",
                  price: "Engagements typically $75K–$200K per program",
                  body: "Cross-cohort meta-analysis, knowledge-graph GNN scoring, and genetic colocalization. Delivers ranked targets with full evidence dossiers before any chemistry begins.",
                  highlight: true,
                },
                {
                  step: "01",
                  icon: Network,
                  title: "Druggability & Safety Assessment",
                  tagline: "Structure · liability",
                  price: "Engagements typically $50K–$125K per program",
                  body: "Structural tractability, modality fit, essential-gene safety filters, and competitive landscape briefs per target.",
                },
                {
                  step: "02",
                  icon: FlaskConical,
                  title: "Resistance Pathway Mapping",
                  tagline: "Oncology · bypass",
                  price: "Engagements typically $175K–$300K per program",
                  body: "Resistance subtype clustering, pathway bypass detection, and combination target ranking with biomarker stratification panels.",
                },
                {
                  step: "03",
                  icon: LineChart,
                  title: "Portfolio Gate Decision Packages",
                  tagline: "Dossiers · gate deck",
                  price: "Engagements typically $100K–$250K per program",
                  body: "Gate-ready presentation decks, evidence tables, validation roadmaps, and budget allocation frameworks for investment committees.",
                },
              ].map((s) => (
                <li
                  key={s.step}
                  className={`group relative border-t first:border-t-0 ${"highlight" in s && s.highlight ? "border-[var(--gold)]/30" : "border-[var(--vellum)]/10"}`}
                >
                  {"highlight" in s && s.highlight && (
                    <div className="pointer-events-none absolute inset-0 rounded-lg bg-[var(--gold)]/5" aria-hidden />
                  )}
                  <div className="flex gap-4 py-6 md:gap-5 md:py-7">
                    <div className="flex shrink-0 flex-col items-center gap-3 md:w-11">
                      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--gold)]/80">{s.step}</span>
                      <span className="relative z-[1] flex h-11 w-11 items-center justify-center rounded-lg border border-[var(--gold)]/35 bg-[var(--charcoal-deep)] text-[var(--gold)] transition-colors group-hover:border-[var(--gold)]/55">
                        <s.icon className="h-5 w-5" aria-hidden />
                      </span>
                    </div>
                    <div className="min-w-0 flex-1 pt-0.5">
                      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                        <h3 className="font-display text-lg text-[var(--vellum)] md:text-xl">{s.title}</h3>
                        <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--gold)]/75">{s.tagline}</span>
                        {"highlight" in s && s.highlight && (
                          <span className="rounded border border-[var(--gold)]/35 bg-[var(--gold)]/10 px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-wider text-[var(--gold)]">
                            Start here
                          </span>
                        )}
                      </div>
                      <p className="mt-2 max-w-lg text-sm leading-relaxed text-[var(--vellum)]/65">{s.body}</p>
                      <div className="mt-3 flex flex-wrap items-center gap-5">
                        <span className="font-mono text-[10px] text-[var(--gold)]/70">{s.price}</span>
                        <Link
                          to="/services"
                          className="inline-flex items-center gap-1.5 text-xs font-medium text-[var(--gold)] transition-colors hover:text-[var(--gold-hover)]"
                        >
                          See capabilities
                          <ArrowRight className="h-3.5 w-3.5" aria-hidden />
                        </Link>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </PageSection>

      {/* Final CTA */}
      <section className="relative overflow-hidden section-tone-parchment-2">
        <SectionBackdrop variant="vault-seal" className="z-[1]" />
        <div className="section-inner relative z-10 pb-24 pt-12">
          <div className="overflow-hidden rounded-3xl border border-border bg-[var(--charcoal-deep)]/95 p-10 text-[var(--vellum)] backdrop-blur sm:p-14">
            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-[var(--gold)]">
              {PRODUCT_BYLINE}
            </p>
            <h2 className="mt-3 max-w-2xl font-display text-3xl tracking-tight sm:text-4xl">
              Ready to gate the right targets?
            </h2>
            <p className="mt-4 max-w-xl text-[var(--vellum)]/72">
              30-minute intro call with the Bajpai Labs team. No pitch deck—just a scoping
              conversation on your indication and timeline.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-md bg-[var(--vellum)] px-5 py-3 text-sm font-semibold text-[var(--charcoal-deep)] hover:bg-[var(--parchment)]"
              >
                Schedule a Consultation <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/pricing"
                className="inline-flex items-center gap-2 rounded-md border border-[var(--vellum)]/25 px-5 py-3 text-sm font-semibold text-[var(--vellum)] hover:border-[var(--gold)]/40"
              >
                See pricing
              </Link>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
