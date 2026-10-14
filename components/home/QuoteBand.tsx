import Link from "next/link";
import { company, phoneHref } from "@/data/company";

export function QuoteBand() {
  const tel = phoneHref(company.phone);

  return (
    <section className="bg-ink text-white">
      <div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-20 md:px-10 lg:grid-cols-12 lg:py-28">
        <div className="lg:col-span-8">
          <h2 className="display text-[clamp(2.4rem,6vw,5.4rem)]">
            Teknik çiziminiz
            <span className="block">hazır mı?</span>
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-mist">
            Projenizi bizimle paylaşın, üretim ihtiyaçlarınızı birlikte değerlendirelim.
          </p>
        </div>
        <div className="flex flex-col items-start justify-end gap-4 lg:col-span-4">
          <Link
            href="/iletisim"
            className="inline-flex min-h-12 items-center bg-accent px-6 py-4 text-xs font-semibold tracking-[0.18em] uppercase hover:bg-white hover:text-ink"
          >
            Teklif Al →
          </Link>
          {tel ? (
            <a href={tel} className="text-xs font-semibold tracking-[0.18em] uppercase hover:text-accent">
              Bizi arayın
            </a>
          ) : null}
        </div>
      </div>
    </section>
  );
}
