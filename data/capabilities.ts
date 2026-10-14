import { getService } from "@/data/services";

type HomeCapability = {
  slug: string;
  title: string;
  points: string[];
};

const homeCapabilityList: HomeCapability[] = [
  {
    slug: "cnc-torna",
    title: "CNC Torna",
    points: ["Mil, burç, flanş, pim", "Dış çap, iç çap, kanal, pah, diş", "Punta destekli uzun parça"],
  },
  {
    slug: "cnc-isleme",
    title: "CNC Freze",
    points: ["Cep, kontur ve düzlem", "Delik konumu ve diş", "Torna sonrası freze operasyonu"],
  },
  {
    slug: "hassas-parca-uretimi",
    title: "Hassas İşleme",
    points: ["Kritik ölçü ve yüzey ilişkisi", "Datum yüzeyine göre bağlama", "Teslim öncesi ölçü kontrolü"],
  },
  {
    slug: "prototip-uretim",
    title: "Prototip Üretim",
    points: ["Tek parça ve küçük adet", "Montaj öncesi geometri doğrulama", "Seriye geçiş için not"],
  },
  {
    slug: "seri-uretim",
    title: "Seri Üretim",
    points: ["Sabit operasyon sırası", "Tekrarlanabilir bağlama", "Parti içi ölçü takibi"],
  },
  {
    slug: "ozel-parca-imalati",
    title: "Özel Parça",
    points: ["Çizime veya numuneye göre", "Katalog dışı geometri", "Yedek parça yeniden üretimi"],
  },
];

export const homeCapabilities = homeCapabilityList.flatMap((item, index) => {
  const service = getService(item.slug);
  if (!service) return [];
  return [
    {
      ...item,
      number: String(index + 1).padStart(2, "0"),
      short: service.short,
      image: service.image,
      imageAlt: service.imageAlt,
      href: `/hizmetler/${service.slug}`,
    },
  ];
});

/**
 * Torna ve freze bölümlerindeki teknik alanlar.
 * Sayısal değerler (çap, boy, tolerans) doğrulanmadan yazılmaz; boş alan sitede gösterilmez.
 * TODO: Replace with verified company data.
 */
export type FeatureSpec = { label: string; value: string };

export type ProcessFeature = {
  id: string;
  index: string;
  eyebrow: string;
  title: string[];
  paragraphs: string[];
  image: string;
  imageAlt: string;
  specs: FeatureSpec[];
  links: { href: string; label: string }[];
};

export const processFeatures: ProcessFeature[] = [
  {
    id: "cnc-torna",
    index: "03",
    eyebrow: "CNC Torna",
    title: ["CNC torna ile", "hassas parça", "üretimi"],
    paragraphs: [
      "Mil, burç, flanş ve pim gibi döner geometrili parçalar teknik resme göre programlanır. Dış çap, iç çap, kanal, pah ve diş operasyonları aynı referans eksen üzerinde planlanır.",
      "Uzun parçada punta desteği, kısa parçada bağlama boyu baştan belirlenir. Kritik çaplar ilk parçada ölçülür, sonra seri devam eder.",
    ],
    image: "/images/cnc-torna-taret.jpg",
    imageAlt: "CNC torna takım taretinde üretime hazır kesici takımlar",
    specs: [
      { label: "İşleme çapı", value: "" },
      { label: "İşleme boyu", value: "" },
      { label: "Tolerans", value: "" },
      { label: "Operasyonlar", value: "Dış çap · İç çap · Kanal · Pah · Diş" },
      { label: "Parça aileleri", value: "Mil · Burç · Flanş · Pim" },
      { label: "Malzemeler", value: "Çelik · Paslanmaz · Alüminyum · Pirinç" },
    ],
    links: [
      { href: "/hizmetler/cnc-torna", label: "CNC torna hizmeti" },
      { href: "/istanbul-cnc-torna", label: "İstanbul CNC torna" },
    ],
  },
  {
    id: "cnc-freze",
    index: "04",
    eyebrow: "CNC Freze",
    title: ["CNC freze ile", "cep, kontur", "ve delik"],
    paragraphs: [
      "Düzlem, cep, kontur ve delik gerektiren parçalar CNC frezede işlenir. Bağlama, teknik resimdeki datum yüzeyine göre kurulur; birbirine dik ve paralel yüzeyler aynı referanstan alınır.",
      "Önce torna sonra freze gereken parçalarda operasyon sırası baştan yazılır. Delik konumu ve derinlik, son pasodan sonra resimle karşılaştırılır.",
    ],
    image: "/images/cnc-alin-freze.jpg",
    imageAlt: "Alın freze kafası silindirik metal parçanın üzerinde",
    specs: [
      { label: "İşleme alanı", value: "" },
      { label: "Eksen", value: "" },
      { label: "Tolerans", value: "" },
      { label: "Operasyonlar", value: "Düzlem · Cep · Kontur · Delik · Diş" },
      { label: "Birleşik rota", value: "Torna + freze operasyon planı" },
      { label: "Malzemeler", value: "Çelik · Paslanmaz · Alüminyum · Pirinç" },
    ],
    links: [
      { href: "/hizmetler/cnc-isleme", label: "CNC işleme hizmeti" },
      { href: "/hizmetler/talasli-imalat", label: "Talaşlı imalat" },
    ],
  },
];
