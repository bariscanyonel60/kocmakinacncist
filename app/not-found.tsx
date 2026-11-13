import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { InternalLinks } from "@/components/ui/InternalLinks";
import { phoneHref, company } from "@/data/company";

export const metadata: Metadata = {
  title: { absolute: "Sayfa bulunamadı | KOC Makina" },
  description: "Aradığınız sayfa bulunamadı. CNC torna, hizmetler veya teklif sayfalarına buradan geçebilirsiniz.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  const phone = phoneHref();

  return (
    <section className="relative overflow-hidden bg-ink px-5 pt-28 pb-20 text-white md:px-8 lg:px-12">
      <div className="tech-grid pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto w-full max-w-[1440px]">
        <p className="font-display text-sm tracking-[0.28em] text-accent">404</p>
        <h1 className="mt-4 max-w-3xl font-display text-[clamp(2.4rem,7vw,5.2rem)] leading-[0.92] font-medium tracking-[-0.04em] uppercase">
          Sayfa üretim hattında yok.
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-metal">
          Bağlantı kırık veya adres değişmiş olabilir. Ana sayfaya dönün veya aşağıdaki üretim sayfalarından devam edin.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Button href="/">Ana sayfa</Button>
          <Button href="/iletisim" variant="secondary">
            Teklif Al
          </Button>
          {phone ? (
            <a
              href={phone}
              className="inline-flex min-h-11 items-center text-[11px] font-semibold tracking-[0.18em] text-white uppercase"
            >
              Ara · {company.phone}
            </a>
          ) : null}
        </div>

        <div className="mt-16 max-w-3xl">
          <InternalLinks invert title="Hızlı geçiş" />
        </div>

        <p className="mt-10 text-sm text-metal">
          Yol kaybolduysa{" "}
          <Link href="/hizmetler" className="underline underline-offset-4 hover:text-white">
            hizmetler
          </Link>{" "}
          veya{" "}
          <Link href="/galeri" className="underline underline-offset-4 hover:text-white">
            galeri
          </Link>{" "}
          üzerinden devam edebilirsiniz.
        </p>
      </div>
    </section>
  );
}
