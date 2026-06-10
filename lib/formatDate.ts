const DATE_FORMATTER = new Intl.DateTimeFormat("fr-FR", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

const DATE_FORMATTER_SHORT = new Intl.DateTimeFormat("fr-FR", {
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
});

export function formatDateLong(date: Date | string): string {
  const d = typeof date === "string" ? new Date(date) : date;
  return DATE_FORMATTER.format(d);
}

export function formatDateShort(date: Date | string): string {
  const d = typeof date === "string" ? new Date(date) : date;
  return DATE_FORMATTER_SHORT.format(d);
}

export function toISODate(date: Date): string {
  return date.toISOString().split("T")[0] ?? "";
}

export function todayISO(): string {
  return toISODate(new Date());
}
