import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ooty Tour Packages | Nilgiri Hills Holidays",
  description: "Ooty and Nilgiri Hills packages with Christ Holidays. Botanical gardens, tea estates, cool climate and family-friendly hill station holidays.",
};

export default function OotyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <nav className="text-sm text-gray-500 mb-6"><Link href="/" className="hover:text-blue-700">Home</Link> / <Link href="/domestic-tour-packages/south-india" className="hover:text-blue-700">South India</Link> / Ooty</nav>
      <h1 className="text-4xl font-bold text-blue-900 mb-4">Ooty Tour Packages</h1>
      <p className="text-lg text-gray-700 mb-8">Known as the Queen of the Nilgiris, Ooty offers cool climate, botanical gardens, tea plantations and scenic viewpoints. A popular choice for families and couples from South India.</p>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Top Attractions</h2>
        <ul className="list-disc pl-5 space-y-2 text-gray-700">
          <li>Botanical Gardens and Ooty Lake</li>
          <li>Doddabetta Peak</li>
          <li>Tea Museum and plantations</li>
          <li>Coonoor and Nilgiri Mountain Railway</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Package Options</h2>
        <div className="space-y-3">
          <div className="border rounded-xl p-5"><h3 className="font-bold">Ooty Hill Station Package</h3></div>
          <div className="border rounded-xl p-5"><h3 className="font-bold">Ooty + Coonoor</h3></div>
          <div className="border rounded-xl p-5"><h3 className="font-bold">Ooty Family Package</h3></div>
        </div>
      </section>

      <section className="bg-blue-50 rounded-2xl p-6">
        <h2 className="text-xl font-bold mb-3">Plan Your Ooty Holiday</h2>
        <a href="https://wa.me/919629879026?text=Hello%20Christ%20Holidays%2C%20I%20am%20interested%20in%20Ooty%20packages." className="inline-flex bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold">Enquire on WhatsApp</a>
      </section>
    </div>
  );
}
