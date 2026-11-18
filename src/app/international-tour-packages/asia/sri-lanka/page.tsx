import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sri Lanka Tour Packages",
  description: "Sri Lanka cultural and beach packages with Christ Holidays.",
};

export default function SriLankaPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <nav className="text-sm text-gray-500 mb-4"><Link href="/" className="hover:text-blue-700">Home</Link> / <Link href="/international-tour-packages/asia" className="hover:text-blue-700">Asia</Link> / Sri Lanka</nav>
      <h1 className="text-4xl font-bold text-blue-900 mb-4">Sri Lanka Tour Packages</h1>
      <p className="text-lg text-gray-700 mb-6">Isle of Serenity – ancient cities, tea country, wildlife and golden beaches.</p>
      <div className="space-y-4 mb-10">
        <div className="border rounded-xl p-5"><h2 className="font-bold text-xl">Sri Lanka Cultural Triangle</h2><p className="text-gray-600 mt-1">Sigiriya, Kandy and ancient cities.</p></div>
        <div className="border rounded-xl p-5"><h2 className="font-bold text-xl">Sri Lanka Beach + Hill Country</h2><p className="text-gray-600 mt-1">Bentota or Mirissa combined with Nuwara Eliya.</p></div>
        <div className="border rounded-xl p-5"><h2 className="font-bold text-xl">Sri Lanka Honeymoon Package</h2><p className="text-gray-600 mt-1">Romantic combination of beaches and tea estates.</p></div>
      </div>
      <a href="https://wa.me/919629879026?text=Hello%20Christ%20Holidays%2C%20I%20am%20interested%20in%20Sri%20Lanka%20packages." className="inline-flex bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold">Enquire on WhatsApp</a>
    </div>
  );
}
