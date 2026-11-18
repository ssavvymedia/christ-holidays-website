import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sri Lanka Tour Packages | Cultural Triangle & Beaches",
  description: "Sri Lanka packages with Christ Holidays. Sigiriya, Kandy, tea country and beach holidays for families and honeymooners.",
};

export default function SriLankaPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <nav className="text-sm text-gray-500 mb-6"><Link href="/" className="hover:text-blue-700">Home</Link> / <Link href="/international-tour-packages/asia" className="hover:text-blue-700">Asia</Link> / Sri Lanka</nav>
      <h1 className="text-4xl font-bold text-blue-900 mb-4">Sri Lanka Tour Packages</h1>
      <p className="text-lg text-gray-700 mb-8">Sri Lanka packs ancient cities, tea plantations, wildlife and beautiful beaches into a compact and affordable destination. Ideal for families and couples.</p>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Highlights</h2>
        <ul className="list-disc pl-5 space-y-2 text-gray-700">
          <li>Sigiriya Rock Fortress and Cultural Triangle</li>
          <li>Kandy Temple of the Tooth</li>
          <li>Nuwara Eliya tea country</li>
          <li>Bentota or Mirissa beaches</li>
          <li>Wildlife safaris in Yala or Udawalawe</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Popular Packages</h2>
        <div className="space-y-3">
          <div className="border rounded-xl p-5"><h3 className="font-bold">Sri Lanka Cultural Triangle</h3></div>
          <div className="border rounded-xl p-5"><h3 className="font-bold">Beach + Hill Country</h3></div>
          <div className="border rounded-xl p-5"><h3 className="font-bold">Sri Lanka Honeymoon</h3></div>
        </div>
      </section>

      <section className="bg-blue-50 rounded-2xl p-6">
        <h2 className="text-xl font-bold mb-3">Plan Your Sri Lanka Trip</h2>
        <a href="https://wa.me/919629879026?text=Hello%20Christ%20Holidays%2C%20I%20am%20interested%20in%20Sri%20Lanka%20packages." className="inline-flex bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold">Enquire on WhatsApp</a>
      </section>
    </div>
  );
}
