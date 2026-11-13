export type NavChild = {
  href: string;
  label: string;
  description?: string;
};

export type NavItem = {
  href: string;
  label: string;
  children?: readonly NavChild[];
};

/** Ana menü — Kurumsal ve Hizmetler açılır alt menü. */
export const navItems: readonly NavItem[] = [
  {
    href: "/kurumsal",
    label: "Kurumsal",
    children: [
      { href: "/kurumsal", label: "Hakkımızda", description: "Firma yaklaşımı ve çalışma ilkesi" },
      { href: "/kalite", label: "Kalite", description: "Ölçü kontrolü ve süreç disiplini" },
      {
        href: "/istanbul-cnc-torna",
        label: "İstanbul CNC Torna",
        description: "İkitelli üretim ve teklif",
      },
      { href: "/makaleler", label: "Makaleler", description: "CNC üretim rehberleri" },
      { href: "/gizlilik-politikasi", label: "Gizlilik Politikası", description: "Veri ve teklif formu" },
    ],
  },
  {
    href: "/hizmetler",
    label: "Hizmetler",
    children: [
      { href: "/hizmetler/cnc-torna", label: "CNC Torna", description: "Dönel metal parçalar" },
      { href: "/hizmetler/cnc-isleme", label: "CNC Freze", description: "Cep, kontur ve delik" },
      { href: "/hizmetler/talasli-imalat", label: "Talaşlı İmalat", description: "Torna ve işleme planı" },
      {
        href: "/hizmetler/hassas-parca-uretimi",
        label: "Hassas Parça",
        description: "Tolerans odaklı üretim",
      },
      { href: "/hizmetler/prototip-uretim", label: "Prototip", description: "Düşük adet doğrulama" },
      { href: "/hizmetler/seri-uretim", label: "Seri Üretim", description: "Tekrarlanabilir parti" },
      { href: "/hizmetler", label: "Tüm hizmetler", description: "Üretim yetenekleri listesi" },
    ],
  },
  { href: "/uretim", label: "Üretim" },
  { href: "/makine-parkuru", label: "Makine Parkuru" },
  { href: "/sektorler", label: "Sektörler" },
  { href: "/galeri", label: "Galeri" },
  { href: "/iletisim", label: "İletişim" },
] as const;

export const capabilityStrip = [
  "CNC Torna",
  "Hassas İşleme",
  "Seri Üretim",
  "Prototip Üretim",
  "Özel Parça İmalatı",
  "Kalite Kontrol",
] as const;

export const legalLinks = [
  { href: "/gizlilik-politikasi", label: "Gizlilik Politikası" },
  { href: "/kvkk", label: "KVKK" },
  { href: "/cerez-politikasi", label: "Çerez Politikası" },
] as const;
