import type { Metadata } from "next";
import EnquiryBand from "@/components/EnquiryBand";
import PageIntro from "@/components/PageIntro";
import { pageMetadata } from "@/lib/seo";
import Link from "next/link";

export const metadata: Metadata = pageMetadata({
  title: "Flights, Hotels and Visa Assistance",
  description: "Flight booking, hotel booking and visa guidance from Christ Holidays & Travels in Salem, Madurai and Thoothukudi. Services are confirmed in a quote. Enquire for the price.",
  path: "/travel-services",
});

const services = [
  {
    id: "flights",
    title: "Flight booking",
    text: "The team can look up domestic and international flights around your holiday dates. You see the options before anything is ticketed. Group travel can be requested from the airline. A special group fare is not promised until the airline confirms it.",
  },
  {
    id: "hotels",
    title: "Hotel booking",
    text: "Hotels are shortlisted to the area, the budget and the kind of trip you described, then confirmed with you. Names and rates sit in the quotation, not on this page.",
  },
  {
    id: "visa",
    title: "Visa assistance",
    text: "For international trips the team can explain which documents are usually required and how appointments work. You submit the application. The embassy or authority decides the result. A visa is not guaranteed.",
  },
  {
    id: "custom",
    title: "Customised holidays",
    text: "If the published destination pages do not match the trip, describe it. The Salem, Madurai or Thoothukudi office will say whether it can be planned and will enquire for the price.",
  },
  {
    id: "insurance",
    title: "Travel insurance",
    text: "Travel insurance can be discussed while the holiday is being planned. This page does not sell a named policy or quote a premium. Any policy is chosen with you and confirmed in writing.",
  },
];

export default function TravelServicesPage() {
  return (
    <article>
      <PageIntro
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Travel Services", path: "/travel-services" },
        ]}
        eyebrow="Alongside your holiday"
        title="Travel services"
        intro="Flights, hotels and visa guidance from the same Christ Holidays & Travels offices that plan the holiday. Each item is priced in the quote. Nothing below is a confirmed fare."
      />
      <section className="py-14">
        <div className="mx-auto max-w-3xl space-y-10 px-4 sm:px-6">
          {services.map((service) => (
            <section key={service.id} id={service.id} className="scroll-mt-56">
              <h2 className="text-2xl font-extrabold text-navy">{service.title}</h2>
              <p className="mt-3 leading-relaxed text-slate-700">{service.text}</p>
            </section>
          ))}
          <p className="text-slate-700">
            Honeymoon, group and corporate trips use these services too. See{" "}
            <Link href="/travel-experiences/honeymoon-packages" className="font-semibold text-navy underline">
              honeymoon packages
            </Link>
            ,{" "}
            <Link href="/travel-experiences/group-tours" className="font-semibold text-navy underline">
              group tours
            </Link>{" "}
            and{" "}
            <Link href="/travel-experiences/corporate-tours" className="font-semibold text-navy underline">
              corporate tours
            </Link>
            .
          </p>
        </div>
      </section>
      <EnquiryBand
        title="Ask for flights, a hotel or visa guidance"
        text="Say what you need and the dates. The reply will separate optional items from the holiday price."
        message="Hello Christ Holidays, I need help with flights, hotels or a visa."
      />
    </article>
  );
}
