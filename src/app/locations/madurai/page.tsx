import type { Metadata } from "next";
import LocationView from "@/components/LocationView";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Madurai Travel Agency Office",
  description: "Christ Holidays & Travels branch in Madurai, Tamil Nadu. Call +91 63743 95526 to plan a holiday. Enquire for the price. The street address is shared on request.",
  path: "/locations/madurai",
});

export default function MaduraiPage() {
  return <LocationView id="madurai" />;
}
