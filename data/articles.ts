export type ArticleRelated = { href: string; label: string };

export type ArticleSection = {
  heading?: string;
  paragraphs: string[];
};

export type Article = {
  slug: string;
  title: string;
  seoTitle: string;
  seoDescription: string;
  h1: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  publishedAt: string;
  related: ArticleRelated[];
  sections: ArticleSection[];
};

export const articles: Article[] = [
  {
    "slug": "istanbulda-cnc-torna-secimi",
    "title": "İstanbul'da CNC Torna Seçimi",
    "seoTitle": "İstanbul'da CNC Torna Nasıl Seçilir? | Koç Makina",
    "seoDescription": "İstanbul'da CNC torna üreticisi seçerken teknik resim, malzeme ve toleransa bakın.",
    "h1": "İstanbul'da CNC Torna Üreticisi Nasıl Seçilir?",
    "excerpt": "CNC torna seçiminde teknik resim ve iletişim.",
    "image": "/images/cnc-torna-kesim.jpg",
    "imageAlt": "CNC tornada kesici uç ile işlenen çelik mil",
    "publishedAt": "2026-11-10",
    "related": [
      {
        "href": "/hizmetler/cnc-torna",
        "label": "CNC Torna hizmeti"
      },
      {
        "href": "/istanbul-cnc-torna",
        "label": "İstanbul CNC Torna"
      },
      {
        "href": "/iletisim#teklif",
        "label": "Teklif formu"
      }
    ],
    "sections": [
      {
        "heading": "Cnc Torna neden önemli",
        "paragraphs": [
          "İstanbul'da CNC torna ihtiyacı çoğu zaman montaj takvimine, numune onayına veya üretim sürekliliğine bağlıdır. Başakşehir İkitelli gibi bir sanayi bölgesinde iş yapmak, lojistik süresini kısaltır ve revizyonları yüz yüze konuşmayı kolaylaştırır. Koç Makina, CNC Mühendislik unvanıyla İkitelli OSB Demirciler Sanayi Sitesi'nde talepleri teknik resme göre değerlendirir.",
          "Seçim yaparken abartılı kapasite cümleleri yerine çizimin doğru okunup okunmadığına bakın. Tornalama işinde malzeme, tolerans, adet ve operasyon sayısı net değilse teklif de net olmaz. Net olmayan teklif, montajda sürpriz üretir.",
          "İstanbul sanayisinde aynı görünen iki iş, kanal sayısı veya delik konumu yüzünden çok farklı süre ister. Bu yüzden üreticiye nasıl bağlama kuracağını ve hangi operasyonları gördüğünü sorun. Katalog vaadi yerine teknik diyalog arayın."
        ]
      },
      {
        "heading": "Teknik dosya ve planlama",
        "paragraphs": [
          "İyi bir CNC torna değerlendirmesi için PDF teknik resim çoğu zaman yeterlidir. STEP modeli varsa bağlama ve takım yolu daha hızlı kurulur. Malzeme cinsi, ham ölçü, adet, yüzey veya ısıl işlem notu aynı pakette gitmelidir.",
          "Eksik kritik ölçü, iş emri açılmadan önce geri dönüş üretir; bu gecikme değil, yanlış üretimi önlemedir. Torna ve freze aynı parçada birleşebileceği için rota baştan yazılmalıdır. Tornalama taleplerinde bu ayrım özellikle kritiktir.",
          "Numune varsa ölçüm notuyla gönderin. Aşınmış numunede hangi ölçünün orijinal kabul edileceği konuşulmadan kör kopya yapılmamalıdır. Bu disiplin hem sipariş vereni hem atölyeyi korur."
        ]
      },
      {
        "heading": "Kapasiteye dürüst bakış",
        "paragraphs": [
          "Koç Makina park özeti kartvizitteki başlıklarla sınırlı tutulur: 15 inç ve 8 inç CNC torna, CNC işleme, 4 eksen işleme, torna ve freze. Marka, model, rpm ve tüm mm değerler doğrulanmadan sitede şişirilmez.",
          "Siz de üretici seçerken her işi yaparız cümlesini soruyla test edin. Hangi bağlama, hangi kontrol, hangi termin gerçekçiliği? Cevap somutsa CNC torna riski düşer. Cevap sloganla geçiştiriliyorsa çiziminizi başka kapıya da götürün.",
          "Galeri görselleri yöntem anlatır; her fotoğraf sizin parçanız değildir. Teklif aşamasında birebir değerlendirme yapılır."
        ]
      },
      {
        "heading": "Teklif, iletişim ve sonraki adım",
        "paragraphs": [
          "Sağlıklı teklif; malzeme, operasyon sırası, kontrol noktaları ve teslim varsayımlarını içerir. Sabit birim fiyat listesi yoksa sebep bellidir: her tornalama kendi süresini üretir. Küçük adet prototip ile seri parti aynı resim üzerinden farklı plan ister.",
          "Telefon, WhatsApp ve e-posta ile çizim paylaşımı hızlı olmalıdır. Sitedeki teklif formuna dosya ekleyerek başlamak konuşmayı kayıttan yürütür. İstanbul içinde üretim, revizyon turlarını kısaltır.",
          "Özetle İstanbul'da CNC torna ararken referans fotoğraf kadar teknik diyaloğu tartın. Çizimi soran ve eksik ölçüyü işaretleyen firma üretim riskini azaltır. İlgili hizmet sayfalarını inceleyip çiziminizi teklif formundan iletebilirsiniz.",
          "İstanbul gibi büyük bir pazarda CNC torna tedariki çok seçenekli görünür; seçenek bolluğu kaliteyi garanti etmez. Atölyeyi ziyaret etmek, benzer parça örneklerine bakmak ve teklif varsayımlarını yazılı almak riski düşürür. Koç Makina ile çalışırken çizim üzerinden konuşur, eksik ölçüleri işaretler ve torna ile freze ihtiyacını ayırırız. Bu sade yöntem, yanlış başlayan işleri azaltır ve montaj hattınızı bekletmez. Yerel üretim avantajını ancak teknik disiplinle birleştirince anlamlıdır.",
          "Doğru CNC işi, doğru dosya ve doğru diyalogla başlar. İstanbul'da üretim yapan Koç Makina, çiziminizi teknik dilde okur ve yapılabilir planı açık yazar. Belirsiz kalan noktaları varsayımla kapatmayız; sorar, netleştirir, sonra üretiriz. Bu yaklaşım fireyi ve montaj gecikmesini azaltır.",
          "Doğru CNC işi, doğru dosya ve doğru diyalogla başlar. İstanbul'da üretim yapan Koç Makina, çiziminizi teknik dilde okur ve yapılabilir planı açık yazar. Belirsiz kalan noktaları varsayımla kapatmayız; sorar, netleştirir, sonra üretiriz. Bu yaklaşım fireyi ve montaj gecikmesini azaltır.",
          "Doğru CNC işi, doğru dosya ve doğru diyalogla başlar. İstanbul'da üretim yapan Koç Makina, çiziminizi teknik dilde okur ve yapılabilir planı açık yazar. Belirsiz kalan noktaları varsayımla kapatmayız; sorar, netleştirir, sonra üretiriz. Bu yaklaşım fireyi ve montaj gecikmesini azaltır."
        ]
      }
    ]
  },
  {
    "slug": "ikitelli-cnc-imalat",
    "title": "İkitelli'de CNC İmalat",
    "seoTitle": "İkitelli OSB CNC İmalat | Başakşehir Koç Makina",
    "seoDescription": "İkitelli OSB'de CNC imalat ve Başakşehir konum avantajı.",
    "h1": "İkitelli OSB'de CNC İmalat: Konum ve Üretim Disiplini",
    "excerpt": "İkitelli'de CNC imalat neden tercih edilir?",
    "image": "/images/uretim-hatti.jpg",
    "imageAlt": "CNC üretim ortamında metal parça işleme",
    "publishedAt": "2026-11-10",
    "related": [
      {
        "href": "/kurumsal",
        "label": "Kurumsal"
      },
      {
        "href": "/makine-parkuru",
        "label": "Makine parkuru"
      },
      {
        "href": "/iletisim#teklif",
        "label": "Teklif formu"
      }
    ],
    "sections": [
      {
        "heading": "Cnc Imalat neden önemli",
        "paragraphs": [
          "İstanbul'da CNC imalat ihtiyacı çoğu zaman montaj takvimine, numune onayına veya üretim sürekliliğine bağlıdır. Başakşehir İkitelli gibi bir sanayi bölgesinde iş yapmak, lojistik süresini kısaltır ve revizyonları yüz yüze konuşmayı kolaylaştırır. Koç Makina, CNC Mühendislik unvanıyla İkitelli OSB Demirciler Sanayi Sitesi'nde talepleri teknik resme göre değerlendirir.",
          "Seçim yaparken abartılı kapasite cümleleri yerine çizimin doğru okunup okunmadığına bakın. Imalat işinde malzeme, tolerans, adet ve operasyon sayısı net değilse teklif de net olmaz. Net olmayan teklif, montajda sürpriz üretir.",
          "İstanbul sanayisinde aynı görünen iki iş, kanal sayısı veya delik konumu yüzünden çok farklı süre ister. Bu yüzden üreticiye nasıl bağlama kuracağını ve hangi operasyonları gördüğünü sorun. Katalog vaadi yerine teknik diyalog arayın."
        ]
      },
      {
        "heading": "Teknik dosya ve planlama",
        "paragraphs": [
          "İyi bir CNC imalat değerlendirmesi için PDF teknik resim çoğu zaman yeterlidir. STEP modeli varsa bağlama ve takım yolu daha hızlı kurulur. Malzeme cinsi, ham ölçü, adet, yüzey veya ısıl işlem notu aynı pakette gitmelidir.",
          "Eksik kritik ölçü, iş emri açılmadan önce geri dönüş üretir; bu gecikme değil, yanlış üretimi önlemedir. Torna ve freze aynı parçada birleşebileceği için rota baştan yazılmalıdır. Imalat taleplerinde bu ayrım özellikle kritiktir.",
          "Numune varsa ölçüm notuyla gönderin. Aşınmış numunede hangi ölçünün orijinal kabul edileceği konuşulmadan kör kopya yapılmamalıdır. Bu disiplin hem sipariş vereni hem atölyeyi korur."
        ]
      },
      {
        "heading": "Kapasiteye dürüst bakış",
        "paragraphs": [
          "Koç Makina park özeti kartvizitteki başlıklarla sınırlı tutulur: 15 inç ve 8 inç CNC torna, CNC işleme, 4 eksen işleme, torna ve freze. Marka, model, rpm ve tüm mm değerler doğrulanmadan sitede şişirilmez.",
          "Siz de üretici seçerken her işi yaparız cümlesini soruyla test edin. Hangi bağlama, hangi kontrol, hangi termin gerçekçiliği? Cevap somutsa CNC imalat riski düşer. Cevap sloganla geçiştiriliyorsa çiziminizi başka kapıya da götürün.",
          "Galeri görselleri yöntem anlatır; her fotoğraf sizin parçanız değildir. Teklif aşamasında birebir değerlendirme yapılır."
        ]
      },
      {
        "heading": "Teklif, iletişim ve sonraki adım",
        "paragraphs": [
          "Sağlıklı teklif; malzeme, operasyon sırası, kontrol noktaları ve teslim varsayımlarını içerir. Sabit birim fiyat listesi yoksa sebep bellidir: her imalat kendi süresini üretir. Küçük adet prototip ile seri parti aynı resim üzerinden farklı plan ister.",
          "Telefon, WhatsApp ve e-posta ile çizim paylaşımı hızlı olmalıdır. Sitedeki teklif formuna dosya ekleyerek başlamak konuşmayı kayıttan yürütür. İstanbul içinde üretim, revizyon turlarını kısaltır.",
          "Özetle İstanbul'da CNC imalat ararken referans fotoğraf kadar teknik diyaloğu tartın. Çizimi soran ve eksik ölçüyü işaretleyen firma üretim riskini azaltır. İlgili hizmet sayfalarını inceleyip çiziminizi teklif formundan iletebilirsiniz.",
          "İkitelli OSB'de komşu tedarikçilerle çalışmak, acil malzeme veya yan proses ihtiyacında telefon mesafesini kısaltır. Yine de her işin aynı gün bitmesi beklenmemelidir; takım hazırlığı ve program süresi geometriye bağlıdır. Koç Makina olarak vaadimiz hız sloganı değil, çizime bağlı yapılabilir plandır. Ziyaretçiler kurumsal sayfamızdan yaklaşımı, parkuru özetinden kapsamı görebilir. CNC imalat kararını verirken mesafeyi ve ölçü diyalogunu birlikte tartmanızı öneririz.",
          "Başakşehir adresimiz; numune bırakma, ölçü kontrolü ve sevkiyat planı için pratik bir noktadır. Aynı bölgede çalışan montaj hatları için tekrarlayan lojistik maliyeti düşer. Teklif aşamasında termin gerçekçiliği, çizimin olgunluğuna bağlıdır. Eksik resimle verilen söz, her iki tarafı da yorar. Bu yüzden önce dosyayı tamamlamak, sonra takvimi kilitlemek daha sağlıklıdır.",
          "Doğru CNC işi, doğru dosya ve doğru diyalogla başlar. İstanbul'da üretim yapan Koç Makina, çiziminizi teknik dilde okur ve yapılabilir planı açık yazar. Belirsiz kalan noktaları varsayımla kapatmayız; sorar, netleştirir, sonra üretiriz. Bu yaklaşım fireyi ve montaj gecikmesini azaltır.",
          "Doğru CNC işi, doğru dosya ve doğru diyalogla başlar. İstanbul'da üretim yapan Koç Makina, çiziminizi teknik dilde okur ve yapılabilir planı açık yazar. Belirsiz kalan noktaları varsayımla kapatmayız; sorar, netleştirir, sonra üretiriz. Bu yaklaşım fireyi ve montaj gecikmesini azaltır."
        ]
      }
    ]
  },
  {
    "slug": "istanbul-cnc-freze",
    "title": "İstanbul'da CNC Freze",
    "seoTitle": "İstanbul CNC Freze ve İşleme | Koç Makina Başakşehir",
    "seoDescription": "İstanbul'da CNC freze ve işleme: cep, kontur, delik.",
    "h1": "İstanbul'da CNC Freze ve CNC İşleme",
    "excerpt": "CNC freze / işleme yaklaşımı.",
    "image": "/images/cnc-freze-talas.jpg",
    "imageAlt": "CNC frezede metal işlenirken oluşan talaş",
    "publishedAt": "2026-11-11",
    "related": [
      {
        "href": "/hizmetler/cnc-isleme",
        "label": "CNC işleme"
      },
      {
        "href": "/iletisim#teklif",
        "label": "Teklif formu"
      }
    ],
    "sections": [
      {
        "heading": "Cnc Freze neden önemli",
        "paragraphs": [
          "İstanbul'da CNC freze ihtiyacı çoğu zaman montaj takvimine, numune onayına veya üretim sürekliliğine bağlıdır. Başakşehir İkitelli gibi bir sanayi bölgesinde iş yapmak, lojistik süresini kısaltır ve revizyonları yüz yüze konuşmayı kolaylaştırır. Koç Makina, CNC Mühendislik unvanıyla İkitelli OSB Demirciler Sanayi Sitesi'nde talepleri teknik resme göre değerlendirir.",
          "Seçim yaparken abartılı kapasite cümleleri yerine çizimin doğru okunup okunmadığına bakın. Işleme işinde malzeme, tolerans, adet ve operasyon sayısı net değilse teklif de net olmaz. Net olmayan teklif, montajda sürpriz üretir.",
          "İstanbul sanayisinde aynı görünen iki iş, kanal sayısı veya delik konumu yüzünden çok farklı süre ister. Bu yüzden üreticiye nasıl bağlama kuracağını ve hangi operasyonları gördüğünü sorun. Katalog vaadi yerine teknik diyalog arayın."
        ]
      },
      {
        "heading": "Teknik dosya ve planlama",
        "paragraphs": [
          "İyi bir CNC freze değerlendirmesi için PDF teknik resim çoğu zaman yeterlidir. STEP modeli varsa bağlama ve takım yolu daha hızlı kurulur. Malzeme cinsi, ham ölçü, adet, yüzey veya ısıl işlem notu aynı pakette gitmelidir.",
          "Eksik kritik ölçü, iş emri açılmadan önce geri dönüş üretir; bu gecikme değil, yanlış üretimi önlemedir. Torna ve freze aynı parçada birleşebileceği için rota baştan yazılmalıdır. Işleme taleplerinde bu ayrım özellikle kritiktir.",
          "Numune varsa ölçüm notuyla gönderin. Aşınmış numunede hangi ölçünün orijinal kabul edileceği konuşulmadan kör kopya yapılmamalıdır. Bu disiplin hem sipariş vereni hem atölyeyi korur."
        ]
      },
      {
        "heading": "Kapasiteye dürüst bakış",
        "paragraphs": [
          "Koç Makina park özeti kartvizitteki başlıklarla sınırlı tutulur: 15 inç ve 8 inç CNC torna, CNC işleme, 4 eksen işleme, torna ve freze. Marka, model, rpm ve tüm mm değerler doğrulanmadan sitede şişirilmez.",
          "Siz de üretici seçerken her işi yaparız cümlesini soruyla test edin. Hangi bağlama, hangi kontrol, hangi termin gerçekçiliği? Cevap somutsa CNC freze riski düşer. Cevap sloganla geçiştiriliyorsa çiziminizi başka kapıya da götürün.",
          "Galeri görselleri yöntem anlatır; her fotoğraf sizin parçanız değildir. Teklif aşamasında birebir değerlendirme yapılır."
        ]
      },
      {
        "heading": "Teklif, iletişim ve sonraki adım",
        "paragraphs": [
          "Sağlıklı teklif; malzeme, operasyon sırası, kontrol noktaları ve teslim varsayımlarını içerir. Sabit birim fiyat listesi yoksa sebep bellidir: her işleme kendi süresini üretir. Küçük adet prototip ile seri parti aynı resim üzerinden farklı plan ister.",
          "Telefon, WhatsApp ve e-posta ile çizim paylaşımı hızlı olmalıdır. Sitedeki teklif formuna dosya ekleyerek başlamak konuşmayı kayıttan yürütür. İstanbul içinde üretim, revizyon turlarını kısaltır.",
          "Özetle İstanbul'da CNC freze ararken referans fotoğraf kadar teknik diyaloğu tartın. Çizimi soran ve eksik ölçüyü işaretleyen firma üretim riskini azaltır. İlgili hizmet sayfalarını inceleyip çiziminizi teklif formundan iletebilirsiniz.",
          "İstanbul CNC freze işlerinde yüzey kalitesi ve delik konumu sık kritik olur. Resimde belirtilmeyen bir yüzey işareti, sonradan ekstra paso demektir. Bu yüzden teklif öncesi notlarınızı eksiksiz yazın. İşleme sonrası çapak alma veya yıkama gibi adımlar gerekiyorsa onları da belirtin. Koç Makina, freze taleplerini torna ihtiyacıyla birlikte okur; böylece parçayı iki kez yanlış yere göndermezsiniz.",
          "İşleme merkezinde bağlama aparatları ve pens seçimi, tekrarlanabilirliği belirler. Küçük adette basit bağlama yeterli olabilir; seride fikstür yatırımı konuşulur. Bu ayrımı baştan yapmak, sürpriz maliyeti önler. Çiziminizi paylaştığınızda hangi senaryoda olduğunuzu yazmanız yeterlidir.",
          "Doğru CNC işi, doğru dosya ve doğru diyalogla başlar. İstanbul'da üretim yapan Koç Makina, çiziminizi teknik dilde okur ve yapılabilir planı açık yazar. Belirsiz kalan noktaları varsayımla kapatmayız; sorar, netleştirir, sonra üretiriz. Bu yaklaşım fireyi ve montaj gecikmesini azaltır.",
          "Doğru CNC işi, doğru dosya ve doğru diyalogla başlar. İstanbul'da üretim yapan Koç Makina, çiziminizi teknik dilde okur ve yapılabilir planı açık yazar. Belirsiz kalan noktaları varsayımla kapatmayız; sorar, netleştirir, sonra üretiriz. Bu yaklaşım fireyi ve montaj gecikmesini azaltır."
        ]
      }
    ]
  },
  {
    "slug": "talasli-imalat-istanbul",
    "title": "İstanbul'da Talaşlı İmalat",
    "seoTitle": "Talaşlı İmalat İstanbul | CNC Torna ve İşleme",
    "seoDescription": "İstanbul'da talaşlı imalat planı ve teklif mantığı.",
    "h1": "İstanbul'da Talaşlı İmalat Nedir, Nasıl Planlanır?",
    "excerpt": "Talaşlı imalat planlama rehberi.",
    "image": "/images/cnc-taret-talas.jpg",
    "imageAlt": "CNC taret ve talaş ile metal işleme",
    "publishedAt": "2026-11-11",
    "related": [
      {
        "href": "/hizmetler/talasli-imalat",
        "label": "Talaşlı imalat"
      },
      {
        "href": "/uretim",
        "label": "Üretim süreci"
      },
      {
        "href": "/iletisim#teklif",
        "label": "Teklif formu"
      }
    ],
    "sections": [
      {
        "heading": "Talaşlı Imalat neden önemli",
        "paragraphs": [
          "İstanbul'da talaşlı imalat ihtiyacı çoğu zaman montaj takvimine, numune onayına veya üretim sürekliliğine bağlıdır. Başakşehir İkitelli gibi bir sanayi bölgesinde iş yapmak, lojistik süresini kısaltır ve revizyonları yüz yüze konuşmayı kolaylaştırır. Koç Makina, CNC Mühendislik unvanıyla İkitelli OSB Demirciler Sanayi Sitesi'nde talepleri teknik resme göre değerlendirir.",
          "Seçim yaparken abartılı kapasite cümleleri yerine çizimin doğru okunup okunmadığına bakın. Talaşlı üretim işinde malzeme, tolerans, adet ve operasyon sayısı net değilse teklif de net olmaz. Net olmayan teklif, montajda sürpriz üretir.",
          "İstanbul sanayisinde aynı görünen iki iş, kanal sayısı veya delik konumu yüzünden çok farklı süre ister. Bu yüzden üreticiye nasıl bağlama kuracağını ve hangi operasyonları gördüğünü sorun. Katalog vaadi yerine teknik diyalog arayın."
        ]
      },
      {
        "heading": "Teknik dosya ve planlama",
        "paragraphs": [
          "İyi bir talaşlı imalat değerlendirmesi için PDF teknik resim çoğu zaman yeterlidir. STEP modeli varsa bağlama ve takım yolu daha hızlı kurulur. Malzeme cinsi, ham ölçü, adet, yüzey veya ısıl işlem notu aynı pakette gitmelidir.",
          "Eksik kritik ölçü, iş emri açılmadan önce geri dönüş üretir; bu gecikme değil, yanlış üretimi önlemedir. Torna ve freze aynı parçada birleşebileceği için rota baştan yazılmalıdır. Talaşlı üretim taleplerinde bu ayrım özellikle kritiktir.",
          "Numune varsa ölçüm notuyla gönderin. Aşınmış numunede hangi ölçünün orijinal kabul edileceği konuşulmadan kör kopya yapılmamalıdır. Bu disiplin hem sipariş vereni hem atölyeyi korur."
        ]
      },
      {
        "heading": "Kapasiteye dürüst bakış",
        "paragraphs": [
          "Koç Makina park özeti kartvizitteki başlıklarla sınırlı tutulur: 15 inç ve 8 inç CNC torna, CNC işleme, 4 eksen işleme, torna ve freze. Marka, model, rpm ve tüm mm değerler doğrulanmadan sitede şişirilmez.",
          "Siz de üretici seçerken her işi yaparız cümlesini soruyla test edin. Hangi bağlama, hangi kontrol, hangi termin gerçekçiliği? Cevap somutsa talaşlı imalat riski düşer. Cevap sloganla geçiştiriliyorsa çiziminizi başka kapıya da götürün.",
          "Galeri görselleri yöntem anlatır; her fotoğraf sizin parçanız değildir. Teklif aşamasında birebir değerlendirme yapılır."
        ]
      },
      {
        "heading": "Teklif, iletişim ve sonraki adım",
        "paragraphs": [
          "Sağlıklı teklif; malzeme, operasyon sırası, kontrol noktaları ve teslim varsayımlarını içerir. Sabit birim fiyat listesi yoksa sebep bellidir: her talaşlı üretim kendi süresini üretir. Küçük adet prototip ile seri parti aynı resim üzerinden farklı plan ister.",
          "Telefon, WhatsApp ve e-posta ile çizim paylaşımı hızlı olmalıdır. Sitedeki teklif formuna dosya ekleyerek başlamak konuşmayı kayıttan yürütür. İstanbul içinde üretim, revizyon turlarını kısaltır.",
          "Özetle İstanbul'da talaşlı imalat ararken referans fotoğraf kadar teknik diyaloğu tartın. Çizimi soran ve eksik ölçüyü işaretleyen firma üretim riskini azaltır. İlgili hizmet sayfalarını inceleyip çiziminizi teklif formundan iletebilirsiniz.",
          "Talaşlı imalat İstanbul aramalarında 'en yakın atölye' tek başına yeterli kriter değildir. Yakınlık iyi bir başlangıçtır; ölçü dili ortak değilse yakınlık boşa gider. Çizimi birlikte okuyan, operasyon kırılımını yazan ve kontrol noktalarını söyleyen üretici uzun vadede daha ucuza gelir. Fire ve yeniden işleme, ilk bakışta ucuz teklifi pahalıya çevirir. Bu yüzden süreç şeffaflığını fiyat satırından önce sorun.",
          "Ham madde tedariki müşteride veya atölyede olabilir. Bu sorumluluk teklifte yazılmalıdır. Isıl işlem veya kaplama dışarıda yapılıyorsa rota yine tek plan altında izlenir. Dağınık sorumluluk, dağınık sonuç üretir.",
          "Doğru CNC işi, doğru dosya ve doğru diyalogla başlar. İstanbul'da üretim yapan Koç Makina, çiziminizi teknik dilde okur ve yapılabilir planı açık yazar. Belirsiz kalan noktaları varsayımla kapatmayız; sorar, netleştirir, sonra üretiriz. Bu yaklaşım fireyi ve montaj gecikmesini azaltır.",
          "Doğru CNC işi, doğru dosya ve doğru diyalogla başlar. İstanbul'da üretim yapan Koç Makina, çiziminizi teknik dilde okur ve yapılabilir planı açık yazar. Belirsiz kalan noktaları varsayımla kapatmayız; sorar, netleştirir, sonra üretiriz. Bu yaklaşım fireyi ve montaj gecikmesini azaltır."
        ]
      }
    ]
  },
  {
    "slug": "hassas-parca-uretimi-istanbul",
    "title": "İstanbul'da Hassas Parça Üretimi",
    "seoTitle": "Hassas Parça Üretimi İstanbul | Ölçü ve Tolerans",
    "seoDescription": "Hassas parça üretiminde tolerans ve ölçü kontrolü.",
    "h1": "Hassas Parça Üretimi: Tolerans Odaklı CNC",
    "excerpt": "Kritik ölçüde CNC üretimi.",
    "image": "/images/hassas-parca.jpg",
    "imageAlt": "Hassas işlenmiş metal parça detayı",
    "publishedAt": "2026-11-12",
    "related": [
      {
        "href": "/hizmetler/hassas-parca-uretimi",
        "label": "Hassas parça"
      },
      {
        "href": "/kalite",
        "label": "Kalite"
      },
      {
        "href": "/iletisim#teklif",
        "label": "Teklif formu"
      }
    ],
    "sections": [
      {
        "heading": "Hassas Parça neden önemli",
        "paragraphs": [
          "İstanbul'da hassas parça ihtiyacı çoğu zaman montaj takvimine, numune onayına veya üretim sürekliliğine bağlıdır. Başakşehir İkitelli gibi bir sanayi bölgesinde iş yapmak, lojistik süresini kısaltır ve revizyonları yüz yüze konuşmayı kolaylaştırır. Koç Makina, CNC Mühendislik unvanıyla İkitelli OSB Demirciler Sanayi Sitesi'nde talepleri teknik resme göre değerlendirir.",
          "Seçim yaparken abartılı kapasite cümleleri yerine çizimin doğru okunup okunmadığına bakın. Toleranslı üretim işinde malzeme, tolerans, adet ve operasyon sayısı net değilse teklif de net olmaz. Net olmayan teklif, montajda sürpriz üretir.",
          "İstanbul sanayisinde aynı görünen iki iş, kanal sayısı veya delik konumu yüzünden çok farklı süre ister. Bu yüzden üreticiye nasıl bağlama kuracağını ve hangi operasyonları gördüğünü sorun. Katalog vaadi yerine teknik diyalog arayın."
        ]
      },
      {
        "heading": "Teknik dosya ve planlama",
        "paragraphs": [
          "İyi bir hassas parça değerlendirmesi için PDF teknik resim çoğu zaman yeterlidir. STEP modeli varsa bağlama ve takım yolu daha hızlı kurulur. Malzeme cinsi, ham ölçü, adet, yüzey veya ısıl işlem notu aynı pakette gitmelidir.",
          "Eksik kritik ölçü, iş emri açılmadan önce geri dönüş üretir; bu gecikme değil, yanlış üretimi önlemedir. Torna ve freze aynı parçada birleşebileceği için rota baştan yazılmalıdır. Toleranslı üretim taleplerinde bu ayrım özellikle kritiktir.",
          "Numune varsa ölçüm notuyla gönderin. Aşınmış numunede hangi ölçünün orijinal kabul edileceği konuşulmadan kör kopya yapılmamalıdır. Bu disiplin hem sipariş vereni hem atölyeyi korur."
        ]
      },
      {
        "heading": "Kapasiteye dürüst bakış",
        "paragraphs": [
          "Koç Makina park özeti kartvizitteki başlıklarla sınırlı tutulur: 15 inç ve 8 inç CNC torna, CNC işleme, 4 eksen işleme, torna ve freze. Marka, model, rpm ve tüm mm değerler doğrulanmadan sitede şişirilmez.",
          "Siz de üretici seçerken her işi yaparız cümlesini soruyla test edin. Hangi bağlama, hangi kontrol, hangi termin gerçekçiliği? Cevap somutsa hassas parça riski düşer. Cevap sloganla geçiştiriliyorsa çiziminizi başka kapıya da götürün.",
          "Galeri görselleri yöntem anlatır; her fotoğraf sizin parçanız değildir. Teklif aşamasında birebir değerlendirme yapılır."
        ]
      },
      {
        "heading": "Teklif, iletişim ve sonraki adım",
        "paragraphs": [
          "Sağlıklı teklif; malzeme, operasyon sırası, kontrol noktaları ve teslim varsayımlarını içerir. Sabit birim fiyat listesi yoksa sebep bellidir: her toleranslı üretim kendi süresini üretir. Küçük adet prototip ile seri parti aynı resim üzerinden farklı plan ister.",
          "Telefon, WhatsApp ve e-posta ile çizim paylaşımı hızlı olmalıdır. Sitedeki teklif formuna dosya ekleyerek başlamak konuşmayı kayıttan yürütür. İstanbul içinde üretim, revizyon turlarını kısaltır.",
          "Özetle İstanbul'da hassas parça ararken referans fotoğraf kadar teknik diyaloğu tartın. Çizimi soran ve eksik ölçüyü işaretleyen firma üretim riskini azaltır. İlgili hizmet sayfalarını inceleyip çiziminizi teklif formundan iletebilirsiniz.",
          "Hassas parça üretiminde ortam, takım ömrü ve ölçüm periyodu sessiz maliyet kalemleridir. Bunlar teklifte her zaman ayrı satır olmasa da süreye yansır. Müşteri olarak kritik ölçüleri vurgulamak, üreticinin doğru yerde zaman harcamasını sağlar. İstanbul içi numune onayı, seri öncesi yanlışları yakalar. Koç Makina bu sırayı resme bağlı şekilde uygular; abartılı hassasiyet iddiası yerine ölçülebilir adımlar konuşur.",
          "Tolerans sınıfı sıkılaştıkça fire ihtimali artar. Bu riski gizlemek yerine konuşmak, doğru adet ve termin planı kurdurur. Gizli risk, gizli gecikme demektir.",
          "Doğru CNC işi, doğru dosya ve doğru diyalogla başlar. İstanbul'da üretim yapan Koç Makina, çiziminizi teknik dilde okur ve yapılabilir planı açık yazar. Belirsiz kalan noktaları varsayımla kapatmayız; sorar, netleştirir, sonra üretiriz. Bu yaklaşım fireyi ve montaj gecikmesini azaltır.",
          "Doğru CNC işi, doğru dosya ve doğru diyalogla başlar. İstanbul'da üretim yapan Koç Makina, çiziminizi teknik dilde okur ve yapılabilir planı açık yazar. Belirsiz kalan noktaları varsayımla kapatmayız; sorar, netleştirir, sonra üretiriz. Bu yaklaşım fireyi ve montaj gecikmesini azaltır."
        ]
      }
    ]
  },
  {
    "slug": "cnc-prototip-uretim",
    "title": "CNC Prototip Üretim",
    "seoTitle": "CNC Prototip Üretim İstanbul | Küçük Adet Doğrulama",
    "seoDescription": "CNC prototip ile geometri doğrulama.",
    "h1": "CNC Prototip Üretim ile Geometriyi Doğrulamak",
    "excerpt": "Prototip planlama rehberi.",
    "image": "/images/karmasik-parca.jpg",
    "imageAlt": "Karmaşık geometrili işlenmiş metal parça",
    "publishedAt": "2026-11-12",
    "related": [
      {
        "href": "/hizmetler/prototip-uretim",
        "label": "Prototip üretim"
      },
      {
        "href": "/hizmetler/seri-uretim",
        "label": "Seri üretim"
      },
      {
        "href": "/iletisim#teklif",
        "label": "Teklif formu"
      }
    ],
    "sections": [
      {
        "heading": "Cnc Prototip neden önemli",
        "paragraphs": [
          "İstanbul'da CNC prototip ihtiyacı çoğu zaman montaj takvimine, numune onayına veya üretim sürekliliğine bağlıdır. Başakşehir İkitelli gibi bir sanayi bölgesinde iş yapmak, lojistik süresini kısaltır ve revizyonları yüz yüze konuşmayı kolaylaştırır. Koç Makina, CNC Mühendislik unvanıyla İkitelli OSB Demirciler Sanayi Sitesi'nde talepleri teknik resme göre değerlendirir.",
          "Seçim yaparken abartılı kapasite cümleleri yerine çizimin doğru okunup okunmadığına bakın. Prototip işinde malzeme, tolerans, adet ve operasyon sayısı net değilse teklif de net olmaz. Net olmayan teklif, montajda sürpriz üretir.",
          "İstanbul sanayisinde aynı görünen iki iş, kanal sayısı veya delik konumu yüzünden çok farklı süre ister. Bu yüzden üreticiye nasıl bağlama kuracağını ve hangi operasyonları gördüğünü sorun. Katalog vaadi yerine teknik diyalog arayın."
        ]
      },
      {
        "heading": "Teknik dosya ve planlama",
        "paragraphs": [
          "İyi bir CNC prototip değerlendirmesi için PDF teknik resim çoğu zaman yeterlidir. STEP modeli varsa bağlama ve takım yolu daha hızlı kurulur. Malzeme cinsi, ham ölçü, adet, yüzey veya ısıl işlem notu aynı pakette gitmelidir.",
          "Eksik kritik ölçü, iş emri açılmadan önce geri dönüş üretir; bu gecikme değil, yanlış üretimi önlemedir. Torna ve freze aynı parçada birleşebileceği için rota baştan yazılmalıdır. Prototip taleplerinde bu ayrım özellikle kritiktir.",
          "Numune varsa ölçüm notuyla gönderin. Aşınmış numunede hangi ölçünün orijinal kabul edileceği konuşulmadan kör kopya yapılmamalıdır. Bu disiplin hem sipariş vereni hem atölyeyi korur."
        ]
      },
      {
        "heading": "Kapasiteye dürüst bakış",
        "paragraphs": [
          "Koç Makina park özeti kartvizitteki başlıklarla sınırlı tutulur: 15 inç ve 8 inç CNC torna, CNC işleme, 4 eksen işleme, torna ve freze. Marka, model, rpm ve tüm mm değerler doğrulanmadan sitede şişirilmez.",
          "Siz de üretici seçerken her işi yaparız cümlesini soruyla test edin. Hangi bağlama, hangi kontrol, hangi termin gerçekçiliği? Cevap somutsa CNC prototip riski düşer. Cevap sloganla geçiştiriliyorsa çiziminizi başka kapıya da götürün.",
          "Galeri görselleri yöntem anlatır; her fotoğraf sizin parçanız değildir. Teklif aşamasında birebir değerlendirme yapılır."
        ]
      },
      {
        "heading": "Teklif, iletişim ve sonraki adım",
        "paragraphs": [
          "Sağlıklı teklif; malzeme, operasyon sırası, kontrol noktaları ve teslim varsayımlarını içerir. Sabit birim fiyat listesi yoksa sebep bellidir: her prototip kendi süresini üretir. Küçük adet prototip ile seri parti aynı resim üzerinden farklı plan ister.",
          "Telefon, WhatsApp ve e-posta ile çizim paylaşımı hızlı olmalıdır. Sitedeki teklif formuna dosya ekleyerek başlamak konuşmayı kayıttan yürütür. İstanbul içinde üretim, revizyon turlarını kısaltır.",
          "Özetle İstanbul'da CNC prototip ararken referans fotoğraf kadar teknik diyaloğu tartın. Çizimi soran ve eksik ölçüyü işaretleyen firma üretim riskini azaltır. İlgili hizmet sayfalarını inceleyip çiziminizi teklif formundan iletebilirsiniz.",
          "Prototip aşamasında malzeme seçimi de tartışılmalıdır. Seride kullanılacak malzemeden farklı bir stokla yapılan deneme, yanıltıcı oturma sonucu verebilir. Mümkünse nihai malzemeye yakın çalışın. Ayrıca montajda eşleşen parçaları birlikte düşünün; tek başına doğru görünen parça sette uyumsuz kalabilir. İstanbul'da hızlı prototip isteyen ekipler için net dosya paketi, sürenin en büyük kısaltıcısıdır.",
          "Prototip sonrası değişiklikleri revizyon numarasıyla kilitleyin. Kilitsiz resimle seriye geçmek, her partide tartışma üretir. Bu basit kural, birçok firmanın zamanını kurtarır.",
          "Doğru CNC işi, doğru dosya ve doğru diyalogla başlar. İstanbul'da üretim yapan Koç Makina, çiziminizi teknik dilde okur ve yapılabilir planı açık yazar. Belirsiz kalan noktaları varsayımla kapatmayız; sorar, netleştirir, sonra üretiriz. Bu yaklaşım fireyi ve montaj gecikmesini azaltır.",
          "Doğru CNC işi, doğru dosya ve doğru diyalogla başlar. İstanbul'da üretim yapan Koç Makina, çiziminizi teknik dilde okur ve yapılabilir planı açık yazar. Belirsiz kalan noktaları varsayımla kapatmayız; sorar, netleştirir, sonra üretiriz. Bu yaklaşım fireyi ve montaj gecikmesini azaltır.",
          "Doğru CNC işi, doğru dosya ve doğru diyalogla başlar. İstanbul'da üretim yapan Koç Makina, çiziminizi teknik dilde okur ve yapılabilir planı açık yazar. Belirsiz kalan noktaları varsayımla kapatmayız; sorar, netleştirir, sonra üretiriz. Bu yaklaşım fireyi ve montaj gecikmesini azaltır."
        ]
      }
    ]
  },
  {
    "slug": "cnc-seri-uretim-istanbul",
    "title": "İstanbul'da CNC Seri Üretim",
    "seoTitle": "CNC Seri Üretim İstanbul | Tekrarlanabilir Parti",
    "seoDescription": "CNC seri üretimde tekrarlanabilirlik.",
    "h1": "CNC Seri Üretimde Tekrarlanabilirlik",
    "excerpt": "Parti üretimi disiplini.",
    "image": "/images/otomasyon-hatti.jpg",
    "imageAlt": "Üretim hattında metal parçalar",
    "publishedAt": "2026-11-13",
    "related": [
      {
        "href": "/hizmetler/seri-uretim",
        "label": "Seri üretim"
      },
      {
        "href": "/iletisim#teklif",
        "label": "Teklif formu"
      }
    ],
    "sections": [
      {
        "heading": "Cnc Seri Üretim neden önemli",
        "paragraphs": [
          "İstanbul'da CNC seri üretim ihtiyacı çoğu zaman montaj takvimine, numune onayına veya üretim sürekliliğine bağlıdır. Başakşehir İkitelli gibi bir sanayi bölgesinde iş yapmak, lojistik süresini kısaltır ve revizyonları yüz yüze konuşmayı kolaylaştırır. Koç Makina, CNC Mühendislik unvanıyla İkitelli OSB Demirciler Sanayi Sitesi'nde talepleri teknik resme göre değerlendirir.",
          "Seçim yaparken abartılı kapasite cümleleri yerine çizimin doğru okunup okunmadığına bakın. Seri parti işinde malzeme, tolerans, adet ve operasyon sayısı net değilse teklif de net olmaz. Net olmayan teklif, montajda sürpriz üretir.",
          "İstanbul sanayisinde aynı görünen iki iş, kanal sayısı veya delik konumu yüzünden çok farklı süre ister. Bu yüzden üreticiye nasıl bağlama kuracağını ve hangi operasyonları gördüğünü sorun. Katalog vaadi yerine teknik diyalog arayın."
        ]
      },
      {
        "heading": "Teknik dosya ve planlama",
        "paragraphs": [
          "İyi bir CNC seri üretim değerlendirmesi için PDF teknik resim çoğu zaman yeterlidir. STEP modeli varsa bağlama ve takım yolu daha hızlı kurulur. Malzeme cinsi, ham ölçü, adet, yüzey veya ısıl işlem notu aynı pakette gitmelidir.",
          "Eksik kritik ölçü, iş emri açılmadan önce geri dönüş üretir; bu gecikme değil, yanlış üretimi önlemedir. Torna ve freze aynı parçada birleşebileceği için rota baştan yazılmalıdır. Seri parti taleplerinde bu ayrım özellikle kritiktir.",
          "Numune varsa ölçüm notuyla gönderin. Aşınmış numunede hangi ölçünün orijinal kabul edileceği konuşulmadan kör kopya yapılmamalıdır. Bu disiplin hem sipariş vereni hem atölyeyi korur."
        ]
      },
      {
        "heading": "Kapasiteye dürüst bakış",
        "paragraphs": [
          "Koç Makina park özeti kartvizitteki başlıklarla sınırlı tutulur: 15 inç ve 8 inç CNC torna, CNC işleme, 4 eksen işleme, torna ve freze. Marka, model, rpm ve tüm mm değerler doğrulanmadan sitede şişirilmez.",
          "Siz de üretici seçerken her işi yaparız cümlesini soruyla test edin. Hangi bağlama, hangi kontrol, hangi termin gerçekçiliği? Cevap somutsa CNC seri üretim riski düşer. Cevap sloganla geçiştiriliyorsa çiziminizi başka kapıya da götürün.",
          "Galeri görselleri yöntem anlatır; her fotoğraf sizin parçanız değildir. Teklif aşamasında birebir değerlendirme yapılır."
        ]
      },
      {
        "heading": "Teklif, iletişim ve sonraki adım",
        "paragraphs": [
          "Sağlıklı teklif; malzeme, operasyon sırası, kontrol noktaları ve teslim varsayımlarını içerir. Sabit birim fiyat listesi yoksa sebep bellidir: her seri parti kendi süresini üretir. Küçük adet prototip ile seri parti aynı resim üzerinden farklı plan ister.",
          "Telefon, WhatsApp ve e-posta ile çizim paylaşımı hızlı olmalıdır. Sitedeki teklif formuna dosya ekleyerek başlamak konuşmayı kayıttan yürütür. İstanbul içinde üretim, revizyon turlarını kısaltır.",
          "Özetle İstanbul'da CNC seri üretim ararken referans fotoğraf kadar teknik diyaloğu tartın. Çizimi soran ve eksik ölçüyü işaretleyen firma üretim riskini azaltır. İlgili hizmet sayfalarını inceleyip çiziminizi teklif formundan iletebilirsiniz.",
          "Seri üretimde sevkiyat lotu ve ambalaj standardı yazılmazsa parti içi hasar veya sayım farkı çıkabilir. Özellikle hassas yüzeyli parçalarda ayırıcı ve koruma notu ekleyin. Stok tutma beklentiniz varsa bunu baştan söyleyin; atölye planı buna göre kurulur. İstanbul lojistiği sık sevkiyata uygundur ama her sık sevkiyat maliyeti artırır. Lot büyüklüğünü üretim ritmiyle birlikte optimize etmek gerekir.",
          "Program ve bağlama standardize edildikçe birim süre düşer. İlk partiler öğrenme süresini taşır; sonraki partiler daha öngörülebilir olur. Bu eğriyi bilerek planlayan müşteri daha gerçekçi bütçe kurar.",
          "Doğru CNC işi, doğru dosya ve doğru diyalogla başlar. İstanbul'da üretim yapan Koç Makina, çiziminizi teknik dilde okur ve yapılabilir planı açık yazar. Belirsiz kalan noktaları varsayımla kapatmayız; sorar, netleştirir, sonra üretiriz. Bu yaklaşım fireyi ve montaj gecikmesini azaltır.",
          "Doğru CNC işi, doğru dosya ve doğru diyalogla başlar. İstanbul'da üretim yapan Koç Makina, çiziminizi teknik dilde okur ve yapılabilir planı açık yazar. Belirsiz kalan noktaları varsayımla kapatmayız; sorar, netleştirir, sonra üretiriz. Bu yaklaşım fireyi ve montaj gecikmesini azaltır."
        ]
      }
    ]
  },
  {
    "slug": "cnc-yedek-parca",
    "title": "CNC Yedek Parça İmalatı",
    "seoTitle": "CNC Yedek Parça İmalatı İstanbul | Çizim veya Numune",
    "seoDescription": "CNC yedek parça: çizim veya numuneden üretim.",
    "h1": "CNC Yedek Parça: Çizim veya Numuneden Üretim",
    "excerpt": "Yedek parça imalatı rehberi.",
    "image": "/images/islenmis-govde.jpg",
    "imageAlt": "İşlenmiş metal gövde parçası",
    "publishedAt": "2026-11-13",
    "related": [
      {
        "href": "/hizmetler/ozel-parca-imalati",
        "label": "Özel parça"
      },
      {
        "href": "/galeri",
        "label": "Galeri"
      },
      {
        "href": "/iletisim#teklif",
        "label": "Teklif formu"
      }
    ],
    "sections": [
      {
        "heading": "Cnc Yedek Parça neden önemli",
        "paragraphs": [
          "İstanbul'da CNC yedek parça ihtiyacı çoğu zaman montaj takvimine, numune onayına veya üretim sürekliliğine bağlıdır. Başakşehir İkitelli gibi bir sanayi bölgesinde iş yapmak, lojistik süresini kısaltır ve revizyonları yüz yüze konuşmayı kolaylaştırır. Koç Makina, CNC Mühendislik unvanıyla İkitelli OSB Demirciler Sanayi Sitesi'nde talepleri teknik resme göre değerlendirir.",
          "Seçim yaparken abartılı kapasite cümleleri yerine çizimin doğru okunup okunmadığına bakın. Yedek parça işinde malzeme, tolerans, adet ve operasyon sayısı net değilse teklif de net olmaz. Net olmayan teklif, montajda sürpriz üretir.",
          "İstanbul sanayisinde aynı görünen iki iş, kanal sayısı veya delik konumu yüzünden çok farklı süre ister. Bu yüzden üreticiye nasıl bağlama kuracağını ve hangi operasyonları gördüğünü sorun. Katalog vaadi yerine teknik diyalog arayın."
        ]
      },
      {
        "heading": "Teknik dosya ve planlama",
        "paragraphs": [
          "İyi bir CNC yedek parça değerlendirmesi için PDF teknik resim çoğu zaman yeterlidir. STEP modeli varsa bağlama ve takım yolu daha hızlı kurulur. Malzeme cinsi, ham ölçü, adet, yüzey veya ısıl işlem notu aynı pakette gitmelidir.",
          "Eksik kritik ölçü, iş emri açılmadan önce geri dönüş üretir; bu gecikme değil, yanlış üretimi önlemedir. Torna ve freze aynı parçada birleşebileceği için rota baştan yazılmalıdır. Yedek parça taleplerinde bu ayrım özellikle kritiktir.",
          "Numune varsa ölçüm notuyla gönderin. Aşınmış numunede hangi ölçünün orijinal kabul edileceği konuşulmadan kör kopya yapılmamalıdır. Bu disiplin hem sipariş vereni hem atölyeyi korur."
        ]
      },
      {
        "heading": "Kapasiteye dürüst bakış",
        "paragraphs": [
          "Koç Makina park özeti kartvizitteki başlıklarla sınırlı tutulur: 15 inç ve 8 inç CNC torna, CNC işleme, 4 eksen işleme, torna ve freze. Marka, model, rpm ve tüm mm değerler doğrulanmadan sitede şişirilmez.",
          "Siz de üretici seçerken her işi yaparız cümlesini soruyla test edin. Hangi bağlama, hangi kontrol, hangi termin gerçekçiliği? Cevap somutsa CNC yedek parça riski düşer. Cevap sloganla geçiştiriliyorsa çiziminizi başka kapıya da götürün.",
          "Galeri görselleri yöntem anlatır; her fotoğraf sizin parçanız değildir. Teklif aşamasında birebir değerlendirme yapılır."
        ]
      },
      {
        "heading": "Teklif, iletişim ve sonraki adım",
        "paragraphs": [
          "Sağlıklı teklif; malzeme, operasyon sırası, kontrol noktaları ve teslim varsayımlarını içerir. Sabit birim fiyat listesi yoksa sebep bellidir: her yedek parça kendi süresini üretir. Küçük adet prototip ile seri parti aynı resim üzerinden farklı plan ister.",
          "Telefon, WhatsApp ve e-posta ile çizim paylaşımı hızlı olmalıdır. Sitedeki teklif formuna dosya ekleyerek başlamak konuşmayı kayıttan yürütür. İstanbul içinde üretim, revizyon turlarını kısaltır.",
          "Özetle İstanbul'da CNC yedek parça ararken referans fotoğraf kadar teknik diyaloğu tartın. Çizimi soran ve eksik ölçüyü işaretleyen firma üretim riskini azaltır. İlgili hizmet sayfalarını inceleyip çiziminizi teklif formundan iletebilirsiniz.",
          "Yedek parça işlerinde güvenlik payı önemlidir. Kritik bağlantı elemanlarında malzeme speki bilinmiyorsa varsayımla sert çelik seçmek her zaman doğru değildir. Bilinen uygulamayı, çalışma sıcaklığını veya karşı parçayı paylaşmak seçimi kolaylaştırır. Acil işlerde bile bu sorular atlanmamalıdır. Koç Makina, netleşmeyen noktayı işaretleyerek ilerler; sessiz varsayımla risk almaz.",
          "Makina duruşunu kısaltmak için paralel iletişim faydalıdır: çizim veya numune gelir gelmez ön değerlendirme, malzeme temini ve program hazırlığı aynı gün içinde konuşulabilir. Yine de fizik kuralları değişmez; takım yoksa iş başlamaz. Erken haber vermek, erken çözümdür.",
          "Doğru CNC işi, doğru dosya ve doğru diyalogla başlar. İstanbul'da üretim yapan Koç Makina, çiziminizi teknik dilde okur ve yapılabilir planı açık yazar. Belirsiz kalan noktaları varsayımla kapatmayız; sorar, netleştirir, sonra üretiriz. Bu yaklaşım fireyi ve montaj gecikmesini azaltır.",
          "Doğru CNC işi, doğru dosya ve doğru diyalogla başlar. İstanbul'da üretim yapan Koç Makina, çiziminizi teknik dilde okur ve yapılabilir planı açık yazar. Belirsiz kalan noktaları varsayımla kapatmayız; sorar, netleştirir, sonra üretiriz. Bu yaklaşım fireyi ve montaj gecikmesini azaltır."
        ]
      }
    ]
  },
  {
    "slug": "cnc-teklif-nasil-alinir",
    "title": "CNC Teklif Nasıl Alınır",
    "seoTitle": "CNC Fiyat Teklifi Nasıl Alınır? Teknik Resim Rehberi",
    "seoDescription": "CNC teklifi için gerekli dosyalar ve süreç.",
    "h1": "CNC Teklif Süreci: Teknik Resimden Fiyata",
    "excerpt": "Teklif dosya rehberi.",
    "image": "/images/torna-detay.jpg",
    "imageAlt": "CNC torna detayında kesici ve iş parçası",
    "publishedAt": "2026-11-14",
    "related": [
      {
        "href": "/iletisim#teklif",
        "label": "Teklif formu"
      },
      {
        "href": "/hizmetler",
        "label": "Hizmetler"
      },
      {
        "href": "/istanbul-cnc-torna",
        "label": "İstanbul CNC Torna"
      }
    ],
    "sections": [
      {
        "heading": "Cnc Teklif neden önemli",
        "paragraphs": [
          "İstanbul'da CNC teklif ihtiyacı çoğu zaman montaj takvimine, numune onayına veya üretim sürekliliğine bağlıdır. Başakşehir İkitelli gibi bir sanayi bölgesinde iş yapmak, lojistik süresini kısaltır ve revizyonları yüz yüze konuşmayı kolaylaştırır. Koç Makina, CNC Mühendislik unvanıyla İkitelli OSB Demirciler Sanayi Sitesi'nde talepleri teknik resme göre değerlendirir.",
          "Seçim yaparken abartılı kapasite cümleleri yerine çizimin doğru okunup okunmadığına bakın. Fiyat teklifi işinde malzeme, tolerans, adet ve operasyon sayısı net değilse teklif de net olmaz. Net olmayan teklif, montajda sürpriz üretir.",
          "İstanbul sanayisinde aynı görünen iki iş, kanal sayısı veya delik konumu yüzünden çok farklı süre ister. Bu yüzden üreticiye nasıl bağlama kuracağını ve hangi operasyonları gördüğünü sorun. Katalog vaadi yerine teknik diyalog arayın."
        ]
      },
      {
        "heading": "Teknik dosya ve planlama",
        "paragraphs": [
          "İyi bir CNC teklif değerlendirmesi için PDF teknik resim çoğu zaman yeterlidir. STEP modeli varsa bağlama ve takım yolu daha hızlı kurulur. Malzeme cinsi, ham ölçü, adet, yüzey veya ısıl işlem notu aynı pakette gitmelidir.",
          "Eksik kritik ölçü, iş emri açılmadan önce geri dönüş üretir; bu gecikme değil, yanlış üretimi önlemedir. Torna ve freze aynı parçada birleşebileceği için rota baştan yazılmalıdır. Fiyat teklifi taleplerinde bu ayrım özellikle kritiktir.",
          "Numune varsa ölçüm notuyla gönderin. Aşınmış numunede hangi ölçünün orijinal kabul edileceği konuşulmadan kör kopya yapılmamalıdır. Bu disiplin hem sipariş vereni hem atölyeyi korur."
        ]
      },
      {
        "heading": "Kapasiteye dürüst bakış",
        "paragraphs": [
          "Koç Makina park özeti kartvizitteki başlıklarla sınırlı tutulur: 15 inç ve 8 inç CNC torna, CNC işleme, 4 eksen işleme, torna ve freze. Marka, model, rpm ve tüm mm değerler doğrulanmadan sitede şişirilmez.",
          "Siz de üretici seçerken her işi yaparız cümlesini soruyla test edin. Hangi bağlama, hangi kontrol, hangi termin gerçekçiliği? Cevap somutsa CNC teklif riski düşer. Cevap sloganla geçiştiriliyorsa çiziminizi başka kapıya da götürün.",
          "Galeri görselleri yöntem anlatır; her fotoğraf sizin parçanız değildir. Teklif aşamasında birebir değerlendirme yapılır."
        ]
      },
      {
        "heading": "Teklif, iletişim ve sonraki adım",
        "paragraphs": [
          "Sağlıklı teklif; malzeme, operasyon sırası, kontrol noktaları ve teslim varsayımlarını içerir. Sabit birim fiyat listesi yoksa sebep bellidir: her fiyat teklifi kendi süresini üretir. Küçük adet prototip ile seri parti aynı resim üzerinden farklı plan ister.",
          "Telefon, WhatsApp ve e-posta ile çizim paylaşımı hızlı olmalıdır. Sitedeki teklif formuna dosya ekleyerek başlamak konuşmayı kayıttan yürütür. İstanbul içinde üretim, revizyon turlarını kısaltır.",
          "Özetle İstanbul'da CNC teklif ararken referans fotoğraf kadar teknik diyaloğu tartın. Çizimi soran ve eksik ölçüyü işaretleyen firma üretim riskini azaltır. İlgili hizmet sayfalarını inceleyip çiziminizi teklif formundan iletebilirsiniz.",
          "Teklif aldıktan sonra varsayımları satır satır okuyun. Malzeme kimde, ısıl işlem dahil mi, ambalaj nasıl, revizyon olursa süreç ne? Bu sorular netleşmeden sipariş açmak, sonradan tartışma üretir. İstanbul içi işlerde teslim adresi ve mesai saatleri de yazılmalıdır. Formu doldururken dosya adlarını anlamlı tutmak, karşılıklı arşivi kolaylaştırır. İyi bir teklif süreci, iyi bir üretim sürecinin ilk adımıdır.",
          "Birden fazla firmadan teklif alırken aynı dosya paketini gönderin. Aksi halde kıyaslama elma-armut olur. Aynı varsayım seti, adil karşılaştırma demektir.",
          "Doğru CNC işi, doğru dosya ve doğru diyalogla başlar. İstanbul'da üretim yapan Koç Makina, çiziminizi teknik dilde okur ve yapılabilir planı açık yazar. Belirsiz kalan noktaları varsayımla kapatmayız; sorar, netleştirir, sonra üretiriz. Bu yaklaşım fireyi ve montaj gecikmesini azaltır.",
          "Doğru CNC işi, doğru dosya ve doğru diyalogla başlar. İstanbul'da üretim yapan Koç Makina, çiziminizi teknik dilde okur ve yapılabilir planı açık yazar. Belirsiz kalan noktaları varsayımla kapatmayız; sorar, netleştirir, sonra üretiriz. Bu yaklaşım fireyi ve montaj gecikmesini azaltır."
        ]
      }
    ]
  },
  {
    "slug": "web-tasarimi-bcy-dijital",
    "title": "BCY Dijital ile Yeni Kurumsal Web Sitesi",
    "seoTitle": "Koç Makina Web Tasarımı | BCY Dijital",
    "seoDescription": "Koç Makina kurumsal web sitesi yenilemesi: modern tasarım, mobil uyumluluk ve SEO. Proje BCY Dijital tarafından gerçekleştirildi.",
    "h1": "Koç Makina'nın Dijital Dönüşümü: BCY Dijital ile Yeni Kurumsal Web Sitesi",
    "excerpt": "Kurumsal web sitesi yenilemesi; modern arayüz, mobil uyumluluk ve SEO altyapısı.",
    "image": "/images/metal-parcalar.jpg",
    "imageAlt": "Üretilmiş metal parçalar düzeni",
    "publishedAt": "2026-11-14",
    "related": [
      {
        "href": "/",
        "label": "Ana sayfa"
      },
      {
        "href": "/hizmetler",
        "label": "Hizmetler"
      },
      {
        "href": "/iletisim#teklif",
        "label": "Teklif formu"
      }
    ],
    "sections": [
      {
        "paragraphs": [
          "İstanbul'da CNC torna, CNC işleme ve hassas talaşlı imalat alanlarında faaliyet gösteren Koç Makina'nın kurumsal web sitesi, işletmenin üretim kabiliyetlerini dijital ortamda daha etkili tanıtmak amacıyla yenilendi.",
          "Proje kapsamında, ziyaretçilerin aradıkları hizmetlere kolayca ulaşabilmesi, mobil cihazlarda sorunsuz bir deneyim yaşaması ve teknik çizimleriyle hızlıca teklif talebinde bulunabilmesi önceliklendirildi.",
          "[BCY Dijital](https://bariscanyonel.com) tarafından gerçekleştirilen web tasarım ve geliştirme çalışmasında modern arayüz, kullanıcı deneyimi, mobil uyumluluk ve arama motoru optimizasyonuna uygun teknik altyapı bir arada ele alındı."
        ]
      },
      {
        "heading": "Yeni Web Sitesinde Neler Değişti?",
        "paragraphs": [
          "Modern kurumsal tasarım: Koç Makina'nın endüstriyel kimliğini yansıtan sade ve profesyonel bir arayüz oluşturuldu.",
          "Mobil uyumluluk: Masaüstü, tablet ve telefon ekranlarında kolay kullanım hedeflendi.",
          "SEO altyapısı: Sayfa başlıkları, URL yapısı ve arama motorlarının içeriği anlamasına yardımcı olan teknik bileşenler düzenlendi.",
          "Hizmet sayfaları: CNC torna, talaşlı imalat, prototip ve hassas parça üretimi ayrı bölümlerde sunuldu.",
          "Teklif ve iletişim: Ziyaretçilerin işletmeye ulaşmasını kolaylaştıran iletişim kanalları öne çıkarıldı."
        ]
      },
      {
        "heading": "BCY Dijital ile Kurumsal Web Tasarım",
        "paragraphs": [
          "Sanayi sektöründe bir web sitesinin yalnızca estetik görünmesi yeterli değildir. Teknik hizmetlerin anlaşılır biçimde sunulması, firmanın güvenilir bir dijital kimliğe sahip olması ve ziyaretçinin doğru iletişim kanalına kolayca ulaşması gerekir.",
          "Koç Makina'nın web sitesi yenileme sürecinde bu ihtiyaçlar dikkate alınarak işletmenin kurumsal yapısına uygun bir dijital deneyim tasarlandı.",
          "Projenin web tasarım ve geliştirme çalışmaları, kurumsal web tasarım hizmetleri sunan [BCY Dijital](https://bariscanyonel.com) tarafından gerçekleştirildi."
        ]
      }
    ]
  }
];

export function getArticle(slug: string) {
  return articles.find((article) => article.slug === slug);
}

export function getArticleSlugs() {
  return articles.map((article) => article.slug);
}
