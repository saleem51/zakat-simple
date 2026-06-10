"use client";

import { Check } from "lucide-react";
import { useZakatStore } from "@/store/zakatStore";
import { Button } from "@/components/ui/button";
import type { UserLevel } from "@/engine/types";

const PROFILES: {
  level: UserLevel;
  label: string;
  description: string;
}[] = [
  {
    level: "beginner",
    label: "Je découvre la Zakāt",
    description: "Explications détaillées et guidance à chaque étape.",
  },
  {
    level: "intermediate",
    label: "Je connais les bases",
    description: "Explications courtes sur les points importants.",
  },
  {
    level: "advanced",
    label: "Je suis familier avec son calcul",
    description: "Interface compacte, accès direct sans texte superflu.",
  },
];

export function StepProfile() {
  const level = useZakatStore((s) => s.profile.level);
  const setLevel = useZakatStore((s) => s.setLevel);
  const nextStep = useZakatStore((s) => s.nextStep);

  return (
    <div className="space-y-10">
      <div className="space-y-3">
        <p className="text-[12px] font-semibold uppercase tracking-widest text-brand-600">
          Bienvenue
        </p>
        <h1 className="text-[32px] font-bold text-neutral-900 leading-tight tracking-tight">
          Quel est votre niveau<br />avec la Zakāt ?
        </h1>
        <p className="text-[16px] text-neutral-500 leading-relaxed">
          Cela adapte les explications tout au long du calcul.
        </p>
      </div>

      <div role="radiogroup" aria-label="Choisissez votre niveau" className="space-y-3">
        {PROFILES.map((profile, index) => {
          const isSelected = level === profile.level;
          return (
            <button
              key={profile.level}
              role="radio"
              aria-checked={isSelected}
              onClick={() => setLevel(profile.level)}
              className={[
                "w-full rounded-[14px] border p-5 text-left transition-all duration-150",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2",
                isSelected
                  ? "border-brand-600 bg-brand-50 shadow-[0_0_0_1px_#059669]"
                  : "border-neutral-200 bg-white hover:border-neutral-300 hover:bg-neutral-50/80",
              ].join(" ")}
            >
              <div className="flex items-center gap-4">
                {/* Numéro / checkmark */}
                <div className={[
                  "flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[13px] font-bold transition-all duration-150",
                  isSelected
                    ? "bg-brand-600 text-white"
                    : "bg-neutral-100 text-neutral-400",
                ].join(" ")}>
                  {isSelected ? (
                    <Check className="h-4 w-4" aria-hidden />
                  ) : (
                    <span>{String(index + 1).padStart(2, "0")}</span>
                  )}
                </div>

                {/* Contenu */}
                <div className="space-y-0.5 flex-1">
                  <p className={[
                    "text-[15px] font-semibold leading-tight",
                    isSelected ? "text-brand-800" : "text-neutral-900",
                  ].join(" ")}>
                    {profile.label}
                  </p>
                  <p className="text-[13px] text-neutral-500">
                    {profile.description}
                  </p>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      <Button onClick={nextStep} fullWidth>
        Commencer
      </Button>
    </div>
  );
}
