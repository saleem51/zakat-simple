"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useZakatStore } from "@/store/zakatStore";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ReligiousNote } from "@/components/calculator/shared/ReligiousNote";
import { HawlStatusBanner } from "@/components/calculator/shared/HawlStatusBanner";
import { getMetalPrices, getNisabValue, getPriceLabel } from "@/engine/prices";
import { formatCurrency } from "@/lib/formatCurrency";
import { cn } from "@/lib/utils";
import type { HawlStatus, NisabReference } from "@/engine/types";

const prices = getMetalPrices();

export function StepContext() {
  const context = useZakatStore((s) => s.context);
  const level = useZakatStore((s) => s.profile.level);
  const setContext = useZakatStore((s) => s.setContext);
  const nextStep = useZakatStore((s) => s.nextStep);

  const [dateOpen, setDateOpen] = useState(false);
  const isBeginnerOrIntermediate = level !== "advanced";
  const nisabValue = getNisabValue(context.nisabReference, prices);
  const priceLabel = getPriceLabel(prices);

  const canProceed =
    context.hawlStatus === "confirmed" ||
    context.hawlStatus === "uncertain" ||
    context.hawlStatus === "no";

  const hawlOptions = [
    { value: "confirmed", label: "Oui — depuis au moins un an" },
    { value: "no", label: "Non — j'ai atteint ce seuil récemment" },
    { value: "uncertain", label: "Je ne suis pas certain" },
  ];

  const nisabOptions = [
    {
      value: "gold",
      label: "Or — 85 g",
      desc: "Avis le plus répandu",
      amount: getNisabValue("gold", prices),
    },
    {
      value: "silver",
      label: "Argent — 595 g",
      desc: "École hanafite — seuil plus bas",
      amount: getNisabValue("silver", prices),
    },
  ];

  return (
    <div className="space-y-10">
      <div className="space-y-3">
        <p className="text-[12px] font-semibold uppercase tracking-widest text-brand-600">
          Contexte
        </p>
        <h1 className="text-[32px] font-bold text-neutral-900 leading-tight tracking-tight">
          Quelques informations
        </h1>
        {isBeginnerOrIntermediate && (
          <p className="text-[16px] text-neutral-500">
            Pour paramétrer votre calcul correctement.
          </p>
        )}
      </div>

      {/* ── 1. Ḥawl ── */}
      <div className="space-y-4">
        <div className="space-y-1">
          <p className="text-[15px] font-semibold text-neutral-900">
            Votre patrimoine dépasse-t-il le niṣāb depuis environ un an ?
          </p>
          {isBeginnerOrIntermediate && (
            <p className="text-[13px] text-neutral-500 leading-relaxed">
              C&apos;est la condition du ḥawl — vos actifs doivent dépasser le
              seuil minimal depuis environ une année lunaire (354 jours).
            </p>
          )}
        </div>

        <RadioGroup
          value={context.hawlStatus}
          onValueChange={(v) => setContext({ hawlStatus: v as HawlStatus })}
        >
          <div className="space-y-2">
            {hawlOptions.map((opt) => {
              const isChecked = context.hawlStatus === opt.value;
              return (
                <div
                  key={opt.value}
                  className={cn(
                    "flex items-center gap-3 rounded-[10px] border p-4 transition-all duration-100 cursor-pointer",
                    isChecked
                      ? "border-brand-600 bg-brand-50"
                      : "border-neutral-200 bg-white hover:border-neutral-300 hover:bg-neutral-50/80"
                  )}
                  onClick={() => setContext({ hawlStatus: opt.value as HawlStatus })}
                >
                  <RadioGroupItem value={opt.value} id={`hawl-${opt.value}`} />
                  <Label
                    htmlFor={`hawl-${opt.value}`}
                    className={cn(
                      "cursor-pointer text-[14px] font-medium leading-snug",
                      isChecked ? "text-brand-800" : "text-neutral-800"
                    )}
                  >
                    {opt.label}
                  </Label>
                </div>
              );
            })}
          </div>
        </RadioGroup>

        {context.hawlStatus !== "confirmed" && (
          <HawlStatusBanner status={context.hawlStatus} />
        )}
      </div>

      {/* ── 2. Niṣāb ── */}
      <div className="space-y-4">
        <div className="space-y-1">
          <p className="text-[15px] font-semibold text-neutral-900">
            Référence du niṣāb
          </p>
          {isBeginnerOrIntermediate && (
            <p className="text-[13px] text-neutral-500">
              Seuil minimal de patrimoine en dessous duquel la Zakāt n&apos;est pas due.
            </p>
          )}
        </div>

        <RadioGroup
          value={context.nisabReference}
          onValueChange={(v) => setContext({ nisabReference: v as NisabReference })}
        >
          <div className="space-y-2">
            {nisabOptions.map((opt) => {
              const isChecked = context.nisabReference === opt.value;
              return (
                <div
                  key={opt.value}
                  className={cn(
                    "flex items-center justify-between gap-3 rounded-[10px] border p-4 transition-all duration-100 cursor-pointer",
                    isChecked
                      ? "border-brand-600 bg-brand-50"
                      : "border-neutral-200 bg-white hover:border-neutral-300 hover:bg-neutral-50/80"
                  )}
                  onClick={() => setContext({ nisabReference: opt.value as NisabReference })}
                >
                  <div className="flex items-center gap-3">
                    <RadioGroupItem value={opt.value} id={`nisab-${opt.value}`} />
                    <div>
                      <Label
                        htmlFor={`nisab-${opt.value}`}
                        className={cn(
                          "cursor-pointer text-[14px] font-medium",
                          isChecked ? "text-brand-800" : "text-neutral-800"
                        )}
                      >
                        {opt.label}
                      </Label>
                      <p className="text-[12px] text-neutral-500">{opt.desc}</p>
                    </div>
                  </div>
                  <span className="tabular-nums text-[14px] font-semibold text-neutral-600 shrink-0">
                    {formatCurrency(opt.amount)}
                  </span>
                </div>
              );
            })}
          </div>
        </RadioGroup>

        <div className="flex items-center justify-between rounded-[10px] bg-brand-50 border border-brand-100 px-4 py-3">
          <p className="text-[13px] text-brand-700">
            Niṣāb actuel ({context.nisabReference === "gold" ? "or" : "argent"})
          </p>
          <div className="text-right">
            <p className="text-[15px] font-bold tabular-nums text-brand-800">
              {formatCurrency(nisabValue)}
            </p>
            <p className="text-[11px] text-brand-600/70">{priceLabel}</p>
          </div>
        </div>

        {context.nisabReference === "silver" && (
          <ReligiousNote variant="divergence">
            Le niṣāb en argent (595 g) donne un seuil beaucoup plus bas.
            L&apos;avis le plus répandu parmi les savants contemporains est le niṣāb en or.
          </ReligiousNote>
        )}
      </div>

      {/* ── 3. Date de référence (secondaire) ── */}
      <div className="space-y-3">
        <button
          type="button"
          onClick={() => setDateOpen((v) => !v)}
          className="flex w-full items-center justify-between text-left"
          aria-expanded={dateOpen}
        >
          <p className="text-[13px] text-neutral-400 hover:text-neutral-600 transition-colors">
            Date de référence
            <span className="ml-1 text-neutral-300">—</span>
            <span className="ml-1 tabular-nums">
              {context.date ? new Date(context.date + "T00:00:00").toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" }) : ""}
            </span>
          </p>
          <ChevronDown
            className={cn(
              "h-3.5 w-3.5 text-neutral-300 transition-transform duration-200",
              dateOpen && "rotate-180"
            )}
            aria-hidden
          />
        </button>

        {dateOpen && (
          <div className="space-y-1.5">
            <Label htmlFor="calc-date" className="text-[13px] font-medium text-neutral-600">
              Date de calcul
            </Label>
            <input
              id="calc-date"
              type="date"
              value={context.date}
              onChange={(e) => setContext({ date: e.target.value })}
              className="h-[48px] w-full rounded-[10px] border border-neutral-200 bg-neutral-50 px-4 text-[14px] text-neutral-900 focus:border-brand-600 focus:bg-white focus:outline-none transition-all"
            />
            <p className="text-[12px] text-neutral-400">
              Par défaut : aujourd&apos;hui. Utile si vous calculez pour une date passée.
            </p>
          </div>
        )}
      </div>

      <Button onClick={nextStep} fullWidth disabled={!canProceed}>
        Continuer vers mes actifs
      </Button>
    </div>
  );
}
