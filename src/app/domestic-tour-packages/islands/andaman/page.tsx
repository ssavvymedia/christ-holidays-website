import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Andaman Tour Packages",
  description: "Andaman honeymoon and beach packages with Christ Holidays.",
};

export default function AndamanPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <nav className="text-sm text-gray-500 mb-4"><Link href="/" className="hover:text-blue-700">Home</Link> / Andaman</nav>
      <h1 className="text-4xl font-bold text-blue-900 mb-4">Andaman Tour Packages</h1>
      <p className="text-lg text-gray-700 mb-6">Pristine beaches, water sports and island hopping in the Andaman Islands.</p>
      <div className="space-y-4 mb-10">
        <div className="border rounded-xl p-5"><h2 className="font-bold">Andaman Honeymoon Package</h2></div>
        <div className="border rounded-xl p-5"><h2 className="font-bold">Andaman Family Package</h2></div>
        <div className="border rounded-xl p-5"><h2 className="font-bold">Port Blair – Havelock – Neil Island</h2></div>
      </div>
      <a href="https://wa.me/919629879026?text=Hello%20Christ%20Holidays%2C%20I%20am%20interested%20in%20Andaman%20packages." className="inline-flex bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold">Enquire on WhatsApp</a>
    </div>
  );
}
