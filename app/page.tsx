import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "Calculateur de Zakāt al-Māl — Gratuit et confidentiel",
  description:
    "Calculez votre Zakāt annuelle en quelques minutes. Outil gratuit, 100 % confidentiel, basé sur les avis des savants de Ahl as-Sunnah wa-l-Jamā'ah.",
  openGraph: {
    title: "Calculateur de Zakāt al-Māl",
    description:
      "Calculez votre Zakāt annuelle gratuitement et en toute confidentialité.",
  },
};

const FEATURES = [
  {
    title: "100 % confidentiel",
    desc: "Vos données financières ne quittent jamais votre appareil. Aucun serveur, aucune base de données.",
  },
  {
    title: "Basé sur des sources reconnues",
    desc: "Calcul fondé sur les avis des savants de Ahl as-Sunnah. Les divergences sont signalées clairement.",
  },
  {
    title: "Simple ou complet",
    desc: "Interface adaptée à votre niveau. Du débutant à l'utilisateur avancé avec des actifs complexes.",
  },
];

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        {/* Hero */}
        <section className="mx-auto w-full max-w-2xl px-4 py-16 sm:py-24 text-center space-y-6">
          <p className="text-[13px] font-medium uppercase tracking-widest text-brand-600">
            Zakāt al-Māl
          </p>
          <h1 className="text-[36px] sm:text-[48px] font-bold text-neutral-900 leading-tight">
            Calculez votre Zakāt
            <br />
            <span className="text-brand-600">en quelques minutes</span>
          </h1>
          <p className="text-[17px] text-neutral-600 leading-relaxed max-w-lg mx-auto">
            Un outil gratuit, confidentiel et rigoureux pour calculer votre
            Zakāt annuelle sur la richesse.
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

        {/* Features */}
        <section className="mx-auto w-full max-w-4xl px-4 py-12 sm:py-16">
          <div className="grid gap-8 sm:grid-cols-3">
            {FEATURES.map((f) => (
              <div key={f.title} className="space-y-2">
                <h2 className="text-[16px] font-semibold text-neutral-900">
                  {f.title}
                </h2>
                <p className="text-[14px] text-neutral-500 leading-relaxed">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        <Separator />

        {/* Disclaimer bas de page */}
        <section className="mx-auto w-full max-w-2xl px-4 py-12 text-center space-y-4">
          <p className="text-[14px] text-neutral-500 leading-relaxed">
            Ce calculateur ne prétend pas rendre une fatwa. Il est conçu comme
            un outil d&apos;aide au calcul basé sur les avis reconnus des
            savants de Ahl as-Sunnah wa-l-Jamā&apos;ah. En cas de doute,
            consultez un érudit qualifié.
          </p>
          <Button asChild>
            <Link href="/calculateur">Calculer ma Zakāt</Link>
          </Button>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
