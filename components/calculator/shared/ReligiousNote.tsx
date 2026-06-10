import { cn } from "@/lib/utils";
import { Info, Zap, AlertCircle } from "lucide-react";

type NoteVariant = "info" | "divergence" | "condition";

interface ReligiousNoteProps {
  variant: NoteVariant;
  title?: string;
  children: React.ReactNode;
  className?: string;
}

const VARIANT_CONFIG = {
  info: {
    border: "border-l-info-500",
    bg: "bg-info-50",
    icon: Info,
    iconColor: "text-info-500",
    titleColor: "text-info-700",
  },
  divergence: {
    border: "border-l-warning-400",
    bg: "bg-warning-50",
    icon: Zap,
    iconColor: "text-warning-400",
    titleColor: "text-warning-700",
  },
  condition: {
    border: "border-neutral-200",
    bg: "bg-neutral-50",
    icon: AlertCircle,
    iconColor: "text-neutral-500",
    titleColor: "text-neutral-800",
  },
} as const;

/**
 * Encart d'avertissement religieux — jamais masquable.
 * 3 variantes : info (bleu), divergence (ambre), condition (neutre).
 */
export function ReligiousNote({
  variant,
  title,
  children,
  className,
}: ReligiousNoteProps) {
  const config = VARIANT_CONFIG[variant];
  const Icon = config.icon;

  const isCondition = variant === "condition";

  return (
    <div
      role="note"
      aria-label="Note religieuse"
      className={cn(
        "rounded-[6px] px-4 py-3.5",
        config.bg,
        isCondition
          ? "border border-neutral-200"
          : `border-l-[3px] ${config.border}`,
        className
      )}
    >
      <div className="flex gap-3">
        <Icon
          className={cn("mt-0.5 h-4 w-4 shrink-0", config.iconColor)}
          aria-hidden
        />
        <div className="space-y-1">
          {title && (
            <p className={cn("text-[13px] font-semibold", config.titleColor)}>
              {title}
            </p>
          )}
          <div className="text-[13px] leading-relaxed text-neutral-700">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
