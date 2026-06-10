"use client";

import { useEffect, useRef, useState } from "react";
import type { ZakatResult } from "@/engine/types";
import { formatCurrency, formatCurrencyNoSymbol } from "@/lib/formatCurrency";
import { formatDateLong } from "@/lib/formatDate";

interface ResultCardProps {
  result: ZakatResult;
}

function useCountUp(target: number, duration = 900) {
  const [current, setCurrent] = useState(0);
  const startRef = useRef<number | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (target === 0) {
      setCurrent(0);
      return;
    }
    startRef.current = null;

    const animate = (timestamp: number) => {
      if (startRef.current === null) startRef.current = timestamp;
      const elapsed = timestamp - startRef.current;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCurrent(Math.round(target * eased * 100) / 100);
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      }
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [target, duration]);

  return current;
}

export function ResultCard({ result }: ResultCardProps) {
  const animatedAmount = useCountUp(result.zakatAmount);

  if (!result.isAboveNisab) {
    return (
      <div className="rounded-[20px] bg-neutral-950 px-8 py-10 text-center space-y-5">
        <p className="text-[11px] font-semibold uppercase tracking-widest text-neutral-500">
          Résultat · {formatDateLong(result.calculationDate)}
        </p>
        <div className="space-y-2">
          <p className="text-[22px] font-semibold text-white leading-snug">
            La Zakāt n&apos;est pas due
          </p>
          <p className="text-[15px] text-neutral-400">
            Votre patrimoine net est inférieur au niṣāb.
          </p>
        </div>
        <div className="flex justify-center gap-6 pt-2">
          <div className="text-center">
            <p className="text-[11px] uppercase tracking-wide text-neutral-600 mb-1">Patrimoine</p>
            <p className="text-[16px] font-semibold tabular-nums text-neutral-300">
              {formatCurrency(result.netZakatableWealth)}
            </p>
          </div>
          <div className="w-px bg-neutral-800" />
          <div className="text-center">
            <p className="text-[11px] uppercase tracking-wide text-neutral-600 mb-1">Niṣāb</p>
            <p className="text-[16px] font-semibold tabular-nums text-neutral-300">
              {formatCurrency(result.nisabValue)}
            </p>
          </div>
        </div>
        <p className="text-[13px] text-neutral-600 italic pt-1">
          Qu&apos;Allah bénisse votre démarche.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-[20px] bg-neutral-950 px-8 py-10 space-y-8">
      {/* Label */}
      <p className="text-[11px] font-semibold uppercase tracking-widest text-neutral-500">
        Votre Zakāt estimée · {formatDateLong(result.calculationDate)}
      </p>

      {/* Montant principal */}
      <div className="space-y-2">
        <p
          className="font-bold tabular-nums text-white leading-none"
          style={{ fontSize: "clamp(52px, 12vw, 72px)" }}
          aria-live="polite"
          aria-label={`Montant de la Zakāt : ${formatCurrency(result.zakatAmount)}`}
        >
          {formatCurrencyNoSymbol(animatedAmount)}
          <span className="text-neutral-500 ml-2" style={{ fontSize: "0.5em" }}>€</span>
        </p>
        <p className="text-[14px] text-neutral-500">
          2,5 % de{" "}
          <span className="tabular-nums text-neutral-400 font-medium">
            {formatCurrency(result.netZakatableWealth)}
          </span>{" "}
          de patrimoine net zakatable
        </p>
      </div>

      {/* Métriques secondaires */}
      <div className="grid grid-cols-3 gap-4 border-t border-neutral-800 pt-6">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-wider text-neutral-600 mb-1.5">
            Actifs bruts
          </p>
          <p className="text-[14px] font-semibold tabular-nums text-neutral-300">
            {formatCurrency(result.grossAssets)}
          </p>
        </div>
        {result.deductibleDebts > 0 && (
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-wider text-neutral-600 mb-1.5">
              Dettes déduites
            </p>
            <p className="text-[14px] font-semibold tabular-nums text-error-400">
              − {formatCurrency(result.deductibleDebts)}
            </p>
          </div>
        )}
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-wider text-neutral-600 mb-1.5">
            Niṣāb
          </p>
          <div className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-success-500 shrink-0" />
            <p className="text-[14px] font-semibold tabular-nums text-neutral-300">
              {formatCurrency(result.nisabValue)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
