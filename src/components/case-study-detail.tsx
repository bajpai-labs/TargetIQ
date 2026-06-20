import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { PageSection } from "@/components/page-section";
import type { FlagshipCaseStudy, CaseStudyTableRow } from "@/lib/case-studies-content";
import { CONTACT_EMAIL, PRODUCT_NAME } from "@/lib/site";

function DataTable({
  columns,
  rows,
  caption,
  dark = false,
}: {
  columns: string[];
  rows: CaseStudyTableRow[];
  caption?: string;
  dark?: boolean;
}) {
  return (
    <div
      className={
        dark
          ? "overflow-x-auto rounded-xl border border-[var(--vellum)]/15 bg-[var(--charcoal-deep)]/60"
          : "overflow-x-auto rounded-xl border border-border bg-background"
      }
    >
      <table className="w-full min-w-[640px] text-left text-sm">
        {caption ? (
          <caption
            className={
              dark
                ? "border-b border-[var(--vellum)]/15 px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-[var(--vellum)]/65"
                : "border-b border-border bg-muted/40 px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground"
            }
          >
            {caption}
          </caption>
        ) : null}
        <thead>
          <tr className={dark ? "border-b border-[var(--vellum)]/15" : "border-b border-border bg-muted/30"}>
            {columns.map((col) => (
              <th
                key={col}
                scope="col"
                className={
                  dark
                    ? "px-4 py-3 text-xs font-semibold uppercase tracking-wider text-[var(--vellum)]/65"
                    : "px-4 py-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                }
              >
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={i}
              className={dark ? "border-b border-[var(--vellum)]/10 last:border-b-0" : "border-b border-border/60 last:border-b-0"}
            >
              {columns.map((col) => (
                <td
                  key={col}
                  className={dark ? "px-4 py-3 text-[var(--vellum)]/90" : "px-4 py-3 text-foreground/90"}
                >
                  {row[col] ?? "-"}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function BulletList({ items, dark = false }: { items: string[]; dark?: boolean }) {
  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li
          key={item}
          className={`flex gap-2.5 text-sm leading-relaxed ${dark ? "text-[var(--vellum)]/90" : "text-foreground/90"}`}
        >
          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--gold)]" aria-hidden />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

type CaseStudyDetailProps = {
  study: FlagshipCaseStudy;
  showBackLink?: boolean;
};

export function CaseStudyDetail({ study, showBackLink = true }: CaseStudyDetailProps) {
  return (
    <>
      {showBackLink ? (
        <div className="section-inner pt-8">
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden />
            All case studies
          </Link>
        </div>
      ) : null}

      <PageSection
        eyebrow={study.tag}
        title={study.title}
        description={study.subtitle}
        tone="parchment"
        backdrop="folio-stack"
        className={showBackLink ? "border-t-0 pt-8" : undefined}
      >
        <div className="space-y-10">
          <div className="grid gap-4 rounded-2xl border border-border bg-background p-6 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Company
              </div>
              <p className="mt-1 text-sm text-foreground">{study.company}</p>
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Timeline
              </div>
              <p className="mt-1 text-sm text-foreground">{study.timeline}</p>
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Engagement
              </div>
              <p className="mt-1 text-sm text-foreground">{study.engagementType}</p>
            </div>
            <div>
              <div className="inline-flex items-center rounded-full bg-[var(--gold)]/10 px-3 py-1 text-xs font-semibold text-[var(--gold)]">
                {study.domain}
              </div>
            </div>
          </div>

          <dl className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {study.headlineMetrics.map(({ value, label }) => (
              <div
                key={label}
                className="rounded-xl border border-border bg-background p-5 text-center"
              >
                <dt className="text-2xl font-bold tracking-tight text-[var(--charcoal)] sm:text-3xl">
                  {value}
                </dt>
                <dd className="mt-1 text-xs text-muted-foreground">{label}</dd>
              </div>
            ))}
          </dl>

          <article className="rounded-2xl border border-border bg-background p-6 sm:p-8">
            <h3 className="font-display text-xl text-[var(--charcoal)]">The Challenge</h3>
            <p className="mt-3 text-sm leading-relaxed text-foreground/90">{study.challenge}</p>
            <h4 className="mt-6 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Business Constraints
            </h4>
            <ul className="mt-3 space-y-2">
              {study.constraints.map((c) => (
                <li key={c} className="text-sm leading-relaxed text-foreground/90">
                  {c}
                </li>
              ))}
            </ul>
          </article>

          <div>
            <h3 className="font-display text-2xl text-[var(--charcoal)]">{PRODUCT_NAME} Approach</h3>
            <div className="mt-6 space-y-6">
              {study.phases.map((phase) => (
                <article
                  key={phase.title}
                  className="rounded-2xl border border-border bg-background p-6 sm:p-8"
                >
                  <h4 className="font-display text-lg text-[var(--charcoal)]">{phase.title}</h4>
                  {phase.body ? (
                    <p className="mt-3 text-sm leading-relaxed text-foreground/90">{phase.body}</p>
                  ) : null}
                  {phase.input ? (
                    <div className="mt-4">
                      <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        Input
                      </div>
                      <ul className="mt-2 space-y-1">
                        {phase.input.map((item) => (
                          <li key={item} className="text-sm text-foreground/90">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                  {phase.methods ? (
                    <div className="mt-4">
                      <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        Methods
                      </div>
                      <ul className="mt-2 space-y-1">
                        {phase.methods.map((item) => (
                          <li key={item} className="text-sm text-foreground/90">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                  {phase.output ? (
                    <div className="mt-4">
                      <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        Output
                      </div>
                      <ul className="mt-2 space-y-1">
                        {phase.output.map((item) => (
                          <li key={item} className="text-sm text-foreground/90">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                </article>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-display text-xl text-[var(--charcoal)]">{study.rankedOutputTitle}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{study.rankedOutputNote}</p>
            <div className="mt-4">
              <DataTable
                caption={study.rankedOutputCaption}
                columns={study.rankedOutputColumns}
                rows={study.rankedOutputRows}
              />
            </div>
          </div>
        </div>
      </PageSection>

      <PageSection
        eyebrow="Results and impact"
        title="Speed, validation, and business outcomes"
        tone="charcoal"
        backdrop="lab-graph"
      >
        <div className="space-y-10">
          <div>
            <h3 className="font-display text-xl text-[var(--vellum)]">{study.comparisonTitle}</h3>
            <div className="mt-4">
              <DataTable dark columns={study.comparisonColumns} rows={study.comparisonRows} />
            </div>
          </div>

          <div>
            <h3 className="font-display text-xl text-[var(--vellum)]">{study.wetLabTitle}</h3>
            <p className="mt-2 text-sm text-[var(--vellum)]/72">{study.wetLabSubtitle}</p>
            <div className="mt-4">
              <DataTable dark columns={study.wetLabColumns} rows={study.wetLabRows} />
            </div>
            <dl className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
              {study.validationStats.map(({ value, label }) => (
                <div
                  key={label}
                  className="rounded-xl border border-[var(--vellum)]/15 bg-[var(--charcoal-deep)]/60 p-4 text-center"
                >
                  <dt className="text-xl font-bold text-[var(--gold)]">{value}</dt>
                  <dd className="mt-1 text-xs text-[var(--vellum)]/65">{label}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <article>
              <h3 className="font-display text-lg text-[var(--vellum)]">Immediate Wins</h3>
              <div className="mt-4">
                <BulletList dark items={study.immediateWins} />
              </div>
            </article>
            <article>
              <h3 className="font-display text-lg text-[var(--vellum)]">Strategic Advantages</h3>
              <div className="mt-4">
                <BulletList dark items={study.strategicAdvantages} />
              </div>
            </article>
          </div>

          <blockquote className="rounded-2xl border border-[var(--vellum)]/15 bg-[var(--charcoal-deep)]/60 p-6">
            <div className="text-xs font-semibold uppercase tracking-wider text-[var(--gold)]">
              Follow-on engagement
            </div>
            <p className="mt-3 text-sm leading-relaxed text-[var(--vellum)]/85">{study.followOn}</p>
          </blockquote>
        </div>
      </PageSection>

      <PageSection
        eyebrow="Model validation"
        title="Lessons and recommendations"
        tone="vellum"
        backdrop="approach-arcs"
      >
        <div className="grid gap-10 lg:grid-cols-2">
          <article className="rounded-2xl border border-border bg-background p-6 sm:p-8">
            <h3 className="font-display text-lg text-[var(--charcoal)]">What Worked</h3>
            <div className="mt-4">
              <BulletList items={study.lessonsWorked} />
            </div>
          </article>
          <article className="rounded-2xl border border-border bg-background p-6 sm:p-8">
            <h3 className="font-display text-lg text-[var(--charcoal)]">Challenges and Mitigations</h3>
            <div className="mt-4 space-y-5">
              {study.lessonsChallenges.map(({ challenge, mitigation }) => (
                <div key={challenge}>
                  <p className="text-sm leading-relaxed text-foreground/90">{challenge}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    <span className="font-semibold text-foreground">Mitigation:</span> {mitigation}
                  </p>
                </div>
              ))}
            </div>
          </article>
        </div>

        <article className="mt-10 rounded-2xl border border-border bg-background p-6 sm:p-8">
          <h3 className="font-display text-lg text-[var(--charcoal)]">{study.recommendationsTitle}</h3>
          <div className="mt-4">
            <BulletList items={study.recommendations} />
          </div>
          <p className="mt-6 text-sm font-medium text-[var(--charcoal)]">{study.roiNote}</p>
          <p className="mt-2 text-sm text-muted-foreground">{study.nextStepsNote}</p>
        </article>

        <article className="mt-8 rounded-2xl border border-dashed border-border bg-muted/30 p-6 sm:p-8">
          <h3 className="font-display text-lg text-[var(--charcoal)]">About This Engagement</h3>
          <dl className="mt-4 grid gap-4 sm:grid-cols-2">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Client profile
              </dt>
              <dd className="mt-1 text-sm text-foreground">{study.about.clientProfile}</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Project duration
              </dt>
              <dd className="mt-1 text-sm text-foreground">{study.about.duration}</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Total cost
              </dt>
              <dd className="mt-1 text-sm text-foreground">{study.about.totalCost}</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Date
              </dt>
              <dd className="mt-1 text-sm text-foreground">{study.about.date}</dd>
            </div>
          </dl>
          <p className="mt-6 text-xs leading-relaxed text-muted-foreground">{study.about.disclaimer}</p>
        </article>
      </PageSection>

      <section className="section-inner pb-20">
        <div className="overflow-hidden rounded-3xl border border-border bg-[var(--charcoal-deep)] p-10 text-[var(--vellum)] sm:p-14">
          <h2 className="max-w-2xl font-display text-3xl tracking-tight sm:text-4xl">
            Run a similar program with {PRODUCT_NAME}.
          </h2>
          <p className="mt-4 max-w-xl text-[var(--vellum)]/75">
            Tell us about your target. We will scope a 2 to 4 week pilot.
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
    </>
  );
}
