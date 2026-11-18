import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Malaysia Tour Packages",
  description: "Kuala Lumpur, Penang, Langkawi packages with Christ Holidays.",
};

export default function MalaysiaPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <nav className="text-sm text-gray-500 mb-4"><Link href="/" className="hover:text-blue-700">Home</Link> / <Link href="/international-tour-packages/asia" className="hover:text-blue-700">Asia</Link> / Malaysia</nav>
      <h1 className="text-4xl font-bold text-blue-900 mb-4">Malaysia Tour Packages</h1>
      <p className="text-lg text-gray-700 mb-6">Modern cities, tropical islands and cultural heritage – Kuala Lumpur, Penang and Langkawi.</p>
      <div className="grid sm:grid-cols-2 gap-6 mb-10">
        <div className="border rounded-2xl p-6"><h2 className="font-bold text-xl">Kuala Lumpur City Package</h2><p className="text-gray-600 mt-1">Petronas Towers, shopping and city tours.</p></div>
        <div className="border rounded-2xl p-6"><h2 className="font-bold text-xl">Langkawi Island Package</h2><p className="text-gray-600 mt-1">Beaches, cable car and island hopping.</p></div>
        <div className="border rounded-2xl p-6"><h2 className="font-bold text-xl">Penang Heritage</h2><p className="text-gray-600 mt-1">George Town culture and street food.</p></div>
        <div className="border rounded-2xl p-6"><h2 className="font-bold text-xl">Singapore + Malaysia</h2><p className="text-gray-600 mt-1">Popular dual destination itinerary.</p></div>
      </div>
      <a href="https://wa.me/919629879026?text=Hello%20Christ%20Holidays%2C%20I%20am%20interested%20in%20Malaysia%20packages." className="inline-flex bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold">Enquire on WhatsApp</a>
    </div>
  );
}
