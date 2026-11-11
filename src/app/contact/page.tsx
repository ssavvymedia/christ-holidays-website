import type { Metadata } from "next";
import { branches, EMAIL, whatsappLink } from "@/lib/site";

export const metadata: Metadata = { title: "Contact Us" };

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16">
      <h1 className="mb-8 text-4xl font-bold text-navy">Contact Us</h1>
      <div className="grid gap-12 md:grid-cols-2">
        <div className="space-y-3">
          {branches.map((branch) => (
            <p key={branch.city}>
              <strong>{branch.label}:</strong>{" "}
              <a href={branch.tel} className="text-navy">{branch.display}</a>
            </p>
          ))}
          <p><strong>WhatsApp:</strong> <a href={whatsappLink()} className="text-navy">+91 96298 79026</a></p>
          <p><strong>Email:</strong> {EMAIL}</p>
          <a href={whatsappLink("Hello Christ Holidays, I would like to make an enquiry.")} className="mt-6 inline-flex rounded-full bg-yellow px-6 py-3 font-semibold text-navy">
            Chat on WhatsApp
          </a>
        </div>
        <div className="rounded-2xl bg-white p-8 shadow-lg">
          <h3 className="mb-4 text-xl font-semibold">Send an Enquiry</h3>
          <p className="text-sm text-slate-600">Use WhatsApp to share your travel plans and the team will get back to you.</p>
        </div>
      </div>
    </div>
  );
}
