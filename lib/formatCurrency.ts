const FORMATTER = new Intl.NumberFormat("fr-FR", {
  style: "currency",
  currency: "EUR",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const FORMATTER_NO_SYMBOL = new Intl.NumberFormat("fr-FR", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

export function formatCurrency(amount: number): string {
  return FORMATTER.format(amount);
}

export function formatCurrencyNoSymbol(amount: number): string {
  return FORMATTER_NO_SYMBOL.format(amount);
}

export function formatGrams(grams: number): string {
  return new Intl.NumberFormat("fr-FR", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 1,
  }).format(grams) + " g";
}
