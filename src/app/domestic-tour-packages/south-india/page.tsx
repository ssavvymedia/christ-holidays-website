import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "South India Tour Packages",
  description: "Explore South India with Christ Holidays – Kerala, Tamil Nadu, Karnataka, Andhra Pradesh and more.",
};

export default function SouthIndiaPage() {
  const destinations = [
    { name: "Kerala", desc: "Backwaters, hills, beaches and Ayurveda", href: "/domestic-tour-packages/south-india/kerala" },
    { name: "Tamil Nadu", desc: "Temples, hill stations and cultural heritage", href: "#" },
    { name: "Karnataka", desc: "Palaces, waterfalls and wildlife", href: "#" },
    { name: "Andhra Pradesh & Telangana", desc: "Ancient temples and modern cities", href: "#" },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-blue-900 mb-4">South India Tour Packages</h1>
      <p className="text-lg text-gray-700 mb-8">
        Discover the rich culture, lush landscapes and spiritual heritage of South India with carefully planned holidays from Christ Holidays.
      </p>
      <div className="grid md:grid-cols-2 gap-6">
        {destinations.map((d) => (
          <Link key={d.name} href={d.href} className="block border rounded-2xl p-6 hover:shadow-lg hover:border-blue-800 transition">
            <h2 className="text-2xl font-bold">{d.name}</h2>
            <p className="text-gray-600 mt-2">{d.desc}</p>
          </Link>
        ))}
      </div>
      <div className="mt-12 bg-blue-50 rounded-2xl p-8">
        <h2 className="text-2xl font-bold mb-4">Why Choose South India with Us</h2>
        <ul className="space-y-2 text-gray-700">
          <li>• Customised itineraries for families, groups and honeymooners</li>
          <li>• Trusted hotels and reliable transfers</li>
          <li>• Local support from Salem, Madurai and Thoothukudi offices</li>
        </ul>
        <a href="https://wa.me/919629879026?text=Hello%20Christ%20Holidays%2C%20I%20am%20interested%20in%20South%20India%20packages." className="mt-6 inline-flex bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold">Enquire on WhatsApp</a>
      </div>
    </div>
  );
}
