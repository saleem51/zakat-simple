import type { AllDebts, DebtLineItem } from "./types";

interface DebtsResult {
  total: number;
  lines: DebtLineItem[];
}

export function computeDeductibleDebts(debts: AllDebts): DebtsResult {
  const lines: DebtLineItem[] = [];

  if (debts.personal > 0) {
    lines.push({
      label: "Dettes personnelles (court terme)",
      amount: debts.personal,
    });
  }

  if (debts.professional > 0) {
    lines.push({
      label: "Dettes professionnelles immédiates",
      amount: debts.professional,
    });
  }

  const total = lines.reduce((sum, l) => sum + l.amount, 0);

  return { total: Math.round(total * 100) / 100, lines };
}
