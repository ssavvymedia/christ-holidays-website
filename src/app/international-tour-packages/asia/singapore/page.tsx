import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Singapore Tour Packages | City, Sentosa & Family Holidays",
  description: "Singapore packages with Christ Holidays. Gardens by the Bay, Universal Studios, Sentosa and customised family itineraries.",
};

export default function SingaporePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <nav className="text-sm text-gray-500 mb-6"><Link href="/" className="hover:text-blue-700">Home</Link> / <Link href="/international-tour-packages/asia" className="hover:text-blue-700">Asia</Link> / Singapore</nav>
      <h1 className="text-4xl font-bold text-blue-900 mb-4">Singapore Tour Packages</h1>
      <p className="text-lg text-gray-700 mb-8">A clean, modern and family-friendly destination featuring iconic attractions, excellent shopping and world-class infrastructure. Ideal for first-time international travellers and families.</p>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Top Attractions</h2>
        <ul className="list-disc pl-5 space-y-2 text-gray-700">
          <li>Gardens by the Bay and Marina Bay Sands</li>
          <li>Universal Studios and Sentosa Island</li>
          <li>Singapore Zoo and Night Safari</li>
          <li>Orchard Road shopping</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Popular Itineraries</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="border rounded-xl p-5"><h3 className="font-bold">Singapore City Package</h3></div>
          <div className="border rounded-xl p-5"><h3 className="font-bold">Singapore Family Package</h3></div>
          <div className="border rounded-xl p-5"><h3 className="font-bold">Singapore + Malaysia</h3></div>
          <div className="border rounded-xl p-5"><h3 className="font-bold">Singapore + Bali</h3></div>
        </div>
      </section>

      <section className="bg-blue-50 rounded-2xl p-6">
        <h2 className="text-xl font-bold mb-3">Get Your Singapore Quote</h2>
        <a href="https://wa.me/919629879026?text=Hello%20Christ%20Holidays%2C%20I%20am%20interested%20in%20Singapore%20packages." className="inline-flex bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold">Enquire on WhatsApp</a>
      </section>
    </div>
  );
}
