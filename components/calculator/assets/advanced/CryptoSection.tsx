"use client";

import { Bitcoin } from "lucide-react";
import { useZakatStore } from "@/store/zakatStore";
import { AssetAccordion } from "@/components/calculator/AssetAccordion";
import { CurrencyInput } from "@/components/calculator/shared/CurrencyInput";
import { ReligiousNote } from "@/components/calculator/shared/ReligiousNote";

export function CryptoSection() {
  const crypto = useZakatStore((s) => s.assets.crypto);
  const setCrypto = useZakatStore((s) => s.setCrypto);
  const addComplexAsset = useZakatStore((s) => s.addComplexAsset);
  const setMeta = useZakatStore((s) => s.setMeta);

  return (
    <div onClick={() => setMeta({ advancedSectionOpened: true })}>
      <AssetAccordion
        value="crypto"
        title="Cryptomonnaies"
        Icon={Bitcoin}
        currentAmount={crypto}
      >
        <CurrencyInput
          id="crypto-value"
          label="Valeur actuelle en euros"
          value={crypto}
          onChange={(v) => {
            setCrypto(v);
            if (v > 0) addComplexAsset("Cryptomonnaies");
          }}
          hint="Valeur au cours actuel au jour du calcul"
        />

        {crypto > 0 && (
          <ReligiousNote variant="info">
            Les cryptomonnaies sont généralement traitées comme des liquidités
            ou des actifs spéculatifs zakātables selon les savants
            contemporains. La valeur retenue est celle au jour du calcul.
          </ReligiousNote>
        )}
      </AssetAccordion>
    </div>
  );
}
