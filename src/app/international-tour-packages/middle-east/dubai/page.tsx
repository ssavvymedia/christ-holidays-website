import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dubai Tour Packages | City, Desert Safari & Luxury Holidays",
  description: "Book Dubai packages with Christ Holidays. Burj Khalifa, desert safari, Marina cruise and customised family & honeymoon itineraries.",
};

export default function DubaiPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <nav className="text-sm text-gray-500 mb-6"><Link href="/" className="hover:text-blue-700">Home</Link> / <Link href="/international-tour-packages/middle-east" className="hover:text-blue-700">Middle East</Link> / Dubai</nav>
      <h1 className="text-4xl font-bold text-blue-900 mb-4">Dubai Tour Packages</h1>
      <p className="text-lg text-gray-700 mb-8">Dubai combines modern luxury, iconic landmarks, desert adventures and world-class shopping. Christ Holidays offers flexible Dubai packages for families, couples and groups with reliable transfers and stays.</p>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Top Experiences in Dubai</h2>
        <ul className="list-disc pl-5 space-y-2 text-gray-700">
          <li>Visit Burj Khalifa and Dubai Mall</li>
          <li>Desert safari with BBQ dinner</li>
          <li>Dubai Marina cruise and Palm Jumeirah</li>
          <li>Shopping at traditional souks and modern malls</li>
          <li>Optional Abu Dhabi day trip</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Popular Dubai Packages</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="border rounded-xl p-5"><h3 className="font-bold">Dubai City Package</h3><p className="text-sm text-gray-600 mt-1">Iconic landmarks and city highlights.</p></div>
          <div className="border rounded-xl p-5"><h3 className="font-bold">Dubai + Abu Dhabi</h3><p className="text-sm text-gray-600 mt-1">Combined UAE experience.</p></div>
          <div className="border rounded-xl p-5"><h3 className="font-bold">Dubai Honeymoon</h3><p className="text-sm text-gray-600 mt-1">Luxury stays with romantic experiences.</p></div>
          <div className="border rounded-xl p-5"><h3 className="font-bold">Desert Safari Special</h3><p className="text-sm text-gray-600 mt-1">Adventure-focused itinerary.</p></div>
        </div>
      </section>

      <section className="bg-blue-50 rounded-2xl p-6">
        <h2 className="text-xl font-bold mb-3">Get a Customised Dubai Quote</h2>
        <p className="text-gray-700 mb-4">Share your travel dates and requirements. Our team will prepare the best options for you.</p>
        <a href="https://wa.me/919629879026?text=Hello%20Christ%20Holidays%2C%20I%20am%20interested%20in%20Dubai%20packages." className="inline-flex bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold">Enquire on WhatsApp</a>
      </section>
    </div>
  );
}
