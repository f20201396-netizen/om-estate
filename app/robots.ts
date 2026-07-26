import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: "https://omestate.online/sitemap.xml",
    host: "https://omestate.online",
  };
}
