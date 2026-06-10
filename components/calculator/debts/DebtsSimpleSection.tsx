"use client";

import { useZakatStore } from "@/store/zakatStore";
import { CurrencyInput } from "@/components/calculator/shared/CurrencyInput";
import { ReligiousNote } from "@/components/calculator/shared/ReligiousNote";

export function DebtsSimpleSection() {
  const debts = useZakatStore((s) => s.debts);
  const setDebts = useZakatStore((s) => s.setDebts);

  return (
    <div className="space-y-4">
      <CurrencyInput
        id="debts-personal"
        label="Montant de dettes exigibles dans les 12 prochains mois"
        value={debts.personal}
        onChange={(v) => setDebts({ personal: v })}
        hint="Prêt personnel, dette envers la famille, loyer en retard, mensualités d'un crédit pour un bien zakatable…"
      />

      <ReligiousNote variant="divergence">
        Les savants ont des avis différents sur la déductibilité de certaines
        dettes, notamment les crédits immobiliers. Pour les situations complexes,
        consultez un érudit qualifié. Ce calculateur fournit une estimation
        indicative et ne se substitue pas à un avis religieux.
      </ReligiousNote>
    </div>
  );
}
