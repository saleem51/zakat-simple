"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { ZakatResult } from "@/engine/types";
import { formatCurrency } from "@/lib/formatCurrency";
import { cn } from "@/lib/utils";

interface BreakdownTableProps {
  result: ZakatResult;
}

export function BreakdownTable({ result }: BreakdownTableProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-[14px] border border-neutral-200 bg-white overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between px-5 py-4 hover:bg-neutral-50/80 transition-colors"
        aria-expanded={open}
        aria-controls="breakdown-content"
      >
        <span className="text-[14px] font-semibold text-neutral-900">
          Détail du calcul
        </span>
        <ChevronDown
          className={cn(
            "h-4 w-4 text-neutral-400 transition-transform duration-200",
            open && "rotate-180"
          )}
          aria-hidden
        />
      </button>

      {open && (
        <div id="breakdown-content" className="border-t border-neutral-100">
          {/* Actifs */}
          <div className="px-5 py-4 space-y-1">
            <p className="text-[10px] font-semibold uppercase tracking-widest text-neutral-400 mb-3">
              Actifs zakātables
            </p>
            {result.assetLines.map((line, i) => (
              <div
                key={i}
                className="flex items-start justify-between gap-4 py-2 border-b border-neutral-50 last:border-0"
              >
                <div>
                  <p className="text-[13px] text-neutral-700">{line.label}</p>
                  {(line.isEstimate || line.hasComplexity) && (
                    <p className="text-[11px] text-neutral-400 mt-0.5">
                      {line.isEstimate ? "Valeur estimée" : "Méthode simplifiée"}
                    </p>
                  )}
                </div>
                <div className="text-right shrink-0">
                  <p className="text-[13px] tabular-nums font-medium text-neutral-600">
                    {formatCurrency(line.baseAmount)}
                  </p>
                  <p className="text-[11px] tabular-nums text-brand-600 mt-0.5">
                    → {formatCurrency(line.zakatAmount)}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {result.debtLines.length > 0 && (
            <div className="border-t border-neutral-100 px-5 py-4 space-y-1">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-neutral-400 mb-3">
                Dettes déduites
              </p>
              {result.debtLines.map((line, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between gap-4 py-2 border-b border-neutral-50 last:border-0"
                >
                  <p className="text-[13px] text-neutral-700">{line.label}</p>
                  <p className="text-[13px] tabular-nums font-medium text-error-600">
                    − {formatCurrency(line.amount)}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* Totaux */}
          <div className="border-t border-neutral-200 bg-neutral-50 px-5 py-4 space-y-2">
            <div className="flex justify-between text-[13px] text-neutral-500">
              <span>Actifs bruts</span>
              <span className="tabular-nums font-medium text-neutral-700">
                {formatCurrency(result.grossAssets)}
              </span>
            </div>
            {result.deductibleDebts > 0 && (
              <div className="flex justify-between text-[13px] text-neutral-500">
                <span>Dettes déductibles</span>
                <span className="tabular-nums font-medium text-error-600">
                  − {formatCurrency(result.deductibleDebts)}
                </span>
              </div>
            )}
            <div className="h-px bg-neutral-200 my-2" />
            <div className="flex justify-between text-[14px] font-semibold text-neutral-900">
              <span>Patrimoine net zakatable</span>
              <span className="tabular-nums">
                {formatCurrency(result.netZakatableWealth)}
              </span>
            </div>
            <div className="flex justify-between text-[15px] font-bold text-brand-600">
              <span>Zakāt due (2,5 %)</span>
              <span className="tabular-nums">{formatCurrency(result.zakatAmount)}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
