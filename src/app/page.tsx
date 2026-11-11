import Image from "next/image";
import Link from "next/link";
import { destinations, featuredPackageSlugs, packages } from "@/data/packages";
import TripForm from "@/components/TripForm";
import { whatsappLink } from "@/lib/site";

const trustItems = [
  { icon: "📅", title: "Handpicked Tour Packages" },
  { icon: "🛡️", title: "Trusted & Experienced Team" },
  { icon: "🎧", title: "End-to-End Travel Support" },
  { icon: "👥", title: "Customised Trips for Families, Groups & Corporates" },
];

const whyItems = [
  {
    title: "Carefully planned itineraries",
    text: "Holiday plans shaped around your dates, budget and travel style.",
  },
  {
    title: "Support from start to finish",
    text: "Help with packages, flights, visas and on-trip coordination.",
  },
  {
    title: "For families, groups and corporates",
    text: "Private holidays, honeymoons and group travel, planned with care.",
  },
  {
    title: "Offices you can reach",
    text: "Speak with the team in Salem, Madurai or Thoothukudi.",
  },
];

const polaroids = [
  { name: "Dubai", rotate: "-rotate-6", position: "absolute -left-4 top-4 w-28 sm:w-32", image: destinations[1].image },
  { name: "Kashmir", rotate: "rotate-3", position: "absolute -right-3 top-10 w-28 sm:w-32", image: destinations[0].image },
  { name: "Bali", rotate: "-rotate-3", position: "absolute bottom-4 right-6 w-28 sm:w-36", image: destinations[4].image },
];

export default function Home() {
  const featured = featuredPackageSlugs
    .map((slug) => packages.find((pkg) => pkg.slug === slug))
    .filter((pkg): pkg is NonNullable<typeof pkg> => Boolean(pkg));

  return (
    <div>
      <section className="relative overflow-hidden bg-linear-to-br from-sky via-sky-deep to-white">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-10 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-16">
          <div>
            <h1 className="text-4xl font-bold leading-tight text-navy md:text-5xl lg:text-6xl">
              Plan Your{" "}
              <span className="rounded bg-yellow px-2 text-navy">Next Holiday</span>
              <br />
              with Experts
            </h1>
            <p className="mt-5 text-lg text-slate-700">
              Domestic & International Packages | Honeymoon | Group Tours | Visa & Flight Support
            </p>
            <a
              href={whatsappLink("Hello Christ Holidays, I want instant trip plans.")}
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-yellow px-6 py-3 text-lg font-semibold text-navy shadow-lg transition hover:bg-yellow-dark"
            >
              Get Instant Trip Plans on WhatsApp →
            </a>
          </div>
          <div className="relative mx-auto w-full max-w-xl">
            <div className="overflow-hidden rounded-3xl shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1539635278303-d4002c07eae3?auto=format&fit=crop&w=1200&q=80"
                alt="Couple travelling together in the mountains"
                width={800}
                height={560}
                className="h-[280px] w-full object-cover sm:h-[380px] lg:h-[440px]"
                priority
              />
            </div>
            {polaroids.map((card) => (
              <div key={card.name} className={`polaroid ${card.rotate} ${card.position} hidden sm:block`}>
                <Image src={card.image} alt={card.name} width={200} height={150} className="h-24 w-full object-cover sm:h-28" />
                <p className="mt-1 text-center text-xs font-semibold text-navy">{card.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 -mt-6 px-4">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-2 gap-4 rounded-2xl bg-white p-5 text-center shadow-lg md:grid-cols-4">
            {trustItems.map((item) => (
              <div key={item.title}>
                <span className="text-2xl" aria-hidden="true">{item.icon}</span>
                <p className="mt-1 text-sm font-semibold text-navy">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-end justify-between gap-4">
            <h2 className="text-3xl font-bold text-navy">Explore Top Destinations</h2>
            <Link href="/tour-packages" className="text-sm font-medium text-navy-light hover:text-navy">
              View All Destinations →
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
            {destinations.map((dest) => (
              <Link key={dest.name} href={dest.link} className="group relative overflow-hidden rounded-2xl shadow-md transition hover:shadow-xl">
                <Image src={dest.image} alt={dest.name} width={300} height={200} className="h-44 w-full object-cover transition group-hover:scale-105" />
                <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-3 left-3 text-white">
                  <h3 className="font-bold">{dest.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sky py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-10 text-center text-3xl font-bold text-navy">Why Travel with Christ Holidays?</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyItems.map((item) => (
              <div key={item.title} className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="font-bold text-navy">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-4 text-center sm:flex-row sm:text-left lg:px-8">
          <div>
            <h2 className="text-2xl font-bold text-white md:text-3xl">Need a holiday plan? Chat with us on WhatsApp</h2>
            <p className="mt-1 text-blue-100">Share your destination and dates — the team will help you get started.</p>
          </div>
          <a
            href={whatsappLink("Hello Christ Holidays, I want to plan my trip on WhatsApp.")}
            className="inline-flex shrink-0 items-center rounded-full bg-yellow px-6 py-3 font-semibold text-navy transition hover:bg-yellow-dark"
          >
            Plan Your Trip on WhatsApp →
          </a>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-end justify-between gap-4">
            <h2 className="text-3xl font-bold text-navy">Featured Holiday Packages</h2>
            <Link href="/tour-packages" className="text-sm font-medium text-navy-light hover:text-navy">
              View All Packages →
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((pkg) => (
              <div key={pkg.slug} className="overflow-hidden rounded-2xl bg-white shadow-md transition hover:shadow-xl">
                <div className="relative">
                  <Image src={pkg.image} alt={pkg.title} width={400} height={250} className="h-48 w-full object-cover" />
                  <span className="absolute top-3 left-3 rounded-full bg-yellow px-3 py-1 text-xs font-bold text-navy">
                    {pkg.duration}
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-navy">{pkg.title}</h3>
                  <p className="mt-1 font-semibold text-navy-light">{pkg.price}</p>
                  <div className="mt-3 flex items-center justify-between gap-2 text-sm">
                    <Link href={`/tour-packages/${pkg.slug}`} className="font-medium text-navy hover:underline">
                      View details
                    </Link>
                    <a
                      href={whatsappLink(`Hello Christ Holidays, I am interested in the ${pkg.title} package.`)}
                      className="font-medium text-green-700"
                    >
                      Enquire on WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-slate-500">* Starting prices, subject to dates, availability and confirmation.</p>
        </div>
      </section>

      <section className="bg-linear-to-r from-sky to-white py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="rounded-2xl bg-white p-8 shadow-xl">
            <h2 className="text-2xl font-bold text-navy md:text-3xl">Plan a Custom Trip</h2>
            <p className="mb-6 mt-2 text-slate-600">
              Tell us your travel plans and our team will get in touch with the best options.
            </p>
            <TripForm />
          </div>
        </div>
      </section>
    </div>
  );
}
