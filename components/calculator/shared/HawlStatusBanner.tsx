import type { HawlStatus } from "@/engine/types";

interface HawlStatusBannerProps {
  status: HawlStatus;
  onContinue?: () => void;
}

/**
 * Bandeau affiché quand le ḥawl n'est pas confirmé.
 * Non masquable — fait partie des avertissements religieux.
 */
export function HawlStatusBanner({ status, onContinue }: HawlStatusBannerProps) {
  if (status === "confirmed") return null;

  const isNo = status === "no";

  return (
    <div
      role="alert"
      className="rounded-[10px] border border-warning-400 bg-warning-50 p-4"
    >
      <div className="flex gap-3">
        <span className="text-lg" aria-hidden>
          ℹ
        </span>
        <div className="space-y-2">
          <p className="text-[14px] font-semibold text-warning-700">
            {isNo
              ? "La Zakāt ne semble pas encore obligatoire"
              : "Statut du ḥawl à vérifier"}
          </p>
          <p className="text-[13px] text-neutral-700">
            {isNo
              ? "Si vous n'avez pas encore atteint le niṣāb pendant une année lunaire complète (environ 354 jours), la Zakāt n'est pas encore due selon l'avis majoritaire."
              : "Le ḥawl est une condition de la Zakāt. Si vous n'êtes pas certain de l'avoir accompli, nous vous recommandons de vérifier avec un imam ou un érudit."}
          </p>
          <p className="text-[13px] text-neutral-600">
            Vous pouvez continuer pour obtenir une{" "}
            <strong>estimation indicative</strong>.
          </p>
          {onContinue && (
            <button
              onClick={onContinue}
              className="text-[13px] font-medium text-brand-600 underline underline-offset-2 hover:text-brand-700"
            >
              Continuer l&apos;estimation →
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
