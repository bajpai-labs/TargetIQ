export type SectionTone =
  | "vellum"
  | "parchment"
  | "parchment-2"
  | "charcoal"
  | "charcoal-deep";

export const SECTION_TONE_CLASS: Record<SectionTone, string> = {
  vellum: "section-tone-vellum",
  parchment: "section-tone-parchment",
  "parchment-2": "section-tone-parchment-2",
  charcoal: "section-tone-charcoal",
  "charcoal-deep": "section-tone-charcoal-deep",
};

export function isDarkSectionTone(tone: SectionTone): boolean {
  return tone === "charcoal" || tone === "charcoal-deep";
}
