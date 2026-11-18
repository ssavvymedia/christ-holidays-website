import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Asia Tour Packages",
  description: "Singapore, Thailand, Malaysia, Bali, Vietnam, Japan and more.",
};

export default function AsiaPage() {
  const destinations = [
    { name: "Bali", href: "/international-tour-packages/asia/bali" },
    { name: "Singapore", href: "/international-tour-packages/asia/singapore" },
    { name: "Thailand", href: "/international-tour-packages/asia/thailand" },
    { name: "Malaysia", href: "#" },
    { name: "Vietnam", href: "#" },
    { name: "Japan", href: "#" },
    { name: "Sri Lanka", href: "#" },
    { name: "Maldives", href: "#" },
  ];
  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-blue-900 mb-4">Asia Tour Packages</h1>
      <p className="text-lg text-gray-700 mb-8">Explore the vibrant cities, beaches, culture and adventure of Asia with Christ Holidays.</p>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {destinations.map((d) => (
          <Link key={d.name} href={d.href} className="border rounded-xl p-5 text-center font-medium hover:border-blue-800 hover:shadow-md transition">
            {d.name}
          </Link>
        ))}
      </div>
      <a href="https://wa.me/919629879026?text=Hello%20Christ%20Holidays%2C%20I%20am%20interested%20in%20Asia%20packages." className="mt-10 inline-flex bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold">Enquire on WhatsApp</a>
    </div>
  );
}
