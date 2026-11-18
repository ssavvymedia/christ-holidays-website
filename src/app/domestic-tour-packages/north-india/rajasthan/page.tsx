import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Rajasthan Tour Packages",
  description: "Jaipur, Udaipur, Jaisalmer royal packages with Christ Holidays.",
};

export default function RajasthanPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <nav className="text-sm text-gray-500 mb-4"><Link href="/" className="hover:text-blue-700">Home</Link> / <Link href="/domestic-tour-packages/north-india" className="hover:text-blue-700">North India</Link> / Rajasthan</nav>
      <h1 className="text-4xl font-bold text-blue-900 mb-4">Rajasthan Tour Packages</h1>
      <p className="text-lg text-gray-700 mb-6">Royal palaces, deserts, forts and vibrant culture of Rajasthan.</p>
      <div className="grid sm:grid-cols-2 gap-6 mb-10">
        <div className="border rounded-2xl p-6"><h2 className="font-bold text-xl">Jaipur City Package</h2></div>
        <div className="border rounded-2xl p-6"><h2 className="font-bold text-xl">Udaipur Romantic</h2></div>
        <div className="border rounded-2xl p-6"><h2 className="font-bold text-xl">Jaisalmer Desert</h2></div>
        <div className="border rounded-2xl p-6"><h2 className="font-bold text-xl">Golden Triangle (Delhi – Agra – Jaipur)</h2></div>
      </div>
      <a href="https://wa.me/919629879026?text=Hello%20Christ%20Holidays%2C%20I%20am%20interested%20in%20Rajasthan%20packages." className="inline-flex bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold">Enquire on WhatsApp</a>
    </div>
  );
}
