export type Review = {
  author: string;
  company: string;
  body: string;
  /** ISO tarih; yalnızca gerçek yayın tarihi. */
  date?: string;
  /**
   * 1–5 arası. Yalnızca müşterinin verdiği gerçek puan.
   * Puan yoksa yıldız ve AggregateRating üretilmez.
   */
  rating?: number;
};

/**
 * Yalnızca yazılı izni olan gerçek müşteri cümleleri buraya girilir.
 * Boş liste sitede yorum bölümü ve Review şeması üretmez.
 * Puan, yıldız ve toplam yorum sayısı uydurulmaz.
 *
 * Örnek (yayınlamadan önce izin alın):
 * { author: "Ad Soyad", company: "Firma", body: "...", date: "2025-06-01", rating: 5 }
 */
export const reviews: Review[] = [];
