import { packages } from "@/data/packages";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export function generateStaticParams() {
  return packages.map((pkg) => ({ slug: pkg.slug }));
}

export default function PackagePage({ params }: { params: { slug: string } }) {
  const pkg = packages.find((p) => p.slug === params.slug);
  if (!pkg) notFound();

  const whatsappMessage = encodeURIComponent(
    `Hello Christ Holidays, I am interested in the ${pkg.title} package. Please share the itinerary, inclusions, final price and availability.`
  );

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-primary">Home</Link> / <Link href="/tour-packages" className="hover:text-primary">Packages</Link> / {pkg.title}
      </nav>
      <Image src={pkg.image} alt={pkg.title} width={900} height={500} className="w-full h-80 object-cover rounded-2xl mb-6" />
      <h1 className="text-4xl font-bold">{pkg.title}</h1>
      <p className="text-xl text-primary mt-2">{pkg.destination} • {pkg.duration}</p>
      <p className="mt-4 text-gray-700">{pkg.overview}</p>
      <h2 className="text-2xl font-bold mt-10 mb-4">Highlights</h2>
      <ul className="list-disc list-inside space-y-1 text-gray-700">
        {pkg.highlights.map((h) => <li key={h}>{h}</li>)}
      </ul>
      <h2 className="text-2xl font-bold mt-10 mb-4">Day-wise Itinerary</h2>
      <div className="space-y-6">
        {pkg.itinerary.map((day) => (
          <div key={day.day} className="border-l-4 border-primary pl-4">
            <h3 className="font-semibold">Day {day.day}: {day.title}</h3>
            <p className="text-gray-700 mt-1">{day.description}</p>
          </div>
        ))}
      </div>
      <div className="mt-10 bg-white rounded-2xl shadow-xl p-6">
        <p className="text-3xl font-bold text-primary">{pkg.price}</p>
        <p className="text-xs text-gray-500 mt-1">Contact us for a verified quote.</p>
        <a href={`https://wa.me/919629879026?text=${whatsappMessage}`} className="mt-6 inline-block bg-accent text-black px-6 py-3 rounded-full font-semibold">Enquire on WhatsApp</a>
      </div>
    </div>
  );
}
