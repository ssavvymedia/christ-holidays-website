import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { branches, EMAIL, whatsappLink } from "@/lib/site";
import { WhatsAppIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Christ Holidays & Travels was started in 2017 by Dr. B. Absal Sherif, a travel industry professional with experience since 2008. Plan holidays from our offices in Salem, Madurai and Thoothukudi.",
};

const career = [
  "Country Club",
  "Club Mahindra",
  "Sterling Holidays",
  "Radisson Hotel Group",
];

const services = [
  { title: "Domestic Tours", href: "/domestic-tour-packages", text: "Holiday plans across India, shaped around your dates and preferences." },
  { title: "International Tours", href: "/international-tour-packages", text: "Trips to popular overseas destinations, with a clear itinerary to review." },
  { title: "Honeymoon Packages", href: "/travel-experiences/honeymoon-packages", text: "Quiet, well-paced getaways planned around your travel dates." },
  { title: "Group Tours", href: "/travel-experiences/group-tours", text: "Coordination for families, friends and larger groups travelling together." },
  { title: "Visa & Flight Support", href: "/travel-services", text: "Help with visa guidance and flight options alongside your holiday plan." },
  { title: "Corporate & Family Trips", href: "/travel-experiences/group-tours", text: "Stays and transfers arranged for family holidays and company travel." },
];

const reasons = [
  {
    title: "Industry experience",
    text: "The company is led by a founder with 18 years of travel industry work experience, working in the sector since 2008.",
  },
  {
    title: "Offices you can call",
    text: "Speak with the team in Salem, Madurai or Thoothukudi, or message us on WhatsApp.",
  },
  {
    title: "Holiday planning and travel support",
    text: "Packages can be planned together with visa assistance, flight options and hotel bookings.",
  },
  {
    title: "For different kinds of travel",
    text: "We help plan domestic and international holidays, honeymoons, and trips for families, groups and corporates.",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-white">
      <section className="relative overflow-hidden bg-linear-to-br from-sky via-sky-deep to-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <p className="text-sm font-semibold tracking-wide text-navy/70 uppercase">Christ Holidays & Travels</p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-navy md:text-5xl">
            About <span className="mark-line">Christ Holidays & Travels</span>
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-navy/80">
            A travel company started in 2017, planning domestic and international holidays from offices in Salem, Madurai and Thoothukudi.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-3xl font-extrabold text-navy md:text-4xl">
              Our <span className="mark-line">Story</span>
            </h2>
            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-slate-700">
              <p>
                Christ Holidays & Travels was started in 2017 by Dr. B. Absal Sherif, a travel industry professional with experience in the sector since 2008.
              </p>
              <p>
                The company helps individuals, families, groups and corporates plan domestic and international holidays, including honeymoon and group travel, along with visa and flight support.
              </p>
              <p>
                You can reach the team at the Salem head office, or at the branches in Madurai and Thoothukudi.
              </p>
            </div>
          </div>
          <figure className="overflow-hidden rounded-3xl bg-white shadow-[0_16px_40px_rgba(1,38,107,0.12)] ring-1 ring-slate-100">
            <Image
              src="/assets/about/founder-atm.jpg"
              alt="Dr. B. Absal Sherif at Arabian Travel Market, Dubai"
              width={1000}
              height={1421}
              className="h-[28rem] w-full object-cover object-[center_20%] sm:h-[32rem]"
            />
            <figcaption className="px-5 py-3 text-sm font-medium text-navy">
              Dr. B. Absal Sherif at Arabian Travel Market, Dubai
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="bg-sky/50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-navy md:text-4xl">
            Meet the <span className="mark-line">Founder</span>
          </h2>
          <div className="mt-10 grid items-start gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="overflow-hidden rounded-3xl bg-white shadow-[0_16px_40px_rgba(1,38,107,0.12)] ring-1 ring-slate-100">
              <Image
                src="/assets/about/founder-portrait.jpg"
                alt="Dr. B. Absal Sherif, founder of Christ Holidays & Travels"
                width={1000}
                height={1288}
                className="h-auto w-full object-cover object-top"
                priority
              />
            </div>
            <div>
              <p className="text-sm font-semibold tracking-wide text-navy/70 uppercase">Founder</p>
              <h3 className="mt-1 text-3xl font-extrabold text-navy">Dr. B. Absal Sherif</h3>
              <p className="mt-2 text-navy/80">BBA, MBA, Doctorate of Commerce</p>
              <p className="mt-6 text-[15px] leading-relaxed text-slate-700">
                18 years of travel industry work experience, working in the travel industry since 2008. He started Christ Holidays & Travels in 2017.
              </p>

              <h4 className="mt-10 text-xl font-extrabold text-navy">Career background</h4>
              <ol className="relative mt-6 border-l-2 border-sky-deep pl-6">
                {career.map((company) => (
                  <li key={company} className="relative mb-5 last:mb-0">
                    <span className="absolute top-1.5 -left-[1.92rem] h-3.5 w-3.5 rounded-full bg-yellow ring-4 ring-sky" />
                    <p className="font-semibold text-navy">{company}</p>
                  </li>
                ))}
                <li className="relative">
                  <span className="absolute top-1.5 -left-[1.92rem] h-3.5 w-3.5 rounded-full bg-navy ring-4 ring-sky" />
                  <p className="font-semibold text-navy">Christ Holidays & Travels</p>
                  <p className="text-sm text-slate-600">Started in 2017</p>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-navy md:text-4xl">
            What <span className="mark-line">We Do</span>
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-navy/80">
            The same holiday planning and travel support offered across the website.
          </p>
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <h3 className="font-extrabold text-navy">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{item.text}</p>
                <span className="mt-3 inline-block text-sm font-semibold text-navy">Learn more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sky/40 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-navy md:text-4xl">
            Why Travel with <span className="mark-line">Christ Holidays?</span>
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {reasons.map((item) => (
              <div key={item.title} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
                <h3 className="font-extrabold text-navy">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-navy md:text-4xl">
            Our Offices in <span className="mark-line">Tamil Nadu</span>
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-navy/80">
            Call the branch nearest you, or message us on WhatsApp. Email: {EMAIL}
          </p>
          <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">
            {branches.map((branch) => (
              <article key={branch.city} className="rounded-2xl bg-sky/60 p-6 ring-1 ring-slate-100">
                <p className="text-xs font-semibold tracking-wide text-navy/70 uppercase">{branch.label}</p>
                <h3 className="mt-1 text-2xl font-extrabold text-navy">{branch.city}</h3>
                <a href={branch.tel} className="mt-4 inline-flex text-lg font-bold text-navy hover:underline">
                  {branch.display}
                </a>
                <div className="mt-4 flex flex-wrap gap-3">
                  <a href={branch.tel} className="inline-flex rounded-full bg-navy px-4 py-2 text-sm font-semibold text-white hover:bg-navy-light">
                    Call now
                  </a>
                  <a
                    href={whatsappLink(`Hello Christ Holidays, I would like to speak with the ${branch.city} office.`)}
                    className="inline-flex items-center gap-1.5 rounded-full bg-yellow px-4 py-2 text-sm font-semibold text-navy"
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

      <section className="bg-navy py-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 text-center sm:px-6 lg:flex-row lg:px-8 lg:text-left">
          <div>
            <h2 className="text-2xl font-extrabold text-white md:text-3xl">Plan your next holiday with us</h2>
            <p className="mt-2 text-blue-100">
              Share your destination and dates — the team in Salem, Madurai or Thoothukudi will help you get started.
            </p>
          </div>
          <a
            href={whatsappLink("Hello Christ Holidays, I would like to know more about your holiday packages.")}
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-yellow px-6 py-3.5 font-bold text-navy transition hover:-translate-y-0.5 hover:bg-yellow-dark"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Chat on WhatsApp →
          </a>
        </div>
      </section>
    </div>
  );
}
