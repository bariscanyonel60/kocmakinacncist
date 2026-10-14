import { ContactForm } from "@/components/contact/ContactForm";
import { Container } from "@/components/ui/Container";
import { RevealLines } from "@/components/ui/Reveal";
import { company, filled, phoneHref } from "@/data/company";

const checklist = ["Teknik resim veya 3D model", "Malzeme ve adet", "Kritik tolerans ve yüzey notu", "Beklenen termin"];

export function RfqSection({ index }: { index: string }) {
  const tel = phoneHref(company.phone);

  return (
    <section id="teklif-al" className="scroll-mt-20 bg-ink text-white">
      <Container className="grid gap-14 py-20 lg:grid-cols-12 lg:py-28">
        <div className="lg:col-span-5">
          <p className="eyebrow text-accent">{index} / Teklif</p>
          <h2 className="display mt-4 text-[clamp(2.4rem,5.4vw,5rem)]">
            <RevealLines lines={["Teknik çiziminiz", "hazır mı?"]} />
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-mist">
            Çiziminizi yükleyin; malzeme, adet ve tolerans üzerinden parça özelinde teklif hazırlayalım.
          </p>
          <ul className="mt-10 border-t border-white/15">
            {checklist.map((item, position) => (
              <li key={item} className="flex gap-4 border-b border-white/15 py-3 text-sm">
                <span className="w-6 shrink-0 font-display text-accent">{String(position + 1).padStart(2, "0")}</span>
                {item}
              </li>
            ))}
          </ul>
          {tel || filled(company.email) ? (
            <div className="mt-8 space-y-2 text-sm text-white/80">
              {tel ? (
                <a href={tel} className="block hover:text-accent">
                  {company.phone}
                </a>
              ) : null}
              {filled(company.email) ? (
                <a href={`mailto:${company.email}`} className="block hover:text-accent">
                  {company.email}
                </a>
              ) : null}
            </div>
          ) : null}
        </div>
        <div className="lg:col-span-7">
          <ContactForm tone="dark" />
        </div>
      </Container>
    </section>
  );
}
