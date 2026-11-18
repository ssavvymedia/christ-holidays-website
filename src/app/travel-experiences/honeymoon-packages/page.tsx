import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Honeymoon Packages | Kerala, Kashmir, Dubai, Bali & More",
  description: "Romantic honeymoon packages with Christ Holidays. Customised itineraries for Kerala, Kashmir, Dubai, Bali, Maldives and Andaman.",
};

export default function HoneymoonPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-blue-900 mb-4">Honeymoon Packages</h1>
      <p className="text-lg text-gray-700 mb-8">Celebrate your special moments with thoughtfully planned romantic getaways. From private houseboats in Kerala to luxury stays in Dubai and Bali, we create personalised honeymoon itineraries.</p>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Popular Honeymoon Destinations</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <Link href="/domestic-tour-packages/south-india/kerala" className="border rounded-xl p-5 hover:shadow-md"><h3 className="font-bold">Kerala Honeymoon</h3></Link>
          <Link href="/domestic-tour-packages/north-india/kashmir" className="border rounded-xl p-5 hover:shadow-md"><h3 className="font-bold">Kashmir Honeymoon</h3></Link>
          <Link href="/international-tour-packages/middle-east/dubai" className="border rounded-xl p-5 hover:shadow-md"><h3 className="font-bold">Dubai Honeymoon</h3></Link>
          <Link href="/international-tour-packages/asia/bali" className="border rounded-xl p-5 hover:shadow-md"><h3 className="font-bold">Bali Honeymoon</h3></Link>
          <Link href="/international-tour-packages/asia/maldives" className="border rounded-xl p-5 hover:shadow-md"><h3 className="font-bold">Maldives Honeymoon</h3></Link>
          <Link href="/domestic-tour-packages/islands/andaman" className="border rounded-xl p-5 hover:shadow-md"><h3 className="font-bold">Andaman Honeymoon</h3></Link>
        </div>
      </section>

      <section className="bg-blue-50 rounded-2xl p-6">
        <h2 className="text-xl font-bold mb-3">Plan Your Honeymoon</h2>
        <p className="text-gray-700 mb-4">Share your preferred destination and travel dates. We will design a romantic itinerary just for you.</p>
        <a href="https://wa.me/919629879026?text=Hello%20Christ%20Holidays%2C%20we%20are%20planning%20our%20honeymoon." className="inline-flex bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold">Plan on WhatsApp</a>
      </section>
    </div>
  );
}
