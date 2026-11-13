import type { Metadata } from "next";
import { company } from "@/data/company";
import { cloudinaryEnabled, cloudinaryImageUrl } from "@/lib/cloudinary";

const defaultShareImage = {
  url: cloudinaryImageUrl("/images/cnc-torna-kesim.jpg", { width: 1200 }),
  width: cloudinaryEnabled ? 1200 : 2400,
  height: cloudinaryEnabled ? 800 : 1600,
  alt: "CNC tornada kesici takım ile işlenen çelik mil — Koç Makina İstanbul",
};

export const homeTitle = "Koç Makina | CNC Torna, CNC Freze ve Hassas Talaşlı İmalat";

export const defaultDescription =
  "Koç Makina; İstanbul Başakşehir İkitelli'de CNC torna, CNC freze, hassas talaşlı imalat, prototip ve seri parça üretimi. Teknik resimle teklif alın.";

type PageMetaInput = {
  title: string;
  description?: string;
  path: string;
  absolute?: boolean;
  index?: boolean;
  image?: string;
  imageAlt?: string;
};

export function pageMeta({
  title,
  description = defaultDescription,
  path,
  absolute = false,
  index = true,
  image,
  imageAlt,
}: PageMetaInput): Metadata {
  const fullTitle = absolute ? title : `${title} | ${company.shortName}`;
  const url = new URL(path, company.siteUrl).toString();
  const shareImage = image
    ? {
        url: cloudinaryImageUrl(image, { width: 1200 }),
        width: 1200,
        height: 800,
        alt: imageAlt ?? defaultShareImage.alt,
      }
    : defaultShareImage;

  return {
    title: absolute ? { absolute: fullTitle } : title,
    description,
    robots: { index, follow: true },
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: company.name,
      locale: "tr_TR",
      type: "website",
      images: [shareImage],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [shareImage.url],
    },
  };
}

export const rootMetadata: Metadata = {
  metadataBase: new URL(company.siteUrl),
  title: {
    default: homeTitle,
    template: `%s | ${company.shortName}`,
  },
  description: defaultDescription,
  applicationName: company.name,
  authors: [{ name: company.name }],
  creator: company.name,
  category: "manufacturing",
  robots: { index: true, follow: true },
  verification: { google: "qXyiHbK8KvZoO5R0__mvBLVQGxWxGoYacnz5bYjZick" },
  alternates: { canonical: "/" },
  openGraph: {
    title: homeTitle,
    description: defaultDescription,
    url: company.siteUrl,
    siteName: company.name,
    locale: "tr_TR",
    type: "website",
    images: [defaultShareImage],
  },
  twitter: {
    card: "summary_large_image",
    title: homeTitle,
    description: defaultDescription,
    images: [defaultShareImage.url],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
};
