import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Goa Tour Packages | Beaches, Honeymoon & Family Holidays",
  description: "Plan your Goa holiday with Christ Holidays. North & South Goa beaches, water sports, nightlife and customised packages for couples and families.",
};

export default function GoaPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <nav className="text-sm text-gray-500 mb-6"><Link href="/" className="hover:text-blue-700">Home</Link> / <Link href="/domestic-tour-packages/south-india" className="hover:text-blue-700">South India</Link> / Goa</nav>
      <h1 className="text-4xl font-bold text-blue-900 mb-4">Goa Tour Packages</h1>
      <p className="text-lg text-gray-700 mb-8">Goa is India’s favourite beach destination, offering a mix of lively North Goa beaches, peaceful South Goa resorts, Portuguese heritage and water sports. Perfect for honeymoons, friends and families.</p>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Why Visit Goa</h2>
        <ul className="list-disc pl-5 space-y-2 text-gray-700">
          <li>Beautiful beaches from Baga and Calangute to Palolem and Agonda</li>
          <li>Water sports, nightlife and relaxed beach vibes</li>
          <li>Portuguese churches, forts and spice plantations</li>
          <li>Excellent road and flight connectivity</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Popular Package Ideas</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="border rounded-xl p-5"><h3 className="font-bold">Goa Beach Package</h3></div>
          <div className="border rounded-xl p-5"><h3 className="font-bold">Goa Honeymoon Package</h3></div>
          <div className="border rounded-xl p-5"><h3 className="font-bold">Goa Family Package</h3></div>
          <div className="border rounded-xl p-5"><h3 className="font-bold">North + South Goa Combo</h3></div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Best Time to Visit</h2>
        <p className="text-gray-700">October to March offers the best weather for beaches and outdoor activities.</p>
      </section>

      <section className="bg-blue-50 rounded-2xl p-6">
        <h2 className="text-xl font-bold mb-3">Plan Your Goa Trip</h2>
        <a href="https://wa.me/919629879026?text=Hello%20Christ%20Holidays%2C%20I%20am%20interested%20in%20Goa%20packages." className="inline-flex bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold">Enquire on WhatsApp</a>
      </section>
    </div>
  );
}
