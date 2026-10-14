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
- Telefon, e-posta, adres, WhatsApp ve sosyal hesaplar yalnızca `data/company.ts` içinden girilir. Boş bırakılan alan sitede yayınlanmaz.

## Deploy

Netlify, Next.js runtime ile derler. `netlify.toml` içindeki komut `next build`, yayın dizini `.next`.

## Dokunma

- `data/company.ts` içine doğrulanmamış telefon, adres veya sertifika yazma.
- `data/machines.ts` kapasite alanlarına tahmin değer koyma.
- `app/api/teklif/route.ts` gerçek depolama bağlanmadan `200` dönmesin.

