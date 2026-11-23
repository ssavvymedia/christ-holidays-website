import type { Metadata } from "next";
import PageIntro from "@/components/PageIntro";
import { pageMetadata } from "@/lib/seo";
import { EMAIL, LEGAL_NAME, SITE_NAME } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy",
  description: "How Christ Holidays & Travels uses enquiry details from travellers contacting the Salem, Madurai and Thoothukudi offices.",
  path: "/legal/privacy-policy",
});

export default function PrivacyPolicy() {
  return (
    <article>
      <PageIntro
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Privacy Policy", path: "/legal/privacy-policy" },
        ]}
        title="Privacy Policy"
        intro={`${LEGAL_NAME} (“we”) uses personal details only to answer travel enquiries and to arrange trips you ask us to arrange.`}
      />
      <div className="mx-auto max-w-3xl space-y-8 px-4 py-14 text-slate-700 sm:px-6">
        <p className="text-sm text-slate-600">Last updated: November 2026</p>
        <section>
          <h2 className="text-2xl font-extrabold text-navy">Who we are</h2>
          <p className="mt-3 leading-relaxed">
            {SITE_NAME} plans holidays from offices in Salem, Madurai and Thoothukudi (Tuticorin), Tamil Nadu, India. Privacy questions can be sent to{" "}
            <a className="font-semibold text-navy underline" href={`mailto:${EMAIL}`}>
              {EMAIL}
            </a>
            .
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-extrabold text-navy">Information we collect</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 leading-relaxed">
            <li>Name, phone number, email address and WhatsApp messages you send us</li>
            <li>Travel dates, destinations, number of travellers and preferences you share</li>
            <li>Passport or other documents, only if you choose to send them for a booking or visa</li>
          </ul>
          <p className="mt-3 leading-relaxed">The enquiry form on this website does not store the message on the site. It opens WhatsApp with the text you typed.</p>
        </section>
        <section>
          <h2 className="text-2xl font-extrabold text-navy">How we use it</h2>
          <p className="mt-3 leading-relaxed">
            We use these details to reply, prepare an outline and a quote, make bookings you have approved, and handle questions during the trip. We do not sell personal information.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-extrabold text-navy">Who else sees it</h2>
          <p className="mt-3 leading-relaxed">
            Hotels, airlines, transport providers and visa centres receive only what they need to deliver the service you asked for. WhatsApp and email providers process those messages under their own terms.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-extrabold text-navy">How long we keep it</h2>
          <p className="mt-3 leading-relaxed">
            Enquiry and booking records are kept while we need them to respond, to deliver the trip, and to meet any legal record-keeping duty. You can ask us to delete details we no longer need.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-extrabold text-navy">Cookies and logs</h2>
          <p className="mt-3 leading-relaxed">
            This website does not run an advertising cookie programme and does not include a marketing tracker. The host may keep technical logs, such as browser type and IP address, so the site can be served and protected.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-extrabold text-navy">Your choices</h2>
          <p className="mt-3 leading-relaxed">
            You may ask for a copy of the personal information we hold, ask for a correction, or ask us to delete it, by emailing {EMAIL}. If a booking is underway, some details have to stay until the supplier no longer needs them.
          </p>
        </section>
      </div>
    </article>
  );
}
