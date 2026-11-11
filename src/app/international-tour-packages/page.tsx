import Link from "next/link";

export default function InternationalPage() {
  const regions = [
    { name: "Asia", href: "/international-tour-packages/asia" },
    { name: "Middle East", href: "/international-tour-packages/middle-east" },
    { name: "Europe", href: "/international-tour-packages/europe" },
    { name: "Africa", href: "/international-tour-packages/africa" },
    { name: "Americas", href: "/international-tour-packages/americas" },
  ];
  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-primary mb-4">International Tour Packages</h1>
      <p className="text-lg text-gray-700 mb-10">Discover the world with Christ Holidays.</p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {regions.map(r => (
          <Link key={r.name} href={r.href} className="block border rounded-2xl p-6 hover:shadow-lg hover:border-primary transition">
            <h2 className="text-2xl font-bold">{r.name}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
}
