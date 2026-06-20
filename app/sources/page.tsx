import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { GOLD_NISAB_GRAMS, SILVER_NISAB_GRAMS } from "@/engine/constants";

export const metadata: Metadata = {
  title: "Sources et méthodologie religieuse",
  description:
    "Méthodologie religieuse du calculateur de Zakāt : sources du Coran, de la Sunnah authentique, et des savants de Ahl as-Sunnah wa-l-Jamā'ah.",
  alternates: {
    canonical: "/sources",
  },
  openGraph: {
    title: "Sources et méthodologie religieuse — Calculateur de Zakāt",
    description:
      "Références coraniques, hadiths et avis des savants de Ahl as-Sunnah qui fondent le calcul de la Zakāt al-Māl.",
    type: "article",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Calculateur de Zakāt al-Māl — www.zakatfacile.fr" }],
  },
};

export default function SourcesPage() {
  return (
    <>
      <SiteHeader />
      <PageWrapper>
        <article className="space-y-10">
          <header className="space-y-3">
            <p className="text-[13px] font-medium uppercase tracking-widest text-brand-600">
              Références
            </p>
            <h1 className="text-[32px] font-bold text-neutral-900 leading-tight">
              Sources et méthodologie religieuse
            </h1>
            <p className="text-[16px] text-neutral-600 leading-relaxed">
              Ce calculateur est fondé sur le Coran, la Sunnah authentique du
              Prophète ﷺ, et la compréhension des savants de Ahl as-Sunnah
              wa-l-Jamā&apos;ah.
            </p>
          </header>

          {/* Fondements */}
          <section className="space-y-4">
            <h2 className="text-[22px] font-semibold text-neutral-900">
              Fondements religieux
            </h2>
            <div className="space-y-3 text-[15px] text-neutral-700 leading-relaxed">
              <p>
                La Zakāt est l&apos;un des cinq piliers de l&apos;Islam,
                mentionnée dans de nombreux versets du Coran aux côtés de la
                prière. Allah ﷻ dit (sens du verset) :{" "}
                <em>
                  « Et établissez la prière, acquittez la Zakāt »
                </em>{" "}
                (Al-Baqara, 43).
              </p>
              <p>
                Les règles détaillées de la Zakāt sont tirées des hadiths
                authentiques du Prophète ﷺ, notamment ceux rapportés par les
                imams Al-Bukhārī et Muslim.
              </p>
            </div>
          </section>

          {/* Ligne éditoriale */}
          <section className="space-y-4">
            <h2 className="text-[22px] font-semibold text-neutral-900">
              Ligne éditoriale
            </h2>
            <div className="rounded-[14px] border border-neutral-200 bg-neutral-50 p-5 space-y-3 text-[14px] text-neutral-700 leading-relaxed">
              <p>
                Ce calculateur s&apos;appuie sur les avis les plus répandus
                parmi les savants de{" "}
                <strong>Ahl as-Sunnah wa-l-Jamā&apos;ah</strong>, en référence
                aux sources classiques et aux explications des savants
                contemporains reconnus.
              </p>
              <p>
                Lorsque des divergences existent entre savants reconnus, elles
                sont signalées explicitement et un choix est laissé à
                l&apos;utilisateur. L&apos;outil ne prétend pas trancher les
                divergences à la place des savants.
              </p>
            </div>
          </section>

          {/* Savants de référence */}
          <section className="space-y-4">
            <h2 className="text-[22px] font-semibold text-neutral-900">
              Savants et institutions de référence
            </h2>
            <div className="space-y-3">
              {[
                {
                  name: "Shaykh ʿAbd al-ʿAzīz ibn Bāz رحمه الله",
                  role: "Grand Mufti d'Arabie Saoudite (1993–1999)",
                  note: "Ses explications sur la Zakāt — notamment sur le niṣāb et la conversion du mithqāl — font référence.",
                },
                {
                  name: "Shaykh Muḥammad ibn Ṣāliḥ al-ʿUthaymīn رحمه الله",
                  role: "Savant salafi contemporain majeur",
                  note: "Auteur de nombreuses explications détaillées sur les règles de la Zakāt dans ses cours et fatwas.",
                },
                {
                  name: "Al-Lajnah ad-Dā'imah lil-Buḥūth al-ʿIlmiyyah wal-Iftā'",
                  role: "Comité Permanent pour la Recherche Islamique et les Fatwas (Arabie Saoudite)",
                  note: "Ses fatwas collectives font autorité sur les questions contemporaines de Zakāt.",
                },
                {
                  name: "Fuqahā' classiques",
                  role: "Imams des quatre madhabs reconnus",
                  note: "Les divergences classiques entre les quatre grandes écoles juridiques (hanafite, malikite, shaféite, hanbalite) sont prises en compte lorsqu'elles sont pertinentes.",
                },
              ].map((ref) => (
                <div
                  key={ref.name}
                  className="rounded-[14px] border border-neutral-200 bg-white p-5 space-y-1.5"
                >
                  <p className="text-[15px] font-semibold text-neutral-900">
                    {ref.name}
                  </p>
                  <p className="text-[13px] font-medium text-brand-600">
                    {ref.role}
                  </p>
                  <p className="text-[13px] text-neutral-600">{ref.note}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Valeurs du niṣāb */}
          <section className="space-y-4">
            <h2 className="text-[22px] font-semibold text-neutral-900">
              Note sur les valeurs du niṣāb
            </h2>
            <div className="space-y-3 text-[15px] text-neutral-700 leading-relaxed">
              <p>
                Ce calculateur retient par défaut{" "}
                <strong>{GOLD_NISAB_GRAMS} g d&apos;or</strong> et{" "}
                <strong>{SILVER_NISAB_GRAMS} g d&apos;argent</strong> comme
                valeurs du niṣāb.
              </p>
              <p>
                Il convient de noter que Shaykh Ibn Bāz رحمه الله mentionne
                une estimation autour de{" "}
                <strong>92 g d&apos;or</strong> selon la conversion du mithqāl
                (unité de poids utilisée à l&apos;époque du Prophète ﷺ). Ce
                calcul repose sur l&apos;équivalence : 1 mithqāl ≈ 4,25 g, et
                le niṣāb = 20 mithqāl.
              </p>
              <div className="rounded-[10px] bg-warning-50 border-l-[3px] border-warning-400 px-4 py-3 text-[14px]">
                <strong className="text-warning-700">Important :</strong> Ces
                valeurs ({GOLD_NISAB_GRAMS} g et {SILVER_NISAB_GRAMS} g) sont
                des valeurs par défaut retenues pour ce calculateur. Elles ne
                doivent pas être présentées comme l&apos;unique estimation
                possible. En cas de doute sur la valeur à retenir, consultez
                un érudit qualifié.
              </div>
            </div>
          </section>

          {/* Avertissement */}
          <section className="rounded-[14px] border border-neutral-200 bg-neutral-50 p-5 space-y-2">
            <p className="text-[14px] font-semibold text-neutral-900">
              Avertissement général
            </p>
            <p className="text-[14px] text-neutral-600 leading-relaxed">
              Ce calculateur est un outil indicatif. Il ne constitue pas une
              fatwa et ne se substitue pas à l&apos;avis d&apos;un érudit
              qualifié. Pour les situations patrimoniales complexes, nous
              recommandons fortement de consulter un imam ou un spécialiste en
              jurisprudence islamique.
            </p>
          </section>
        </article>
      </PageWrapper>
      <SiteFooter />
    </>
  );
}
