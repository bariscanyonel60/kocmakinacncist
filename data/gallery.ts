export const galleryCategories = [
  { id: "tumu", label: "Tümü" },
  { id: "cnc-torna", label: "CNC Torna" },
  { id: "cnc-freze", label: "CNC Freze" },
  { id: "parcalar", label: "Parçalar" },
  { id: "uretim", label: "Üretim" },
  { id: "kalite", label: "Kalite" },
  { id: "makine", label: "Makine Parkuru" },
  { id: "atolye", label: "Atölye" },
] as const;

export type GalleryCategory = (typeof galleryCategories)[number]["id"];

export type GalleryItem = {
  src: string;
  alt: string;
  title: string;
  category: Exclude<GalleryCategory, "tumu">;
  type?: "image" | "video";
};

export const galleryItems: GalleryItem[] = [
  {
    src: "/images/cnc-torna-kesim.jpg",
    alt: "CNC tornada kesici uç, çelik mil, ayna ve punta",
    title: "CNC tornada mil işleme",
    category: "cnc-torna",
  },
  {
    src: "/images/cnc-torna-mil.jpg",
    alt: "Punta destekli CNC tornada işlenen uzun mil",
    title: "Punta destekli torna",
    category: "cnc-torna",
  },
  {
    src: "/images/torna-detay.jpg",
    alt: "Torna kalemi metal çubuğu işlerken oluşan talaş",
    title: "Talaş detayı",
    category: "cnc-torna",
  },
  {
    src: "/images/cnc-taret-talas.jpg",
    alt: "Talaş sıçratan CNC torna tareti ve kesici takımlar",
    title: "Taret ve takımlar",
    category: "cnc-torna",
  },
  {
    src: "/images/cnc-freze-talas.jpg",
    alt: "CNC freze kafası metal parçayı işlerken etrafa saçılan talaş",
    title: "Frezeleme anı",
    category: "cnc-freze",
  },
  {
    src: "/images/cnc-disli.jpg",
    alt: "Dişli formundaki metal parçanın üzerinde çalışan ince freze takımı",
    title: "Dişli formu işleme",
    category: "cnc-freze",
  },
  {
    src: "/images/hassas-freze.jpg",
    alt: "Bakır alaşım parçaya inen ince CNC freze takımı",
    title: "İnce takım geçişi",
    category: "cnc-freze",
  },
  {
    src: "/images/motor-blogu.jpg",
    alt: "Kapalı kabin içinde işlenen motor bloğu ve soğutma sıvısı",
    title: "Blok yüzey işleme",
    category: "uretim",
  },
  {
    src: "/images/karmasik-parca.jpg",
    alt: "Soğutma sıvısı altında frezelenen karmaşık metal parça",
    title: "Karmaşık geometri",
    category: "parcalar",
  },
  {
    src: "/images/islenmis-govde.jpg",
    alt: "Kanalları, dişleri ve delikleri görünen işlenmiş alüminyum gövde",
    title: "İşlenmiş gövde",
    category: "parcalar",
  },
  {
    src: "/images/metal-parcalar.jpg",
    alt: "Farklı çaplarda tornalanmış miller ve dişliler",
    title: "Tornalanmış parçalar",
    category: "parcalar",
  },
  {
    src: "/images/hassas-parca.jpg",
    alt: "Çok sayıda delik içeren parlatılmış hassas metal parça",
    title: "Hassas parça",
    category: "parcalar",
  },
  {
    src: "/images/cnc-torna-taret.jpg",
    alt: "CNC torna içinde çok istasyonlu takım tareti",
    title: "Takım tareti",
    category: "makine",
  },
  {
    src: "/images/cnc-alin-freze.jpg",
    alt: "Silindirik metal parçanın üzerindeki alın freze kafası",
    title: "Alın freze",
    category: "cnc-freze",
  },
  {
    src: "/images/torna-aynasi.jpg",
    alt: "Üç ayaklı torna aynası ve iş mili",
    title: "Torna aynası",
    category: "atolye",
  },
];
