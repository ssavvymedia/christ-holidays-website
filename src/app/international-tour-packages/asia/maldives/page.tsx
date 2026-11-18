import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Maldives Tour Packages",
  description: "Maldives honeymoon and luxury resort packages with Christ Holidays.",
};

export default function MaldivesPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <nav className="text-sm text-gray-500 mb-4"><Link href="/" className="hover:text-blue-700">Home</Link> / <Link href="/international-tour-packages/asia" className="hover:text-blue-700">Asia</Link> / Maldives</nav>
      <h1 className="text-4xl font-bold text-blue-900 mb-4">Maldives Tour Packages</h1>
      <p className="text-lg text-gray-700 mb-6">Turquoise atolls, overwater villas and ultimate luxury escapes. Ideal for honeymoons and special occasions.</p>
      <div className="space-y-4 mb-10">
        <div className="border rounded-xl p-5"><h2 className="font-bold text-xl">Maldives Honeymoon Package</h2><p className="text-gray-600 mt-1">Overwater villa stays with seaplane transfers.</p></div>
        <div className="border rounded-xl p-5"><h2 className="font-bold text-xl">Maldives Luxury Resort</h2><p className="text-gray-600 mt-1">Premium island resorts with all-inclusive options.</p></div>
        <div className="border rounded-xl p-5"><h2 className="font-bold text-xl">Maldives Short Escape</h2><p className="text-gray-600 mt-1">3–4 night romantic getaways.</p></div>
      </div>
      <a href="https://wa.me/919629879026?text=Hello%20Christ%20Holidays%2C%20I%20am%20interested%20in%20Maldives%20packages." className="inline-flex bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold">Enquire on WhatsApp</a>
    </div>
  );
}
