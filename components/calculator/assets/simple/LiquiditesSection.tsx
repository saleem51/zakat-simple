"use client";

import { useState } from "react";
import { Wallet } from "lucide-react";
import { useZakatStore } from "@/store/zakatStore";
import { AssetAccordion } from "@/components/calculator/AssetAccordion";
import { CurrencyInput } from "@/components/calculator/shared/CurrencyInput";
import { ReligiousNote } from "@/components/calculator/shared/ReligiousNote";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

export function LiquiditesSection() {
  const liquid = useZakatStore((s) => s.assets.liquid);
  const level = useZakatStore((s) => s.profile.level);
  const setLiquidAssets = useZakatStore((s) => s.setLiquidAssets);

  const [showJointFields, setShowJointFields] = useState(
    liquid.jointAccount.hasJointAccount
  );

  const totalDisplayed = liquid.jointAccount.hasJointAccount
    ? liquid.jointAccount.jointShareAmount + liquid.blockedSavings
    : liquid.available + liquid.blockedSavings;

  const isBeginnerOrIntermediate = level !== "advanced";

  return (
    <AssetAccordion
      value="liquidites"
      title="Liquidités"
      Icon={Wallet}
      currentAmount={totalDisplayed}
      defaultOpen
    >
      {/* Montant total disponible */}
      <CurrencyInput
        id="liquid-available"
        label="Total de vos liquidités disponibles"
        value={liquid.available}
        onChange={(v) => setLiquidAssets({ available: v })}
        hint={
          isBeginnerOrIntermediate
            ? "Comptes courants · Livret A · LDDS · LEP · espèces · comptes à l'étranger"
            : undefined
        }
      />

      {/* Compte joint */}
      <div className="space-y-3">
        <p className="text-[14px] font-medium text-neutral-800">
          Ce montant inclut-il un ou plusieurs comptes joints ?
        </p>

        <RadioGroup
          value={liquid.jointAccount.hasJointAccount ? "yes" : "no"}
          onValueChange={(v) => {
            const has = v === "yes";
            setShowJointFields(has);
            setLiquidAssets({
              jointAccount: {
                ...liquid.jointAccount,
                hasJointAccount: has,
                jointShareAmount: has ? 0 : 0,
              },
            });
          }}
        >
          <div className="flex items-center gap-3 rounded-[6px] border border-neutral-200 bg-white p-3.5 hover:bg-neutral-50 transition-colors cursor-pointer">
            <RadioGroupItem value="no" id="joint-no" />
            <Label htmlFor="joint-no" className="cursor-pointer text-[14px]">
              Non
            </Label>
          </div>
          <div className="flex items-center gap-3 rounded-[6px] border border-neutral-200 bg-white p-3.5 hover:bg-neutral-50 transition-colors cursor-pointer">
            <RadioGroupItem value="yes" id="joint-yes" />
            <Label htmlFor="joint-yes" className="cursor-pointer text-[14px]">
              Oui
            </Label>
          </div>
        </RadioGroup>

        {showJointFields && (
          <div className="space-y-3 pl-2 border-l-2 border-brand-200">
            <ReligiousNote variant="info">
              La Zakāt est un acte individuel. N&apos;incluez que la part des
              liquidités qui vous appartient réellement.
            </ReligiousNote>

            <p className="text-[14px] font-medium text-neutral-800">
              Quelle est votre part personnelle ?
            </p>

            <RadioGroup
              value={
                liquid.jointAccount.jointShareAmount ===
                liquid.available * 0.5
                  ? "half"
                  : "custom"
              }
              onValueChange={(v) => {
                if (v === "half") {
                  setLiquidAssets({
                    jointAccount: {
                      ...liquid.jointAccount,
                      jointShareAmount: Math.round(liquid.available * 0.5 * 100) / 100,
                      jointShareCertain: true,
                    },
                  });
                }
              }}
            >
              <div className="flex items-center gap-3 rounded-[6px] border border-neutral-200 bg-white p-3.5">
                <RadioGroupItem value="half" id="joint-half" />
                <Label htmlFor="joint-half" className="cursor-pointer text-[14px]">
                  La moitié — nous partageons à parts égales
                </Label>
              </div>
              <div className="flex items-center gap-3 rounded-[6px] border border-neutral-200 bg-white p-3.5">
                <RadioGroupItem value="custom" id="joint-custom" />
                <Label htmlFor="joint-custom" className="cursor-pointer text-[14px]">
                  Un montant précis
                </Label>
              </div>
            </RadioGroup>

            <CurrencyInput
              id="joint-share"
              label="Votre part dans les comptes joints"
              value={liquid.jointAccount.jointShareAmount}
              onChange={(v) =>
                setLiquidAssets({
                  jointAccount: {
                    ...liquid.jointAccount,
                    jointShareAmount: v,
                    jointShareCertain: true,
                  },
                })
              }
            />
          </div>
        )}
      </div>

      {/* Épargne bloquée */}
      <div className="space-y-2">
        <CurrencyInput
          id="liquid-blocked"
          label="Épargne bloquée"
          value={liquid.blockedSavings}
          onChange={(v) => setLiquidAssets({ blockedSavings: v })}
          hint={isBeginnerOrIntermediate ? "PEL · PEE · plan retraite…" : undefined}
          placeholder="0"
        />
        {liquid.blockedSavings > 0 && (
          <ReligiousNote variant="divergence">
            Les savants divergent sur l&apos;épargne bloquée. L&apos;avis le
            plus prudent la considère zakātable même si elle n&apos;est pas
            immédiatement disponible. Nous l&apos;incluons par défaut.
          </ReligiousNote>
        )}
      </div>
    </AssetAccordion>
  );
}
