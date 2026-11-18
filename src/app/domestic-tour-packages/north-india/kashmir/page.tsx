import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kashmir Tour Packages | Srinagar, Gulmarg & Pahalgam",
  description: "Plan your Kashmir holiday with Christ Holidays. Houseboats, Gulmarg snow, Pahalgam meadows and customised honeymoon & family packages.",
};

export default function KashmirPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <nav className="text-sm text-gray-500 mb-6"><Link href="/" className="hover:text-blue-700">Home</Link> / <Link href="/domestic-tour-packages/north-india" className="hover:text-blue-700">North India</Link> / Kashmir</nav>
      <h1 className="text-4xl font-bold text-blue-900 mb-4">Kashmir Tour Packages</h1>
      <p className="text-lg text-gray-700 mb-8">Often called Paradise on Earth, Kashmir offers houseboats on Dal Lake, snow-capped peaks in Gulmarg and scenic meadows in Pahalgam. Christ Holidays designs peaceful and well-planned Kashmir itineraries for families and honeymooners.</p>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Must-Visit Places in Kashmir</h2>
        <ul className="list-disc pl-5 space-y-2 text-gray-700">
          <li>Srinagar – Dal Lake, Mughal Gardens and houseboats</li>
          <li>Gulmarg – Gondola ride and snow experiences</li>
          <li>Pahalgam – Betaab Valley and riverside walks</li>
          <li>Sonamarg – Meadow of Gold (seasonal)</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Best Time to Visit</h2>
        <p className="text-gray-700">March to October for pleasant weather and sightseeing. December to February for snow experiences in Gulmarg.</p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Popular Package Options</h2>
        <div className="space-y-3">
          <div className="border rounded-xl p-5"><h3 className="font-bold">Kashmir Honeymoon Package</h3></div>
          <div className="border rounded-xl p-5"><h3 className="font-bold">Srinagar – Gulmarg – Pahalgam</h3></div>
          <div className="border rounded-xl p-5"><h3 className="font-bold">Kashmir Family Holiday</h3></div>
        </div>
      </section>

      <section className="bg-blue-50 rounded-2xl p-6">
        <h2 className="text-xl font-bold mb-3">Plan Your Kashmir Trip</h2>
        <a href="https://wa.me/919629879026?text=Hello%20Christ%20Holidays%2C%20I%20am%20interested%20in%20Kashmir%20packages." className="inline-flex bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold">Enquire on WhatsApp</a>
      </section>
    </div>
  );
}
