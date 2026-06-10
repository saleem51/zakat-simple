import type { NisabReference, HawlStatus, ConfidenceLevel } from "@/engine/types";

export function fmtEur(amount: number): string {
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
}

export function fmtDate(isoDate: string): string {
  const d = new Date(isoDate);
  return new Intl.DateTimeFormat("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(d);
}

export function nisabRefLabel(ref: NisabReference): string {
  return ref === "gold" ? "Or (85 g)" : "Argent (595 g)";
}

export function hawlLabel(status: HawlStatus): string {
  if (status === "confirmed") return "Confirmé";
  if (status === "uncertain") return "Incertain";
  return "Non atteint";
}

export function confidenceLabel(level: ConfidenceLevel): string {
  if (level === "reliable") return "Fiable";
  if (level === "probably_reliable") return "Probablement fiable";
  return "À vérifier";
}
