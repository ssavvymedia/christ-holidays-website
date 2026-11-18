import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Malaysia Tour Packages | Kuala Lumpur, Langkawi & Penang",
  description: "Malaysia packages with Christ Holidays. Kuala Lumpur city tours, Langkawi islands and Penang heritage experiences.",
};

export default function MalaysiaPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <nav className="text-sm text-gray-500 mb-6"><Link href="/" className="hover:text-blue-700">Home</Link> / <Link href="/international-tour-packages/asia" className="hover:text-blue-700">Asia</Link> / Malaysia</nav>
      <h1 className="text-4xl font-bold text-blue-900 mb-4">Malaysia Tour Packages</h1>
      <p className="text-lg text-gray-700 mb-8">Malaysia offers a great mix of modern cities, tropical islands and rich cultural heritage. Popular with Indian travellers for its proximity, food and family-friendly attractions.</p>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Top Destinations in Malaysia</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="border rounded-xl p-5"><h3 className="font-bold">Kuala Lumpur</h3><p className="text-sm text-gray-600 mt-1">Petronas Towers, shopping and city tours.</p></div>
          <div className="border rounded-xl p-5"><h3 className="font-bold">Langkawi</h3><p className="text-sm text-gray-600 mt-1">Beaches, cable car and island hopping.</p></div>
          <div className="border rounded-xl p-5"><h3 className="font-bold">Penang</h3><p className="text-sm text-gray-600 mt-1">George Town heritage and street food.</p></div>
          <div className="border rounded-xl p-5"><h3 className="font-bold">Singapore + Malaysia</h3><p className="text-sm text-gray-600 mt-1">Popular dual destination itinerary.</p></div>
        </div>
      </section>

      <section className="bg-blue-50 rounded-2xl p-6">
        <h2 className="text-xl font-bold mb-3">Get a Malaysia Quote</h2>
        <a href="https://wa.me/919629879026?text=Hello%20Christ%20Holidays%2C%20I%20am%20interested%20in%20Malaysia%20packages." className="inline-flex bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold">Enquire on WhatsApp</a>
      </section>
    </div>
  );
}
