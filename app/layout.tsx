import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Calculateur de Zakât — Zakât al-Māl",
    template: "%s | Calculateur de Zakât",
  },
  description:
    "Calculez votre Zakât al-Māl en quelques minutes. Outil gratuit, confidentiel, basé sur les avis des savants de Ahl as-Sunnah.",
  metadataBase: new URL("https://www.zakatfacile.fr"),
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "www.zakatfacile.fr",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-neutral-0 text-neutral-900">
        {children}
      </body>
    </html>
  );
}
