import type {
  AllAssets,
  AssetLineItem,
  MetalPrices,
} from "./types";
import { goldGramsToEuros, silverGramsToEuros } from "./prices";
import { ZAKAT_RATE } from "./constants";

interface AssetsResult {
  total: number;
  lines: AssetLineItem[];
}

// ── Helpers ──────────────────────────────────────────────────

function toZakat(amount: number): number {
  return Math.round(amount * ZAKAT_RATE * 100) / 100;
}

function line(
  label: string,
  baseAmount: number,
  opts?: { isEstimate?: boolean; hasComplexity?: boolean }
): AssetLineItem {
  return {
    label,
    baseAmount: Math.round(baseAmount * 100) / 100,
    zakatAmount: toZakat(baseAmount),
    ...opts,
  };
}

// ── Calculs par catégorie ─────────────────────────────────────

function computeLiquidAssets(
  assets: AllAssets["liquid"]
): AssetLineItem[] {
  const lines: AssetLineItem[] = [];

  // Liquidités disponibles (comptes courants, épargne, espèces)
  const liquidBase = assets.jointAccount.hasJointAccount
    ? assets.jointAccount.jointShareAmount
    : assets.available;

  if (liquidBase > 0) {
    const isEstimate =
      assets.jointAccount.hasJointAccount &&
      !assets.jointAccount.jointShareCertain;

    lines.push(
      line("Liquidités disponibles", liquidBase, { isEstimate })
    );
  }

  // Épargne bloquée (PEL, PEE, etc.)
  if (assets.blockedSavings > 0) {
    lines.push(line("Épargne bloquée (PEL, PEE…)", assets.blockedSavings));
  }

  return lines;
}

function computeGoldAssets(
  assets: AllAssets["gold"],
  prices: MetalPrices
): AssetLineItem[] {
  const lines: AssetLineItem[] = [];

  // Or de placement
  const investmentValue = assets.useGrams
    ? goldGramsToEuros(assets.investmentGrams, prices)
    : assets.investmentValue;

  if (investmentValue > 0) {
    lines.push(line("Or de placement", investmentValue));
  }

  // Bijoux en or (si inclus par l'utilisateur)
  if (assets.jewelry.included && assets.jewelry.value > 0) {
    lines.push(
      line("Bijoux en or (inclus par précaution)", assets.jewelry.value)
    );
  }

  return lines;
}

function computeSilverAssets(
  assets: AllAssets["silver"],
  prices: MetalPrices
): AssetLineItem[] {
  const value = assets.useGrams
    ? silverGramsToEuros(assets.grams, prices)
    : assets.value;

  if (value <= 0) return [];
  return [line("Argent métal", value)];
}

function computeFinancialAssets(
  assets: AllAssets["financial"]
): AssetLineItem[] {
  const lines: AssetLineItem[] = [];

  if (assets.stocks > 0) {
    lines.push(
      line("Actions (méthode simplifiée)", assets.stocks, {
        hasComplexity: true,
      })
    );
  }

  if (assets.etf > 0) {
    lines.push(
      line("ETF (méthode simplifiée)", assets.etf, { hasComplexity: true })
    );
  }

  if (assets.lifeInsurance > 0) {
    lines.push(line("Assurance-vie (valeur de rachat)", assets.lifeInsurance));
  }

  return lines;
}

function computeRealEstateAssets(
  assets: AllAssets["realEstate"]
): AssetLineItem[] {
  const lines: AssetLineItem[] = [];

  if (assets.availableRents > 0) {
    lines.push(line("Loyers disponibles non dépensés", assets.availableRents));
  }

  if (
    assets.resaleProperty.intentionConfirmed &&
    assets.resaleProperty.value > 0
  ) {
    lines.push(
      line(
        "Bien immobilier destiné à la revente",
        assets.resaleProperty.value,
        { isEstimate: true }
      )
    );
  }

  return lines;
}

function computeProfessionalAssets(
  assets: AllAssets["professional"]
): AssetLineItem[] {
  if (!assets.isActive) return [];

  const lines: AssetLineItem[] = [];

  if (assets.commercialStock > 0) {
    lines.push(
      line("Stock commercial", assets.commercialStock, { isEstimate: true })
    );
  }

  if (assets.treasury > 0) {
    lines.push(line("Trésorerie professionnelle", assets.treasury));
  }

  if (assets.receivables > 0) {
    lines.push(line("Créances récupérables", assets.receivables));
  }

  return lines;
}

// ── Point d'entrée ────────────────────────────────────────────

/**
 * Calcule l'ensemble des actifs zakātables.
 * Retourne le total et le détail par ligne.
 */
export function computeAllAssets(
  assets: AllAssets,
  prices: MetalPrices
): AssetsResult {
  const lines: AssetLineItem[] = [
    ...computeLiquidAssets(assets.liquid),
    ...computeGoldAssets(assets.gold, prices),
    ...computeSilverAssets(assets.silver, prices),
    ...computeFinancialAssets(assets.financial),
    ...computeRealEstateAssets(assets.realEstate),
    ...computeProfessionalAssets(assets.professional),
  ];

  // Cryptomonnaies
  if (assets.crypto > 0) {
    lines.push(
      line("Cryptomonnaies", assets.crypto, { hasComplexity: true })
    );
  }

  const total = lines.reduce((sum, l) => sum + l.baseAmount, 0);

  return { total: Math.round(total * 100) / 100, lines };
}
