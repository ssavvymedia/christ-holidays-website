import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Andaman Tour Packages | Honeymoon & Beach Holidays",
  description: "Andaman packages with Christ Holidays. Port Blair, Havelock, Neil Island, beaches and honeymoon itineraries.",
};

export default function AndamanPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <nav className="text-sm text-gray-500 mb-6"><Link href="/" className="hover:text-blue-700">Home</Link> / Andaman</nav>
      <h1 className="text-4xl font-bold text-blue-900 mb-4">Andaman Tour Packages</h1>
      <p className="text-lg text-gray-700 mb-8">The Andaman Islands offer pristine beaches, clear waters, water sports and a peaceful island experience. Ideal for honeymoons and families looking for a beach holiday closer to home.</p>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Popular Islands & Experiences</h2>
        <ul className="list-disc pl-5 space-y-2 text-gray-700">
          <li>Port Blair – Cellular Jail and city highlights</li>
          <li>Havelock (Swaraj Dweep) – Radhanagar Beach</li>
          <li>Neil Island (Shaheed Dweep)</li>
          <li>Snorkelling and glass-bottom boat rides</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Package Ideas</h2>
        <div className="space-y-3">
          <div className="border rounded-xl p-5"><h3 className="font-bold">Andaman Honeymoon Package</h3></div>
          <div className="border rounded-xl p-5"><h3 className="font-bold">Port Blair – Havelock – Neil</h3></div>
          <div className="border rounded-xl p-5"><h3 className="font-bold">Andaman Family Package</h3></div>
        </div>
      </section>

      <section className="bg-blue-50 rounded-2xl p-6">
        <h2 className="text-xl font-bold mb-3">Plan Your Andaman Trip</h2>
        <a href="https://wa.me/919629879026?text=Hello%20Christ%20Holidays%2C%20I%20am%20interested%20in%20Andaman%20packages." className="inline-flex bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold">Enquire on WhatsApp</a>
      </section>
    </div>
  );
}
