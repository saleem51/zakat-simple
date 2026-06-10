import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { PageWrapper } from "@/components/layout/PageWrapper";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description:
    "Politique de confidentialité du calculateur de Zakāt. Aucune donnée personnelle collectée, aucun cookie, calcul 100 % local.",
};

export default function ConfidentialitePage() {
  return (
    <>
      <SiteHeader />
      <PageWrapper>
        <article className="space-y-8">
          <header className="space-y-3">
            <p className="text-[13px] font-medium uppercase tracking-widest text-brand-600">
              Confidentialité
            </p>
            <h1 className="text-[32px] font-bold text-neutral-900 leading-tight">
              Politique de confidentialité
            </h1>
            <p className="text-[16px] text-neutral-600 leading-relaxed">
              Vos données financières ne quittent jamais votre appareil. Ce
              calculateur ne collecte, ne transmet et ne stocke aucune donnée
              personnelle.
            </p>
          </header>

          {/* Principe fondamental */}
          <div className="rounded-[14px] border border-brand-200 bg-brand-50 p-5 space-y-2">
            <p className="text-[15px] font-semibold text-brand-900">
              Principe fondamental
            </p>
            <p className="text-[14px] text-brand-800 leading-relaxed">
              Tous les calculs sont effectués entièrement dans votre navigateur,
              sur votre appareil. Aucune information saisie dans le calculateur
              n&apos;est envoyée vers un serveur.
            </p>
          </div>

          {/* Ce que nous ne collectons pas */}
          <section className="space-y-4">
            <h2 className="text-[20px] font-semibold text-neutral-900">
              Ce que nous ne collectons pas
            </h2>
            <div className="rounded-[14px] border border-neutral-200 bg-white overflow-hidden">
              {[
                "Données financières saisies dans le calculateur",
                "Adresse IP ou localisation",
                "Identifiants de session ou comptes utilisateur",
                "Données comportementales ou de navigation",
                "Cookies de suivi ou d'analyse",
                "Empreinte numérique (fingerprint)",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 px-5 py-3.5 border-b border-neutral-100 last:border-0"
                >
                  <span className="text-[14px] text-error-500 shrink-0">✗</span>
                  <p className="text-[14px] text-neutral-700">{item}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Stockage local */}
          <section className="space-y-3">
            <h2 className="text-[20px] font-semibold text-neutral-900">
              Stockage local temporaire
            </h2>
            <p className="text-[15px] text-neutral-700 leading-relaxed">
              Durant votre session de calcul, les données saisies sont stockées
              temporairement dans la <strong>sessionStorage</strong> de votre
              navigateur. Ce stockage est{" "}
              <strong>automatiquement effacé</strong> à la fermeture de
              l&apos;onglet ou du navigateur. Ces données ne sont jamais
              transmises vers l&apos;extérieur.
            </p>
          </section>

          {/* PDF */}
          <section className="space-y-3">
            <h2 className="text-[20px] font-semibold text-neutral-900">
              Téléchargement du rapport PDF
            </h2>
            <p className="text-[15px] text-neutral-700 leading-relaxed">
              La génération du rapport PDF s&apos;effectue entièrement dans
              votre navigateur. Le fichier est créé localement et téléchargé
              directement sur votre appareil, sans passer par aucun serveur
              tiers.
            </p>
          </section>

          {/* Ressources externes */}
          <section className="space-y-3">
            <h2 className="text-[20px] font-semibold text-neutral-900">
              Ressources externes
            </h2>
            <p className="text-[15px] text-neutral-700 leading-relaxed">
              Les polices de caractères utilisées (Inter) sont chargées au
              moment de la construction du site et servies directement depuis
              notre hébergement — aucune requête n&apos;est envoyée vers Google
              Fonts ou tout autre service tiers lors de votre visite.
            </p>
            <p className="text-[15px] text-neutral-700 leading-relaxed">
              Ce site ne charge aucun script analytique, aucune bibliothèque
              publicitaire, et aucune ressource provenant de réseaux tiers.
            </p>
          </section>

          {/* Hébergement */}
          <section className="space-y-3">
            <h2 className="text-[20px] font-semibold text-neutral-900">
              Hébergement
            </h2>
            <p className="text-[15px] text-neutral-700 leading-relaxed">
              Ce site est une application statique. Les journaux d&apos;accès
              standards de l&apos;hébergeur peuvent enregistrer les adresses IP
              des visiteurs à des fins de sécurité et de stabilité du service,
              conformément aux pratiques habituelles de l&apos;industrie. Ces
              journaux ne sont pas exploités à des fins commerciales.
            </p>
          </section>

          {/* Contact */}
          <section className="rounded-[14px] border border-neutral-200 bg-neutral-50 p-5 space-y-2">
            <p className="text-[14px] font-semibold text-neutral-900">
              Questions
            </p>
            <p className="text-[14px] text-neutral-600 leading-relaxed">
              Pour toute question relative à la confidentialité, vous pouvez
              consulter la page{" "}
              <a href="/a-propos" className="text-brand-600 underline">
                À propos
              </a>{" "}
              pour les informations de contact.
            </p>
          </section>

          <p className="text-[12px] text-neutral-400">
            Dernière mise à jour : juin 2026
          </p>
        </article>
      </PageWrapper>
      <SiteFooter />
    </>
  );
}
