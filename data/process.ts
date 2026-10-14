export const processSteps = [
  {
    number: "01",
    title: "Teknik Talep",
    summary: "Müşterinin teknik çizimi, numunesi veya üretim talebi alınır.",
    detail:
      "Parça için teknik resim, STEP modeli, numune veya ölçü listesi paylaşılır. Malzeme, adet ve teslim beklentisi bu aşamada netleşirse değerlendirme hızlanır.",
  },
  {
    number: "02",
    title: "Teknik Değerlendirme",
    summary: "Parçanın malzemesi, toleransları, geometrisi ve üretim yöntemi değerlendirilir.",
    detail:
      "Geometri torna, freze veya ardışık operasyonlardan hangisine daha uygunsa o yöntem öne çıkar. Kritik ölçüler, yüzey ve bağlama şekli ayrıca ele alınır.",
  },
  {
    number: "03",
    title: "Üretim Planlama",
    summary: "Uygun CNC operasyonları ve üretim süreci belirlenir.",
    detail:
      "Operasyon sırası, kesici takım yaklaşımı ve kontrol noktaları parçaya göre planlanır. Prototip ile seri üretim aynı parçada farklı bağlama ve tempo gerektirebilir.",
  },
  {
    number: "04",
    title: "CNC Üretim",
    summary: "Parçalar belirlenen üretim yöntemleriyle işlenir.",
    detail:
      "Onaylanan yönteme göre CNC torna veya CNC işleme operasyonları uygulanır. Talaş kaldırma sırasında ölçü tutturmak, tekrarlanabilir bir süreç kurmanın parçasıdır.",
  },
  {
    number: "05",
    title: "Kalite Kontrol",
    summary: "Ölçü ve teknik gereksinimler kontrol edilir.",
    detail:
      "Teknik resimde belirtilen ölçüler ve görünür yüzeyler teslim öncesi kontrol edilir. Sapma görülürse parça sevkiyat onayına girmez.",
  },
  {
    number: "06",
    title: "Teslimat",
    summary: "Onaylanan ürünler teslimata hazırlanır.",
    detail:
      "Kontrolden geçen parçalar, kararlaştırılan adet ve paketleme düzenine göre teslimata hazırlanır. Sevkiyat şekli sipariş sırasında netleştirilir.",
  },
] as const;
