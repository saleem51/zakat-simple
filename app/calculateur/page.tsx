import type { Metadata } from "next";
import { CalculatorShell } from "@/components/calculator/CalculatorShell";

export const metadata: Metadata = {
  title: "Calculer ma Zakāt al-Māl",
  description:
    "Calculez votre Zakāt annuelle sur la richesse. Outil confidentiel, calcul 100 % sur votre appareil.",
  robots: { index: false, follow: false },
};

export default function CalculateurPage() {
  return <CalculatorShell />;
}
