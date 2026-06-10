import { describe, it, expect } from "vitest";
import { computeZakat } from "@/engine/zakat";
import type {
  AllAssets,
  AllDebts,
  CalculationContext,
  CalculatorMeta,
  MetalPrices,
} from "@/engine/types";

const PRICES: MetalPrices = {
  goldPricePerGram: 100,
  silverPricePerGram: 1,
  lastUpdated: "2026-06-09",
  source: "Test",
};

// Nisāb or = 85 × 100 = 8 500 €

function makeContext(
  overrides: Partial<CalculationContext> = {}
): CalculationContext {
  return {
    date: "2026-06-09",
    nisabReference: "gold",
    hawlStatus: "confirmed",
    ...overrides,
  };
}

function makeMeta(overrides: Partial<CalculatorMeta> = {}): CalculatorMeta {
  return {
    estimatesUsed: [],
    complexAssetsPresent: [],
    advancedSectionOpened: true,
    jointShareCertain: true,
    ...overrides,
  };
}

function makeAssets(liquid = 0): AllAssets {
  return {
    liquid: {
      available: liquid,
      jointAccount: { hasJointAccount: false, jointShareAmount: 0, jointShareCertain: true },
      blockedSavings: 0,
    },
    gold: { investmentGrams: 0, investmentValue: 0, useGrams: false, jewelry: { included: false, value: 0 } },
    silver: { grams: 0, value: 0, useGrams: false },
    financial: { stocks: 0, etf: 0, lifeInsurance: 0 },
    realEstate: { availableRents: 0, resaleProperty: { intentionConfirmed: false, value: 0 } },
    professional: { isActive: false, commercialStock: 0, treasury: 0, receivables: 0 },
    crypto: 0,
  };
}

function makeDebts(personal = 0): AllDebts {
  return {
    personal,
    professional: 0,
  };
}

describe("computeZakat — résultat au-dessus du nisāb", () => {
  it("calcule la zakāt à 2,5 % du patrimoine net", () => {
    const result = computeZakat(
      makeAssets(10000),
      makeDebts(),
      makeContext(),
      makeMeta(),
      PRICES
    );
    expect(result.zakatAmount).toBe(250); // 10 000 × 2,5%
    expect(result.isAboveNisab).toBe(true);
    expect(result.netZakatableWealth).toBe(10000);
  });

  it("déduit les dettes avant de calculer la zakāt", () => {
    const result = computeZakat(
      makeAssets(15000),
      makeDebts(5000),
      makeContext(),
      makeMeta(),
      PRICES
    );
    expect(result.netZakatableWealth).toBe(10000);
    expect(result.zakatAmount).toBe(250);
  });

  it("zakāt = 0 si patrimoine net < nisāb", () => {
    const result = computeZakat(
      makeAssets(5000), // < 8500 (nisāb or)
      makeDebts(),
      makeContext(),
      makeMeta(),
      PRICES
    );
    expect(result.isAboveNisab).toBe(false);
    expect(result.zakatAmount).toBe(0);
  });

  it("zakāt due si patrimoine net = nisāb exactement", () => {
    const result = computeZakat(
      makeAssets(8500), // = nisāb or (85 × 100)
      makeDebts(),
      makeContext(),
      makeMeta(),
      PRICES
    );
    expect(result.isAboveNisab).toBe(true);
    expect(result.zakatAmount).toBeCloseTo(212.5);
  });
});

describe("computeZakat — patrimoine net jamais négatif", () => {
  it("le patrimoine net est 0 si les dettes dépassent les actifs", () => {
    const result = computeZakat(
      makeAssets(1000),
      makeDebts(5000),
      makeContext(),
      makeMeta(),
      PRICES
    );
    expect(result.netZakatableWealth).toBe(0);
    expect(result.zakatAmount).toBe(0);
  });
});

describe("computeZakat — nisāb argent", () => {
  it("utilise le nisāb argent si référence = silver", () => {
    // Nisāb argent = 595 × 1 = 595 €
    const result = computeZakat(
      makeAssets(600), // > 595 (nisāb argent)
      makeDebts(),
      makeContext({ nisabReference: "silver" }),
      makeMeta(),
      PRICES
    );
    expect(result.isAboveNisab).toBe(true);
    expect(result.nisabValue).toBe(595);
  });

  it("patrimoine < nisāb argent → zakāt = 0", () => {
    const result = computeZakat(
      makeAssets(400), // < 595
      makeDebts(),
      makeContext({ nisabReference: "silver" }),
      makeMeta(),
      PRICES
    );
    expect(result.isAboveNisab).toBe(false);
    expect(result.zakatAmount).toBe(0);
  });
});

describe("computeZakat — métadonnées résultat", () => {
  it("retourne la date, la référence et le statut du ḥawl", () => {
    const result = computeZakat(
      makeAssets(10000),
      makeDebts(),
      makeContext({ date: "2026-01-01", hawlStatus: "uncertain" }),
      makeMeta(),
      PRICES
    );
    expect(result.calculationDate).toBe("2026-01-01");
    expect(result.nisabReference).toBe("gold");
    expect(result.hawlStatus).toBe("uncertain");
  });

  it("retourne une ventilation des actifs par ligne", () => {
    const result = computeZakat(
      makeAssets(10000),
      makeDebts(2000),
      makeContext(),
      makeMeta(),
      PRICES
    );
    expect(result.assetLines.length).toBeGreaterThan(0);
    expect(result.debtLines.length).toBeGreaterThan(0);
    expect(result.grossAssets).toBe(10000);
    expect(result.deductibleDebts).toBe(2000);
  });
});
