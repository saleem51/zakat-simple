import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Comment calculer sa Zakāt al-Māl — Guide complet",
  description:
    "Guide pratique pour calculer votre Zakāt annuelle : conditions, actifs concernés, dettes déductibles, taux et étapes du calcul.",
};

const STEPS = [
  {
    num: "01",
    title: "Vérifier les conditions",
    desc: "La Zakāt est due si vous êtes musulman, avez atteint la puberté, et si votre patrimoine dépasse le niṣāb depuis une année lunaire complète (ḥawl).",
  },
  {
    num: "02",
    title: "Choisir la référence du niṣāb",
    desc: "Le niṣāb peut être calculé en référence à 85 g d'or ou 595 g d'argent. Le calculateur vous propose les deux avec les cours actuels.",
  },
  {
    num: "03",
    title: "Lister vos actifs zakātables",
    desc: "Liquidités, or, argent métal, placements financiers, loyers disponibles, actifs professionnels, cryptomonnaies.",
  },
  {
    num: "04",
    title: "Déduire vos dettes légitimes",
    desc: "Seules les dettes exigibles dans les 12 prochains mois sont déductibles. Le crédit de la résidence principale n'est pas déductible.",
  },
  {
    num: "05",
    title: "Calculer la Zakāt",
    desc: "La Zakāt due est de 2,5 % du patrimoine net zakatable, si ce patrimoine dépasse le niṣāb.",
  },
];

const ASSETS = [
  { label: "Comptes courants et épargne disponible", included: true },
  { label: "Or (lingots, pièces, bijoux selon avis)", included: true },
  { label: "Argent métal", included: true },
  { label: "Actions, ETF, assurance-vie", included: true },
  { label: "Loyers disponibles non dépensés", included: true },
  { label: "Stock commercial et trésorerie pro", included: true },
  { label: "Cryptomonnaies", included: true },
  { label: "Résidence principale", included: false },
  { label: "Véhicule personnel", included: false },
  { label: "Équipements professionnels", included: false },
];

export default function CommentCalculerPage() {
  return (
    <>
      <SiteHeader />
      <PageWrapper>
        <div className="space-y-10">
          <header className="space-y-3">
            <p className="text-[13px] font-medium uppercase tracking-widest text-brand-600">
              Guide pratique
            </p>
            <h1 className="text-[32px] font-bold text-neutral-900 leading-tight">
              Comment calculer sa Zakāt al-Māl
            </h1>
            <p className="text-[16px] text-neutral-600 leading-relaxed">
              La Zakāt est de 2,5 % du patrimoine net zakatable détenu au-dessus
              du niṣāb pendant une année lunaire complète.
            </p>
          </header>

          {/* Étapes */}
          <section className="space-y-3">
            <h2 className="text-[20px] font-semibold text-neutral-900">
              Les 5 étapes du calcul
            </h2>
            {STEPS.map((step) => (
              <div
                key={step.num}
                className="flex gap-4 rounded-[14px] border border-neutral-200 bg-white p-5"
              >
                <span className="shrink-0 text-[18px] font-bold tabular-nums text-brand-300">
                  {step.num}
                </span>
                <div className="space-y-1">
                  <p className="text-[15px] font-semibold text-neutral-900">
                    {step.title}
                  </p>
                  <p className="text-[14px] text-neutral-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </section>

          {/* Actifs */}
          <section className="space-y-4">
            <h2 className="text-[20px] font-semibold text-neutral-900">
              Actifs concernés
            </h2>
            <div className="rounded-[14px] border border-neutral-200 bg-white overflow-hidden">
              {ASSETS.map((asset, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between px-5 py-3.5 border-b border-neutral-100 last:border-0"
                >
                  <p className="text-[14px] text-neutral-700">{asset.label}</p>
                  <span
                    className={
                      asset.included
                        ? "text-[13px] font-medium text-success-700"
                        : "text-[13px] text-neutral-400"
                    }
                  >
                    {asset.included ? "✓ Zakatable" : "✗ Non zakatable"}
                  </span>
                </div>
              ))}
            </div>
          </section>

          <div className="text-center space-y-3">
            <p className="text-[14px] text-neutral-500">
              Prêt à calculer ? Notre outil vous guide étape par étape.
            </p>
            <Button asChild>
              <Link href="/calculateur">Commencer le calcul</Link>
            </Button>
          </div>
        </div>
      </PageWrapper>
      <SiteFooter />
    </>
  );
}
