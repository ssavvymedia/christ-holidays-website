import type { Metadata } from "next";
import LocationView from "@/components/LocationView";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Thoothukudi (Tuticorin) Travel Agency Office",
  description: "Christ Holidays & Travels in Thoothukudi, also called Tuticorin. Call +91 77081 04235. A Tamil Nadu travel agency office for holiday planning. Enquire for the price.",
  path: "/locations/thoothukudi",
});

export default function ThoothukudiPage() {
  return <LocationView id="thoothukudi" />;
}
