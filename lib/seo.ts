import type { Metadata } from "next";
import { company } from "@/data/company";
import { images } from "@/data/media";

export function getSiteUrl() {
  return company.siteUrl.replace(/\/$/, "");
}

export const defaultOgImage = images.ogDefault;

type PageMetaInput = {
  title: string;
  description: string;
  path: string;
  image?: string;
  noIndex?: boolean;
};

export function pageMeta({ title, description, path, image, noIndex }: PageMetaInput): Metadata {
  const url = new URL(path, getSiteUrl()).toString();
  const ogImage = new URL(image ?? defaultOgImage, getSiteUrl()).toString();

  return {
    title: { absolute: title },
    description,
    alternates: { canonical: path },
    robots: noIndex ? { index: false, follow: false } : { index: true, follow: true },
    openGraph: {
      title,
      description,
      url,
      siteName: company.name,
      locale: "tr_TR",
      type: "website",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${company.name} — CNC torna ve talaşlı imalat`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export const defaultTitle = "CNC Torna İstanbul | Hassas CNC İşleme | KOC Makina";

export const defaultDescription =
  "KOC Makina; Başakşehir İkitelli’de CNC torna, CNC işleme ve talaşlı imalat ile teknik çizime göre metal parça üretir. Teklif için iletişime geçin.";
