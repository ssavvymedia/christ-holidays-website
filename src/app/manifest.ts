import type { MetadataRoute } from "next";
import { SITE_NAME } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${SITE_NAME} — holiday planning`,
    short_name: "Christ Holidays",
    description: "Domestic and international holiday planning from Salem, Madurai and Thoothukudi.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#01266b",
    lang: "en-IN",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
