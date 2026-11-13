"use client";

export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <section className="flex min-h-[70vh] items-center bg-ink px-5 py-32 text-white">
      <div className="mx-auto w-full max-w-3xl">
        <p className="eyebrow text-accent">Üretim durdu</p>
        <h1 className="display mt-4 text-[clamp(2.4rem,6vw,4.5rem)]">Sayfa şu an açılamadı.</h1>
        <button
          type="button"
          onClick={() => reset()}
          className="mt-8 min-h-12 bg-accent px-6 py-4 text-xs font-semibold tracking-[0.18em] uppercase"
        >
          Yeniden dene
        </button>
      </div>
    </section>
  );
}
