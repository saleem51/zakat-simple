"use client";

import { useZakatStore } from "@/store/zakatStore";
import { CurrencyInput } from "@/components/calculator/shared/CurrencyInput";

export function DebtsAdvancedSection() {
  const debts = useZakatStore((s) => s.debts);
  const professional = useZakatStore((s) => s.assets.professional);
  const setDebts = useZakatStore((s) => s.setDebts);

  // N'afficher cette section que si l'utilisateur a des actifs professionnels
  if (!professional.isActive) return null;

  return (
    <div className="rounded-[14px] border border-neutral-200 bg-white p-5">
      <p className="text-[15px] font-semibold text-neutral-900 mb-4">
        Dettes professionnelles
      </p>
      <CurrencyInput
        id="debts-professional"
        label="Dettes professionnelles exigibles dans les 12 prochains mois"
        value={debts.professional}
        onChange={(v) => setDebts({ professional: v })}
        hint="Fournisseurs, charges sociales dues, TVA à rembourser…"
      />
    </div>
  );
}
