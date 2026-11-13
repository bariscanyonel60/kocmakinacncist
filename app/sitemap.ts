import type { MetadataRoute } from "next";
import { articles } from "@/data/articles";
import { company } from "@/data/company";
import { getServices } from "@/lib/services-content";

const BCY_ARTICLE_SLUG = "web-tasarimi-bcy-dijital";

const staticPaths = [
  "/",
  "/kurumsal",
  "/hizmetler",
  "/makine-parkuru",
  "/uretim",
  "/sektorler",
  "/kalite",
  "/galeri",
  "/makaleler",
  "/iletisim",
  "/istanbul-cnc-torna",
  "/gizlilik-politikasi",
  "/kvkk",
  "/cerez-politikasi",
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const services = await getServices();
  const bcyFirst = [...articles].sort((a, b) => {
    if (a.slug === BCY_ARTICLE_SLUG) return -1;
    if (b.slug === BCY_ARTICLE_SLUG) return 1;
    return 0;
  });

  return [
    ...staticPaths.map((path) => ({
      url: new URL(path, company.siteUrl).toString(),
      changeFrequency: "monthly" as const,
      priority: path === "/" ? 1 : path === "/makaleler" ? 0.85 : 0.7,
    })),
    ...services.map((service) => ({
      url: new URL(`/hizmetler/${service.slug}`, company.siteUrl).toString(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...bcyFirst.map((article) => ({
      url: new URL(`/makaleler/${article.slug}`, company.siteUrl).toString(),
      changeFrequency: "monthly" as const,
      priority: article.slug === BCY_ARTICLE_SLUG ? 0.9 : 0.75,
      lastModified: article.publishedAt,
    })),
  ];
}
