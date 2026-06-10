"use client";

import { Gem } from "lucide-react";
import { useZakatStore } from "@/store/zakatStore";
import { AssetAccordion } from "@/components/calculator/AssetAccordion";
import { CurrencyInput } from "@/components/calculator/shared/CurrencyInput";
import { ReligiousNote } from "@/components/calculator/shared/ReligiousNote";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { getMetalPrices, goldGramsToEuros, silverGramsToEuros } from "@/engine/prices";

const prices = getMetalPrices();

export function GoldSilverSection() {
  const gold = useZakatStore((s) => s.assets.gold);
  const silver = useZakatStore((s) => s.assets.silver);
  const level = useZakatStore((s) => s.profile.level);
  const setGoldAssets = useZakatStore((s) => s.setGoldAssets);
  const setSilverAssets = useZakatStore((s) => s.setSilverAssets);

  const isBeginnerOrIntermediate = level !== "advanced";

  const goldTotal = gold.useGrams
    ? goldGramsToEuros(gold.investmentGrams, prices)
    : gold.investmentValue;

  const jewelryTotal = gold.jewelry.included ? gold.jewelry.value : 0;

  const silverTotal = silver.useGrams
    ? silverGramsToEuros(silver.grams, prices)
    : silver.value;

  const sectionTotal = goldTotal + jewelryTotal + silverTotal;

  return (
    <AssetAccordion
      value="or-argent"
      title="Or & Argent"
      Icon={Gem}
      currentAmount={sectionTotal}
    >
      {/* ── Or de placement ── */}
      <div className="space-y-3">
        <p className="text-[15px] font-semibold text-neutral-900">Or de placement</p>
        {isBeginnerOrIntermediate && (
          <p className="text-[13px] text-neutral-500">
            Lingots, pièces d&apos;or, or non porté
          </p>
        )}

        <RadioGroup
          value={gold.useGrams ? "grams" : "value"}
          onValueChange={(v) => setGoldAssets({ useGrams: v === "grams" })}
        >
          <div className="flex items-center gap-3 rounded-[6px] border border-neutral-200 p-3.5">
            <RadioGroupItem value="grams" id="gold-grams" />
            <Label htmlFor="gold-grams" className="cursor-pointer text-[14px]">
              Je connais le poids en grammes
            </Label>
          </div>
          <div className="flex items-center gap-3 rounded-[6px] border border-neutral-200 p-3.5">
            <RadioGroupItem value="value" id="gold-value" />
            <Label htmlFor="gold-value" className="cursor-pointer text-[14px]">
              Je connais la valeur en euros
            </Label>
          </div>
        </RadioGroup>

        {gold.useGrams ? (
          <div className="space-y-1.5">
            <label
              htmlFor="gold-investment-grams"
              className="block text-[13px] font-medium text-neutral-700"
            >
              Poids en grammes
            </label>
            <div className="flex h-[52px] items-center gap-2 rounded-[6px] border border-neutral-200 bg-neutral-50 px-3 focus-within:border-brand-600 focus-within:bg-white transition-all">
              <input
                id="gold-investment-grams"
                type="number"
                min="0"
                step="0.1"
                value={gold.investmentGrams || ""}
                onChange={(e) =>
                  setGoldAssets({
                    investmentGrams: parseFloat(e.target.value) || 0,
                  })
                }
                className="flex-1 bg-transparent text-right text-[16px] font-medium tabular-nums text-neutral-900 placeholder:text-neutral-400 focus:outline-none"
                placeholder="0"
              />
              <span className="text-[14px] text-neutral-500 font-medium">g</span>
            </div>
            {gold.investmentGrams > 0 && (
              <p className="text-[12px] text-neutral-500 text-right">
                ≈ {new Intl.NumberFormat("fr-FR", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(goldGramsToEuros(gold.investmentGrams, prices))}
              </p>
            )}
          </div>
        ) : (
          <CurrencyInput
            id="gold-investment-value"
            label="Valeur estimée en euros"
            value={gold.investmentValue}
            onChange={(v) => setGoldAssets({ investmentValue: v })}
          />
        )}
      </div>

      {/* ── Bijoux ── */}
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <Checkbox
            id="gold-jewelry-include"
            checked={gold.jewelry.included}
            onCheckedChange={(checked) =>
              setGoldAssets({
                jewelry: { ...gold.jewelry, included: checked === true },
              })
            }
          />
          <Label
            htmlFor="gold-jewelry-include"
            className="cursor-pointer text-[14px] font-medium text-neutral-800"
          >
            J&apos;ai des bijoux en or et je souhaite les inclure dans le calcul
          </Label>
        </div>

        <ReligiousNote variant="divergence" title="Divergence sur les bijoux portés">
          L&apos;école hanafite considère les bijoux zakātables même s&apos;ils
          sont portés. Les trois autres grandes écoles les exemptent
          généralement. Par précaution, de nombreux savants contemporains
          recommandent de les inclure.
        </ReligiousNote>

        {gold.jewelry.included && (
          <CurrencyInput
            id="gold-jewelry-value"
            label="Valeur estimée de vos bijoux en or"
            value={gold.jewelry.value}
            onChange={(v) =>
              setGoldAssets({ jewelry: { ...gold.jewelry, value: v } })
            }
            hint="Estimation à partir du poids et du cours actuel, ou estimation d'un bijoutier"
          />
        )}
      </div>

      {/* ── Argent métal ── */}
      <div className="space-y-3">
        <p className="text-[15px] font-semibold text-neutral-900">Argent métal</p>
        {isBeginnerOrIntermediate && (
          <p className="text-[13px] text-neutral-500">
            Pièces d&apos;argent, lingots — pas les billets
          </p>
        )}

        <RadioGroup
          value={silver.useGrams ? "grams" : "value"}
          onValueChange={(v) => setSilverAssets({ useGrams: v === "grams" })}
        >
          <div className="flex items-center gap-3 rounded-[6px] border border-neutral-200 p-3.5">
            <RadioGroupItem value="grams" id="silver-grams" />
            <Label htmlFor="silver-grams" className="cursor-pointer text-[14px]">Je connais le poids</Label>
          </div>
          <div className="flex items-center gap-3 rounded-[6px] border border-neutral-200 p-3.5">
            <RadioGroupItem value="value" id="silver-value" />
            <Label htmlFor="silver-value" className="cursor-pointer text-[14px]">Je connais la valeur</Label>
          </div>
        </RadioGroup>

        {silver.useGrams ? (
          <div className="space-y-1.5">
            <label
              htmlFor="silver-grams-input"
              className="block text-[13px] font-medium text-neutral-700"
            >
              Poids en grammes
            </label>
            <div className="flex h-[52px] items-center gap-2 rounded-[6px] border border-neutral-200 bg-neutral-50 px-3 focus-within:border-brand-600 focus-within:bg-white transition-all">
              <input
                id="silver-grams-input"
                type="number"
                min="0"
                step="1"
                value={silver.grams || ""}
                onChange={(e) => setSilverAssets({ grams: parseFloat(e.target.value) || 0 })}
                className="flex-1 bg-transparent text-right text-[16px] font-medium tabular-nums text-neutral-900 placeholder:text-neutral-400 focus:outline-none"
                placeholder="0"
              />
              <span className="text-[14px] text-neutral-500 font-medium">g</span>
            </div>
            {silver.grams > 0 && (
              <p className="text-[12px] text-neutral-500 text-right">
                ≈ {new Intl.NumberFormat("fr-FR", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(silverGramsToEuros(silver.grams, prices))}
              </p>
            )}
          </div>
        ) : (
          <CurrencyInput
            id="silver-value-input"
            label="Valeur en euros"
            value={silver.value}
            onChange={(v) => setSilverAssets({ value: v })}
          />
        )}
      </div>
    </AssetAccordion>
  );
}
