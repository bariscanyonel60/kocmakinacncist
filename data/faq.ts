export type Faq = {
  question: string;
  answer: string;
};

export const homeFaqs: Faq[] = [
  {
    question: "Koç Makina hangi üretim hizmetlerini sunar?",
    answer:
      "Koç Makina, İstanbul'da CNC torna, CNC freze ve hassas talaşlı imalat alanında parça üretir. Prototip, seri üretim ve katalog dışı özel parçalar teknik resim veya numune üzerinden işlenir.",
  },
  {
    question: "CNC freze işleri yapıyor musunuz?",
    answer:
      "Evet. Düzlem, cep, kontur, delik ve diş gerektiren parçalar CNC frezede işlenir. Önce torna sonra freze gereken parçalarda iki operasyon aynı üretim planında sıralanır.",
  },
  {
    question: "Hangi malzemeler işlenir?",
    answer:
      "Çelik, paslanmaz çelik, alüminyum, pirinç ve benzeri işlenebilir metaller çizime göre değerlendirilir. Kesme parametresi ve takım seçimi malzemeye göre ayrı planlanır.",
  },
  {
    question: "Hangi toleranslarda çalışıyorsunuz?",
    answer:
      "Kabul aralığı parçanın kendi teknik resminden gelir; genel bir mikron değeri ilan edilmez. Dar toleranslı ölçüler teklif aşamasında ayrıca okunur ve üretim planı buna göre kurulur.",
  },
  {
    question: "Prototip veya tek parça üretim yapılır mı?",
    answer:
      "Yapılır. Tek parça ve küçük adetler, seri üretime geçmeden önce geometriyi ve ölçüyü doğrulamak için işlenir. Prototipte çıkan teknik notlar seri planına aktarılır.",
  },
  {
    question: "Minimum sipariş adedi var mı?",
    answer:
      "Sabit bir minimum adet ilan edilmez. Tek parça prototip de seri parti de değerlendirilir; adet, bağlama ve hazırlık süresi birim maliyeti doğrudan etkiler.",
  },
  {
    question: "Teklif için hangi dosyaları göndermeliyim?",
    answer:
      "Teknik resim (PDF, DXF, DWG) veya 3D model (STEP, STP, IGES) yeterlidir. Malzeme, adet, tolerans ve yüzey isteğini de yazarsanız değerlendirme hızlanır. Dosyalar teklif formundan eklenebilir.",
  },
  {
    question: "Teklif ne kadar sürede hazırlanır?",
    answer:
      "Süre, çizimin eksiksiz olmasına ve parçanın karmaşıklığına bağlıdır; sabit bir süre vaadi verilmez. Eksik ölçü veya belirsiz tolerans varsa varsayım yapılmaz, önce size sorulur.",
  },
  {
    question: "İstanbul dışından talep gönderebilir miyim?",
    answer:
      "Teknik resim çevrim içi iletildiği için talep bulunduğunuz şehirden bağımsız değerlendirilir. Sevkiyat şekli ve teslim yeri sipariş sırasında netleştirilir.",
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
    question: "Telefon neden sitede yok?",
    answer:
      "Doğrulanmış bir numara girilmedi. Numara firma kaydına yazılınca ara düğmesi ve footer kendiliğinden açılır.",
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
