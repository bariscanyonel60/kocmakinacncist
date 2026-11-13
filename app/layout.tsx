import type { Metadata, Viewport } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import { cloudinaryEnabled } from "@/lib/cloudinary";
import { rootMetadata } from "@/lib/seo";
import "./globals.css";

const display = Space_Grotesk({
  subsets: ["latin", "latin-ext"],
  variable: "--font-space",
  display: "swap",
});

const body = Manrope({
  subsets: ["latin", "latin-ext"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = rootMetadata;

export const viewport: Viewport = {
  themeColor: "#0B0D10",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="tr"
      data-scroll-behavior="smooth"
      className={`${display.variable} ${body.variable} h-full`}
    >
      <head>
        {cloudinaryEnabled ? (
          <>
            <link rel="preconnect" href="https://res.cloudinary.com" crossOrigin="anonymous" />
            <link rel="dns-prefetch" href="https://res.cloudinary.com" />
          </>
        ) : null}
      </head>
      <body className="min-h-full max-w-full overflow-x-hidden bg-paper font-sans text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
