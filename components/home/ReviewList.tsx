import { reviews } from "@/data/reviews";
import { JsonLd } from "@/components/ui/JsonLd";
import { reviewsJsonLd } from "@/lib/jsonld";

export function ReviewList() {
  if (reviews.length === 0) return null;

  const data = reviewsJsonLd(reviews);

  return (
    <section className="bg-paper text-ink" aria-labelledby="yorumlar-baslik">
      {data ? <JsonLd data={data} /> : null}
      <div className="mx-auto max-w-[1440px] px-5 py-20 md:px-10 lg:py-28">
        <p className="eyebrow text-accent">Müşteri notları</p>
        <h2 id="yorumlar-baslik" className="display mt-4 text-[clamp(2.2rem,4vw,4rem)]">
          Üretimden sonra
        </h2>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ink/65">
          Aşağıdaki notlar yazılı izni alınan gerçek müşteri ifadeleridir. Puan yalnızca müşteri
          verdiyse gösterilir.
        </p>
        <ul className="mt-12 grid gap-10 border-t border-ink/10 pt-10 md:grid-cols-2">
          {reviews.map((review) => (
            <li
              key={`${review.author}-${review.body.slice(0, 24)}`}
              className="border-t border-ink/10 pt-8 first:border-t-0 first:pt-0 md:first:border-t md:first:pt-8"
              itemScope
              itemType="https://schema.org/Review"
            >
              <blockquote>
                {typeof review.rating === "number" ? (
                  <p className="mb-3 text-xs tracking-[0.18em] text-accent uppercase">
                    Puan {review.rating} / 5
                  </p>
                ) : null}
                <p className="text-lg leading-relaxed" itemProp="reviewBody">
                  {review.body}
                </p>
                <footer className="mt-5 text-sm text-ink/60">
                  <cite className="not-italic font-medium text-ink" itemProp="author">
                    {review.author}
                  </cite>
                  {review.company ? <span> · {review.company}</span> : null}
                  {review.date ? (
                    <time className="mt-1 block text-xs tracking-[0.08em] uppercase" dateTime={review.date}>
                      {review.date}
                    </time>
                  ) : null}
                </footer>
              </blockquote>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
