import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Thailand Tour Packages | Bangkok, Phuket & Pattaya",
  description: "Thailand packages with Christ Holidays. Beaches, temples, nightlife and family-friendly itineraries for Bangkok, Phuket and Pattaya.",
};

export default function ThailandPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <nav className="text-sm text-gray-500 mb-6"><Link href="/" className="hover:text-blue-700">Home</Link> / <Link href="/international-tour-packages/asia" className="hover:text-blue-700">Asia</Link> / Thailand</nav>
      <h1 className="text-4xl font-bold text-blue-900 mb-4">Thailand Tour Packages</h1>
      <p className="text-lg text-gray-700 mb-8">From the vibrant streets of Bangkok to the beaches of Phuket and Pattaya, Thailand offers culture, adventure and relaxation in one destination.</p>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Popular Combinations</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="border rounded-xl p-5"><h3 className="font-bold">Bangkok + Pattaya</h3></div>
          <div className="border rounded-xl p-5"><h3 className="font-bold">Phuket Beach Package</h3></div>
          <div className="border rounded-xl p-5"><h3 className="font-bold">Thailand Honeymoon</h3></div>
          <div className="border rounded-xl p-5"><h3 className="font-bold">Thailand Family Package</h3></div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Best Time to Visit</h2>
        <p className="text-gray-700">November to February offers the most pleasant weather across most regions.</p>
      </section>

      <section className="bg-blue-50 rounded-2xl p-6">
        <h2 className="text-xl font-bold mb-3">Plan Your Thailand Holiday</h2>
        <a href="https://wa.me/919629879026?text=Hello%20Christ%20Holidays%2C%20I%20am%20interested%20in%20Thailand%20packages." className="inline-flex bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold">Enquire on WhatsApp</a>
      </section>
    </div>
  );
}
