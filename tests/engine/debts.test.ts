import { describe, it, expect } from "vitest";
import { computeDeductibleDebts } from "@/engine/debts";
import type { AllDebts } from "@/engine/types";

function makeDebts(overrides: Partial<AllDebts> = {}): AllDebts {
  return {
    personal: 0,
    professional: 0,
    ...overrides,
  };
}

describe("computeDeductibleDebts — cas de base", () => {
  it("retourne 0 si aucune dette", () => {
    const result = computeDeductibleDebts(makeDebts());
    expect(result.total).toBe(0);
    expect(result.lines).toHaveLength(0);
  });

  it("déduit les dettes personnelles courantes", () => {
    const result = computeDeductibleDebts(makeDebts({ personal: 2000 }));
    expect(result.total).toBe(2000);
    expect(result.lines[0]?.label).toContain("personnelles");
  });

  it("déduit les dettes professionnelles immédiates", () => {
    const result = computeDeductibleDebts(makeDebts({ professional: 1500 }));
    expect(result.total).toBe(1500);
  });

  it("additionne correctement plusieurs dettes", () => {
    const result = computeDeductibleDebts(
      makeDebts({ personal: 1000, professional: 500 })
    );
    expect(result.total).toBe(1500);
    expect(result.lines).toHaveLength(2);
  });
});
