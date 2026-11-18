import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Bali Tour Packages | Honeymoon, Family & Custom Holidays",
  description: "Plan your Bali holiday with Christ Holidays. Explore temples, beaches, Ubud, rice terraces and romantic resorts. Custom packages with WhatsApp support.",
};

export default function BaliPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <nav className="text-sm text-gray-500 mb-6"><Link href="/" className="hover:text-blue-700">Home</Link> / <Link href="/international-tour-packages/asia" className="hover:text-blue-700">Asia</Link> / Bali</nav>
      <h1 className="text-4xl font-bold text-blue-900 mb-4">Bali Tour Packages</h1>
      <p className="text-lg text-gray-700 mb-8">Known as the Island of the Gods, Bali blends stunning beaches, ancient temples, lush rice terraces and a vibrant culture. Whether you are planning a honeymoon, family holiday or a relaxing getaway, Christ Holidays creates customised Bali packages with trusted stays and seamless support.</p>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Why Visit Bali</h2>
        <ul className="list-disc pl-5 space-y-2 text-gray-700">
          <li>Beautiful beaches in Seminyak, Nusa Dua and Uluwatu</li>
          <li>Cultural experiences in Ubud – temples, art markets and yoga</li>
          <li>Iconic landmarks like Tanah Lot Temple and Tegallalang Rice Terraces</li>
          <li>Ideal for honeymoons, couples and families</li>
          <li>Excellent connectivity from major Indian cities</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Best Time to Visit Bali</h2>
        <p className="text-gray-700 mb-3">The dry season from April to October is ideal for outdoor activities and beach time. The wet season (November to March) offers lower rates and lush green landscapes.</p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Popular Bali Package Ideas</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="border rounded-xl p-5"><h3 className="font-bold">Bali Honeymoon</h3><p className="text-sm text-gray-600 mt-1">Romantic stays in Ubud & Seminyak with private transfers.</p></div>
          <div className="border rounded-xl p-5"><h3 className="font-bold">Bali Family Holiday</h3><p className="text-sm text-gray-600 mt-1">Beaches, water sports and cultural visits.</p></div>
          <div className="border rounded-xl p-5"><h3 className="font-bold">Ubud + Beach Combo</h3><p className="text-sm text-gray-600 mt-1">Best of nature and relaxation in one trip.</p></div>
          <div className="border rounded-xl p-5"><h3 className="font-bold">Singapore + Bali</h3><p className="text-sm text-gray-600 mt-1">Popular dual destination itinerary.</p></div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Top Things to Do in Bali</h2>
        <ul className="list-disc pl-5 space-y-1 text-gray-700">
          <li>Visit Tanah Lot and Uluwatu Temples</li>
          <li>Explore Ubud Monkey Forest and rice terraces</li>
          <li>Relax on Seminyak or Nusa Dua beaches</li>
          <li>Enjoy a Balinese spa or cooking class</li>
          <li>Watch the sunset at Uluwatu or Jimbaran</li>
        </ul>
      </section>

      <section className="bg-blue-50 rounded-2xl p-6">
        <h2 className="text-xl font-bold mb-3">Plan Your Bali Trip</h2>
        <p className="text-gray-700 mb-4">Share your travel dates, group size and preferences. Our team will prepare a customised itinerary and quotation.</p>
        <a href="https://wa.me/919629879026?text=Hello%20Christ%20Holidays%2C%20I%20am%20interested%20in%20Bali%20tour%20packages." className="inline-flex bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold">Enquire on WhatsApp</a>
      </section>
    </div>
  );
}
