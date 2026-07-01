import type { MetadataRoute } from "next";

const routes = [
  "",
  "/about",
  "/experience",
  "/skills",
  "/projects",
  "/certifications",
  "/blog",
  "/resources",
  "/contact"
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://example.com";
  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7
  }));
}
