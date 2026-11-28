import type { Metadata } from "next";
import EnquiryBand from "@/components/EnquiryBand";
import EnquiryForm from "@/components/EnquiryForm";
import PageIntro from "@/components/PageIntro";
import { pageMetadata } from "@/lib/seo";
import { branches, EMAIL, WHATSAPP_DISPLAY, whatsappLink } from "@/lib/site";
import Link from "next/link";

export const metadata: Metadata = pageMetadata({
  title: "Contact Christ Holidays & Travels",
  description: "Contact the Christ Holidays & Travels offices in Salem, Madurai and Thoothukudi (Tuticorin). Call, WhatsApp +91 96298 79026, or email christholidaystravels@gmail.com.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <article>
      <PageIntro
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ]}
        eyebrow="Salem, Madurai and Tuticorin"
        title="Contact us"
        intro="Call a travel agency office, send a WhatsApp message, or use the form. The form opens WhatsApp so the Salem team can reply. Enquire for the price of any trip."
      />
      <section className="py-14">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-2xl font-extrabold text-navy">Phone and WhatsApp</h2>
            <ul className="mt-5 space-y-4">
              {branches.map((branch) => (
                <li key={branch.id} className="rounded-2xl bg-sky/60 p-4">
                  <Link href={branch.path} className="font-extrabold text-navy hover:underline">
                    {branch.label}
                  </Link>
                  <p className="mt-1">
                    <a href={branch.tel} className="font-semibold text-navy">
                      {branch.display}
                    </a>
                  </p>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-slate-700">
              WhatsApp:{" "}
              <a href={whatsappLink("Hello Christ Holidays, I would like to enquire about a trip.")} className="font-semibold text-navy underline">
                {WHATSAPP_DISPLAY}
              </a>
            </p>
            <p className="mt-2 text-slate-700">
              Email:{" "}
              <a href={`mailto:${EMAIL}`} className="font-semibold text-navy underline">
                {EMAIL}
              </a>
            </p>
            <p className="mt-4 text-sm leading-relaxed text-slate-700">
              Street addresses are not listed on this website. When you want to visit Salem, Madurai or Thoothukudi, call that office and ask for directions.
            </p>
          </div>
          <div className="rounded-3xl bg-white p-6 shadow-[0_16px_40px_rgba(1,38,107,0.08)] ring-1 ring-slate-100 sm:p-8">
            <h2 className="mb-4 text-2xl font-extrabold text-navy">Send an enquiry</h2>
            <EnquiryForm />
          </div>
        </div>
      </section>
      <EnquiryBand
        title="Prefer to start on WhatsApp?"
        text="Send the destination, dates and number of travellers. You will get a quote rather than a price from this page."
        message="Hello Christ Holidays, I would like to enquire about a trip."
      />
    </article>
  );
}
