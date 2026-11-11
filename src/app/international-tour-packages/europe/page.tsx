import { whatsappLink } from "@/lib/site";

export default function EuropePage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      <h1 className="mb-4 text-4xl font-bold text-navy">Europe Tour Packages</h1>
      <p className="mb-6 text-lg text-gray-700">Share your preferred countries, dates and group size and the team will help you plan a Europe holiday.</p>
      <a href={whatsappLink("Hello Christ Holidays, I am interested in Europe packages.")} className="inline-flex rounded-full bg-yellow px-6 py-3 font-semibold text-navy">
        Enquire on WhatsApp
      </a>
    </div>
  );
}
