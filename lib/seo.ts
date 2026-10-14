import type { Metadata } from "next";
import { company } from "@/data/company";
import { cloudinaryEnabled, cloudinaryImageUrl } from "@/lib/cloudinary";

const shareImage = {
  url: cloudinaryImageUrl("/images/cnc-torna-kesim.jpg", { width: 1200 }),
  width: cloudinaryEnabled ? 1200 : 2400,
  height: cloudinaryEnabled ? 800 : 1600,
  alt: "CNC tornada kesici takım ile işlenen çelik mil",
};

export const homeTitle = "Koç Makina | CNC Torna, CNC Freze ve Hassas Talaşlı İmalat";

export const defaultDescription =
  "Koç Makina; CNC torna, CNC freze, hassas talaşlı imalat, prototip ve seri parça üretimi çözümleri sunar.";

type PageMetaInput = {
  title: string;
  description?: string;
  path: string;
  absolute?: boolean;
  index?: boolean;
};

export function pageMeta({
  title,
  description = defaultDescription,
  path,
  absolute = false,
  index = true,
}: PageMetaInput): Metadata {
  const fullTitle = absolute ? title : `${title} | ${company.shortName}`;
  const url = new URL(path, company.siteUrl).toString();

  return {
    title: absolute ? { absolute: fullTitle } : title,
    description,
    robots: { index, follow: true },
    alternates: { canonical: path },
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
      images: [shareImage],
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
  alternates: { canonical: "/" },
  openGraph: {
    title: homeTitle,
    description: defaultDescription,
    siteName: company.name,
    locale: "tr_TR",
    type: "website",
    images: [shareImage],
  },
  twitter: {
    card: "summary_large_image",
    title: homeTitle,
    description: defaultDescription,
    images: [shareImage],
  },
};
