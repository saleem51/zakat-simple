// ─────────────────────────────────────────────────────────────
// TYPES DU DOMAINE — Moteur Zakât al-Māl
// Ces types modélisent l'intégralité du domaine métier.
// Aucune dépendance UI, aucun import React.
// ─────────────────────────────────────────────────────────────

// ── Profil utilisateur ──────────────────────────────────────

export type UserLevel = "beginner" | "intermediate" | "advanced";

export interface UserProfile {
  level: UserLevel;
}

// ── Contexte du calcul ──────────────────────────────────────

export type NisabReference = "gold" | "silver";

export type HawlStatus = "confirmed" | "uncertain" | "no";

export interface CalculationContext {
  date: string; // ISO YYYY-MM-DD
  nisabReference: NisabReference;
  hawlStatus: HawlStatus;
}

// ── Actifs ──────────────────────────────────────────────────

export interface JointAccountDetail {
  hasJointAccount: boolean;
  jointShareAmount: number; // montant net retenu (déjà calculé)
  jointShareCertain: boolean;
}

export interface LiquidAssets {
  available: number; // comptes courants, épargne liquide, espèces
  jointAccount: JointAccountDetail;
  blockedSavings: number; // PEL, PEE, épargne bloquée
}

export interface JewelryDetail {
  included: boolean; // choix explicite de l'utilisateur
  value: number;
}

export interface GoldAssets {
  investmentGrams: number; // or de placement (lingots, pièces)
  investmentValue: number; // valeur si poids inconnu
  useGrams: boolean; // true = on utilise les grammes, false = valeur directe
  jewelry: JewelryDetail;
}

export interface SilverAssets {
  grams: number;
  value: number; // valeur si poids inconnu
  useGrams: boolean;
}

export interface FinancialAssets {
  stocks: number; // actions
  etf: number; // ETF
  lifeInsurance: number; // valeur de rachat assurance-vie
}

export interface ResaleProperty {
  intentionConfirmed: boolean; // intention de revente dès l'achat confirmée
  value: number;
}

export interface RealEstateAssets {
  availableRents: number; // loyers perçus non dépensés
  resaleProperty: ResaleProperty;
}

export interface ProfessionalAssets {
  isActive: boolean; // l'utilisateur exerce une activité indépendante
  commercialStock: number; // stock de marchandises
  treasury: number; // trésorerie professionnelle
  receivables: number; // créances récupérables
}

export interface AllAssets {
  liquid: LiquidAssets;
  gold: GoldAssets;
  silver: SilverAssets;
  financial: FinancialAssets;
  realEstate: RealEstateAssets;
  professional: ProfessionalAssets;
  crypto: number;
}

// ── Dettes ──────────────────────────────────────────────────

export interface AllDebts {
  personal: number; // dettes exigibles dans les 12 prochains mois
  professional: number; // dettes professionnelles immédiates
}

// ── Métadonnées pour l'indice de confiance ──────────────────

export interface CalculatorMeta {
  estimatesUsed: string[]; // liste des actifs estimés (labels humains)
  complexAssetsPresent: string[]; // actifs complexes présents
  advancedSectionOpened: boolean;
  jointShareCertain: boolean;
}

// ── Prix de l'or et de l'argent ─────────────────────────────

export interface MetalPrices {
  goldPricePerGram: number; // EUR/g
  silverPricePerGram: number; // EUR/g
  lastUpdated: string; // ISO date YYYY-MM-DD
  source: string;
}

// ── Résultats ────────────────────────────────────────────────

export interface AssetLineItem {
  label: string;
  baseAmount: number; // montant de l'actif
  zakatAmount: number; // zakāt due sur cet actif (baseAmount * 0.025)
  isEstimate?: boolean;
  hasComplexity?: boolean;
}

export interface DebtLineItem {
  label: string;
  amount: number; // montant déduit (positif → on soustrait)
}

export type ConfidenceLevel = "reliable" | "probably_reliable" | "verify";

export interface ConfidenceFactor {
  type: "positive" | "warning" | "negative";
  label: string;
}

export interface ConfidenceResult {
  level: ConfidenceLevel;
  factors: ConfidenceFactor[];
}

export interface ZakatResult {
  grossAssets: number;
  deductibleDebts: number;
  netZakatableWealth: number;
  nisabValue: number;
  isAboveNisab: boolean;
  zakatAmount: number;
  assetLines: AssetLineItem[];
  debtLines: DebtLineItem[];
  confidence: ConfidenceResult;
  calculationDate: string;
  nisabReference: NisabReference;
  hawlStatus: HawlStatus;
}

// ── État global du store (référence de type) ─────────────────

export interface ZakatStoreState {
  profile: UserProfile;
  context: CalculationContext;
  assets: AllAssets;
  debts: AllDebts;
  meta: CalculatorMeta;
  currentStep: number;
  result: ZakatResult | null;
}
