"use client";

import { TrendingUp } from "lucide-react";
import { useZakatStore } from "@/store/zakatStore";
import { AssetAccordion } from "@/components/calculator/AssetAccordion";
import { CurrencyInput } from "@/components/calculator/shared/CurrencyInput";
import { ReligiousNote } from "@/components/calculator/shared/ReligiousNote";

export function FinancialSection() {
  const financial = useZakatStore((s) => s.assets.financial);
  const setFinancialAssets = useZakatStore((s) => s.setFinancialAssets);
  const addComplexAsset = useZakatStore((s) => s.addComplexAsset);
  const setMeta = useZakatStore((s) => s.setMeta);

  const total = financial.stocks + financial.etf + financial.lifeInsurance;

  const handleStocksChange = (v: number) => {
    setFinancialAssets({ stocks: v });
    if (v > 0) addComplexAsset("Actions (méthode simplifiée)");
  };

  const handleEtfChange = (v: number) => {
    setFinancialAssets({ etf: v });
    if (v > 0) addComplexAsset("ETF (méthode simplifiée)");
  };

  const handleOpenSection = () => {
    setMeta({ advancedSectionOpened: true });
  };

  return (
    <div onClick={handleOpenSection}>
      <AssetAccordion
        value="financial"
        title="Placements financiers"
        Icon={TrendingUp}
        currentAmount={total}
      >
        <CurrencyInput
          id="financial-stocks"
          label="Actions"
          value={financial.stocks}
          onChange={handleStocksChange}
          hint="Valeur actuelle du portefeuille actions"
        />

        {financial.stocks > 0 && (
          <ReligiousNote variant="info" title="Méthode simplifiée">
            La Zakāt est calculée sur la valeur totale du portefeuille au jour
            du calcul. Une méthode détaillée (actifs zakātables de
            l&apos;entreprise) existe mais requiert des données comptables que
            la plupart des investisseurs particuliers ne possèdent pas.
          </ReligiousNote>
        )}

        <CurrencyInput
          id="financial-etf"
          label="ETF"
          value={financial.etf}
          onChange={handleEtfChange}
          hint="Valeur actuelle des parts ETF"
        />

        <CurrencyInput
          id="financial-life-insurance"
          label="Assurance-vie"
          value={financial.lifeInsurance}
          onChange={(v) => setFinancialAssets({ lifeInsurance: v })}
          hint="Valeur de rachat disponible"
        />

        {financial.lifeInsurance > 0 && (
          <ReligiousNote variant="info">
            La Zakāt est due sur la valeur de rachat disponible, même si vous
            n&apos;avez pas l&apos;intention de retirer les fonds.
          </ReligiousNote>
        )}
      </AssetAccordion>
    </div>
  );
}
