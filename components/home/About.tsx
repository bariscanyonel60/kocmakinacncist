import Image from "next/image";
import { images } from "@/data/media";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const points = [
  { title: "Teknik çizim", text: "Üretim, sözlü tarif yerine ölçü ve malzeme tanımıyla başlar." },
  { title: "Yöntem seçimi", text: "Dönel form tornada, prizmatik yüzey işlemede planlanır." },
  { title: "Ölçü kontrolü", text: "Kritik ölçüler çizimden ayrılır ve üretim sonunda doğrulanır." },
];

export function About() {
  return (
    <section className="bg-paper text-ink" aria-labelledby="hakkinda-baslik">
      <div className="grid lg:grid-cols-2">
        <div className="relative min-h-[420px] lg:min-h-[720px]">
          <Image
            src={images.cncChuck}
            alt="CNC torna aynasına bağlanmış metal iş parçası"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
        <Container className="flex items-center py-16 lg:py-24">
          <Reveal>
            <p className="text-[11px] font-semibold tracking-[0.28em] text-accent uppercase">KOC Makina</p>
            <h2
              id="hakkinda-baslik"
              className="mt-4 font-display text-[clamp(2rem,4.4vw,3.8rem)] leading-[0.96] font-medium tracking-[-0.035em] uppercase"
            >
              Hassasiyetin üretime dönüştüğü nokta
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted md:text-lg">
              <p>
                KOC Makina, İstanbul’da CNC torna ve hassas talaşlı imalat alanlarında üretim çözümleri sunan bir sanayi kuruluşudur. Teknik bilgi, modern üretim yöntemleri ve kalite odaklı yaklaşımı bir araya getirerek farklı sektörlerin parça üretim ihtiyaçlarına çözüm sunar.
              </p>
              <p>
                İş, teknik çizim, model veya numune ile başlar. Malzeme, tolerans ve adet okunmadan tezgah seçilmez. Amaç, parçayı bir kez doğru işlemek ve aynı şartname tekrar istendiğinde aynı yöntemi kullanmaktır.
              </p>
            </div>
            <ul className="mt-10 divide-y divide-ink/10 border-y border-ink/10">
              {points.map((point) => (
                <li key={point.title} className="grid gap-2 py-4 sm:grid-cols-[180px_1fr] sm:gap-6">
                  <p className="font-display text-sm tracking-[0.12em] uppercase">{point.title}</p>
                  <p className="text-sm leading-relaxed text-muted">{point.text}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </div>
    </section>
  );
}
