import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { StickyCall } from "@/components/layout/StickyCall";
import { JsonLd } from "@/components/ui/JsonLd";
import { graphJsonLd, organizationJsonLd, websiteJsonLd } from "@/lib/jsonld";
import { getSiteContent } from "@/lib/site-content";

export default async function SiteLayout({ children }: LayoutProps<"/">) {
  const content = await getSiteContent();

  return (
    <>
      <JsonLd data={graphJsonLd([organizationJsonLd(), websiteJsonLd()])} />
      <a
        href="#icerik"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:bg-white focus:px-4 focus:py-3"
      >
        İçeriğe geç
      </a>
      <Header legalName={content.legalName} />
      <main id="icerik" className="max-w-full overflow-x-clip">
        {children}
      </main>
      <Footer blurb={content.footerBlurb} legalName={content.legalName} />
      <StickyCall />
    </>
  );
}
