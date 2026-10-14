export type Faq = {
  question: string;
  answer: string;
};

export const homeFaqs: Faq[] = [
  {
    question: "KOC Makina ne yapar?",
    answer:
      "KOC Makina, İstanbul'da CNC torna, CNC işleme ve talaşlı imalat alanında parça üretir. Teknik çizim, model veya numune üzerinden hassas metal parçalar işlenir; prototip ve seri üretim talepleri aynı değerlendirme hattında ele alınır.",
  },
  {
    question: "CNC torna nedir?",
    answer:
      "CNC torna, iş parçasının döndüğü ve kesici takımın kontrollü ilerleme ile talaş kaldırdığı bir işleme yöntemidir. Mil, burç, flanş, pim ve benzeri döner geometriler bu yöntemle üretilir. Program, ölçülerin tekrar edilebilir olmasını sağlar.",
  },
  {
    question: "CNC torna hangi parçalarda kullanılır?",
    answer:
      "Eksenel simetrisi olan parçalarda kullanılır: miller, burçlar, rakorlar, flanşlar, pimler, kovanlar ve diş açılacak silindirik gövdeler. Parçada cep, kanal veya düzlem de varsa torna operasyonuna CNC işleme eklenebilir.",
  },
  {
    question: "CNC işleme nedir?",
    answer:
      "CNC işleme, kesici takımın programlanan yollarla metal üzerinden talaş kaldırdığı frezeleme ağırlıklı üretim yöntemidir. Cep, kontur, delik, diş ve düzlem gibi prizmatik geometriler bu yöntemle çıkarılır.",
  },
  {
    question: "Talaşlı imalat nedir?",
    answer:
      "Talaşlı imalat, istenen formu elde etmek için malzemeden talaş kaldırmaktır. CNC torna ve CNC işleme bu ailenin iki temel yöntemidir. Delik delme, diş açma ve yüzey temizleme de aynı sürecin içindedir.",
  },
  {
    question: "Teknik çizime göre parça üretilebilir mi?",
    answer:
      "Evet. Üretim talebi teknik resim, STEP veya STP model ya da numune ile alınır. Ölçüler, toleranslar, malzeme ve yüzey isteği değerlendirmeye esas olur. Çizimdeki kritik ölçüler teklif aşamasında ayrıca sorulabilir.",
  },
  {
    question: "Prototip üretim yapılabilir mi?",
    answer:
      "Yapılabilir. Tek parça ve küçük adetler, seri üretime geçmeden önce geometriyi ve ölçüyü görmek için işlenir. Prototipte çıkan teknik notlar, sonraki seri planına aktarılır.",
  },
  {
    question: "Seri üretim nasıl planlanır?",
    answer:
      "Adet, malzeme, tolerans ve operasyon sırası birlikte ele alınır. Bağlama şekli ve kontrol noktaları, parçanın her partide aynı ölçü aralığında kalması için planlanır. Süre, geometri ve adede göre değişir; sabit bir tempo vaadi verilmez.",
  },
  {
    question: "CNC torna fiyatı nasıl belirlenir?",
    answer:
      "Fiyat; malzeme, çap ve boy, tolerans, operasyon sayısı, yüzey isteği, adet ve kontrol kapsamına göre hesaplanır. Katalog fiyatı yoktur. Teknik resmi paylaştığınızda parça özelinde teklif hazırlanır.",
  },
];

export const aboutFaqs: Faq[] = [
  {
    question: "KOC Makina nerede üretim yapar?",
    answer:
      "Üretim odağı İstanbul'dur. İlçe, sanayi sitesi ve açık adres, firma kaydı doğrulanmadan sayfada yazılmaz.",
  },
  {
    question: "Kuruluş yılı veya çalışan sayısı neden yok?",
    answer:
      "Doğrulanmayan rakam yayınlanmaz. Bu bilgiler netleşince tek firma kaydından siteye işlenir.",
  },
  {
    question: "Hangi işler kapsam dışıdır?",
    answer:
      "Kaplama, kaynak ve ısıl işlem hizmet listesinde değildir. Gerekiyorsa işleme fiyatının içine gizlenmeden ayrıca konuşulur.",
  },
  {
    question: "Teklif için ne gönderilmeli?",
    answer:
      "Teknik resim, STEP/STP model veya numune yeterlidir. Malzeme, adet ve kritik tolerans da yazılmalıdır.",
  },
  {
    question: "Numune ile de değerlendirme yapılır mı?",
    answer:
      "Yapılır. Aşınmış yüzeylerde çalışan ölçü yazılı teyit ister. Yalnızca fotoğrafla üretime geçilmez.",
  },
];

export const productionFaqs: Faq[] = [
  {
    question: "Üretim hangi adımla başlar?",
    answer:
      "Teknik talep ile başlar. Çizim, model veya numune okunmadan tezgâh programı yazılmaz.",
  },
  {
    question: "Plan ile işleme aynı gün mü olur?",
    answer:
      "Hayır. Malzeme, tolerans ve operasyon sırası netleşmeden CNC'ye geçilmez. Süre parçaya göre değişir.",
  },
  {
    question: "Kalite kontrol neyi karşılaştırır?",
    answer:
      "Resimdeki kritik ölçü ve geometriyi. Tutmayan parça sevkiyata çıkmaz. Sabit bir ölçüm sertifikası iddiası yoktur.",
  },
  {
    question: "Prototip ile seri aynı süreçten mi geçer?",
    answer:
      "İkisi de aynı kapıdan girer. Prototipte geometri doğrulanır, seride rota sabitlenir. Ayrı teklif çıkar.",
  },
  {
    question: "Malzemeyi müşteri getirebilir mi?",
    answer:
      "Uygun işlerde evet. Cins, ölçü ve şart teknik resimle uyumlu olmalıdır.",
  },
];

export const machineFaqs: Faq[] = [
  {
    question: "Makine markası neden boş?",
    answer:
      "Marka, model, çap, boy, eksen ve hassasiyet doğrulanmadan yazılmaz. Kartlar bu alanlar için hazırdır.",
  },
  {
    question: "Boş kart tezgâh yok mu demektir?",
    answer:
      "Hayır. CNC torna ve CNC işleme başlıkları üretim yöntemini tarif eder. Rakamlar girilince aynı kartlarda görünür.",
  },
  {
    question: "Kapasite nasıl öğrenilir?",
    answer:
      "Parça resmi üzerinden. Genel bir maksimum çap ilan edilmez; uygunluk teklif sırasında söylenir.",
  },
  {
    question: "Kaç eksenli tezgâh kullanılıyor?",
    answer:
      "Eksen bilgisi doğrulanmadığı için yayınlanmaz. Parçanın ihtiyacı, tezgâh broşüründen önce resimden okunur.",
  },
  {
    question: "Yeni tezgâh eklenince sayfa değişir mi?",
    answer:
      "Evet. Makine listesi veri dosyasındadır. Yeni kart eklenince bu sayfa ve ana sayfadaki şerit güncellenir.",
  },
];

export const sectorFaqs: Faq[] = [
  {
    question: "Bu sektörler müşteri referansı mı?",
    answer:
      "Hayır. CNC torna ve talaşlı imalatın karşılık bulabileceği alanları tarif eder. Firma adı veya logo listesi değildir.",
  },
  {
    question: "Listede olmayan bir sektöre parça yapılır mı?",
    answer:
      "Parça teknik resme uyuyorsa sektör adı engel değildir. Karar geometri, malzeme ve toleransa göre verilir.",
  },
  {
    question: "Savunma sanayi için özel belge var mı?",
    answer:
      "Doğrulanmış bir tesis güvenlik belgesi veya sertifika bu sitede ilan edilmez.",
  },
  {
    question: "Otomotiv parçası seri üretilebilir mi?",
    answer:
      "Tekrarlayan adet, seri plan olarak ele alınır. Onaylı bir OEM listesi veya yıllık adet vaadi yoktur.",
  },
  {
    question: "Yedek parça fotoğrafla üretilir mi?",
    answer:
      "Üretilmez. Numune veya ölçülmüş resim gerekir. Aşınmış yüzey ayrıca teyit ister.",
  },
];

export const galleryFaqs: Faq[] = [
  {
    question: "Fotoğraflar sizin tezgâhınız mı?",
    answer:
      "Kareler gerçek CNC işleme anlarından seçildi. Marka ve atölye adresi doğrulanmadan 'bizim salonumuz' denmez.",
  },
  {
    question: "Galerideki parça sipariş edilebilir mi?",
    answer:
      "Hayır. Görseller örnek geometridir. Üretim, sizin teknik resminize göre planlanır.",
  },
  {
    question: "Filtreler neyi ayırır?",
    answer:
      "CNC torna, üretim, parçalar, makine parkuru ve atölye. Aynı kare birden fazla iddia taşımaz.",
  },
  {
    question: "Ölçü fotoğraftan okunur mu?",
    answer:
      "Okunmaz. Çap, boy ve tolerans resimden gelir. Galeri ölçü tablosu değildir.",
  },
  {
    question: "Yeni iş fotoğrafı eklenir mi?",
    answer:
      "Eklenebilir. Liste veri dosyasındadır; yeni kare kategori ve alt metinle birlikte girilir.",
  },
];

export const contactFaqs: Faq[] = [
  {
    question: "Formu gönderince talep kaydolur mu?",
    answer:
      "Hayır. Form doğrulanır, kayıt hattı bağlanana kadar sunucu talebi saklamadan geri çevirir. Başarılı gönderim denmez.",
  },
  {
    question: "Hangi dosyalar eklenebilir?",
    answer:
      "PDF, DXF, DWG, STEP, STP ve IGES. En fazla beş dosya, dosya başına 8 MB. Dosyalar şu an depolanmaz.",
  },
  {
    question: "Telefon neden sitede yok?",
    answer:
      "Doğrulanmış bir numara girilmedi. Numara firma kaydına yazılınca ara düğmesi ve footer kendiliğinden açılır.",
  },
  {
    question: "Ne kadar sürede dönüş olur?",
    answer:
      "Kayıt hattı çalışmadan süre verilmez. Çizim, malzeme ve adet eksiksizse değerlendirme daha net olur.",
  },
  {
    question: "Teklif ücretli mi?",
    answer:
      "Çizim üzerinden değerlendirme için ayrıca bir keşif bedeli ilan edilmez. Üretim fiyatı parça özelindedir.",
  },
];

export const serviceIndexFaqs: Faq[] = [
  {
    question: "Hangi hizmeti seçmeliyim?",
    answer:
      "Döner parçalar CNC tornaya, cep ve kontur CNC işlemeye gider. Emin değilseniz teknik resmi gönderin; rota bizden yazılır.",
  },
  {
    question: "Hizmetler birbirinin kopyası mı?",
    answer:
      "Hayır. Her başlığın ayrı sayfası, açıklaması ve soruları vardır. Kapsam dışı bir başlık veri dosyasından çıkarılabilir.",
  },
  {
    question: "Prototip ayrı bir hizmet mi?",
    answer:
      "Evet. Az adet, geometriyi görmek içindir. Seri üretim aynı resimle ayrı planlanır.",
  },
  {
    question: "Talaşlı imalat torna ve frezeyi kapsar mı?",
    answer:
      "Kapsar. Talaşlı imalat ailenin adıdır. CNC torna ve CNC işleme bu ailenin iki yöntemidir.",
  },
  {
    question: "Fiyat listesi var mı?",
    answer:
      "Yok. Malzeme, ölçü, tolerans, operasyon ve adet birlikte hesaplanır.",
  },
];
