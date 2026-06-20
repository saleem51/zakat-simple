import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const BASE_URL = "https://www.zakatfacile.fr";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  const routes = [
    { path: "/", priority: 1.0, changeFrequency: "monthly" as const },
    { path: "/calculateur", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/comment-calculer-sa-zakat", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/nisab", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/beneficiaires-zakat", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/qui-doit-payer-la-zakat", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/faq", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/sources", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/a-propos", priority: 0.5, changeFrequency: "yearly" as const },
    { path: "/confidentialite", priority: 0.3, changeFrequency: "yearly" as const },
  ];

  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${BASE_URL}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  }));
}
