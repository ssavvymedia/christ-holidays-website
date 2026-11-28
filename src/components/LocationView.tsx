import Link from "next/link";
import EnquiryBand from "@/components/EnquiryBand";
import JsonLd from "@/components/JsonLd";
import OfficeCards from "@/components/OfficeCards";
import PageIntro from "@/components/PageIntro";
import { locationLd } from "@/lib/seo";
import { branches, type Branch } from "@/lib/site";

const copy: Record<Branch["id"], { intro: string; body: string[] }> = {
  salem: {
    intro: "Salem is the head office of Christ Holidays & Travels, and the number used for WhatsApp.",
    body: [
      "Call +91 96298 79026 or message the same number on WhatsApp to ask about a domestic or international holiday, a honeymoon, a group trip or a corporate movement.",
      "The Salem team can also talk through flights, hotels and visa steps. A street address is not published here. Ask when you want to visit, and the office will explain how.",
    ],
  },
  madurai: {
    intro: "The Madurai branch is a local number for travellers who would rather speak to someone in the city.",
    body: [
      "Call +91 63743 95526 for holiday planning. WhatsApp messages still go to the Salem head-office number, +91 96298 79026, unless you prefer to stay on the phone with Madurai.",
      "The same kinds of trips are discussed here as at the other offices: domestic and international holidays, honeymoons, groups and company travel. The street address is shared when you fix a visit.",
    ],
  },
  thoothukudi: {
    intro: "The Thoothukudi office serves Tuticorin. Both names refer to this branch.",
    body: [
      "Call +91 77081 04235 to plan a holiday with the Thoothukudi team. WhatsApp for the company is the Salem number, +91 96298 79026.",
      "Travellers in the port city use this office for the same enquiries as Salem and Madurai. No street address is listed on the website. Call and the team will tell you how to visit.",
    ],
  },
};

export default function LocationView({ id }: { id: Branch["id"] }) {
  const branch = branches.find((item) => item.id === id);
  if (!branch) return null;
  const text = copy[id];
  const place = branch.alsoKnownAs ? `${branch.city} (${branch.alsoKnownAs})` : branch.city;

  return (
    <article>
      <PageIntro
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Offices", path: "/locations" },
          { name: place, path: branch.path },
        ]}
        eyebrow="Tamil Nadu"
        title={`${place} travel agency office`}
        intro={text.intro}
      />
      <JsonLd data={locationLd(branch)} />
      <section className="py-14">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
          <div className="space-y-4 text-base leading-relaxed text-slate-700">
            {text.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <h2 className="pt-4 text-2xl font-extrabold text-navy">How to reach {branch.city}</h2>
            <p>
              Phone:{" "}
              <a href={branch.tel} className="font-semibold text-navy underline">
                {branch.display}
              </a>
            </p>
            <p>
              Email:{" "}
              <a href="mailto:christholidaystravels@gmail.com" className="font-semibold text-navy underline">
                christholidaystravels@gmail.com
              </a>
            </p>
            <p>Ask about domestic tours, international tours, honeymoons, group tours, corporate trips, flights, hotels or visa guidance. Enquire for the price.</p>
          </div>
          <aside className="rounded-3xl bg-sky/70 p-6 ring-1 ring-slate-100">
            <h2 className="text-xl font-extrabold text-navy">Other offices</h2>
            <ul className="mt-4 space-y-3">
              {branches
                .filter((item) => item.id !== id)
                .map((item) => (
                  <li key={item.id}>
                    <Link href={item.path} className="font-semibold text-navy hover:underline">
                      {item.label}
                    </Link>
                    <p className="text-sm text-slate-700">{item.display}</p>
                  </li>
                ))}
            </ul>
          </aside>
        </div>
      </section>
      <OfficeCards heading="All three offices" />
      <EnquiryBand
        title={`Plan a trip with the ${branch.city} office`}
        text="Share the destination and dates. The quote that comes back is the price to confirm."
        message={`Hello Christ Holidays, I would like to speak with the ${branch.city} office about a holiday.`}
      />
    </article>
  );
}
