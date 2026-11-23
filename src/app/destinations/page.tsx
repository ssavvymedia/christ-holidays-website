import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import EnquiryBand from "@/components/EnquiryBand";
import PageIntro from "@/components/PageIntro";
import { destinationCards } from "@/data/destinations";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Holiday Destinations",
  description: "Destinations planned by Christ Holidays & Travels: Kerala, Kashmir, Goa, Ooty, Dubai, Singapore, Bali and more. Enquire for the price from Salem, Madurai or Tuticorin.",
  path: "/destinations",
});

export default function DestinationsPage() {
  return (
    <article>
      <PageIntro
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Destinations", path: "/destinations" },
        ]}
        eyebrow="Where you can go"
        title="Destinations"
        intro="Each card opens a page about that place. The pages describe the kind of trip that can be planned. They do not list a confirmed price."
      />
      <section className="py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-navy">Domestic</h2>
          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {destinationCards
              .filter((card) => card.region === "domestic")
              .map((card) => (
                <DestinationTile key={card.name} card={card} />
              ))}
          </div>
          <h2 className="mt-12 text-2xl font-extrabold text-navy">International</h2>
          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {destinationCards
              .filter((card) => card.region === "international")
              .map((card) => (
                <DestinationTile key={card.name} card={card} />
              ))}
          </div>
        </div>
      </section>
      <EnquiryBand
        title="A place that is not listed?"
        text="Name it in a message. The team will say whether the trip can be planned, then enquire for the price."
        message="Hello Christ Holidays, I would like to ask about a destination that is not listed on the website."
      />
    </article>
  );
}

function DestinationTile({ card }: { card: (typeof destinationCards)[number] }) {
  return (
    <Link href={card.link} className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-100 transition hover:-translate-y-0.5 hover:shadow-md">
      {card.image ? (
        <Image src={card.image} alt={`${card.name}: ${card.tagline}`} width={800} height={500} className="h-44 w-full object-cover" sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" />
      ) : (
        <div className="flex h-44 items-end bg-navy p-4 text-white">
          <span className="text-lg font-extrabold">{card.name}</span>
        </div>
      )}
      <div className="p-5">
        <h3 className="text-xl font-extrabold text-navy group-hover:underline">{card.name}</h3>
        <p className="mt-1 text-sm font-semibold text-navy">{card.tagline}</p>
        <p className="mt-2 text-sm leading-relaxed text-slate-700">{card.summary}</p>
        <p className="mt-3 text-sm font-semibold text-navy">Enquire for price</p>
      </div>
    </Link>
  );
}
