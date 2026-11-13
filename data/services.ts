import type { FaqItem } from "@/data/faq";
import { images } from "@/data/media";

export type Service = {
  slug: string;
  number: string;
  title: string;
  summary: string;
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
  faqs: FaqItem[];
  related: string[];
};

export const services: Service[] = [
  {
    slug: "cnc-torna",
    number: "01",
    title: "CNC Torna",
    summary: "Dönel metal parçalarda ölçü, diş ve yüzey kontrollü tornalama.",
    image: images.shaftTurning,
    imageAlt: "Çelik milin torna tezgahında kesici takımla işlenmesi",
    seoTitle: "CNC Torna İstanbul | Hassas CNC İşleme | KOC Makina",
    seoDescription:
      "KOC Makina; İstanbul’da CNC torna, CNC işleme, talaşlı imalat ve hassas parça üretimi çözümleri sunar. Projeniz için bizimle iletişime geçin.",
    h1: "CNC Torna ile Hassas Parça Üretimi",
    intro:
      "CNC torna, dönen iş parçasından kesici takımla talaş kaldırarak mil, burç, flanş ve dişli bağlantı elemanlarının üretildiği yöntemdir. KOC Makina bu yöntemi İstanbul’daki parça taleplerinde, teknik çizimdeki ölçü ve malzeme tanımına göre planlar.",
    paragraphs: [
      "Tornalamada parça kendi ekseninde döner. Kesici takım çap, alın, kanal ve diş operasyonlarını sırayla işler. Delik ekseni ve kademeli çaplar aynı bağlama içinde çözülebiliyorsa parça daha az sökülür; ölçü tekrarı buna bağlı olarak daha tutarlı kalır.",
      "CNC torna İstanbul aramalarında aranan şey çoğu zaman tezgah adı değil, çizimdeki parçanın üretilebilirliğidir. Malzeme çubuk veya kesilmiş parça olarak gelebilir. Adet düşükse prototip gibi, yüksekse seri üretim gibi planlanır. Her iki durumda da fiyatı belirleyen şey geometri, tolerans ve çevrim süresidir.",
      "Parçada freze gerektiren yüzey varsa yalnızca tornaya zorlamak yerine CNC işleme adımı plana eklenir. Böylece metal parça üretimi, tek bir tezgah adına sıkışmadan parçanın gerçek operasyonlarına göre yürür.",
    ],
    advantages: [
      {
        title: "Dönel geometri",
        text: "Mil, burç, flanş, pim ve rakor gibi parçalar tornalamanın doğal işidir.",
      },
      {
        title: "Diş ve kanal",
        text: "Dış diş, iç diş ve kanal operasyonları aynı süreç içinde planlanabilir.",
      },
      {
        title: "Tekrarlanabilir bağlama",
        text: "Seri işlerde bağlama düzeni sabitlenerek parti içi ölçü sapması kontrol altında tutulur.",
      },
    ],
    steps: [
      { title: "Çizimi okuma", text: "Çap, boy, diş, kanal ve toleranslar çıkarılır." },
      { title: "Malzeme", text: "Çelik, paslanmaz, alüminyum veya pirinç gibi tanım çizimden alınır." },
      { title: "Operasyon sırası", text: "Alın, kaba torna, finish, diş ve kesme adımları sıralanır." },
      { title: "Kontrol", text: "Kritik çap ve boylar ölçü aletiyle doğrulanır." },
    ],
    applications: ["Miller ve pimler", "Burç ve yatak parçaları", "Flanşlar", "Diş açılmış bağlantı elemanları"],
    faqs: [
      {
        question: "CNC torna ile freze arasındaki fark nedir?",
        answer:
          "CNC tornada parça döner, takım ilerler. Frezelemede parça genellikle sabitlenir, kesici takım döner ve yüzeyde gezer. Dönel parçalar tornada, prizmatik yüzeyler frezede daha verimli çözülür.",
      },
      {
        question: "Hangi bilgileri gönderirsem teklif hazırlanır?",
        answer:
          "Teknik çizim veya model, malzeme, adet ve varsa numune yeterlidir. Yüzey beklentisi ve kritik toleranslar çizimde işaretliyse teklif daha net çıkar.",
      },
      {
        question: "Tek parça CNC torna yapılır mı?",
        answer:
          "Tek parça ve düşük adet talepleri prototip kapsamında değerlendirilir. Parça bağlanabilir ve ölçüsü tanımlanmışsa adet, üretimin önünde bir engel değildir.",
      },
    ],
    related: ["cnc-isleme", "hassas-parca-uretimi", "seri-uretim"],
  },
  {
    slug: "cnc-isleme",
    number: "02",
    title: "CNC İşleme",
    summary: "Cep, delik, kanal ve oturma yüzeyleri için programlı talaş kaldırma.",
    image: images.hero,
    imageAlt: "CNC işleme merkezinde kesici takımın metal parçaya teması",
    seoTitle: "CNC İşleme İstanbul | Metal Parça Üretimi | KOC Makina",
    seoDescription:
      "İstanbul CNC işleme: cep, delik ve oturma yüzeyleri teknik çizime göre planlanır. KOC Makina ile parça talebinizi paylaşın.",
    h1: "CNC İşleme ile Prizmatik Parça Üretimi",
    intro:
      "CNC işleme, kesici takımın programlanan yollarla metal parçadan talaş kaldırdığı üretim yöntemidir. KOC Makina, torna ile çözülemeyen yüzeyleri bu yöntemle teknik çizime bağlar.",
    paragraphs: [
      "İşleme planı parçanın bağlama yüzeyinden başlar. İlk bağlamada erişilen yüzler bitirilir, parça çevrildiğinde referans kaybolmadan kalan yüzler işlenir. Delik eksenleri, cep derinlikleri ve oturma düzlemleri bu sıranın içinde yer alır.",
      "CNC işleme ile CNC torna birbirinin yerine kullanılan sözcükler değildir. Torna dönel formu üretir. İşleme, düzlem ve cep geometrisini üretir. Karmaşık parçalarda ikisi aynı iş emrinin iki operasyonudur.",
      "İstanbul CNC işleme taleplerinde teklif, modelin hacminden çok takım yolu ve bağlama sayısına bağlıdır. Bu yüzden yalnızca dış ölçü göndermek yerine teknik resim veya model paylaşmak gerekir.",
    ],
    advantages: [
      {
        title: "Yüzey ve cep",
        text: "Düzlem, cep, kanal ve kademeli yüzeyler programlı olarak işlenir.",
      },
      {
        title: "Delik eksenleri",
        text: "Delik çapı, konumu ve derinliği çizimdeki referansa göre planlanır.",
      },
      {
        title: "Tornayla birlikte",
        text: "Dönel gövde tornada, yan yüzeyler işlemede tamamlanabilir.",
      },
    ],
    steps: [
      { title: "Model veya resim", text: "Geometri ve kritik yüzeyler işaretlenir." },
      { title: "Bağlama", text: "Parçanın tezgaha nasıl oturacağı belirlenir." },
      { title: "Takım yolu", text: "Kaba ve finish pasoları ayrılır." },
      { title: "Doğrulama", text: "Konum ve derinlik ölçüleri kontrol edilir." },
    ],
    applications: ["Gövde ve flanş yüzeyleri", "Kanal ve cep detayları", "Delik grupları", "Oturma ve referans yüzeyleri"],
    faqs: [
      {
        question: "CNC işleme her metal için aynı mıdır?",
        answer:
          "Yöntem aynı ailede kalır, kesme parametresi malzemeye göre değişir. Çelik, paslanmaz, alüminyum ve pirinç farklı talaş davranışı gösterir. Malzeme çizimde tanımlı olmalıdır.",
      },
      {
        question: "Üç boyutlu model şart mı?",
        answer:
          "Ölçülendirilmiş teknik resim çoğu parça için yeterlidir. Karmaşık serbest yüzeylerde model, yorum farkını azaltır.",
      },
      {
        question: "İşleme sonrası başka operasyon gerekir mi?",
        answer:
          "Çapak alma ve ölçü kontrolü üretimin parçasıdır. Isıl işlem veya kaplama talep ediliyorsa bu, teklif aşamasında ayrıca konuşulmalıdır. KOC Makina bu dış prosesleri varmış gibi listelemez.",
      },
    ],
    related: ["cnc-torna", "talasli-imalat", "hassas-parca-uretimi"],
  },
  {
    slug: "talasli-imalat",
    number: "03",
    title: "Talaşlı İmalat",
    summary: "Keserek şekil veren üretim: tornadan işlemeye tek plan.",
    image: images.partsBrass,
    imageAlt: "Talaşlı imalat sonrası işlenmiş metal parçalar",
    seoTitle: "Talaşlı İmalat İstanbul | CNC Üretim | KOC Makina",
    seoDescription:
      "İstanbul talaşlı imalat: CNC torna ve CNC işleme ile metal parçalar teknik çizimden üretime alınır. KOC Makina.",
    h1: "Talaşlı İmalat",
    intro:
      "Talaşlı imalat, parçadan kesici takımla malzeme kaldırılarak hedef geometriye ulaşılan üretim biçimidir. KOC Makina’da bu ifade tek bir tezgah adı değil, CNC torna ve CNC işlemeyi birlikte düşünen planın adıdır.",
    paragraphs: [
      "Hammadde çubuk, plaka veya kesilmiş parça olabilir. Üretim yöntemi parçanın simetrisine göre seçilir. Dönel form talaşlı imalatın torna koluna, prizmatik form işleme koluna gider. İkisi birden gerekiyorsa operasyonlar sıraya dizilir.",
      "İstanbul talaşlı imalat arayan ekipler çoğu zaman hazır katalog parça değil, kendi çizimlerini arar. Bu yüzden süreç teklif formundaki dosyayla başlar: PDF teknik resim, DXF, DWG veya STEP.",
      "Kalite, slogan olarak değil ölçü olarak ele alınır. Kritik ölçüler işaretlenir, üretim sonunda kontrol edilir. İşaretlenmemiş her ölçüye aynı sıkılık uygulanmış varsayılmaz.",
    ],
    advantages: [
      {
        title: "Yöntem seçimi",
        text: "Parça, torna veya işleme diye ayrılmadan önce geometriye bakılır.",
      },
      {
        title: "Malzeme çeşitliliği",
        text: "Talaşlı imalata uygun metaller çizimdeki tanıma göre işlenir.",
      },
      {
        title: "Adetten bağımsız dil",
        text: "Prototip ve seri, aynı teknik dili kullanır. Değişen şey parti planıdır.",
      },
    ],
    steps: [
      { title: "Talep", text: "Çizim, malzeme ve adet alınır." },
      { title: "Yöntem", text: "Torna, işleme veya ikisinin sırası seçilir." },
      { title: "Üretim", text: "Talaş kaldırma operasyonları uygulanır." },
      { title: "Kontrol", text: "İşaretli ölçüler doğrulanır." },
    ],
    applications: ["Özel makine parçaları", "Bakım yedekleri", "Bağlantı elemanları", "Ekipman gövde detayları"],
    faqs: [
      {
        question: "Talaşlı imalat ile kaynaklı imalat aynı şey midir?",
        answer:
          "Hayır. Talaşlı imalatta parça kesilerek şekil alır. Kaynak, parçaları birleştirir. KOC Makina’nın konusu keserek üretimdir.",
      },
      {
        question: "Hangi dosyalar okunabilir?",
        answer:
          "Teklif için PDF, DXF, DWG, STEP ve STP dosyaları uygundur. Ölçüsüz görseller yalnızca ön konuşma içindir.",
      },
      {
        question: "Talaşlı imalatta fiyat neden parçadan parçaya değişir?",
        answer:
          "Çünkü talaş hacmi, bağlama sayısı, tolerans ve adet her parçada farklıdır. Aynı dış ölçüde iki parça, iç geometri yüzünden farklı sürebilir.",
      },
    ],
    related: ["cnc-torna", "cnc-isleme", "ozel-parca-imalati"],
  },
  {
    slug: "hassas-parca-uretimi",
    number: "04",
    title: "Hassas Parça Üretimi",
    summary: "Toleransı tanımlı parçalarda ölçü disiplinine bağlı üretim.",
    image: images.measure,
    imageAlt: "Hassas parça üzerinde dijital kumpas ile ölçü kontrolü",
    seoTitle: "Hassas Parça Üretimi İstanbul | KOC Makina CNC",
    seoDescription:
      "Hassas parça üretimi İstanbul: toleransı çizimde tanımlı metal parçalar CNC torna ve işlemede planlanır. KOC Makina.",
    h1: "Hassas Parça Üretimi",
    intro:
      "Hassas parça üretimi, gelişigüzel sıkı tolerans iddiası değil, çizimde belirtilen ölçülerin üretim ve kontrol planına bağlanmasıdır. KOC Makina, kritik ölçüleri ayrıca ele alır.",
    paragraphs: [
      "Bir parçada her ölçü aynı öneme sahip değildir. Geçme payı, eksen kaçıklığı ve oturma yüzeyi fonksiyonu belirler. Bu ölçüler teknik resimde işaretliyse üretim de kontrol de oraya yoğunlaşır.",
      "Hassas parça üretimi İstanbul aramalarında sık yapılan hata, mikron değeri vermeden hassasiyet vaat etmektir. KOC Makina tolerans uydurmaz. Hedef, çizimdeki değerdir. Çizimde değer yoksa teklif öncesi sorulur.",
      "Kontrol, üretimin sonunda eklenen bir etiket değil, bağlama ve paso kararını etkileyen bir adımdır. Ölçü tutmuyorsa parça sevk edilmez.",
    ],
    advantages: [
      {
        title: "Kritik ölçü ayrımı",
        text: "Fonksiyonu etkileyen ölçüler genel ölçülerden ayrılır.",
      },
      {
        title: "Kontrollü yüzey",
        text: "Yüzey beklentisi çizimde varsa finish paso ona göre bırakılır.",
      },
      {
        title: "Kayıtlı talep",
        text: "Hangi revizyonla üretildiği teklif ve çizim üzerinden izlenir.",
      },
    ],
    steps: [
      { title: "Toleransları ayırma", text: "Kritik ölçüler resimden işaretlenir." },
      { title: "Bağlama referansı", text: "Ölçü referansı ile bağlama yüzeyi eşlenir." },
      { title: "Üretim", text: "Kaba ve finish pasoları ayrılır." },
      { title: "Ölçü kontrolü", text: "İşaretli ölçüler aletle doğrulanır." },
    ],
    applications: ["Geçme parçalar", "Yatak ve burçlar", "Konum toleranslı delikler", "Oturma yüzeyli gövdeler"],
    faqs: [
      {
        question: "Hangi toleransa kadar üretim yapılır?",
        answer:
          "Sabit bir mikron değeri yayınlanmaz. Uygunluk, parçanın geometrisi ve çizimdeki tolerans birlikte okunarak söylenir. Uydurma bir hassasiyet rakamı verilmez.",
      },
      {
        question: "Ölçü raporu verilir mi?",
        answer:
          "Kritik ölçüler kontrol edilir. Yazılı rapor ihtiyacı teklif sırasında belirtilmelidir. Talep edilmeden her işe standart bir sertifika eklenmiş varsayılmaz.",
      },
      {
        question: "Numune ile hassas üretim olur mu?",
        answer:
          "Numune ön bilgi verir. Kritik geçmelerde yine de ölçülmüş bir referans veya çizim istenir. Aşınmış numune, hedef ölçü gibi kabul edilmez.",
      },
    ],
    related: ["cnc-torna", "cnc-isleme", "teknik-uretim-cozumleri"],
  },
  {
    slug: "prototip-uretim",
    number: "05",
    title: "Prototip Üretim",
    summary: "Seriye geçmeden geometri ve ölçünün düşük adette doğrulanması.",
    image: images.drawings,
    imageAlt: "Prototip öncesi teknik çizim ve ölçü incelemesi",
    seoTitle: "Prototip Üretim | CNC Parça | KOC Makina İstanbul",
    seoDescription:
      "CNC prototip üretim: teknik çizimden düşük adetli metal parça. Seri öncesi geometri doğrulaması için KOC Makina.",
    h1: "Prototip Üretim",
    intro:
      "Prototip üretim, bir fikrin vitrine çıkarılması değil, teknik çizimdeki parçanın düşük adette işlenerek geometrisinin görülmesidir. KOC Makina prototipi seri planının ilk partisi gibi ele alır.",
    paragraphs: [
      "Düşük adet, gevşek süreç demek değildir. Bağlama yine düşünülür, çünkü aynı parça sonra çoğalabilir. Prototipte öğrenilen operasyon sırası, seri teklifin girdisi olur.",
      "Çizim revizyonu prototipin doğal parçasıdır. İlk parçada görülen montaj sorunu resme işlenir, ikinci parça yeni resimden yürür. Bu yüzden hangi revizyonun üretildiği yazılır.",
      "Süre, parçanın hazırlığından bağımsız vaat edilmez. Takım, malzeme ve ölçü netliği geldikten sonra termin konuşulur.",
    ],
    advantages: [
      {
        title: "Düşük adet",
        text: "Tek parça ve küçük partiler seri öncesi doğrulama için alınır.",
      },
      {
        title: "Revizyon takibi",
        text: "Hangi çizimle işlendiği karışmaz.",
      },
      {
        title: "Seriye aktarım",
        text: "Prototipte kurulan operasyon, tekrar işlerde yeniden icat edilmez.",
      },
    ],
    steps: [
      { title: "İlk resim", text: "Güncel revizyon ve malzeme alınır." },
      { title: "Riskli ölçüler", text: "Montajı kilitleyen ölçüler işaretlenir." },
      { title: "İlk parça", text: "Düşük adet işlenir ve ölçülür." },
      { title: "Geri bildirim", text: "Gerekirse resim güncellenir, sonraki adet ona göre yürür." },
    ],
    applications: ["Yeni makine parçaları", "Montaj denemeleri", "Tasarım revizyonları", "Tek seferlik aparatlara ait detaylar"],
    faqs: [
      {
        question: "Prototip ile seri arasındaki fark nedir?",
        answer:
          "Prototipte amaç geometriyi ve ölçüyü doğrulamaktır. Seride amaç aynı parçayı partiler boyunca aynı şartnameyle tekrar etmektir. Bağlama ve kontrol disiplini ikisinde de vardır.",
      },
      {
        question: "Çizim henüz taslaksa üretim olur mu?",
        answer:
          "Eksik ölçü varsa tahminle üretilmez. Taslak, soru listesine döner. Ölçüler kapandıktan sonra parça tezgaha alınır.",
      },
      {
        question: "Prototip fiyatı seri birim fiyata benzer mi?",
        answer:
          "Genellikle benzemez. Hazırlık süresi az adede bölünür. Adet arttığında birim süre düşebilir. Bu, teklifte ayrıca gösterilir.",
      },
    ],
    related: ["seri-uretim", "ozel-parca-imalati", "teknik-uretim-cozumleri"],
  },
  {
    slug: "seri-uretim",
    number: "06",
    title: "Seri Üretim",
    summary: "Aynı parçanın partiler boyunca şartnameye uygun tekrarı.",
    image: images.cncChuck,
    imageAlt: "Seri üretime uygun CNC torna bağlama düzeni",
    seoTitle: "Seri Üretim CNC | Tekrarlanabilir Parça | KOC Makina",
    seoDescription:
      "CNC seri üretim planı: adet, malzeme ve toleransa göre tekrarlanabilir metal parça imalatı. İstanbul, KOC Makina.",
    h1: "Seri Üretim",
    intro:
      "Seri üretim, yüksek adet sloganı değil, aynı parçanın sonraki partide de aynı teknik şartnameyle çıkmasıdır. KOC Makina parti planını çizim, malzeme ve adet üzerinden kurar.",
    paragraphs: [
      "Seride asıl iş ilk parçayı yapmak değil, yüzüncü parçanın da aynı referansta kalmasıdır. Bağlama aparatı, takım ve kontrol ölçüsü bu yüzden baştan yazılır. Parça değiştikçe süreç ezberden yürümez.",
      "Adet arttıkça birim süre düşebilir, çünkü hazırlık partiye yayılır. Bu düşüş sonsuz değildir. Tolerans sıklaştıkça kontrol ve finish süresi yerinde kalır.",
      "Teslimat parti parti konuşulabilir. Stokta tutulacak miktar, müşterinin tüketimine ve netleşmiş bir programa bağlıdır. Programa bağlanmamış stok vaadi yapılmaz.",
    ],
    advantages: [
      {
        title: "Sabit operasyon",
        text: "Parça için yazılmış sıra, sonraki partide de kullanılır.",
      },
      {
        title: "Parti kontrolü",
        text: "İlk parça ve ara kontroller ölçü kaymasını erken gösterir.",
      },
      {
        title: "Adet planı",
        text: "Tek seferlik binlik vaat yerine, çizime bağlı parti planı yapılır.",
      },
    ],
    steps: [
      { title: "Şartname", text: "Güncel çizim ve kabul ölçüleri kilitlenir." },
      { title: "İlk parça onayı", text: "Parti açılmadan referans parça ölçülür." },
      { title: "Parti", text: "Aynı bağlama ve takım düzeniyle devam edilir." },
      { title: "Sevkiyat", text: "Kontrolden geçen parçalar ayrılır." },
    ],
    applications: ["Tekrarlayan bağlantı elemanları", "Bakım setleri", "Ekipman içi standart parçalar", "Periyodik yedekler"],
    faqs: [
      {
        question: "Seri üretim için minimum adet var mı?",
        answer:
          "Yayınlanmış sabit bir minimum yoktur. Parça hazırlığı ile adet birlikte bakılır. Bazı geometriler düşük adette de seri mantığıyla, yani sabit operasyonla yürür.",
      },
      {
        question: "Çizim revize olursa parti ne olur?",
        answer:
          "Eski revizyonla üretime devam edilmez. Yeni resim onaylanmadan kalan parti açılmaz.",
      },
      {
        question: "Seri üretim fiyatı nasıl konuşulur?",
        answer:
          "Hazırlık ve birim iş ayrı düşünülür. Adet kademeleri varsa her kademe kendi süresine göre fiyatlanır. Liste fiyatı yoktur.",
      },
    ],
    related: ["prototip-uretim", "cnc-torna", "hassas-parca-uretimi"],
  },
  {
    slug: "ozel-parca-imalati",
    number: "07",
    title: "Özel Parça İmalatı",
    summary: "Katalogda olmayan, çizime veya numuneye bağlı metal parçalar.",
    image: images.turningBrass,
    imageAlt: "Özel üretim pirinç parçanın tornada işlenmesi",
    seoTitle: "Özel Parça İmalatı | CNC Torna ve İşleme | KOC Makina",
    seoDescription:
      "Özel parça imalatı: katalog ürünü olmayan metal parçalar teknik çizim veya numuneye göre CNC ile üretilir. KOC Makina, İstanbul.",
    h1: "Özel Parça İmalatı",
    intro:
      "Özel parça imalatı, raftan parça satmak değil, müşterinin kendi geometrisini üretmektir. KOC Makina çizimi, modeli veya numunesi olan metal parçaları CNC torna ve CNC işleme ile ele alır.",
    paragraphs: [
      "Özel parça, standart bir cıvatanın yerine geçen her şey demek değildir. Ölçüsü tanımlı, malzemesi belli ve fonksiyonu çizimde anlatılmış parçadır. Bu tanım yoksa önce tanım tamamlanır.",
      "Numune ile gelen işlerde aşınma ve eksik diş gibi durumlar hedef ölçü sanılmaz. Numune konuşmanın başlangıcıdır. Üretilecek ölçü yazıya dökülür.",
      "Teknik çizime göre parça üretimi bu başlığın merkezindedir. PDF yeterli olabilir. STEP veya STP, karmaşık geometride yorumu azaltır.",
    ],
    advantages: [
      {
        title: "Katalog dışı",
        text: "Parça, hazır ürün koduna uymak zorunda değildir.",
      },
      {
        title: "Çizim esaslı",
        text: "Üretim, sözlü tarif yerine ölçülü resme bağlanır.",
      },
      {
        title: "Tek veya parti",
        text: "Aynı özel parça hem tek adet hem tekrar parti olabilir.",
      },
    ],
    steps: [
      { title: "Geometriyi kilitleme", text: "Çizim, model veya ölçülmüş numune netleşir." },
      { title: "Üretilebilirlik", text: "Bağlama ve takım erişimi kontrol edilir." },
      { title: "İşleme", text: "Uygun CNC operasyonları uygulanır." },
      { title: "Kabul", text: "Anlaşılan ölçülere göre kontrol edilir." },
    ],
    applications: ["Makineye özel miller", "Tekil yedekler", "Adaptör ve ara parçalar", "Revizyon görmüş ekipman detayları"],
    faqs: [
      {
        question: "Eski parça fotoğrafından üretim yapılır mı?",
        answer:
          "Fotoğraf tek başına üretim verisi değildir. Ölçü alınmış bir numune veya teknik resim gerekir.",
      },
      {
        question: "Malzemeyi müşteri verebilir mi?",
        answer:
          "Malzeme sorumluluğu teklifte yazılır. Müşteri malzemesi gelecekse cinsi, ölçüsü ve sertifikası iş öncesi netleşmelidir.",
      },
      {
        question: "Özel parça ile fason iş aynı mıdır?",
        answer:
          "Fason ifade, başkasının planına parça işlemek anlamına da gelebilir. KOC Makina talebi kendi teknik değerlendirmesinden geçirir. Uygun olmayan geometriyi sessizce kabul etmez.",
      },
    ],
    related: ["talasli-imalat", "prototip-uretim", "cnc-torna"],
  },
  {
    slug: "teknik-uretim-cozumleri",
    number: "08",
    title: "Teknik Üretim Çözümleri",
    summary: "Parçayı tezgaha almadan önce yöntem, bağlama ve ölçü planı.",
    image: images.swiss,
    imageAlt: "CNC tezgah içinde takım yerleşimi ve soğutma hatları",
    seoTitle: "Teknik Üretim Çözümleri | CNC Planlama | KOC Makina",
    seoDescription:
      "Teknik çizimden CNC operasyon planına: bağlama, yöntem ve ölçü kontrolü. KOC Makina İstanbul.",
    h1: "Teknik Üretim Çözümleri",
    intro:
      "Teknik üretim çözümü, parçayı hemen tezgaha bağlamak değil, hangi operasyonun neden seçildiğini çizim üzerinden anlatmaktır. KOC Makina talebi bu sırayla okur.",
    paragraphs: [
      "Bazı parçalar tornada biter. Bazıları işlemeye geçer. Bazıları ikisini birden ister. Seçim, eldeki tezgahın adı için değil, geometrinin erişilebilirliği için yapılır. Takım ulaşmıyorsa süreç baştan yazılır.",
      "Müşteri mühendisi ile atölye aynı resmi konuşmalıdır. Eksik kesit, tanımsız malzeme veya çelişen tolerans varsa üretim başlamadan sorulur. Bu sorular gecikme değil, hatalı parçayı engelleyen adımdır.",
      "Çözümün çıktısı süslü bir rapor olmak zorunda değildir. Net bir operasyon sırası, kabul ölçüsü ve teklif yeterlidir. İstenirse bu sıra prototipten seriye taşınır.",
    ],
    advantages: [
      {
        title: "Yöntem kararı",
        text: "Torna, işleme veya ikisi, geometriye göre seçilir.",
      },
      {
        title: "Eksik veri sorusu",
        text: "Tanımsız ölçü tahminle doldurulmaz.",
      },
      {
        title: "Üretime aktarım",
        text: "Konuşulan plan, tezgah sırasına dönüşür.",
      },
    ],
    steps: [
      { title: "Resmi okuma", text: "Malzeme, tolerans ve geometri ayrılır." },
      { title: "Risk", text: "İnce cidar, derin delik, dar kanal gibi noktalar işaretlenir." },
      { title: "Plan", text: "Operasyon sırası ve kontrol ölçüsü yazılır." },
      { title: "Teklif", text: "Plan, süre ve adetle birlikte fiyatlanır." },
    ],
    applications: ["Karma torna-freze parçalar", "Revizyonlu teknik resimler", "İlk kez üretilecek geometriler", "Tekrar işe dönecek parçalar"],
    faqs: [
      {
        question: "Tasarım hizmeti veriyor musunuz?",
        answer:
          "KOC Makina üretim tarafındadır. Parçanın mekanik tasarımını üstlenmiş gibi davranılmaz. Çizimdeki üretilebilirlik konuşulur, ürün tasarımı müşteride kalır.",
      },
      {
        question: "Çizimim üretilebilir değilse ne olur?",
        answer:
          "Sorun ve gerekçe söylenir. Köşe radyüsü, takım erişimi veya çelişen ölçü gibi başlıklar netleştirilir. Sessizce farklı bir parça üretilmez.",
      },
      {
        question: "Teknik çözümün bedeli ayrı mıdır?",
        answer:
          "Standart teklif değerlendirmesi üretimin parçasıdır. Ayrıca mühendislik çalışması istenirse kapsam teklifte ayrılır. Gizli kalem yazılmaz.",
      },
    ],
    related: ["hassas-parca-uretimi", "prototip-uretim", "cnc-isleme"],
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
