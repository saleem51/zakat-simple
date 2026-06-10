"use client";

import { useZakatStore } from "@/store/zakatStore";
import { Button } from "@/components/ui/button";
import { DebtsSimpleSection } from "@/components/calculator/debts/DebtsSimpleSection";
import { DebtsAdvancedSection } from "@/components/calculator/debts/DebtsAdvancedSection";
import { formatCurrency } from "@/lib/formatCurrency";
import { computeDeductibleDebts } from "@/engine/debts";

export function StepDebts() {
  const debts = useZakatStore((s) => s.debts);
  const nextStep = useZakatStore((s) => s.nextStep);

  const { total } = computeDeductibleDebts(debts);

  return (
    <div className="space-y-10">
      <div className="space-y-3">
        <p className="text-[12px] font-semibold uppercase tracking-widest text-brand-600">
          Étape 4
        </p>
        <h1 className="text-[32px] font-bold text-neutral-900 leading-tight tracking-tight">
          Dettes personnelles
        </h1>
        <p className="text-[15px] text-neutral-500 leading-relaxed">
          Seules les dettes exigibles à court terme sont déductibles.
          Si vous n&apos;en avez pas, passez directement à la suite.
        </p>
      </div>

      <div className="space-y-6">
        <DebtsSimpleSection />
        <DebtsAdvancedSection />
      </div>

      {total > 0 && (
        <div className="rounded-[14px] border border-error-200 bg-error-50 px-5 py-4 flex justify-between items-center">
          <p className="text-[13px] font-medium text-error-700">
            Total déduit
          </p>
          <p className="text-[18px] font-bold tabular-nums text-error-700">
            − {formatCurrency(total)}
          </p>
        </div>
      )}

      <Button onClick={nextStep} fullWidth>
        Calculer ma Zakāt
      </Button>
    </div>
  );
}
