import type { MetalPrices, NisabReference } from "./types";
import { GOLD_NISAB_GRAMS, SILVER_NISAB_GRAMS } from "./constants";
import rawPrices from "@/config/prices.json";

/** Retourne les prix chargés depuis prices.json */
export function getMetalPrices(): MetalPrices {
  return rawPrices as MetalPrices;
}

/**
 * Calcule la valeur en euros du nisāb selon la référence choisie.
 * Toujours arrondi à deux décimales.
 */
export function getNisabValue(
  reference: NisabReference,
  prices: MetalPrices
): number {
  const raw =
    reference === "gold"
      ? GOLD_NISAB_GRAMS * prices.goldPricePerGram
      : SILVER_NISAB_GRAMS * prices.silverPricePerGram;

  return Math.round(raw * 100) / 100;
}

/** Libellé affiché à l'utilisateur sur la source des cours */
export function getPriceLabel(prices: MetalPrices): string {
  const date = new Intl.DateTimeFormat("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(prices.lastUpdated));

  return `Cours mis à jour le ${date}`;
}

/**
 * Convertit des grammes d'or en euros selon le cours actuel.
 */
export function goldGramsToEuros(grams: number, prices: MetalPrices): number {
  return Math.round(grams * prices.goldPricePerGram * 100) / 100;
}

/**
 * Convertit des grammes d'argent en euros selon le cours actuel.
 */
export function silverGramsToEuros(
  grams: number,
  prices: MetalPrices
): number {
  return Math.round(grams * prices.silverPricePerGram * 100) / 100;
}
