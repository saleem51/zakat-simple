import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { getMetalPrices, getNisabValue, getPriceLabel } from "@/engine/prices";
import { formatCurrency } from "@/lib/formatCurrency";
import { GOLD_NISAB_GRAMS, SILVER_NISAB_GRAMS } from "@/engine/constants";

export const metadata: Metadata = {
  title: "Qu'est-ce que le Niṣāb ?",
  description:
    "Le niṣāb est le seuil minimal de richesse en dessous duquel la Zakāt n'est pas due. Comprendre son calcul et sa valeur actuelle.",
};

const prices = getMetalPrices();

export default function NisabPage() {
  const goldNisab = getNisabValue("gold", prices);
  const silverNisab = getNisabValue("silver", prices);
  const priceLabel = getPriceLabel(prices);

  return (
    <>
      <SiteHeader />
      <PageWrapper>
        <article className="space-y-8 prose-like">
          <header className="space-y-3">
            <p className="text-[13px] font-medium uppercase tracking-widest text-brand-600">
              Comprendre la Zakāt
            </p>
            <h1 className="text-[32px] font-bold text-neutral-900 leading-tight">
              Le Niṣāb
            </h1>
            <p className="text-[16px] text-neutral-600 leading-relaxed">
              Le niṣāb est le seuil minimal de richesse au-delà duquel la Zakāt
              devient obligatoire. Si votre patrimoine zakatable net n&apos;atteint
              pas ce seuil, la Zakāt n&apos;est pas due.
            </p>
          </header>

          {/* Valeurs actuelles */}
          <div className="rounded-[14px] border border-neutral-200 bg-neutral-50 p-6 space-y-4">
            <p className="text-[13px] font-medium text-neutral-500 uppercase tracking-wide">
              Valeurs actuelles — {priceLabel}
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[10px] bg-white border border-neutral-200 p-4 space-y-1">
                <p className="text-[13px] text-neutral-500">Niṣāb (or)</p>
                <p className="text-[24px] font-bold tabular-nums text-neutral-900">
                  {formatCurrency(goldNisab)}
                </p>
                <p className="text-[12px] text-neutral-400">
                  {GOLD_NISAB_GRAMS} g × {prices.goldPricePerGram} €/g
                </p>
              </div>
              <div className="rounded-[10px] bg-white border border-neutral-200 p-4 space-y-1">
                <p className="text-[13px] text-neutral-500">
                  Niṣāb (argent — école hanafite)
                </p>
                <p className="text-[24px] font-bold tabular-nums text-neutral-900">
                  {formatCurrency(silverNisab)}
                </p>
                <p className="text-[12px] text-neutral-400">
                  {SILVER_NISAB_GRAMS} g × {prices.silverPricePerGram} €/g
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4 text-[15px] text-neutral-700 leading-relaxed">
            <h2 className="text-[20px] font-semibold text-neutral-900">
              Deux références : or et argent
            </h2>
            <p>
              Le Prophète ﷺ a défini le niṣāb en termes de poids d&apos;or et
              d&apos;argent. Les savants s&apos;accordent sur la légitimité des
              deux références, mais divergent sur laquelle utiliser.
            </p>
            <p>
              <strong>Le niṣāb en or (85 g)</strong> est l&apos;avis le plus
              répandu parmi les savants contemporains, dont Shaykh Ibn
              al-&#x2018;Uthaymīn رحمه الله.
            </p>
            <p>
              <strong>Le niṣāb en argent (595 g)</strong> est l&apos;avis de
              l&apos;école hanafite. Avec le cours actuel de l&apos;argent, il
              correspond à un seuil plus bas — ce qui rend la Zakāt due à plus
              de personnes.
            </p>

            <div className="rounded-[10px] bg-warning-50 border-l-[3px] border-warning-400 px-4 py-3 text-[14px]">
              <strong className="text-warning-700">Note :</strong> Ces valeurs
              ({GOLD_NISAB_GRAMS} g d&apos;or et {SILVER_NISAB_GRAMS} g
              d&apos;argent) sont les valeurs par défaut retenues pour ce
              calculateur. Certains savants, dont Shaykh Ibn Bāz رحمه الله,
              mentionnent une estimation autour de 92 g d&apos;or selon la
              conversion du mithqāl. Ces chiffres ne doivent pas être présentés
              comme universellement définitifs — voir la page{" "}
              <a href="/sources" className="text-brand-600 underline">
                Sources
              </a>
              .
            </div>

            <h2 className="text-[20px] font-semibold text-neutral-900">
              Le ḥawl : condition de durée
            </h2>
            <p>
              Le niṣāb doit être atteint et maintenu pendant une année lunaire
              complète (le ḥawl, environ 354 jours). Si le patrimoine tombe
              sous le niṣāb pendant l&apos;année, le ḥawl recommence à la
              prochaine fois qu&apos;il est atteint.
            </p>
          </div>
        </article>
      </PageWrapper>
      <SiteFooter />
    </>
  );
}
