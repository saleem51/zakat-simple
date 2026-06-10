"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { useZakatStore } from "@/store/zakatStore";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { LiquiditesSection } from "@/components/calculator/assets/simple/LiquiditesSection";
import { GoldSilverSection } from "@/components/calculator/assets/simple/GoldSilverSection";
import { FinancialSection } from "@/components/calculator/assets/advanced/FinancialSection";
import { RealEstateSection } from "@/components/calculator/assets/advanced/RealEstateSection";
import { ProfessionalSection } from "@/components/calculator/assets/advanced/ProfessionalSection";
import { CryptoSection } from "@/components/calculator/assets/advanced/CryptoSection";
import { formatCurrency } from "@/lib/formatCurrency";
import { computeAllAssets } from "@/engine/assets";
import { getMetalPrices } from "@/engine/prices";

const prices = getMetalPrices();

export function StepAssets() {
  const assets = useZakatStore((s) => s.assets);
  const level = useZakatStore((s) => s.profile.level);
  const setMeta = useZakatStore((s) => s.setMeta);
  const nextStep = useZakatStore((s) => s.nextStep);

  const [advancedOpen, setAdvancedOpen] = useState(level === "advanced");

  const { total } = computeAllAssets(assets, prices);

  const handleOpenAdvanced = () => {
    setAdvancedOpen(true);
    setMeta({ advancedSectionOpened: true });
  };

  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <p className="text-[12px] font-semibold uppercase tracking-widest text-brand-600">
          Étape 3
        </p>
        <h1 className="text-[32px] font-bold text-neutral-900 leading-tight tracking-tight">
          Vos actifs
        </h1>
        <p className="text-[15px] text-neutral-500 leading-relaxed">
          Renseignez uniquement les catégories qui vous concernent.
          Les autres sont considérées à zéro.
        </p>
      </div>

      {/* Section principale */}
      <div className="space-y-3">
        <LiquiditesSection />
        <GoldSilverSection />
      </div>

      <Separator />

      {/* Section avancée */}
      {!advancedOpen ? (
        <button
          onClick={handleOpenAdvanced}
          className="flex w-full items-center gap-4 rounded-[14px] border border-dashed border-neutral-300 p-5 text-left hover:bg-neutral-50 hover:border-neutral-400 transition-all duration-150"
        >
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-neutral-100">
            <Plus className="h-4 w-4 text-neutral-500" />
          </div>
          <div>
            <p className="text-[14px] font-semibold text-neutral-800">
              Ajouter d&apos;autres actifs
            </p>
            <p className="text-[13px] text-neutral-400 mt-0.5">
              Placements · Immobilier · Actifs professionnels · Crypto
            </p>
          </div>
        </button>
      ) : (
        <div className="space-y-3">
          <p className="text-[11px] font-semibold uppercase tracking-widest text-neutral-400">
            Actifs avancés
          </p>
          <FinancialSection />
          <RealEstateSection />
          <ProfessionalSection />
          <CryptoSection />
        </div>
      )}

      {/* Total provisoire */}
      {total > 0 && (
        <div className="rounded-[14px] bg-neutral-950 px-5 py-4 flex justify-between items-center">
          <p className="text-[13px] font-medium text-neutral-400">
            Total brut provisoire
          </p>
          <p className="text-[20px] font-bold tabular-nums text-white">
            {formatCurrency(total)}
          </p>
        </div>
      )}

      <Button onClick={nextStep} fullWidth>
        Continuer vers les dettes
      </Button>
    </div>
  );
}
