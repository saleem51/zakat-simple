// ─────────────────────────────────────────────────────────────
// CONSTANTES RELIGIEUSES ET FINANCIÈRES
//
// Ces valeurs sont centralisées ici pour être facilement
// modifiables sans toucher à la logique de calcul.
//
// Nisāb :
//   - 85g d'or  → valeur retenue par la majorité des savants
//     contemporains comme Shaykh Ibn al-'Uthaymīn رحمه الله
//   - 595g d'argent → valeur retenue selon les références
//     salafies contemporaines
//
// Note : Shaykh Ibn Bāz رحمه الله mentionne une estimation
// autour de 92g d'or selon la conversion du mithqāl.
// Ces valeurs sont des valeurs par défaut — voir /sources.
// ─────────────────────────────────────────────────────────────

/** Taux de la Zakāt al-Māl : 2,5 % = 1/40 */
export const ZAKAT_RATE = 0.025;

/** Nisāb en or : 85 grammes */
export const GOLD_NISAB_GRAMS = 85;

/** Nisāb en argent : 595 grammes */
export const SILVER_NISAB_GRAMS = 595;

/** Nombre d'étapes du calculateur */
export const CALCULATOR_STEPS = 5;

/** Clé de sessionStorage pour la persistance du store */
export const STORE_SESSION_KEY = "zakat-calculator-state";
