import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Rajasthan Tour Packages | Jaipur, Udaipur & Jaisalmer",
  description: "Rajasthan packages with Christ Holidays. Royal palaces, forts, deserts and customised heritage itineraries.",
};

export default function RajasthanPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <nav className="text-sm text-gray-500 mb-6"><Link href="/" className="hover:text-blue-700">Home</Link> / <Link href="/domestic-tour-packages/north-india" className="hover:text-blue-700">North India</Link> / Rajasthan</nav>
      <h1 className="text-4xl font-bold text-blue-900 mb-4">Rajasthan Tour Packages</h1>
      <p className="text-lg text-gray-700 mb-8">Experience royal Rajasthan with its magnificent forts, palaces, deserts and vibrant culture. Perfect for families, couples and heritage travellers.</p>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Popular Destinations</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="border rounded-xl p-5"><h3 className="font-bold">Jaipur</h3><p className="text-sm text-gray-600 mt-1">Pink City palaces and forts.</p></div>
          <div className="border rounded-xl p-5"><h3 className="font-bold">Udaipur</h3><p className="text-sm text-gray-600 mt-1">Lakes and romantic palaces.</p></div>
          <div className="border rounded-xl p-5"><h3 className="font-bold">Jaisalmer</h3><p className="text-sm text-gray-600 mt-1">Desert fort and camel safari.</p></div>
          <div className="border rounded-xl p-5"><h3 className="font-bold">Golden Triangle</h3><p className="text-sm text-gray-600 mt-1">Delhi – Agra – Jaipur.</p></div>
        </div>
      </section>

      <section className="bg-blue-50 rounded-2xl p-6">
        <h2 className="text-xl font-bold mb-3">Plan Your Rajasthan Holiday</h2>
        <a href="https://wa.me/919629879026?text=Hello%20Christ%20Holidays%2C%20I%20am%20interested%20in%20Rajasthan%20packages." className="inline-flex bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold">Enquire on WhatsApp</a>
      </section>
    </div>
  );
}
