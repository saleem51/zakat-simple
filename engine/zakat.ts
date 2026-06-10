import type {
  AllAssets,
  AllDebts,
  CalculationContext,
  CalculatorMeta,
  MetalPrices,
  ZakatResult,
} from "./types";
import { ZAKAT_RATE } from "./constants";
import { getNisabValue } from "./prices";
import { computeAllAssets } from "./assets";
import { computeDeductibleDebts } from "./debts";
import { computeConfidence } from "./confidence";

/**
 * Point d'entrée unique du moteur de calcul.
 *
 * Reçoit l'ensemble des données du formulaire et retourne
 * un ZakatResult complet : montants, ventilation, confiance.
 *
 * Aucun effet de bord. Fonction pure.
 */
export function computeZakat(
  assets: AllAssets,
  debts: AllDebts,
  context: CalculationContext,
  meta: CalculatorMeta,
  prices: MetalPrices
): ZakatResult {
  // 1. Calcul des actifs
  const { total: grossAssets, lines: assetLines } = computeAllAssets(
    assets,
    prices
  );

  // 2. Calcul des dettes déductibles
  const { total: deductibleDebts, lines: debtLines } =
    computeDeductibleDebts(debts);

  // 3. Patrimoine net zakatable — ne peut pas être négatif
  const netZakatableWealth = Math.max(
    0,
    Math.round((grossAssets - deductibleDebts) * 100) / 100
  );

  // 4. Valeur du nisāb
  const nisabValue = getNisabValue(context.nisabReference, prices);

  // 5. Zakāt due
  const isAboveNisab = netZakatableWealth >= nisabValue;
  const zakatAmount = isAboveNisab
    ? Math.round(netZakatableWealth * ZAKAT_RATE * 100) / 100
    : 0;

  // 6. Indice de confiance
  const confidence = computeConfidence(context, meta);

  return {
    grossAssets,
    deductibleDebts,
    netZakatableWealth,
    nisabValue,
    isAboveNisab,
    zakatAmount,
    assetLines,
    debtLines,
    confidence,
    calculationDate: context.date,
    nisabReference: context.nisabReference,
    hawlStatus: context.hawlStatus,
  };
}

/** Libellé de la référence du nisāb */
export function getNisabReferenceLabel(
  reference: "gold" | "silver",
  nisabValue: number
): string {
  const formatted = new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(nisabValue);

  return reference === "gold"
    ? `Or — 85 g — ${formatted}`
    : `Argent — 595 g — ${formatted}`;
}
