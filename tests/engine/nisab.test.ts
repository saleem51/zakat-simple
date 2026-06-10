import { describe, it, expect } from "vitest";
import {
  getNisabValue,
  goldGramsToEuros,
  silverGramsToEuros,
  getPriceLabel,
} from "@/engine/prices";
import { GOLD_NISAB_GRAMS, SILVER_NISAB_GRAMS } from "@/engine/constants";
import type { MetalPrices } from "@/engine/types";

const PRICES: MetalPrices = {
  goldPricePerGram: 85.40,
  silverPricePerGram: 0.87,
  lastUpdated: "2026-06-09",
  source: "Test",
};

describe("Constantes Nisāb", () => {
  it("GOLD_NISAB_GRAMS vaut 85", () => {
    expect(GOLD_NISAB_GRAMS).toBe(85);
  });

  it("SILVER_NISAB_GRAMS vaut 595", () => {
    expect(SILVER_NISAB_GRAMS).toBe(595);
  });
});

describe("getNisabValue", () => {
  it("calcule correctement le nisāb or", () => {
    const value = getNisabValue("gold", PRICES);
    expect(value).toBe(Math.round(85 * 85.40 * 100) / 100);
    expect(value).toBe(7259.00);
  });

  it("calcule correctement le nisāb argent", () => {
    const value = getNisabValue("silver", PRICES);
    expect(value).toBe(Math.round(595 * 0.87 * 100) / 100);
    expect(value).toBe(517.65);
  });

  it("retourne un nombre à deux décimales", () => {
    const value = getNisabValue("gold", { ...PRICES, goldPricePerGram: 85.123 });
    const decimals = (value.toString().split(".")[1] ?? "").length;
    expect(decimals).toBeLessThanOrEqual(2);
  });

  it("fonctionne avec un prix nul (cas limite)", () => {
    const value = getNisabValue("gold", { ...PRICES, goldPricePerGram: 0 });
    expect(value).toBe(0);
  });
});

describe("goldGramsToEuros", () => {
  it("convertit des grammes d'or en euros", () => {
    expect(goldGramsToEuros(100, PRICES)).toBe(8540.00);
  });

  it("retourne 0 pour 0 gramme", () => {
    expect(goldGramsToEuros(0, PRICES)).toBe(0);
  });

  it("arrondit correctement à 2 décimales", () => {
    const result = goldGramsToEuros(1, { ...PRICES, goldPricePerGram: 85.1234 });
    expect(result).toBe(85.12);
  });
});

describe("silverGramsToEuros", () => {
  it("convertit des grammes d'argent en euros", () => {
    expect(silverGramsToEuros(1000, PRICES)).toBe(870.00);
  });

  it("retourne 0 pour 0 gramme", () => {
    expect(silverGramsToEuros(0, PRICES)).toBe(0);
  });
});

describe("getPriceLabel", () => {
  it("retourne un libellé lisible", () => {
    const label = getPriceLabel(PRICES);
    expect(label).toContain("2026");
    expect(label).toContain("Cours mis à jour le");
  });
});
