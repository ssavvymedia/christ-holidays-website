import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dubai Tour Packages",
  description: "Dubai city, desert safari and luxury packages with Christ Holidays.",
};

export default function DubaiPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <nav className="text-sm text-gray-500 mb-4"><Link href="/" className="hover:text-blue-700">Home</Link> / <Link href="/international-tour-packages/middle-east" className="hover:text-blue-700">Middle East</Link> / Dubai</nav>
      <h1 className="text-4xl font-bold text-blue-900 mb-4">Dubai Tour Packages</h1>
      <p className="text-lg text-gray-700 mb-6">Modern luxury, Burj Khalifa, desert safari, shopping and family attractions.</p>
      <div className="grid sm:grid-cols-2 gap-6 mb-10">
        <div className="border rounded-2xl p-6"><h2 className="font-bold text-xl">Dubai City Package</h2></div>
        <div className="border rounded-2xl p-6"><h2 className="font-bold text-xl">Dubai + Abu Dhabi</h2></div>
        <div className="border rounded-2xl p-6"><h2 className="font-bold text-xl">Dubai Honeymoon</h2></div>
        <div className="border rounded-2xl p-6"><h2 className="font-bold text-xl">Desert Safari Special</h2></div>
      </div>
      <a href="https://wa.me/919629879026?text=Hello%20Christ%20Holidays%2C%20I%20am%20interested%20in%20Dubai%20packages." className="inline-flex bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold">Enquire on WhatsApp</a>
    </div>
  );
}
