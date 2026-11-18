import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Maldives Tour Packages | Honeymoon & Luxury Resorts",
  description: "Maldives honeymoon and luxury packages with Christ Holidays. Overwater villas, turquoise lagoons and customised island stays.",
};

export default function MaldivesPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <nav className="text-sm text-gray-500 mb-6"><Link href="/" className="hover:text-blue-700">Home</Link> / <Link href="/international-tour-packages/asia" className="hover:text-blue-700">Asia</Link> / Maldives</nav>
      <h1 className="text-4xl font-bold text-blue-900 mb-4">Maldives Tour Packages</h1>
      <p className="text-lg text-gray-700 mb-8">The Maldives is the ultimate luxury and honeymoon destination with overwater villas, crystal-clear lagoons and private island resorts.</p>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Ideal For</h2>
        <ul className="list-disc pl-5 space-y-2 text-gray-700">
          <li>Honeymooners seeking privacy and romance</li>
          <li>Couples celebrating special occasions</li>
          <li>Travellers looking for pure relaxation</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Package Options</h2>
        <div className="space-y-3">
          <div className="border rounded-xl p-5"><h3 className="font-bold">Maldives Honeymoon Package</h3></div>
          <div className="border rounded-xl p-5"><h3 className="font-bold">Luxury Resort Stay</h3></div>
          <div className="border rounded-xl p-5"><h3 className="font-bold">Short Escape (3–4 Nights)</h3></div>
        </div>
      </section>

      <section className="bg-blue-50 rounded-2xl p-6">
        <h2 className="text-xl font-bold mb-3">Get a Maldives Quote</h2>
        <a href="https://wa.me/919629879026?text=Hello%20Christ%20Holidays%2C%20I%20am%20interested%20in%20Maldives%20packages." className="inline-flex bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold">Enquire on WhatsApp</a>
      </section>
    </div>
  );
}
