import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { PageWrapper } from "@/components/layout/PageWrapper";

export const metadata: Metadata = {
  title: "Bénéficiaires de la Zakāt al-Māl : les 8 catégories selon le Coran",
  description:
    "À qui donner sa Zakāt al-Māl ? Les 8 catégories définies par le Coran (At-Tawbah : 60), les avis des savants de Ahl as-Sunnah wa-l-Jamāʿah et les réponses aux cas pratiques : famille, mosquée, converti, endetté.",
  alternates: {
    canonical: "/beneficiaires-zakat",
  },
  openGraph: {
    title: "Bénéficiaires de la Zakāt al-Māl : les 8 catégories selon le Coran",
    description:
      "Les 8 bénéficiaires de la Zakāt selon le Coran, les avis des savants de Ahl as-Sunnah et les cas pratiques : famille, mosquée, convertis, endettés.",
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
    q: "Les 8 catégories sont-elles encore valides aujourd'hui ?",
    a: "Oui. Ces catégories sont définies par le Coran (9:60) et constituent une liste immuable que ni l'ijmāʿ ni l'ijtihād ne peuvent modifier. Ce qui évolue selon le contexte, c'est l'application concrète de certaines catégories : la catégorie des muʾallafatu qulūbuhum reste valide de nos jours selon les savants de référence ; celle des fī r-riqāb (esclaves) est quasi-inapplicable en Europe contemporaine.",
  },
  {
    q: "Peut-on donner sa Zakāt à plusieurs personnes ?",
    a: "Oui. Aucun texte n'oblige à concentrer toute la Zakāt sur une seule personne ou une seule catégorie. Elle peut être répartie librement entre plusieurs bénéficiaires éligibles et plusieurs catégories. Certains savants recommandent de ne pas dépasser le besoin réel de chaque bénéficiaire, afin que la Zakāt bénéficie au plus grand nombre.",
  },
  {
    q: "Peut-on donner sa Zakāt en nature (nourriture, vêtements) ?",
    a: "La majorité des savants préfèrent le versement en numéraire (argent), qui laisse au bénéficiaire la liberté de couvrir ses besoins prioritaires. Certains savants de l'école hanafite permettent le versement en nature. L'avis de Shaykh Ibn al-ʿUthaymīn رحمه الله — parmi les plus cités sur ce point — recommande le versement en argent sauf si le bénéficiaire exprime un besoin immédiat en nature. (Ash-Sharḥ al-Mumtiʿ, vol. 6)",
  },
  {
    q: "Faut-il dire au bénéficiaire qu'on lui verse la Zakāt ?",
    a: "Ce n'est pas une condition de validité. La Zakāt est valide même si le bénéficiaire ne sait pas qu'il reçoit de la Zakāt farḍ plutôt qu'une ṣadaqah volontaire. Certains savants recommandent de le préciser pour que le bénéficiaire comprenne qu'il s'agit d'un droit et non d'une faveur ; d'autres au contraire estiment qu'il vaut mieux préserver sa dignité. Les deux pratiques sont permises.",
  },
  {
    q: "Un non-musulman peut-il recevoir la Zakāt ?",
    a: "Non selon la majorité des savants des quatre grandes écoles. La Zakāt obligatoire (farḍ) est réservée aux musulmans éligibles parmi les 8 catégories. Exception : certains savants permettent de donner aux non-musulmans pauvres au titre de la catégorie muʾallafatu qulūbuhum si leur rapprochement de l'Islam est visé. La ṣadaqah volontaire (taṭawwuʿ), elle, peut aller à des non-musulmans dans le besoin sans restriction.",
  },
  {
    q: "Peut-on donner la Zakāt à une personne endettée à cause d'un crédit immobilier ?",
    a: "C'est une question sur laquelle les savants contemporains restent très prudents. La catégorie des al-ghārimīn couvre ceux qui ont des dettes légitimes qu'ils sont incapables de rembourser. Dans le cas d'un crédit immobilier, la difficulté est double : la dette est adossée à un bien que le débiteur possède (le logement) ; et la licéité du crédit à intérêt est elle-même une question distincte sur laquelle les savants divergent. Si la personne se trouve en situation de détresse financière réelle — incapable de rembourser ses mensualités et sans autre actif — certains savants estiment qu'elle peut relever des ghārimīn. Mais cela n'est pas automatique et dépend de la situation précise. Ce cas spécifique justifie la consultation d'un érudit qualifié avant tout versement.",
  },
  {
    q: "La Zakāt peut-elle couvrir des frais médicaux urgents ?",
    a: "Si la personne est pauvre (faqīr ou miskīn) et que ses frais médicaux dépassent ses moyens, elle peut recevoir la Zakāt pour couvrir ces besoins essentiels. Les besoins vitaux — nourriture, logement, soins de santé — entrent dans la définition de ce qui doit être couvert pour les fuqarā' et masākīn. La condition reste que l'on n'ait pas d'obligation légale de nafaqah envers cette personne.",
  },
  {
    q: "Comment vérifier qu'un bénéficiaire est réellement éligible ?",
    a: "Pour les catégories de pauvreté (fuqarā'/masākīn), une connaissance raisonnable de la situation du bénéficiaire suffit. Il n'est pas nécessaire de mener une enquête formelle. Shaykh Ibn al-ʿUthaymīn رحمه الله précise que si le donateur a une raison sérieuse de croire à l'éligibilité, sa Zakāt est valide — même si une erreur est constatée après coup. Pour les cas plus complexes (endettement, associations), une vérification plus précise est recommandée.",
  },
  {
    q: "Peut-on envoyer sa Zakāt à l'étranger (famille au pays d'origine) ?",
    a: "L'envoi à l'étranger est permis selon la majorité des savants. Shaykh Ibn Bāz رحمه الله recommandait cependant de privilégier les musulmans pauvres de sa propre région, sauf si les besoins sont plus importants ailleurs ou si les bénéficiaires à l'étranger sont des proches dans l'extrême nécessité. La priorité locale n'est pas une obligation absolue — c'est une recommandation à peser selon les situations.",
  },
];

export default function BeneficiairesZakatPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline:
          "Bénéficiaires de la Zakāt al-Māl : les 8 catégories selon le Coran",
        description:
          "À qui donner sa Zakāt al-Māl ? Les 8 catégories définies par le Coran (At-Tawbah : 60), les avis des savants de Ahl as-Sunnah wa-l-Jamāʿah et les réponses aux cas pratiques.",
        url: "https://www.zakatfacile.fr/beneficiaires-zakat",
        inLanguage: "fr-FR",
        author: {
          "@type": "Organization",
          name: "Calculateur de Zakāt al-Māl",
        },
        datePublished: "2026-06-15",
        dateModified: "2026-06-15",
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
              Comprendre la Zakāt
            </p>
            <h1 className="text-[32px] font-bold text-neutral-900 leading-tight">
              À qui donner sa Zakāt al-Māl ?
              <br />
              Les 8 bénéficiaires selon le Coran
            </h1>
            <p className="text-[16px] text-neutral-600 leading-relaxed">
              Les bénéficiaires légitimes de la Zakāt al-Māl sont définis par le
              Coran lui-même. La sourate At-Tawbah (verset 60) les énumère
              précisément en huit catégories — une liste exhaustive et limitative,
              que ni l&apos;ijtihād ni aucun raisonnement individuel ne peuvent
              étendre. Cette page présente ces catégories, les avis des savants de
              Ahl as-Sunnah wa-l-Jamāʿah, les divergences réelles entre savants
              et les réponses aux cas pratiques les plus fréquents dans le contexte
              francophone.
            </p>
          </header>

          {/* ── Verset coranique ─────────────────────────────────── */}
          <div className="rounded-[14px] border border-brand-200 bg-brand-50 p-6 space-y-4">
            <p className="text-[12px] font-semibold uppercase tracking-widest text-brand-600">
              Fondement textuel — Coran 9:60
            </p>
            <p
              className="text-[20px] leading-[2.2] text-neutral-900 text-right"
              dir="rtl"
              lang="ar"
            >
              إِنَّمَا الصَّدَقَاتُ لِلْفُقَرَاءِ وَالْمَسَاكِينِ
              وَالْعَامِلِينَ عَلَيْهَا وَالْمُؤَلَّفَةِ قُلُوبُهُمْ وَفِي
              الرِّقَابِ وَالْغَارِمِينَ وَفِي سَبِيلِ اللَّهِ وَابْنِ
              السَّبِيلِ ۖ فَرِيضَةً مِّنَ اللَّهِ ۗ وَاللَّهُ عَلِيمٌ حَكِيمٌ
            </p>
            <p className="text-[13px] text-neutral-500 italic leading-relaxed">
              Innamā ṣ-ṣadaqātu lil-fuqarā&apos;i wa-l-masākīni
              wa-l-ʿāmilīna ʿalayhā wa-l-muʾallafati qulūbuhum wa-fī r-riqābi
              wa-l-ghārimīna wa-fī sabīli llāhi wa-bni s-sabīl. Farīḍatan mina
              llāh. Wa-llāhu ʿalīmun ḥakīm.
            </p>
            <p className="text-[14px] text-neutral-700 leading-relaxed">
              «&nbsp;Les aumônes légales ne sont destinées qu&apos;aux pauvres et
              aux indigents, à ceux qui y travaillent, à ceux dont les cœurs sont
              à gagner, à l&apos;affranchissement des esclaves, à ceux qui sont
              accablés de dettes, dans le sentier d&apos;Allah et au voyageur en
              détresse. C&apos;est un décret d&apos;Allah. Et Allah est Omniscient
              et Sage.&nbsp;»
            </p>
            <p className="text-[12px] text-neutral-400">
              Coran, Sourate At-Tawbah (9), verset 60 — traduction Muhammad
              Hamidullah
            </p>
          </div>

          {/* ── Les 8 catégories ────────────────────────────────── */}
          <section className="space-y-6">
            <h2 className="text-[22px] font-semibold text-neutral-900">
              Les 8 catégories de bénéficiaires
            </h2>
            <p className="text-[15px] text-neutral-700 leading-relaxed">
              Les savants des quatre grandes écoles juridiques sunnites
              s&apos;accordent sur le caractère exhaustif de cette liste. Ce qui
              fait l&apos;objet de divergences, c&apos;est la définition précise
              de certaines catégories et leur application dans le contexte
              contemporain — non leur nombre ni leur principe.
            </p>

            <div className="space-y-4">

              {/* 1 — Al-Fuqarā' */}
              <div className="rounded-[14px] border border-neutral-200 bg-white p-5 space-y-3">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-600 text-white text-[13px] font-bold flex items-center justify-center mt-0.5">
                    1
                  </span>
                  <div className="space-y-0.5">
                    <p className="text-[17px] font-bold text-neutral-900">
                      Al-Fuqarā&apos; —{" "}
                      <span lang="ar" dir="rtl">
                        الفُقَرَاء
                      </span>
                    </p>
                    <p className="text-[14px] text-brand-600 font-medium">
                      Les pauvres
                    </p>
                  </div>
                </div>
                <div className="space-y-2 text-[14px] text-neutral-700 leading-relaxed pl-12">
                  <p>
                    Ceux qui ne possèdent rien ou dont le patrimoine est très
                    inférieur au niṣāb, sans revenu suffisant pour couvrir leurs
                    besoins essentiels. Shaykh Ibn al-ʿUthaymīn رحمه الله les
                    définit comme ceux qui « n&apos;ont rien du tout ou très peu,
                    et dont les revenus ne suffisent pas à subvenir à leurs besoins
                    fondamentaux ». (Ash-Sharḥ al-Mumtiʿ, vol. 6)
                  </p>
                  <p className="text-[13px] text-neutral-500">
                    <strong>Divergence :</strong> les écoles malikite, shaféite et
                    hanbalite considèrent les fuqarā&apos; comme plus démunis que
                    les masākīn. L&apos;école hanafite inverse cette hiérarchie.
                    Cette divergence terminologique n&apos;affecte pas le droit à
                    la Zakāt des personnes relevant des deux catégories.
                  </p>
                </div>
              </div>

              {/* 2 — Al-Masākīn */}
              <div className="rounded-[14px] border border-neutral-200 bg-white p-5 space-y-3">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-600 text-white text-[13px] font-bold flex items-center justify-center mt-0.5">
                    2
                  </span>
                  <div className="space-y-0.5">
                    <p className="text-[17px] font-bold text-neutral-900">
                      Al-Masākīn —{" "}
                      <span lang="ar" dir="rtl">
                        المَسَاكِين
                      </span>
                    </p>
                    <p className="text-[14px] text-brand-600 font-medium">
                      Les indigents / nécessiteux
                    </p>
                  </div>
                </div>
                <div className="space-y-3 text-[14px] text-neutral-700 leading-relaxed pl-12">
                  <p>
                    Ceux qui ont un revenu ou un patrimoine, mais insuffisant pour
                    couvrir leurs besoins fondamentaux (nourriture, logement, soins,
                    vêtement). Ils sont dans la gêne sans atteindre le dénuement
                    complet des fuqarā&apos;.
                  </p>
                  <div className="rounded-[10px] bg-neutral-50 border border-neutral-200 px-4 py-3 text-[13px] text-neutral-700">
                    Le Prophète ﷺ a dit : « Le miskīn n&apos;est pas celui qui
                    fait le tour des gens [pour mendier] et qu&apos;on renvoie
                    avec une ou deux bouchées, ou une ou deux dattes. Le vrai
                    miskīn est celui qui ne trouve pas de quoi se suffire, et
                    dont on ne s&apos;aperçoit pas pour lui faire
                    l&apos;aumône. »
                    <span className="text-neutral-400 ml-1">
                      (Al-Bukhārī, n° 1479&nbsp;; Muslim, n° 1039)
                    </span>
                  </div>
                </div>
              </div>

              {/* 3 — Al-'Āmilīn */}
              <div className="rounded-[14px] border border-neutral-200 bg-white p-5 space-y-3">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-600 text-white text-[13px] font-bold flex items-center justify-center mt-0.5">
                    3
                  </span>
                  <div className="space-y-0.5">
                    <p className="text-[17px] font-bold text-neutral-900">
                      Al-ʿĀmilīn ʿalayhā —{" "}
                      <span lang="ar" dir="rtl">
                        العَامِلِينَ عَلَيْهَا
                      </span>
                    </p>
                    <p className="text-[14px] text-brand-600 font-medium">
                      Les collecteurs et gestionnaires de la Zakāt
                    </p>
                  </div>
                </div>
                <div className="text-[14px] text-neutral-700 leading-relaxed pl-12">
                  <p>
                    Ceux officiellement désignés par une autorité islamique
                    légitime pour collecter, comptabiliser et distribuer la Zakāt.
                    Ils peuvent recevoir une part de la Zakāt en contrepartie de
                    leur travail, même s&apos;ils sont aisés par ailleurs — car
                    c&apos;est une rémunération, non une assistance. En
                    l&apos;absence d&apos;État islamique en Europe, cette catégorie
                    est pratiquement inactive dans son sens originel.
                  </p>
                </div>
              </div>

              {/* 4 — Al-Mu'allafatu qulūbuhum */}
              <div className="rounded-[14px] border border-neutral-200 bg-white p-5 space-y-3">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-600 text-white text-[13px] font-bold flex items-center justify-center mt-0.5">
                    4
                  </span>
                  <div className="space-y-0.5">
                    <p className="text-[17px] font-bold text-neutral-900">
                      Al-Muʾallafatu qulūbuhum —{" "}
                      <span lang="ar" dir="rtl">
                        المُؤَلَّفَةِ قُلُوبُهُم
                      </span>
                    </p>
                    <p className="text-[14px] text-brand-600 font-medium">
                      Ceux dont les cœurs sont à gagner
                    </p>
                  </div>
                </div>
                <div className="space-y-3 text-[14px] text-neutral-700 leading-relaxed pl-12">
                  <p>
                    Cette catégorie inclut notamment les nouveaux convertis dont
                    l&apos;attachement à l&apos;Islam a besoin d&apos;être
                    consolidé. Elle ne requiert pas de condition de pauvreté — une
                    personne peut y être éligible indépendamment de sa situation
                    financière. Certains savants classiques distinguent plusieurs
                    sous-types (convertis, ou personnes dont le soutien bénéficie
                    à la communauté), mais le cas le plus courant en contexte
                    contemporain est celui du converti.
                  </p>
                  <div className="rounded-[10px] bg-neutral-50 border border-neutral-200 px-4 py-3 text-[13px] text-neutral-600">
                    <strong className="text-neutral-800">
                      Sur la question de son abolition :
                    </strong>{" "}
                    certains citent le calife ʿUmar رضي الله عنه qui aurait cessé
                    de distribuer à cette catégorie. Les savants contemporains de
                    référence — dont Shaykh Ibn Bāz رحمه الله et la Lajnah
                    ad-Dāʾimah — précisent qu&apos;ʿUmar a jugé qu&apos;il
                    n&apos;y avait pas de bénéficiaires éligibles à ce moment et
                    dans sa région ; ce n&apos;est pas une abrogation du verset
                    coranique. La catégorie reste valide de nos jours.{" "}
                    <span className="text-neutral-400">
                      (Fatāwā al-Lajnah ad-Dāʾimah, vol. 9, p. 293)
                    </span>
                  </div>
                </div>
              </div>

              {/* 5 — Fī r-Riqāb */}
              <div className="rounded-[14px] border border-neutral-200 bg-white p-5 space-y-3">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-600 text-white text-[13px] font-bold flex items-center justify-center mt-0.5">
                    5
                  </span>
                  <div className="space-y-0.5">
                    <p className="text-[17px] font-bold text-neutral-900">
                      Fī r-Riqāb —{" "}
                      <span lang="ar" dir="rtl">
                        فِي الرِّقَاب
                      </span>
                    </p>
                    <p className="text-[14px] text-brand-600 font-medium">
                      L&apos;affranchissement des esclaves
                    </p>
                  </div>
                </div>
                <div className="text-[14px] text-neutral-700 leading-relaxed pl-12">
                  <p>
                    Historiquement : racheter des esclaves pour leur rendre la
                    liberté. Certains savants étendent cette catégorie au rachat de
                    prisonniers de guerre musulmans. En contexte européen
                    contemporain, cette catégorie est pratiquement inapplicable. Il
                    n&apos;existe pas de position savante établie sur une extension
                    moderne généralisée — toute application à d&apos;autres formes
                    d&apos;exploitation reste soumise à la consultation d&apos;un
                    érudit qualifié.
                  </p>
                </div>
              </div>

              {/* 6 — Al-Ghārimīn */}
              <div className="rounded-[14px] border border-neutral-200 bg-white p-5 space-y-3">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-600 text-white text-[13px] font-bold flex items-center justify-center mt-0.5">
                    6
                  </span>
                  <div className="space-y-0.5">
                    <p className="text-[17px] font-bold text-neutral-900">
                      Al-Ghārimīn —{" "}
                      <span lang="ar" dir="rtl">
                        الغَارِمِين
                      </span>
                    </p>
                    <p className="text-[14px] text-brand-600 font-medium">
                      Les endettés
                    </p>
                  </div>
                </div>
                <div className="space-y-3 text-[14px] text-neutral-700 leading-relaxed pl-12">
                  <p>
                    Ceux accablés de dettes légitimes qu&apos;ils sont incapables
                    de rembourser par leurs propres moyens. Les savants distinguent
                    deux sous-catégories :
                  </p>
                  <ul className="space-y-2">
                    <li className="flex gap-2">
                      <span className="text-brand-600 font-bold shrink-0 mt-0.5">
                        ·
                      </span>
                      <span>
                        <strong>L&apos;endetté pour lui-même :</strong> dette
                        personnelle légitime (nourriture, soins, logement…), dont
                        le montant dépasse sa capacité de remboursement.
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-brand-600 font-bold shrink-0 mt-0.5">
                        ·
                      </span>
                      <span>
                        <strong>L&apos;endetté pour réconcilier deux parties :</strong>{" "}
                        celui qui s&apos;est endetté pour régler un conflit entre
                        deux familles ou groupes. Il peut recevoir la Zakāt même
                        s&apos;il est riche par ailleurs.{" "}
                        <span className="text-neutral-400">
                          (Ibn al-ʿUthaymīn, Ash-Sharḥ al-Mumtiʿ, vol. 6)
                        </span>
                      </span>
                    </li>
                  </ul>
                  <p className="text-[13px] text-neutral-500">
                    Conditions générales : la dette doit être légalement et
                    licitement contractée ; le débiteur doit être dans
                    l&apos;incapacité de la rembourser par ses propres moyens.
                  </p>
                </div>
              </div>

              {/* 7 — Fī Sabīl Allāh */}
              <div className="rounded-[14px] border border-neutral-200 bg-white p-5 space-y-3">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-600 text-white text-[13px] font-bold flex items-center justify-center mt-0.5">
                    7
                  </span>
                  <div className="space-y-0.5">
                    <p className="text-[17px] font-bold text-neutral-900">
                      Fī Sabīl Allāh —{" "}
                      <span lang="ar" dir="rtl">
                        فِي سَبِيلِ اللهِ
                      </span>
                    </p>
                    <p className="text-[14px] text-brand-600 font-medium">
                      Dans le sentier d&apos;Allah
                    </p>
                  </div>
                </div>
                <div className="space-y-3 text-[14px] text-neutral-700 leading-relaxed pl-12">
                  <p>
                    C&apos;est la catégorie qui donne lieu à la divergence la plus
                    documentée entre savants contemporains. Il est important
                    d&apos;en présenter les différents avis honnêtement.
                  </p>
                  <div className="space-y-2">
                    <div className="rounded-[8px] bg-neutral-50 border border-neutral-200 px-4 py-3 text-[13px]">
                      <strong className="text-neutral-800">
                        Avis classique dominant
                      </strong>{" "}
                      <span className="text-neutral-500">
                        (Mālik, ash-Shāfiʿī, Ahmad ibn Ḥanbal) :
                      </span>{" "}
                      cette catégorie désigne les combattants (ghuzāt) qui
                      participent au jihad sans solde. C&apos;est le sens littéral
                      de l&apos;expression dans les textes classiques.
                    </div>
                    <div className="rounded-[8px] bg-neutral-50 border border-neutral-200 px-4 py-3 text-[13px]">
                      <strong className="text-neutral-800">
                        Avis de Shaykh Ibn al-ʿUthaymīn رحمه الله :
                      </strong>{" "}
                      l&apos;expression peut inclure toutes les bonnes œuvres
                      islamiques bénéficiant à la communauté — y compris
                      l&apos;enseignement des sciences islamiques — à condition
                      qu&apos;il s&apos;agisse de{" "}
                      <em>personnes physiques</em>, non de bâtiments ou
                      d&apos;institutions.{" "}
                      <span className="text-neutral-400">
                        (Ash-Sharḥ al-Mumtiʿ, vol. 6, p. 229)
                      </span>
                    </div>
                    <div className="rounded-[8px] bg-neutral-50 border border-neutral-200 px-4 py-3 text-[13px]">
                      <strong className="text-neutral-800">
                        Avis de Shaykh Ibn Bāz رحمه الله :
                      </strong>{" "}
                      plus proche du sens classique, il réserve cette catégorie
                      au jihad au sens strict et n&apos;étend pas de façon générale
                      l&apos;expression à l&apos;enseignement islamique.
                    </div>
                  </div>
                  <div className="rounded-[10px] bg-warning-50 border-l-[3px] border-warning-400 px-4 py-3 text-[13px]">
                    <strong className="text-warning-700">
                      Point de méthode :
                    </strong>{" "}
                    cette divergence est réelle entre savants de référence. Cette
                    page ne la tranche pas. Tout versement sous cette seule
                    catégorie mérite la consultation d&apos;un érudit qualifié.
                  </div>
                </div>
              </div>

              {/* 8 — Ibn as-Sabīl */}
              <div className="rounded-[14px] border border-neutral-200 bg-white p-5 space-y-3">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-600 text-white text-[13px] font-bold flex items-center justify-center mt-0.5">
                    8
                  </span>
                  <div className="space-y-0.5">
                    <p className="text-[17px] font-bold text-neutral-900">
                      Ibn as-Sabīl —{" "}
                      <span lang="ar" dir="rtl">
                        ابْنُ السَّبِيل
                      </span>
                    </p>
                    <p className="text-[14px] text-brand-600 font-medium">
                      Le voyageur en difficulté
                    </p>
                  </div>
                </div>
                <div className="text-[14px] text-neutral-700 leading-relaxed pl-12">
                  <p>
                    Le voyageur qui se trouve coupé de ses ressources en cours de
                    voyage, au point de ne plus pouvoir subvenir à ses besoins ou
                    rentrer chez lui. Il peut recevoir la Zakāt même s&apos;il est
                    riche dans son pays d&apos;origine — la condition est le
                    dénuement effectif durant le voyage. Son éligibilité cesse dès
                    qu&apos;il retrouve ses ressources ou rentre chez lui.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* ── Zakāt et famille proche ──────────────────────────── */}
          <section className="space-y-5">
            <h2 className="text-[22px] font-semibold text-neutral-900">
              Peut-on donner sa Zakāt à sa famille ?
            </h2>
            <div className="space-y-3 text-[15px] text-neutral-700 leading-relaxed">
              <p>
                La règle préalable à comprendre est celle de la{" "}
                <strong>nafaqah wājibah</strong> — l&apos;obligation légale
                d&apos;entretien. En jurisprudence islamique, certains liens de
                parenté créent une obligation d&apos;entretien : le fils doit
                subvenir aux besoins de ses parents dans le besoin, le père à ceux
                de ses enfants mineurs, etc. Or, celui qui a déjà l&apos;obligation
                légale de subvenir aux besoins d&apos;une personne ne peut pas
                s&apos;acquitter de cette obligation à travers la Zakāt.{" "}
                <strong>
                  La Zakāt ne peut pas se substituer à une obligation distincte
                  préexistante.
                </strong>
              </p>
            </div>

            <div className="space-y-4">

              {/* Parents */}
              <div className="rounded-[14px] border border-neutral-200 bg-white p-5 space-y-3">
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[12px] font-semibold bg-red-50 text-red-700 border border-red-200">
                    Interdit
                  </span>
                  <h3 className="text-[16px] font-semibold text-neutral-900">
                    Ses parents
                  </h3>
                </div>
                <div className="space-y-3 text-[14px] text-neutral-700 leading-relaxed">
                  <p>
                    Les quatre grandes écoles s&apos;accordent sur l&apos;interdiction
                    de verser la Zakāt à ses propres parents, même s&apos;ils sont
                    pauvres. Le fils — et, selon certaines écoles, la fille — a
                    l&apos;obligation légale de nafaqah envers ses parents dans le
                    besoin. Or cette obligation préexiste à la Zakāt : elle ne peut
                    pas être éteinte par elle.{" "}
                    <span className="text-neutral-400">
                      (Ibn Qudāmah, Al-Mughnī, vol. 2, p. 508)
                    </span>
                  </p>
                  <div className="rounded-[8px] bg-brand-50 border border-brand-100 px-4 py-3 text-[13px] text-brand-900">
                    <strong>À distinguer :</strong> la ṣadaqah volontaire
                    (taṭawwuʿ) vers des parents pauvres est non seulement permise
                    mais très recommandée — elle cumule la récompense de la ṣadaqah
                    et celle de la silah ar-raḥim. C&apos;est uniquement la Zakāt
                    obligatoire qui ne peut pas leur être versée.
                  </div>
                </div>
              </div>

              {/* Enfants */}
              <div className="rounded-[14px] border border-neutral-200 bg-white p-5 space-y-3">
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[12px] font-semibold bg-red-50 text-red-700 border border-red-200">
                    Interdit — enfants à charge
                  </span>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[12px] font-semibold bg-green-50 text-green-700 border border-green-200">
                    Autorisé — enfants adultes autonomes
                  </span>
                  <h3 className="text-[16px] font-semibold text-neutral-900">
                    Ses enfants
                  </h3>
                </div>
                <div className="space-y-2 text-[14px] text-neutral-700 leading-relaxed">
                  <p>
                    <strong>Enfants mineurs à charge :</strong> interdit pour la
                    même raison. Le père a l&apos;obligation légale de nafaqah
                    envers ses enfants mineurs. La Zakāt ne peut pas servir à
                    financer une obligation qui lui incombe par ailleurs.
                  </p>
                  <p>
                    <strong>Enfants adultes devenus autonomes :</strong> si
                    l&apos;enfant est majeur, que son entretien n&apos;est plus
                    légalement dû par le père, et qu&apos;il remplit l&apos;une des
                    conditions d&apos;éligibilité (pauvreté, endettement…), la
                    Zakāt est permise selon la majorité des savants. Shaykh Ibn
                    al-ʿUthaymīn رحمه الله le précise explicitement dans ses leçons
                    sur la Zakāt.
                  </p>
                </div>
              </div>

              {/* Frère/sœur */}
              <div className="rounded-[14px] border border-neutral-200 bg-white p-5 space-y-3">
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[12px] font-semibold bg-green-50 text-green-700 border border-green-200">
                    Autorisé — et même recommandé
                  </span>
                  <h3 className="text-[16px] font-semibold text-neutral-900">
                    Son frère ou sa sœur
                  </h3>
                </div>
                <div className="space-y-3 text-[14px] text-neutral-700 leading-relaxed">
                  <p>
                    Si le frère ou la sœur remplit l&apos;une des conditions
                    d&apos;éligibilité — pauvreté, endettement — et qu&apos;on
                    n&apos;a pas d&apos;obligation légale de nafaqah effective
                    envers lui, la Zakāt est non seulement permise mais
                    particulièrement recommandée.
                  </p>
                  <div className="rounded-[10px] bg-neutral-50 border border-neutral-200 px-4 py-3 text-[13px] text-neutral-700">
                    Le Prophète ﷺ a dit : « La ṣadaqah envers le pauvre est une
                    ṣadaqah, et envers le proche de sang elle est à la fois ṣadaqah
                    et silah [maintien du lien de parenté]. »{" "}
                    <span className="text-neutral-400">
                      (At-Tirmidhī, n° 658&nbsp;; An-Nasāʾī, n° 2582 — hadith
                      ḥasan)
                    </span>
                  </div>
                  <p>
                    Shaykh Ibn al-ʿUthaymīn رحمه الله recommande explicitement de
                    donner sa Zakāt en priorité aux proches éligibles pour cumuler
                    ce double mérite.{" "}
                    <span className="text-neutral-400">
                      (Ash-Sharḥ al-Mumtiʿ, vol. 6)
                    </span>
                  </p>
                </div>
              </div>

              {/* Autres parents */}
              <div className="rounded-[14px] border border-neutral-200 bg-white p-5 space-y-2">
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[12px] font-semibold bg-green-50 text-green-700 border border-green-200">
                    Autorisé
                  </span>
                  <h3 className="text-[16px] font-semibold text-neutral-900">
                    Oncles, tantes, cousins et autres parents
                  </h3>
                </div>
                <p className="text-[14px] text-neutral-700 leading-relaxed">
                  En l&apos;absence d&apos;obligation légale de nafaqah, la Zakāt
                  peut aller à tout parent éligible — oncles, tantes, cousins,
                  neveux, nièces. Le mérite de la silah ar-raḥim s&apos;y ajoute,
                  rendant ce type de Zakāt doublement récompensé.
                </p>
              </div>
            </div>
          </section>

          {/* ── Cas pratiques fréquents ──────────────────────────── */}
          <section className="space-y-5">
            <h2 className="text-[22px] font-semibold text-neutral-900">
              Cas pratiques fréquents
            </h2>

            <div className="space-y-4">

              {/* Converti */}
              <div className="rounded-[14px] border border-neutral-200 bg-white p-5 space-y-3">
                <h3 className="text-[16px] font-semibold text-neutral-900">
                  Le converti (muhtadī / muhtadiyah)
                </h3>
                <div className="space-y-2 text-[14px] text-neutral-700 leading-relaxed">
                  <p>
                    Le nouveau converti peut recevoir la Zakāt au titre de la
                    catégorie <em>al-muʾallafatu qulūbuhum</em>, même
                    s&apos;il n&apos;est pas dans le besoin financier. Le Coran
                    reconnaît explicitement le soutien à ceux dont
                    l&apos;attachement à l&apos;Islam mérite d&apos;être consolidé.
                    Si de plus il est dans le besoin matériel, il bénéficie
                    d&apos;une double éligibilité.
                  </p>
                  <p>
                    La Lajnah ad-Dāʾimah confirme que cette catégorie
                    s&apos;applique de nos jours aux convertis ayant besoin de
                    soutien.{" "}
                    <span className="text-neutral-400">
                      (Fatāwā al-Lajnah, vol. 9, p. 293)
                    </span>
                  </p>
                </div>
              </div>

              {/* Étudiant en sciences islamiques - très prudent */}
              <div className="rounded-[14px] border border-neutral-200 bg-white p-5 space-y-3">
                <h3 className="text-[16px] font-semibold text-neutral-900">
                  L&apos;étudiant en sciences islamiques
                </h3>
                <div className="space-y-3 text-[14px] text-neutral-700 leading-relaxed">
                  <p>
                    Ce cas requiert une distinction rigoureuse selon la situation
                    réelle de l&apos;étudiant.
                  </p>
                  <div className="rounded-[8px] bg-brand-50 border border-brand-100 px-4 py-3 text-[13px]">
                    <strong className="text-brand-900">
                      S&apos;il est dans le besoin (faqīr ou miskīn) :
                    </strong>{" "}
                    il est éligible à la Zakāt au titre de ces catégories, comme
                    tout autre musulman dans le besoin — son statut
                    d&apos;étudiant en sciences islamiques est sans pertinence ici.
                  </div>
                  <div className="rounded-[10px] bg-warning-50 border-l-[3px] border-warning-400 px-4 py-3 text-[13px]">
                    <strong className="text-warning-700">
                      S&apos;il n&apos;est pas dans le besoin :
                    </strong>{" "}
                    la question se pose alors de savoir s&apos;il relève de la
                    catégorie <em>fī sabīl Allāh</em>. C&apos;est précisément là
                    que s&apos;exerce la divergence documentée entre savants de
                    référence (voir catégorie 7 ci-dessus). Shaykh Ibn al-ʿUthaymīn
                    رحمه الله l&apos;étend aux étudiants en sciences islamiques ;
                    Shaykh Ibn Bāz رحمه الله est plus restrictif.{" "}
                    <strong>
                      Un étudiant en sciences islamiques ne devient pas
                      automatiquement bénéficiaire de la Zakāt de ce seul fait.
                    </strong>{" "}
                    Ce cas précis justifie la consultation d&apos;un érudit
                    qualifié avant tout versement.
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ── Mosquée et associations ──────────────────────────── */}
          <section className="space-y-5">
            <h2 className="text-[22px] font-semibold text-neutral-900">
              Peut-on donner sa Zakāt à une mosquée ou à une association ?
            </h2>
            <p className="text-[15px] text-neutral-700 leading-relaxed">
              Cette question touche directement des centaines de milliers de
              musulmans en France. La pratique courante dans les communautés ne
              correspond pas toujours à ce que la jurisprudence islamique autorise.
              Il est nécessaire d&apos;établir des distinctions précises.
            </p>

            {/* Règle de base */}
            <div className="rounded-[14px] border border-neutral-200 bg-neutral-50 p-5 space-y-2">
              <p className="text-[14px] font-semibold text-neutral-900">
                La règle fondamentale
              </p>
              <p className="text-[14px] text-neutral-700 leading-relaxed">
                La Zakāt doit bénéficier à des{" "}
                <strong>personnes physiques</strong> relevant des 8 catégories
                définies par le Coran. Une institution — mosquée, association,
                fondation — n&apos;est pas en elle-même un bénéficiaire de la
                Zakāt. Ce principe est la clé de lecture de tous les cas
                ci-dessous.
              </p>
            </div>

            <div className="space-y-4">

              {/* Mosquée */}
              <div className="rounded-[14px] border border-red-100 bg-red-50 p-5 space-y-3">
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[12px] font-semibold bg-red-100 text-red-700 border border-red-200">
                    Interdit pour le bâtiment
                  </span>
                  <h3 className="text-[16px] font-semibold text-neutral-900">
                    La mosquée
                  </h3>
                </div>
                <div className="space-y-2 text-[14px] text-neutral-700 leading-relaxed">
                  <p>
                    La Zakāt ne peut pas être utilisée pour la construction, la
                    rénovation, l&apos;entretien, le loyer ou les charges
                    d&apos;une mosquée. La raison est textuelle : un bâtiment
                    n&apos;appartient à aucune des 8 catégories humaines définies
                    par le verset 9:60. C&apos;est la position de Shaykh Ibn Bāz
                    رحمه الله, de Shaykh Ibn al-ʿUthaymīn رحمه الله et de la Lajnah
                    ad-Dāʾimah.{" "}
                    <span className="text-neutral-500">
                      (Fatāwā al-Lajnah, vol. 9, n° 7714)
                    </span>
                  </p>
                  <div className="rounded-[8px] bg-white border border-neutral-200 px-4 py-3 text-[13px] text-neutral-700">
                    <strong>Important :</strong> la ṣadaqah volontaire peut être
                    donnée sans restriction pour une mosquée. C&apos;est uniquement
                    la Zakāt obligatoire (farḍ) qui ne peut pas financer le bâtiment.
                  </div>
                </div>
              </div>

              {/* Association qui redistribue */}
              <div className="rounded-[14px] border border-green-100 bg-green-50 p-5 space-y-3">
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[12px] font-semibold bg-green-100 text-green-700 border border-green-200">
                    Autorisé sous condition stricte
                  </span>
                  <h3 className="text-[16px] font-semibold text-neutral-900">
                    L&apos;association qui redistribue directement aux bénéficiaires
                  </h3>
                </div>
                <div className="space-y-3 text-[14px] text-neutral-700 leading-relaxed">
                  <p>
                    Une association peut jouer le rôle d&apos;intermédiaire mandaté
                    (<em>nā&apos;ib / wakīl</em>) pour distribuer la Zakāt à des
                    personnes physiques relevant des 8 catégories. Dans ce cas,
                    l&apos;association n&apos;est pas le bénéficiaire final — elle
                    est le canal de transmission vers des bénéficiaires humains
                    éligibles.
                  </p>
                  <p>Conditions à vérifier avant tout versement :</p>
                  <ul className="space-y-1.5 text-[13px]">
                    {[
                      "L'association identifie et vérifie l'éligibilité de ses bénéficiaires parmi les 8 catégories",
                      "La Zakāt collectée est intégralement reversée à des personnes éligibles",
                      "Les frais de fonctionnement de l'association sont couverts par d'autres fonds (dons volontaires, subventions)",
                      "L'association est en mesure de rendre compte de la distribution si on lui demande",
                    ].map((c) => (
                      <li key={c} className="flex gap-2">
                        <span className="text-green-600 font-bold shrink-0">
                          ✓
                        </span>
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Association - fonctionnement */}
              <div className="rounded-[14px] border border-red-100 bg-red-50 p-5 space-y-3">
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[12px] font-semibold bg-red-100 text-red-700 border border-red-200">
                    Interdit
                  </span>
                  <h3 className="text-[16px] font-semibold text-neutral-900">
                    L&apos;association qui finance son propre fonctionnement
                  </h3>
                </div>
                <div className="space-y-2 text-[14px] text-neutral-700 leading-relaxed">
                  <p>
                    La Zakāt ne peut pas financer les frais de fonctionnement
                    d&apos;une association : salaires du personnel, loyer des
                    locaux, matériel de bureau, communication, organisation
                    d&apos;événements. Aucun de ces postes ne correspond à une
                    catégorie bénéficiaire du Coran.
                  </p>
                  <p className="text-[13px] text-neutral-600">
                    La seule exception théorique concerne les{" "}
                    <em>al-ʿāmilīn ʿalayhā</em> (catégorie 3) — mais cette
                    catégorie suppose une désignation formelle par une autorité
                    islamique habilitée à collecter la Zakāt. La grande majorité
                    des associations islamiques en France ne disposent pas de ce
                    statut au sens de la jurisprudence islamique.
                  </p>
                </div>
              </div>

              {/* Projet de construction */}
              <div className="rounded-[14px] border border-neutral-200 bg-white p-5 space-y-3">
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[12px] font-semibold bg-red-50 text-red-700 border border-red-200">
                    Interdit pour le bâtiment
                  </span>
                  <h3 className="text-[16px] font-semibold text-neutral-900">
                    Projet de construction (école islamique, orphelinat…)
                  </h3>
                </div>
                <div className="space-y-2 text-[14px] text-neutral-700 leading-relaxed">
                  <p>
                    La Zakāt ne peut pas financer la construction d&apos;un
                    bâtiment, même à vocation islamique — école coranique,
                    orphelinat, centre culturel. Le principe est identique : un
                    bâtiment n&apos;est pas une personne.
                  </p>
                  <p>
                    En revanche, si l&apos;institution accueille des bénéficiaires
                    éligibles — orphelins pauvres, étudiants dans le besoin — la
                    Zakāt peut aller <em>directement à ces personnes</em> via
                    l&apos;institution, si les conditions de l&apos;intermédiaire
                    mandaté sont réunies.
                  </p>
                </div>
              </div>

              {/* Résumé pratique */}
              <div className="rounded-[14px] border border-neutral-200 bg-neutral-50 p-5 space-y-2">
                <p className="text-[13px] font-semibold uppercase tracking-wide text-neutral-500">
                  La bonne question à poser à une association
                </p>
                <p className="text-[14px] text-neutral-700 leading-relaxed">
                  Avant de verser votre Zakāt :{" "}
                  <strong>
                    « Votre Zakāt va-t-elle intégralement et directement à des
                    personnes éligibles parmi les 8 catégories, ou finance-t-elle
                    aussi des frais de fonctionnement ? »
                  </strong>{" "}
                  Si la réponse mêle les deux sans distinction, demandez la part
                  exacte reversée aux bénéficiaires — et ne versez votre Zakāt
                  que sur la portion qui atteint réellement des personnes éligibles.
                </p>
              </div>
            </div>
          </section>

          {/* ── Tableau récapitulatif ────────────────────────────── */}
          <section className="space-y-4">
            <h2 className="text-[22px] font-semibold text-neutral-900">
              Tableau de synthèse
            </h2>
            <div className="overflow-x-auto rounded-[14px] border border-neutral-200">
              <table className="w-full text-[13px]">
                <thead>
                  <tr className="bg-neutral-50 border-b border-neutral-200">
                    <th className="text-left px-4 py-3 font-semibold text-neutral-700">
                      Bénéficiaire
                    </th>
                    <th className="text-left px-4 py-3 font-semibold text-neutral-700">
                      Zakāt ?
                    </th>
                    <th className="text-left px-4 py-3 font-semibold text-neutral-700 hidden sm:table-cell">
                      Catégorie / Condition
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-100">
                  {[
                    {
                      who: "Parents pauvres",
                      ok: false,
                      label: "Non",
                      cond: "Obligation de nafaqah — 4 écoles",
                    },
                    {
                      who: "Enfants mineurs à charge",
                      ok: false,
                      label: "Non",
                      cond: "Nafaqah due par le père",
                    },
                    {
                      who: "Enfants adultes, non à charge, pauvres",
                      ok: true,
                      label: "Oui",
                      cond: "Al-fuqarā' / al-masākīn",
                    },
                    {
                      who: "Frère ou sœur pauvre",
                      ok: true,
                      label: "Oui — recommandé",
                      cond: "Al-fuqarā' + silah ar-raḥim",
                    },
                    {
                      who: "Oncles, tantes, cousins pauvres",
                      ok: true,
                      label: "Oui",
                      cond: "Al-fuqarā' / al-masākīn",
                    },
                    {
                      who: "Converti",
                      ok: true,
                      label: "Oui",
                      cond: "Al-muʾallafatu qulūbuhum",
                    },
                    {
                      who: "Endetté (dette légitime, incapacité de remboursement)",
                      ok: true,
                      label: "Oui",
                      cond: "Al-ghārimīn",
                    },
                    {
                      who: "Étudiant pauvre",
                      ok: true,
                      label: "Oui",
                      cond: "Al-fuqarā' / al-masākīn",
                    },
                    {
                      who: "Étudiant en sciences islamiques non pauvre",
                      ok: null,
                      label: "Divergence",
                      cond: "Fī sabīl Allāh — consulter un érudit",
                    },
                    {
                      who: "Voyageur coupé de ses ressources",
                      ok: true,
                      label: "Oui",
                      cond: "Ibn as-sabīl",
                    },
                    {
                      who: "Mosquée (bâtiment, entretien, construction)",
                      ok: false,
                      label: "Non",
                      cond: "Pas une catégorie bénéficiaire",
                    },
                    {
                      who: "Association (redistribution directe à des éligibles)",
                      ok: true,
                      label: "Oui — sous condition",
                      cond: "Intermédiaire mandaté uniquement",
                    },
                    {
                      who: "Association (frais de fonctionnement)",
                      ok: false,
                      label: "Non",
                      cond: "Pas une catégorie bénéficiaire",
                    },
                  ].map((row) => (
                    <tr
                      key={row.who}
                      className="bg-white even:bg-neutral-50"
                    >
                      <td className="px-4 py-3 text-neutral-800 font-medium">
                        {row.who}
                      </td>
                      <td className="px-4 py-3">
                        <span
                          className={`inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold ${
                            row.ok === true
                              ? "bg-green-50 text-green-700 border border-green-200"
                              : row.ok === false
                                ? "bg-red-50 text-red-700 border border-red-200"
                                : "bg-yellow-50 text-yellow-700 border border-yellow-200"
                          }`}
                        >
                          {row.label}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-neutral-500 hidden sm:table-cell">
                        {row.cond}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* ── FAQ ─────────────────────────────────────────────── */}
          <section className="space-y-5">
            <h2 className="text-[22px] font-semibold text-neutral-900">
              Questions fréquentes
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

          {/* ── Sources ──────────────────────────────────────────── */}
          <section className="space-y-4">
            <h2 className="text-[22px] font-semibold text-neutral-900">
              Sources et savants de référence
            </h2>
            <div className="rounded-[14px] border border-neutral-200 bg-white p-5 space-y-4">
              <div className="space-y-2">
                <p className="text-[12px] font-semibold uppercase tracking-widest text-neutral-400">
                  Textes coranique et prophétique
                </p>
                <ul className="space-y-1.5">
                  {[
                    "Coran, Sourate At-Tawbah (9), verset 60",
                    "Hadith sur le miskīn — Al-Bukhārī n° 1479 ; Muslim n° 1039",
                    "Hadith sur la ṣadaqah au proche — At-Tirmidhī n° 658 ; An-Nasāʾī n° 2582",
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
                    "Ibn Qudāmah — Al-Mughnī, vol. 2 (nafaqah et Zakāt à la famille)",
                    "Shaykh Ibn al-ʿUthaymīn رحمه الله — Ash-Sharḥ al-Mumtiʿ, vol. 6 (Kitāb az-Zakāt)",
                    "Fatāwā al-Lajnah ad-Dāʾimah — vol. 9 (bénéficiaires de la Zakāt, n° 7714 et p. 293)",
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
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                {
                  href: "/calculateur",
                  title: "Calculateur de Zakāt al-Māl",
                  desc: "Calculez le montant de votre Zakāt : niṣāb, richesses zakātables, montant à verser.",
                },
                {
                  href: "/nisab",
                  title: "Le Niṣāb",
                  desc: "Vérifiez si vous êtes assujetti à la Zakāt : seuil en or (85 g) et en argent (595 g), valeur du jour.",
                },
                {
                  href: "/comment-calculer-sa-zakat",
                  title: "Comment calculer sa Zakāt",
                  desc: "La méthode étape par étape : richesses zakātables, dettes déductibles, taux de 2,5 %.",
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
              Cette page est un document informatif fondé sur les avis des savants
              de Ahl as-Sunnah wa-l-Jamāʿah. Elle ne constitue pas une fatwa et
              ne se substitue pas à l&apos;avis d&apos;un érudit qualifié. Les
              divergences réelles entre savants sont signalées explicitement —
              cette page ne prétend pas les trancher. Pour toute situation complexe
              (endettement, associations, cas familiaux particuliers), consultez un
              imam ou un spécialiste en jurisprudence islamique (fiqh).
            </p>
          </div>

        </article>
      </PageWrapper>

      <SiteFooter />
    </>
  );
}
