import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import EnquiryBand from "@/components/EnquiryBand";
import JsonLd from "@/components/JsonLd";
import PageIntro from "@/components/PageIntro";
import { packages } from "@/data/packages";
import { pageMetadata } from "@/lib/seo";
import { SITE_URL } from "@/lib/site";

export function generateStaticParams() {
  return packages.map((pkg) => ({ slug: pkg.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const pkg = packages.find((item) => item.slug === slug);
  if (!pkg) return {};
  return pageMetadata({
    title: `${pkg.title} (${pkg.duration})`,
    description: `${pkg.overview} Enquire for the price with Christ Holidays & Travels in Salem, Madurai or Thoothukudi.`,
    path: `/tour-packages/${pkg.slug}`,
  });
}

export default async function PackagePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const pkg = packages.find((item) => item.slug === slug);
  if (!pkg) notFound();

  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Sample Packages", path: "/tour-packages" },
    { name: pkg.title, path: `/tour-packages/${pkg.slug}` },
  ];

  const trip = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: pkg.title,
    description: pkg.overview,
    touristType: "Leisure travellers",
    provider: { "@id": `${SITE_URL}/#organization` },
    itinerary: {
      "@type": "ItemList",
      itemListElement: pkg.itinerary.map((day) => ({
        "@type": "ListItem",
        position: day.day,
        name: `Day ${day.day}: ${day.title}`,
        description: day.description,
      })),
    },
  };

  return (
    <article>
      <JsonLd data={trip} />
      <PageIntro crumbs={crumbs} eyebrow={pkg.region} title={pkg.title} intro={`${pkg.destination} · ${pkg.duration}. This is a sample outline. Enquire for the price.`} />
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
        <Image src={pkg.image} alt={pkg.imageAlt} width={1200} height={700} priority sizes="(min-width: 1024px) 960px, 100vw" className="h-72 w-full rounded-3xl object-cover sm:h-96" />
        <p className="mt-8 text-lg leading-relaxed text-slate-700">{pkg.overview}</p>
        <p className="mt-4 text-xl font-extrabold text-navy">Enquire for price</p>
        <p className="mt-2 text-sm text-slate-700">
          The destination page is{" "}
          <Link href={pkg.destinationPath} className="font-semibold text-navy underline">
            {pkg.destination}
          </Link>
          .
        </p>

        <h2 className="mt-10 text-2xl font-extrabold text-navy">Highlights</h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-700">
          {pkg.highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <h2 className="mt-10 text-2xl font-extrabold text-navy">Sample outline</h2>
        <p className="mt-3 text-slate-700">Days move if ferries, flights or your own preferences change. The quote is the version that gets booked.</p>
        <ol className="mt-6 space-y-5">
          {pkg.itinerary.map((day) => (
            <li key={day.day} className="border-l-4 border-yellow pl-4">
              <p className="font-extrabold text-navy">
                Day {day.day}: {day.title}
              </p>
              <p className="mt-1 text-slate-700">{day.description}</p>
            </li>
          ))}
        </ol>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <section className="rounded-2xl bg-sky/60 p-5">
            <h2 className="text-xl font-extrabold text-navy">Often included</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-700">
              {pkg.inclusions.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
          <section className="rounded-2xl bg-white p-5 ring-1 ring-slate-100">
            <h2 className="text-xl font-extrabold text-navy">Often extra</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-700">
              {pkg.exclusions.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        </div>
      </div>
      <EnquiryBand
        title={`Ask for a ${pkg.destination} quote`}
        text="Mention this sample so the team can start from it, then change anything that does not fit."
        message={`Hello Christ Holidays, I am interested in the ${pkg.title}. Please share the final plan and the price.`}
      />
    </article>
  );
}
