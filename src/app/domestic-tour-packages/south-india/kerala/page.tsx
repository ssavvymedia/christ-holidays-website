import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kerala Tour Packages | Backwaters, Munnar & Houseboats",
  description: "Explore Kerala with Christ Holidays. Alleppey houseboats, Munnar tea gardens, beaches and customised family & honeymoon packages.",
};

export default function KeralaPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <nav className="text-sm text-gray-500 mb-6"><Link href="/" className="hover:text-blue-700">Home</Link> / <Link href="/domestic-tour-packages/south-india" className="hover:text-blue-700">South India</Link> / Kerala</nav>
      <h1 className="text-4xl font-bold text-blue-900 mb-4">Kerala Tour Packages</h1>
      <p className="text-lg text-gray-700 mb-8">God’s Own Country offers a perfect blend of serene backwaters, misty hills, golden beaches and rich culture. Christ Holidays specialises in thoughtfully planned Kerala holidays for families, honeymooners and groups.</p>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Popular Kerala Experiences</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="border rounded-xl p-5"><h3 className="font-bold">Alleppey Houseboat</h3><p className="text-sm text-gray-600 mt-1">Overnight cruises through the backwaters with traditional meals.</p></div>
          <div className="border rounded-xl p-5"><h3 className="font-bold">Munnar Hills</h3><p className="text-sm text-gray-600 mt-1">Tea plantations, viewpoints and cool climate.</p></div>
          <div className="border rounded-xl p-5"><h3 className="font-bold">Thekkady Wildlife</h3><p className="text-sm text-gray-600 mt-1">Periyar wildlife sanctuary and spice plantations.</p></div>
          <div className="border rounded-xl p-5"><h3 className="font-bold">Kovalam / Varkala Beaches</h3><p className="text-sm text-gray-600 mt-1">Relaxed beach stays along the Arabian Sea.</p></div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Best Time to Visit Kerala</h2>
        <p className="text-gray-700">September to March is ideal for most travellers. Monsoon season (June–August) is perfect for Ayurveda and lush green landscapes.</p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Sample Package Ideas</h2>
        <ul className="list-disc pl-5 space-y-2 text-gray-700">
          <li>Cochin – Munnar – Alleppey (5 Days / 4 Nights)</li>
          <li>Kerala Honeymoon with houseboat stay</li>
          <li>Kerala Family Package with beaches and hills</li>
          <li>Customised Ayurveda & wellness itineraries</li>
        </ul>
      </section>

      <section className="bg-blue-50 rounded-2xl p-6">
        <h2 className="text-xl font-bold mb-3">Plan Your Kerala Holiday</h2>
        <p className="text-gray-700 mb-4">Tell us your travel dates and preferences. We will share a customised itinerary and quotation.</p>
        <a href="https://wa.me/919629879026?text=Hello%20Christ%20Holidays%2C%20I%20am%20interested%20in%20Kerala%20packages." className="inline-flex bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold">Enquire on WhatsApp</a>
      </section>
    </div>
  );
}
