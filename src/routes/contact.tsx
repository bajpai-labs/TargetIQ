import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Mail, MapPin, CheckCircle2 } from "lucide-react";
import { SiteLayout } from "@/components/site-layout";
import { BAJPAI_LABS_LOCATION, BAJPAI_LABS_TEAM_URL, CONTACT_EMAIL, PRODUCT_NAME, SITE_ORIGIN } from "@/lib/site";
import { pageSocialHead } from "@/lib/seo";

export const Route = createFileRoute("/contact")({
  head: () =>
    pageSocialHead({
      title: `Contact TargetIQ: Schedule a Target Discovery Consultation | ${PRODUCT_NAME}`,
      description: `Schedule a 30-minute scoping call with the Bajpai Labs team. No pitch deck. We respond within one business day. hello@bajpailabs.com`,
      canonical: `${SITE_ORIGIN}/contact`,
      ogTitle: `Contact ${PRODUCT_NAME}`,
      ogDescription: `Schedule a 30-minute intro call or request a quote for your target discovery program.`,
    }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }
  return (
    <SiteLayout>
      <section className="border-b border-border bg-[var(--parchment)]">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-secondary">Contact</div>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Start a conversation. No pitch deck required.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
            A 30-minute intro call with the Bajpai Labs leadership team is usually enough to scope
            whether a target discovery pilot fits your indication and gate timeline.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.4fr_1fr]">
        <div className="rounded-2xl border border-border bg-background p-8 shadow-[var(--shadow-soft)] md:p-10">
          {sent ? (
            <div className="flex flex-col items-start gap-4">
              <CheckCircle2 className="h-10 w-10 text-secondary" />
              <h2 className="text-2xl font-bold text-foreground">Thanks, we got it.</h2>
              <p className="text-muted-foreground">We&apos;ll reply within one business day from {CONTACT_EMAIL}.</p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-5">
              <h2 className="text-2xl font-bold tracking-tight text-foreground">Quick inquiry</h2>
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Name" name="name" required />
                <Field label="Work email" name="email" type="email" required />
                <Field label="Company" name="company" required />
                <SelectField label="Project type" name="project_type" options={["Multi-omics target discovery", "Druggability & safety assessment", "Resistance pathway mapping", "Portfolio gate package", "Custom / not sure yet"]} />
              </div>
              <SelectField label="Timeline" name="timeline" options={["ASAP (portfolio gate within 4 weeks)", "Next quarter", "Exploring options"]} />
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">Tell us about your indication</label>
                <textarea name="message" rows={5} required maxLength={2000} className="mt-2 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-ring/30" />
              </div>
              <button type="submit" className="inline-flex w-full items-center justify-center rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-soft)] hover:opacity-90 sm:w-auto">
                Send inquiry
              </button>
              <p className="text-xs text-muted-foreground">We respond within one business day. All conversations under mutual NDA on request.</p>
            </form>
          )}
        </div>

        <aside className="space-y-6">
          <div className="rounded-2xl border border-border bg-foreground p-8 text-background">
            <h3 className="text-lg font-bold">Schedule a 30-min call</h3>
            <p className="mt-2 text-sm text-background/70">Direct calendar with the Bajpai Labs team.</p>
            <a href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(`${PRODUCT_NAME} target discovery consultation`)}`} className="mt-5 inline-flex items-center justify-center rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground hover:opacity-90">
              Email to schedule
            </a>
          </div>

          <div className="rounded-2xl border border-border bg-background p-8">
            <h3 className="text-lg font-bold text-foreground">Direct contact</h3>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 text-primary" />
                <a href={`mailto:${CONTACT_EMAIL}`} className="text-foreground hover:underline">{CONTACT_EMAIL}</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 text-primary" />
                <span className="text-muted-foreground">{BAJPAI_LABS_LOCATION}</span>
              </li>
            </ul>
            <a
              href={BAJPAI_LABS_TEAM_URL}
              className="mt-5 inline-block text-sm font-medium text-[var(--gold)] hover:underline"
            >
              Meet the team →
            </a>
          </div>
        </aside>
      </section>
    </SiteLayout>
  );
}

function Field({ label, name, type = "text", required = false }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</label>
      <input name={name} type={type} required={required} maxLength={255} className="mt-2 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-ring/30" />
    </div>
  );
}

function SelectField({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <div>
      <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</label>
      <select name={name} className="mt-2 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-ring/30">
        {options.map((o) => <option key={o}>{o}</option>)}
      </select>
    </div>
  );
}
