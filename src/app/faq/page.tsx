import type { Metadata } from "next";
import EnquiryBand from "@/components/EnquiryBand";
import FaqAccordion from "@/components/home/FaqAccordion";
import JsonLd from "@/components/JsonLd";
import PageIntro from "@/components/PageIntro";
import { faqLd, pageMetadata } from "@/lib/seo";
import { faqs } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Holiday Planning FAQs",
  description: "Answers about enquiries, prices, visas, flights, offices in Salem, Madurai and Thoothukudi, and how Christ Holidays & Travels confirms a holiday.",
  path: "/faq",
});

export default function FaqPage() {
  return (
    <article>
      <JsonLd data={faqLd(faqs)} />
      <PageIntro
        crumbs={[
          { name: "Home", path: "/" },
          { name: "FAQs", path: "/faq" },
        ]}
        eyebrow="Before you enquire"
        title="Frequently asked questions"
        intro="Practical answers for travellers contacting the Salem, Madurai or Thoothukudi office. Prices are not listed on the website."
      />
      <section className="py-14">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <FaqAccordion items={faqs} />
        </div>
      </section>
      <EnquiryBand
        title="Still deciding?"
        text="Send the destination and the dates. A person at the office replies with options and a price."
        message="Hello Christ Holidays, I have a question about planning a holiday."
      />
    </article>
  );
}
