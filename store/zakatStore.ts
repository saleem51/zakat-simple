"use client";

import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { STORE_SESSION_KEY, CALCULATOR_STEPS } from "@/engine/constants";
import type {
  AllAssets,
  AllDebts,
  CalculationContext,
  CalculatorMeta,
  UserProfile,
  ZakatResult,
} from "@/engine/types";

// ── Valeurs initiales ────────────────────────────────────────

const defaultProfile: UserProfile = { level: "beginner" };

const defaultContext: CalculationContext = {
  date: new Date().toISOString().split("T")[0] ?? "",
  nisabReference: "gold",
  hawlStatus: "confirmed",
};

const defaultAssets: AllAssets = {
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
};

const defaultDebts: AllDebts = {
  personal: 0,
  professional: 0,
};

const defaultMeta: CalculatorMeta = {
  estimatesUsed: [],
  complexAssetsPresent: [],
  advancedSectionOpened: false,
  jointShareCertain: true,
};

// ── Interface du store ───────────────────────────────────────

interface ZakatStore {
  // État
  profile: UserProfile;
  context: CalculationContext;
  assets: AllAssets;
  debts: AllDebts;
  meta: CalculatorMeta;
  currentStep: number;
  result: ZakatResult | null;

  // Actions — profil
  setLevel: (level: UserProfile["level"]) => void;

  // Actions — contexte
  setContext: (ctx: Partial<CalculationContext>) => void;

  // Actions — actifs
  setLiquidAssets: (liquid: Partial<AllAssets["liquid"]>) => void;
  setGoldAssets: (gold: Partial<AllAssets["gold"]>) => void;
  setSilverAssets: (silver: Partial<AllAssets["silver"]>) => void;
  setFinancialAssets: (financial: Partial<AllAssets["financial"]>) => void;
  setRealEstateAssets: (realEstate: Partial<AllAssets["realEstate"]>) => void;
  setProfessionalAssets: (
    professional: Partial<AllAssets["professional"]>
  ) => void;
  setCrypto: (crypto: number) => void;

  // Actions — dettes
  setDebts: (debts: Partial<AllDebts>) => void;

  // Actions — méta
  setMeta: (meta: Partial<CalculatorMeta>) => void;
  addEstimate: (label: string) => void;
  removeEstimate: (label: string) => void;
  addComplexAsset: (label: string) => void;

  // Navigation
  goToStep: (step: number) => void;
  nextStep: () => void;
  prevStep: () => void;

  // Résultat
  setResult: (result: ZakatResult | null) => void;

  // Reset complet
  reset: () => void;
}

// ── Store ────────────────────────────────────────────────────

export const useZakatStore = create<ZakatStore>()(
  persist(
    (set) => ({
      // État initial
      profile: defaultProfile,
      context: { ...defaultContext, date: new Date().toISOString().split("T")[0] ?? "" },
      assets: defaultAssets,
      debts: defaultDebts,
      meta: defaultMeta,
      currentStep: 1,
      result: null,

      // Profil
      setLevel: (level) =>
        set((s) => ({ profile: { ...s.profile, level } })),

      // Contexte
      setContext: (ctx) =>
        set((s) => ({ context: { ...s.context, ...ctx } })),

      // Actifs — granulaires pour éviter les re-renders inutiles
      setLiquidAssets: (liquid) =>
        set((s) => ({
          assets: { ...s.assets, liquid: { ...s.assets.liquid, ...liquid } },
        })),

      setGoldAssets: (gold) =>
        set((s) => ({
          assets: { ...s.assets, gold: { ...s.assets.gold, ...gold } },
        })),

      setSilverAssets: (silver) =>
        set((s) => ({
          assets: { ...s.assets, silver: { ...s.assets.silver, ...silver } },
        })),

      setFinancialAssets: (financial) =>
        set((s) => ({
          assets: {
            ...s.assets,
            financial: { ...s.assets.financial, ...financial },
          },
        })),

      setRealEstateAssets: (realEstate) =>
        set((s) => ({
          assets: {
            ...s.assets,
            realEstate: { ...s.assets.realEstate, ...realEstate },
          },
        })),

      setProfessionalAssets: (professional) =>
        set((s) => ({
          assets: {
            ...s.assets,
            professional: { ...s.assets.professional, ...professional },
          },
        })),

      setCrypto: (crypto) =>
        set((s) => ({ assets: { ...s.assets, crypto } })),

      // Dettes
      setDebts: (debts) =>
        set((s) => ({ debts: { ...s.debts, ...debts } })),

      // Méta — indice de confiance
      setMeta: (meta) =>
        set((s) => ({ meta: { ...s.meta, ...meta } })),

      addEstimate: (label) =>
        set((s) => ({
          meta: {
            ...s.meta,
            estimatesUsed: s.meta.estimatesUsed.includes(label)
              ? s.meta.estimatesUsed
              : [...s.meta.estimatesUsed, label],
          },
        })),

      removeEstimate: (label) =>
        set((s) => ({
          meta: {
            ...s.meta,
            estimatesUsed: s.meta.estimatesUsed.filter((e) => e !== label),
          },
        })),

      addComplexAsset: (label) =>
        set((s) => ({
          meta: {
            ...s.meta,
            complexAssetsPresent: s.meta.complexAssetsPresent.includes(label)
              ? s.meta.complexAssetsPresent
              : [...s.meta.complexAssetsPresent, label],
          },
        })),

      // Navigation entre étapes
      goToStep: (step) =>
        set({ currentStep: Math.max(1, Math.min(step, CALCULATOR_STEPS)) }),

      nextStep: () =>
        set((s) => ({
          currentStep: Math.min(s.currentStep + 1, CALCULATOR_STEPS),
        })),

      prevStep: () =>
        set((s) => ({
          currentStep: Math.max(s.currentStep - 1, 1),
        })),

      // Résultat
      setResult: (result) => set({ result }),

      // Reset
      reset: () =>
        set({
          profile: defaultProfile,
          context: {
            ...defaultContext,
            date: new Date().toISOString().split("T")[0] ?? "",
          },
          assets: defaultAssets,
          debts: defaultDebts,
          meta: defaultMeta,
          currentStep: 1,
          result: null,
        }),
    }),
    {
      name: STORE_SESSION_KEY,
      storage: createJSONStorage(() =>
        typeof window !== "undefined"
          ? sessionStorage
          : {
              getItem: () => null,
              setItem: () => {},
              removeItem: () => {},
            }
      ),
      skipHydration: true,
    }
  )
);
