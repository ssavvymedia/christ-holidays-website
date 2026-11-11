import Link from "next/link";
import Image from "next/image";
import { packages } from "@/data/packages";

export default function TourPackagesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-primary mb-2">Tour Packages</h1>
      <p className="text-gray-600 mb-10">Prices shown as “Request a Quote” until confirmed by the business.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {packages.map((pkg) => (
          <Link key={pkg.slug} href={`/tour-packages/${pkg.slug}`} className="group bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition">
            <Image src={pkg.image} alt={pkg.title} width={500} height={300} className="w-full h-52 object-cover group-hover:scale-105 transition" />
            <div className="p-5">
              <h2 className="font-bold text-xl group-hover:text-primary">{pkg.title}</h2>
              <p className="text-sm text-gray-500 mt-1">{pkg.destination} • {pkg.duration}</p>
              <p className="text-primary font-semibold mt-2">{pkg.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
