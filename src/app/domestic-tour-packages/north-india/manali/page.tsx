import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Manali Tour Packages | Himachal Holidays",
  description: "Manali packages with Christ Holidays. Snow, adventure, honeymoon and family itineraries in Himachal Pradesh.",
};

export default function ManaliPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <nav className="text-sm text-gray-500 mb-6"><Link href="/" className="hover:text-blue-700">Home</Link> / <Link href="/domestic-tour-packages/north-india" className="hover:text-blue-700">North India</Link> / Manali</nav>
      <h1 className="text-4xl font-bold text-blue-900 mb-4">Manali Tour Packages</h1>
      <p className="text-lg text-gray-700 mb-8">Manali is one of India’s most popular hill stations, known for snow, adventure activities, scenic valleys and romantic getaways.</p>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Top Experiences</h2>
        <ul className="list-disc pl-5 space-y-2 text-gray-700">
          <li>Solang Valley adventure activities</li>
          <li>Rohtang Pass (seasonal)</li>
          <li>Old Manali cafes and riverside walks</li>
          <li>Hadimba Temple and Mall Road</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Package Options</h2>
        <div className="space-y-3">
          <div className="border rounded-xl p-5"><h3 className="font-bold">Manali Honeymoon Package</h3></div>
          <div className="border rounded-xl p-5"><h3 className="font-bold">Manali Family Package</h3></div>
          <div className="border rounded-xl p-5"><h3 className="font-bold">Manali + Solang Valley</h3></div>
        </div>
      </section>

      <section className="bg-blue-50 rounded-2xl p-6">
        <h2 className="text-xl font-bold mb-3">Plan Your Manali Trip</h2>
        <a href="https://wa.me/919629879026?text=Hello%20Christ%20Holidays%2C%20I%20am%20interested%20in%20Manali%20packages." className="inline-flex bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold">Enquire on WhatsApp</a>
      </section>
    </div>
  );
}
