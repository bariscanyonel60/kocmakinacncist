"use client";

import type { ImageLoaderProps } from "next/image";
import { cloudinaryImageUrl } from "@/lib/cloudinary";

export default function cloudinaryLoader({ src, width, quality }: ImageLoaderProps) {
  return cloudinaryImageUrl(src, { width, quality });
}
