import { images } from "@/data/media";

export const galleryFilters = [
  { id: "tumu", label: "Tümü" },
  { id: "cnc-torna", label: "CNC Torna" },
  { id: "uretim", label: "Üretim" },
  { id: "parcalar", label: "Parçalar" },
  { id: "makine", label: "Makine Parkuru" },
  { id: "atolye", label: "Atölye" },
] as const;

export type GalleryFilter = (typeof galleryFilters)[number]["id"];

export type GalleryItem = {
  id: string;
  title: string;
  caption: string;
  src: string;
  alt: string;
  category: Exclude<GalleryFilter, "tumu">;
  width: number;
  height: number;
};

export const galleryItems: GalleryItem[] = [
  {
    id: "celik-tornalama",
    title: "Çelik parça tornalama",
    caption: "Dönen iş parçası, kesici takım ve soğutma. Temsili tornalama karesi.",
    src: images.shaftTurning,
    alt: "Çelik milin torna tezgahında soğutma altında işlenmesi",
    category: "cnc-torna",
    width: 1600,
    height: 1065,
  },
  {
    id: "pirinc-dis",
    title: "Pirinç parçada talaş",
    caption: "Kesici takım, diş profili ve tezgah üzerinde biriken talaş.",
    src: images.turningBrass,
    alt: "Pirinç parçanın tornada işlenmesi sırasında oluşan metal talaş",
    category: "cnc-torna",
    width: 2000,
    height: 3000,
  },
  {
    id: "freze-talas",
    title: "CNC frezeleme",
    caption: "Kesici takımın metale teması ve işlem sırasında dağılan talaş.",
    src: images.hero,
    alt: "CNC freze kesicisinin metal parçayı işlemesi",
    category: "uretim",
    width: 2000,
    height: 1333,
  },
  {
    id: "islenmis-govde",
    title: "İşlenmiş metal gövdeler",
    caption: "Cep ve delik içeren, talaşlı imalat sonrası metal parçalar.",
    src: images.partsBrass,
    alt: "Cep boşaltılmış işlenmiş metal parçaların yakın planı",
    category: "parcalar",
    width: 2000,
    height: 1333,
  },
  {
    id: "olcu-kontrol",
    title: "Ölçü kontrolü",
    caption: "Üretim sonrası ölçü doğrulamasını anlatan kontrol karesi.",
    src: images.measure,
    alt: "Dijital kumpas ile metal parça ölçümü",
    category: "uretim",
    width: 1600,
    height: 2844,
  },
  {
    id: "torna-ayna",
    title: "CNC torna aynası",
    caption: "Ayna, çene ve iş parçası bağlama düzeni.",
    src: images.cncChuck,
    alt: "CNC torna tezgahında ayna ve bağlı metal parça",
    category: "makine",
    width: 2000,
    height: 1333,
  },
  {
    id: "kayar-otomat",
    title: "Tezgah içi",
    caption: "Takım bölgesi ve soğutma hatlarının göründüğü tezgah içi.",
    src: images.swiss,
    alt: "CNC torna tezgahının içindeki takım ve soğutma düzeni",
    category: "makine",
    width: 1920,
    height: 1440,
  },
  {
    id: "atolye-torna",
    title: "Atölye tezgahı",
    caption: "Kızak, ayna ve kalemlik düzeninin göründüğü atölye karesi.",
    src: images.latheShop,
    alt: "Atölyede torna tezgahının kızak ve ayna bölümü",
    category: "atolye",
    width: 2000,
    height: 2667,
  },
  {
    id: "teknik-cizim",
    title: "Teknik çizim",
    caption: "Üretim talebinin çizim ve ölçü üzerinden okunması.",
    src: images.drawings,
    alt: "Teknik çizimler üzerinde kumpas ile ölçü incelemesi",
    category: "uretim",
    width: 1800,
    height: 1200,
  },
  {
    id: "buyuk-mil",
    title: "İşlenmiş mil",
    caption: "Kademeli çapları görünen büyük ölçekli işlenmiş mil.",
    src: images.heavyShaft,
    alt: "Kademeli çaplara sahip büyük çelik mil",
    category: "parcalar",
    width: 1600,
    height: 1067,
  },
];
