import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://kuldeep-bhadouriya.vercel.app";

  return [
    {
      url: baseUrl,
      lastModified: "2026-09-17",
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}