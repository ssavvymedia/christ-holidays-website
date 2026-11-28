import type { Metadata } from "next";
import LocationView from "@/components/LocationView";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Salem Travel Agency Office",
  description: "Christ Holidays & Travels head office in Salem, Tamil Nadu. Call or WhatsApp +91 96298 79026. Enquire for holiday prices. The street address is shared when you visit.",
  path: "/locations/salem",
});

export default function SalemPage() {
  return <LocationView id="salem" />;
}
