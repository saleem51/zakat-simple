import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { PageWrapper } from "@/components/layout/PageWrapper";

export const metadata: Metadata = {
  title: "Questions fréquentes sur la Zakāt",
  description:
    "Réponses aux questions les plus fréquentes sur la Zakāt al-Māl : niṣāb, ḥawl, actifs concernés, dettes déductibles.",
  alternates: {
    canonical: "/faq",
  },
  openGraph: {
    title: "Questions fréquentes sur la Zakāt al-Māl",
    description:
      "Réponses aux questions les plus fréquentes sur la Zakāt : niṣāb, ḥawl, actifs zakātables, dettes déductibles.",
    type: "article",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Calculateur de Zakāt al-Māl — zakatfacile.fr" }],
  },
};

const FAQ = [
  {
    q: "Qu'est-ce que la Zakāt al-Māl ?",
    a: "La Zakāt al-Māl est l'un des cinq piliers de l'Islam. Il s'agit d'un prélèvement annuel de 2,5 % sur le patrimoine qui dépasse le niṣāb (seuil minimal), détenu pendant une année lunaire complète.",
  },
  {
    q: "Qui est tenu de payer la Zakāt ?",
    a: "Tout musulman libre, sain d'esprit, ayant atteint la puberté, et dont le patrimoine dépasse le niṣāb depuis une année lunaire complète (ḥawl).",
  },
  {
    q: "Quelle est la différence entre niṣāb en or et en argent ?",
    a: "Le niṣāb peut être calculé sur la base de 85 g d'or ou de 595 g d'argent. Le niṣāb en argent est généralement plus bas en valeur monétaire, ce qui rend la Zakāt due à davantage de personnes. L'école hanafite se réfère à l'argent ; les trois autres grandes écoles à l'or.",
  },
  {
    q: "Mes bijoux en or sont-ils zakātables ?",
    a: "Les savants divergent sur ce point. L'école hanafite considère les bijoux portés régulièrement comme zakātables. Les trois autres grandes écoles les exemptent généralement. Par précaution, de nombreux savants contemporains recommandent de les inclure.",
  },
  {
    q: "Mon crédit immobilier est-il déductible ?",
    a: "Le crédit de la résidence principale n'est généralement pas déductible, car la résidence principale elle-même n'est pas zakatable. Pour un bien locatif ou destiné à la revente, les mensualités prévues sur les 12 prochains mois peuvent être déduites selon l'avis le plus répandu.",
  },
  {
    q: "Les cryptomonnaies sont-elles zakātables ?",
    a: "Selon la plupart des savants contemporains, les cryptomonnaies sont traitées comme des actifs financiers ou des liquidités et sont zakātables. La valeur retenue est celle au jour du calcul.",
  },
  {
    q: "Mon épargne bloquée (PEL, PEE) est-elle zakātable ?",
    a: "L'avis le plus prudent la considère zakātable même si elle n'est pas immédiatement disponible. Un avis plus souple ne la retient que lorsqu'elle devient accessible. Ce calculateur l'inclut par précaution.",
  },
  {
    q: "La Zakāt est-elle due sur mon compte joint ?",
    a: "La Zakāt est individuelle. Vous ne devez inclure que la part du compte joint qui vous appartient réellement.",
  },
  {
    q: "Ce calculateur remplace-t-il l'avis d'un érudit ?",
    a: "Non. Ce calculateur est un outil indicatif basé sur les avis reconnus des savants de Ahl as-Sunnah. Il ne constitue pas une fatwa. Pour les situations complexes, consultez un imam ou un érudit qualifié.",
  },
];

export default function FaqPage() {
  return (
    <>
      <SiteHeader />
      <PageWrapper>
        <div className="space-y-8">
          <header className="space-y-3">
            <p className="text-[13px] font-medium uppercase tracking-widest text-brand-600">
              Questions fréquentes
            </p>
            <h1 className="text-[32px] font-bold text-neutral-900 leading-tight">
              FAQ — Zakāt al-Māl
            </h1>
          </header>

          <dl className="space-y-4">
            {FAQ.map((item, i) => (
              <div
                key={i}
                className="rounded-[14px] border border-neutral-200 bg-white p-5 space-y-2"
              >
                <dt className="text-[15px] font-semibold text-neutral-900">
                  {item.q}
                </dt>
                <dd className="text-[14px] text-neutral-600 leading-relaxed">
                  {item.a}
                </dd>
              </div>
            ))}
          </dl>

          <div className="rounded-[10px] bg-brand-50 border border-brand-200 p-4 text-[14px] text-brand-900 space-y-2">
            <p>
              Une question ne figure pas ici ?{" "}
              <a href="/sources" className="font-medium underline">
                Consultez notre page Sources
              </a>{" "}
              pour les références religieuses détaillées.
            </p>
            <p>
              Pour les questions sur les bénéficiaires de la Zakāt (famille,
              mosquée, association, converti, endetté) :{" "}
              <a href="/beneficiaires-zakat" className="font-medium underline">
                voir notre guide complet sur les bénéficiaires
              </a>
              .
            </p>
          </div>
        </div>
      </PageWrapper>
      <SiteFooter />
    </>
  );
}
