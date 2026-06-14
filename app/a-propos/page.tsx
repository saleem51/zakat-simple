import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { PageWrapper } from "@/components/layout/PageWrapper";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Présentation du calculateur de Zakāt al-Māl : objectifs, périmètre, limites et avertissements.",
  alternates: {
    canonical: "/a-propos",
  },
  openGraph: {
    title: "À propos — Calculateur de Zakāt al-Māl",
    description:
      "Présentation du calculateur de Zakāt al-Māl : objectifs, périmètre, limites et avertissements.",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Calculateur de Zakāt al-Māl — zakatfacile.fr" }],
  },
};

export default function AProposPage() {
  return (
    <>
      <SiteHeader />
      <PageWrapper>
        <article className="space-y-8">
          <header className="space-y-3">
            <p className="text-[13px] font-medium uppercase tracking-widest text-brand-600">
              Le projet
            </p>
            <h1 className="text-[32px] font-bold text-neutral-900 leading-tight">
              À propos
            </h1>
            <p className="text-[16px] text-neutral-600 leading-relaxed">
              Un calculateur de Zakāt al-Māl simple, précis et respectueux de
              votre vie privée, destiné aux musulmans francophones.
            </p>
          </header>

          {/* Objectif */}
          <section className="space-y-3">
            <h2 className="text-[20px] font-semibold text-neutral-900">
              Objectif
            </h2>
            <p className="text-[15px] text-neutral-700 leading-relaxed">
              La Zakāt est l&apos;un des cinq piliers de l&apos;Islam. Son
              calcul peut sembler complexe face à la diversité des actifs
              modernes — comptes bancaires, placements financiers, biens
              immobiliers, actifs professionnels, cryptomonnaies. Ce
              calculateur vise à rendre ce calcul accessible, guidé et
              transparent pour le grand public francophone.
            </p>
            <p className="text-[15px] text-neutral-700 leading-relaxed">
              L&apos;outil suit une approche étape par étape, explique les
              choix effectués, et signale explicitement les divergences entre
              savants. Il s&apos;adapte au niveau de l&apos;utilisateur — du
              débutant au fidèle averti.
            </p>
          </section>

          {/* Périmètre */}
          <section className="space-y-4">
            <h2 className="text-[20px] font-semibold text-neutral-900">
              Périmètre
            </h2>
            <div className="rounded-[14px] border border-neutral-200 bg-white overflow-hidden">
              {[
                { label: "Zakāt al-Māl (Zakāt sur la richesse)", ok: true },
                { label: "Calcul 100 % local, sans serveur", ok: true },
                { label: "Aucune collecte de données personnelles", ok: true },
                { label: "Export PDF du résultat", ok: true },
                {
                  label: "Zakāt al-Fiṭr (Zakāt de rupture du jeûne)",
                  ok: false,
                },
                { label: "Comptes utilisateur ou historique", ok: false },
                { label: "Paiement ou collecte de dons", ok: false },
                { label: "Fatwas personnalisées", ok: false },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 px-5 py-3.5 border-b border-neutral-100 last:border-0"
                >
                  <span
                    className={`text-[14px] shrink-0 ${
                      item.ok ? "text-success-600" : "text-neutral-400"
                    }`}
                  >
                    {item.ok ? "✓" : "✗"}
                  </span>
                  <p
                    className={`text-[14px] ${
                      item.ok ? "text-neutral-700" : "text-neutral-400"
                    }`}
                  >
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Limites */}
          <section className="space-y-3">
            <h2 className="text-[20px] font-semibold text-neutral-900">
              Limites de l&apos;outil
            </h2>
            <div className="space-y-3 text-[15px] text-neutral-700 leading-relaxed">
              <p>
                Ce calculateur est un <strong>outil indicatif</strong>. Il
                applique les règles les plus répandues parmi les savants de Ahl
                as-Sunnah wa-l-Jamā&apos;ah, mais ne peut pas traiter
                l&apos;exhaustivité des situations patrimoniales particulières.
              </p>
              <p>
                Les situations impliquant des actifs complexes (société holding,
                parts de SCPI, contrats d&apos;assurance-vie avec participation
                aux bénéfices, succession en cours, etc.) nécessitent
                l&apos;avis d&apos;un érudit qualifié ou d&apos;un spécialiste
                en jurisprudence islamique des finances.
              </p>
              <p>
                Le résultat fourni est accompagné d&apos;un indice de confiance
                indiquant le degré de certitude du calcul selon les informations
                saisies.
              </p>
            </div>
          </section>

          {/* Avertissement religieux */}
          <div
            role="note"
            className="rounded-[10px] bg-neutral-50 border border-neutral-200 px-4 py-4 space-y-1"
          >
            <p className="text-[13px] font-semibold text-neutral-700">
              Avertissement religieux
            </p>
            <p className="text-[13px] text-neutral-600 leading-relaxed">
              Ce calculateur ne constitue pas une fatwa. Il ne remplace pas
              l&apos;avis d&apos;un érudit qualifié. Pour les situations
              complexes, consultez un imam ou un spécialiste en jurisprudence
              islamique.
            </p>
          </div>

          {/* Méthodologie */}
          <section className="space-y-3">
            <h2 className="text-[20px] font-semibold text-neutral-900">
              Méthodologie religieuse
            </h2>
            <p className="text-[15px] text-neutral-700 leading-relaxed">
              Les règles appliquées par ce calculateur sont fondées sur le Coran,
              la Sunnah authentique, et les explications des savants de Ahl
              as-Sunnah wa-l-Jamā&apos;ah — notamment Shaykh Ibn Bāz رحمه الله,
              Shaykh Ibn al-&apos;Uthaymīn رحمه الله, et Al-Lajnah
              ad-Dā&apos;imah.
            </p>
            <p className="text-[15px] text-neutral-700 leading-relaxed">
              Pour le détail complet des sources et références, voir la page{" "}
              <a href="/sources" className="text-brand-600 underline">
                Sources et méthodologie
              </a>
              .
            </p>
          </section>

          {/* Technique */}
          <section className="space-y-3">
            <h2 className="text-[20px] font-semibold text-neutral-900">
              Aspects techniques
            </h2>
            <p className="text-[15px] text-neutral-700 leading-relaxed">
              Ce site est une application web statique (Next.js). Aucun serveur
              ne traite vos données financières. Les cours de l&apos;or et de
              l&apos;argent utilisés pour le calcul du niṣāb sont des valeurs
              indicatives mises à jour manuellement. Pour les cours en temps
              réel, consultez un site financier de référence.
            </p>
            <p className="text-[15px] text-neutral-700 leading-relaxed">
              Pour en savoir plus sur notre approche de la confidentialité, voir
              la{" "}
              <a href="/confidentialite" className="text-brand-600 underline">
                politique de confidentialité
              </a>
              .
            </p>
          </section>
        </article>
      </PageWrapper>
      <SiteFooter />
    </>
  );
}
