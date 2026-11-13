import { reviews } from "@/data/reviews";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

/** Gerçek yorum gelmeden görünmez — sahte puan/yorum göstermez. */
export function Reviews() {
  if (reviews.length === 0) return null;

  return (
    <section className="bg-white py-20 text-ink md:py-28" aria-labelledby="yorum-baslik">
      <Container>
        <SectionHeading
          index="10"
          eyebrow="Yorumlar"
          title={<span id="yorum-baslik">Müşteri geri bildirimleri</span>}
          text="Yalnızca doğrulanmış yorumlar yayınlanır."
        />
        <ul className="mt-12 grid gap-px bg-ink/10 md:grid-cols-2">
          {reviews.map((review) => (
            <li key={`${review.author}-${review.datePublished}`} className="bg-white p-6 md:p-8">
              <p className="text-[11px] tracking-[0.18em] text-accent uppercase">
                {review.rating}/5 · {review.datePublished}
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted">{review.body}</p>
              <p className="mt-5 font-display text-sm tracking-[0.12em] uppercase">{review.author}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
