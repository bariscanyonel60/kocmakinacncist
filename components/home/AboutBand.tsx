import Image from "next/image";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { Container } from "@/components/ui/Container";
import { ImageReveal, Reveal, RevealLines } from "@/components/ui/Reveal";
import { companyStats, filled } from "@/data/company";

export function AboutBand() {
  const stats = companyStats.filter((stat) => filled(stat.value));

  return (
    <section className="bg-paper text-ink">
      <Container className="grid items-stretch gap-10 py-[var(--space-section)] lg:grid-cols-12">
        <ImageReveal className="relative min-h-[320px] sm:min-h-[400px] lg:col-span-7 lg:min-h-[640px]">
          <Image
            src="/images/cnc-torna-mil.jpg"
            alt="CNC tornada punta destekli çelik milin işlenmesi"
            fill
            sizes="(min-width: 1024px) 58vw, 100vw"
            quality={65}
            className="object-cover object-[center_30%] lg:object-center"
          />
        </ImageReveal>
        <div className="flex flex-col justify-center lg:col-span-5 lg:pl-6">
          <p className="eyebrow text-accent">01 / Hakkımızda</p>
          <h2 className="display mt-4 text-[clamp(2.2rem,4vw,4.2rem)]">
            <RevealLines lines={["Hassasiyetin", "üretime dönüştüğü", "nokta"]} />
          </h2>
          <Reveal className="mt-6 space-y-4 text-[var(--text-body)] leading-[var(--leading-body)] text-ink/75">
            <p>
              KOC Makina, İstanbul&apos;da CNC torna ve hassas talaşlı imalat alanlarında üretim çözümleri sunan bir
              sanayi kuruluşudur. Teknik bilgi, modern üretim yöntemleri ve kalite odaklı yaklaşımı bir araya getirir.
            </p>
            <p>
              İş, teknik çizim, model veya numune ile başlar. Malzeme, tolerans ve adet okunmadan tezgâh seçilmez. Amaç,
              parçayı bir kez doğru işlemek ve aynı şartname tekrar istendiğinde aynı yöntemi kullanmaktır.
            </p>
          </Reveal>
          {stats.length > 0 ? (
            <dl className="mt-10 grid grid-cols-2 border-t border-ink/15">
              {stats.map((stat) => (
                <div key={stat.label} className="border-b border-ink/15 py-5 odd:pr-4 even:border-l even:pl-4">
                  <dt className="text-[11px] tracking-[0.18em] text-ink/55 uppercase">{stat.label}</dt>
                  <dd className="mt-2 font-display text-4xl tracking-[-0.04em]">{stat.value}</dd>
                </div>
              ))}
            </dl>
          ) : null}
          <ArrowLink href="/kurumsal" variant="text" className="mt-8 w-fit">
            Kurumsal bilgi
          </ArrowLink>
        </div>
      </Container>
    </section>
  );
}
