import type { MetadataRoute } from "next";
import { company } from "@/data/company";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/tesekkurler"],
    },
    sitemap: new URL("/sitemap.xml", company.siteUrl).toString(),
    host: company.siteUrl,
  };
}
