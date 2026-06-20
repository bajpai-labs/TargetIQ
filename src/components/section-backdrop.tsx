import { cn } from "@/lib/utils";

export type SectionBackdropVariant =
  | "hero-field"
  | "lab-graph"
  | "fabric-mesh"
  | "ledger-columns"
  | "approach-arcs"
  | "page-beacon"
  | "catalog-lattice"
  | "manifest-index"
  | "constellation"
  | "signal-waves"
  | "folio-stack"
  | "delivery-steps"
  | "topic-orbit"
  | "compare-scales"
  | "archive-folio"
  | "retrieval-matrix"
  | "vault-seal"
  | "footer-ledger";

type Props = {
  variant: SectionBackdropVariant;
  onDark?: boolean;
  className?: string;
};

/** Decorative SVG layer for homepage folds, lab ledger motif, not Vocalis clones. */
export function SectionBackdrop({ variant, onDark = false, className }: Props) {
  return (
    <div
      className={cn(
        "section-backdrop pointer-events-none absolute inset-0 overflow-hidden",
        className,
      )}
      aria-hidden
    >
      {variant === "hero-field" ? <HeroFieldBackdrop /> : null}
      {variant === "lab-graph" ? <LabGraphBackdrop onDark={onDark} /> : null}
      {variant === "fabric-mesh" ? <FabricMeshBackdrop /> : null}
      {variant === "ledger-columns" ? <LedgerColumnsBackdrop /> : null}
      {variant === "approach-arcs" ? <ApproachArcsBackdrop /> : null}
      {variant === "page-beacon" ? <PageBeaconBackdrop onDark={onDark} /> : null}
      {variant === "catalog-lattice" ? <CatalogLatticeBackdrop /> : null}
      {variant === "manifest-index" ? <ManifestIndexBackdrop /> : null}
      {variant === "constellation" ? <ConstellationBackdrop onDark={onDark} /> : null}
      {variant === "signal-waves" ? <SignalWavesBackdrop onDark={onDark} /> : null}
      {variant === "folio-stack" ? <FolioStackBackdrop /> : null}
      {variant === "delivery-steps" ? <DeliveryStepsBackdrop /> : null}
      {variant === "topic-orbit" ? <TopicOrbitBackdrop onDark={onDark} /> : null}
      {variant === "compare-scales" ? <CompareScalesBackdrop /> : null}
      {variant === "archive-folio" ? <ArchiveFolioBackdrop /> : null}
      {variant === "retrieval-matrix" ? <RetrievalMatrixBackdrop onDark={onDark} /> : null}
      {variant === "vault-seal" ? <VaultSealBackdrop onDark={onDark} /> : null}
      {variant === "footer-ledger" ? <FooterLedgerBackdrop /> : null}
    </div>
  );
}

/** Hero, warm wash + right-field texture (no left margin rules). */
function HeroFieldBackdrop() {
  return (
    <>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_92%_12%,rgb(184_134_11/0.16),transparent_58%)]" />
      <div className="absolute inset-y-0 right-0 w-[min(52%,28rem)] overflow-hidden">
        <svg
          className="absolute inset-0 h-full w-full text-[var(--charcoal)] opacity-[0.07]"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          fill="none"
        >
          {Array.from({ length: 14 }).map((_, i) => (
            <line
              key={`v-${i}`}
              x1={i * 7}
              y1="0"
              x2={i * 7}
              y2="100"
              stroke="currentColor"
              strokeWidth="0.1"
            />
          ))}
          {[20, 40, 60, 80].map((y) => (
            <line
              key={`h-${y}`}
              x1="0"
              y1={y}
              x2="100"
              y2={y}
              stroke="currentColor"
              strokeWidth="0.06"
              opacity="0.7"
            />
          ))}
        </svg>
      </div>
      <svg
        className="absolute -right-10 top-16 hidden h-[min(55%,380px)] w-[min(38%,300px)] text-[var(--gold)] opacity-[0.22] lg:block"
        viewBox="0 0 160 160"
        fill="none"
      >
        <circle cx="80" cy="80" r="64" stroke="currentColor" strokeWidth="0.75" />
        <circle cx="80" cy="80" r="44" stroke="currentColor" strokeWidth="0.55" opacity="0.75" />
        <circle cx="80" cy="80" r="24" stroke="currentColor" strokeWidth="0.45" opacity="0.55" />
      </svg>
    </>
  );
}

/** Research fold, node graph + orbital guides on charcoal. */
function LabGraphBackdrop({ onDark }: { onDark: boolean }) {
  const ink = onDark ? "text-[var(--gold)]" : "text-[var(--charcoal)]";

  return (
    <>
      <div
        className={cn(
          "absolute inset-0",
          onDark
            ? "bg-[radial-gradient(ellipse_70%_55%_at_92%_15%,rgb(184_134_11/0.22),transparent_58%)]"
            : "bg-[radial-gradient(ellipse_70%_55%_at_92%_15%,rgb(184_134_11/0.12),transparent_58%)]",
        )}
      />
      <svg
        className={cn(
          "absolute -right-4 top-8 h-[min(88%,520px)] w-[min(50%,400px)] opacity-[0.28] sm:top-12",
          onDark && "opacity-[0.32]",
          ink,
        )}
        viewBox="0 0 360 420"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="280" cy="72" r="36" stroke="currentColor" strokeWidth="0.75" opacity="0.45" />
        <circle cx="280" cy="72" r="56" stroke="currentColor" strokeWidth="0.55" opacity="0.28" />
        <path
          d="M120 340 L180 260 L240 200 L280 140 L300 96"
          stroke="currentColor"
          strokeWidth="0.9"
          strokeLinecap="round"
          opacity="0.55"
        />
        <path
          d="M80 280 L160 220 L220 180 L260 120"
          stroke="currentColor"
          strokeWidth="0.7"
          strokeLinecap="round"
          opacity="0.4"
        />
        {[
          [120, 340],
          [180, 260],
          [240, 200],
          [280, 140],
          [300, 96],
          [80, 280],
          [160, 220],
          [220, 180],
        ].map(([cx, cy]) => (
          <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="4" fill="currentColor" opacity="0.65" />
        ))}
        <circle cx="280" cy="72" r="3" fill="currentColor" />
      </svg>
      <svg
        className={cn(
          "absolute bottom-0 left-0 h-44 w-44 opacity-[0.16] sm:h-52 sm:w-52",
          ink,
        )}
        viewBox="0 0 120 120"
        fill="none"
      >
        {Array.from({ length: 12 }).map((_, i) => (
          <line
            key={i}
            x1={i * 10}
            y1="0"
            x2={i * 10}
            y2="120"
            stroke="currentColor"
            strokeWidth="0.45"
          />
        ))}
      </svg>
    </>
  );
}

/** Flagship fold, interconnect fabric (vellum field). */
function FabricMeshBackdrop() {
  return (
    <>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_75%_55%_at_88%_12%,rgb(184_134_11/0.18),transparent_58%)]" />
      <svg
        className="absolute right-0 top-0 h-full w-[min(62%,34rem)] text-[var(--gold)] opacity-[0.26]"
        viewBox="0 0 400 520"
        preserveAspectRatio="xMaxYMid slice"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {Array.from({ length: 9 }).map((_, i) => (
          <line
            key={`bus-${i}`}
            x1="80"
            y1={48 + i * 52}
            x2="360"
            y2={64 + i * 48}
            stroke="currentColor"
            strokeWidth="0.55"
            opacity={0.35 + (i % 3) * 0.08}
          />
        ))}
        <path
          d="M200 48 C240 120, 260 180, 280 248 S320 360, 340 440"
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.45"
        />
        <path
          d="M140 120 C190 160, 230 220, 260 300 S300 400, 320 480"
          stroke="currentColor"
          strokeWidth="0.8"
          opacity="0.38"
        />
        <path
          d="M240 80 L300 140 L280 220 L320 300"
          stroke="currentColor"
          strokeWidth="0.7"
          opacity="0.42"
          strokeLinejoin="round"
        />
        {[
          [200, 48],
          [280, 248],
          [340, 440],
          [140, 120],
          [260, 300],
          [300, 140],
          [320, 300],
          [240, 80],
        ].map(([cx, cy]) => (
          <g key={`${cx}-${cy}`}>
            <circle cx={cx} cy={cy} r="6" stroke="currentColor" strokeWidth="0.6" opacity="0.5" />
            <circle cx={cx} cy={cy} r="2.5" fill="currentColor" opacity="0.85" />
          </g>
        ))}
      </svg>
      <svg
        className="absolute bottom-8 left-[4%] h-28 w-28 text-[var(--charcoal)] opacity-[0.12] sm:left-[8%] sm:h-36 sm:w-36"
        viewBox="0 0 96 96"
        fill="none"
      >
        <rect x="8" y="8" width="80" height="80" rx="4" stroke="currentColor" strokeWidth="0.75" />
        <path d="M8 32h80M8 56h80M32 8v80M56 8v80" stroke="currentColor" strokeWidth="0.55" />
      </svg>
    </>
  );
}

/** Paths router, letterhead ledger on parchment-2. */
function LedgerColumnsBackdrop() {
  return (
    <>
      <div className="absolute inset-0 bg-[linear-gradient(105deg,transparent_38%,rgb(184_134_11/0.1)_50%,transparent_62%)]" />
      <div className="absolute inset-y-0 left-[12%] w-px bg-[var(--gold)]/45 sm:left-[18%]" />
      <svg
        className="absolute inset-0 h-full w-full text-[var(--gold)] opacity-[0.2]"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        fill="none"
      >
        {Array.from({ length: 20 }).map((_, i) => (
          <line
            key={`v-${i}`}
            x1={4 + i * 4.8}
            y1="0"
            x2={4 + i * 4.8}
            y2="100"
            stroke="currentColor"
            strokeWidth="0.12"
          />
        ))}
        {[18, 34, 50, 66, 82].map((y) => (
          <line
            key={`h-${y}`}
            x1="0"
            y1={y}
            x2="100"
            y2={y}
            stroke="currentColor"
            strokeWidth="0.08"
            opacity="0.55"
          />
        ))}
      </svg>
    </>
  );
}

/** Approach fold, phased arcs on parchment. */
function ApproachArcsBackdrop() {
  return (
    <>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_100%_80%,rgb(184_134_11/0.14),transparent_55%)]" />
      <svg
        className="absolute -bottom-20 -right-10 h-80 w-80 text-[var(--gold)] opacity-[0.24] sm:h-[28rem] sm:w-[28rem]"
        viewBox="0 0 200 200"
        fill="none"
      >
        <path
          d="M180 180 A120 120 0 0 0 180 40"
          stroke="currentColor"
          strokeWidth="0.9"
        />
        <path
          d="M160 180 A100 100 0 0 0 160 60"
          stroke="currentColor"
          strokeWidth="0.75"
          opacity="0.75"
        />
        <path
          d="M140 180 A80 80 0 0 0 140 80"
          stroke="currentColor"
          strokeWidth="0.65"
          opacity="0.6"
        />
        <path d="M40 180h140" stroke="currentColor" strokeWidth="0.5" opacity="0.45" />
        <circle cx="180" cy="180" r="3" fill="currentColor" opacity="0.75" />
        <circle cx="160" cy="180" r="2.5" fill="currentColor" opacity="0.65" />
        <circle cx="140" cy="180" r="2.5" fill="currentColor" opacity="0.55" />
      </svg>
      <svg
        className="absolute left-0 top-0 h-full w-[38%] text-[var(--charcoal)] opacity-[0.08]"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        fill="none"
      >
        {Array.from({ length: 14 }).map((_, i) => (
          <line
            key={i}
            x1={i * 7}
            y1="0"
            x2={i * 7}
            y2="100"
            stroke="currentColor"
            strokeWidth="0.12"
          />
        ))}
      </svg>
    </>
  );
}

/** Contact / careers, vertical beacon + soft horizon glow. */
function PageBeaconBackdrop({ onDark }: { onDark: boolean }) {
  const ink = onDark ? "text-[var(--gold)]" : "text-[var(--charcoal)]";

  return (
    <>
      <div
        className={cn(
          "absolute inset-0",
          onDark
            ? "bg-[radial-gradient(ellipse_80%_60%_at_50%_100%,rgb(184_134_11/0.2),transparent_65%)]"
            : "bg-[radial-gradient(ellipse_80%_60%_at_50%_100%,rgb(184_134_11/0.12),transparent_65%)]",
        )}
      />
      <svg
        className={cn(
          "absolute bottom-0 left-1/2 h-[min(70%,420px)] w-[min(90%,520px)] -translate-x-1/2 opacity-[0.22]",
          onDark && "opacity-[0.28]",
          ink,
        )}
        viewBox="0 0 400 320"
        fill="none"
      >
        <line x1="200" y1="320" x2="200" y2="40" stroke="currentColor" strokeWidth="1" opacity="0.5" />
        <line x1="200" y1="40" x2="120" y2="120" stroke="currentColor" strokeWidth="0.7" opacity="0.35" />
        <line x1="200" y1="40" x2="280" y2="120" stroke="currentColor" strokeWidth="0.7" opacity="0.35" />
        <circle cx="200" cy="40" r="8" stroke="currentColor" strokeWidth="0.8" />
        <circle cx="200" cy="40" r="3" fill="currentColor" />
      </svg>
      <svg
        className={cn("absolute right-[8%] top-[12%] h-32 w-32 opacity-[0.18]", ink)}
        viewBox="0 0 80 80"
        fill="none"
      >
        <circle cx="40" cy="40" r="32" stroke="currentColor" strokeWidth="0.6" />
        <circle cx="40" cy="40" r="20" stroke="currentColor" strokeWidth="0.5" opacity="0.6" />
      </svg>
    </>
  );
}

/** PyPI manifest, ruled log lines + index watermark (no diagonal lattice). */
function ManifestIndexBackdrop() {
  return (
    <>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_0%_50%,rgb(184_134_11/0.08),transparent_62%)]" />
      <div className="absolute inset-y-[8%] left-[max(1.25rem,6%)] w-px bg-[var(--gold)]/18" />
      <svg
        className="absolute inset-0 h-full w-full text-[var(--charcoal)] opacity-[0.045]"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        fill="none"
      >
        {Array.from({ length: 28 }).map((_, i) => (
          <line
            key={`rule-${i}`}
            x1="0"
            y1={3.5 + i * 3.4}
            x2="100"
            y2={3.5 + i * 3.4}
            stroke="currentColor"
            strokeWidth="0.08"
          />
        ))}
      </svg>
      <div
        className="absolute inset-y-0 right-0 w-[min(38%,16rem)] overflow-hidden opacity-[0.06]"
        aria-hidden
      >
        <div className="absolute inset-0 flex flex-col justify-center gap-[1.35rem] pr-6 font-mono text-[10px] leading-none tracking-[0.2em] text-[var(--charcoal)] sm:text-[11px]">
          {Array.from({ length: 14 }).map((_, i) => (
            <span key={i} className="text-right tabular-nums">
              {String(i + 1).padStart(3, "0")}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}

/** Product catalog, diagonal lattice + node ring. */
function CatalogLatticeBackdrop() {
  return (
    <>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_65%_50%_at_15%_20%,rgb(184_134_11/0.14),transparent_55%)]" />
      <svg
        className="absolute inset-0 h-full w-full text-[var(--gold)] opacity-[0.22]"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        fill="none"
      >
        {Array.from({ length: 12 }).map((_, i) => (
          <line
            key={`d1-${i}`}
            x1={i * 9}
            y1="0"
            x2={i * 9 + 40}
            y2="100"
            stroke="currentColor"
            strokeWidth="0.14"
          />
        ))}
        {Array.from({ length: 12 }).map((_, i) => (
          <line
            key={`d2-${i}`}
            x1={100 - i * 9}
            y1="0"
            x2={60 - i * 9}
            y2="100"
            stroke="currentColor"
            strokeWidth="0.12"
            opacity="0.7"
          />
        ))}
      </svg>
      <svg
        className="absolute -right-6 top-1/4 h-48 w-48 text-[var(--charcoal)] opacity-[0.1] sm:h-64 sm:w-64"
        viewBox="0 0 120 120"
        fill="none"
      >
        <polygon
          points="60,12 108,36 108,84 60,108 12,84 12,36"
          stroke="currentColor"
          strokeWidth="0.75"
        />
        <circle cx="60" cy="60" r="24" stroke="currentColor" strokeWidth="0.55" opacity="0.65" />
      </svg>
    </>
  );
}

/** Topics / knowledge, scattered constellation on dark or light fields. */
function ConstellationBackdrop({ onDark }: { onDark: boolean }) {
  const ink = onDark ? "text-[var(--gold)]" : "text-[var(--charcoal)]";

  return (
    <>
      <div
        className={cn(
          "absolute inset-0",
          onDark
            ? "bg-[radial-gradient(circle_at_20%_30%,rgb(184_134_11/0.18),transparent_45%)]"
            : "bg-[radial-gradient(circle_at_80%_25%,rgb(184_134_11/0.11),transparent_48%)]",
        )}
      />
      <svg
        className={cn("absolute inset-0 h-full w-full opacity-[0.24]", onDark && "opacity-[0.3]", ink)}
        viewBox="0 0 400 300"
        fill="none"
      >
        <path
          d="M40 220 L120 180 L200 140 L280 100 L360 60"
          stroke="currentColor"
          strokeWidth="0.6"
          opacity="0.45"
          strokeDasharray="4 6"
        />
        <path d="M80 260 L160 200 L240 160" stroke="currentColor" strokeWidth="0.5" opacity="0.35" />
        {[
          [40, 220],
          [120, 180],
          [200, 140],
          [280, 100],
          [360, 60],
          [80, 260],
          [160, 200],
          [240, 160],
          [320, 200],
        ].map(([cx, cy]) => (
          <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="3" fill="currentColor" opacity="0.7" />
        ))}
      </svg>
    </>
  );
}

/** Contact, concentric signal ripples from horizon. */
function SignalWavesBackdrop({ onDark }: { onDark: boolean }) {
  const ink = onDark ? "text-[var(--gold)]" : "text-[var(--charcoal)]";

  return (
    <>
      <div
        className={cn(
          "absolute inset-0",
          onDark
            ? "bg-[radial-gradient(ellipse_90%_70%_at_50%_110%,rgb(184_134_11/0.22),transparent_60%)]"
            : "bg-[radial-gradient(ellipse_90%_70%_at_50%_110%,rgb(184_134_11/0.14),transparent_60%)]",
        )}
      />
      <svg
        className={cn(
          "absolute bottom-0 left-1/2 h-[min(65%,380px)] w-[min(95%,640px)] -translate-x-1/2 opacity-[0.2]",
          onDark && "opacity-[0.28]",
          ink,
        )}
        viewBox="0 0 640 280"
        fill="none"
      >
        {[40, 70, 100, 130, 160].map((r, i) => (
          <path
            key={r}
            d={`M ${320 - r * 2.2} 280 Q 320 ${280 - r * 0.55} ${320 + r * 2.2} 280`}
            stroke="currentColor"
            strokeWidth={0.8 - i * 0.1}
            opacity={0.55 - i * 0.08}
          />
        ))}
        <circle cx="320" cy="280" r="4" fill="currentColor" opacity="0.8" />
      </svg>
    </>
  );
}

/** Methodology fold, three ascending delivery steps + compass guide. */
function DeliveryStepsBackdrop() {
  return (
    <>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_72%_58%_at_92%_8%,rgb(184_134_11/0.26),transparent_62%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_42%_at_4%_88%,rgb(58_56_52/0.11),transparent_55%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(118deg,transparent_42%,rgb(184_134_11/0.08)_50%,transparent_58%)]" />
      <svg
        className="absolute -right-10 top-0 h-[min(92%,520px)] w-[min(68%,480px)] text-[var(--gold)] opacity-[0.42] sm:-right-6 sm:top-2 md:opacity-[0.46]"
        viewBox="0 0 360 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M48 328 C120 300, 168 248, 204 188 S268 72, 312 48"
          stroke="currentColor"
          strokeWidth="1.35"
          strokeLinecap="round"
          opacity="0.72"
        />
        <path
          d="M48 328 C120 300, 168 248, 204 188"
          stroke="currentColor"
          strokeWidth="0.85"
          strokeLinecap="round"
          strokeDasharray="6 8"
          opacity="0.48"
        />
        {[
          { x: 48, y: 328, w: 88, label: "01" },
          { x: 168, y: 220, w: 96, label: "02" },
          { x: 288, y: 88, w: 88, label: "03" },
        ].map(({ x, y, w, label }) => (
          <g key={`${x}-${y}`}>
            <line x1={x} y1={y} x2={x + w} y2={y} stroke="currentColor" strokeWidth="1" opacity="0.62" />
            <rect
              x={x + w * 0.5 - 18}
              y={y - 32}
              width="36"
              height="14"
              rx="2"
              stroke="currentColor"
              strokeWidth="0.5"
              fill="currentColor"
              fillOpacity="0.12"
              opacity="0.55"
            />
            <text
              x={x + w * 0.5}
              y={y - 22}
              textAnchor="middle"
              fill="currentColor"
              fontSize="8"
              fontFamily="ui-monospace, monospace"
              letterSpacing="0.12em"
              opacity="0.85"
            >
              {label}
            </text>
            <circle cx={x + w * 0.5} cy={y - 14} r="6" stroke="currentColor" strokeWidth="0.75" opacity="0.7" />
            <circle cx={x + w * 0.5} cy={y - 14} r="2.5" fill="currentColor" opacity="0.95" />
          </g>
        ))}
        <circle cx="312" cy="48" r="34" stroke="currentColor" strokeWidth="0.75" opacity="0.55" />
        <circle cx="312" cy="48" r="22" stroke="currentColor" strokeWidth="0.6" opacity="0.42" />
        <path
          d="M312 24 L312 72 M284 48 L340 48"
          stroke="currentColor"
          strokeWidth="0.55"
          opacity="0.58"
        />
        <path
          d="M312 34 L320 48 L312 62 L304 48 Z"
          stroke="currentColor"
          strokeWidth="0.5"
          fill="currentColor"
          fillOpacity="0.22"
        />
      </svg>
      <svg
        className="absolute left-0 top-0 h-full w-[min(42%,280px)] text-[var(--charcoal)] opacity-[0.14]"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        fill="none"
      >
        {Array.from({ length: 16 }).map((_, i) => (
          <line
            key={i}
            x1={i * 6.25}
            y1="0"
            x2={i * 6.25}
            y2="100"
            stroke="currentColor"
            strokeWidth="0.18"
          />
        ))}
        {[20, 40, 60, 80].map((y) => (
          <line
            key={y}
            x1="0"
            y1={y}
            x2="100"
            y2={y}
            stroke="currentColor"
            strokeWidth="0.1"
            opacity="0.65"
          />
        ))}
      </svg>
      <svg
        className="absolute bottom-[8%] left-[38%] h-36 w-36 text-[var(--gold)] opacity-[0.22] sm:h-40 sm:w-40 md:opacity-[0.26]"
        viewBox="0 0 96 96"
        fill="none"
      >
        <circle cx="48" cy="48" r="38" stroke="currentColor" strokeWidth="0.65" />
        <circle cx="48" cy="48" r="24" stroke="currentColor" strokeWidth="0.55" opacity="0.72" />
        <circle cx="48" cy="48" r="10" stroke="currentColor" strokeWidth="0.45" opacity="0.55" />
        <path d="M48 16 L48 80 M16 48 L80 48" stroke="currentColor" strokeWidth="0.48" opacity="0.5" />
        <path
          d="M48 28 L52 44 L48 60 L44 44 Z"
          stroke="currentColor"
          strokeWidth="0.4"
          fill="currentColor"
          fillOpacity="0.18"
        />
      </svg>
      <svg
        className="absolute right-[28%] top-[52%] hidden h-24 w-24 text-[var(--charcoal)] opacity-[0.1] md:block lg:right-[32%]"
        viewBox="0 0 80 80"
        fill="none"
      >
        <rect x="8" y="8" width="64" height="64" rx="3" stroke="currentColor" strokeWidth="0.65" />
        <path d="M8 28h64M8 48h64M28 8v64M48 8v64" stroke="currentColor" strokeWidth="0.45" opacity="0.55" />
      </svg>
    </>
  );
}

/** Careers, stacked folio sheets. */
function FolioStackBackdrop() {
  return (
    <>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_18%_22%,rgb(184_134_11/0.13),transparent_55%)]" />
      <svg
        className="absolute right-[6%] top-[18%] h-[min(72%,440px)] w-[min(48%,360px)] text-[var(--charcoal)] opacity-[0.14]"
        viewBox="0 0 280 360"
        fill="none"
      >
        <rect x="24" y="48" width="200" height="260" rx="4" stroke="currentColor" strokeWidth="0.8" opacity="0.45" />
        <rect x="40" y="32" width="200" height="260" rx="4" stroke="currentColor" strokeWidth="0.75" opacity="0.6" />
        <rect x="56" y="16" width="200" height="260" rx="4" stroke="currentColor" strokeWidth="0.85" />
        {[72, 96, 120, 144].map((y) => (
          <line key={y} x1="72" y1={y} x2="220" y2={y} stroke="currentColor" strokeWidth="0.45" opacity="0.35" />
        ))}
      </svg>
      <svg
        className="absolute left-[4%] bottom-[8%] h-28 w-28 text-[var(--gold)] opacity-[0.2]"
        viewBox="0 0 80 80"
        fill="none"
      >
        <circle cx="40" cy="40" r="30" stroke="currentColor" strokeWidth="0.6" />
        <path d="M40 16 L40 64 M16 40 L64 40" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
      </svg>
    </>
  );
}

/** Topics, tilted orbital rings. */
function TopicOrbitBackdrop({ onDark }: { onDark: boolean }) {
  const ink = onDark ? "text-[var(--gold)]" : "text-[var(--charcoal)]";

  return (
    <>
      <div
        className={cn(
          "absolute inset-0",
          onDark
            ? "bg-[radial-gradient(circle_at_75%_30%,rgb(184_134_11/0.2),transparent_50%)]"
            : "bg-[radial-gradient(circle_at_75%_30%,rgb(184_134_11/0.1),transparent_50%)]",
        )}
      />
      <svg
        className={cn(
          "absolute -right-8 top-1/2 h-[min(85%,480px)] w-[min(55%,420px)] -translate-y-1/2 opacity-[0.24]",
          onDark && "opacity-[0.32]",
          ink,
        )}
        viewBox="0 0 360 360"
        fill="none"
      >
        <ellipse cx="180" cy="180" rx="140" ry="48" stroke="currentColor" strokeWidth="0.75" transform="rotate(-18 180 180)" />
        <ellipse cx="180" cy="180" rx="100" ry="34" stroke="currentColor" strokeWidth="0.65" opacity="0.7" transform="rotate(12 180 180)" />
        <ellipse cx="180" cy="180" rx="60" ry="20" stroke="currentColor" strokeWidth="0.55" opacity="0.55" transform="rotate(-8 180 180)" />
        <circle cx="180" cy="180" r="5" fill="currentColor" />
        <circle cx="290" cy="150" r="4" fill="currentColor" opacity="0.75" />
        <circle cx="90" cy="210" r="3.5" fill="currentColor" opacity="0.65" />
      </svg>
    </>
  );
}

/** Compare, balance beam motif. */
function CompareScalesBackdrop() {
  return (
    <>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_45%_at_50%_85%,rgb(184_134_11/0.12),transparent_58%)]" />
      <svg
        className="absolute bottom-[6%] left-1/2 h-[min(58%,320px)] w-[min(80%,480px)] -translate-x-1/2 text-[var(--charcoal)] opacity-[0.16]"
        viewBox="0 0 480 280"
        fill="none"
      >
        <line x1="240" y1="40" x2="240" y2="240" stroke="currentColor" strokeWidth="1" />
        <line x1="80" y1="120" x2="400" y2="120" stroke="currentColor" strokeWidth="0.85" />
        <path d="M80 120 L60 200 L100 200 Z" stroke="currentColor" strokeWidth="0.7" fill="currentColor" fillOpacity="0.08" />
        <path d="M400 120 L380 200 L420 200 Z" stroke="currentColor" strokeWidth="0.7" fill="currentColor" fillOpacity="0.08" />
        <circle cx="240" cy="40" r="6" stroke="currentColor" strokeWidth="0.7" />
      </svg>
      <svg
        className="absolute right-[10%] top-[14%] h-24 w-24 text-[var(--gold)] opacity-[0.18]"
        viewBox="0 0 80 80"
        fill="none"
      >
        <path d="M40 8 L72 72 L8 72 Z" stroke="currentColor" strokeWidth="0.55" opacity="0.5" />
      </svg>
    </>
  );
}

/** Knowledge base, indexed archive folio tabs. */
function ArchiveFolioBackdrop() {
  return (
    <>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_12%_18%,rgb(184_134_11/0.11),transparent_52%)]" />
      <svg
        className="absolute left-0 top-0 h-full w-[min(42%,280px)] text-[var(--charcoal)] opacity-[0.1]"
        viewBox="0 0 140 400"
        preserveAspectRatio="none"
        fill="none"
      >
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <rect
            key={i}
            x={8 + i * 4}
            y={24 + i * 48}
            width="120"
            height="36"
            rx="2"
            stroke="currentColor"
            strokeWidth="0.6"
            opacity={0.5 + i * 0.08}
          />
        ))}
      </svg>
      <svg
        className="absolute right-[5%] top-[20%] h-40 w-40 text-[var(--gold)] opacity-[0.2]"
        viewBox="0 0 100 100"
        fill="none"
      >
        <rect x="20" y="20" width="60" height="60" rx="3" stroke="currentColor" strokeWidth="0.7" />
        <line x1="32" y1="38" x2="68" y2="38" stroke="currentColor" strokeWidth="0.45" opacity="0.6" />
        <line x1="32" y1="50" x2="68" y2="50" stroke="currentColor" strokeWidth="0.45" opacity="0.5" />
        <line x1="32" y1="62" x2="56" y2="62" stroke="currentColor" strokeWidth="0.45" opacity="0.4" />
      </svg>
    </>
  );
}

/** For AI, structured retrieval matrix grid. */
function RetrievalMatrixBackdrop({ onDark }: { onDark: boolean }) {
  const ink = onDark ? "text-[var(--gold)]" : "text-[var(--charcoal)]";

  return (
    <>
      <div
        className={cn(
          "absolute inset-0",
          onDark
            ? "bg-[radial-gradient(circle_at_30%_40%,rgb(184_134_11/0.18),transparent_48%)]"
            : "bg-[radial-gradient(circle_at_30%_40%,rgb(184_134_11/0.1),transparent_48%)]",
        )}
      />
      <svg
        className={cn("absolute inset-0 h-full w-full opacity-[0.22]", onDark && "opacity-[0.28]", ink)}
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        fill="none"
      >
        {Array.from({ length: 10 }).map((_, i) => (
          <line key={`v-${i}`} x1={i * 10} y1="0" x2={i * 10} y2="100" stroke="currentColor" strokeWidth="0.12" />
        ))}
        {Array.from({ length: 8 }).map((_, i) => (
          <line key={`h-${i}`} x1="0" y1={i * 12.5} x2="100" y2={i * 12.5} stroke="currentColor" strokeWidth="0.1" opacity="0.65" />
        ))}
        <rect x="8" y="12" width="28" height="8" rx="1" stroke="currentColor" strokeWidth="0.35" opacity="0.55" />
        <rect x="8" y="28" width="36" height="8" rx="1" stroke="currentColor" strokeWidth="0.35" opacity="0.45" />
        <rect x="8" y="44" width="24" height="8" rx="1" stroke="currentColor" strokeWidth="0.35" opacity="0.4" />
      </svg>
    </>
  );
}

/** Quantum, vault seal with concentric security rings. */
function VaultSealBackdrop({ onDark }: { onDark: boolean }) {
  const ink = onDark ? "text-[var(--gold)]" : "text-[var(--charcoal)]";

  return (
    <>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_88%_18%,rgb(184_134_11/0.24),transparent_58%)]" />
      <svg
        className={cn(
          "absolute -right-6 top-12 h-[min(80%,460px)] w-[min(50%,380px)] opacity-[0.3]",
          onDark && "opacity-[0.36]",
          ink,
        )}
        viewBox="0 0 320 360"
        fill="none"
      >
        <circle cx="200" cy="160" r="100" stroke="currentColor" strokeWidth="0.85" />
        <circle cx="200" cy="160" r="72" stroke="currentColor" strokeWidth="0.7" opacity="0.75" />
        <circle cx="200" cy="160" r="44" stroke="currentColor" strokeWidth="0.6" opacity="0.6" />
        <path
          d="M200 116 L212 148 L246 148 L218 168 L228 200 L200 180 L172 200 L182 168 L154 148 L188 148 Z"
          stroke="currentColor"
          strokeWidth="0.55"
          fill="currentColor"
          fillOpacity="0.12"
        />
        {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
          <line
            key={deg}
            x1="200"
            y1="160"
            x2={200 + 88 * Math.cos((deg * Math.PI) / 180)}
            y2={160 + 88 * Math.sin((deg * Math.PI) / 180)}
            stroke="currentColor"
            strokeWidth="0.35"
            opacity="0.35"
          />
        ))}
      </svg>
    </>
  );
}

/** Site footer, light ledger lines + institutional closing seal. */
function FooterLedgerBackdrop() {
  return (
    <>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_65%_50%_at_92%_88%,rgb(184_134_11/0.09),transparent_58%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_45%_40%_at_8%_20%,rgb(58_56_52/0.04),transparent_55%)]" />
      <svg
        className="absolute inset-0 h-full w-full text-[var(--gold)] opacity-[0.11]"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        fill="none"
      >
        {Array.from({ length: 24 }).map((_, i) => (
          <line
            key={`v-${i}`}
            x1={2 + i * 4.1}
            y1="0"
            x2={2 + i * 4.1}
            y2="100"
            stroke="currentColor"
            strokeWidth="0.1"
          />
        ))}
        {[22, 38, 54, 70, 86].map((y) => (
          <line
            key={`h-${y}`}
            x1="0"
            y1={y}
            x2="100"
            y2={y}
            stroke="currentColor"
            strokeWidth="0.07"
            opacity="0.65"
          />
        ))}
      </svg>
      <svg
        className="absolute right-[6%] bottom-[10%] h-[min(42%,180px)] w-[min(28%,180px)] text-[var(--charcoal)] opacity-[0.07] sm:right-[8%]"
        viewBox="0 0 160 160"
        fill="none"
      >
        <circle cx="80" cy="80" r="68" stroke="currentColor" strokeWidth="0.75" />
        <circle cx="80" cy="80" r="52" stroke="currentColor" strokeWidth="0.6" opacity="0.75" />
        <circle cx="80" cy="80" r="36" stroke="currentColor" strokeWidth="0.5" opacity="0.55" />
        <path
          d="M80 52 L86 72 L106 72 L90 84 L96 104 L80 92 L64 104 L70 84 L54 72 L74 72 Z"
          stroke="currentColor"
          strokeWidth="0.45"
          fill="currentColor"
          fillOpacity="0.08"
        />
      </svg>
      <svg
        className="absolute left-[5%] top-[18%] hidden h-24 w-24 text-[var(--gold)] opacity-[0.12] md:block"
        viewBox="0 0 80 80"
        fill="none"
      >
        <path d="M8 40 H72" stroke="currentColor" strokeWidth="0.5" />
        <path d="M40 8 V72" stroke="currentColor" strokeWidth="0.5" opacity="0.55" />
        <rect x="16" y="16" width="48" height="48" rx="2" stroke="currentColor" strokeWidth="0.45" opacity="0.45" />
      </svg>
    </>
  );
}
