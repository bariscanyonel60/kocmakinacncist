import type { MetadataRoute } from "next";
import { blogPosts } from "@/data/blog";
import { services } from "@/data/services";
import { getSiteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  const paths = [
    "/",
    "/kurumsal",
    "/hizmetler",
    "/makine-parkuru",
    "/uretim",
    "/sektorler",
    "/galeri",
    "/blog",
    "/iletisim",
    "/istanbul-cnc-torna",
    "/gizlilik-politikasi",
    "/kvkk",
    "/cerez-politikasi",
    ...services.map((service) => `/hizmetler/${service.slug}`),
    ...blogPosts.map((post) => `/blog/${post.slug}`),
  ];

  return paths.map((path) => ({
    url: new URL(path, base).toString(),
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
