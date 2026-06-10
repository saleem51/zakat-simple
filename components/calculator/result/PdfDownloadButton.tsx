"use client";

import { useState } from "react";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { ZakatResult } from "@/engine/types";

interface PdfDownloadButtonProps {
  result: ZakatResult;
}

/**
 * Bouton de téléchargement PDF avec lazy loading.
 * La librairie @react-pdf/renderer est importée uniquement au clic.
 */
export function PdfDownloadButton({ result }: PdfDownloadButtonProps) {
  const [loading, setLoading] = useState(false);

  const handleDownload = async () => {
    setLoading(true);
    try {
      const { generatePdf } = await import("@/pdf/ZakatReport");
      await generatePdf(result);
    } catch (error) {
      console.error("Erreur génération PDF:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button
      onClick={handleDownload}
      disabled={loading}
      fullWidth
      className="gap-2"
    >
      <Download className="h-4 w-4" aria-hidden />
      {loading ? "Génération en cours…" : "Télécharger le PDF"}
    </Button>
  );
}
