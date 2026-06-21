import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title:
    "Comment calculer sa Zakāt al-Māl — Guide complet étape par étape",
  description:
    "Guide complet pour calculer votre Zakāt al-Māl : les 5 étapes du calcul, actifs zakātables, dettes déductibles, niṣāb, taux de 2,5 %, exemples chiffrés, erreurs fréquentes et cas pratiques.",
  alternates: {
    canonical: "/comment-calculer-sa-zakat",
  },
  openGraph: {
    title: "Comment calculer sa Zakāt al-Māl — Guide complet étape par étape",
    description:
      "Guide pas à pas pour calculer votre Zakāt : niṣāb, actifs zakātables, dettes déductibles, taux de 2,5 %, exemples chiffrés et erreurs à éviter.",
    type: "article",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Calculateur de Zakāt al-Māl — www.zakatfacile.fr",
      },
    ],
  },
};

const FAQ_ITEMS = [
  {
    q: "Quel est le taux de la Zakāt al-Māl ?",
    a: "Le taux de la Zakāt al-Māl est de 2,5 % (soit un quarantième) du patrimoine zakātable net. Ce taux est unanime parmi les savants des quatre grandes écoles juridiques sunnites. Il s'applique sur la totalité du patrimoine net zakatable, pas uniquement sur la partie qui dépasse le niṣāb.",
  },
  {
    q: "Faut-il calculer la Zakāt sur le patrimoine brut ou net ?",
    a: "Sur le patrimoine net. On déduit les dettes exigibles à court terme (mensualités de crédit en cours, factures dues, prêts à rembourser dans les 12 prochains mois) du total des actifs zakātables avant d'appliquer le taux de 2,5 %. Le solde total d'un crédit immobilier sur 20 ans ne se déduit pas dans son intégralité.",
  },
  {
    q: "Peut-on calculer la Zakāt en année solaire au lieu de l'année lunaire ?",
    a: "La référence islamique est l'année lunaire (ḥawl, environ 354 jours). Certains savants permettent le calcul en année solaire par souci de facilitation, à condition d'augmenter légèrement le taux à 2,577 % pour compenser les 11 jours supplémentaires. Shaykh Ibn al-ʿUthaymīn رحمه الله recommande toutefois le ḥawl lunaire comme référence première.",
  },
  {
    q: "Dois-je calculer la Zakāt sur chaque actif séparément ?",
    a: "Non. On additionne l'ensemble du patrimoine zakātable (liquidités, or, argent, placements, cryptomonnaies, stocks de commerce…) pour obtenir un total unique. C'est ce total global, après déduction des dettes exigibles, qui est comparé au niṣāb. La Zakāt de 2,5 % s'applique sur ce total net, pas actif par actif.",
  },
  {
    q: "Comment calculer la Zakāt sur les actions et ETF ?",
    a: "Pour un investisseur particulier qui détient des actions ou ETF en tant que placement (non en tant que commerçant), la position la plus répandue parmi les savants contemporains est d'inclure la valeur marchande totale du portefeuille dans le patrimoine zakātable. La Zakāt est alors de 2,5 % de la valeur totale des titres au jour du calcul.",
  },
  {
    q: "Comment calculer la Zakāt sur les cryptomonnaies ?",
    a: "Les cryptomonnaies sont considérées comme des actifs zakātables par la majorité des savants contemporains qui se sont prononcés sur le sujet. On retient leur valeur marchande au jour du calcul, que l'on additionne au reste du patrimoine zakātable. La Zakāt est de 2,5 % du total net si le niṣāb est atteint.",
  },
  {
    q: "Quelle est la différence entre le calcul simple et le calcul détaillé ?",
    a: "Le calcul simple additionne tous les actifs zakātables en une seule somme, déduit les dettes exigibles, et applique 2,5 %. Le calcul détaillé distingue chaque catégorie d'actif (liquidités, or, argent, placements, stocks, créances…) avant de les additionner. Le résultat final est identique — le calcul détaillé est simplement plus rigoureux dans l'inventaire.",
  },
  {
    q: "Que se passe-t-il si mon patrimoine passe sous le niṣāb en cours d'année ?",
    a: "Si votre patrimoine zakātable net passe sous le niṣāb en cours d'année, le ḥawl (année lunaire) est interrompu et recommence à zéro dès que le seuil est à nouveau dépassé. La Zakāt n'est due que si le niṣāb est maintenu du début à la fin du ḥawl.",
  },
];

export default function CommentCalculerPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline:
          "Comment calculer sa Zakāt al-Māl — Guide complet étape par étape",
        description:
          "Guide complet pour calculer votre Zakāt al-Māl : les 5 étapes du calcul, actifs zakātables, dettes déductibles, niṣāb, taux de 2,5 %, exemples chiffrés et erreurs fréquentes.",
        url: "https://www.zakatfacile.fr/comment-calculer-sa-zakat",
        inLanguage: "fr-FR",
        author: {
          "@type": "Organization",
          name: "Calculateur de Zakāt al-Māl",
        },
        datePublished: "2026-06-15",
        dateModified: "2026-06-21",
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

      <PageWrapper>
        <article className="space-y-10">
          {/* ── En-tête ─────────────────────────────────────────── */}
          <header className="space-y-3">
            <p className="text-[13px] font-medium uppercase tracking-widest text-brand-600">
              Guide pratique
            </p>
            <h1 className="text-[32px] font-bold text-neutral-900 leading-tight">
              Comment calculer sa Zakāt al-Māl
              <br />
              Guide complet étape par étape
            </h1>
            <p className="text-[16px] text-neutral-600 leading-relaxed">
              La Zakāt al-Māl est de 2,5 % du patrimoine zakātable net détenu
              au-dessus du niṣāb pendant une année lunaire complète (ḥawl). Ce
              guide détaille chaque étape du calcul : vérification des
              conditions, inventaire des actifs zakātables, déduction des dettes,
              vérification du{" "}
              <Link href="/nisab" className="text-brand-600 underline">
                niṣāb
              </Link>{" "}
              et application du taux. Avec des exemples chiffrés, des cas
              pratiques et les erreurs fréquentes à éviter.
            </p>
          </header>

          {/* ── Formule résumée ─────────────────────────────────── */}
          <div className="rounded-[14px] border border-brand-200 bg-brand-50 p-6 space-y-4">
            <p className="text-[12px] font-semibold uppercase tracking-widest text-brand-600">
              La formule de la Zakāt al-Māl
            </p>
            <div className="rounded-[10px] bg-white border border-brand-100 p-5 text-center space-y-3">
              <p className="text-[18px] font-bold text-neutral-900">
                Zakāt = (Actifs zakātables − Dettes exigibles) × 2,5 %
              </p>
              <p className="text-[13px] text-neutral-500">
                Si le résultat (patrimoine net zakātable) est supérieur au{" "}
                <Link href="/nisab" className="text-brand-600 underline">
                  niṣāb
                </Link>
                , la Zakāt est due.
              </p>
            </div>
            <p className="text-[14px] text-neutral-600 leading-relaxed">
              Cette formule s&apos;applique à l&apos;ensemble du patrimoine
              zakātable — pas actif par actif. Le niṣāb se vérifie sur le total
              net global. Le taux de 2,5 % (soit un quarantième) est unanime
              parmi les savants des quatre grandes écoles juridiques sunnites.
            </p>
          </div>

          {/* ── Calcul simple vs détaillé ───────────────────────── */}
          <section className="space-y-4">
            <h2 className="text-[22px] font-semibold text-neutral-900">
              Calcul simple ou calcul détaillé ?
            </h2>
            <div className="space-y-3 text-[15px] text-neutral-700 leading-relaxed">
              <p>
                Avant de commencer, il est utile de comprendre qu&apos;il existe
                deux approches pour calculer sa Zakāt al-Māl. Les deux
                aboutissent au même résultat — la différence est dans la
                granularité de l&apos;inventaire.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[14px] border border-neutral-200 bg-white p-5 space-y-3">
                <p className="text-[15px] font-semibold text-neutral-900">
                  Le calcul simple
                </p>
                <p className="text-[14px] text-neutral-600 leading-relaxed">
                  Vous additionnez tous vos avoirs zakātables en une seule
                  somme, vous déduisez vos dettes exigibles, et vous appliquez
                  2,5 %. Cette méthode convient à ceux dont le patrimoine est
                  essentiellement constitué d&apos;épargne bancaire et de
                  liquidités.
                </p>
                <div className="rounded-[10px] bg-neutral-50 border border-neutral-200 px-4 py-3 text-[13px] text-neutral-700">
                  <strong>Exemple :</strong> 25 000 € d&apos;épargne totale − 3 000 € de
                  dettes = 22 000 € × 2,5 % = <strong>550 € de Zakāt</strong>
                </div>
              </div>
              <div className="rounded-[14px] border border-neutral-200 bg-white p-5 space-y-3">
                <p className="text-[15px] font-semibold text-neutral-900">
                  Le calcul détaillé
                </p>
                <p className="text-[14px] text-neutral-600 leading-relaxed">
                  Vous listez chaque catégorie d&apos;actif séparément
                  (liquidités, or, argent, placements, créances, stocks de
                  commerce, cryptomonnaies…), vous les additionnez, vous déduisez
                  les dettes, et vous appliquez 2,5 %. Cette méthode est
                  recommandée pour les patrimoines diversifiés.
                </p>
                <div className="rounded-[10px] bg-neutral-50 border border-neutral-200 px-4 py-3 text-[13px] text-neutral-700">
                  <strong>Notre{" "}
                  <Link href="/calculateur" className="text-brand-600 underline">
                    calculateur
                  </Link>{" "}
                  utilise cette méthode</strong> — il vous guide catégorie par
                  catégorie pour un inventaire exhaustif.
                </div>
              </div>
            </div>
          </section>

          {/* ── Les 5 étapes du calcul ──────────────────────────── */}
          <section className="space-y-6">
            <h2 className="text-[22px] font-semibold text-neutral-900">
              Les 5 étapes du calcul de la Zakāt al-Māl
            </h2>
            <p className="text-[15px] text-neutral-700 leading-relaxed">
              Que vous optiez pour le calcul simple ou le calcul détaillé, la
              logique est la même en cinq étapes. Voici chaque étape expliquée
              en détail, avec les preuves textuelles et les points de vigilance.
            </p>

            {/* Étape 1 */}
            <div className="rounded-[14px] border border-neutral-200 bg-white p-5 space-y-4">
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-600 text-white text-[13px] font-bold flex items-center justify-center mt-0.5">
                  1
                </span>
                <div className="space-y-1">
                  <p className="text-[17px] font-bold text-neutral-900">
                    Vérifier les conditions d&apos;obligation
                  </p>
                  <p className="text-[13px] text-neutral-500">
                    Avant même de sortir la calculatrice
                  </p>
                </div>
              </div>
              <div className="pl-12 space-y-3 text-[14px] text-neutral-700 leading-relaxed">
                <p>
                  La Zakāt al-Māl n&apos;est pas due par tous les musulmans.
                  Trois conditions préalables doivent être réunies :
                </p>
                <ul className="space-y-2">
                  <li className="flex gap-2">
                    <span className="text-brand-600 font-bold shrink-0 mt-0.5">✓</span>
                    <span>
                      <strong>Être musulman(e)</strong> — condition unanime dans
                      toutes les écoles juridiques.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-brand-600 font-bold shrink-0 mt-0.5">✓</span>
                    <span>
                      <strong>Posséder un patrimoine supérieur au{" "}
                      <Link href="/nisab" className="text-brand-600 underline">
                        niṣāb
                      </Link>
                      </strong> — le seuil minimal fixé par le Prophète ﷺ
                      (85 g d&apos;or ou 595 g d&apos;argent en valeur).
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-brand-600 font-bold shrink-0 mt-0.5">✓</span>
                    <span>
                      <strong>Avoir maintenu ce patrimoine pendant un ḥawl
                      complet</strong> — une année lunaire (environ 354 jours).
                    </span>
                  </li>
                </ul>
                <div className="rounded-[10px] bg-brand-50 border border-brand-100 px-4 py-3 text-[13px] text-brand-900">
                  Pour un guide complet sur les conditions d&apos;obligation :{" "}
                  <Link href="/qui-doit-payer-la-zakat" className="text-brand-700 underline font-medium">
                    Qui doit payer la Zakāt al-Māl ? →
                  </Link>
                </div>
              </div>
            </div>

            {/* Étape 2 */}
            <div className="rounded-[14px] border border-neutral-200 bg-white p-5 space-y-4">
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-600 text-white text-[13px] font-bold flex items-center justify-center mt-0.5">
                  2
                </span>
                <div className="space-y-1">
                  <p className="text-[17px] font-bold text-neutral-900">
                    Choisir la référence du niṣāb : or ou argent
                  </p>
                  <p className="text-[13px] text-neutral-500">
                    Ce choix détermine le seuil d&apos;assujettissement
                  </p>
                </div>
              </div>
              <div className="pl-12 space-y-3 text-[14px] text-neutral-700 leading-relaxed">
                <p>
                  Le{" "}
                  <Link href="/nisab" className="text-brand-600 underline">
                    niṣāb
                  </Link>{" "}
                  peut être calculé selon deux références, fixées par le Prophète
                  ﷺ :
                </p>
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-[10px] border border-neutral-200 bg-neutral-50 p-4 space-y-1.5">
                    <p className="text-[13px] font-semibold text-neutral-900">
                      Niṣāb en or — 85 g
                    </p>
                    <p className="text-[12px] text-neutral-500">
                      Avis majoritaire contemporain (Shaykh Ibn al-ʿUthaymīn رحمه الله, Lajnah ad-Dāʾimah)
                    </p>
                  </div>
                  <div className="rounded-[10px] border border-neutral-200 bg-neutral-50 p-4 space-y-1.5">
                    <p className="text-[13px] font-semibold text-neutral-900">
                      Niṣāb en argent — 595 g
                    </p>
                    <p className="text-[12px] text-neutral-500">
                      Référence de l&apos;école hanafite — seuil plus bas
                    </p>
                  </div>
                </div>
                <p>
                  Les deux seuils correspondent à la même réalité historique :
                  20 dīnārs d&apos;or ou 200 dirhams d&apos;argent. Mais
                  aujourd&apos;hui, le rapport de valeur entre l&apos;or et
                  l&apos;argent ayant radicalement changé, le niṣāb en argent
                  représente une valeur monétaire nettement plus basse.
                  Consultez la{" "}
                  <Link href="/nisab" className="text-brand-600 underline">
                    page Niṣāb
                  </Link>{" "}
                  pour les montants du jour et les divergences entre savants.
                </p>
              </div>
            </div>

            {/* Étape 3 */}
            <div className="rounded-[14px] border border-neutral-200 bg-white p-5 space-y-4">
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-600 text-white text-[13px] font-bold flex items-center justify-center mt-0.5">
                  3
                </span>
                <div className="space-y-1">
                  <p className="text-[17px] font-bold text-neutral-900">
                    Inventorier vos actifs zakātables
                  </p>
                  <p className="text-[13px] text-neutral-500">
                    Tout ce qui entre dans l&apos;assiette de la Zakāt
                  </p>
                </div>
              </div>
              <div className="pl-12 space-y-4 text-[14px] text-neutral-700 leading-relaxed">
                <p>
                  L&apos;étape la plus importante du calcul. Il s&apos;agit de
                  lister l&apos;ensemble de vos richesses zakātables — c&apos;est-à-dire
                  les biens sur lesquels la Zakāt est due. L&apos;oubli
                  d&apos;un actif est la première source d&apos;erreur.
                </p>

                <div className="overflow-x-auto rounded-[14px] border border-neutral-200">
                  <table className="w-full text-[13px]">
                    <thead>
                      <tr className="bg-neutral-50 border-b border-neutral-200">
                        <th className="text-left px-4 py-3 font-semibold text-neutral-700">
                          Catégorie d&apos;actif
                        </th>
                        <th className="text-center px-4 py-3 font-semibold text-neutral-700">
                          Zakatable ?
                        </th>
                        <th className="text-left px-4 py-3 font-semibold text-neutral-700 hidden sm:table-cell">
                          Précision
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-neutral-100">
                      {[
                        {
                          cat: "Comptes courants et épargne disponible",
                          ok: true,
                          note: "Solde au jour du calcul",
                        },
                        {
                          cat: "Livret A, LDDS, LEP",
                          ok: true,
                          note: "Solde + intérêts acquis",
                        },
                        {
                          cat: "Or (lingots, pièces, bijoux selon avis)",
                          ok: true,
                          note: "Valeur marchande au jour du calcul",
                        },
                        {
                          cat: "Argent métal",
                          ok: true,
                          note: "Valeur marchande au jour du calcul",
                        },
                        {
                          cat: "Actions, ETF, OPCVM",
                          ok: true,
                          note: "Valeur de marché au jour du calcul",
                        },
                        {
                          cat: "Assurance-vie (fonds en euros + UC)",
                          ok: true,
                          note: "Valeur de rachat au jour du calcul",
                        },
                        {
                          cat: "Cryptomonnaies",
                          ok: true,
                          note: "Valeur marchande au jour du calcul",
                        },
                        {
                          cat: "Loyers encaissés et non dépensés",
                          ok: true,
                          note: "Revenus locatifs disponibles",
                        },
                        {
                          cat: "Stock commercial et trésorerie pro",
                          ok: true,
                          note: "Valeur marchande du stock",
                        },
                        {
                          cat: "Créances récupérables",
                          ok: true,
                          note: "Argent prêté à un débiteur solvable",
                        },
                        {
                          cat: "Résidence principale",
                          ok: false,
                          note: "Bien d'usage personnel",
                        },
                        {
                          cat: "Véhicule personnel",
                          ok: false,
                          note: "Bien d'usage personnel",
                        },
                        {
                          cat: "Équipements professionnels",
                          ok: false,
                          note: "Outils de travail (non zakātables)",
                        },
                        {
                          cat: "Mobilier et effets personnels",
                          ok: false,
                          note: "Biens d'usage courant",
                        },
                      ].map((row) => (
                        <tr key={row.cat} className="bg-white even:bg-neutral-50">
                          <td className="px-4 py-3 text-neutral-700 font-medium">
                            {row.cat}
                          </td>
                          <td className="px-4 py-3 text-center">
                            <span
                              className={
                                row.ok
                                  ? "text-[12px] font-medium text-success-700"
                                  : "text-[12px] text-neutral-400"
                              }
                            >
                              {row.ok ? "✓ Oui" : "✗ Non"}
                            </span>
                          </td>
                          <td className="px-4 py-3 text-neutral-500 hidden sm:table-cell">
                            {row.note}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="rounded-[10px] bg-warning-50 border-l-[3px] border-warning-400 px-4 py-3 text-[13px]">
                  <strong className="text-warning-700">
                    Cas des bijoux en or portés :
                  </strong>{" "}
                  l&apos;école hanafite inclut les bijoux portés dans
                  l&apos;assiette zakātable. Les écoles mālikite, shāfiʿite et
                  la position dominante ḥanbalite les exemptent. Shaykh Ibn Bāz
                  رحمه الله et Shaykh Ibn al-ʿUthaymīn رحمه الله recommandent de
                  les inclure par précaution (iḥtiyāṭ). Consultez la page{" "}
                  <Link href="/qui-doit-payer-la-zakat" className="text-warning-700 underline">
                    Qui doit payer la Zakāt
                  </Link>{" "}
                  pour le détail de cette divergence.
                </div>
              </div>
            </div>

            {/* Étape 4 */}
            <div className="rounded-[14px] border border-neutral-200 bg-white p-5 space-y-4">
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-600 text-white text-[13px] font-bold flex items-center justify-center mt-0.5">
                  4
                </span>
                <div className="space-y-1">
                  <p className="text-[17px] font-bold text-neutral-900">
                    Déduire les dettes exigibles
                  </p>
                  <p className="text-[13px] text-neutral-500">
                    Seules les dettes à court terme sont déductibles
                  </p>
                </div>
              </div>
              <div className="pl-12 space-y-4 text-[14px] text-neutral-700 leading-relaxed">
                <p>
                  On déduit du total des actifs zakātables les dettes
                  légitimes exigibles à court terme — c&apos;est-à-dire les
                  montants que vous devez rembourser dans les 12 prochains mois.
                  Le patrimoine net obtenu est votre{" "}
                  <strong>assiette zakātable</strong>.
                </p>

                <div className="space-y-3">
                  <p className="text-[15px] font-semibold text-neutral-900">
                    Dettes déductibles :
                  </p>
                  <ul className="space-y-2">
                    {[
                      "Mensualités de crédit exigibles dans les 12 prochains mois",
                      "Factures et charges dues (loyer, impôts en cours)",
                      "Prêts personnels à rembourser à court terme",
                      "Dettes commerciales exigibles",
                    ].map((d) => (
                      <li key={d} className="flex gap-2 text-[13px]">
                        <span className="text-brand-600 font-bold shrink-0 mt-0.5">✓</span>
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-3">
                  <p className="text-[15px] font-semibold text-neutral-900">
                    Dettes NON déductibles :
                  </p>
                  <ul className="space-y-2">
                    {[
                      "Solde total d'un crédit immobilier sur 20/25 ans",
                      "Engagements financiers futurs non encore exigibles",
                      "Dettes prescrites ou contestées",
                    ].map((d) => (
                      <li key={d} className="flex gap-2 text-[13px]">
                        <span className="text-red-500 font-bold shrink-0 mt-0.5">✗</span>
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-[10px] bg-neutral-50 border border-neutral-200 px-4 py-3 text-[13px] text-neutral-700">
                  Shaykh Ibn al-ʿUthaymīn رحمه الله précise que seules les
                  dettes exigibles à court terme sont déductibles — pas le
                  capital restant dû sur toute la durée d&apos;un prêt.{" "}
                  <span className="text-neutral-400">
                    (Ash-Sharḥ al-Mumtiʿ, vol. 6)
                  </span>
                </div>
              </div>
            </div>

            {/* Étape 5 */}
            <div className="rounded-[14px] border border-neutral-200 bg-white p-5 space-y-4">
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-600 text-white text-[13px] font-bold flex items-center justify-center mt-0.5">
                  5
                </span>
                <div className="space-y-1">
                  <p className="text-[17px] font-bold text-neutral-900">
                    Vérifier le niṣāb et appliquer le taux de 2,5 %
                  </p>
                  <p className="text-[13px] text-neutral-500">
                    Le calcul final
                  </p>
                </div>
              </div>
              <div className="pl-12 space-y-3 text-[14px] text-neutral-700 leading-relaxed">
                <p>
                  Si votre patrimoine net zakātable (actifs − dettes exigibles)
                  dépasse le{" "}
                  <Link href="/nisab" className="text-brand-600 underline">
                    niṣāb
                  </Link>
                  , la Zakāt est due. Le taux est de{" "}
                  <strong>2,5 % (un quarantième)</strong> du patrimoine net
                  total — pas uniquement de la partie qui dépasse le niṣāb.
                </p>
                <div className="rounded-[10px] bg-brand-50 border border-brand-100 px-4 py-3 text-[13px] text-brand-900">
                  <strong>Point important :</strong> la Zakāt s&apos;applique
                  sur la totalité du patrimoine net zakātable, pas seulement
                  sur le montant qui dépasse le niṣāb. Le niṣāb est un seuil
                  d&apos;entrée — une fois atteint, c&apos;est tout le
                  patrimoine qui est zakātable.
                </div>
                <div className="rounded-[10px] bg-neutral-50 border border-neutral-200 px-4 py-3 text-[13px] text-neutral-700">
                  Le Prophète ﷺ a dit : « Il n&apos;y a pas de Zakāt sur les
                  biens inférieurs à cinq uqiyyah [d&apos;argent]. Lorsque tu
                  as deux cents dirhams et qu&apos;une année s&apos;est écoulée,
                  cinq dirhams sont dus. »{" "}
                  <span className="text-neutral-400">
                    (Al-Bukhārī n° 1405 ; Muslim n° 979 ; Abū Dāwūd n° 1573)
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* ── Exemples chiffrés ───────────────────────────────── */}
          <section className="space-y-5">
            <h2 className="text-[22px] font-semibold text-neutral-900">
              Exemples chiffrés : calcul de la Zakāt pas à pas
            </h2>
            <p className="text-[15px] text-neutral-700 leading-relaxed">
              Voici trois cas concrets illustrant le calcul dans des situations
              différentes. Les montants du niṣāb sont hypothétiques — consultez
              la{" "}
              <Link href="/nisab" className="text-brand-600 underline">
                page Niṣāb
              </Link>{" "}
              pour la valeur du jour.
            </p>

            {/* Exemple 1 */}
            <div className="rounded-[14px] border border-green-200 bg-green-50 p-5 space-y-3">
              <p className="text-[15px] font-semibold text-green-800">
                Exemple 1 — Salarié avec épargne bancaire
              </p>
              <div className="text-[13px] text-neutral-700 space-y-2">
                <p className="font-semibold text-neutral-800">Actifs zakātables :</p>
                <ul className="space-y-1 ml-4">
                  <li>Compte courant : 5 000 €</li>
                  <li>Livret A : 12 000 €</li>
                  <li>Assurance-vie (fonds euros) : 8 000 €</li>
                  <li className="font-semibold pt-1">Total actifs : 25 000 €</li>
                </ul>
                <p className="font-semibold text-neutral-800 pt-2">Dettes exigibles :</p>
                <ul className="space-y-1 ml-4">
                  <li>Prêt personnel (mensualités 12 mois) : 3 000 €</li>
                  <li className="font-semibold pt-1">Total dettes : 3 000 €</li>
                </ul>
                <div className="rounded-[8px] bg-white border border-green-200 px-4 py-3 mt-3 space-y-1">
                  <p>Patrimoine net zakātable : 25 000 − 3 000 = <strong>22 000 €</strong></p>
                  <p>Niṣāb (hypothèse or) : 8 000 € → 22 000 &gt; 8 000 ✓</p>
                  <p className="text-green-700 font-semibold pt-1">
                    Zakāt due : 22 000 × 2,5 % = 550 €
                  </p>
                </div>
              </div>
            </div>

            {/* Exemple 2 */}
            <div className="rounded-[14px] border border-green-200 bg-green-50 p-5 space-y-3">
              <p className="text-[15px] font-semibold text-green-800">
                Exemple 2 — Patrimoine diversifié (or, placements, crypto)
              </p>
              <div className="text-[13px] text-neutral-700 space-y-2">
                <p className="font-semibold text-neutral-800">Actifs zakātables :</p>
                <ul className="space-y-1 ml-4">
                  <li>Compte courant : 3 000 €</li>
                  <li>Livret A : 6 000 €</li>
                  <li>Or (50 g en lingotins) : 4 250 €</li>
                  <li>Actions (PEA) : 15 000 €</li>
                  <li>Cryptomonnaies : 2 500 €</li>
                  <li>Loyers encaissés non dépensés : 1 800 €</li>
                  <li className="font-semibold pt-1">Total actifs : 32 550 €</li>
                </ul>
                <p className="font-semibold text-neutral-800 pt-2">Dettes exigibles :</p>
                <ul className="space-y-1 ml-4">
                  <li>Mensualités crédit immobilier (12 mois) : 9 600 €</li>
                  <li>Impôts dus : 1 200 €</li>
                  <li className="font-semibold pt-1">Total dettes : 10 800 €</li>
                </ul>
                <div className="rounded-[8px] bg-white border border-green-200 px-4 py-3 mt-3 space-y-1">
                  <p>Patrimoine net : 32 550 − 10 800 = <strong>21 750 €</strong></p>
                  <p>Niṣāb (hypothèse or) : 8 000 € → 21 750 &gt; 8 000 ✓</p>
                  <p className="text-green-700 font-semibold pt-1">
                    Zakāt due : 21 750 × 2,5 % = 543,75 €
                  </p>
                </div>
              </div>
            </div>

            {/* Exemple 3 */}
            <div className="rounded-[14px] border border-red-200 bg-red-50 p-5 space-y-3">
              <p className="text-[15px] font-semibold text-red-800">
                Exemple 3 — Patrimoine sous le niṣāb (Zakāt non due)
              </p>
              <div className="text-[13px] text-neutral-700 space-y-2">
                <p className="font-semibold text-neutral-800">Actifs zakātables :</p>
                <ul className="space-y-1 ml-4">
                  <li>Compte courant : 2 000 €</li>
                  <li>Livret A : 4 000 €</li>
                  <li className="font-semibold pt-1">Total actifs : 6 000 €</li>
                </ul>
                <p className="font-semibold text-neutral-800 pt-2">Dettes exigibles :</p>
                <ul className="space-y-1 ml-4">
                  <li>Factures et charges : 800 €</li>
                  <li className="font-semibold pt-1">Total dettes : 800 €</li>
                </ul>
                <div className="rounded-[8px] bg-white border border-red-200 px-4 py-3 mt-3 space-y-1">
                  <p>Patrimoine net : 6 000 − 800 = <strong>5 200 €</strong></p>
                  <p>Niṣāb (hypothèse or) : 8 000 € → 5 200 &lt; 8 000</p>
                  <p className="text-red-700 font-semibold pt-1">
                    Zakāt non due — patrimoine net inférieur au niṣāb
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* ── Erreurs fréquentes ──────────────────────────────── */}
          <section className="space-y-4">
            <h2 className="text-[22px] font-semibold text-neutral-900">
              Les erreurs fréquentes dans le calcul de la Zakāt
            </h2>
            <p className="text-[15px] text-neutral-700 leading-relaxed">
              Ces erreurs sont très répandues — elles conduisent soit à
              sous-estimer la Zakāt due, soit à la surestimer. Les voici
              résumées avec la correction correspondante.
            </p>
            <div className="space-y-3">
              {[
                {
                  erreur: "Déduire la totalité d'un crédit immobilier sur 20 ans",
                  correct:
                    "Seules les mensualités exigibles à court terme (12 prochains mois) sont déductibles. Shaykh Ibn al-ʿUthaymīn رحمه الله est explicite sur ce point.",
                },
                {
                  erreur: "Oublier les cryptomonnaies dans l'inventaire",
                  correct:
                    "Les cryptomonnaies sont des actifs zakātables — leur valeur marchande au jour du calcul s'ajoute au patrimoine.",
                },
                {
                  erreur: "Ne calculer la Zakāt que sur la partie qui dépasse le niṣāb",
                  correct:
                    "Le niṣāb est un seuil d'entrée. Une fois atteint, la Zakāt de 2,5 % s'applique sur la totalité du patrimoine net zakātable.",
                },
                {
                  erreur: "Calculer la Zakāt actif par actif avec un niṣāb séparé pour chacun",
                  correct:
                    "On additionne tous les actifs zakātables pour obtenir un total unique, que l'on compare au niṣāb une seule fois.",
                },
                {
                  erreur: "Exclure les bijoux en or portés sans vérifier les avis",
                  correct:
                    "L'exclusion des bijoux portés est un avis valide (mālikite, shāfiʿite), mais Shaykh Ibn Bāz et Shaykh Ibn al-ʿUthaymīn recommandent de les inclure par précaution.",
                },
                {
                  erreur: "Oublier l'assurance-vie ou le PEA",
                  correct:
                    "Les placements financiers (assurance-vie, PEA, OPCVM, ETF) font partie du patrimoine zakātable — à leur valeur de marché au jour du calcul.",
                },
                {
                  erreur: "Penser que la Zakāt al-Māl se calcule sur le revenu mensuel",
                  correct:
                    "La Zakāt al-Māl est un impôt annuel sur le patrimoine accumulé (2,5 %), pas sur le revenu. C'est l'épargne détenue au-dessus du niṣāb pendant un ḥawl complet qui est zakātable, pas le salaire à la réception.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="rounded-[14px] border border-neutral-200 bg-white p-5 space-y-2"
                >
                  <p className="text-[14px] text-neutral-400 italic">
                    « {item.erreur} »
                  </p>
                  <p className="text-[14px] text-neutral-800 leading-relaxed">
                    {item.correct}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* ── Cas pratiques ───────────────────────────────────── */}
          <section className="space-y-5">
            <h2 className="text-[22px] font-semibold text-neutral-900">
              Cas pratiques courants
            </h2>

            {/* Crédit immobilier */}
            <div className="rounded-[14px] border border-neutral-200 bg-white p-5 space-y-3">
              <h3 className="text-[16px] font-semibold text-neutral-900">
                Comment calculer sa Zakāt avec un crédit immobilier ?
              </h3>
              <div className="space-y-3 text-[14px] text-neutral-700 leading-relaxed">
                <p>
                  Le crédit immobilier est le cas qui génère le plus de confusion.
                  La règle est claire : on ne déduit <strong>pas</strong> le
                  solde total du prêt. On déduit uniquement les mensualités
                  exigibles à court terme.
                </p>
                <div className="rounded-[10px] border border-neutral-200 bg-neutral-50 p-4 text-[13px] space-y-1.5">
                  <p className="font-semibold text-neutral-800">Exemple :</p>
                  <ul className="space-y-1">
                    <li>Épargne liquide : 30 000 €</li>
                    <li>Solde total restant dû sur le crédit : 150 000 €</li>
                    <li>Mensualités sur 12 mois : 12 × 800 € = 9 600 €</li>
                    <li>Patrimoine net : 30 000 − 9 600 = <strong>20 400 €</strong></li>
                    <li className="text-brand-700 font-semibold pt-1">
                      → Si 20 400 € &gt; niṣāb → Zakāt due : 20 400 × 2,5 % = 510 €
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Salaire */}
            <div className="rounded-[14px] border border-neutral-200 bg-white p-5 space-y-3">
              <h3 className="text-[16px] font-semibold text-neutral-900">
                Comment calculer la Zakāt sur son salaire ?
              </h3>
              <div className="space-y-3 text-[14px] text-neutral-700 leading-relaxed">
                <p>
                  Le salaire mensuel n&apos;est pas zakātable à la réception.
                  C&apos;est l&apos;épargne accumulée qui entre dans le
                  patrimoine zakātable. Shaykh Ibn al-ʿUthaymīn رحمه الله
                  recommande de choisir une date anniversaire annuelle et de
                  calculer l&apos;ensemble de l&apos;épargne accumulée à cette
                  date — sans démarrer un ḥawl distinct pour chaque versement
                  mensuel.{" "}
                  <span className="text-neutral-400">
                    (Ash-Sharḥ al-Mumtiʿ, vol. 6)
                  </span>
                </p>
                <div className="rounded-[10px] border border-neutral-200 bg-neutral-50 p-4 text-[13px] space-y-1.5">
                  <p className="font-semibold text-neutral-800">Exemple :</p>
                  <ul className="space-y-1">
                    <li>Date anniversaire choisie : 1er Muḥarram</li>
                    <li>Épargne accumulée au 1er Muḥarram : 18 000 €</li>
                    <li>Dettes exigibles : 2 000 €</li>
                    <li>Patrimoine net : 18 000 − 2 000 = <strong>16 000 €</strong></li>
                    <li className="text-brand-700 font-semibold pt-1">
                      → Si 16 000 € &gt; niṣāb → Zakāt due : 16 000 × 2,5 % = 400 €
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Commerçant */}
            <div className="rounded-[14px] border border-neutral-200 bg-white p-5 space-y-3">
              <h3 className="text-[16px] font-semibold text-neutral-900">
                Comment calculer la Zakāt sur un stock commercial ?
              </h3>
              <div className="space-y-3 text-[14px] text-neutral-700 leading-relaxed">
                <p>
                  Le stock de marchandises destinées à la revente (ʿurūḍ
                  at-tijārah) est zakātable à sa <strong>valeur marchande</strong>{" "}
                  au jour du calcul — c&apos;est-à-dire le prix auquel vous
                  pourriez le vendre, pas le prix d&apos;achat. On y ajoute la
                  trésorerie professionnelle disponible et les créances
                  commerciales récupérables.
                </p>
                <div className="rounded-[10px] bg-neutral-50 border border-neutral-200 px-4 py-3 text-[13px] text-neutral-700">
                  Le Prophète ﷺ a ordonné d&apos;évaluer les stocks commerciaux
                  au prix courant.{" "}
                  <span className="text-neutral-400">
                    (Abū Dāwūd n° 1562)
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* ── CTA Calculateur ─────────────────────────────────── */}
          <div className="rounded-[14px] border border-brand-200 bg-brand-50 p-6 text-center space-y-3">
            <p className="text-[16px] font-semibold text-neutral-900">
              Prêt à calculer votre Zakāt al-Māl ?
            </p>
            <p className="text-[14px] text-neutral-600 leading-relaxed">
              Notre calculateur gratuit et confidentiel vous guide étape par
              étape : inventaire des actifs, déduction des dettes, vérification
              du niṣāb et calcul du montant exact.
            </p>
            <Button asChild>
              <Link href="/calculateur">Commencer le calcul</Link>
            </Button>
          </div>

          {/* ── FAQ ─────────────────────────────────────────────── */}
          <section className="space-y-5">
            <h2 className="text-[22px] font-semibold text-neutral-900">
              Questions fréquentes sur le calcul de la Zakāt
            </h2>
            <dl className="space-y-3">
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
          </section>

          {/* ── Bénéficiaires (lien contextuel) ─────────────────── */}
          <div className="rounded-[14px] border border-neutral-200 bg-white p-5 space-y-2">
            <p className="text-[15px] font-semibold text-neutral-900">
              Une fois le montant calculé, à qui verser sa Zakāt ?
            </p>
            <p className="text-[14px] text-neutral-600 leading-relaxed">
              Les bénéficiaires légitimes de la Zakāt al-Māl sont définis par
              le Coran (At-Tawbah : 60) en huit catégories précises. Famille,
              mosquée, association, converti, endetté — les règles sont souvent
              méconnues.
            </p>
            <Link
              href="/beneficiaires-zakat"
              className="inline-block text-[14px] font-medium text-brand-600 underline"
            >
              À qui donner sa Zakāt ? Les 8 bénéficiaires selon le Coran →
            </Link>
          </div>

          {/* ── Sources ──────────────────────────────────────────── */}
          <section className="space-y-4">
            <h2 className="text-[22px] font-semibold text-neutral-900">
              Sources et savants de référence
            </h2>
            <div className="rounded-[14px] border border-neutral-200 bg-white p-5 space-y-4">
              <div className="space-y-2">
                <p className="text-[12px] font-semibold uppercase tracking-widest text-neutral-400">
                  Textes coraniques et prophétiques
                </p>
                <ul className="space-y-1.5">
                  {[
                    "Ḥadīth sur le niṣāb et le taux — Al-Bukhārī n° 1405 ; Muslim n° 979",
                    "Ḥadīth sur le ḥawl — Abū Dāwūd n° 1573",
                    "Ḥadīth sur les stocks commerciaux — Abū Dāwūd n° 1562",
                    "Coran, Sourate At-Tawbah (9), verset 60 — catégories de bénéficiaires",
                  ].map((r) => (
                    <li key={r} className="flex gap-2 text-[13px] text-neutral-700">
                      <span className="text-brand-600 font-bold shrink-0">·</span>
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-2">
                <p className="text-[12px] font-semibold uppercase tracking-widest text-neutral-400">
                  Ouvrages et fatwas
                </p>
                <ul className="space-y-1.5">
                  {[
                    "Shaykh Ibn al-ʿUthaymīn رحمه الله — Ash-Sharḥ al-Mumtiʿ, vol. 6 (Kitāb az-Zakāt)",
                    "Majmūʿ Fatāwā Shaykh Ibn Bāz رحمه الله — vol. 14 (taux, niṣāb, bijoux)",
                    "Fatāwā al-Lajnah ad-Dāʾimah — vol. 9 (calcul et assiette de la Zakāt)",
                  ].map((r) => (
                    <li key={r} className="flex gap-2 text-[13px] text-neutral-700">
                      <span className="text-brand-600 font-bold shrink-0">·</span>
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <p className="text-[13px] text-neutral-500">
                Pour la méthodologie complète et les savants cités sur ce site :{" "}
                <Link href="/sources" className="text-brand-600 underline">
                  voir notre page Sources
                </Link>
                .
              </p>
            </div>
          </section>

          {/* ── Maillage interne ─────────────────────────────────── */}
          <section className="space-y-4">
            <h2 className="text-[22px] font-semibold text-neutral-900">
              Pour aller plus loin
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  href: "/calculateur",
                  title: "Calculateur de Zakāt",
                  desc: "Calculez le montant exact de votre Zakāt al-Māl étape par étape avec notre outil gratuit.",
                },
                {
                  href: "/nisab",
                  title: "Le Niṣāb",
                  desc: "Vérifiez le seuil d'assujettissement — valeur en or (85 g) et en argent (595 g) aujourd'hui.",
                },
                {
                  href: "/beneficiaires-zakat",
                  title: "À qui donner sa Zakāt ?",
                  desc: "Les 8 catégories de bénéficiaires définies par le Coran (At-Tawbah : 60).",
                },
                {
                  href: "/qui-doit-payer-la-zakat",
                  title: "Qui doit payer la Zakāt ?",
                  desc: "Les 5 conditions de l'obligation : Islam, niṣāb, ḥawl, pleine propriété, et les cas pratiques.",
                },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-[14px] border border-neutral-200 bg-white p-5 space-y-1.5 hover:border-brand-300 hover:bg-brand-50 transition-colors block"
                >
                  <p className="text-[15px] font-semibold text-brand-600">
                    {link.title}
                  </p>
                  <p className="text-[13px] text-neutral-600 leading-relaxed">
                    {link.desc}
                  </p>
                </Link>
              ))}
            </div>
          </section>

          {/* ── Avertissement ────────────────────────────────────── */}
          <div className="rounded-[14px] border border-neutral-200 bg-neutral-50 p-5 space-y-1.5">
            <p className="text-[14px] font-semibold text-neutral-900">
              Avertissement
            </p>
            <p className="text-[13px] text-neutral-600 leading-relaxed">
              Cette page est un document informatif fondé sur les avis des
              savants de Ahl as-Sunnah wa-l-Jamāʿah. Elle ne constitue pas une
              fatwa et ne se substitue pas à l&apos;avis d&apos;un érudit
              qualifié. Les divergences réelles entre savants sont signalées
              explicitement — cette page ne prétend pas les trancher. Pour les
              situations patrimoniales complexes, consultez un imam ou un
              spécialiste en jurisprudence islamique (fiqh).
            </p>
          </div>
        </article>
      </PageWrapper>

      <SiteFooter />
    </>
  );
}
