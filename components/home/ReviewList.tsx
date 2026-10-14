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
        <ul className="mt-12 grid gap-10 border-t border-ink/10 pt-10 md:grid-cols-2">
          {reviews.map((review) => (
            <li key={`${review.author}-${review.body.slice(0, 24)}`} className="border-t border-ink/10 pt-8 first:border-t-0 first:pt-0 md:first:border-t md:first:pt-8">
              <blockquote>
                <p className="text-lg leading-relaxed">{review.body}</p>
                <footer className="mt-5 text-sm text-ink/60">
                  <cite className="not-italic font-medium text-ink">{review.author}</cite>
                  {review.company ? <span> · {review.company}</span> : null}
                </footer>
              </blockquote>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
