import { packages } from "@/data/packages";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { whatsappLink } from "@/lib/site";

export function generateStaticParams() {
  return packages.map((pkg) => ({ slug: pkg.slug }));
}

export default async function PackagePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const pkg = packages.find((p) => p.slug === slug);
  if (!pkg) notFound();

  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <nav className="mb-6 text-sm text-gray-500">
        <Link href="/" className="hover:text-navy">Home</Link> / <Link href="/tour-packages" className="hover:text-navy">Packages</Link> / {pkg.title}
      </nav>
      <Image src={pkg.image} alt={pkg.title} width={900} height={500} className="mb-6 h-80 w-full rounded-2xl object-cover" />
      <h1 className="text-4xl font-bold text-navy">{pkg.title}</h1>
      <p className="mt-2 text-xl text-navy-light">{pkg.destination} • {pkg.duration}</p>
      <p className="mt-4 text-gray-700">{pkg.overview}</p>
      <h2 className="mt-10 mb-4 text-2xl font-bold text-navy">Highlights</h2>
      <ul className="list-inside list-disc space-y-1 text-gray-700">
        {pkg.highlights.map((h) => <li key={h}>{h}</li>)}
      </ul>
      <h2 className="mt-10 mb-4 text-2xl font-bold text-navy">Day-wise Itinerary</h2>
      <div className="space-y-6">
        {pkg.itinerary.map((day) => (
          <div key={day.day} className="border-l-4 border-navy pl-4">
            <h3 className="font-semibold">Day {day.day}: {day.title}</h3>
            <p className="mt-1 text-gray-700">{day.description}</p>
          </div>
        ))}
      </div>
      <div className="mt-10 rounded-2xl bg-white p-6 shadow-xl">
        <p className="text-3xl font-bold text-navy">{pkg.price}</p>
        <p className="mt-1 text-xs text-gray-500">Prices marked with * are starting prices and subject to confirmation.</p>
        <a href={whatsappLink(`Hello Christ Holidays, I am interested in the ${pkg.title} package. Please share the itinerary, inclusions, final price and availability.`)} className="mt-6 inline-block rounded-full bg-yellow px-6 py-3 font-semibold text-navy">
          Enquire on WhatsApp
        </a>
      </div>
    </div>
  );
}
