export type Sector = {
  name: string;
  text: string;
  image: string;
  imageAlt: string;
};

export const sectors: Sector[] = [
  {
    name: "Otomotiv",
    text: "Mil, burç, flanş ve bağlantı parçaları gibi döner ya da prizmatik metal komponentler.",
    image: "/images/motor-blogu.jpg",
    imageAlt: "CNC tezgahta işlenen motor bloğu yüzeyi",
  },
  {
    name: "Makine Sanayi",
    text: "Makine gövdelerine ve aktarma organlarına giden işlenmiş metal parçalar.",
    image: "/images/cnc-torna-taret.jpg",
    imageAlt: "Takım tareti görünen CNC torna iç hacmi",
  },
  {
    name: "Savunma Sanayi",
    text: "Teknik resme bağlı, tekrar edilebilir ölçü isteyen metal parça ihtiyaçları.",
    image: "/images/karmasik-parca.jpg",
    imageAlt: "Karmaşık geometrili metal parçanın frezelenmesi",
  },
  {
    name: "Endüstriyel Ekipman",
    text: "Ekipman içinde çalışan yataklama, kapak ve bağlantı elemanları.",
    image: "/images/islenmis-govde.jpg",
    imageAlt: "Kanalları ve dişleri işlenmiş alüminyum gövde",
  },
  {
    name: "Otomasyon",
    text: "Hat ekipmanlarında kullanılan pim, mil ve özel bağlama parçaları.",
    image: "/images/otomasyon-hatti.jpg",
    imageAlt: "Kabloları ve kontrol panosu görünen endüstriyel otomasyon hattı",
  },
  {
    name: "Enerji",
    text: "Şaft, burç ve flanş benzeri, çizime göre işlenen metal bileşenler.",
    image: "/images/cnc-torna-mil.jpg",
    imageAlt: "Ayna ile punta arasında tornalanan çelik mil",
  },
  {
    name: "Yedek Parça",
    text: "Numune veya eski parça üzerinden ölçü alınarak yenilenebilen komponentler.",
    image: "/images/metal-parcalar.jpg",
    imageAlt: "Tornalanmış miller, dişliler ve burçlardan oluşan metal parçalar",
  },
  {
    name: "Özel Makine Parçaları",
    text: "Katalog ürünü olmayan, projeye özel işlenen tekil veya küçük seri parçalar.",
    image: "/images/hassas-parca.jpg",
    imageAlt: "Çok delikli, parlatılmış hassas metal parça",
  },
];
