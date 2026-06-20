import type { ReactNode } from "react";
import {
  SectionBackdrop,
  type SectionBackdropVariant,
} from "@/components/section-backdrop";
import {
  isDarkSectionTone,
  SECTION_TONE_CLASS,
  type SectionTone,
} from "@/lib/section-tones";
import { cn } from "@/lib/utils";

type Props = {
  id?: string;
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
  align?: "center" | "left";
  tone?: SectionTone;
  compact?: boolean;
  folioTop?: boolean;
  backdrop?: SectionBackdropVariant;
  className?: string;
};

export function PageSection({
  id,
  eyebrow,
  title,
  description,
  children,
  align = "left",
  tone = "vellum",
  compact = false,
  folioTop = false,
  backdrop,
  className,
}: Props) {
  const onDark = isDarkSectionTone(tone);

  return (
    <section
      id={id}
      className={cn(
        "relative overflow-hidden border-t border-border/30",
        compact ? "py-14" : "py-14 sm:py-20 md:py-28",
        backdrop && "page-section--has-backdrop",
        SECTION_TONE_CLASS[tone],
        className,
      )}
    >
      {folioTop ? (
        <div className="homepage-fold-rule homepage-fold-rule--top pointer-events-none" aria-hidden />
      ) : null}
      <div
        className={cn(
          "section-grid-overlay pointer-events-none absolute inset-0 z-[1]",
          backdrop ? "opacity-20" : onDark ? "section-grid-overlay--dark opacity-50" : "opacity-40",
          backdrop && onDark && "section-grid-overlay--dark opacity-30",
        )}
        aria-hidden
      />
      {backdrop ? (
        <SectionBackdrop variant={backdrop} onDark={onDark} className="z-[2]" />
      ) : null}
      <div className="section-inner relative z-10">
        {(eyebrow || title || description) && (
          <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
            {eyebrow ? (
              <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.28em] text-[var(--gold)]">
                {eyebrow}
              </div>
            ) : null}
            <h2
              className={cn(
                "font-display text-h2",
                onDark ? "text-[var(--vellum)]" : "text-[var(--charcoal)]",
              )}
            >
              {title}
            </h2>
            {description ? (
              <p
                className={cn(
                  "mt-4 text-base leading-relaxed md:mt-6 md:text-lg",
                  onDark ? "text-[var(--vellum)]/72" : "text-muted-foreground",
                )}
              >
                {description}
              </p>
            ) : null}
          </div>
        )}
        {children ? <div className={eyebrow || title || description ? "mt-14" : ""}>{children}</div> : null}
      </div>
    </section>
  );
}
