import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Munnar Tour Packages | Tea Gardens & Hill Station",
  description: "Munnar packages with Christ Holidays. Tea plantations, waterfalls, cool climate and honeymoon itineraries in Kerala.",
};

export default function MunnarPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <nav className="text-sm text-gray-500 mb-6"><Link href="/" className="hover:text-blue-700">Home</Link> / <Link href="/domestic-tour-packages/south-india" className="hover:text-blue-700">South India</Link> / Munnar</nav>
      <h1 className="text-4xl font-bold text-blue-900 mb-4">Munnar Tour Packages</h1>
      <p className="text-lg text-gray-700 mb-8">Munnar is Kerala’s most popular hill station, famous for endless tea plantations, waterfalls and a cool, refreshing climate.</p>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Top Attractions</h2>
        <ul className="list-disc pl-5 space-y-2 text-gray-700">
          <li>Tea Museum and plantations</li>
          <li>Eravikulam National Park</li>
          <li>Mattupetty Dam and Echo Point</li>
          <li>Attukal Waterfalls</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Package Ideas</h2>
        <div className="space-y-3">
          <div className="border rounded-xl p-5"><h3 className="font-bold">Munnar Hill Package</h3></div>
          <div className="border rounded-xl p-5"><h3 className="font-bold">Munnar Honeymoon</h3></div>
          <div className="border rounded-xl p-5"><h3 className="font-bold">Munnar + Thekkady</h3></div>
        </div>
      </section>

      <section className="bg-blue-50 rounded-2xl p-6">
        <h2 className="text-xl font-bold mb-3">Plan Your Munnar Holiday</h2>
        <a href="https://wa.me/919629879026?text=Hello%20Christ%20Holidays%2C%20I%20am%20interested%20in%20Munnar%20packages." className="inline-flex bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold">Enquire on WhatsApp</a>
      </section>
    </div>
  );
}
