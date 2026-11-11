import type { Metadata } from "next";
import { whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Group Tours",
  description: "Plan group holidays with Christ Holidays & Travels for families, friends and corporates.",
};

export default function GroupToursPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      <h1 className="mb-4 text-4xl font-bold text-navy">Group Tours</h1>
      <p className="mb-6 text-lg text-gray-700">
        Looking to travel with family, friends or a larger group? Share your destination, dates and group size and the team will help you plan a suitable itinerary.
      </p>
      <a
        href={whatsappLink("Hello Christ Holidays, I am planning a group tour. Please get in touch.")}
        className="inline-flex rounded-full bg-yellow px-6 py-3 font-semibold text-navy"
      >
        Plan a Group Tour on WhatsApp
      </a>
    </div>
  );
}
