/**
 * Müşteri yorumları yalnızca gerçek kayıt geldiğinde doldurulur.
 * Sahte puan, sahte isim veya uydurma yorum eklenmez.
 * Dizi boşken AggregateRating / Review şeması üretilmez.
 */
export type CustomerReview = {
  author: string;
  body: string;
  rating: 1 | 2 | 3 | 4 | 5;
  datePublished: string;
};

export const reviews: CustomerReview[] = [];
