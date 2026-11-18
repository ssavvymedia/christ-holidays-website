import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Coorg Tour Packages | Coffee Estates & Nature Holidays",
  description: "Coorg packages with Christ Holidays. Coffee plantations, waterfalls, misty hills and honeymoon itineraries.",
};

export default function CoorgPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <nav className="text-sm text-gray-500 mb-6"><Link href="/" className="hover:text-blue-700">Home</Link> / <Link href="/domestic-tour-packages/south-india" className="hover:text-blue-700">South India</Link> / Coorg</nav>
      <h1 className="text-4xl font-bold text-blue-900 mb-4">Coorg Tour Packages</h1>
      <p className="text-lg text-gray-700 mb-8">Often called the Scotland of India, Coorg is known for coffee estates, waterfalls, misty hills and a peaceful atmosphere. Ideal for couples and nature lovers.</p>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Highlights</h2>
        <ul className="list-disc pl-5 space-y-2 text-gray-700">
          <li>Coffee plantation stays and walks</li>
          <li>Abbey Falls and Raja’s Seat</li>
          <li>Dubare Elephant Camp (optional)</li>
          <li>Cool climate and scenic drives</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Package Options</h2>
        <div className="space-y-3">
          <div className="border rounded-xl p-5"><h3 className="font-bold">Coorg Nature Package</h3></div>
          <div className="border rounded-xl p-5"><h3 className="font-bold">Coorg Honeymoon</h3></div>
          <div className="border rounded-xl p-5"><h3 className="font-bold">Coorg + Mysore</h3></div>
        </div>
      </section>

      <section className="bg-blue-50 rounded-2xl p-6">
        <h2 className="text-xl font-bold mb-3">Plan Your Coorg Trip</h2>
        <a href="https://wa.me/919629879026?text=Hello%20Christ%20Holidays%2C%20I%20am%20interested%20in%20Coorg%20packages." className="inline-flex bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold">Enquire on WhatsApp</a>
      </section>
    </div>
  );
}
