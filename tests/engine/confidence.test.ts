import { describe, it, expect } from "vitest";
import { computeConfidence, getConfidenceLabel } from "@/engine/confidence";
import type { CalculationContext, CalculatorMeta } from "@/engine/types";

function makeContext(
  hawlStatus: CalculationContext["hawlStatus"] = "confirmed"
): CalculationContext {
  return { date: "2026-06-09", nisabReference: "gold", hawlStatus };
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

describe("computeConfidence — règle 1 : ḥawl = 'no'", () => {
  it("retourne toujours 'verify' si ḥawl = no", () => {
    const result = computeConfidence(makeContext("no"), makeMeta());
    expect(result.level).toBe("verify");
  });

  it("retourne 'verify' même si aucune estimation ni actif complexe", () => {
    const result = computeConfidence(
      makeContext("no"),
      makeMeta({ estimatesUsed: [], complexAssetsPresent: [] })
    );
    expect(result.level).toBe("verify");
  });
});

describe("computeConfidence — règle 2 & 3 : ḥawl = 'uncertain'", () => {
  it("retourne 'verify' si ḥawl incertain + actifs complexes", () => {
    const result = computeConfidence(
      makeContext("uncertain"),
      makeMeta({ complexAssetsPresent: ["Actions"] })
    );
    expect(result.level).toBe("verify");
  });

  it("retourne 'verify' si ḥawl incertain + estimations", () => {
    const result = computeConfidence(
      makeContext("uncertain"),
      makeMeta({ estimatesUsed: ["immobilier"] })
    );
    expect(result.level).toBe("verify");
  });

  it("retourne 'probably_reliable' si ḥawl incertain mais aucun problème", () => {
    const result = computeConfidence(
      makeContext("uncertain"),
      makeMeta()
    );
    expect(result.level).toBe("probably_reliable");
  });
});

describe("computeConfidence — règle 4 : ḥawl = 'confirmed'", () => {
  it("retourne 'reliable' si tout est parfait", () => {
    const result = computeConfidence(makeContext("confirmed"), makeMeta());
    expect(result.level).toBe("reliable");
  });

  it("retourne 'probably_reliable' si estimations présentes", () => {
    const result = computeConfidence(
      makeContext("confirmed"),
      makeMeta({ estimatesUsed: ["stock commercial"] })
    );
    expect(result.level).toBe("probably_reliable");
  });

  it("retourne 'probably_reliable' si actifs complexes présents", () => {
    const result = computeConfidence(
      makeContext("confirmed"),
      makeMeta({ complexAssetsPresent: ["Actions (méthode simplifiée)"] })
    );
    expect(result.level).toBe("probably_reliable");
  });

  it("retourne 'probably_reliable' si section avancée non ouverte", () => {
    const result = computeConfidence(
      makeContext("confirmed"),
      makeMeta({ advancedSectionOpened: false })
    );
    expect(result.level).toBe("probably_reliable");
  });

  it("retourne 'probably_reliable' si part compte joint incertaine", () => {
    const result = computeConfidence(
      makeContext("confirmed"),
      makeMeta({
        jointShareCertain: false,
        estimatesUsed: ["compte joint"],
      })
    );
    expect(result.level).toBe("probably_reliable");
  });
});

describe("computeConfidence — facteurs retournés", () => {
  it("inclut un facteur positif si ḥawl confirmé", () => {
    const result = computeConfidence(makeContext("confirmed"), makeMeta());
    const positive = result.factors.filter((f) => f.type === "positive");
    expect(positive.length).toBeGreaterThanOrEqual(1);
    expect(positive[0]?.label).toContain("awl");
  });

  it("inclut un facteur négatif si ḥawl = no", () => {
    const result = computeConfidence(makeContext("no"), makeMeta());
    const negative = result.factors.filter((f) => f.type === "negative");
    expect(negative.length).toBeGreaterThanOrEqual(1);
  });

  it("inclut un facteur warning par estimation utilisée", () => {
    const result = computeConfidence(
      makeContext("confirmed"),
      makeMeta({ estimatesUsed: ["immobilier", "stock"] })
    );
    const warnings = result.factors.filter((f) => f.type === "warning");
    expect(warnings.length).toBeGreaterThanOrEqual(2);
  });
});

describe("getConfidenceLabel", () => {
  it("retourne le bon libellé pour chaque niveau", () => {
    expect(getConfidenceLabel("reliable")).toBe("Résultat fiable");
    expect(getConfidenceLabel("probably_reliable")).toBe(
      "Résultat probablement fiable"
    );
    expect(getConfidenceLabel("verify")).toBe("Résultat à vérifier");
  });
});
