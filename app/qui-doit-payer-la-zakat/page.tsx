import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { PageWrapper } from "@/components/layout/PageWrapper";

export const metadata: Metadata = {
  title: "Qui doit payer la Zakāt al-Māl ? Conditions et cas pratiques",
  description:
    "Quelles sont les conditions qui rendent la Zakāt obligatoire ? Islam, niṣāb, ḥawl, pleine propriété — les 5 conditions selon Ahl as-Sunnah et les cas pratiques : femmes, enfants, endettés, convertis, salariés.",
  alternates: {
    canonical: "/qui-doit-payer-la-zakat",
  },
  openGraph: {
    title: "Qui doit payer la Zakāt al-Māl ? Conditions et cas pratiques",
    description:
      "Les 5 conditions d'obligation de la Zakāt selon Ahl as-Sunnah wa-l-Jamāʿah et les cas pratiques : femmes, enfants, endettés, convertis, salariés.",
    type: "article",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Calculateur de Zakāt al-Māl — zakatfacile.fr",
      },
    ],
  },
};

const FAQ_ITEMS = [
  {
    q: "Dois-je payer la Zakāt si je suis endetté ?",
    a: "Cela dépend du montant et de la nature de vos dettes. Selon la position de la majorité des savants (mālikites, ḥanbalites, et largement appliqué en pratique), les dettes exigibles à court terme se déduisent du patrimoine zakātable avant de vérifier si le niṣāb est atteint. Si après déduction votre patrimoine net reste supérieur au niṣāb, la Zakāt est due. En revanche, le solde total d'un crédit immobilier sur 20 ans ne se déduit pas dans son intégralité : seule la part exigible à court terme (mensualités en cours) est prise en compte selon Shaykh Ibn al-ʿUthaymīn رحمه الله (Ash-Sharḥ al-Mumtiʿ, vol. 6).",
  },
  {
    q: "Les bijoux en or portés sont-ils soumis à la Zakāt ?",
    a: "C'est un point de divergence réelle entre savants. Les écoles mālikite, shāfiʿite et la position dominante ḥanbalite exemptent les bijoux portés à usage personnel. L'école ḥanafite impose la Zakāt sur tous les bijoux en or et argent, portés ou non. Shaykh Ibn Bāz رحمه الله et Shaykh Ibn al-ʿUthaymīn رحمه الله concluent, par précaution, que la Zakāt est due sur les bijoux portés — en se fondant sur le ḥadīth des deux femmes aux bracelets d'or (Abu Dāwūd n° 1563 ; At-Tirmidhī n° 637). En l'absence de consensus, il est recommandé de se prononcer par précaution (iḥtiyāṭ) ou de consulter un érudit de confiance.",
  },
  {
    q: "Un enfant mineur doit-il payer la Zakāt ?",
    a: "La majorité des savants (mālikites, shāfiʿites, ḥanbalites) ainsi que Shaykh Ibn Bāz رحمه الله, Shaykh Ibn al-ʿUthaymīn رحمه الله et la Lajnah ad-Dāʾimah estiment que la Zakāt est due sur la richesse d'un enfant mineur. Le tuteur légal (wālī) s'en acquitte en son nom. L'argument central : la Zakāt est un droit des pauvres sur la richesse elle-même (ḥaqq fī l-māl), pas uniquement une obligation personnelle liée à la maturité religieuse. L'école ḥanafite dispense les mineurs en l'absence de taklīf, mais c'est l'avis minoritaire parmi les savants contemporains de référence.",
  },
  {
    q: "Dois-je maintenir le niṣāb pendant toute l'année ?",
    a: "Oui. Pour que la Zakāt soit due, votre patrimoine zakātable net doit être supérieur au niṣāb au début du ḥawl et à la fin du ḥawl (année lunaire complète, environ 354 jours). Si votre patrimoine passe sous le niṣāb en cours d'année, le ḥawl recommence à partir du moment où il dépasse à nouveau le niṣāb. Il n'est pas nécessaire que le patrimoine soit exactement au même niveau tout au long de l'année — ce qui compte ce sont les deux extrémités : début et fin du ḥawl.",
  },
  {
    q: "Je reçois des aides sociales (RSA, APL) — suis-je assujetti à la Zakāt ?",
    a: "Dans la très grande majorité des cas : non. Les aides sociales sont des prestations de subsistance qui ne génèrent généralement pas une épargne atteignant le niṣāb. Si vous ne disposez pas d'un patrimoine zakātable net supérieur au niṣāb, vous n'avez pas de Zakāt à payer. À l'inverse, vous pourriez vous-même être éligible à recevoir la Zakāt au titre des fuqarā' ou masākīn — la Zakāt est pour vous un droit, pas une obligation.",
  },
  {
    q: "Je viens de me convertir à l'Islam — quand commence mon obligation de Zakāt ?",
    a: "Votre ḥawl (année lunaire) commence le jour de votre shahāda. Aucune Zakāt n'est due rétroactivement sur des richesses accumulées avant votre conversion. Si au jour de votre shahāda vous possédez déjà un patrimoine dépassant le niṣāb, le ḥawl commence immédiatement. La Zakāt sera due un an lunaire plus tard, si votre patrimoine est toujours supérieur au niṣāb à cette date.",
  },
  {
    q: "Peut-on déduire le solde d'un crédit immobilier avant de calculer la Zakāt ?",
    a: "Non, pas dans son intégralité. Selon Shaykh Ibn al-ʿUthaymīn رحمه الله, seules les dettes exigibles à court terme sont déductibles — pas la totalité du capital restant dû sur un prêt immobilier sur 20 ou 25 ans. En pratique : si vous avez 30 000 € d'épargne et un crédit immobilier dont il reste 150 000 € à rembourser, vous ne déduisez pas 150 000 €. Vous déduisez uniquement les mensualités dues à court terme. La Zakāt reste donc due si votre épargne nette (après déduction des mensualités courantes) dépasse le niṣāb.",
  },
  {
    q: "La Zakāt est-elle due sur un plan épargne-retraite (PER) que je ne peux pas débloquer ?",
    a: "Ce cas touche à la notion de milk at-taṣarruf — la liberté de disposition du bien. Certains savants estiment qu'en l'absence de libre disposition, la Zakāt n'est pas due immédiatement. D'autres considèrent qu'elle est due chaque année, car la propriété juridique reste entière. Une position intermédiaire recommande de payer la Zakāt des années écoulées au moment du déblocage, en une seule fois. Ce cas spécifique mérite la consultation d'un érudit qualifié eu égard à la diversité des produits d'épargne existants.",
  },
  {
    q: "Suis-je obligé de payer la Zakāt si je suis étudiant sans revenu ?",
    a: "Le statut d'étudiant n'a aucune pertinence sur l'obligation en lui-même. Ce qui compte, c'est votre patrimoine zakātable net. Si vous ne possédez aucune épargne ni aucun bien zakātable dépassant le niṣāb, la Zakāt n'est pas due. Si en revanche vous avez reçu un héritage ou disposez d'une épargne dépassant le niṣāb depuis plus d'un an lunaire, la Zakāt est due indépendamment de votre situation professionnelle.",
  },
  {
    q: "Les femmes sont-elles exemptées de l'obligation de Zakāt ?",
    a: "Non — il n'existe aucune exemption basée sur le sexe. Les femmes et les hommes sont également assujettis à la Zakāt. Si une femme possède un patrimoine zakātable dépassant le niṣāb depuis plus d'un an lunaire, la Zakāt lui est obligatoire. Le ḥadīth rapporté par Abu Dāwūd et At-Tirmidhī montre explicitement le Prophète ﷺ s'adressant à deux femmes portant des bracelets d'or et leur rappelant l'obligation de la Zakāt.",
  },
];

export default function QuiDoitPayerLaZakatPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline:
          "Qui doit payer la Zakāt al-Māl ? Conditions et cas pratiques",
        description:
          "Les 5 conditions d'obligation de la Zakāt selon Ahl as-Sunnah wa-l-Jamāʿah et les cas pratiques : femmes, enfants, endettés, convertis, salariés.",
        url: "https://zakatfacile.fr/qui-doit-payer-la-zakat",
        inLanguage: "fr-FR",
        author: {
          "@type": "Organization",
          name: "zakatfacile.fr",
        },
        datePublished: "2026-06-16",
        dateModified: "2026-06-16",
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
              Qui doit payer la Zakāt al-Māl ?
              <br />
              Les conditions de l&apos;obligation
            </h1>
            <p className="text-[16px] text-neutral-600 leading-relaxed">
              La Zakāt al-Māl n&apos;est pas due par tous les musulmans — elle
              est conditionnée à la réunion de plusieurs critères précis. Les
              savants s&apos;accordent sur cinq conditions fondamentales, avec
              quelques divergences réelles sur des points spécifiques. Cette page
              présente ces conditions, les preuves coraniques et prophétiques, les
              avis des savants de Ahl as-Sunnah wa-l-Jamāʿah, et les réponses aux
              cas pratiques les plus fréquents dans le contexte francophone.
            </p>
          </header>

          {/* ── Vérification rapide ──────────────────────────────── */}
          <div className="rounded-[14px] border border-brand-200 bg-brand-50 p-6 space-y-4">
            <p className="text-[12px] font-semibold uppercase tracking-widest text-brand-600">
              Vérifiez en 30 secondes
            </p>
            <p className="text-[16px] font-semibold text-neutral-900">
              Êtes-vous assujetti à la Zakāt al-Māl ?
            </p>
            <div className="space-y-3">
              {[
                "Êtes-vous musulman(e) ?",
                "Votre patrimoine zakātable net dépasse-t-il le niṣāb (≈ valeur de 85 g d'or) ?",
                "Ce patrimoine est-il maintenu depuis plus d'une année lunaire complète (ḥawl) ?",
              ].map((q, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-600 text-white text-[12px] font-bold flex items-center justify-center mt-0.5">
                    {i + 1}
                  </span>
                  <p className="text-[14px] text-neutral-700 leading-relaxed">{q}</p>
                </div>
              ))}
            </div>
            <p className="text-[14px] text-neutral-600 leading-relaxed">
              Si vous répondez <strong>oui</strong> aux trois questions, la
              Zakāt al-Māl vous est en principe obligatoire. Calculez votre
              montant exact ci-dessous.
            </p>
            <Link
              href="/calculateur"
              className="inline-flex items-center gap-2 rounded-[10px] bg-brand-600 text-white text-[14px] font-semibold px-5 py-2.5 transition-opacity hover:opacity-90"
            >
              Calculer ma Zakāt →
            </Link>
          </div>

          {/* ── Les 5 conditions ─────────────────────────────────── */}
          <section className="space-y-6">
            <h2 className="text-[22px] font-semibold text-neutral-900">
              Les cinq conditions de l&apos;obligation (shurūṭ wujūb az-Zakāt)
            </h2>
            <p className="text-[15px] text-neutral-700 leading-relaxed">
              Les savants classiques et contemporains s&apos;accordent sur ces
              cinq conditions fondamentales. Certaines font l&apos;objet
              d&apos;un consensus absolu (ijmāʿ) ; d&apos;autres donnent lieu
              à des divergences réelles entre les écoles jurisprudentielles,
              signalées explicitement.
            </p>

            <div className="space-y-4">

              {/* ── 1. Islam ─────────────────────────────────── */}
              <div className="rounded-[14px] border border-neutral-200 bg-white p-5 space-y-4">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-600 text-white text-[13px] font-bold flex items-center justify-center mt-0.5">
                    1
                  </span>
                  <div className="space-y-1">
                    <p className="text-[17px] font-bold text-neutral-900">
                      Être musulman(e) — al-Islām{" "}
                      <span lang="ar" dir="rtl" className="font-normal">
                        الإسْلَام
                      </span>
                    </p>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-green-50 text-green-700 border border-green-200">
                      Unanimité absolue
                    </span>
                  </div>
                </div>

                <div className="pl-12 space-y-4">
                  <div className="rounded-[10px] border border-brand-100 bg-brand-50 px-4 py-3 space-y-2">
                    <p className="text-[12px] font-semibold text-brand-700 uppercase tracking-wide">
                      Coran — At-Tawbah (9:103)
                    </p>
                    <p
                      className="text-[18px] leading-[2.2] text-neutral-900 text-right"
                      dir="rtl"
                      lang="ar"
                    >
                      خُذْ مِنْ أَمْوَالِهِمْ صَدَقَةً تُطَهِّرُهُمْ وَتُزَكِّيهِم بِهَا
                    </p>
                    <p className="text-[13px] text-neutral-600 italic">
                      « Prélève de leurs biens une aumône par laquelle tu les
                      purifies et les élèves. »
                    </p>
                    <p className="text-[12px] text-neutral-400">
                      Le pronom « leurs » (min amwālihim) désigne les musulmans
                      mentionnés dans le contexte immédiat du verset.
                    </p>
                  </div>

                  <div className="rounded-[10px] bg-neutral-50 border border-neutral-200 px-4 py-3 text-[13px] text-neutral-700 leading-relaxed">
                    Le Prophète ﷺ dit à Muʿādh ibn Jabal, l&apos;envoyant au
                    Yémen : « Informe-les qu&apos;Allah leur a rendu obligatoire
                    la Zakāt — prélevée sur les riches d&apos;entre eux et remise
                    aux pauvres d&apos;entre eux. »
                    <span className="text-neutral-400 ml-1">
                      (Al-Bukhārī n° 1395 ; Muslim n° 19)
                    </span>
                  </div>

                  <p className="text-[14px] text-neutral-700 leading-relaxed">
                    Le non-musulman n&apos;est pas redevable de la Zakāt dans la
                    vie d&apos;ici-bas. Cette condition est unanime dans toutes
                    les écoles — aucune divergence sur ce point.
                  </p>

                  <div className="rounded-[10px] bg-brand-50 border border-brand-100 px-4 py-3 text-[13px] text-brand-900">
                    <strong>Cas particulier — le converti :</strong> le ḥawl
                    commence le jour de la shahāda. Aucune Zakāt n&apos;est due
                    rétroactivement sur des richesses accumulées avant
                    l&apos;Islam.
                  </div>
                </div>
              </div>

              {/* ── 2. Niṣāb ─────────────────────────────────── */}
              <div className="rounded-[14px] border border-neutral-200 bg-white p-5 space-y-4">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-600 text-white text-[13px] font-bold flex items-center justify-center mt-0.5">
                    2
                  </span>
                  <div className="space-y-1">
                    <p className="text-[17px] font-bold text-neutral-900">
                      Posséder le niṣāb — milk an-niṣāb{" "}
                      <span lang="ar" dir="rtl" className="font-normal">
                        مِلْكُ النِّصَاب
                      </span>
                    </p>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-green-50 text-green-700 border border-green-200">
                      Unanimité — avec divergences sur la déduction des dettes
                    </span>
                  </div>
                </div>

                <div className="pl-12 space-y-4">
                  <div className="rounded-[10px] bg-neutral-50 border border-neutral-200 px-4 py-3 text-[13px] text-neutral-700 leading-relaxed">
                    Le Prophète ﷺ dit : « Il n&apos;y a pas de Zakāt sur les
                    biens inférieurs à cinq uqiyyah [d&apos;argent]. »
                    <span className="text-neutral-400 ml-1">
                      (Al-Bukhārī n° 1405 ; Muslim n° 979)
                    </span>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-3">
                    <div className="rounded-[10px] border border-neutral-200 bg-neutral-50 p-4 space-y-1 text-center">
                      <p className="text-[12px] font-semibold uppercase tracking-wide text-neutral-500">
                        Niṣāb en or
                      </p>
                      <p className="text-[24px] font-bold text-neutral-900">85 g</p>
                      <p className="text-[13px] text-neutral-500">
                        équivalent de 20 dīnārs
                      </p>
                    </div>
                    <div className="rounded-[10px] border border-neutral-200 bg-neutral-50 p-4 space-y-1 text-center">
                      <p className="text-[12px] font-semibold uppercase tracking-wide text-neutral-500">
                        Niṣāb en argent
                      </p>
                      <p className="text-[24px] font-bold text-neutral-900">595 g</p>
                      <p className="text-[13px] text-neutral-500">
                        équivalent de 200 dirhams
                      </p>
                    </div>
                  </div>

                  <p className="text-[14px] text-neutral-700 leading-relaxed">
                    On additionne l&apos;ensemble du patrimoine zakātable net
                    (liquidités, or, argent, placements, stocks commerciaux…) et
                    on compare le total au niṣāb. Ce n&apos;est pas actif par actif
                    — c&apos;est la valeur globale qui est comparée au seuil.
                  </p>

                  <Link
                    href="/nisab"
                    className="inline-flex items-center gap-1.5 text-[13px] font-medium text-brand-600 hover:text-brand-700 underline underline-offset-2 transition-colors"
                  >
                    Vérifier la valeur du niṣāb aujourd&apos;hui →
                  </Link>
                </div>
              </div>

              {/* ── 3. Ḥawl ─────────────────────────────────── */}
              <div className="rounded-[14px] border border-neutral-200 bg-white p-5 space-y-4">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-600 text-white text-[13px] font-bold flex items-center justify-center mt-0.5">
                    3
                  </span>
                  <div className="space-y-1">
                    <p className="text-[17px] font-bold text-neutral-900">
                      Écoulement d&apos;une année lunaire — ḥawl{" "}
                      <span lang="ar" dir="rtl" className="font-normal">
                        الحَوْل
                      </span>
                    </p>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-green-50 text-green-700 border border-green-200">
                      Unanimité — exception pour les récoltes et les minéraux
                    </span>
                  </div>
                </div>

                <div className="pl-12 space-y-4">
                  <div className="rounded-[10px] bg-neutral-50 border border-neutral-200 px-4 py-3 text-[13px] text-neutral-700 leading-relaxed">
                    « Il n&apos;y a pas de Zakāt sur un bien jusqu&apos;à ce
                    qu&apos;une année (ḥawl) se soit écoulée. »
                    <span className="text-neutral-400 ml-1">
                      (Abu Dāwūd n° 1573 ; Ibn Mājah n° 1792 — ḥadīth ḥasan,
                      rapporté via ʿAlī et ʿĀʾishah رضي الله عنهما)
                    </span>
                  </div>

                  <div className="space-y-2 text-[14px] text-neutral-700 leading-relaxed">
                    <p>
                      Le ḥawl est une année lunaire complète (environ 354 jours).
                      Il commence dès que le patrimoine zakātable atteint le
                      niṣāb. Si le patrimoine passe <em>sous</em> le niṣāb en
                      cours d&apos;année, le ḥawl recommence à zéro.
                    </p>
                    <p>
                      <strong>Exception unanime :</strong> les récoltes agricoles
                      et les produits miniers (rikāz) ne sont pas soumis au ḥawl
                      — la Zakāt est due à la récolte ou à l&apos;extraction.
                    </p>
                  </div>

                  <div className="rounded-[10px] bg-brand-50 border border-brand-100 px-4 py-3 text-[13px] text-brand-900">
                    <strong>Sur les bénéfices générés en cours d&apos;année :</strong>{" "}
                    Shaykh Ibn al-ʿUthaymīn رحمه الله recommande, par mesure de
                    facilitation (taysīr), de rattacher les nouvelles économies au
                    ḥawl du capital initial plutôt que de démarrer un ḥawl
                    distinct pour chaque entrée de fonds.{" "}
                    <span className="text-brand-700">
                      (Ash-Sharḥ al-Mumtiʿ, vol. 6)
                    </span>
                  </div>
                </div>
              </div>

              {/* ── 4. Pleine propriété ──────────────────────── */}
              <div className="rounded-[14px] border border-neutral-200 bg-white p-5 space-y-4">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-600 text-white text-[13px] font-bold flex items-center justify-center mt-0.5">
                    4
                  </span>
                  <div className="space-y-1">
                    <p className="text-[17px] font-bold text-neutral-900">
                      Pleine propriété — al-milk at-tāmm{" "}
                      <span lang="ar" dir="rtl" className="font-normal">
                        المِلْكُ التَّامّ
                      </span>
                    </p>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-green-50 text-green-700 border border-green-200">
                      Unanimité sur le principe — divergences sur les cas limites
                    </span>
                  </div>
                </div>

                <div className="pl-12 space-y-4">
                  <p className="text-[14px] text-neutral-700 leading-relaxed">
                    Pour que la Zakāt soit due, le propriétaire doit réunir deux
                    éléments : la propriété juridique du bien{" "}
                    <em>(milk ar-raqabah)</em> et la libre disposition de celui-ci{" "}
                    <em>(milk at-taṣarruf)</em>. En l&apos;absence de libre
                    disposition effective, l&apos;obligation peut être suspendue
                    ou différée.
                  </p>

                  <div className="overflow-x-auto rounded-[10px] border border-neutral-200">
                    <table className="w-full text-[13px]">
                      <thead>
                        <tr className="bg-neutral-50 border-b border-neutral-200">
                          <th className="text-left px-4 py-2.5 font-semibold text-neutral-700">
                            Situation
                          </th>
                          <th className="text-left px-4 py-2.5 font-semibold text-neutral-700">
                            Zakāt ?
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-neutral-100">
                        {[
                          {
                            s: "Créance sur un débiteur solvable",
                            z: "Oui — annuellement",
                            ok: true,
                          },
                          {
                            s: "Créance sur un débiteur insolvable",
                            z: "À la récupération",
                            ok: null,
                          },
                          {
                            s: "Bien volé ou perdu",
                            z: "Non",
                            ok: false,
                          },
                          {
                            s: "Plan épargne-retraite bloqué (PER, assurance-vie)",
                            z: "Divergence — voir ci-dessous",
                            ok: null,
                          },
                        ].map((row) => (
                          <tr key={row.s} className="bg-white even:bg-neutral-50">
                            <td className="px-4 py-3 text-neutral-700">
                              {row.s}
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
                                {row.z}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="rounded-[10px] bg-warning-50 border-l-[3px] border-warning-400 px-4 py-3 text-[13px] space-y-3">
                    <p className="font-semibold text-warning-700">
                      Plans épargne-retraite bloqués (PER, assurance-vie en phase
                      d&apos;épargne)
                    </p>
                    <p className="text-neutral-700">
                      Ces produits illustrent la tension entre{" "}
                      <em>milk ar-raqabah</em> (propriété juridique : le titulaire
                      est bien propriétaire) et <em>milk at-taṣarruf</em> (libre
                      disposition : il ne peut pas retirer les fonds avant
                      l&apos;échéance). Trois positions coexistent :
                    </p>
                    <ul className="space-y-2 text-neutral-700">
                      <li className="flex gap-2">
                        <span className="text-warning-600 font-bold shrink-0 mt-0.5">
                          ·
                        </span>
                        <span>
                          <strong>Pas de Zakāt avant déblocage :</strong>{" "}
                          l&apos;absence de libre disposition suspend
                          l&apos;obligation, comme pour une créance irrécouvrable.
                          La Zakāt sera due à la sortie des fonds.
                        </span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-warning-600 font-bold shrink-0 mt-0.5">
                          ·
                        </span>
                        <span>
                          <strong>Zakāt due chaque année :</strong> la propriété
                          juridique est entière ; la restriction d&apos;accès
                          temporaire ne fait pas disparaître l&apos;obligation.
                        </span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-warning-600 font-bold shrink-0 mt-0.5">
                          ·
                        </span>
                        <span>
                          <strong>Position intermédiaire :</strong> acquitter la
                          Zakāt des années écoulées au moment du déblocage, en une
                          seule fois — analogue aux créances finalement recouvrées.
                        </span>
                      </li>
                    </ul>
                    <p className="text-neutral-600">
                      La diversité des produits d&apos;épargne-retraite existants
                      (PER individuel, PER collectif, assurance-vie, PERP, Madelin…)
                      rend difficile toute réponse universelle. Ce cas mérite la
                      consultation d&apos;un érudit qualifié.
                    </p>
                  </div>
                </div>
              </div>

              {/* ── 5. Raison et puberté ─────────────────────── */}
              <div className="rounded-[14px] border border-neutral-200 bg-white p-5 space-y-4">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-600 text-white text-[13px] font-bold flex items-center justify-center mt-0.5">
                    5
                  </span>
                  <div className="space-y-1">
                    <p className="text-[17px] font-bold text-neutral-900">
                      Raison et puberté — al-ʿaql wa-l-bulūgh{" "}
                      <span lang="ar" dir="rtl" className="font-normal">
                        العَقْلُ وَالبُلُوغ
                      </span>
                    </p>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-yellow-50 text-yellow-700 border border-yellow-200">
                      Divergence réelle entre les écoles
                    </span>
                  </div>
                </div>

                <div className="pl-12 space-y-4">
                  <p className="text-[14px] text-neutral-700 leading-relaxed">
                    La question se pose pour les <strong>enfants mineurs</strong>{" "}
                    et les personnes privées de raison (maǧnūn) qui possèdent un
                    patrimoine zakātable. Deux positions s&apos;affrontent depuis
                    les premiers temps de la jurisprudence islamique.
                  </p>

                  <div className="rounded-[10px] bg-green-50 border border-green-200 px-4 py-4 space-y-3 text-[13px]">
                    <p className="font-semibold text-green-800 text-[14px]">
                      Position de la majorité : la Zakāt est due sur les biens
                      des mineurs
                    </p>
                    <p className="text-neutral-700">
                      Les écoles mālikite, shāfiʿite et ḥanbalite estiment que
                      la Zakāt est due sur la richesse d&apos;un enfant mineur
                      ou d&apos;une personne privée de raison. Le tuteur légal{" "}
                      <em>(wālī)</em> s&apos;en acquitte en son nom.
                    </p>
                    <p className="text-neutral-700">
                      <strong>Argument central :</strong> la Zakāt est un{" "}
                      <em>ḥaqq fī l-māl</em> — un droit des pauvres inscrit dans
                      la richesse elle-même, indépendamment de la maturité
                      religieuse du propriétaire. Ce droit n&apos;est pas une
                      obligation personnelle conditionnée au taklīf ; il est attaché
                      au bien, pas à la personne.
                    </p>
                    <div className="space-y-2 border-t border-green-200 pt-3">
                      <p className="text-neutral-700">
                        <strong>Shaykh Ibn Bāz رحمه الله :</strong> « La Zakāt
                        est due sur la richesse de l&apos;enfant mineur, et
                        c&apos;est son wālī qui doit s&apos;en acquitter en son
                        nom. »{" "}
                        <span className="text-neutral-400">
                          (Majmūʿ Fatāwā Ibn Bāz, vol. 14)
                        </span>
                      </p>
                      <p className="text-neutral-700">
                        <strong>Shaykh Ibn al-ʿUthaymīn رحمه الله :</strong>{" "}
                        confirme cette position — la Zakāt est un droit objectif
                        sur la richesse qui s&apos;impose quelle que soit la
                        puberté du propriétaire.{" "}
                        <span className="text-neutral-400">
                          (Ash-Sharḥ al-Mumtiʿ, vol. 6)
                        </span>
                      </p>
                      <p className="text-neutral-700">
                        <strong>La Lajnah ad-Dāʾimah :</strong> confirme la
                        position de la majorité.{" "}
                        <span className="text-neutral-400">
                          (Fatāwā al-Lajnah, vol. 9)
                        </span>
                      </p>
                    </div>
                  </div>

                  <div className="rounded-[10px] bg-neutral-50 border border-neutral-200 px-4 py-4 space-y-2 text-[13px]">
                    <p className="font-semibold text-neutral-800 text-[14px]">
                      Position ḥanafite : la Zakāt n&apos;est pas due sur les
                      biens des mineurs
                    </p>
                    <p className="text-neutral-700">
                      L&apos;école ḥanafite considère que la Zakāt est une ibāda
                      (acte d&apos;adoration) conditionnée au taklīf — la
                      responsabilité religieuse qui s&apos;acquiert à la puberté.
                      Les enfants et les personnes privées de raison ne sont pas
                      mukallifūn (religieusement responsables). La Zakāt
                      n&apos;est donc pas due sur leurs biens selon cet avis.
                    </p>
                  </div>

                  <div className="rounded-[10px] bg-warning-50 border-l-[3px] border-warning-400 px-4 py-3 text-[13px] text-neutral-700">
                    <strong className="text-warning-700">Point de méthode :</strong>{" "}
                    cette divergence est réelle et ancienne. La position de la
                    majorité des savants contemporains de référence — Ibn Bāz,
                    Ibn al-ʿUthaymīn et la Lajnah ad-Dāʾimah — tranche en faveur
                    de l&apos;obligation sur les biens des mineurs. Cette page ne
                    prétend pas rendre de fatwa : pour toute situation impliquant
                    des biens importants appartenant à un mineur, la consultation
                    d&apos;un érudit qualifié reste recommandée.
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ── Tableau récap conditions ──────────────────────────── */}
          <section className="space-y-4">
            <h2 className="text-[22px] font-semibold text-neutral-900">
              Synthèse des conditions
            </h2>
            <div className="overflow-x-auto rounded-[14px] border border-neutral-200">
              <table className="w-full text-[13px]">
                <thead>
                  <tr className="bg-neutral-50 border-b border-neutral-200">
                    <th className="text-left px-4 py-3 font-semibold text-neutral-700">
                      Condition
                    </th>
                    <th className="text-left px-4 py-3 font-semibold text-neutral-700">
                      Consensus ?
                    </th>
                    <th className="text-left px-4 py-3 font-semibold text-neutral-700 hidden sm:table-cell">
                      Précision
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-100">
                  {[
                    {
                      cond: "Être musulman(e)",
                      ok: true,
                      label: "Unanime",
                      note: "Aucune divergence entre les écoles",
                    },
                    {
                      cond: "Posséder le niṣāb",
                      ok: true,
                      label: "Unanime",
                      note: "Divergence sur la déduction des dettes",
                    },
                    {
                      cond: "Écoulement du ḥawl (1 an lunaire)",
                      ok: true,
                      label: "Unanime",
                      note: "Exception : récoltes agricoles et minéraux",
                    },
                    {
                      cond: "Pleine propriété (milk at-tāmm)",
                      ok: true,
                      label: "Unanime — principe",
                      note: "Divergence sur les créances et biens bloqués",
                    },
                    {
                      cond: "Raison et puberté",
                      ok: null,
                      label: "Divergence",
                      note: "Majorité + Ibn Bāz + Lajnah : due. Ḥanafites : non.",
                    },
                  ].map((row) => (
                    <tr key={row.cond} className="bg-white even:bg-neutral-50">
                      <td className="px-4 py-3 text-neutral-800 font-medium">
                        {row.cond}
                      </td>
                      <td className="px-4 py-3">
                        <span
                          className={`inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold ${
                            row.ok === true
                              ? "bg-green-50 text-green-700 border border-green-200"
                              : "bg-yellow-50 text-yellow-700 border border-yellow-200"
                          }`}
                        >
                          {row.label}
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
          </section>

          {/* ── Tableau rapide par situation ─────────────────────── */}
          <section className="space-y-4">
            <h2 className="text-[22px] font-semibold text-neutral-900">
              Réponse rapide selon votre situation
            </h2>
            <p className="text-[14px] text-neutral-600 leading-relaxed">
              Ce tableau donne une réponse indicative selon des profils types.
              Les lignes supposent que le ḥawl est complété, sauf mention
              contraire. Pour les cas complexes, consultez un érudit.
            </p>
            <div className="overflow-x-auto rounded-[14px] border border-neutral-200">
              <table className="w-full text-[13px]">
                <thead>
                  <tr className="bg-neutral-50 border-b border-neutral-200">
                    <th className="text-left px-4 py-3 font-semibold text-neutral-700">
                      Situation
                    </th>
                    <th className="text-left px-4 py-3 font-semibold text-neutral-700">
                      Zakāt obligatoire ?
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-100">
                  {[
                    {
                      s: "Femme avec patrimoine net supérieur au niṣāb",
                      z: "Oui",
                      ok: true,
                    },
                    {
                      s: "Homme avec patrimoine net supérieur au niṣāb",
                      z: "Oui",
                      ok: true,
                    },
                    {
                      s: "Personne âgée avec épargne supérieure au niṣāb",
                      z: "Oui",
                      ok: true,
                    },
                    {
                      s: "Retraité avec épargne ou placements supérieurs au niṣāb",
                      z: "Oui",
                      ok: true,
                    },
                    {
                      s: "Salarié dont l'épargne accumulée dépasse le niṣāb",
                      z: "Oui",
                      ok: true,
                    },
                    {
                      s: "Étudiant avec héritage ou épargne supérieure au niṣāb",
                      z: "Oui",
                      ok: true,
                    },
                    {
                      s: "Étudiant sans épargne ni patrimoine zakātable",
                      z: "Non",
                      ok: false,
                    },
                    {
                      s: "Mineur riche — position de la majorité (Ibn Bāz, Ibn al-ʿUthaymīn, Lajnah)",
                      z: "Oui — wālī s'acquitte",
                      ok: true,
                    },
                    {
                      s: "Mineur riche — position ḥanafite",
                      z: "Non",
                      ok: false,
                    },
                    {
                      s: "Converti récent avec patrimoine supérieur au niṣāb le jour de la shahāda",
                      z: "Oui — ḥawl débute ce jour",
                      ok: true,
                    },
                    {
                      s: "Personne endettée : dettes exigibles supérieures au patrimoine zakātable",
                      z: "Non",
                      ok: false,
                    },
                    {
                      s: "Personne endettée : épargne nette (après dettes courtes) supérieure au niṣāb",
                      z: "Oui",
                      ok: true,
                    },
                    {
                      s: "Bénéficiaire RSA ou aides sociales sans autre patrimoine",
                      z: "Non",
                      ok: false,
                    },
                    {
                      s: "Non-musulman",
                      z: "Non",
                      ok: false,
                    },
                    {
                      s: "Patrimoine zakātable inférieur au niṣāb",
                      z: "Non",
                      ok: false,
                    },
                    {
                      s: "Ḥawl non complété (patrimoine au niṣāb depuis moins d'un an)",
                      z: "Non",
                      ok: false,
                    },
                  ].map((row) => (
                    <tr key={row.s} className="bg-white even:bg-neutral-50">
                      <td className="px-4 py-3 text-neutral-700">{row.s}</td>
                      <td className="px-4 py-3">
                        <span
                          className={`inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold ${
                            row.ok === true
                              ? "bg-green-50 text-green-700 border border-green-200"
                              : "bg-red-50 text-red-700 border border-red-200"
                          }`}
                        >
                          {row.z}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* ── Cas pratiques ────────────────────────────────────── */}
          <section className="space-y-6">
            <h2 className="text-[22px] font-semibold text-neutral-900">
              Les cas pratiques fréquents
            </h2>

            {/* Femmes */}
            <div className="rounded-[14px] border border-neutral-200 bg-white p-5 space-y-4">
              <h3 className="text-[17px] font-semibold text-neutral-900">
                Les femmes doivent-elles payer la Zakāt ?
              </h3>
              <div className="space-y-4 text-[14px] text-neutral-700 leading-relaxed">
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[12px] font-semibold bg-green-50 text-green-700 border border-green-200">
                    Oui — unanimité absolue
                  </span>
                </div>
                <p>
                  Il n&apos;existe aucune distinction entre hommes et femmes dans
                  l&apos;obligation de la Zakāt. Toute femme possédant un
                  patrimoine zakātable dépassant le niṣāb depuis un ḥawl complet
                  est pleinement assujettie.
                </p>
                <div className="rounded-[10px] bg-neutral-50 border border-neutral-200 px-4 py-3 text-[13px] text-neutral-700 leading-relaxed">
                  Deux femmes vinrent voir le Prophète ﷺ portant des bracelets
                  d&apos;or. Il leur dit : « Voulez-vous qu&apos;Allah vous revête
                  de bracelets de feu le Jour du Jugement ? » Elles dirent :
                  « Non. » Il dit : « Acquittez-vous alors de la Zakāt sur ces
                  biens. »
                  <span className="text-neutral-400 ml-1">
                    (Abu Dāwūd n° 1563 ; At-Tirmidhī n° 637 — ḥadīth ḥasan)
                  </span>
                </div>

                {/* Bijoux portés */}
                <div className="rounded-[10px] bg-warning-50 border-l-[3px] border-warning-400 px-4 py-4 space-y-4 text-[13px]">
                  <p className="font-semibold text-warning-700 text-[14px]">
                    Cas particulier : les bijoux portés — divergence entre les quatre
                    écoles
                  </p>

                  <div className="space-y-2">
                    <div className="rounded-[8px] bg-white border border-neutral-200 px-3 py-3 space-y-1">
                      <p className="font-semibold text-neutral-800">
                        École ḥanafite :
                      </p>
                      <p className="text-neutral-700">
                        La Zakāt est due sur tous les bijoux en or et en argent,
                        qu&apos;ils soient portés ou non. Argument textuel : les
                        ḥadīths visent la possession de l&apos;or et de
                        l&apos;argent sans distinction d&apos;usage.
                      </p>
                    </div>

                    <div className="rounded-[8px] bg-white border border-neutral-200 px-3 py-3 space-y-1">
                      <p className="font-semibold text-neutral-800">
                        Écoles mālikite, shāfiʿite et position dominante ḥanbalite :
                      </p>
                      <p className="text-neutral-700">
                        Les bijoux portés à usage personnel (ornement licite) sont
                        exemptés de Zakāt. Argument : l&apos;usage comme parure
                        change la nature du bien — il n&apos;est plus un capital
                        accumulé mais un bien de consommation personnelle, similaire
                        aux vêtements ou au mobilier.
                      </p>
                    </div>

                    <div className="rounded-[8px] bg-green-50 border border-green-200 px-3 py-3 space-y-2">
                      <p className="font-semibold text-green-800">
                        Shaykh Ibn Bāz رحمه الله et Shaykh Ibn al-ʿUthaymīn رحمه الله :
                      </p>
                      <p className="text-neutral-700">
                        Les deux shaykhs concluent, par précaution{" "}
                        <em>(iḥtiyāṭ)</em>, que la Zakāt est due sur les bijoux
                        portés. Ils s&apos;appuient notamment sur le ḥadīth des
                        bracelets (Abu Dāwūd, At-Tirmidhī) qui ne distingue pas
                        selon l&apos;usage, et sur le ḥadīth d&apos;ʿĀʾishah
                        rapporté par Abu Dāwūd sur la Zakāt des bijoux.{" "}
                        <span className="text-neutral-400">
                          (Majmūʿ Fatāwā Ibn Bāz, vol. 14 ; Ash-Sharḥ al-Mumtiʿ,
                          vol. 6)
                        </span>
                      </p>
                    </div>
                  </div>

                  <p className="text-neutral-600">
                    Cette divergence est réelle et cette page ne la tranche pas.
                    Par précaution, de nombreux musulmans francophones choisissent
                    d&apos;inclure leurs bijoux dans leur patrimoine zakātable en
                    suivant l&apos;avis d&apos;Ibn Bāz et d&apos;Ibn al-ʿUthaymīn.
                  </p>
                </div>
              </div>
            </div>

            {/* Enfants / mineurs */}
            <div className="rounded-[14px] border border-neutral-200 bg-white p-5 space-y-4">
              <h3 className="text-[17px] font-semibold text-neutral-900">
                Les enfants et les mineurs doivent-ils payer la Zakāt ?
              </h3>
              <div className="space-y-3 text-[14px] text-neutral-700 leading-relaxed">
                <p>
                  Cette question se pose notamment pour les enfants ayant hérité
                  ou reçu des donations importantes. La condition 5 développe
                  l&apos;argumentaire complet ; voici la synthèse pratique.
                </p>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[12px] font-semibold bg-green-50 text-green-700 border border-green-200 shrink-0">
                      Majorité + Ibn Bāz + Lajnah
                    </span>
                    <p className="ml-1">
                      Zakāt due. Le tuteur (wālī) s&apos;en acquitte en son nom.
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[12px] font-semibold bg-neutral-100 text-neutral-600 border border-neutral-200 shrink-0">
                      Ḥanafites
                    </span>
                    <p className="ml-1">
                      Zakāt non due (absence de taklīf).
                    </p>
                  </div>
                </div>
                <p className="text-[13px] text-neutral-500">
                  En pratique : si votre enfant a reçu un héritage substantiel
                  dépassant le niṣāb, la position recommandée par les savants
                  de référence contemporains est de s&apos;acquitter de la Zakāt
                  en son nom.
                </p>
              </div>
            </div>

            {/* Personnes endettées */}
            <div className="rounded-[14px] border border-neutral-200 bg-white p-5 space-y-5">
              <h3 className="text-[17px] font-semibold text-neutral-900">
                Les personnes endettées doivent-elles payer la Zakāt ?
              </h3>
              <div className="space-y-4 text-[14px] text-neutral-700 leading-relaxed">
                <p>
                  L&apos;endettement n&apos;exempte pas automatiquement de la
                  Zakāt. La réponse dépend du montant de la dette, de son
                  exigibilité immédiate, et du patrimoine net restant après
                  déduction.
                </p>

                <div className="rounded-[10px] bg-brand-50 border border-brand-100 px-4 py-3 text-[13px] text-brand-900 space-y-1">
                  <p className="font-semibold">
                    Règle générale (position de la majorité — mālikites, ḥanbalites) :
                  </p>
                  <p>
                    Les dettes <strong>exigibles à court terme</strong> se
                    déduisent du patrimoine zakātable avant de vérifier si le
                    niṣāb est atteint. Si le patrimoine net (épargne − dettes
                    exigibles) reste supérieur au niṣāb, la Zakāt est due sur
                    ce montant net.
                  </p>
                </div>

                {/* Exemples chiffrés */}
                <div className="space-y-3">
                  <p className="font-semibold text-neutral-800">
                    Exemples pratiques :
                  </p>

                  <div className="rounded-[10px] border border-green-200 bg-green-50 p-4 space-y-1.5 text-[13px]">
                    <p className="font-semibold text-green-800">
                      Exemple 1 — Zakāt due
                    </p>
                    <ul className="space-y-1 text-neutral-700">
                      <li>Épargne : 20 000 €</li>
                      <li>Dettes exigibles à court terme : 5 000 €</li>
                      <li>
                        Patrimoine zakātable net : 20 000 − 5 000 ={" "}
                        <strong>15 000 €</strong>
                      </li>
                      <li>Niṣāb (hypothèse) : 8 000 €</li>
                      <li className="text-green-700 font-semibold pt-1">
                        → 15 000 € &gt; niṣāb → Zakāt due sur 15 000 €
                      </li>
                    </ul>
                  </div>

                  <div className="rounded-[10px] border border-red-200 bg-red-50 p-4 space-y-1.5 text-[13px]">
                    <p className="font-semibold text-red-800">
                      Exemple 2 — Zakāt non due
                    </p>
                    <ul className="space-y-1 text-neutral-700">
                      <li>Épargne : 10 000 €</li>
                      <li>Dettes exigibles à court terme : 7 000 €</li>
                      <li>
                        Patrimoine zakātable net : 10 000 − 7 000 ={" "}
                        <strong>3 000 €</strong>
                      </li>
                      <li>Niṣāb (hypothèse) : 8 000 €</li>
                      <li className="text-red-700 font-semibold pt-1">
                        → 3 000 € &lt; niṣāb → Zakāt non due
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Crédit immobilier */}
                <div className="rounded-[10px] bg-warning-50 border-l-[3px] border-warning-400 px-4 py-4 text-[13px] space-y-3">
                  <p className="font-semibold text-warning-700 text-[14px]">
                    Cas particulier : le crédit immobilier
                  </p>
                  <p className="text-neutral-700">
                    Le solde total d&apos;un crédit immobilier sur 20 ou 25 ans
                    ne se déduit pas dans son intégralité. Shaykh Ibn al-ʿUthaymīn
                    رحمه الله précise que seules les{" "}
                    <strong>dettes exigibles à court terme</strong> sont
                    déductibles — pas le capital restant dû sur toute la durée du
                    prêt. La logique est celle du ḥawl : on ne peut déduire que
                    ce qui est effectivement dû maintenant, pas des engagements
                    futurs.{" "}
                    <span className="text-neutral-400">
                      (Ash-Sharḥ al-Mumtiʿ, vol. 6)
                    </span>
                  </p>

                  <div className="rounded-[8px] border border-neutral-200 bg-white p-4 space-y-1.5 text-neutral-700">
                    <p className="font-semibold text-neutral-800">
                      Exemple — Crédit immobilier :
                    </p>
                    <ul className="space-y-1">
                      <li>Épargne liquide : 30 000 €</li>
                      <li>
                        Solde total restant dû sur le crédit immobilier : 150 000 €
                      </li>
                      <li>
                        Mensualités exigibles dans les prochains mois : ≈ 1 200 €
                      </li>
                      <li className="text-neutral-500 italic">
                        On ne déduit pas 150 000 € — on déduit les mensualités
                        exigibles à court terme.
                      </li>
                      <li>
                        Patrimoine net : 30 000 − 1 200 ={" "}
                        <strong>28 800 €</strong>
                      </li>
                      <li className="text-brand-700 font-semibold pt-1">
                        → 28 800 € &gt; niṣāb → Zakāt due sur 28 800 €
                      </li>
                    </ul>
                  </div>

                  <p className="text-[12px] text-neutral-500">
                    Note : la licéité du crédit à intérêt est une question
                    distincte que cette page ne traite pas. Ce raisonnement porte
                    uniquement sur la méthode de calcul de la Zakāt dans le cas
                    où un crédit existe.
                  </p>
                </div>
              </div>
            </div>

            {/* Salariés */}
            <div className="rounded-[14px] border border-neutral-200 bg-white p-5 space-y-3">
              <h3 className="text-[17px] font-semibold text-neutral-900">
                Les salariés doivent-ils payer la Zakāt ?
              </h3>
              <div className="space-y-3 text-[14px] text-neutral-700 leading-relaxed">
                <p>
                  Le salaire mensuel n&apos;est pas zakātable à la réception.
                  C&apos;est <strong>l&apos;épargne accumulée</strong> qui entre
                  dans le calcul du patrimoine zakātable. Si les économies
                  dépassent le niṣāb depuis un ḥawl complet, la Zakāt est due.
                </p>
                <div className="rounded-[10px] bg-brand-50 border border-brand-100 px-4 py-3 text-[13px] text-brand-900">
                  Shaykh Ibn al-ʿUthaymīn رحمه الله recommande, par mesure de
                  facilitation, de choisir une date anniversaire annuelle et de
                  calculer l&apos;ensemble de l&apos;épargne accumulée à cette
                  date — sans démarrer un ḥawl distinct pour chaque versement
                  mensuel.{" "}
                  <span className="text-brand-700">
                    (Ash-Sharḥ al-Mumtiʿ, vol. 6)
                  </span>
                </div>
              </div>
            </div>

            {/* Retraités */}
            <div className="rounded-[14px] border border-neutral-200 bg-white p-5 space-y-3">
              <h3 className="text-[17px] font-semibold text-neutral-900">
                Les retraités doivent-ils payer la Zakāt ?
              </h3>
              <div className="space-y-2 text-[14px] text-neutral-700 leading-relaxed">
                <p>
                  L&apos;âge ou le statut de retraité n&apos;exempte pas de la
                  Zakāt. Si un retraité possède un patrimoine zakātable (épargne,
                  placements, or…) supérieur au niṣāb depuis un ḥawl complet,
                  la Zakāt est due.
                </p>
                <p>
                  La pension de retraite mensuelle n&apos;est pas zakātable à la
                  réception — seule l&apos;épargne accumulée l&apos;est. Pour les
                  plans épargne-retraite bloqués (PER, assurance-vie en phase
                  d&apos;épargne), voir la condition 4 ci-dessus.
                </p>
              </div>
            </div>

            {/* Étudiants */}
            <div className="rounded-[14px] border border-neutral-200 bg-white p-5 space-y-3">
              <h3 className="text-[17px] font-semibold text-neutral-900">
                Les étudiants doivent-ils payer la Zakāt ?
              </h3>
              <div className="space-y-2 text-[14px] text-neutral-700 leading-relaxed">
                <p>
                  Le statut d&apos;étudiant n&apos;a aucune incidence sur
                  l&apos;obligation. Ce qui compte, c&apos;est le patrimoine
                  zakātable :
                </p>
                <ul className="space-y-2 mt-1">
                  <li className="flex gap-2">
                    <span className="text-red-500 font-bold shrink-0 mt-0.5">·</span>
                    <span>
                      Étudiant sans épargne ni patrimoine zakātable dépassant le
                      niṣāb → <strong>aucune Zakāt due.</strong>
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-brand-600 font-bold shrink-0 mt-0.5">
                      ·
                    </span>
                    <span>
                      Étudiant ayant hérité ou disposant d&apos;une épargne
                      dépassant le niṣāb depuis un ḥawl complet →{" "}
                      <strong>Zakāt due.</strong>
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Convertis */}
            <div className="rounded-[14px] border border-neutral-200 bg-white p-5 space-y-3">
              <h3 className="text-[17px] font-semibold text-neutral-900">
                Les convertis : quand commence l&apos;obligation de Zakāt ?
              </h3>
              <div className="space-y-3 text-[14px] text-neutral-700 leading-relaxed">
                <p>
                  Le ḥawl commence le jour de la shahāda. Aucune Zakāt
                  n&apos;est due rétroactivement sur des richesses accumulées
                  avant l&apos;Islam.
                </p>
                <p>
                  Si le converti possède déjà un patrimoine zakātable dépassant
                  le niṣāb le jour de sa conversion, la Zakāt sera due un an
                  lunaire plus tard — si ce patrimoine est toujours supérieur au
                  niṣāb à cette date anniversaire.
                </p>
                <div className="rounded-[10px] bg-brand-50 border border-brand-100 px-4 py-3 text-[13px] text-brand-900">
                  Note : le nouveau converti peut aussi être éligible à{" "}
                  <em>recevoir</em> la Zakāt au titre de la catégorie{" "}
                  <em>al-muʾallafatu qulūbuhum</em> (ceux dont les cœurs sont à
                  affermir dans l&apos;Islam) —{" "}
                  <Link
                    href="/beneficiaires-zakat"
                    className="underline text-brand-700 hover:text-brand-800"
                  >
                    voir les bénéficiaires de la Zakāt
                  </Link>
                  .
                </div>
              </div>
            </div>

            {/* Aides sociales */}
            <div className="rounded-[14px] border border-neutral-200 bg-white p-5 space-y-3">
              <h3 className="text-[17px] font-semibold text-neutral-900">
                Les bénéficiaires d&apos;aides sociales (RSA, APL…)
                doivent-ils payer la Zakāt ?
              </h3>
              <div className="space-y-3 text-[14px] text-neutral-700 leading-relaxed">
                <p>
                  Dans la très grande majorité des cas :{" "}
                  <strong>la Zakāt n&apos;est pas due.</strong> Les aides sociales
                  sont des prestations de subsistance qui ne génèrent généralement
                  pas une épargne atteignant le niṣāb. Sans patrimoine zakātable
                  net supérieur au niṣāb, aucune obligation.
                </p>
                <p>
                  À l&apos;inverse, une personne dans cette situation est souvent
                  elle-même éligible à <em>recevoir</em> la Zakāt au titre des{" "}
                  <em>fuqarā&apos;</em> (pauvres) ou <em>masākīn</em> (nécessiteux).
                  La Zakāt est pour elle un droit, pas une obligation.
                </p>
                <Link
                  href="/beneficiaires-zakat"
                  className="inline-flex items-center gap-1.5 text-[13px] font-medium text-brand-600 hover:text-brand-700 underline underline-offset-2 transition-colors"
                >
                  Voir les 8 catégories de bénéficiaires →
                </Link>
              </div>
            </div>
          </section>

          {/* ── Malentendus ──────────────────────────────────────── */}
          <section className="space-y-4">
            <h2 className="text-[22px] font-semibold text-neutral-900">
              Les malentendus les plus fréquents
            </h2>
            <div className="space-y-3">
              {[
                {
                  faux: "« Je n'ai pas de revenu mensuel — donc je n'ai pas de Zakāt à payer. »",
                  correct:
                    "Faux. Ce n'est pas le revenu mensuel qui détermine l'obligation, c'est le patrimoine zakātable net. Une personne sans revenu mais possédant une épargne ou des actifs dépassant le niṣāb depuis un ḥawl complet est pleinement assujettie.",
                },
                {
                  faux: "« J'ai un crédit immobilier — donc je déduis tout et je ne dois pas de Zakāt. »",
                  correct:
                    "Faux dans la plupart des cas. Seules les dettes exigibles à court terme sont déductibles, pas la totalité du capital restant sur un prêt sur 20 ans. Si votre épargne nette (après déduction des mensualités courantes) dépasse le niṣāb, la Zakāt est due.",
                },
                {
                  faux: "« Je suis à la retraite — donc je suis exempté(e). »",
                  correct:
                    "Faux. L'âge et le statut de retraité ne créent aucune exemption. Si vous possédez un patrimoine zakātable supérieur au niṣāb depuis un ḥawl complet, la Zakāt est due quel que soit votre âge ou votre activité.",
                },
                {
                  faux: "« Mes bijoux sont à usage personnel — donc ils ne comptent pas. »",
                  correct:
                    "Divergence réelle. Les écoles mālikite, shāfiʿite et la position dominante ḥanbalite les exemptent. L'école ḥanafite les inclut. Shaykh Ibn Bāz رحمه الله et Shaykh Ibn al-ʿUthaymīn رحمه الله concluent qu'ils sont zakātables par précaution. Cette page ne tranche pas — chacun doit suivre l'avis de son école ou d'un érudit de confiance.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="rounded-[14px] border border-neutral-200 bg-white p-5 space-y-2"
                >
                  <p className="text-[14px] text-neutral-400 italic">
                    {item.faux}
                  </p>
                  <p className="text-[14px] text-neutral-800 leading-relaxed">
                    {item.correct}
                  </p>
                </div>
              ))}
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
                  Textes coraniques et prophétiques
                </p>
                <ul className="space-y-1.5">
                  {[
                    "Coran, Sourate At-Tawbah (9), verset 103",
                    "Ḥadīth de Muʿādh ibn Jabal — Al-Bukhārī n° 1395 ; Muslim n° 19",
                    "Ḥadīth sur le niṣāb — Al-Bukhārī n° 1405 ; Muslim n° 979",
                    "Ḥadīth sur le ḥawl — Abu Dāwūd n° 1573 ; Ibn Mājah n° 1792",
                    "Ḥadīth sur les bracelets d'or — Abu Dāwūd n° 1563 ; At-Tirmidhī n° 637",
                    "Ḥadīth sur les ʿurūḍ at-tijārah (stocks commerciaux) — Abu Dāwūd n° 1562",
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
                    "Majmūʿ Fatāwā Shaykh Ibn Bāz رحمه الله — vol. 14 (conditions, bijoux, mineurs)",
                    "Fatāwā al-Lajnah ad-Dāʾimah — vol. 9 (conditions de la Zakāt, biens des mineurs)",
                    "Ibn Qudāmah رحمه الله — Al-Mughnī, vol. 2 (détail des conditions et des dettes)",
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
                  href: "/nisab",
                  title: "Le Niṣāb",
                  desc: "Vérifiez le seuil d'assujettissement — valeur en or (85 g) et en argent (595 g) aujourd'hui.",
                },
                {
                  href: "/calculateur",
                  title: "Calculateur de Zakāt",
                  desc: "Calculez le montant exact de votre Zakāt al-Māl étape par étape.",
                },
                {
                  href: "/beneficiaires-zakat",
                  title: "À qui donner sa Zakāt ?",
                  desc: "Les 8 catégories de bénéficiaires définies par le Coran (At-Tawbah : 60).",
                },
                {
                  href: "/comment-calculer-sa-zakat",
                  title: "Comment calculer sa Zakāt",
                  desc: "La méthode complète : actifs zakātables, dettes déductibles, taux de 2,5 %.",
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
              de Ahl as-Sunnah wa-l-Jamāʿah. Elle ne constitue pas une fatwa et ne
              se substitue pas à l&apos;avis d&apos;un érudit qualifié. Les
              divergences réelles entre savants sont signalées explicitement — cette
              page ne prétend pas les trancher. Pour toute situation complexe
              (dettes, bijoux, plans épargne-retraite bloqués, biens de mineurs),
              consultez un imam ou un spécialiste en jurisprudence islamique (fiqh).
            </p>
          </div>

        </article>
      </PageWrapper>

      <SiteFooter />
    </>
  );
}
