import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ooty Tour Packages",
  description: "Ooty and Nilgiri Hills packages with Christ Holidays – cool climate, botanical gardens and scenic views.",
};

export default function OotyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <nav className="text-sm text-gray-500 mb-4"><Link href="/" className="hover:text-blue-700">Home</Link> / <Link href="/domestic-tour-packages/south-india" className="hover:text-blue-700">South India</Link> / Ooty</nav>
      <h1 className="text-4xl font-bold text-blue-900 mb-4">Ooty Tour Packages</h1>
      <p className="text-lg text-gray-700 mb-6">Queen of the Nilgiris – cool climate, tea gardens, botanical gardens and scenic mountain views.</p>
      <div className="space-y-4 mb-10">
        <div className="border rounded-xl p-5"><h2 className="font-bold text-xl">Ooty Hill Station Package</h2><p className="text-gray-600 mt-1">Botanical gardens, Ooty Lake and Doddabetta Peak.</p></div>
        <div className="border rounded-xl p-5"><h2 className="font-bold text-xl">Ooty + Coonoor</h2><p className="text-gray-600 mt-1">Extended Nilgiri experience with tea estates.</p></div>
        <div className="border rounded-xl p-5"><h2 className="font-bold text-xl">Ooty Family Package</h2><p className="text-gray-600 mt-1">Relaxed holiday with sightseeing and nature.</p></div>
      </div>
      <a href="https://wa.me/919629879026?text=Hello%20Christ%20Holidays%2C%20I%20am%20interested%20in%20Ooty%20packages." className="inline-flex bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold">Enquire on WhatsApp</a>
    </div>
  );
}
