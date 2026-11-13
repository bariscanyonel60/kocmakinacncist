export const processSteps = [
  {
    number: "01",
    title: "Teknik Resim",
    summary: "Teknik çizim, STEP modeli veya numune ile talep alınır.",
    detail:
      "Parça için teknik resim, STEP modeli, numune veya ölçü listesi paylaşılır. Malzeme, adet ve teslim beklentisi bu aşamada netleşirse değerlendirme hızlanır.",
  },
  {
    number: "02",
    title: "Teknik Analiz",
    summary: "Malzeme, tolerans, geometri ve işleme yöntemi incelenir.",
    detail:
      "Geometri torna, freze veya ardışık operasyonlardan hangisine daha uygunsa o yöntem öne çıkar. Kritik ölçüler, yüzey ve bağlama şekli ayrıca ele alınır.",
  },
  {
    number: "03",
    title: "Teklif\u00ADlendirme",
    summary: "Operasyon sayısı, malzeme ve adede göre teklif hazırlanır.",
    detail:
      "Teklif; malzeme cinsi, ham ölçü, tolerans, operasyon sayısı ve adede göre çıkar. Eksik bilgi varsa varsayım yapılmaz, kritik ölçüler sorulur.",
  },
  {
    number: "04",
    title: "Üretim",
    summary: "Onaylanan plana göre CNC torna ve freze operasyonları uygulanır.",
    detail:
      "Operasyon sırası, kesici takım yaklaşımı ve kontrol noktaları parçaya göre planlanır. Prototip ile seri üretim aynı parçada farklı bağlama ve tempo gerektirebilir.",
  },
  {
    number: "05",
    title: "Kalite Kontrol",
    summary: "Kritik ölçüler teknik resimle karşılaştırılır.",
    detail:
      "Teknik resimde belirtilen ölçüler ve görünür yüzeyler teslim öncesi kontrol edilir. Sapma görülürse parça sevkiyat onayına girmez.",
  },
  {
    number: "06",
    title: "Teslimat",
    summary: "Kontrolden geçen parçalar paketlenip teslimata hazırlanır.",
    detail:
      "Kontrolden geçen parçalar, kararlaştırılan adet ve paketleme düzenine göre teslimata hazırlanır. Sevkiyat şekli sipariş sırasında netleştirilir.",
  },
] as const;
