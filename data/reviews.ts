export type Review = {
  author: string;
  company: string;
  body: string;
  date?: string;
};

/**
 * Yalnızca yazılı izni olan gerçek müşteri cümleleri buraya girilir.
 * Boş liste sitede yorum bölümü ve Review şeması üretmez.
 * Puan, yıldız ve toplam yorum sayısı uydurulmaz.
 */
export const reviews: Review[] = [];
