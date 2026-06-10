"use client";

import { useEffect } from "react";
import { useZakatStore } from "@/store/zakatStore";
import { ProgressBar } from "@/components/calculator/ProgressBar";
import { StepProfile } from "@/components/calculator/steps/StepProfile";
import { StepContext } from "@/components/calculator/steps/StepContext";
import { StepAssets } from "@/components/calculator/steps/StepAssets";
import { StepDebts } from "@/components/calculator/steps/StepDebts";
import { StepResult } from "@/components/calculator/steps/StepResult";

const STEPS: Record<number, React.ComponentType> = {
  1: StepProfile,
  2: StepContext,
  3: StepAssets,
  4: StepDebts,
  5: StepResult,
};

export function CalculatorShell() {
  const currentStep = useZakatStore((s) => s.currentStep);
  const prevStep = useZakatStore((s) => s.prevStep);

  useEffect(() => {
    useZakatStore.persist.rehydrate();
  }, []);

  useEffect(() => {
    const handlePopState = () => {
      if (currentStep > 1) {
        prevStep();
        window.history.pushState(null, "", window.location.href);
      }
    };

    window.history.pushState(null, "", window.location.href);
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [currentStep, prevStep]);

  const CurrentStep = STEPS[currentStep];
  const showProgress = currentStep < 5;

  return (
    <div className="flex min-h-screen flex-col bg-white">
      {showProgress && <ProgressBar />}

      <main
        key={currentStep}
        className="mx-auto w-full max-w-xl flex-1 px-5 py-10 sm:py-14 step-enter"
        id="main-content"
      >
        {CurrentStep ? (
          <CurrentStep />
        ) : (
          <p className="text-neutral-500">Étape introuvable.</p>
        )}
      </main>
    </div>
  );
}
