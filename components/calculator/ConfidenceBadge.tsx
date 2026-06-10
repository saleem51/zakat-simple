import type { ConfidenceResult } from "@/engine/types";
import { getConfidenceLabel } from "@/engine/confidence";
import { cn } from "@/lib/utils";

interface ConfidenceBadgeProps {
  confidence: ConfidenceResult;
  className?: string;
}

const LEVEL_CONFIG = {
  reliable: {
    dot: "bg-success-500",
    text: "text-success-700",
    bg: "bg-success-50",
    border: "border-success-200",
  },
  probably_reliable: {
    dot: "bg-warning-400",
    text: "text-warning-700",
    bg: "bg-warning-50",
    border: "border-warning-200",
  },
  verify: {
    dot: "bg-error-500",
    text: "text-error-700",
    bg: "bg-error-50",
    border: "border-error-200",
  },
} as const;

const FACTOR_ICONS = {
  positive: "✓",
  warning: "⚠",
  negative: "✗",
} as const;

const FACTOR_COLORS = {
  positive: "text-success-600",
  warning: "text-warning-600",
  negative: "text-error-600",
} as const;

export function ConfidenceBadge({ confidence, className }: ConfidenceBadgeProps) {
  const config = LEVEL_CONFIG[confidence.level];
  const label = getConfidenceLabel(confidence.level);

  return (
    <div
      role="region"
      aria-label="Indice de confiance du calcul"
      className={cn(
        "rounded-[14px] border px-5 py-4 space-y-3",
        config.bg,
        config.border,
        className
      )}
    >
      <div className="flex items-center gap-2.5">
        <span
          className={cn("h-2 w-2 rounded-full shrink-0", config.dot)}
          aria-hidden
        />
        <p className={cn("text-[14px] font-semibold", config.text)}>
          {label}
        </p>
      </div>

      <ul className="space-y-1.5" aria-label="Détail des facteurs">
        {confidence.factors.map((factor, i) => (
          <li key={i} className="flex items-start gap-2.5">
            <span
              className={cn(
                "mt-0.5 text-[11px] font-bold shrink-0 w-3 text-center",
                FACTOR_COLORS[factor.type]
              )}
              aria-hidden
            >
              {FACTOR_ICONS[factor.type]}
            </span>
            <span className="text-[13px] text-neutral-600">{factor.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
