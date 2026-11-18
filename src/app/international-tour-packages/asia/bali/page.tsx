import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Bali Tour Packages",
  description: "Bali honeymoon, family and adventure packages with Christ Holidays. Temples, beaches, Ubud and more.",
};

export default function BaliPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <nav className="text-sm text-gray-500 mb-4"><Link href="/" className="hover:text-blue-700">Home</Link> / <Link href="/international-tour-packages/asia" className="hover:text-blue-700">Asia</Link> / Bali</nav>
      <h1 className="text-4xl font-bold text-blue-900 mb-4">Bali Tour Packages</h1>
      <p className="text-lg text-gray-700 mb-6">Island of the Gods – temples, beaches, rice terraces and vibrant culture. Perfect for honeymoons, families and friends.</p>
      <div className="grid sm:grid-cols-2 gap-6 mb-10">
        <div className="border rounded-2xl p-6"><h2 className="font-bold text-xl">Bali Honeymoon Package</h2><p className="text-gray-600 mt-1">Romantic stays in Ubud & Seminyak with private transfers.</p></div>
        <div className="border rounded-2xl p-6"><h2 className="font-bold text-xl">Bali Family Package</h2><p className="text-gray-600 mt-1">Beaches, water sports and cultural experiences.</p></div>
        <div className="border rounded-2xl p-6"><h2 className="font-bold text-xl">Ubud + Beach Combo</h2><p className="text-gray-600 mt-1">Best of nature and relaxation.</p></div>
        <div className="border rounded-2xl p-6"><h2 className="font-bold text-xl">Singapore + Bali</h2><p className="text-gray-600 mt-1">Popular dual destination itinerary.</p></div>
      </div>
      <a href="https://wa.me/919629879026?text=Hello%20Christ%20Holidays%2C%20I%20am%20interested%20in%20Bali%20tour%20packages." className="inline-flex bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold">Enquire on WhatsApp</a>
    </div>
  );
}
