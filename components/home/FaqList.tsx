import type { Faq } from "@/data/faq";
import { FaqAccordion } from "@/components/home/FaqAccordion";
import { RevealLines } from "@/components/ui/Reveal";

export function FaqList({
  faqs,
  title = "Sık sorulan sorular",
  index,
}: {
  faqs: Faq[];
  title?: string;
  index?: string;
}) {
  return (
    <section className="bg-white text-ink">
      <div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-20 md:px-10 lg:grid-cols-12 lg:py-28">
        <div className="lg:col-span-4">
          {index ? <p className="eyebrow text-accent">{index} / SSS</p> : null}
          <h2 className="display mt-4 text-[clamp(2.2rem,4vw,4rem)]">
            <RevealLines lines={[title]} />
          </h2>
        </div>
        <FaqAccordion faqs={faqs} className="lg:col-span-8" />
      </div>
    </section>
  );
}
