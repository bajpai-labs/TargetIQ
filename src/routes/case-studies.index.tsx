import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageSection } from "@/components/page-section";
import { SectionBackdrop } from "@/components/section-backdrop";
import { SiteLayout } from "@/components/site-layout";
import {
  CASE_STUDY_AGGREGATE_METRICS,
  FLAGSHIP_CASE_STUDIES,
} from "@/lib/case-studies-content";
import { CONTACT_EMAIL, PRODUCT_NAME, SITE_ORIGIN } from "@/lib/site";
import { pageSocialHead } from "@/lib/seo";

export const Route = createFileRoute("/case-studies/")({
  head: () =>
    pageSocialHead({
      title: `Case Studies: Target Discovery Across Autoimmune, Neuro, Oncology | ${PRODUCT_NAME}`,
      description: `Three anonymized TargetIQ engagements: rheumatoid arthritis multi-omics target discovery, Alzheimer's target prioritization, and NSCLC resistance pathway mapping. Real portfolio gate outcomes.`,
      canonical: `${SITE_ORIGIN}/case-studies`,
      ogTitle: `${PRODUCT_NAME} Case Studies`,
      ogDescription: `Real results from multi-omics target discovery across autoimmune, neurodegeneration, and oncology resistance mapping.`,
    }),
  component: CaseStudiesIndexPage,
});

function CaseStudiesIndexPage() {
  return (
    <SiteLayout>
      <section className="relative overflow-hidden border-b border-border/40 section-tone-vellum">
        <div className="section-grid-overlay pointer-events-none absolute inset-0 z-[1] opacity-40" aria-hidden />
        <SectionBackdrop variant="hero-field" className="z-[2]" />
        <div className="section-inner relative z-10 py-20 lg:py-28">
          <div className="max-w-3xl">
            <div className="font-mono text-[11px] uppercase tracking-[0.28em] text-[var(--gold)]">
              Case Studies
            </div>
            <h1 className="mt-3 font-display text-4xl tracking-tight text-[var(--charcoal)] sm:text-5xl">
              Real programs.{" "}
              <span className="gold-gradient">Real gate outcomes.</span>
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Client identities are anonymized at their request, but every metric below is from a
              closed engagement with portfolio gate approval or investor diligence confirmation.
            </p>
            <dl className="mt-12 grid grid-cols-2 gap-6 border-t border-border/60 pt-8 md:grid-cols-4">
              {CASE_STUDY_AGGREGATE_METRICS.map(([v, l]) => (
                <div key={l}>
                  <dt className="text-3xl font-bold tracking-tight text-[var(--charcoal)]">{v}</dt>
                  <dd className="mt-1 text-xs text-muted-foreground">{l}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <PageSection
        eyebrow="By indication"
        title="Three programs across target discovery domains"
        description="Select a case study to read the full engagement timeline, evidence dossiers, portfolio gate outcomes, and lessons learned."
        tone="parchment"
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {FLAGSHIP_CASE_STUDIES.map((study) => (
            <Link
              key={study.slug}
              to="/case-studies/$slug"
              params={{ slug: study.slug }}
              className="group flex flex-col rounded-2xl border border-border bg-background p-6 shadow-[var(--shadow-soft)] transition-colors hover:border-[var(--gold)]/40 sm:p-8"
            >
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center rounded-full bg-[var(--gold)]/10 px-3 py-1 text-xs font-semibold text-[var(--gold)]">
                  {study.tag}
                </span>
                <span className="text-xs text-muted-foreground">{study.domain}</span>
              </div>
              <h2 className="mt-4 font-display text-xl text-[var(--charcoal)] transition-colors group-hover:text-[var(--gold)]">
                {study.title}
              </h2>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {study.subtitle}
              </p>
              <dl className="mt-6 grid grid-cols-2 gap-3 border-t border-border pt-6">
                {study.headlineMetrics.slice(0, 2).map(({ value, label }) => (
                  <div key={label}>
                    <dt className="text-lg font-bold text-[var(--charcoal)]">{value}</dt>
                    <dd className="mt-0.5 text-[11px] uppercase tracking-wider text-muted-foreground">
                      {label}
                    </dd>
                  </div>
                ))}
              </dl>
              <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[var(--charcoal)]">
                Read full case study
                <ArrowRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                  aria-hidden
                />
              </div>
            </Link>
          ))}
        </div>
      </PageSection>

      <section className="section-inner pb-20">
        <div className="overflow-hidden rounded-3xl border border-border bg-[var(--charcoal-deep)] p-10 text-[var(--vellum)] sm:p-14">
          <h2 className="max-w-2xl font-display text-3xl tracking-tight sm:text-4xl">
            Your indication could be the next case study.
          </h2>
          <p className="mt-4 max-w-xl text-[var(--vellum)]/75">
            Tell us about your disease area. We will scope a 2 to 4 week target discovery pilot.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-[var(--vellum)] px-5 py-3 text-sm font-semibold text-[var(--charcoal-deep)] hover:opacity-90"
            >
              Schedule a Consultation
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="inline-flex items-center justify-center gap-2 rounded-md border border-[var(--vellum)]/25 px-5 py-3 text-sm font-medium text-[var(--vellum)] hover:bg-[var(--vellum)]/10"
            >
              {CONTACT_EMAIL}
            </a>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
