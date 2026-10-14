import type { MetadataRoute } from "next";
import { company } from "@/data/company";
import { services } from "@/data/services";

const staticPaths = [
  "/",
  "/kurumsal",
  "/hizmetler",
  "/makine-parkuru",
  "/uretim",
  "/sektorler",
  "/kalite",
  "/galeri",
  "/iletisim",
  "/istanbul-cnc-torna",
  "/gizlilik-politikasi",
  "/kvkk",
  "/cerez-politikasi",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...staticPaths.map((path) => ({
      url: new URL(path, company.siteUrl).toString(),
      changeFrequency: "monthly" as const,
      priority: path === "/" ? 1 : 0.7,
    })),
    ...services.map((service) => ({
      url: new URL(`/hizmetler/${service.slug}`, company.siteUrl).toString(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
