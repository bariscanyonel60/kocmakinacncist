import type { Metadata } from "next";
import { company } from "@/data/company";

const defaultDescription =
  "KOC Makina; İstanbul'da CNC torna, CNC işleme, talaşlı imalat ve hassas parça üretimi çözümleri sunar. Projeniz için bizimle iletişime geçin.";

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
      images: [
        {
          url: "/images/cnc-torna-kesim.jpg",
          width: 2400,
          height: 1600,
          alt: "CNC tornada kesici takım ile işlenen çelik mil",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [
        {
          url: "/images/cnc-torna-kesim.jpg",
          alt: "CNC tornada kesici takım ile işlenen çelik mil",
        },
      ],
    },
  };
}

export const rootMetadata: Metadata = {
  metadataBase: new URL(company.siteUrl),
  title: {
    default: "CNC Torna İstanbul | Hassas CNC İşleme | KOC Makina",
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
    title: "CNC Torna İstanbul | Hassas CNC İşleme | KOC Makina",
    description: defaultDescription,
    siteName: company.name,
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: "/images/cnc-torna-kesim.jpg",
        width: 2400,
        height: 1600,
        alt: "CNC tornada kesici takım ile işlenen çelik mil",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CNC Torna İstanbul | Hassas CNC İşleme | KOC Makina",
    description: defaultDescription,
    images: [
      {
        url: "/images/cnc-torna-kesim.jpg",
        alt: "CNC tornada kesici takım ile işlenen çelik mil",
      },
    ],
  },
};
