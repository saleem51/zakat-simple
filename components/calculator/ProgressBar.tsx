"use client";

import { ArrowLeft } from "lucide-react";
import { CALCULATOR_STEPS } from "@/engine/constants";
import { useZakatStore } from "@/store/zakatStore";
import { cn } from "@/lib/utils";

const STEP_LABELS: Record<number, string> = {
  1: "Profil",
  2: "Contexte",
  3: "Actifs",
  4: "Dettes",
};

export function ProgressBar() {
  const currentStep = useZakatStore((s) => s.currentStep);
  const prevStep = useZakatStore((s) => s.prevStep);

  const totalIndicatorSteps = CALCULATOR_STEPS - 1;
  const progress = (currentStep / totalIndicatorSteps) * 100;
  const label = STEP_LABELS[currentStep] ?? "";
  const showBack = currentStep > 1 && currentStep < CALCULATOR_STEPS;

  return (
    <header
      className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-neutral-100"
      role="banner"
    >
      <div className="mx-auto flex h-16 max-w-xl items-center justify-between px-5">
        {/* Bouton Retour */}
        <div className="w-10 shrink-0">
          {showBack ? (
            <button
              onClick={prevStep}
              aria-label="Étape précédente"
              className={cn(
                "flex h-9 w-9 items-center justify-center rounded-full",
                "text-neutral-500 hover:bg-neutral-100 hover:text-neutral-900",
                "transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600"
              )}
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
          ) : (
            <div className="h-9 w-9" />
          )}
        </div>

        {/* Indicateurs d'étape — pill animé */}
        <div
          className="flex items-center gap-1.5"
          role="progressbar"
          aria-valuenow={currentStep}
          aria-valuemin={1}
          aria-valuemax={totalIndicatorSteps}
          aria-label={`Étape ${currentStep} sur ${totalIndicatorSteps}`}
        >
          {Array.from({ length: totalIndicatorSteps }, (_, i) => i + 1).map((step) => {
            const isPast = step < currentStep;
            const isCurrent = step === currentStep;
            return (
              <div
                key={step}
                className={cn(
                  "h-2 rounded-full transition-all duration-300 ease-out",
                  isPast && "w-2 bg-brand-600",
                  isCurrent && "w-7 bg-brand-600",
                  !isPast && !isCurrent && "w-2 bg-neutral-200"
                )}
              />
            );
          })}
        </div>

        {/* Label courant */}
        <div className="w-16 shrink-0 text-right">
          <span className="text-[12px] font-medium text-neutral-400 tabular-nums">
            {label}
          </span>
        </div>
      </div>

      {/* Barre de fond */}
      <div className="h-[2px] w-full bg-neutral-100">
        <div
          className="h-full bg-gradient-to-r from-brand-500 to-brand-600 transition-all duration-500 ease-out"
          style={{ width: `${Math.min(progress, 100)}%` }}
        />
      </div>
    </header>
  );
}
