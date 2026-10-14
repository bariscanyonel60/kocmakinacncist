import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";

export function AboutBand() {
  return (
    <section className="bg-paper text-ink">
      <Container className="grid items-stretch gap-10 py-20 lg:grid-cols-12 lg:py-28">
        <div className="relative min-h-[360px] lg:col-span-7 lg:min-h-[640px]">
          <Image
            src="/images/cnc-torna-mil.jpg"
            alt="CNC tornada punta destekli çelik milin işlenmesi"
            fill
            sizes="(min-width: 1024px) 58vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="flex flex-col justify-center lg:col-span-5 lg:pl-6">
          <p className="eyebrow text-accent">KOC Makina</p>
          <h2 className="display mt-4 text-[clamp(2.2rem,4vw,4.2rem)]">
            Hassasiyetin üretime dönüştüğü nokta
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-ink/75">
            <p>
              KOC Makina, İstanbul&apos;da CNC torna ve hassas talaşlı imalat alanlarında üretim çözümleri sunan bir sanayi kuruluşudur. Teknik bilgi, modern üretim yöntemleri ve kalite odaklı yaklaşımı bir araya getirerek farklı sektörlerin parça üretim ihtiyaçlarına çözüm sunar.
            </p>
            <p>
              İş, teknik resimden başlar. Malzeme, tolerans ve adet netleşmeden tezgâh programı yazılmaz. Prototip ile seri üretim aynı ciddiyetle planlanır; ölçü kontrolü teslimin önündedir.
            </p>
          </div>
          <Link
            href="/kurumsal"
            className="mt-8 inline-flex w-fit items-center gap-3 border-b border-ink pb-1 text-xs font-semibold tracking-[0.18em] uppercase hover:border-accent hover:text-accent"
          >
            Kurumsal bilgi <span aria-hidden="true">→</span>
          </Link>
        </div>
      </Container>
    </section>
  );
}
