import type { Metadata } from "next";
import Link from "next/link";
import EnquiryBand from "@/components/EnquiryBand";
import PageIntro from "@/components/PageIntro";
import { pageMetadata } from "@/lib/seo";
import { branches, EMAIL } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Offices in Salem, Madurai and Thoothukudi",
  description: "Christ Holidays & Travels has travel agency offices in Salem, Madurai and Thoothukudi (Tuticorin), Tamil Nadu. Call, WhatsApp or email. Street addresses are shared on request.",
  path: "/locations",
});

export default function LocationsPage() {
  return (
    <article>
      <PageIntro
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Offices", path: "/locations" },
        ]}
        eyebrow="Tamil Nadu"
        title="Our offices"
        intro="Three travel agency offices: Salem (head office), Madurai and Thoothukudi, also called Tuticorin. Street addresses are not published. Call before you visit."
      />
      <section className="py-14">
        <div className="mx-auto grid max-w-7xl gap-5 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
          {branches.map((branch) => (
            <article key={branch.id} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
              <h2 className="text-2xl font-extrabold text-navy">
                <Link href={branch.path} className="hover:underline">
                  {branch.alsoKnownAs ? `${branch.city} (${branch.alsoKnownAs})` : branch.city}
                </Link>
              </h2>
              <p className="mt-2 text-sm text-slate-700">{branch.headOffice ? "Head office and WhatsApp number." : "Branch office."}</p>
              <a href={branch.tel} className="mt-4 inline-flex min-h-11 items-center text-lg font-bold text-navy hover:underline">
                {branch.display}
              </a>
              <div className="mt-4">
                <Link href={branch.path} className="text-sm font-semibold text-navy hover:underline">
                  Office details
                </Link>
              </div>
            </article>
          ))}
        </div>
        <p className="mx-auto mt-8 max-w-7xl px-4 text-sm text-slate-700 sm:px-6 lg:px-8">
          Email{" "}
          <a className="font-semibold text-navy underline" href={`mailto:${EMAIL}`}>
            {EMAIL}
          </a>{" "}
          if you would rather write. For a faster reply, WhatsApp the Salem number.
        </p>
      </section>
      <EnquiryBand
        title="Not sure which office to call?"
        text="Any of the three can start the enquiry. WhatsApp reaches Salem."
        message="Hello Christ Holidays, I would like to enquire about a holiday."
      />
    </article>
  );
}
