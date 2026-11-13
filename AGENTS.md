<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# KOC Makina CNC

## Çalıştırma

- `npm run dev` — yerel geliştirme
- `npm run build` — production derlemesi
- `npm run lint` — ESLint
- `npm start` — production sunucusu

## Ortam

- `NEXT_PUBLIC_SITE_URL` canonical, Open Graph ve sitemap adresidir. Örnek: `.env.example`
- Cloudinary bilgileri `.env.local` içindedir (git'e girmez). `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME` doluysa `next/image`, `lib/cloudinary-loader.ts` ile görselleri Cloudinary'den çeker; boşsa `public/images` kullanılır. `/images/<ad>.jpg` yolu `koc-makina/<ad>` public ID'sine eşlenir. Yeni yerel görseller `npm run cloudinary:upload` ile yüklenir. `CLOUDINARY_API_SECRET` yalnızca sunucuda kullanılır; `NEXT_PUBLIC_` ile açılmaz.
- Netlify'da `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME` ve `NEXT_PUBLIC_CLOUDINARY_FOLDER` build ortamına girilmelidir; admin paneli yüklemesi için `CLOUDINARY_API_KEY` ve `CLOUDINARY_API_SECRET` de eklenir.
- Veritabanı notu: `u2456160_lo2k1` WordPress DB'sidir (`yw4p_` tablolarına dokunma). Site Next.js tarafında MySQL/PHP kullanmaz.
- Galeri `lib/media.ts` → `getGalleryItems()` Cloudinary context metadata okur (`use cache`, `cacheTag("media-gallery")`). Yoksa `data/gallery.ts` yedektir.
- `hosting/koc-api/` eski PHP medya API arşividir; Next.js çağırmaz. Ayrıntı: `hosting/README.md`.
- Admin paneli: `/admin` (giriş `/admin/giris`), sidebar: Genel bakış / Galeri / Hizmetlerimiz / Makine parkuru / İçerik. Galeri CRUD + hizmet kartları + makine parkuru + site metni Cloudinary raw JSON üzerinden (`_admin/services.json`, `_admin/machines.json`, `_admin/site-content.json`). Gerekli env: `ADMIN_PASSWORD`, `ADMIN_SESSION_SECRET`, `CLOUDINARY_API_KEY`, `CLOUDINARY_API_SECRET`, cloud name. Oturum `proxy.ts` ile korunur. Mutasyon sonrası `revalidateTag("media-gallery"|"site-content"|"services-content"|"machines-content", "max")`. Hizmet detay paragrafları/SSS `data/services.ts` yedeğindedir; admin yalnızca kart/SEO/giriş alanlarını override eder.
- Makaleler: `/makaleler` + `/makaleler/[slug]`, içerik `data/articles.ts`. Sitemap ve Kurumsal menüde yer alır. Doğrulanmamış kapasite/yıl/adet uydurma.
- Telefon, e-posta, adres, WhatsApp ve sosyal hesaplar yalnızca `data/company.ts` içinden girilir. Boş bırakılan alan sitede yayınlanmaz.

## Deploy

Netlify, Next.js runtime ile derler. `netlify.toml` içindeki komut `next build`, yayın dizini `.next`.

## Dokunma

- `data/company.ts` içine doğrulanmamış telefon, adres veya sertifika yazma.
- `data/machines.ts` kapasite alanlarına tahmin değer koyma.
- `app/api/teklif/route.ts` talebi Resend ile `QUOTE_TO_EMAIL` adresine iletmeden `200` dönmesin. `RESEND_API_KEY`, `QUOTE_FROM_EMAIL` veya `QUOTE_TO_EMAIL` eksikse `501` döner. Vercel istek gövdesi ~4,5 MB ile sınırlı; ek dosyalar toplam 4 MB.
- Admin şifresini veya Cloudinary secret değerlerini koda yazma; yalnızca env.

