"use client";

import { Building2 } from "lucide-react";
import { useZakatStore } from "@/store/zakatStore";
import { AssetAccordion } from "@/components/calculator/AssetAccordion";
import { CurrencyInput } from "@/components/calculator/shared/CurrencyInput";
import { ReligiousNote } from "@/components/calculator/shared/ReligiousNote";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export function RealEstateSection() {
  const realEstate = useZakatStore((s) => s.assets.realEstate);
  const setRealEstateAssets = useZakatStore((s) => s.setRealEstateAssets);
  const storeAddEstimate = useZakatStore((s) => s.addEstimate);
  const setMeta = useZakatStore((s) => s.setMeta);

  const total =
    realEstate.availableRents +
    (realEstate.resaleProperty.intentionConfirmed
      ? realEstate.resaleProperty.value
      : 0);

  return (
    <div onClick={() => setMeta({ advancedSectionOpened: true })}>
      <AssetAccordion
        value="real-estate"
        title="Immobilier & Loyers"
        Icon={Building2}
        currentAmount={total}
      >
        {/* ── Loyers disponibles ── */}
        <div className="space-y-2">
          <CurrencyInput
            id="real-estate-rents"
            label="Loyers disponibles non dépensés"
            value={realEstate.availableRents}
            onChange={(v) => setRealEstateAssets({ availableRents: v })}
          />
          {realEstate.availableRents > 0 && (
            <ReligiousNote variant="info">
              Le bien immobilier lui-même n&apos;est pas zakatable s&apos;il est
              destiné à la location. Seuls les loyers disponibles non dépensés
              sont inclus.
            </ReligiousNote>
          )}
        </div>

        {/* ── Bien de revente ── */}
        <div className="space-y-3">
          <p className="text-[15px] font-semibold text-neutral-900">
            Bien destiné à la revente
          </p>

          <ReligiousNote variant="condition" title="Condition importante">
            Un bien immobilier n&apos;est zakatable que si l&apos;intention de
            revente existait au moment de l&apos;achat. Un bien acheté pour y
            habiter ou le louer, puis mis en vente plus tard, n&apos;est
            généralement pas zakatable selon l&apos;avis le plus répandu.
          </ReligiousNote>

          <div className="flex items-start gap-3 rounded-[6px] border border-neutral-200 p-3.5">
            <Checkbox
              id="resale-intention"
              checked={realEstate.resaleProperty.intentionConfirmed}
              onCheckedChange={(checked) => {
                setRealEstateAssets({
                  resaleProperty: {
                    ...realEstate.resaleProperty,
                    intentionConfirmed: checked === true,
                  },
                });
              }}
              className="mt-0.5"
            />
            <Label
              htmlFor="resale-intention"
              className="cursor-pointer text-[14px] font-medium text-neutral-800 leading-relaxed"
            >
              Je confirme que l&apos;intention de revente était présente dès
              l&apos;achat
            </Label>
          </div>

          {realEstate.resaleProperty.intentionConfirmed && (
            <CurrencyInput
              id="resale-value"
              label="Valeur marchande actuelle estimée"
              value={realEstate.resaleProperty.value}
              onChange={(v) => {
                setRealEstateAssets({
                  resaleProperty: {
                    ...realEstate.resaleProperty,
                    value: v,
                  },
                });
                if (v > 0) storeAddEstimate("bien immobilier de revente");
              }}
            />
          )}
        </div>
      </AssetAccordion>
    </div>
  );
}
