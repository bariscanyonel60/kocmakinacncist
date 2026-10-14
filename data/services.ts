import type { Faq } from "@/data/faq";

export type Service = {
  slug: string;
  number: string;
  title: string;
  short: string;
  image: string;
  imageAlt: string;
  seoTitle: string;
  seoDescription: string;
  h1: string;
  intro: string;
  paragraphs: string[];
  advantages: { title: string; text: string }[];
  steps: { title: string; text: string }[];
  applications: string[];
  faqs: Faq[];
  related: string[];
};

export const services: Service[] = [
  {
    slug: "cnc-torna",
    number: "01",
    title: "CNC Torna",
    short: "Döner geometrili metal parçalar, teknik resme göre tornalanır.",
    image: "/images/cnc-torna-kesim.jpg",
    imageAlt: "CNC tornada kesici uç ile işlenen çelik mil, ayna ve punta",
    seoTitle: "CNC Torna İstanbul",
    seoDescription:
      "KOC Makina, İstanbul'da CNC torna ile mil, burç, flanş ve özel döner parçalar üretir. Teknik çiziminizi gönderin, üretim ihtiyacınızı birlikte değerlendirelim.",
    h1: "CNC Torna ile Hassas Parça Üretimi",
    intro:
      "CNC torna, dönen iş parçasından kesici takımla talaş kaldırarak silindirik ve eksenel formlar üretir. KOC Makina bu yöntemi İstanbul'da, teknik çizime bağlı metal parça üretimi için kullanır.",
    paragraphs: [
      "Mil, burç, flanş, pim, kovan ve diş açılacak gövdeler CNC torna ile işlenen tipik parça aileleridir. Çap, boy, kanal, pah ve vida adımı teknik resimdeki değerlere göre programlanır. Parça hem dönen hem de düzlemsel yüzey istiyorsa torna operasyonu CNC işleme ile tamamlanır.",
      "İstanbul CNC torna taleplerinde teklif, malzeme cinsi, ham ölçü, tolerans, operasyon sayısı ve adede göre çıkar. Sabit bir birim fiyat listesi tutulmaz. Seri üretimde bağlama ve kontrol planı, prototipte ise geometrinin ilk doğrulanması öne çıkar. Özel parça imalatı da aynı hattın içindedir; katalog parça satışı yapılmaz.",
    ],
    advantages: [
      { title: "Tekrar edilebilir çap", text: "Programlanan paso, aynı partide çap ve boy dağılımını daraltır." },
      { title: "Eksenel formlar", text: "Kanal, pah, radüs ve vida tek bağlamada ardışık işlenebilir." },
      { title: "Malzeme esnekliği", text: "Çelik, paslanmaz, alüminyum, pirinç ve benzeri işlenebilir metaller çizime göre değerlendirilir." },
      { title: "Adede göre plan", text: "Tek parça deneme ile parti üretim aynı resim üzerinden ayrı tempo ile kurgulanır." },
    ],
    steps: [
      { title: "Resim okuma", text: "Çap, boy, diş ve geometrik toleranslar işaretlenir." },
      { title: "Bağlama", text: "Ayna, pens veya punta ihtiyacı parça boyuna göre seçilir." },
      { title: "Tornalama", text: "Kaba ve finish pasoları program sırasıyla alınır." },
      { title: "Ölçü kontrolü", text: "Kritik çap ve boylar teslim öncesi karşılaştırılır." },
    ],
    applications: ["Miller ve şaftlar", "Burç ve kovan", "Flanş ve rakor", "Dişli silindirik gövdeler"],
    faqs: [
      {
        question: "CNC torna ile freze arasındaki fark nedir?",
        answer:
          "Tornada parça döner, takım ilerler. Frezede parça genellikle sabitlenir, takım döner ve gezer. Silindirik parçalar tornaya, cep ve kontur içeren parçalar CNC işlemeye gider. Birçok parçada ikisi birden gerekir.",
      },
      {
        question: "Hangi bilgileri göndermeliyim?",
        answer:
          "Teknik resim veya STEP dosyası, malzeme, adet ve varsa numune yeterlidir. Yüzey ve ısıl işlem isteği resimde yoksa ayrıca yazın.",
      },
      {
        question: "Küçük adet CNC torna yapılır mı?",
        answer:
          "Yapılır. Prototip ve küçük parti, seri üretime geçmeden geometriyi doğrulamak için uygundur. Adet arttıkça bağlama ve kontrol planı buna göre sadeleştirilir.",
      },
      {
        question: "CNC torna fiyatı neden parçaya göre değişir?",
        answer:
          "Çap, boy, kanal, diş ve tolerans operasyon sayısını değiştirir. Aynı malzeme adı tek başına fiyat üretmez.",
      },
      {
        question: "Torna ile freze aynı bağlamada biter mi?",
        answer:
          "Yalnızca silindirik form tornada biter. Cep veya konum toleranslı delik varsa CNC işleme ayrı operasyon olarak eklenir.",
      },
    ],
    related: ["cnc-isleme", "talasli-imalat", "hassas-parca-uretimi", "seri-uretim"],
  },
  {
    slug: "cnc-isleme",
    number: "02",
    title: "CNC İşleme",
    short: "Cep, kontur, delik ve düzlem gerektiren parçalar frezelenir.",
    image: "/images/cnc-freze-talas.jpg",
    imageAlt: "CNC işleme merkezinde metal parça frezelenirken dağılan talaş",
    seoTitle: "CNC İşleme İstanbul",
    seoDescription:
      "İstanbul'da CNC işleme ile cep, kontur, delik ve yüzey operasyonları. KOC Makina teknik çizime göre metal parça işler.",
    h1: "CNC İşleme ile Prizmatik Parça Üretimi",
    intro:
      "CNC işleme, döner kesici takımın programlı yollarla metal üzerinden talaş kaldırdığı frezeleme yöntemidir. Cep, kanal, kontur, delik dizisi ve alın yüzeyleri bu yöntemle çıkar.",
    paragraphs: [
      "Torna, eksenel simetriyi iyi çözer. Parça plaka, blok veya döküm gövdeyse ve üzerinde düzlem, cep ya da konum toleranslı delik varsa CNC işleme devreye girer. KOC Makina İstanbul'da bu operasyonları talaşlı imalat planının parçası olarak ele alır.",
      "İşleme süresi takım yolu uzunluğuna, talaş derinliğine ve bağlama sayısına bağlıdır. Tek bağlamada biten parça ile iki yüzü ayrı bağlanan parça aynı teklif mantığına girmez. Hassas parça üretiminde delik konumları ve yüzey ilişkisi resimden okunur; ölçü uydurulmaz.",
    ],
    advantages: [
      { title: "Kontur ve cep", text: "Düzlemsel ve 3 eksenli formlar programlı takım yolu ile işlenir." },
      { title: "Delik konumları", text: "Delik eksenleri teknik resimdeki konumlara göre delinir ve gerekirse diş açılır." },
      { title: "Yüzey ilişkisi", text: "Birbirine dik veya paralel yüzeyler aynı bağlamada referanslanır." },
      { title: "Torna ile birleşim", text: "Önce torna, sonra freze gereken parçalarda operasyon sırası baştan yazılır." },
    ],
    steps: [
      { title: "Referans yüzeyi", text: "Bağlama, resimdeki datum yüzeyine göre kurulur." },
      { title: "Kaba işleme", text: "Fazla pay, kontrollü derinlikte alınır." },
      { title: "Finish ve delik", text: "Son paso, delik ve diş operasyonları uygulanır." },
      { title: "Kontrol", text: "Kritik konum ve derinlikler resimle karşılaştırılır." },
    ],
    applications: ["Bağlantı plakaları", "Gövde ve kapak", "Kanal açılmış bloklar", "Konum toleranslı delik grupları"],
    faqs: [
      {
        question: "CNC işleme her metal için aynı mıdır?",
        answer:
          "Yöntem aynı ailede kalır; kesme hızı, ilerleme ve takım malzeme cinsine göre değişir. Alüminyum ile paslanmaz aynı parametreyle işlenmez. Bu seçim teklif ve planlama aşamasında yapılır.",
      },
      {
        question: "3B model yeterli mi?",
        answer:
          "STEP veya STP model geometriyi taşır. Tolerans, diş ve yüzey isteği modelde yoksa teknik resim veya yazılı not gerekir.",
      },
      {
        question: "İstanbul dışında parçayı nasıl iletirim?",
        answer:
          "Çizim dijital gönderilir. Fiziki numune gerekiyorsa kargo ile değerlendirmeye alınır. Üretim İstanbul'da planlanır.",
      },
      {
        question: "Delik ve diş CNC işlemenin içinde mi?",
        answer:
          "Resimde varsa operasyon planına yazılır. Ayrı bir delik atölyesi iddiası yoktur; takım ve bağlama parçaya göre seçilir.",
      },
      {
        question: "İnce cidarlı parça işlenir mi?",
        answer:
          "Geometri uygunsa evet. Titreşim ve bağlama riski teklif sırasında söylenir, her model otomatik kabul edilmez.",
      },
    ],
    related: ["cnc-torna", "talasli-imalat", "hassas-parca-uretimi", "ozel-parca-imalati"],
  },
  {
    slug: "talasli-imalat",
    number: "03",
    title: "Talaşlı İmalat",
    short: "Torna, freze ve delik operasyonlarını tek üretim planında toplar.",
    image: "/images/cnc-alin-freze.jpg",
    imageAlt: "Alın freze kafası silindirik metal parçanın üzerinde",
    seoTitle: "Talaşlı İmalat İstanbul",
    seoDescription:
      "KOC Makina İstanbul'da talaşlı imalat kapsamında CNC torna ve CNC işleme ile metal parça üretir. Çiziminizi paylaşın.",
    h1: "Talaşlı İmalat ile Metal Parça Üretimi",
    intro:
      "Talaşlı imalat, hedef formu elde etmek için metalden talaş kaldırmaktır. KOC Makina'da bu kapsam CNC torna, CNC işleme, delik delme ve diş açma operasyonlarını bir arada tutar.",
    paragraphs: [
      "Sac kesim, kaynaklı konstrüksiyon veya dökümhane işi bu başlığın yerine geçmez. Parça işlenmiş metal yüzey, çap veya konum toleransı istiyorsa talaşlı imalat doğru yoldur. Ham malzeme çubuk, plaka veya ön şekillendirilmiş gövde olabilir; hangisinin uygun olduğu resme bakılarak söylenir.",
      "İstanbul talaşlı imalat taleplerinde önce yöntem ayrılır: parça dönecekse torna, prizmatikse işleme, ikisi birden gerekiyorsa operasyon sırası yazılır. Seri üretimde bu sıra sabitlenir. Özel parça imalatında ise aynı plan tek seferlik kurulur ve numune üzerinden doğrulanır.",
    ],
    advantages: [
      { title: "Yöntem seçimi", text: "Parça, torna veya frezeden hangisine aitse ona göre planlanır; gereksiz operasyon eklenmez." },
      { title: "Teknik resim esas", text: "Üretim, sözlü tarif yerine ölçü ve tolerans üzerinden yürür." },
      { title: "Operasyon sırası", text: "Bağlama sayısı ve referans yüzeyi baştan belirlenir." },
      { title: "Kontrol kapısı", text: "Talaş kaldırılan her kritik ölçü teslim öncesi ele alınır." },
    ],
    steps: [
      { title: "Yöntem", text: "Torna, freze veya birleşik rota seçilir." },
      { title: "Ham malzeme", text: "Çubuk, plaka veya ön işlemli gövde ihtiyacı çıkarılır." },
      { title: "İşleme", text: "Planlanan pasolar uygulanır." },
      { title: "Doğrulama", text: "Resimdeki kritik ölçüler kontrol edilir." },
    ],
    applications: ["İşlenmiş bağlantı elemanları", "Makine parçaları", "Yedek komponentler", "Küçük ve orta parti metal parçalar"],
    faqs: [
      {
        question: "Talaşlı imalat ile CNC aynı şey mi?",
        answer:
          "CNC, talaşlı imalatın programlı tezgâhla yapılan halidir. Klasik tezgahta da talaş kaldırılır. KOC Makina'nın odağı CNC torna ve CNC işlemedir.",
      },
      {
        question: "Hangi malzemeler işlenir?",
        answer:
          "İşlenebilir metaller çizime göre değerlendirilir. Sık görülenler çelik, paslanmaz çelik, alüminyum ve pirinçtir. Stokta hazır bekleyen bir malzeme listesi yayınlanmaz; malzeme taleple birlikte netleşir.",
      },
      {
        question: "Kaynaklı parça da işlenir mi?",
        answer:
          "Kaynak işlemi bu kapsamın dışında tutulur. Kaynak sonrası talaş kaldırılacak bir yüzey varsa, parça işleme operasyonu olarak ayrıca değerlendirilir.",
      },
      {
        question: "Talaşlı imalat sac kesim midir?",
        answer:
          "Hayır. Burada talaş, torna ve freze ile metal üzerinden kaldırılır. Lazer veya plazma kesim bu listenin konusu değildir.",
      },
      {
        question: "Yüzey notu yoksa talaşlı imalat durur mu?",
        answer:
          "Kritik ölçü eksikse durur. Yüzey notu yoksa işlev sorulur; parlaklık için varsayılan bir değer uydurulmaz.",
      },
    ],
    related: ["cnc-torna", "cnc-isleme", "hassas-parca-uretimi", "teknik-uretim-cozumleri"],
  },
  {
    slug: "hassas-parca-uretimi",
    number: "04",
    title: "Hassas Parça Üretimi",
    short: "Kritik ölçü ve yüzey ilişkisi olan parçalar kontrollü işlenir.",
    image: "/images/hassas-freze.jpg",
    imageAlt: "İnce freze takımı ile işlenen bakır alaşım parça",
    seoTitle: "Hassas Parça Üretimi İstanbul",
    seoDescription:
      "KOC Makina, İstanbul'da teknik resimdeki ölçülere bağlı hassas parça üretimi yapar. CNC torna ve CNC işleme ile metal parçalar hazırlanır.",
    h1: "Hassas Parça Üretimi",
    intro:
      "Hassas parça üretimi, ölçünün tesadüfe bırakılmadığı talaşlı imalattır. KOC Makina, teknik resimdeki çap, konum ve yüzey ilişkilerini CNC torna ve CNC işleme planının merkezine koyar.",
    paragraphs: [
      "Hassasiyet, ilan edilen sabit bir tolerans rakamı değildir. Her parçanın kabul aralığı kendi resmindedir. Dar tolerans, daha kontrollü paso, daha net bağlama ve teslim öncesi ölçü kontrolü demektir. Bu yüzden teklifte tolerans ayrıca okunur.",
      "Metal parça üretiminde tekrar edilebilirlik, ilk parçanın tutması kadar sonraki parçaların da aynı aralıkta kalmasıdır. Prototipte kurulan referans, seri üretimde aynı datum üzerinden sürdürülür. İstanbul'daki üretim taleplerinde çizim eksikse kritik ölçüler sorulur; varsayımla işlenmez.",
    ],
    advantages: [
      { title: "Resimdeki tolerans", text: "Kabul aralığı genel bir slogandan değil, parçanın kendi resminden gelir." },
      { title: "Datum disiplini", text: "Ölçüler, bağlama referansına göre kontrol edilir." },
      { title: "Finish paso", text: "Kaba talaştan sonra kritik yüzeyler ayrı ele alınır." },
      { title: "Teslim filtresi", text: "Kontrolden geçmeyen parça sevkiyata çıkmaz." },
    ],
    steps: [
      { title: "Kritik ölçü listesi", text: "Dar toleranslı çap, konum ve yüzeyler ayrılır." },
      { title: "Bağlama referansı", text: "Datum, resimle aynı mantıkta kurulur." },
      { title: "Kontrollü işleme", text: "Finish pasolar bu ölçülere göre alınır." },
      { title: "Karşılaştırma", text: "Ölçüm, resimdeki sınırlarla yan yana bakılır." },
    ],
    applications: ["Yataklama yüzeyleri", "Alıştırmalı çaplar", "Konum isteyen delikler", "Eş çalışan mil ve burçlar"],
    faqs: [
      {
        question: "Mikron seviyesinde üretim yapıyor musunuz?",
        answer:
          "Çalışma, resimdeki toleransa göre planlanır. İlan edilmiş sabit bir mikron değeri yoktur. Dar toleranslı bir ölçü varsa teklif aşamasında ayrıca değerlendirilir.",
      },
      {
        question: "Ölçüm raporu veriliyor mu?",
        answer:
          "Kontrol, teslimin parçasıdır. Yazılı rapor ihtiyacı sipariş sırasında belirtilirse kapsamı birlikte netleştirilir. Standart bir sertifika iddiası yayınlanmaz.",
      },
      {
        question: "Yüzey kalitesi nasıl belirlenir?",
        answer:
          "Resimde Ra veya yüzey notu varsa o esas alınır. Not yoksa işlev sorulur; parlaklık için varsayılan bir vaat verilmez.",
      },
      {
        question: "Hassas parça her zaman dar tolerans mı demektir?",
        answer:
          "Hayır. Hassasiyet, resimde işaretlenen ölçüye bağlıdır. İşaretsiz her çap dar tolerans sayılmaz.",
      },
      {
        question: "Kontrol raporu standart mı?",
        answer:
          "Standart bir şablon ilan edilmez. Yazılı rapor isteniyorsa siparişte kapsamı birlikte yazılır.",
      },
    ],
    related: ["cnc-torna", "cnc-isleme", "talasli-imalat", "seri-uretim"],
  },
  {
    slug: "prototip-uretim",
    number: "05",
    title: "Prototip Üretim",
    short: "Tek parça ve küçük adetle geometri, ölçüden önce doğrulanır.",
    image: "/images/karmasik-parca.jpg",
    imageAlt: "Prototip niteliğinde karmaşık metal parçanın CNC ile işlenmesi",
    seoTitle: "Prototip CNC Üretim",
    seoDescription:
      "KOC Makina, teknik çizim veya numuneden prototip metal parça işler. CNC torna ve CNC işleme ile İstanbul'da küçük adet üretim.",
    h1: "Prototip Üretim",
    intro:
      "Prototip üretim, bir parçanın geometrisini ve ölçüsünü seriye geçmeden görmek için yapılır. KOC Makina tek parça ve küçük adet taleplerini CNC torna ve CNC işleme ile değerlendirir.",
    paragraphs: [
      "Tasarım henüz kilitlenmemişse prototip, resimdeki riskli ölçüleri ortaya çıkarır. Duvar kalınlığı, bağlama payı veya takımın giremeyeceği köşe bu aşamada konuşulur. Amaç vitrin parçası değil, sonraki üretime veri olan bir parçadır.",
      "Numune ile gelen taleplerde mevcut parça referans alınır; yine de kritik ölçüler yazılı hale getirilir. Prototip onayı olmadan seri adede geçilmez. İstanbul içinde çizim paylaşımı dijital yürür, fiziksel numune gerekiyorsa ayrıca planlanır.",
    ],
    advantages: [
      { title: "Erken doğrulama", text: "Kalıp veya büyük parti öncesi geometri tezgâhta görülür." },
      { title: "Üretilebilirlik notu", text: "İşlenmesi zor köşe ve toleranslar açıkça söylenir." },
      { title: "Küçük adet", text: "Tek parça da, birkaç parçalık deneme de aynı ciddiyetle planlanır." },
      { title: "Seriye aktarım", text: "Prototipte kurulan operasyon sırası, parti planının taslağı olur." },
    ],
    steps: [
      { title: "Kapsam", text: "Denenecek ölçü ve işlev baştan yazılır." },
      { title: "İlk işleme", text: "Parça, seri bağlama kurulmadan işlenir." },
      { title: "Geri bildirim", text: "Tutmayan veya riskli noktalar paylaşılır." },
      { title: "Revizyon", text: "Gerekirse resim güncellenir ve ikinci parça işlenir." },
    ],
    applications: ["Tasarım doğrulama", "İlk numune", "Montaj denemesi", "Seri öncesi revizyon"],
    faqs: [
      {
        question: "Sadece teknik resimle prototip olur mu?",
        answer:
          "Olur. Model veya PDF resim, malzeme ve adet yeterlidir. Eksik tolerans varsa işlemeye başlamadan sorulur.",
      },
      {
        question: "Prototip süresi nedir?",
        answer:
          "Süre; geometri, malzeme temini ve tezgâh planına bağlıdır. Standart bir gün sayısı ilan edilmez. Talep incelendikten sonra takvim paylaşılır.",
      },
      {
        question: "Prototip sonrası seriye geçiş nasıl olur?",
        answer:
          "Onaylanan revizyon kilitlenir, adet ve kontrol planı yeniden yazılır. Prototip fiyatı seri birim fiyata otomatik dönüşmez.",
      },
      {
        question: "Prototipte malzeme nihai malzeme olmak zorunda mı?",
        answer:
          "Ölçü ve bağlama denemesi için farklı metal önerilebilir. Çalışma parçasında resimdeki malzeme esas alınır.",
      },
      {
        question: "Tek parça da prototip sayılır mı?",
        answer:
          "Evet. Amaç geometriyi ve kritik ölçüyü görmektir. Adet artsa da aynı resim seri planına ayrıca geçer.",
      },
    ],
    related: ["ozel-parca-imalati", "cnc-torna", "seri-uretim", "teknik-uretim-cozumleri"],
  },
  {
    slug: "seri-uretim",
    number: "06",
    title: "Seri Üretim",
    short: "Aynı parçanın tekrarında operasyon sırası ve kontrol sabitlenir.",
    image: "/images/cnc-taret-talas.jpg",
    imageAlt: "Seri parça işleyen CNC torna taretinde talaş ve kesici takımlar",
    seoTitle: "CNC Seri Üretim",
    seoDescription:
      "KOC Makina, tekrarlanan metal parçalar için CNC seri üretim planlar. İstanbul'da torna ve işleme operasyonları adede göre kurgulanır.",
    h1: "Seri Üretim Planı",
    intro:
      "Seri üretim, aynı parçanın tekrarında ölçü dağılımını dar tutmaktır. KOC Makina bu işi kapasite iddiasıyla değil, operasyon sırasını ve kontrol noktalarını sabitleyerek ele alır.",
    paragraphs: [
      "Adet arttıkça bağlama, takım ömrü ve ara kontrol önem kazanır. İlk parçası tutan bir iş, yüzüncü parçada aynı kalmayabilir; bunun için referans ve kontrol aralığı baştan yazılır. Parti bölünecekse her teslimatta aynı resim revizyonu esas alınır.",
      "Fiyat, birim başına düşen hazırlık süresi azaldıkça değişir. Yine de malzeme, tolerans ve fire bu hesabın içindedir. İstanbul'da CNC torna veya CNC işleme ile yürüyen serilerde ham malzeme temini sipariş onayına bağlı planlanır. Stoktan sürekli üretim vaadi verilmez.",
    ],
    advantages: [
      { title: "Sabit rota", text: "Operasyon sırası partiler arasında değiştirilmeden izlenir." },
      { title: "Ara kontrol", text: "Kritik ölçüler yalnızca sonda değil, belirlenen aralıkta bakılır." },
      { title: "Revizyon takibi", text: "Resim değişirse eski parti ile yeni parti karıştırılmaz." },
      { title: "Adet ekonomisi", text: "Hazırlık süresi adede yayıldıkça birim planı yeniden hesaplanır." },
    ],
    steps: [
      { title: "Kilitli resim", text: "Üretilecek revizyon yazılı olarak sabitlenir." },
      { title: "Rota", text: "Bağlama, takım ve kontrol noktaları yazılır." },
      { title: "Parti", text: "Parçalar bu rotayla işlenir." },
      { title: "Sevkiyat", text: "Kontrolü geçen adet teslimata ayrılır." },
    ],
    applications: ["Tekrarlayan miller", "Standartlaşmış burçlar", "Parti flanşlar", "Düzenli yedek parça ihtiyacı"],
    faqs: [
      {
        question: "Minimum adet var mı?",
        answer:
          "İlan edilen bir minimum adet yoktur. Küçük parti prototip kapsamında, tekrarlayan adet seri planında değerlendirilir.",
      },
      {
        question: "Aylık kapasite nedir?",
        answer:
          "Doğrulanmış bir kapasite rakamı yayınlanmaz. Tezgâh uygunluğu ve süre, parçanın operasyonuna göre söylenir.",
      },
      {
        question: "Malzemeyi biz verebilir miyiz?",
        answer:
          "Teknik olarak mümkün olan işlerde malzeme müşteriden de gelebilir. Cins, ölçü ve sertlik resimle uyumlu olmalıdır. Detay siparişte netleşir.",
      },
      {
        question: "Seride her partinin ölçüsü aynı mı olur?",
        answer:
          "Hedef, resimdeki tolerans aralığında kalmaktır. Sıfır sapma vaadi verilmez. Kontrol noktaları parti planına yazılır.",
      },
      {
        question: "Seri fiyatı prototipten otomatik düşer mi?",
        answer:
          "Düşmez. Bağlama, takım ve kontrol yeniden hesaplanır. Adet arttıkça birim değişebilir; oran ilan edilmez.",
      },
    ],
    related: ["cnc-torna", "prototip-uretim", "hassas-parca-uretimi", "talasli-imalat"],
  },
  {
    slug: "ozel-parca-imalati",
    number: "07",
    title: "Özel Parça İmalatı",
    short: "Katalogda olmayan parçalar çizime veya numuneye göre işlenir.",
    image: "/images/islenmis-govde.jpg",
    imageAlt: "Projeye özel işlenmiş alüminyum gövde, kanal ve diş detayları",
    seoTitle: "Özel Parça İmalatı",
    seoDescription:
      "KOC Makina, katalog ürünü olmayan metal parçaları CNC torna ve CNC işleme ile üretir. Çizim veya numune gönderin.",
    h1: "Özel Parça İmalatı",
    intro:
      "Özel parça imalatı, rafta hazır karşılığı olmayan komponentin işlenmesidir. KOC Makina bu parçaları stok koduyla değil, gelen teknik resim veya numuneyle üretir.",
    paragraphs: [
      "Makine yenileme, tek seferlik aparat veya düşük adetli ekipman parçaları bu kapsamdadır. Parça eskiyse numune ölçü için referans olur; aşınmış yüzeyler yeni parçaya olduğu gibi kopyalanmaz, çalışan ölçü sorulur.",
      "Özel iş, standart işten daha az disiplinli değildir. Malzeme, tolerans ve teslim aynı sorularla açılır. CNC torna veya CNC işleme seçimi geometriye göre yapılır. İstanbul'daki taleplerde çizim eksikse üretim başlamaz.",
    ],
    advantages: [
      { title: "Resme özel", text: "Parça, genel bir ürün ailesine zorlanmadan işlenir." },
      { title: "Numune okuma", text: "Eski parça referans alınır, çalışan ölçü ayrıca teyit edilir." },
      { title: "Tek veya az adet", text: "Kalıp gerektirmeyen talaşlı rota küçük adette de kurulur." },
      { title: "Net kapsam", text: "İşlem dışı kalan kaynak, kaplama veya ısıl işlem baştan ayrılır." },
    ],
    steps: [
      { title: "Kapsam sınırı", text: "İşlenecek ve işlenmeyecek operasyonlar yazılır." },
      { title: "Ölçü teyidi", text: "Eksik veya çelişen ölçüler kapatılır." },
      { title: "İmalat", text: "Seçilen CNC rotası uygulanır." },
      { title: "Eşleşme", text: "Parça, resim veya numune ile karşılaştırılır." },
    ],
    applications: ["Tek seferlik makine parçası", "İkame yedek parça", "Aparat komponenti", "Düşük adetli özel mil ve gövde"],
    faqs: [
      {
        question: "Çizim yok, yalnızca numune var. Üretilir mi?",
        answer:
          "Numune değerlendirmeye alınır. Aşınmış veya kırık yüzeylerde çalışan ölçü yazılı teyit ister. Yalnızca fotoğrafla üretim yapılmaz.",
      },
      {
        question: "Kaplama da yapıyor musunuz?",
        answer:
          "Kaplama, ısıl işlem ve kaynak bu sitenin hizmet listesinde değildir. İşleme sonrası böyle bir ihtiyaç varsa ayrıca konuşulur; dahilmiş gibi fiyatlanmaz.",
      },
      {
        question: "Başka firmanın parçasını birebir yapar mısınız?",
        answer:
          "Üretim, size ait teknik veri veya numune üzerinden yürür. Marka yedek parçası iddiası veya logosuz kopya vaadi verilmez.",
      },
      {
        question: "Özel parça katalogdan seçilir mi?",
        answer:
          "Seçilmez. Her iş, gelen resim veya numunenin geometrisine göre planlanır.",
      },
      {
        question: "Eski parçanın ölçüsü aşınmışsa ne olur?",
        answer:
          "Çalışan ölçü sizden teyit istenir. Aşınmış yüzey, yeni parçanın toleransı sayılmaz.",
      },
    ],
    related: ["prototip-uretim", "cnc-torna", "cnc-isleme", "teknik-uretim-cozumleri"],
  },
  {
    slug: "teknik-uretim-cozumleri",
    number: "08",
    title: "Teknik Üretim Çözümleri",
    short: "Parçanın nasıl işleneceği, tezgâha girmeden önce netleşir.",
    image: "/images/cnc-torna-taret.jpg",
    imageAlt: "CNC torna takım taretinde üretime hazır kesici takımlar",
    seoTitle: "Teknik Üretim Çözümleri",
    seoDescription:
      "KOC Makina, metal parçalar için üretilebilirlik ve operasyon planı çıkarır. İstanbul'da CNC torna ve CNC işleme kararını çizim üzerinden verir.",
    h1: "Teknik Üretim Çözümleri",
    intro:
      "Teknik üretim çözümü, parçayı tezgâha almadan önce doğru yöntemi seçmektir. KOC Makina, gelen resmi CNC torna, CNC işleme veya birleşik rota olarak ayırır.",
    paragraphs: [
      "Bazı çizimler ölçü olarak doğrudur ama bağlanamaz, takım giremez veya tolerans seçilen yöntemle tutmaz. Bu durumda işlemeye zorlamak yerine üretilebilirlik notu verilir. Not; duvar, köşe radyüsü, datum ve gereksiz dar tolerans üzerine olur.",
      "Bu başlık bağımsız bir mühendislik ofisi hizmeti değildir. Çıktı, KOC Makina'nın işleyebileceği bir üretim planıdır. Malzeme önerisi de stok listesi gibi değil, işlenebilirlik açısından yapılır. İstanbul'daki projelerde çizim revize edilecekse yeni revizyon onayı alınmadan üretime geçilmez.",
    ],
    advantages: [
      { title: "Rota kararı", text: "Torna, freze veya ikisi; parça özelinde yazılır." },
      { title: "Risk notu", text: "İşlenemeyecek veya pahalıya gelecek detay açık söylenir." },
      { title: "Revizyon disiplini", text: "Çizim değişince eski programa devam edilmez." },
      { title: "Teklif şeffaflığı", text: "Fiyatı şişiren operasyonlar ayrıca görünür." },
    ],
    steps: [
      { title: "Resim inceleme", text: "Geometri, malzeme ve tolerans okunur." },
      { title: "Rota önerisi", text: "Uygun CNC yöntemi ve bağlama mantığı yazılır." },
      { title: "Açık noktalar", text: "Eksik bilgi soru listesine alınır." },
      { title: "Üretime geçiş", text: "Onaydan sonra plan iş emrine döner." },
    ],
    applications: ["Yeni tasarım parçalar", "Zor bağlanan geometriler", "Torna ve freze birleşen işler", "Revizyonlu teknik resimler"],
    faqs: [
      {
        question: "Tasarım hizmeti veriyor musunuz?",
        answer:
          "Ürün tasarımı veya CAD ofisi hizmeti sunulmaz. Gelen modeli üretilebilirlik açısından okur, gerekirse işleme notu düşeriz.",
      },
      {
        question: "Çizimdeki her toleransı kabul ediyor musunuz?",
        answer:
          "Her tolerans otomatik kabul edilmez. Tutması mümkün görünmeyen veya yöntemi değiştiren ölçüler teklif sırasında konuşulur.",
      },
      {
        question: "Ne zaman üretime geçilir?",
        answer:
          "Rota, malzeme, adet ve fiyat onaylandığında. Eksik kritik ölçü varsa iş emri açılmaz.",
      },
      {
        question: "Teknik çözüm tasarım ofisi midir?",
        answer:
          "Hayır. Gelen resim üretilebilirlik açısından okunur. Yeni ürün tasarımı veya CAD hizmeti satılmaz.",
      },
      {
        question: "Birden fazla operasyon tek teklifte toplanır mı?",
        answer:
          "Torna ve işleme aynı parçadaysa tek rotada yazılır. Ayrı ayrı şişirilmiş kalemler açılmaz.",
      },
    ],
    related: ["talasli-imalat", "hassas-parca-uretimi", "prototip-uretim", "cnc-torna"],
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function relatedServices(slugs: string[]) {
  return slugs
    .map((slug) => getService(slug))
    .filter((service): service is Service => Boolean(service));
}
