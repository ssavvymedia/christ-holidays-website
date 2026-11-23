import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import EnquiryBand from "@/components/EnquiryBand";
import JsonLd from "@/components/JsonLd";
import PageIntro from "@/components/PageIntro";
import { packages } from "@/data/packages";
import { pageMetadata } from "@/lib/seo";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Sample Tour Packages",
  description: "Sample day-by-day holiday outlines from Christ Holidays & Travels. Prices are not listed. Enquire from the Salem, Madurai or Thoothukudi office.",
  path: "/tour-packages",
});

export default function TourPackagesPage() {
  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Sample tour packages",
    itemListElement: packages.map((pkg, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: pkg.title,
      url: `${SITE_URL}/tour-packages/${pkg.slug}`,
    })),
  };

  return (
    <article>
      <JsonLd data={itemList} />
      <PageIntro
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Sample Packages", path: "/tour-packages" },
        ]}
        eyebrow="Outlines, not fares"
        title="Sample tour packages"
        intro="Each package is a sample outline the team can adapt. Hotels and the price are confirmed only after you enquire with the Salem, Madurai or Thoothukudi office."
      />
      <section className="py-14">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 lg:px-8">
          {packages.map((pkg) => (
            <Link key={pkg.slug} href={`/tour-packages/${pkg.slug}`} className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-100 transition hover:-translate-y-0.5 hover:shadow-md">
              <Image
                src={pkg.image}
                alt={pkg.imageAlt}
                width={800}
                height={500}
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="h-48 w-full object-cover"
              />
              <div className="p-5">
                <h2 className="text-xl font-extrabold text-navy group-hover:underline">{pkg.title}</h2>
                <p className="mt-1 text-sm text-slate-700">
                  {pkg.destination} · {pkg.duration}
                </p>
                <p className="mt-3 text-sm font-semibold text-navy">Enquire for price</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <EnquiryBand
        title="Want a different route?"
        text="The samples are a starting point. Describe the trip you actually want."
        message="Hello Christ Holidays, I would like a quote based on one of your sample packages."
      />
    </article>
  );
}
