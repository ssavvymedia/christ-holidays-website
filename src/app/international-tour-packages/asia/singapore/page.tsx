import type { Metadata } from "next";
import CatalogView from "@/components/CatalogView";
import { pages } from "@/data/catalog";
import { pageMetadata } from "@/lib/seo";

const page = pages.singapore;

export const metadata: Metadata = pageMetadata(page);

export default function Page() {
  return <CatalogView page={page} />;
}
