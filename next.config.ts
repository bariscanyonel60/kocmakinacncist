import type { NextConfig } from "next";

const cloudinary = Boolean(process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME);

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  experimental: {
    // Admin galeri yüklemeleri proxy matcher'ından geçer; gövde tampon limiti.
    proxyClientMaxBodySize: "12mb",
  },
  images: {
    // 2048/3840 srcset parçalarını kes — mobilde gereksiz büyük indirme olmasın.
    deviceSizes: [640, 750, 828, 1080, 1200, 1600, 1920],
    imageSizes: [64, 96, 128, 256, 384],
    qualities: [55, 60, 65, 70, 75],
    ...(cloudinary
      ? { loader: "custom" as const, loaderFile: "./lib/cloudinary-loader.ts" }
      : { formats: ["image/avif", "image/webp"] as const }),
  },
  async redirects() {
    return [
      {
        source: "/blog",
        destination: "/makaleler",
        permanent: true,
      },
      {
        source: "/blog/sanayi-firmasi-icin-web-tasarim-bcy-dijital",
        destination: "/makaleler/web-tasarimi-bcy-dijital",
        permanent: true,
      },
      {
        source: "/blog/:slug*",
        destination: "/makaleler/:slug*",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/images/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=604800, stale-while-revalidate=2592000",
          },
        ],
      },
      {
        source: "/:file(favicon.ico|icon.png|apple-icon.png)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=604800, stale-while-revalidate=2592000",
          },
        ],
      },
    ];
  },
  turbopack: {
    root: process.cwd(),
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
