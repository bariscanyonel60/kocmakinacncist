export type FaqItem = {
  question: string;
  answer: string;
};

/** Ana sayfada gösterilen 5 SSS — cevaplarda iç link metni hizmet sayfalarına yönlendirir. */
export const homeFaqs: FaqItem[] = [
  {
    question: "KOC Makina ne yapar?",
    answer:
      "KOC Makina, İstanbul Başakşehir İkitelli’de CNC torna, CNC işleme ve hassas talaşlı imalat alanında metal parça üretir. Teknik çizim, model veya numune üzerinden teklif değerlendirilir.",
  },
  {
    question: "CNC torna ile hangi parçalar üretilir?",
    answer:
      "Dönel simetriye sahip miller, burçlar, flanşlar, pimler ve dişli bağlantı elemanları CNC torna ile işlenir. Parçada cep veya düzlem yüzey varsa CNC işleme operasyonu plana eklenir.",
  },
  {
    question: "Teklif için hangi dosyalar gerekir?",
    answer:
      "PDF teknik resim, DXF, DWG, STEP veya STP yeterlidir. Malzeme, adet ve kritik tolerans belirtilirse teklif netleşir. Fotoğraf tek başına üretim verisi değildir.",
  },
  {
    question: "Prototip ve seri üretim yapılır mı?",
    answer:
      "Düşük adetli prototip ile seri parti aynı teknik dilde planlanır. Fark adet ve parti kontrolüdür; kabul ölçüsü çizime bağlı kalır.",
  },
  {
    question: "CNC torna fiyatı nasıl belirlenir?",
    answer:
      "Fiyat; malzeme, geometri, tolerans, yüzey, adet ve operasyon süresine göre hesaplanır. Sabit liste fiyatı yoktur. Teknik veri paylaşıldığında iletişim formundan teklif istenir.",
  },
];
