import Image from "next/image";
import Link from "next/link";
import { machines } from "@/data/machines";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Machines() {
  return (
    <section className="bg-paper py-20 text-ink md:py-28" aria-labelledby="makine-baslik">
      <Container>
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            index="05"
            eyebrow="Makine parkuru"
            title={<span id="makine-baslik">Teknolojimiz</span>}
            text="Üretimde hassasiyet, doğru teknolojiyle başlar."
          />
          <Link href="/makine-parkuru" className="text-[11px] font-semibold tracking-[0.18em] uppercase">
            Parkuru incele <span aria-hidden="true">→</span>
          </Link>
        </div>
        <p className="mt-8 max-w-3xl text-sm leading-relaxed text-muted">
          Görseller üretim yöntemini anlatır. Marka, model, çap, boy ve hassasiyet alanları gerçek tezgah verisi girilene kadar boş bırakıldı.
        </p>
        <ul className="mt-10 grid gap-10 lg:grid-cols-3">
          {machines.map((machine) => (
            <li key={machine.id} className="border-t border-ink/15 pt-5">
              <div className="relative mb-5 aspect-[4/3] overflow-hidden bg-ink">
                <Image src={machine.image} alt={machine.imageAlt} fill sizes="(min-width: 1024px) 30vw, 100vw" className="object-cover" />
              </div>
              <h3 className="font-display text-2xl tracking-[-0.03em] uppercase">{machine.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{machine.summary}</p>
              <p className="mt-4 text-[11px] tracking-[0.16em] text-metal uppercase">Teknik değer bilgisi eklenecek</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
