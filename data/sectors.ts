import { images } from "@/data/media";

export type Sector = {
  slug: string;
  title: string;
  image: string;
  imageAlt: string;
  text: string;
};

export const sectors: Sector[] = [
  {
    slug: "otomotiv",
    title: "Otomotiv",
    image: images.measure,
    imageAlt: "Metal gövde üzerinde kumpasla ölçü kontrolü",
    text: "Bağlantı elemanları, burçlar ve gövde detayları gibi dönel veya prizmatik metal parçalar otomotiv tedarikinde sık karşılaşılan geometrilerdir.",
  },
  {
    slug: "makine-sanayi",
    title: "Makine Sanayi",
    image: images.latheShop,
    imageAlt: "Atölyede torna tezgahının kızak ve ayna detayı",
    text: "Makine gövdelerine ait miller, yataklar ve bağlantı parçaları teknik çizimdeki toleransa göre planlanır.",
  },
  {
    slug: "savunma-sanayi",
    title: "Savunma Sanayi",
    image: images.cncChuck,
    imageAlt: "Endüstriyel CNC torna aynasının yakın planı",
    text: "Mekanik parçalar, teknik şartname ve malzeme tanımı netleştikten sonra üretim uygunluğu açısından değerlendirilir. Bu başlık bir referans listesi değildir.",
  },
  {
    slug: "endustriyel-ekipman",
    title: "Endüstriyel Ekipman",
    image: images.swiss,
    imageAlt: "CNC tezgah içinde takım ve soğutma hatları",
    text: "Ekipman üreticilerinin ihtiyaç duyduğu tekrarlı metal parçalar, operasyon sırası ve ölçü kontrolü birlikte ele alınır.",
  },
  {
    slug: "otomasyon",
    title: "Otomasyon",
    image: images.hero,
    imageAlt: "CNC frezede kesici takım ve metal talaş",
    text: "Otomasyon ekipmanlarında kullanılan pimler, flanşlar ve bağlantı gövdeleri çizime göre işlenebilir.",
  },
  {
    slug: "enerji",
    title: "Enerji",
    image: images.heavyShaft,
    imageAlt: "Büyük çaplı işlenmiş çelik milin fabrika içindeki görünümü",
    text: "Enerji ekipmanlarında kullanılan miller ve bağlantı parçaları, çap, boy ve malzeme bilgisi geldikten sonra değerlendirilir.",
  },
  {
    slug: "yedek-parca",
    title: "Yedek Parça",
    image: images.partsBrass,
    imageAlt: "İşlenmiş pirinç ve metal parçaların yakın planı",
    text: "Numune veya eski parça üzerinden ölçü alınarak yedek parça üretimi değerlendirilebilir. Kritik ölçüler çizimle doğrulanır.",
  },
  {
    slug: "ozel-makine",
    title: "Özel Makine Parçaları",
    image: images.turningBrass,
    imageAlt: "Tornada pirinç parçanın kesici takımla işlenmesi",
    text: "Katalog ürünü olmayan, tek bir makineye özel parçalar teknik çizimden üretime alınır.",
  },
];
