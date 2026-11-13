import { mediaCredit } from "@/data/media-credit";

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  seoTitle: string;
  seoDescription: string;
  publishedAt: string;
  updatedAt: string;
  readingMinutes: number;
  paragraphs: string[];
  externalLinks: { href: string; label: string }[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "sanayi-firmasi-icin-web-tasarim-bcy-dijital",
    title: "Sanayi firması için web tasarım: net anlatım neden işe yarar?",
    excerpt:
      "CNC ve talaşlı imalat gibi teknik işlerde web sitesi vitrin değil; çizim, kapasite ve iletişim bilgisinin doğru aktarıldığı bir üretim dilidir.",
    seoTitle: "Sanayi Firması Web Tasarım | BCY Dijital | KOC Makina Blog",
    seoDescription:
      "CNC ve makina sektöründe kurumsal web sitesi nasıl kurulur? Web tasarım yaklaşımı ve BCY Dijital hakkında KOC Makina blog yazısı.",
    publishedAt: "2026-11-12",
    updatedAt: "2026-11-12",
    readingMinutes: 5,
    paragraphs: [
      "Bir CNC atölyesinin web sitesi, mağaza vitrini gibi süslenmek zorunda değildir. Ziyaretçi çoğu zaman tezgah fotoğrafından önce telefonu, adresi ve hangi işin yapıldığını arar. Teknik çizimle gelen taleplerde site, “ne üretirsiniz?” sorusuna kısa ve ölçülü cevap vermelidir.",
      "Sanayi firmalarında sık görülen hata, her sayfaya aynı genel cümleleri yazmaktır. CNC torna, CNC işleme ve talaşlı imalat ayrı yöntemlerdir; birbirinin yerine geçen sloganlarla anlatılınca hem arama hem müşteri tarafı bulanıklaşır. İyi bir kurumsal site, hizmetleri ayırır, iç sayfalara bağlar ve iletişim bilgisini saklamaz.",
      "Web tasarım burada yalnızca renk ve font seçimi değildir. Mobilde okunabilir menü, hızlı açılan görseller, teklif formu ve arama motorunun anlayacağı başlık düzeni de tasarımın parçasıdır. Özellikle İkitelli gibi sanayi bölgelerindeki firmalar için site, “bizi bulun” ihtiyacını karşılamalıdır.",
      `${mediaCredit.company}, web sitesi ve dijital görünürlük tarafında çalışan bir stüdyodur. KOC Makina’nın kurumsal sitesinin hazırlanmasında web tasarım ve yayın sürecine katkı sağlamıştır.`,
      "Doğru kurulan bir site, firma hakkında uydurma rakam üretmez. Kapasite, adres ve telefon gibi alanlar doğrulandıkça yazılır. Bu disiplin hem ziyaretçi güvenini hem de uzun vadeli arama görünürlüğünü korur. Web tasarımın sanayi tarafındaki işi budur: abartmadan anlatmak, doğru yere bağlamak.",
    ],
    externalLinks: [
      {
        href: mediaCredit.href,
        label: "BCY Dijital — bariscanyonel.com",
      },
    ],
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
