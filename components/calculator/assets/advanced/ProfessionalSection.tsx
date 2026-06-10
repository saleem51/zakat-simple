"use client";

import { Briefcase } from "lucide-react";
import { useZakatStore } from "@/store/zakatStore";
import { AssetAccordion } from "@/components/calculator/AssetAccordion";
import { CurrencyInput } from "@/components/calculator/shared/CurrencyInput";
import { ReligiousNote } from "@/components/calculator/shared/ReligiousNote";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export function ProfessionalSection() {
  const professional = useZakatStore((s) => s.assets.professional);
  const setProfessionalAssets = useZakatStore((s) => s.setProfessionalAssets);
  const addEstimate = useZakatStore((s) => s.addEstimate);
  const setMeta = useZakatStore((s) => s.setMeta);

  const total = professional.isActive
    ? professional.commercialStock +
      professional.treasury +
      professional.receivables
    : 0;

  return (
    <div onClick={() => setMeta({ advancedSectionOpened: true })}>
      <AssetAccordion
        value="professional"
        title="Actifs professionnels"
        Icon={Briefcase}
        currentAmount={total}
      >
        <div className="flex items-start gap-3 rounded-[6px] border border-neutral-200 p-3.5">
          <Checkbox
            id="professional-active"
            checked={professional.isActive}
            onCheckedChange={(checked) =>
              setProfessionalAssets({ isActive: checked === true })
            }
            className="mt-0.5"
          />
          <Label
            htmlFor="professional-active"
            className="cursor-pointer text-[14px] font-medium text-neutral-800"
          >
            J&apos;exerce une activité indépendante ou commerciale
          </Label>
        </div>

        {professional.isActive && (
          <>
            <ReligiousNote variant="info">
              Seuls les actifs liés au commerce ou à la production sont
              zakātables. Les équipements, véhicules professionnels et locaux ne
              le sont pas.
            </ReligiousNote>

            <CurrencyInput
              id="professional-stock"
              label="Stock commercial"
              value={professional.commercialStock}
              onChange={(v) => {
                setProfessionalAssets({ commercialStock: v });
                if (v > 0) addEstimate("stock commercial");
              }}
              hint="Valeur des marchandises destinées à la vente"
            />

            <CurrencyInput
              id="professional-treasury"
              label="Trésorerie professionnelle"
              value={professional.treasury}
              onChange={(v) => setProfessionalAssets({ treasury: v })}
              hint="Solde des comptes professionnels"
            />

            <CurrencyInput
              id="professional-receivables"
              label="Créances récupérables"
              value={professional.receivables}
              onChange={(v) => setProfessionalAssets({ receivables: v })}
              hint="Factures dues par vos clients que vous pensez récupérer"
            />
          </>
        )}
      </AssetAccordion>
    </div>
  );
}
