import { ContactForm } from "@/components/contact/ContactForm";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { Container } from "@/components/ui/Container";
import { RevealLines } from "@/components/ui/Reveal";
import { company, filled, phoneHref, whatsappHref } from "@/data/company";

const checklist = [
  "Teknik resim veya 3D model",
  "Malzeme ve adet",
  "Kritik tolerans ve yüzey notu",
  "Beklenen termin",
];

export function RfqSection({ index }: { index: string }) {
  const tel = phoneHref(company.phone);
  const whatsapp = whatsappHref();

  return (
    <section id="teklif-al" className="scroll-mt-20 bg-ink text-white">
      <Container className="grid gap-14 py-[var(--space-section)] lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="eyebrow text-accent">{index} / Teklif</p>
          <h2 className="display mt-4 text-[var(--text-display)]">
            <RevealLines lines={["CNC teklif:", "teknik çizim hazır mı?"]} />
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-mist">
            Projenizin teknik detaylarını paylaşın, üretim ihtiyaçlarınızı birlikte değerlendirelim.
          </p>
          <ul className="mt-10 border-t border-white/15">
            {checklist.map((item, position) => (
              <li key={item} className="flex gap-4 border-b border-white/15 py-3 text-sm">
                <span className="w-6 shrink-0 font-display text-accent">{String(position + 1).padStart(2, "0")}</span>
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            {whatsapp ? (
              <a
                href={whatsapp}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 border border-white/25 px-5 text-xs font-semibold tracking-[0.16em] uppercase transition-colors hover:border-accent hover:text-accent"
              >
                WhatsApp ile iletişime geç
              </a>
            ) : null}
            {tel ? (
              <a
                href={tel}
                className="inline-flex min-h-12 items-center justify-center px-2 text-sm text-white/80 transition-colors hover:text-accent"
              >
                {company.phone}
              </a>
            ) : null}
          </div>
          {filled(company.email) ? (
            <a href={`mailto:${company.email}`} className="mt-4 block text-sm text-white/70 hover:text-accent">
              {company.email}
            </a>
          ) : null}
          <ArrowLink href="/iletisim#teklif" variant="text" className="mt-8 w-fit text-white">
            İletişim sayfasında aç
          </ArrowLink>
        </div>
        <div className="lg:col-span-7">
          <p className="mb-4 text-[11px] font-semibold tracking-[0.16em] text-accent uppercase">
            Teknik çizim yükle ve teklif al
          </p>
          <ContactForm tone="dark" />
        </div>
      </Container>
    </section>
  );
}
