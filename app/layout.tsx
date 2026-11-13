import type { Metadata, Viewport } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { StickyPhoneButton } from "@/components/layout/StickyPhoneButton";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { JsonLd } from "@/components/ui/JsonLd";
import { company } from "@/data/company";
import { reviews } from "@/data/reviews";
import { defaultDescription, defaultOgImage, defaultTitle, getSiteUrl } from "@/lib/seo";
import { localBusinessSchema, organizationSchema, reviewsSchema, websiteSchema } from "@/lib/schema";
import "./globals.css";

const space = Space_Grotesk({
  subsets: ["latin", "latin-ext"],
  variable: "--font-space",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin", "latin-ext"],
  variable: "--font-manrope",
  display: "swap",
});

const ogImageUrl = new URL(defaultOgImage, getSiteUrl()).toString();

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: { absolute: defaultTitle },
  description: defaultDescription,
  applicationName: company.name,
  alternates: { canonical: "/" },
  openGraph: {
    title: defaultTitle,
    description: defaultDescription,
    locale: "tr_TR",
    type: "website",
    siteName: company.name,
    url: getSiteUrl(),
    images: [
      {
        url: ogImageUrl,
        width: 2000,
        height: 1333,
        alt: `${company.name} — CNC torna ve talaşlı imalat`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    images: [ogImageUrl],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0B0D10",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" className={`${space.variable} ${manrope.variable} h-full antialiased`}>
      <body className="min-h-full">
        <JsonLd data={[organizationSchema(), localBusinessSchema(), websiteSchema(), reviewsSchema(reviews)]} />
        <a
          href="#icerik"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[80] focus:bg-white focus:px-4 focus:py-2 focus:text-ink"
        >
          İçeriğe geç
        </a>
        <Header />
        <main id="icerik" className="pb-20 md:pb-0">
          {children}
        </main>
        <Footer />
        <StickyPhoneButton />
        <WhatsAppButton />
      </body>
    </html>
  );
}
