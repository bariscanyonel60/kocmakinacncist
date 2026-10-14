import type { Faq } from "@/data/faq";

export function FaqList({ faqs, title = "Sık sorulan sorular" }: { faqs: Faq[]; title?: string }) {
  return (
    <section className="bg-white text-ink">
      <div className="mx-auto max-w-[1440px] px-5 py-20 md:px-10 lg:py-28">
        <h2 className="display text-[clamp(2.2rem,4vw,4rem)]">{title}</h2>
        <div className="mt-10 border-b border-ink/10">
          {faqs.map((faq) => (
            <details key={faq.question} className="group border-t border-ink/10">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-left text-lg font-medium">
                {faq.question}
                <span className="text-accent transition-transform group-open:rotate-45" aria-hidden="true">
                  +
                </span>
              </summary>
              <p className="max-w-3xl pb-6 leading-relaxed text-ink/75">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
