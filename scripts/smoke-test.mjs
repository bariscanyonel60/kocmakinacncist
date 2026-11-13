#!/usr/bin/env node
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const BASE = process.env.BASE_URL || "http://localhost:3000";

function loadEnv() {
  const raw = readFileSync(resolve(process.cwd(), ".env.local"), "utf8");
  const env = {};
  for (const line of raw.split("\n")) {
    const m = line.match(/^([A-Z0-9_]+)=(.*)$/);
    if (!m) continue;
    env[m[1]] = m[2].trim();
  }
  return env;
}

async function status(path, init) {
  const res = await fetch(`${BASE}${path}`, { redirect: "manual", ...init });
  const loc = res.headers.get("location") || "";
  return { status: res.status, loc, ok: res.ok, res };
}

async function main() {
  const env = loadEnv();
  const report = [];
  const fail = [];

  const routes = [
    "/",
    "/kurumsal",
    "/kalite",
    "/istanbul-cnc-torna",
    "/makaleler",
    "/makaleler/web-tasarimi-bcy-dijital",
    "/makaleler/istanbulda-cnc-torna-secimi",
    "/hizmetler",
    "/hizmetler/cnc-torna",
    "/hizmetler/cnc-isleme",
    "/hizmetler/talasli-imalat",
    "/hizmetler/hassas-parca-uretimi",
    "/hizmetler/prototip-uretim",
    "/hizmetler/seri-uretim",
    "/hizmetler/ozel-parca-imalati",
    "/hizmetler/teknik-uretim-cozumleri",
    "/uretim",
    "/makine-parkuru",
    "/sektorler",
    "/galeri",
    "/iletisim",
    "/gizlilik-politikasi",
    "/kvkk",
    "/cerez-politikasi",
    "/sitemap.xml",
    "/robots.txt",
    "/tesekkurler",
    "/admin/giris",
  ];

  console.log("=== PUBLIC ROUTES ===");
  for (const path of routes) {
    try {
      const { status: code } = await status(path);
      const line = `${code}\t${path}`;
      console.log(line);
      report.push(line);
      if (code >= 400) fail.push(line);
    } catch (e) {
      const line = `ERR\t${path}\t${e.message}`;
      console.log(line);
      fail.push(line);
    }
  }

  console.log("\n=== REDIRECTS (expect 301/302/308) ===");
  for (const path of ["/blog", "/blog/sanayi-firmasi-icin-web-tasarim-bcy-dijital"]) {
    const { status: code, loc } = await status(path);
    const line = `${code}\t${path}\t-> ${loc}`;
    console.log(line);
    report.push(line);
    // Netlify redirects only work on Netlify; local Next may 404
    if (![301, 302, 307, 308, 404].includes(code)) fail.push(line);
  }

  console.log("\n=== ADMIN GUARD (unauth) ===");
  for (const path of ["/admin", "/admin/galeri", "/admin/hizmetler", "/admin/makine-parkuru", "/admin/icerik"]) {
    const { status: code, loc } = await status(path);
    const line = `${code}\t${path}\t-> ${loc}`;
    console.log(line);
    // expect redirect to login
    if (![301, 302, 307, 308].includes(code) && code !== 200) {
      // 200 only if somehow open - bad
    }
    if (![301, 302, 307, 308].includes(code)) fail.push(`ADMIN_OPEN? ${line}`);
  }

  for (const path of ["/api/admin/media", "/api/admin/services", "/api/admin/machines", "/api/admin/content"]) {
    const { status: code } = await status(path);
    const line = `${code}\tGET ${path}`;
    console.log(line);
    if (code !== 401) fail.push(`API_UNAUTH_EXPECTED_401 ${line}`);
  }

  console.log("\n=== TEKLIF API ===");
  const form = new FormData();
  form.set("name", "Test Kullanici");
  form.set("company", "Test");
  form.set("phone", "05551234567");
  form.set("email", "test@example.com");
  form.set("requestType", "CNC Torna");
  form.set("material", "Celik");
  form.set("quantity", "1");
  form.set("deadline", "2 hafta");
  form.set("message", "Otomatik smoke test teklif talebi. Gercek siparis degildir.");
  const teklifRes = await fetch(`${BASE}/api/teklif`, { method: "POST", body: form });
  const teklifBody = await teklifRes.json().catch(() => ({}));
  console.log(`HTTP ${teklifRes.status}`, JSON.stringify(teklifBody));
  report.push(`teklif:${teklifRes.status}:${teklifBody.code || teklifBody.message || ""}`);

  console.log("\n=== ENV (presence only) ===");
  const keys = [
    "RESEND_API_KEY",
    "QUOTE_FROM_EMAIL",
    "QUOTE_TO_EMAIL",
    "ADMIN_PASSWORD",
    "ADMIN_SESSION_SECRET",
    "CLOUDINARY_API_KEY",
    "CLOUDINARY_API_SECRET",
    "NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME",
    "NEXT_PUBLIC_SITE_URL",
  ];
  for (const k of keys) {
    const v = env[k];
    const state = v == null ? "MISSING" : v.length === 0 ? "EMPTY" : `SET(${v.length})`;
    console.log(`${k}: ${state}`);
    if (k === "QUOTE_TO_EMAIL" && (!v || !v.length)) fail.push("QUOTE_TO_EMAIL EMPTY -> teklif 501");
  }

  console.log("\n=== ADMIN LOGIN ===");
  const loginRes = await fetch(`${BASE}/api/admin/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ password: env.ADMIN_PASSWORD || "" }),
  });
  const loginBody = await loginRes.json().catch(() => ({}));
  const setCookie = loginRes.headers.getSetCookie?.() || [];
  const cookieHeader = setCookie.map((c) => c.split(";")[0]).join("; ");
  console.log(`login HTTP ${loginRes.status} ok=${loginBody.ok} cookies=${cookieHeader ? "yes" : "no"}`);
  if (!loginRes.ok || !loginBody.ok) fail.push(`ADMIN_LOGIN_FAILED ${loginRes.status}`);

  if (cookieHeader) {
    for (const path of ["/admin", "/admin/galeri", "/admin/hizmetler", "/admin/makine-parkuru", "/admin/icerik"]) {
      const res = await fetch(`${BASE}${path}`, { headers: { Cookie: cookieHeader }, redirect: "manual" });
      console.log(`${res.status}\tAUTH ${path}`);
      if (res.status >= 400) fail.push(`AUTH_PAGE ${path} ${res.status}`);
    }
    for (const path of ["/api/admin/media", "/api/admin/services", "/api/admin/machines", "/api/admin/content"]) {
      const res = await fetch(`${BASE}${path}`, { headers: { Cookie: cookieHeader } });
      console.log(`${res.status}\tAUTH GET ${path}`);
      if (res.status >= 500) fail.push(`AUTH_API ${path} ${res.status}`);
    }
  }

  // Homepage anchors presence
  console.log("\n=== HOME ANCHORS / CTA ===");
  const home = await fetch(`${BASE}/`);
  const html = await home.text();
  for (const needle of ["id=\"teklif-al\"", "id=\"yetenekler\"", "id=\"teklif\"", "/#teklif-al", "/#yetenekler", "Teknik çizim gönder"]) {
    const found = html.includes(needle);
    console.log(`${found ? "OK" : "MISSING"}\t${needle}`);
    if (!found && needle !== "id=\"teklif\"") fail.push(`HOME_MISSING ${needle}`);
  }

  // Sitemap articles
  const sm = await (await fetch(`${BASE}/sitemap.xml`)).text();
  for (const slug of ["web-tasarimi-bcy-dijital", "makaleler"]) {
    const found = sm.includes(slug);
    console.log(`${found ? "OK" : "MISSING"}\tsitemap:${slug}`);
    if (!found) fail.push(`SITEMAP_MISSING ${slug}`);
  }

  console.log("\n=== SUMMARY ===");
  if (fail.length === 0) {
    console.log("ALL CHECKS PASSED (with noted local redirect caveats)");
  } else {
    console.log("ISSUES:");
    for (const f of fail) console.log("- " + f);
  }
  process.exit(fail.filter((f) => !f.includes("blog")).length ? 1 : 0);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
