import Link from "next/link";

export default function DomesticPage() {
  const regions = [
    { name: "South India", href: "/domestic-tour-packages/south-india", desc: "Kerala, Tamil Nadu, Karnataka, Andhra Pradesh" },
    { name: "North India", href: "/domestic-tour-packages/north-india", desc: "Kashmir, Himachal, Uttarakhand, Rajasthan" },
    { name: "East India", href: "/domestic-tour-packages/east-india", desc: "Sikkim, Darjeeling, Meghalaya" },
    { name: "Islands", href: "/domestic-tour-packages/islands", desc: "Andaman & Lakshadweep" },
  ];
  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-primary mb-4">Domestic Tour Packages</h1>
      <p className="text-lg text-gray-700 mb-10">Explore India with carefully planned holidays across regions.</p>
      <div className="grid md:grid-cols-2 gap-6">
        {regions.map(r => (
          <Link key={r.name} href={r.href} className="block border rounded-2xl p-6 hover:shadow-lg hover:border-primary transition">
            <h2 className="text-2xl font-bold">{r.name}</h2>
            <p className="text-gray-600 mt-2">{r.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
