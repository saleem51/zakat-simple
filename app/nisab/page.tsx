import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { getMetalPrices, getNisabValue, getPriceLabel } from "@/engine/prices";
import { formatCurrency } from "@/lib/formatCurrency";
import { GOLD_NISAB_GRAMS, SILVER_NISAB_GRAMS } from "@/engine/constants";

export const metadata: Metadata = {
  title:
    "Niṣāb : définition, montant actuel (or et argent) et calcul de la Zakāt",
  description:
    "Tout savoir sur le niṣāb : définition islamique, montant en or (85 g) et en argent (595 g), valeur aujourd'hui, divergences entre savants et calcul pour la Zakāt al-Māl.",
  alternates: {
    canonical: "/nisab",
  },
  openGraph: {
    title: "Niṣāb : définition, montant actuel et calcul de la Zakāt",
    description:
      "Définition, niṣāb en or, niṣāb en argent, valeurs actuelles, divergences entre écoles — la référence francophone sur le niṣāb de la Zakāt.",
    type: "article",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Calculateur de Zakāt al-Māl — www.zakatfacile.fr" }],
  },
};

const FAQ_NISAB = [
  {
    q: "Qu'est-ce que le niṣāb en islam ?",
    a: "Le niṣāb est le seuil minimal de patrimoine zakatable au-delà duquel la Zakāt al-Māl devient obligatoire. Il a été fixé par le Prophète ﷺ à 20 dīnārs d'or (85 g) ou à 200 dirhams d'argent (595 g). En dessous de ce seuil, aucune Zakāt n'est due.",
  },
  {
    q: "Quel est le montant du niṣāb aujourd'hui ?",
    a: "Le montant du niṣāb varie selon le cours des métaux précieux. Il est calculé en temps réel sur cette page à partir du cours de l'or (niṣāb = 85 g × prix du gramme d'or) et du cours de l'argent (niṣāb = 595 g × prix du gramme d'argent). Consultez le widget en haut de page pour la valeur du jour.",
  },
  {
    q: "Faut-il utiliser le niṣāb en or ou en argent ?",
    a: "La majorité des savants contemporains de Ahl as-Sunnah, dont Shaykh Ibn al-ʿUthaymīn رحمه الله et la Lajnah ad-Dāʾimah, recommandent le niṣāb en or (85 g). L'école hanafite se réfère au niṣāb en argent (595 g). Certains savants préconisent l'argent par précaution (iḥtiyāṭ), car il est plus bas et bénéficie à davantage de bénéficiaires.",
  },
  {
    q: "Le niṣāb doit-il être maintenu toute l'année ?",
    a: "Oui. Pour que la Zakāt soit due, le patrimoine zakatable net doit non seulement dépasser le niṣāb au moment du calcul, mais aussi avoir été maintenu au-dessus de ce seuil pendant une année lunaire complète (ḥawl, environ 354 jours). Si le patrimoine passe sous le niṣāb en cours d'année, le ḥawl recommence.",
  },
  {
    q: "Le niṣāb s'applique-t-il à chaque type d'actif séparément ?",
    a: "Non. On additionne l'ensemble du patrimoine zakatable net (liquidités, or, argent, placements, stocks…) pour vérifier si le total dépasse le niṣāb. Ce n'est pas actif par actif : c'est la valeur globale de votre patrimoine zakatable qui est comparée au seuil.",
  },
  {
    q: "Peut-on combiner or et argent pour atteindre le niṣāb ?",
    a: "Oui, selon l'avis de la majorité des savants. Si vous possédez de l'or et de l'argent dont la valeur combinée dépasse le niṣāb, la Zakāt est due. La valeur des deux métaux est additionnée et comparée au niṣāb de référence (or ou argent selon votre école).",
  },
  {
    q: "Mes bijoux en or entrent-ils dans le calcul du niṣāb ?",
    a: "La question de l'inclusion des bijoux dans l'assiette zakatable est distincte du niṣāb lui-même. L'école hanafite inclut les bijoux portés dans l'assiette ; les trois autres grandes écoles les exemptent généralement. Si vous les incluez, leur valeur s'ajoute au reste du patrimoine pour déterminer si le niṣāb est atteint.",
  },
  {
    q: "Quelle est la différence entre niṣāb et ḥawl ?",
    a: "Le niṣāb est le seuil de richesse minimal (85 g d'or ou 595 g d'argent en valeur). Le ḥawl est la durée minimale pendant laquelle ce seuil doit être maintenu (une année lunaire, environ 354 jours). Les deux conditions doivent être réunies simultanément pour que la Zakāt soit due.",
  },
];

export default function NisabPage() {
  const prices = getMetalPrices();
  const goldNisab = getNisabValue("gold", prices);
  const silverNisab = getNisabValue("silver", prices);
  const priceLabel = getPriceLabel(prices);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline:
          "Niṣāb : définition, montant actuel (or et argent) et calcul de la Zakāt",
        description:
          "Tout savoir sur le niṣāb : définition islamique, montant en or (85 g) et en argent (595 g), valeur du jour, divergences entre savants.",
        url: "https://www.zakatfacile.fr/nisab",
        inLanguage: "fr-FR",
        author: {
          "@type": "Organization",
          name: "Calculateur de Zakāt al-Māl",
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: FAQ_NISAB.map((item) => ({
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
              Comprendre la Zakāt
            </p>
            <h1 className="text-[32px] font-bold text-neutral-900 leading-tight">
              Le Niṣāb — Définition, montant actuel et calcul de la Zakāt
            </h1>
            <p className="text-[16px] text-neutral-600 leading-relaxed">
              Le niṣāb est le seuil minimal de richesse à partir duquel la
              Zakāt al-Māl devient obligatoire. Fixé par le Prophète&nbsp;ﷺ en
              termes de poids d&apos;or et d&apos;argent, il détermine pour
              chaque musulman si sa Zakāt annuelle est due. Cette page fait le
              point sur sa définition, son origine, ses deux références (or et
              argent), les divergences entre savants et son montant actuel.
            </p>
          </header>

          {/* ── Valeurs actuelles (widget dynamique) ────────────── */}
          <div className="rounded-[14px] border border-neutral-200 bg-neutral-50 p-6 space-y-4">
            <p className="text-[13px] font-medium text-neutral-500 uppercase tracking-wide">
              Quel est le niṣāb aujourd&apos;hui ? — {priceLabel}
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[10px] bg-white border border-neutral-200 p-4 space-y-1">
                <p className="text-[13px] text-neutral-500">
                  Niṣāb en or — avis majoritaire
                </p>
                <p className="text-[28px] font-bold tabular-nums text-neutral-900">
                  {formatCurrency(goldNisab)}
                </p>
                <p className="text-[12px] text-neutral-400">
                  {GOLD_NISAB_GRAMS}&nbsp;g × {prices.goldPricePerGram}&nbsp;€/g
                </p>
              </div>
              <div className="rounded-[10px] bg-white border border-neutral-200 p-4 space-y-1">
                <p className="text-[13px] text-neutral-500">
                  Niṣāb en argent — école hanafite
                </p>
                <p className="text-[28px] font-bold tabular-nums text-neutral-900">
                  {formatCurrency(silverNisab)}
                </p>
                <p className="text-[12px] text-neutral-400">
                  {SILVER_NISAB_GRAMS}&nbsp;g × {prices.silverPricePerGram}&nbsp;€/g
                </p>
              </div>
            </div>
            <p className="text-[13px] text-neutral-500 leading-relaxed">
              Ces valeurs sont indicatives. Le montant exact dépend du cours
              des métaux au jour de votre calcul.{" "}
              <Link href="/calculateur" className="text-brand-600 underline">
                Calculer ma Zakāt
              </Link>
            </p>
          </div>

          {/* ── Définition ─────────────────────────────────────── */}
          <section className="space-y-4">
            <h2 className="text-[22px] font-semibold text-neutral-900">
              Qu&apos;est-ce que le niṣāb ?
            </h2>
            <div className="space-y-3 text-[15px] text-neutral-700 leading-relaxed">
              <p>
                Le mot arabe <strong>niṣāb</strong> (نِصَاب) signifie
                littéralement « quota », « seuil » ou « capital minimal ». Dans
                la jurisprudence islamique (fiqh), il désigne le{" "}
                <strong>
                  seuil minimal de patrimoine zakatable net en dessous duquel
                  la Zakāt n&apos;est pas obligatoire
                </strong>
                . Quiconque ne possède pas ce minimum n&apos;est pas redevable
                de la Zakāt, quelle que soit sa situation.
              </p>
              <p>
                Le niṣāb ne s&apos;apprécie pas actif par actif : il
                s&apos;applique à l&apos;ensemble du patrimoine zakatable net,
                soit le total de vos richesses zakātables (liquidités, or,
                argent, placements financiers, cryptomonnaies, stocks de
                commerce…) <em>après déduction</em> des dettes exigibles à
                court terme. La résidence principale, les effets personnels et
                les outils de travail n&apos;entrent pas dans le calcul.
              </p>
              <p>
                Deux conditions sont nécessaires pour que la Zakāt soit due :{" "}
                <strong>atteindre le niṣāb</strong> et{" "}
                <strong>
                  maintenir ce niveau pendant une année lunaire complète
                </strong>{" "}
                — le <em>ḥawl</em> (environ 354 jours). Ces deux conditions
                sont indissociables.
              </p>
            </div>
          </section>

          {/* ── Origine et fondement ────────────────────────────── */}
          <section className="space-y-4">
            <h2 className="text-[22px] font-semibold text-neutral-900">
              Origine et fondement du niṣāb
            </h2>
            <div className="space-y-3 text-[15px] text-neutral-700 leading-relaxed">
              <p>
                Le niṣāb n&apos;est pas une invention des juristes postérieurs :
                il est directement fondé sur la <strong>Sunnah</strong> du
                Prophète&nbsp;ﷺ. Plusieurs hadiths authentiques en précisent
                les montants :
              </p>
              <div className="rounded-[10px] bg-neutral-50 border border-neutral-200 px-5 py-4 space-y-3">
                <p className="text-[14px] text-neutral-700 leading-relaxed">
                  <strong>Sur l&apos;or :</strong>{" "}
                  <em>
                    « Il n&apos;y a pas de Zakāt sur l&apos;or tant que tu
                    n&apos;en possèdes pas vingt dīnārs. »
                  </em>
                  <br />
                  <span className="text-[13px] text-neutral-500">
                    Rapporté par Abū Dāwūd (n° 1573), considéré sahīh.
                  </span>
                </p>
                <p className="text-[14px] text-neutral-700 leading-relaxed">
                  <strong>Sur l&apos;argent :</strong>{" "}
                  <em>
                    « Il n&apos;y a pas de Zakāt sur l&apos;argent tant que tu
                    n&apos;en atteins pas deux cents dirhams. »
                  </em>
                  <br />
                  <span className="text-[13px] text-neutral-500">
                    Rapporté par Abū Dāwūd et at-Tirmidhī, sahīh.
                  </span>
                </p>
              </div>
              <p>
                Ces deux montants — 20 dīnārs d&apos;or et 200 dirhams
                d&apos;argent — constituent la base textuelle de toute la
                jurisprudence sur le niṣāb. Le fait que le Prophète&nbsp;ﷺ ait
                mentionné les deux métaux a conduit à un débat millénaire sur
                la référence à privilégier aujourd&apos;hui, en particulier
                depuis que le rapport de valeur entre l&apos;or et
                l&apos;argent a radicalement changé.
              </p>
            </div>
          </section>

          {/* ── Niṣāb de l'or ──────────────────────────────────── */}
          <section className="space-y-4">
            <h2 className="text-[22px] font-semibold text-neutral-900">
              Le niṣāb de l&apos;or : {GOLD_NISAB_GRAMS} grammes
            </h2>
            <div className="space-y-3 text-[15px] text-neutral-700 leading-relaxed">
              <p>
                Le niṣāb de l&apos;or correspond à{" "}
                <strong>20 dīnārs</strong>, soit{" "}
                <strong>
                  {GOLD_NISAB_GRAMS} grammes d&apos;or pur (24 carats)
                </strong>{" "}
                selon la conversion la plus répandue. Ce calcul repose sur
                l&apos;équivalence classique : 1 dīnār = 1 mithqāl ≈ 4,25 g,
                donc 20 × 4,25 = 85 g.
              </p>
              <h3 className="text-[17px] font-semibold text-neutral-900">
                85 g ou 92 g ?
              </h3>
              <p>
                Shaykh Ibn Bāz رحمه الله évoquait parfois une estimation autour
                de <strong>92 g</strong> d&apos;or, issue d&apos;une autre
                méthode de conversion du mithqāl. La{" "}
                <strong>Lajnah ad-Dāʾimah</strong> et la grande majorité des
                savants contemporains — dont Shaykh Ibn al-ʿUthaymīn رحمه الله
                — retiennent{" "}
                <strong>{GOLD_NISAB_GRAMS} g</strong>. C&apos;est cette valeur
                que ce calculateur utilise par défaut. Voir{" "}
                <Link href="/sources" className="text-brand-600 underline">
                  la page Sources
                </Link>{" "}
                pour les détails.
              </p>
              <p>
                Le niṣāb en or est <strong>l&apos;avis dominant</strong> parmi
                les savants de Ahl as-Sunnah contemporains. Il présente
                l&apos;avantage d&apos;une relative stabilité dans le temps :
                le cours de l&apos;or fluctue moins fortement que celui de
                l&apos;argent sur le long terme, ce qui stabilise le seuil
                d&apos;assujettissement.
              </p>
              <div className="rounded-[10px] bg-brand-50 border border-brand-100 px-4 py-3 text-[14px] text-brand-900">
                Au cours actuel, les {GOLD_NISAB_GRAMS}&nbsp;g d&apos;or
                correspondent à{" "}
                <strong>{formatCurrency(goldNisab)}</strong>.
              </div>
            </div>
          </section>

          {/* ── Niṣāb de l'argent ──────────────────────────────── */}
          <section className="space-y-4">
            <h2 className="text-[22px] font-semibold text-neutral-900">
              Le niṣāb de l&apos;argent : {SILVER_NISAB_GRAMS} grammes
            </h2>
            <div className="space-y-3 text-[15px] text-neutral-700 leading-relaxed">
              <p>
                Le niṣāb de l&apos;argent correspond à{" "}
                <strong>200 dirhams</strong>, soit environ{" "}
                <strong>
                  {SILVER_NISAB_GRAMS} grammes d&apos;argent pur
                </strong>
                . Cette conversion repose sur l&apos;équivalence : 1 dirham
                islamique ≈ 2,975 g d&apos;argent, donc 200 × 2,975 ≈
                595 g. Certains savants citent 612 g selon d&apos;autres mesures
                historiques ; 595 g est la valeur la plus répandue dans les
                références contemporaines.
              </p>
              <p>
                Ce niṣāb est la{" "}
                <strong>référence traditionnelle de l&apos;école hanafite</strong>
                , qui compte parmi les quatre grandes écoles juridiques
                sunnites. L&apos;imam Abū Ḥanīfa et ses élèves ont fondé leurs
                fatwas sur cette valeur, qui reste la norme pour la majorité des
                musulmans d&apos;Asie du Sud et d&apos;une large partie du
                monde turcophone.
              </p>
              <p>
                Avec les cours actuels des métaux précieux, le niṣāb en argent
                représente une valeur monétaire <strong>nettement plus basse</strong>{" "}
                que celui en or. Cela signifie qu&apos;un plus grand nombre de
                personnes atteint ce seuil et devient potentiellement
                redevable de la Zakāt — argument avancé par ceux qui
                privilégient cette référence par souci des bénéficiaires.
              </p>
              <div className="rounded-[10px] bg-brand-50 border border-brand-100 px-4 py-3 text-[14px] text-brand-900">
                Au cours actuel, les {SILVER_NISAB_GRAMS}&nbsp;g d&apos;argent
                correspondent à{" "}
                <strong>{formatCurrency(silverNisab)}</strong>.
              </div>
            </div>
          </section>

          {/* ── Tableau récapitulatif ───────────────────────────── */}
          <section className="space-y-4">
            <h2 className="text-[22px] font-semibold text-neutral-900">
              Tableau récapitulatif : niṣāb or et argent
            </h2>
            <div className="overflow-x-auto rounded-[14px] border border-neutral-200">
              <table className="w-full text-[14px]">
                <thead>
                  <tr className="bg-neutral-50 border-b border-neutral-200">
                    <th className="text-left px-4 py-3 font-semibold text-neutral-700">
                      Référence
                    </th>
                    <th className="text-left px-4 py-3 font-semibold text-neutral-700">
                      Poids
                    </th>
                    <th className="text-left px-4 py-3 font-semibold text-neutral-700">
                      École(s) / avis
                    </th>
                    <th className="text-right px-4 py-3 font-semibold text-neutral-700">
                      Valeur actuelle
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-100">
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-medium text-neutral-900">
                      Or
                    </td>
                    <td className="px-4 py-3 text-neutral-600">
                      {GOLD_NISAB_GRAMS}&nbsp;g (24 carats)
                    </td>
                    <td className="px-4 py-3 text-neutral-600">
                      Malikite, shaféite, hanbalite — avis dominant contemporain
                    </td>
                    <td className="px-4 py-3 tabular-nums font-semibold text-neutral-900 text-right">
                      {formatCurrency(goldNisab)}
                    </td>
                  </tr>
                  <tr className="bg-neutral-50">
                    <td className="px-4 py-3 font-medium text-neutral-900">
                      Argent
                    </td>
                    <td className="px-4 py-3 text-neutral-600">
                      {SILVER_NISAB_GRAMS}&nbsp;g (pur)
                    </td>
                    <td className="px-4 py-3 text-neutral-600">
                      Hanafite — avis de précaution pour certains
                    </td>
                    <td className="px-4 py-3 tabular-nums font-semibold text-neutral-900 text-right">
                      {formatCurrency(silverNisab)}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-[13px] text-neutral-500">
              Valeurs calculées sur la base des cours du {priceLabel.toLowerCase()}.
            </p>
          </section>

          {/* ── Pourquoi deux références ────────────────────────── */}
          <section className="space-y-4">
            <h2 className="text-[22px] font-semibold text-neutral-900">
              Pourquoi certains utilisent l&apos;or et d&apos;autres
              l&apos;argent ?
            </h2>
            <div className="space-y-3 text-[15px] text-neutral-700 leading-relaxed">
              <p>
                À l&apos;époque du Prophète ﷺ, le rapport de valeur entre
                l&apos;or et l&apos;argent était relativement stable : une
                partie d&apos;or valait environ 10 à 14 parties d&apos;argent.
                Ce rapport signifiait que 85 g d&apos;or et 595 g d&apos;argent
                représentaient une valeur marchande comparable — les deux
                niṣābs étaient donc équivalents en termes de pouvoir d&apos;achat.
              </p>
              <p>
                Aujourd&apos;hui, ce rapport s&apos;est profondément modifié.
                Un gramme d&apos;or vaut désormais{" "}
                <strong>entre 70 et 90 fois plus</strong> qu&apos;un gramme
                d&apos;argent. Résultat : le niṣāb en argent ne représente
                plus qu&apos;une fraction du niṣāb en or en valeur monétaire.
                C&apos;est cette divergence qui alimente le débat contemporain.
              </p>
              <div className="space-y-2">
                <h3 className="text-[17px] font-semibold text-neutral-900">
                  Arguments en faveur du niṣāb en or
                </h3>
                <ul className="space-y-2 text-[14px] text-neutral-600 leading-relaxed">
                  {[
                    "Le niṣāb en or préserve l'esprit originel du seuil : il représente un patrimoine réellement substantiel.",
                    "L'or est historiquement plus stable que l'argent comme réserve de valeur.",
                    "C'est l'avis de la majorité des savants contemporains de Ahl as-Sunnah.",
                  ].map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-brand-600 font-bold shrink-0 mt-0.5">
                        ✓
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="text-[17px] font-semibold text-neutral-900">
                  Arguments en faveur du niṣāb en argent
                </h3>
                <ul className="space-y-2 text-[14px] text-neutral-600 leading-relaxed">
                  {[
                    "Fidélité au texte du hadith qui mentionne les deux références de façon indépendante.",
                    "Conformité à une tradition jurisprudentielle hanafite ininterrompue depuis quatorze siècles.",
                    "Seuil plus bas = davantage de redevables = plus de bénéficiaires (argument de précaution).",
                  ].map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-brand-600 font-bold shrink-0 mt-0.5">
                        ✓
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* ── Divergences connues ─────────────────────────────── */}
          <section className="space-y-4">
            <h2 className="text-[22px] font-semibold text-neutral-900">
              Divergences entre savants et écoles juridiques
            </h2>
            <div className="space-y-4 text-[15px] text-neutral-700 leading-relaxed">
              <p>
                Les divergences sur le niṣāb portent sur quatre points distincts :
              </p>
              <div className="space-y-3">
                {[
                  {
                    title: "1. Or ou argent — la divergence principale",
                    body: "L'école hanafite se réfère au niṣāb en argent (200 dirhams / 595 g). Les écoles malikite, shaféite et hanbalite, ainsi que la majorité des savants contemporains, retiennent le niṣāb en or (20 dīnārs / 85 g). La Lajnah ad-Dāʾimah et Shaykh Ibn al-ʿUthaymīn رحمه الله confirment 85 g d'or.",
                  },
                  {
                    title: "2. 85 g ou 92 g d'or ?",
                    body: "Shaykh Ibn Bāz رحمه الله évoquait parfois 92 g selon une conversion différente du mithqāl. L'avis dominant contemporain retient 85 g. Les deux positions sont défendues par des savants reconnus.",
                  },
                  {
                    title: "3. Or 21 carats ou 24 carats ?",
                    body: "Certains savants calculent le niṣāb sur la base de l'or 21 carats (pureté approximative des dīnārs historiques frappés). L'avis le plus répandu utilise l'or 24 carats (or pur) à 85 g, ce que ce calculateur applique.",
                  },
                  {
                    title: "4. Les bijoux en or entrent-ils dans le niṣāb ?",
                    body: "C'est une divergence sur l'assiette, non sur le seuil lui-même. L'école hanafite inclut les bijoux portés dans les actifs zakātables ; les trois autres grandes écoles les exemptent généralement. Par précaution, de nombreux savants contemporains recommandent de les inclure.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-[14px] border border-neutral-200 bg-white p-5 space-y-1.5"
                  >
                    <p className="text-[15px] font-semibold text-neutral-900">
                      {item.title}
                    </p>
                    <p className="text-[14px] text-neutral-600 leading-relaxed">
                      {item.body}
                    </p>
                  </div>
                ))}
              </div>
              <div className="rounded-[10px] bg-warning-50 border-l-[3px] border-warning-400 px-4 py-3 text-[14px]">
                <strong className="text-warning-700">Note éditoriale :</strong>{" "}
                Ce calculateur retient par défaut{" "}
                {GOLD_NISAB_GRAMS}&nbsp;g d&apos;or et{" "}
                {SILVER_NISAB_GRAMS}&nbsp;g d&apos;argent, conformément à
                l&apos;avis dominant des savants de Ahl as-Sunnah. Ces valeurs
                ne sont pas universellement définitives — consultez un érudit
                qualifié pour les cas complexes.
              </div>
            </div>
          </section>

          {/* ── Le ḥawl ─────────────────────────────────────────── */}
          <section className="space-y-4">
            <h2 className="text-[22px] font-semibold text-neutral-900">
              Le ḥawl : condition complémentaire au niṣāb
            </h2>
            <div className="space-y-3 text-[15px] text-neutral-700 leading-relaxed">
              <p>
                Atteindre le niṣāb est nécessaire, mais pas suffisant. La
                Zakāt n&apos;est due que si ce seuil a été maintenu pendant une{" "}
                <strong>année lunaire complète</strong>, appelée{" "}
                <em>ḥawl</em> (environ 354 jours). Cette condition vise à
                exclure les richesses purement temporaires.
              </p>
              <p>
                Si votre patrimoine zakatable net passe <em>sous</em> le niṣāb
                en cours d&apos;année, le ḥawl est interrompu et recommence à
                zéro dès que le seuil est à nouveau dépassé. En cas
                d&apos;incertitude — fluctuations importantes en cours
                d&apos;année — l&apos;avis prudent est de recalculer à la fin
                de l&apos;année lunaire.
              </p>
            </div>
          </section>

          {/* ── Comment vérifier le niṣāb ──────────────────────── */}
          <section className="space-y-4">
            <h2 className="text-[22px] font-semibold text-neutral-900">
              Comment vérifier si vous avez atteint le niṣāb ?
            </h2>
            <div className="space-y-3 text-[15px] text-neutral-700 leading-relaxed">
              <p>
                La vérification se fait en trois étapes :
              </p>
              <ol className="space-y-3">
                {[
                  {
                    n: "1",
                    text: "Additionnez l'ensemble de vos richesses zakātables (liquidités, or, argent, placements, cryptomonnaies, stocks de commerce, créances récupérables).",
                  },
                  {
                    n: "2",
                    text: "Déduisez les dettes exigibles à court terme (remboursements prévus dans les 12 prochains mois).",
                  },
                  {
                    n: "3",
                    text: "Comparez ce patrimoine net au niṣāb de votre référence. Si le total dépasse le seuil et qu'il est maintenu depuis une année lunaire, la Zakāt est due au taux de 2,5 %.",
                  },
                ].map((step) => (
                  <li
                    key={step.n}
                    className="flex gap-3 rounded-[14px] border border-neutral-200 bg-white p-4"
                  >
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-brand-600 text-white text-[13px] font-bold flex items-center justify-center">
                      {step.n}
                    </span>
                    <p className="text-[14px] text-neutral-600 leading-relaxed">
                      {step.text}
                    </p>
                  </li>
                ))}
              </ol>
              <div className="pt-2">
                <Link
                  href="/calculateur"
                  className="inline-flex items-center gap-2 rounded-[10px] bg-brand-600 text-white text-[14px] font-medium px-5 py-2.5 hover:bg-brand-700 transition-colors"
                >
                  Calculer ma Zakāt maintenant
                </Link>
              </div>
            </div>
          </section>

          {/* ── FAQ niṣāb ───────────────────────────────────────── */}
          <section className="space-y-5">
            <h2 className="text-[22px] font-semibold text-neutral-900">
              Questions fréquentes sur le niṣāb
            </h2>
            <dl className="space-y-3">
              {FAQ_NISAB.map((item) => (
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

          {/* ── Liens complémentaires ───────────────────────────── */}
          <section className="space-y-4">
            <h2 className="text-[22px] font-semibold text-neutral-900">
              Pour aller plus loin
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  href: "/calculateur",
                  title: "Calculateur de Zakāt",
                  desc: "Vérifiez votre niṣāb, listez vos actifs zakātables et obtenez le montant de votre Zakāt en quelques minutes.",
                },
                {
                  href: "/beneficiaires-zakat",
                  title: "Bénéficiaires de la Zakāt",
                  desc: "À qui donner sa Zakāt ? Les 8 catégories du Coran, les cas de la famille, des associations et des mosquées.",
                },
                {
                  href: "/qui-doit-payer-la-zakat",
                  title: "Qui doit payer la Zakāt ?",
                  desc: "Les 5 conditions de l'obligation selon Ahl as-Sunnah : Islam, niṣāb, ḥawl, pleine propriété, et les cas pratiques.",
                },
                {
                  href: "/sources",
                  title: "Sources et méthodologie",
                  desc: "Références utilisées : Coran, hadiths authentiques, avis de Ibn Bāz, Ibn al-ʿUthaymīn et de la Lajnah ad-Dāʾimah.",
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

          {/* ── Avertissement final ─────────────────────────────── */}
          <div className="rounded-[14px] border border-neutral-200 bg-neutral-50 p-5 space-y-1.5">
            <p className="text-[14px] font-semibold text-neutral-900">
              Avertissement
            </p>
            <p className="text-[13px] text-neutral-600 leading-relaxed">
              Cette page est un document informatif fondé sur les avis reconnus
              des savants de Ahl as-Sunnah wa-l-Jamāʿah. Elle ne constitue pas
              une fatwa et ne se substitue pas à l&apos;avis d&apos;un érudit
              qualifié. Pour les situations patrimoniales complexes, consultez
              un imam ou un spécialiste en jurisprudence islamique.
            </p>
          </div>
        </article>
      </PageWrapper>

      <SiteFooter />
    </>
  );
}
