"use client";

import { useEffect } from "react";
import { useZakatStore } from "@/store/zakatStore";
import { computeZakat } from "@/engine/zakat";
import { getMetalPrices } from "@/engine/prices";
import { ResultCard } from "@/components/calculator/result/ResultCard";
import { ConfidenceBadge } from "@/components/calculator/ConfidenceBadge";
import { BreakdownTable } from "@/components/calculator/result/BreakdownTable";
import { PdfDownloadButton } from "@/components/calculator/result/PdfDownloadButton";
import { ReligiousNote } from "@/components/calculator/shared/ReligiousNote";
import { Button } from "@/components/ui/button";
import { HawlStatusBanner } from "@/components/calculator/shared/HawlStatusBanner";

const prices = getMetalPrices();

export function StepResult() {
  const assets = useZakatStore((s) => s.assets);
  const debts = useZakatStore((s) => s.debts);
  const context = useZakatStore((s) => s.context);
  const meta = useZakatStore((s) => s.meta);
  const result = useZakatStore((s) => s.result);
  const setResult = useZakatStore((s) => s.setResult);
  const reset = useZakatStore((s) => s.reset);

  useEffect(() => {
    const computed = computeZakat(assets, debts, context, meta, prices);
    setResult(computed);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (!result) {
    return (
      <div className="flex items-center justify-center py-24">
        <div className="space-y-3 text-center">
          <div className="h-8 w-8 rounded-full border-2 border-brand-600 border-t-transparent animate-spin mx-auto" />
          <p className="text-[14px] text-neutral-500">Calcul en cours…</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6 pb-8">
      {/* Avertissement ḥawl si non confirmé */}
      {context.hawlStatus !== "confirmed" && (
        <HawlStatusBanner status={context.hawlStatus} />
      )}

      {/* Bloc résultat principal */}
      <ResultCard result={result} />

      {/* Indice de confiance */}
      <ConfidenceBadge confidence={result.confidence} />

      {/* Ventilation détaillée */}
      <BreakdownTable result={result} />

      {/* Actions */}
      <div className="space-y-3 pt-2">
        <PdfDownloadButton result={result} />
        <Button variant="secondary" onClick={reset} fullWidth>
          Nouveau calcul
        </Button>
      </div>

      {/* Avertissement religieux */}
      <ReligiousNote variant="info">
        Ce résultat est fourni à titre indicatif et pédagogique. Il repose sur
        les avis reconnus des savants de Ahl as-Sunnah, mais ne constitue pas
        une fatwa et ne se substitue pas à l&apos;avis d&apos;un érudit qualifié.
        En cas de doute, nous vous recommandons de consulter un imam ou un spécialiste.
      </ReligiousNote>
    </div>
  );
}
