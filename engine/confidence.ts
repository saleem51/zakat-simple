import type {
  CalculationContext,
  CalculatorMeta,
  ConfidenceFactor,
  ConfidenceLevel,
  ConfidenceResult,
} from "./types";

/**
 * Calcule l'indice de confiance du résultat.
 *
 * Règles (par ordre de priorité) :
 *
 * 1. ḥawl = 'no'
 *    → toujours "À vérifier"
 *
 * 2. ḥawl = 'uncertain' + actifs complexes ou estimations
 *    → "À vérifier"
 *
 * 3. ḥawl = 'uncertain' seul
 *    → au mieux "Probablement fiable"
 *
 * 4. ḥawl = 'confirmed'
 *    + aucune estimation, aucun actif complexe
 *    → "Fiable"
 *
 * 5. ḥawl = 'confirmed' + estimations ou actifs complexes
 *    → "Probablement fiable"
 */
export function computeConfidence(
  context: CalculationContext,
  meta: CalculatorMeta
): ConfidenceResult {
  const factors: ConfidenceFactor[] = [];
  let level: ConfidenceLevel;

  const hasEstimates = meta.estimatesUsed.length > 0;
  const hasComplex = meta.complexAssetsPresent.length > 0;
  const jointUncertain =
    !meta.jointShareCertain && meta.estimatesUsed.includes("compte joint");

  // ── Ḥawl ─────────────────────────────────────────────────
  if (context.hawlStatus === "confirmed") {
    factors.push({ type: "positive", label: "Ḥawl confirmé" });
  } else if (context.hawlStatus === "uncertain") {
    factors.push({ type: "warning", label: "Statut du ḥawl incertain" });
  } else {
    factors.push({ type: "negative", label: "Ḥawl non confirmé" });
  }

  // ── Estimations ──────────────────────────────────────────
  for (const estimate of meta.estimatesUsed) {
    factors.push({
      type: "warning",
      label: `Valeur estimée : ${estimate}`,
    });
  }

  // ── Actifs complexes ─────────────────────────────────────
  for (const complex of meta.complexAssetsPresent) {
    factors.push({
      type: "warning",
      label: `Méthode simplifiée : ${complex}`,
    });
  }

  // ── Section avancée non explorée ─────────────────────────
  if (!meta.advancedSectionOpened) {
    factors.push({
      type: "warning",
      label: "Section avancée non explorée",
    });
  }

  // ── Compte joint incertain ───────────────────────────────
  if (jointUncertain) {
    factors.push({
      type: "warning",
      label: "Part du compte joint incertaine",
    });
  }

  // ── Détermination du niveau ──────────────────────────────

  if (context.hawlStatus === "no") {
    level = "verify";
  } else if (context.hawlStatus === "uncertain") {
    level = hasEstimates || hasComplex ? "verify" : "probably_reliable";
  } else {
    // hawlStatus === 'confirmed'
    const hasIssues =
      hasEstimates ||
      hasComplex ||
      !meta.advancedSectionOpened ||
      jointUncertain;
    level = hasIssues ? "probably_reliable" : "reliable";
  }

  return { level, factors };
}

/** Libellé français de l'indice de confiance */
export function getConfidenceLabel(level: ConfidenceLevel): string {
  switch (level) {
    case "reliable":
      return "Résultat fiable";
    case "probably_reliable":
      return "Résultat probablement fiable";
    case "verify":
      return "Résultat à vérifier";
  }
}
