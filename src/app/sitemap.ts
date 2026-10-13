import type { MetadataRoute } from "next";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap { const base = "https://zoovana.pages.dev"; return ["", "/about", "/gallery", "/tickets"].map(path => ({ url: `${base}${path}`, lastModified: new Date(), changeFrequency: path ? "monthly" : "weekly", priority: path ? .8 : 1 })); }
