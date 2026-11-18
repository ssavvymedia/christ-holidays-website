import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "North India Tour Packages",
  description: "Kashmir, Himachal, Uttarakhand, Rajasthan and more with Christ Holidays.",
};

export default function NorthIndiaPage() {
  const places = [
    { name: "Kashmir", href: "/domestic-tour-packages/north-india/kashmir" },
    { name: "Himachal Pradesh", href: "#" },
    { name: "Uttarakhand", href: "#" },
    { name: "Rajasthan", href: "#" },
    { name: "Uttar Pradesh", href: "#" },
    { name: "Punjab", href: "#" },
  ];
  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-blue-900 mb-4">North India Tour Packages</h1>
      <p className="text-lg text-gray-700 mb-8">Experience the majestic mountains, deserts, spiritual centres and royal heritage of North India.</p>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {places.map((p) => (
          <Link key={p.name} href={p.href} className="border rounded-xl p-5 text-center font-medium hover:border-blue-800 hover:shadow-md transition">
            {p.name}
          </Link>
        ))}
      </div>
      <a href="https://wa.me/919629879026?text=Hello%20Christ%20Holidays%2C%20I%20am%20interested%20in%20North%20India%20packages." className="mt-10 inline-flex bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold">Enquire on WhatsApp</a>
    </div>
  );
}
