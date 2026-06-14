import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { getMetalPrices, getNisabValue, getPriceLabel } from "@/engine/prices";
import { formatCurrency } from "@/lib/formatCurrency";
import { GOLD_NISAB_GRAMS, SILVER_NISAB_GRAMS } from "@/engine/constants";

export const metadata: Metadata = {
  title: {
    absolute: "Calculateur de Zakāt al-Māl — Calculer sa Zakāt gratuitement",
  },
  description:
    "Calculez votre Zakāt al-Māl : niṣāb, richesses zakātables, montant à verser. Outil gratuit, 100 % confidentiel, fondé sur les avis des savants de Ahl as-Sunnah wa-l-Jamā'ah.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Calculateur de Zakāt al-Māl — Calculer sa Zakāt gratuitement",
    description:
      "Calculez votre Zakāt annuelle gratuitement. Niṣāb, richesses zakātables, montant de la Zakāt — un guide complet et rigoureux.",
    type: "website",
  },
};

const FAQ_ITEMS = [
  {
    q: "Qui est obligé de payer la Zakāt ?",
    a: "La Zakāt est due par tout musulman libre, sain d'esprit, ayant atteint la puberté, et dont le patrimoine zakatable net dépasse le niṣāb depuis une année lunaire complète (ḥawl — environ 354 jours).",
  },
  {
    q: "Quel est le taux de la Zakāt al-Māl ?",
    a: "Le taux de la Zakāt al-Māl est de 2,5 % du patrimoine zakatable net, c'est-à-dire après déduction des dettes exigibles à court terme. Ce taux fait consensus parmi les savants.",
  },
  {
    q: "Que se passe-t-il si mon patrimoine oscille autour du niṣāb ?",
    a: "Si votre patrimoine tombe sous le niṣāb en cours d'année lunaire, le ḥawl est interrompu et recommence à compter de la prochaine fois que le seuil est atteint. En cas d'incertitude, l'avis prudent est de recalculer à la fin de l'année.",
  },
  {
    q: "Mon épargne bloquée (PEL, PEE) est-elle zakātable ?",
    a: "L'avis le plus prudent la considère zakātable même si elle n'est pas immédiatement disponible. Un avis plus souple ne la retient que lorsqu'elle devient accessible. Ce calculateur l'inclut par précaution.",
  },
  {
    q: "Les cryptomonnaies sont-elles zakātables ?",
    a: "Selon la plupart des savants contemporains, les cryptomonnaies sont traitées comme des actifs financiers et sont zakātables à hauteur de leur valeur de marché au jour du calcul.",
  },
  {
    q: "Ce calculateur remplace-t-il l'avis d'un érudit ?",
    a: "Non. Ce calculateur est un outil indicatif basé sur les avis reconnus. Il ne constitue pas une fatwa. Pour les situations complexes — actifs inhabituels, dettes importantes, incertitudes — consultez un imam ou un savant qualifié.",
  },
];

const STEPS = [
  {
    n: "1",
    title: "Vérifier si vous êtes assujetti",
    body: "Votre patrimoine zakatable net doit dépasser le niṣāb au moment du calcul et avoir été maintenu à ce niveau pendant une année lunaire complète (ḥawl). Si votre patrimoine est tombé sous ce seuil en cours d'année, le ḥawl recommence.",
  },
  {
    n: "2",
    title: "Lister vos richesses zakātables",
    body: "Liquidités, or et argent, actions cotées, placements financiers, cryptomonnaies, stocks commerciaux, créances récupérables. Chaque catégorie suit des règles spécifiques détaillées dans notre guide.",
  },
  {
    n: "3",
    title: "Déduire les dettes exigibles",
    body: "Les dettes exigibles à court terme (remboursements prévus dans les 12 prochains mois) peuvent être déduites de l'assiette zakatable. La résidence principale et son crédit ne sont généralement pas pris en compte.",
  },
  {
    n: "4",
    title: "Appliquer le taux de 2,5 %",
    body: "Le montant de la Zakāt due est égal à 2,5 % du patrimoine zakatable net. Exemple : pour un patrimoine zakatable net de 20 000 €, la Zakāt s'élève à 500 €.",
  },
];

export default function HomePage() {
  const prices = getMetalPrices();
  const goldNisab = getNisabValue("gold", prices);
  const silverNisab = getNisabValue("silver", prices);
  const priceLabel = getPriceLabel(prices);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        name: "Calculateur de Zakāt al-Māl",
        url: "https://zakatfacile.fr",
        description:
          "Calculateur de Zakāt al-Māl gratuit et confidentiel, fondé sur les avis des savants de Ahl as-Sunnah wa-l-Jamā'ah.",
        inLanguage: "fr-FR",
        dateModified: "2026-06-14",
      },
      {
        "@type": "FAQPage",
        mainEntity: FAQ_ITEMS.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.a,
          },
        })),
      },
    ],
  };

  return (
    <>
      <SiteHeader />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="flex flex-1 flex-col">
        {/* ── Hero ─────────────────────────────────────────────── */}
        <section className="mx-auto w-full max-w-2xl px-4 py-16 sm:py-24 text-center space-y-6">
          <p className="text-[13px] font-medium uppercase tracking-widest text-brand-600">
            Zakāt al-Māl
          </p>
          <h1 className="text-[36px] sm:text-[48px] font-bold text-neutral-900 leading-tight">
            Calculez votre Zakāt
            <br />
            <span className="text-brand-600">al-Māl gratuitement</span>
          </h1>
          <p className="text-[17px] text-neutral-600 leading-relaxed max-w-lg mx-auto">
            Un calculateur de Zakāt gratuit, 100&nbsp;% confidentiel et
            rigoureux. Vérifiez votre niṣāb, identifiez vos richesses
            zakātables et obtenez le montant de votre Zakāt annuelle — fondé
            sur les avis reconnus des savants de Ahl as-Sunnah wa-l-Jamā&apos;ah.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild>
              <Link href="/calculateur">Commencer le calcul</Link>
            </Button>
            <Button asChild variant="secondary">
              <Link href="/comment-calculer-sa-zakat">
                Comment ça fonctionne ?
              </Link>
            </Button>
          </div>
          <p className="text-[13px] text-neutral-400">
            Aucune inscription · Aucun cookie · Aucune donnée collectée
          </p>
        </section>

        <Separator />

        {/* ── Définition : qu'est-ce que la Zakāt al-Māl ? ────── */}
        <section className="mx-auto w-full max-w-3xl px-4 py-12 sm:py-16 space-y-6">
          <p className="text-[13px] font-medium uppercase tracking-widest text-brand-600">
            Définition
          </p>
          <h2 className="text-[28px] sm:text-[32px] font-bold text-neutral-900">
            Qu&apos;est-ce que la Zakāt al-Māl&nbsp;?
          </h2>
          <div className="space-y-4 text-[15px] text-neutral-700 leading-relaxed">
            <p>
              La <strong>Zakāt al-Māl</strong> — Zakāt sur la richesse — est
              l&apos;un des cinq piliers de l&apos;Islam. Elle consiste en un
              prélèvement annuel obligatoire de <strong>2,5&nbsp;%</strong> sur
              le patrimoine zakatable net qui dépasse un seuil minimal appelé{" "}
              <Link
                href="/nisab"
                className="text-brand-600 underline font-medium"
              >
                niṣāb
              </Link>
              , et qui a été détenu pendant une année lunaire complète (ḥawl,
              environ 354 jours). Elle est mentionnée plus de trente fois dans
              le Coran, souvent associée à la ṣalāh.
            </p>
            <p>
              La Zakāt n&apos;est pas un don facultatif : c&apos;est une{" "}
              <strong>obligation religieuse</strong> (fard). Son acquittement
              purifie le patrimoine (Coran, 9:103) et contribue à la solidarité
              au sein de la communauté. Les huit catégories de bénéficiaires
              sont précisément définies dans la sourate at-Tawbah (verset 60).
            </p>

            <h3 className="text-[18px] font-semibold text-neutral-900 pt-2">
              À qui s&apos;adresse la Zakāt&nbsp;?
            </h3>
            <p>
              Elle est due par tout <strong>musulman</strong> libre, sain
              d&apos;esprit, ayant atteint la puberté (bulūgh), dont le
              patrimoine zakatable net dépasse le niṣāb depuis une année lunaire
              complète. La Zakāt est <strong>individuelle</strong> : chaque
              personne calcule la sienne, y compris pour sa quote-part sur un
              compte joint.
            </p>

            <h3 className="text-[18px] font-semibold text-neutral-900 pt-2">
              Pourquoi utiliser ce calculateur de Zakāt&nbsp;?
            </h3>
            <p>
              Calculer sa Zakāt nécessite d&apos;identifier correctement les
              richesses zakātables, de prendre en compte les divergences entre
              écoles juridiques, et d&apos;appliquer les règles sur les dettes
              déductibles. Ce calculateur vous guide pas à pas, signale les
              divergences, et produit un résultat accompagné d&apos;un{" "}
              <strong>indice de confiance</strong> (fiable / probablement fiable
              / à vérifier). Vos données ne quittent jamais votre appareil.
            </p>
          </div>
        </section>

        <Separator />

        {/* ── Comment calculer sa Zakāt ? ──────────────────────── */}
        <section className="mx-auto w-full max-w-3xl px-4 py-12 sm:py-16 space-y-6">
          <p className="text-[13px] font-medium uppercase tracking-widest text-brand-600">
            Méthode de calcul
          </p>
          <h2 className="text-[28px] sm:text-[32px] font-bold text-neutral-900">
            Comment calculer sa Zakāt&nbsp;?
          </h2>
          <p className="text-[15px] text-neutral-700 leading-relaxed">
            Le calcul de la Zakāt al-Māl repose sur quatre étapes successives.
            Notre calculateur vous guide à travers chacune d&apos;elles et
            adapte les questions à votre situation.
          </p>

          <ol className="space-y-4">
            {STEPS.map((step) => (
              <li
                key={step.n}
                className="flex gap-4 rounded-[14px] border border-neutral-200 bg-white p-5"
              >
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-600 text-white text-[14px] font-bold flex items-center justify-center">
                  {step.n}
                </span>
                <div className="space-y-1">
                  <p className="text-[15px] font-semibold text-neutral-900">
                    {step.title}
                  </p>
                  <p className="text-[14px] text-neutral-600 leading-relaxed">
                    {step.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <Button asChild>
              <Link href="/calculateur">Accéder au calculateur</Link>
            </Button>
            <Button asChild variant="secondary">
              <Link href="/comment-calculer-sa-zakat">
                Guide complet du calcul
              </Link>
            </Button>
          </div>
        </section>

        <Separator />

        {/* ── Qu'est-ce que le Niṣāb ? ─────────────────────────── */}
        <section className="mx-auto w-full max-w-3xl px-4 py-12 sm:py-16 space-y-6">
          <p className="text-[13px] font-medium uppercase tracking-widest text-brand-600">
            Seuil obligatoire
          </p>
          <h2 className="text-[28px] sm:text-[32px] font-bold text-neutral-900">
            Qu&apos;est-ce que le Niṣāb&nbsp;?
          </h2>
          <p className="text-[15px] text-neutral-700 leading-relaxed">
            Le <strong>niṣāb</strong> est le seuil minimal de patrimoine
            zakatable en dessous duquel la Zakāt n&apos;est pas due. Il a été
            défini par le Prophète&nbsp;ﷺ en termes de poids d&apos;or et
            d&apos;argent. Si votre patrimoine zakatable net est inférieur à ce
            seuil, aucune Zakāt n&apos;est due pour cette année lunaire.
          </p>

          <div className="rounded-[14px] border border-neutral-200 bg-neutral-50 p-6 space-y-4">
            <p className="text-[13px] font-medium text-neutral-500 uppercase tracking-wide">
              Valeurs indicatives — {priceLabel}
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[10px] bg-white border border-neutral-200 p-4 space-y-1">
                <p className="text-[13px] text-neutral-500">
                  Niṣāb (or) — avis majoritaire
                </p>
                <p className="text-[24px] font-bold tabular-nums text-neutral-900">
                  {formatCurrency(goldNisab)}
                </p>
                <p className="text-[12px] text-neutral-400">
                  {GOLD_NISAB_GRAMS}&nbsp;g × {prices.goldPricePerGram}&nbsp;€/g
                </p>
              </div>
              <div className="rounded-[10px] bg-white border border-neutral-200 p-4 space-y-1">
                <p className="text-[13px] text-neutral-500">
                  Niṣāb (argent) — école hanafite
                </p>
                <p className="text-[24px] font-bold tabular-nums text-neutral-900">
                  {formatCurrency(silverNisab)}
                </p>
                <p className="text-[12px] text-neutral-400">
                  {SILVER_NISAB_GRAMS}&nbsp;g × {prices.silverPricePerGram}&nbsp;€/g
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4 text-[15px] text-neutral-700 leading-relaxed">
            <h3 className="text-[18px] font-semibold text-neutral-900">
              Or ou argent : deux références
            </h3>
            <p>
              <strong>Le niṣāb en or ({GOLD_NISAB_GRAMS}&nbsp;g)</strong> est
              l&apos;avis le plus répandu parmi les savants contemporains, dont
              Shaykh Ibn al-&apos;Uthaymīn رحمه الله. C&apos;est la référence
              utilisée par défaut dans ce calculateur.
            </p>
            <p>
              <strong>
                Le niṣāb en argent ({SILVER_NISAB_GRAMS}&nbsp;g)
              </strong>{" "}
              est la référence de l&apos;école hanafite. Avec le cours actuel de
              l&apos;argent, ce seuil est nettement inférieur en valeur
              monétaire, ce qui rend la Zakāt due à un plus grand nombre de
              personnes. Certains savants le recommandent par précaution.
            </p>

            <h3 className="text-[18px] font-semibold text-neutral-900">
              Le ḥawl : une année lunaire complète
            </h3>
            <p>
              Pour que la Zakāt soit due, le patrimoine doit non seulement
              dépasser le niṣāb, mais aussi avoir été maintenu à ce niveau
              pendant une <strong>année lunaire complète</strong> (ḥawl, environ
              354 jours). Si le patrimoine tombe sous le niṣāb en cours
              d&apos;année, le ḥawl repart à zéro au moment où le seuil est à
              nouveau atteint.
            </p>
          </div>

          <div>
            <Button asChild variant="secondary">
              <Link href="/nisab">Page complète sur le Niṣāb</Link>
            </Button>
          </div>
        </section>

        <Separator />

        {/* ── Quelles richesses sont concernées ? ──────────────── */}
        <section className="mx-auto w-full max-w-3xl px-4 py-12 sm:py-16 space-y-6">
          <p className="text-[13px] font-medium uppercase tracking-widest text-brand-600">
            Assiette de la Zakāt
          </p>
          <h2 className="text-[28px] sm:text-[32px] font-bold text-neutral-900">
            Quelles richesses sont concernées&nbsp;?
          </h2>
          <p className="text-[15px] text-neutral-700 leading-relaxed">
            Toutes les richesses ne sont pas zakātables. La Zakāt al-Māl porte
            principalement sur les biens liquides, les métaux précieux, et les
            actifs productifs ou destinés à la revente.
          </p>

          <div className="grid gap-5 sm:grid-cols-2">
            <div className="rounded-[14px] border border-neutral-200 bg-white p-5 space-y-3">
              <h3 className="text-[16px] font-semibold text-neutral-900">
                Richesses zakātables
              </h3>
              <ul className="space-y-2 text-[14px] text-neutral-600 leading-relaxed">
                {[
                  "Liquidités : comptes courants, épargne, livrets (Livret A, LDDS, PEL, PEE…)",
                  "Or et argent physique : lingots, pièces, bijoux (divergence selon les écoles)",
                  "Or et argent papier : ETF, certificats, comptes-métal",
                  "Actions cotées en bourse (valeur au jour du calcul)",
                  "Assurance-vie, OPCVM, fonds d'investissement",
                  "Cryptomonnaies (valeur de marché au jour du calcul)",
                  "Stocks de marchandises destinées à la revente",
                  "Créances récupérables (sommes dues par des tiers)",
                ].map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-brand-600 font-bold shrink-0">
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[14px] border border-neutral-200 bg-neutral-50 p-5 space-y-3">
              <h3 className="text-[16px] font-semibold text-neutral-900">
                Non zakātables
              </h3>
              <ul className="space-y-2 text-[14px] text-neutral-600 leading-relaxed">
                {[
                  "Résidence principale",
                  "Véhicule personnel",
                  "Vêtements, meubles, électroménager à usage personnel",
                  "Outils de travail et équipements professionnels",
                  "Bien immobilier détenu uniquement pour usage personnel",
                ].map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-neutral-400 shrink-0">✕</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-[13px] text-neutral-500 leading-relaxed pt-1">
                Un bien immobilier destiné à la revente ou générant des loyers
                peut être zakatable selon certains avis.
              </p>
            </div>
          </div>

          <div className="rounded-[10px] bg-brand-50 border border-brand-200 p-4 text-[14px] text-brand-900">
            En cas de doute sur un actif particulier, notre calculateur indique
            les divergences d&apos;avis et recommande de consulter un érudit
            qualifié.{" "}
            <Link href="/sources" className="font-medium underline">
              Consulter nos sources
            </Link>
            .
          </div>
        </section>

        <Separator />

        {/* ── Questions fréquentes ─────────────────────────────── */}
        <section className="mx-auto w-full max-w-3xl px-4 py-12 sm:py-16 space-y-6">
          <p className="text-[13px] font-medium uppercase tracking-widest text-brand-600">
            Questions fréquentes
          </p>
          <h2 className="text-[28px] sm:text-[32px] font-bold text-neutral-900">
            Questions fréquentes sur la Zakāt
          </h2>

          <dl className="space-y-4">
            {FAQ_ITEMS.map((item) => (
              <div
                key={item.q}
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

          <div>
            <Button asChild variant="secondary">
              <Link href="/faq">Voir toutes les questions</Link>
            </Button>
          </div>
        </section>

        <Separator />

        {/* ── Rigueur et sources ───────────────────────────────── */}
        <section className="mx-auto w-full max-w-3xl px-4 py-12 sm:py-16 space-y-6">
          <p className="text-[13px] font-medium uppercase tracking-widest text-brand-600">
            Fiabilité
          </p>
          <h2 className="text-[28px] sm:text-[32px] font-bold text-neutral-900">
            Un calculateur rigoureux et confidentiel
          </h2>

          <div className="grid gap-5 sm:grid-cols-3">
            {[
              {
                title: "100 % confidentiel",
                desc: "Vos données financières ne quittent jamais votre appareil. Aucun serveur, aucune base de données, aucun cookie de suivi.",
              },
              {
                title: "Sources reconnues",
                desc: "Fondé sur les avis des savants de Ahl as-Sunnah : Ibn Bāz, Ibn al-'Uthaymīn, la Lajnah ad-Dā'imah. Les divergences sont signalées clairement.",
              },
              {
                title: "Indice de confiance",
                desc: "Chaque résultat est accompagné d'un indice de fiabilité (fiable, probablement fiable ou à vérifier) selon votre situation personnelle.",
              },
            ].map((f) => (
              <div
                key={f.title}
                className="rounded-[14px] border border-neutral-200 bg-white p-5 space-y-2"
              >
                <p className="text-[15px] font-semibold text-neutral-900">
                  {f.title}
                </p>
                <p className="text-[14px] text-neutral-500 leading-relaxed">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Button asChild variant="secondary">
              <Link href="/sources">Consulter les sources</Link>
            </Button>
            <Button asChild variant="secondary">
              <Link href="/faq">Questions fréquentes</Link>
            </Button>
          </div>
        </section>

        <Separator />

        {/* ── Méthodologie et E-E-A-T ──────────────────────────── */}
        <section className="mx-auto w-full max-w-3xl px-4 py-12 sm:py-16 space-y-6">
          <p className="text-[13px] font-medium uppercase tracking-widest text-brand-600">
            Méthodologie
          </p>
          <h2 className="text-[28px] sm:text-[32px] font-bold text-neutral-900">
            Fondé sur les savants de référence
          </h2>
          <p className="text-[15px] text-neutral-700 leading-relaxed">
            Ce calculateur s&apos;appuie exclusivement sur les avis des savants
            de Ahl as-Sunnah wa-l-Jamāʿah. Les divergences entre écoles ou
            entre savants sont toujours signalées explicitement — aucune
            position n&apos;est imposée là où les savants divergent.
          </p>
          <div className="rounded-[14px] border border-neutral-200 bg-white p-5 space-y-3">
            <p className="text-[12px] font-semibold uppercase tracking-widest text-neutral-400">
              Sources de référence
            </p>
            <ul className="space-y-2">
              {[
                "Shaykh ʿAbd al-ʿAzīz ibn Bāz رحمه الله",
                "Shaykh Muḥammad ibn Ṣāliḥ al-ʿUthaymīn رحمه الله",
                "Al-Lajnah ad-Dāʾimah — Comité Permanent des Savants",
                "Consensus des quatre écoles classiques (sur les points convergents)",
              ].map((ref) => (
                <li
                  key={ref}
                  className="flex gap-3 text-[14px] text-neutral-700"
                >
                  <span className="text-brand-600 font-bold shrink-0">·</span>
                  <span>{ref}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center justify-between flex-wrap gap-4">
            <p className="text-[13px] text-neutral-400">
              Dernière mise à jour&nbsp;: juin 2026
            </p>
            <div className="flex gap-3 flex-wrap">
              <Button asChild variant="secondary">
                <Link href="/sources">Sources complètes</Link>
              </Button>
              <Button asChild variant="secondary">
                <Link href="/a-propos">À propos</Link>
              </Button>
            </div>
          </div>
        </section>

        <Separator />

        {/* ── CTA final ────────────────────────────────────────── */}
        <section className="mx-auto w-full max-w-2xl px-4 py-12 sm:py-16 text-center space-y-4">
          <h2 className="text-[24px] font-bold text-neutral-900">
            Prêt à calculer votre Zakāt&nbsp;?
          </h2>
          <p className="text-[15px] text-neutral-600 leading-relaxed">
            Le calcul prend moins de 5&nbsp;minutes. Vos données restent sur
            votre appareil. Aucune inscription requise.
          </p>
          <div className="pt-2">
            <Button asChild>
              <Link href="/calculateur">Commencer le calcul</Link>
            </Button>
          </div>
          <p className="text-[13px] text-neutral-400 leading-relaxed">
            Ce calculateur ne prétend pas rendre une fatwa. Il est conçu comme
            un outil d&apos;aide au calcul basé sur les avis reconnus des
            savants de Ahl as-Sunnah wa-l-Jamā&apos;ah. En cas de doute,
            consultez un érudit qualifié.
          </p>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
