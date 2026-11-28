import type { MetadataRoute } from "next";
import { pages } from "@/data/catalog";
import { packages } from "@/data/packages";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = [
    "/",
    "/about",
    "/contact",
    "/faq",
    "/destinations",
    "/travel-services",
    "/tour-packages",
    "/locations",
    "/locations/salem",
    "/locations/madurai",
    "/locations/thoothukudi",
    "/legal/privacy-policy",
    "/legal/terms-and-conditions",
  ];
  const paths = [
    ...staticPaths,
    ...Object.values(pages).map((page) => page.path),
    ...packages.map((pkg) => `/tour-packages/${pkg.slug}`),
  ];
  const unique = [...new Set(paths)];

  return unique.map((path) => ({
    url: path === "/" ? SITE_URL : `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path.split("/").length > 3 ? 0.6 : 0.8,
  }));
}
