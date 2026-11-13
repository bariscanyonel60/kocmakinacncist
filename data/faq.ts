export type Faq = {
  question: string;
  answer: string;
};

/** Ana sayfada yayınlanan 5 SSS — canlı site soruları. */
export const homeFaqs: Faq[] = [
  {
    question: "KOC Makina ne yapar?",
    answer:
      "KOC Makina, İstanbul Başakşehir İkitelli'de CNC torna, CNC işleme ve hassas talaşlı imalat alanında metal parça üretir. Teknik çizim, model veya numune üzerinden teklif değerlendirilir.",
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

export const qualityFaqs: Faq[] = [
  {
    question: "Parçalar teslim öncesi kontrol ediliyor mu?",
    answer:
      "Evet. Teknik resimdeki kritik ölçüler teslim öncesinde kontrol edilir. Sapma gösteren parça sevkiyata çıkmaz.",
  },
  {
    question: "Seri üretimde ölçü nasıl takip edilir?",
    answer:
      "İlk parça ölçülmeden seri devam etmez. Parti içinde ara kontrol yapılır; bağlama ve operasyon sırası her tekrarda aynı plana bağlıdır.",
  },
  {
    question: "Ölçüm raporu veriliyor mu?",
    answer:
      "Yazılı rapor ihtiyacı sipariş sırasında belirtilirse kapsamı birlikte netleştirilir. Standart bir sertifika iddiası yayınlanmaz.",
  },
  {
    question: "Kalite belgeleriniz var mı?",
    answer:
      "Doğrulanmış belge bilgisi bu sayfaya eklenene kadar herhangi bir sertifika adı yazılmaz. Belge şartı olan projelerde talep sırasında bilgi verilir.",
  },
  {
    question: "Tolerans dışı parça çıkarsa ne olur?",
    answer:
      "Kontrolde sınır dışı kalan parça teslim edilmez. Nedeni operasyon planında aranır ve düzeltme sonraki parçalara uygulanır.",
  },
];

export const aboutFaqs: Faq[] = [
  {
    question: "Koç Makina nerede üretim yapar?",
    answer:
      "Üretim adresi İstanbul Başakşehir İkitelli OSB Mah. Demirciler San. Sit. B2 Blok No:59/B'dir. Teklif ve ziyaret için iletişim sayfasındaki telefon ve e-posta kullanılır.",
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
    question: "Makine parkuru neleri kapsar?",
    answer:
      'Kartvizitteki özet: 15" ve 8" CNC torna ile 4 eksen CNC işleme. Marka, model ve mm değerler doğrulanmadan yazılmaz.',
  },
  {
    question: "Uzun parça tornalama ne anlama gelir?",
    answer:
      "Uzun ve ince dönel parçalar, kayar otomat tipi tezgâh kapasitesi değerlendirilerek planlanır. Uygunluk her zaman teknik resimden okunur.",
  },
  {
    question: "4 eksen CNC işleme ne için kullanılır?",
    answer:
      "Tek bağlamada birden fazla yüz veya açılı özellik gereken parçalarda 4 eksen rota değerlendirilir.",
  },
  {
    question: "Kapasite nasıl öğrenilir?",
    answer:
      "Parça resmi üzerinden. Genel bir maksimum çap ilan edilmez; uygunluk teklif sırasında söylenir.",
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
      "CNC torna, CNC freze, parçalar, üretim, makine parkuru ve atölye. Boş kalan kategori filtrede gösterilmez; aynı kare birden fazla iddia taşımaz.",
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
    question: "Formu gönderince talep nereye gider?",
    answer:
      "Form doğrulandıktan sonra talep ve ekli dosyalar e-postayla ekibimize iletilir. Gönderim başarısız olursa başarılı mesajı gösterilmez; ekranda hata görünür.",
  },
  {
    question: "Hangi dosyalar eklenebilir?",
    answer:
      "PDF, DXF, DWG, STEP, STP, IGES ve ZIP. En fazla beş dosya, toplam 4 MB. Dosyalar talebinizle birlikte ekibimize e-postayla iletilir.",
  },
  {
    question: "Telefon ve WhatsApp üzerinden ulaşabilir miyim?",
    answer:
      "Evet. Sabit hat 0212 671 33 67, mobil 0505 093 49 57. WhatsApp aynı mobil numaradan açılır. Acil işlerde form yerine doğrudan arayabilirsiniz.",
  },
  {
    question: "Ne kadar sürede dönüş olur?",
    answer:
      "Sabit bir süre vaadi verilmez. Çizim, malzeme ve adet eksiksizse değerlendirme daha hızlı ve net olur.",
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
