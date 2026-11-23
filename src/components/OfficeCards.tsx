import Link from "next/link";
import { WhatsAppIcon } from "@/components/icons";
import { branches, whatsappLink } from "@/lib/site";

export default function OfficeCards({ heading = "Offices in Tamil Nadu" }: { heading?: string }) {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-navy md:text-4xl">{heading}</h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-700">
          Call the travel agency office nearest you in Salem, Madurai or Thoothukudi (Tuticorin). Street addresses are shared when you arrange a visit.
        </p>
        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">
          {branches.map((branch) => (
            <article key={branch.id} className="rounded-2xl bg-sky/60 p-6 ring-1 ring-slate-100">
              <p className="text-xs font-semibold tracking-wide text-navy uppercase">{branch.label}</p>
              <h3 className="mt-1 text-2xl font-extrabold text-navy">
                <Link href={branch.path} className="hover:underline">
                  {branch.city}
                  {branch.alsoKnownAs ? ` (${branch.alsoKnownAs})` : ""}
                </Link>
              </h3>
              <a href={branch.tel} className="mt-4 inline-flex min-h-11 items-center text-lg font-bold text-navy hover:underline">
                {branch.display}
              </a>
              <div className="mt-4 flex flex-wrap gap-3">
                <a href={branch.tel} className="inline-flex min-h-11 items-center rounded-full bg-navy px-4 py-2 text-sm font-semibold text-white hover:bg-navy-light">
                  Call now
                </a>
                <a
                  href={whatsappLink(`Hello Christ Holidays, I would like to speak with the ${branch.city} office.`)}
                  className="inline-flex min-h-11 items-center gap-1.5 rounded-full bg-yellow px-4 py-2 text-sm font-semibold text-navy"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  WhatsApp
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
