import { describe, it, expect } from "vitest";
import { computeAllAssets } from "@/engine/assets";
import type { AllAssets, MetalPrices } from "@/engine/types";

const PRICES: MetalPrices = {
  goldPricePerGram: 100,
  silverPricePerGram: 1,
  lastUpdated: "2026-06-09",
  source: "Test",
};

function makeAssets(overrides: Partial<AllAssets> = {}): AllAssets {
  return {
    liquid: {
      available: 0,
      jointAccount: {
        hasJointAccount: false,
        jointShareAmount: 0,
        jointShareCertain: true,
      },
      blockedSavings: 0,
    },
    gold: {
      investmentGrams: 0,
      investmentValue: 0,
      useGrams: false,
      jewelry: { included: false, value: 0 },
    },
    silver: { grams: 0, value: 0, useGrams: false },
    financial: { stocks: 0, etf: 0, lifeInsurance: 0 },
    realEstate: {
      availableRents: 0,
      resaleProperty: { intentionConfirmed: false, value: 0 },
    },
    professional: {
      isActive: false,
      commercialStock: 0,
      treasury: 0,
      receivables: 0,
    },
    crypto: 0,
    ...overrides,
  };
}

describe("computeAllAssets — cas de base", () => {
  it("retourne 0 si aucun actif", () => {
    const result = computeAllAssets(makeAssets(), PRICES);
    expect(result.total).toBe(0);
    expect(result.lines).toHaveLength(0);
  });

  it("calcule correctement les liquidités disponibles", () => {
    const assets = makeAssets({ liquid: { available: 10000, jointAccount: { hasJointAccount: false, jointShareAmount: 0, jointShareCertain: true }, blockedSavings: 0 } });
    const result = computeAllAssets(assets, PRICES);
    expect(result.total).toBe(10000);
    expect(result.lines[0]?.label).toBe("Liquidités disponibles");
    expect(result.lines[0]?.zakatAmount).toBe(250); // 10000 * 2.5%
  });

  it("calcule l'épargne bloquée séparément", () => {
    const assets = makeAssets({ liquid: { available: 5000, jointAccount: { hasJointAccount: false, jointShareAmount: 0, jointShareCertain: true }, blockedSavings: 2000 } });
    const result = computeAllAssets(assets, PRICES);
    expect(result.total).toBe(7000);
    expect(result.lines).toHaveLength(2);
  });
});

describe("computeAllAssets — comptes joints", () => {
  it("utilise la part du compte joint, pas le total", () => {
    const assets = makeAssets({
      liquid: {
        available: 10000, // total du compte
        jointAccount: {
          hasJointAccount: true,
          jointShareAmount: 3000, // part de l'utilisateur
          jointShareCertain: true,
        },
        blockedSavings: 0,
      },
    });
    const result = computeAllAssets(assets, PRICES);
    expect(result.total).toBe(3000);
    expect(result.lines[0]?.baseAmount).toBe(3000);
  });

  it("marque comme estimation si la part est incertaine", () => {
    const assets = makeAssets({
      liquid: {
        available: 10000,
        jointAccount: {
          hasJointAccount: true,
          jointShareAmount: 5000,
          jointShareCertain: false,
        },
        blockedSavings: 0,
      },
    });
    const result = computeAllAssets(assets, PRICES);
    expect(result.lines[0]?.isEstimate).toBe(true);
  });
});

describe("computeAllAssets — or", () => {
  it("convertit les grammes d'or en euros", () => {
    const assets = makeAssets({
      gold: {
        investmentGrams: 85,
        investmentValue: 0,
        useGrams: true,
        jewelry: { included: false, value: 0 },
      },
    });
    const result = computeAllAssets(assets, PRICES);
    expect(result.total).toBe(8500); // 85g × 100€/g
  });

  it("utilise la valeur directe si useGrams = false", () => {
    const assets = makeAssets({
      gold: {
        investmentGrams: 0,
        investmentValue: 5000,
        useGrams: false,
        jewelry: { included: false, value: 0 },
      },
    });
    const result = computeAllAssets(assets, PRICES);
    expect(result.total).toBe(5000);
  });

  it("n'inclut pas les bijoux si non inclus", () => {
    const assets = makeAssets({
      gold: {
        investmentGrams: 0,
        investmentValue: 0,
        useGrams: false,
        jewelry: { included: false, value: 1000 },
      },
    });
    const result = computeAllAssets(assets, PRICES);
    expect(result.total).toBe(0);
  });

  it("inclut les bijoux si inclus", () => {
    const assets = makeAssets({
      gold: {
        investmentGrams: 0,
        investmentValue: 0,
        useGrams: false,
        jewelry: { included: true, value: 2000 },
      },
    });
    const result = computeAllAssets(assets, PRICES);
    expect(result.total).toBe(2000);
    expect(result.lines[0]?.label).toContain("Bijoux");
  });
});

describe("computeAllAssets — immobilier", () => {
  it("inclut les loyers disponibles", () => {
    const assets = makeAssets({
      realEstate: {
        availableRents: 3600,
        resaleProperty: { intentionConfirmed: false, value: 0 },
      },
    });
    const result = computeAllAssets(assets, PRICES);
    expect(result.total).toBe(3600);
  });

  it("n'inclut pas un bien de revente sans confirmation d'intention", () => {
    const assets = makeAssets({
      realEstate: {
        availableRents: 0,
        resaleProperty: { intentionConfirmed: false, value: 200000 },
      },
    });
    const result = computeAllAssets(assets, PRICES);
    expect(result.total).toBe(0);
  });

  it("inclut un bien de revente avec confirmation d'intention", () => {
    const assets = makeAssets({
      realEstate: {
        availableRents: 0,
        resaleProperty: { intentionConfirmed: true, value: 200000 },
      },
    });
    const result = computeAllAssets(assets, PRICES);
    expect(result.total).toBe(200000);
    expect(result.lines[0]?.isEstimate).toBe(true);
  });
});

describe("computeAllAssets — actifs professionnels", () => {
  it("n'inclut rien si isActive = false", () => {
    const assets = makeAssets({
      professional: {
        isActive: false,
        commercialStock: 10000,
        treasury: 5000,
        receivables: 2000,
      },
    });
    const result = computeAllAssets(assets, PRICES);
    expect(result.total).toBe(0);
  });

  it("inclut tous les actifs pro si isActive = true", () => {
    const assets = makeAssets({
      professional: {
        isActive: true,
        commercialStock: 10000,
        treasury: 5000,
        receivables: 2000,
      },
    });
    const result = computeAllAssets(assets, PRICES);
    expect(result.total).toBe(17000);
    expect(result.lines).toHaveLength(3);
  });
});

describe("computeAllAssets — zakāt par ligne", () => {
  it("la zakāt de chaque ligne vaut 2,5% de la base", () => {
    const assets = makeAssets({
      liquid: { available: 10000, jointAccount: { hasJointAccount: false, jointShareAmount: 0, jointShareCertain: true }, blockedSavings: 0 },
      crypto: 4000,
    });
    const result = computeAllAssets(assets, PRICES);
    for (const l of result.lines) {
      expect(l.zakatAmount).toBeCloseTo(l.baseAmount * 0.025, 2);
    }
  });
});
