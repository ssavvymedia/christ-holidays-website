import type { Metadata } from "next";
import PageIntro from "@/components/PageIntro";
import { pageMetadata } from "@/lib/seo";
import { EMAIL, LEGAL_NAME } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Terms and Conditions",
  description: "Terms for enquiries and bookings with Christ Holidays & Travels. Website pages are not confirmed prices. The quotation you accept is the booking.",
  path: "/legal/terms-and-conditions",
});

export default function TermsPage() {
  return (
    <article>
      <PageIntro
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Terms and Conditions", path: "/legal/terms-and-conditions" },
        ]}
        title="Terms and Conditions"
        intro={`These terms apply to holiday enquiries and bookings with ${LEGAL_NAME}. They are written for travellers dealing with the Salem, Madurai and Thoothukudi offices.`}
      />
      <div className="mx-auto max-w-3xl space-y-8 px-4 py-14 text-slate-700 sm:px-6">
        <p className="text-sm text-slate-600">Last updated: November 2026</p>
        <section>
          <h2 className="text-2xl font-extrabold text-navy">The website is not a price list</h2>
          <p className="mt-3 leading-relaxed">
            Destination pages and sample outlines describe the kind of trip that can be planned. They are not an offer to sell a seat at a stated fare. Enquire for the price. The quotation you receive, and then accept, is the document that names the price, the hotels and what is included.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-extrabold text-navy">Our role</h2>
          <p className="mt-3 leading-relaxed">
            We plan the trip and book suppliers such as hotels, airlines and transport operators. Those suppliers deliver their own services. We are not the hotel or the airline.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-extrabold text-navy">Quotations and confirmation</h2>
          <p className="mt-3 leading-relaxed">
            A quote is valid for the dates written on it and depends on availability. A booking starts when you accept the quote and pay the amount the quote asks for. This website does not take card payments.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-extrabold text-navy">Changes, delays and cancellations</h2>
          <p className="mt-3 leading-relaxed">
            Cancellation and amendment charges follow the suppliers named in your quotation. Those charges are not a single percentage on this page, because they differ by hotel, airline and season. Weather, road closures, airline changes and permit rules can force a change of plan. We will tell you what the supplier offers as an alternative.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-extrabold text-navy">Passports, visas and travel rules</h2>
          <p className="mt-3 leading-relaxed">
            You are responsible for a valid passport, visas and any health requirements for the destination. We can explain typical documents and appointment steps. We do not decide visa applications and do not guarantee approval.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-extrabold text-navy">Liability</h2>
          <p className="mt-3 leading-relaxed">
            We are responsible for the planning work we agree to do. We are not liable for injury, delay or loss caused by a hotel, airline, transport operator or other supplier, or by events outside anyone’s reasonable control. Supplier terms apply to the service they provide.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-extrabold text-navy">Law</h2>
          <p className="mt-3 leading-relaxed">
            These terms are governed by the laws of India. Questions about a booking can be sent to the office that confirmed it, or to{" "}
            <a className="font-semibold text-navy underline" href={`mailto:${EMAIL}`}>
              {EMAIL}
            </a>
            .
          </p>
        </section>
      </div>
    </article>
  );
}
