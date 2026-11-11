import Image from "next/image";
import Link from "next/link";
import TripForm from "@/components/TripForm";
import Reveal from "@/components/Reveal";
import { WhatsAppIcon } from "@/components/icons";
import { whatsappLink } from "@/lib/site";

const trustItems = [
  {
    title: "Handpicked Tour Packages",
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
        <rect x="4" y="5" width="16" height="16" rx="2" />
        <path d="M8 3v4M16 3v4M4 10h16" />
      </svg>
    ),
  },
  {
    title: "Trusted & Experienced Team",
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
        <path d="M12 3 4.5 6.5v5.3c0 4.6 3.2 8.1 7.5 9.2 4.3-1.1 7.5-4.6 7.5-9.2V6.5L12 3Z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "End-to-End Travel Support",
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
        <path d="M4 14v-2a8 8 0 0 1 16 0v2" />
        <rect x="2.5" y="13" width="5" height="7" rx="1.5" />
        <rect x="16.5" y="13" width="5" height="7" rx="1.5" />
        <path d="M7.5 16H9a3 3 0 0 1 6 0h1.5" />
      </svg>
    ),
  },
  {
    title: "Customised Trips for Families, Groups & Corporates",
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
        <circle cx="9" cy="8" r="3" />
        <circle cx="16" cy="9" r="2.4" />
        <path d="M3.5 19c.5-3 2.8-5 5.5-5s5 2 5.5 5" />
        <path d="M14 19c.3-2 1.6-3.6 3.5-3.6 1.8 0 3.1 1.5 3.5 3.6" />
      </svg>
    ),
  },
];

const destinations = [
  { name: "Kashmir", tagline: "Serene Valleys", image: "/assets/home/kashmir.jpg", link: "/domestic-tour-packages/north-india" },
  { name: "Dubai", tagline: "City of Wonders", image: "/assets/home/dubai.jpg", link: "/international-tour-packages/middle-east" },
  { name: "Singapore", tagline: "Modern & Magical", image: "/assets/home/singapore.jpg", link: "/international-tour-packages/asia" },
  { name: "Thailand", tagline: "Beaches & Beyond", image: "/assets/home/thailand.jpg", link: "/international-tour-packages/asia" },
  { name: "Bali", tagline: "Island of Bliss", image: "/assets/home/bali.jpg", link: "/international-tour-packages/asia" },
  { name: "Europe", tagline: "A Multi-Country Experience", image: "/assets/home/europe.jpg", link: "/international-tour-packages/europe" },
];

const whyItems = [
  {
    title: "Years of Travel Expertise",
    color: "text-yellow-dark",
    icon: (
      <svg viewBox="0 0 24 24" className="h-9 w-9" fill="currentColor" aria-hidden="true">
        <path d="M12 2.5 14.5 9H21l-5.2 3.9L17.9 20 12 15.8 6.1 20l2.1-7.1L3 9h6.5L12 2.5Z" />
      </svg>
    ),
  },
  {
    title: "Best Itineraries & Value",
    color: "text-navy",
    icon: (
      <svg viewBox="0 0 24 24" className="h-9 w-9" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
        <path d="M8 4h8v3c0 2.2-1.8 4-4 4s-4-1.8-4-4V4Z" />
        <path d="M8 5H6.5A2.5 2.5 0 0 0 4 7.5V9c0 3 3.6 5 8 5s8-2 8-5V7.5A2.5 2.5 0 0 0 17.5 5H16" />
        <path d="M12 14v6M9 20h6" />
      </svg>
    ),
  },
  {
    title: "Trusted Hotels & Stays",
    color: "text-yellow-dark",
    icon: (
      <svg viewBox="0 0 24 24" className="h-9 w-9" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
        <path d="M4 20V8l8-4 8 4v12" />
        <path d="M9 20v-6h6v6" />
        <path d="M4 20h16" />
      </svg>
    ),
  },
  {
    title: "Dedicated Travel Support",
    color: "text-navy",
    icon: (
      <svg viewBox="0 0 24 24" className="h-9 w-9" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
        <path d="M4 14v-2a8 8 0 0 1 16 0v2" />
        <rect x="2.5" y="13" width="5" height="7" rx="1.5" />
        <rect x="16.5" y="13" width="5" height="7" rx="1.5" />
      </svg>
    ),
  },
  {
    title: "Great for Families, Groups & Corporates",
    color: "text-navy-light",
    icon: (
      <svg viewBox="0 0 24 24" className="h-9 w-9" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
        <circle cx="9" cy="8" r="3" />
        <circle cx="16" cy="9" r="2.4" />
        <path d="M3.5 19c.5-3 2.8-5 5.5-5s5 2 5.5 5M14 19c.3-2 1.6-3.6 3.5-3.6 1.8 0 3.1 1.5 3.5 3.6" />
      </svg>
    ),
  },
];

const featured = [
  { slug: "dubai-5-days-4-nights", title: "Dubai Tour Package", duration: "5 Days / 4 Nights", price: "₹49,999*", image: "/assets/home/dubai.jpg" },
  { slug: "singapore-4-days-3-nights", title: "Singapore Tour Package", duration: "4 Days / 3 Nights", price: "₹54,999*", image: "/assets/home/singapore.jpg" },
  { slug: "kashmir-6-days-5-nights", title: "Kashmir Tour Package", duration: "6 Days / 5 Nights", price: "₹39,999*", image: "/assets/home/kashmir.jpg" },
  { slug: "bali-5-days-4-nights", title: "Bali Tour Package", duration: "5 Days / 4 Nights", price: "₹59,999*", image: "/assets/home/bali-temple.jpg" },
];

const polaroids = [
  { name: "Paris", src: "/assets/home/paris.jpg", className: "top-2 right-2 rotate-[8deg] sm:right-6 lg:-right-2" },
  { name: "Dubai", src: "/assets/home/dubai.jpg", className: "top-28 right-10 -rotate-[6deg] sm:top-32 sm:right-16 lg:right-8" },
  { name: "Maldives", src: "/assets/home/maldives.jpg", className: "top-52 right-0 rotate-[4deg] sm:top-60 sm:right-6 lg:-right-1" },
];

export default function Home() {
  return (
    <div className="overflow-x-hidden bg-white">
      <section className="relative isolate min-h-[34rem] overflow-hidden lg:min-h-[38rem]">
        <Image
          src="/assets/home/hero.jpg"
          alt="Mountain lake holiday destination"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-linear-to-r from-sky/95 via-sky/70 to-transparent md:from-sky/90 md:via-sky/50 md:to-transparent" />
        <div className="absolute inset-0 bg-linear-to-t from-white/40 via-transparent to-transparent" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-4 pt-10 pb-28 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:pt-16 lg:pb-32">
          <div>
            <h1 className="text-[2.35rem] leading-[1.1] font-extrabold tracking-tight text-navy sm:text-5xl lg:text-[3.4rem]">
              Plan Your
              <br />
              <span className="mark">Next Holiday</span>
              <br />
              with Experts
            </h1>
            <p className="mt-5 max-w-md text-[15px] leading-relaxed font-medium text-navy/80">
              Domestic & International Packages &nbsp;|&nbsp; Honeymoon &nbsp;|&nbsp; Group Tours &nbsp;|&nbsp; Visa & Flight Support
            </p>
            <a
              href={whatsappLink("Hello Christ Holidays, I want instant trip plans.")}
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-yellow px-6 py-3.5 text-base font-bold text-navy shadow-[0_10px_24px_rgba(255,212,0,0.45)] transition hover:-translate-y-0.5 hover:bg-yellow-dark hover:shadow-[0_14px_28px_rgba(255,212,0,0.55)]"
            >
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#25D366] text-white">
                <WhatsAppIcon className="h-4 w-4" />
              </span>
              Get Instant Trip Plans on WhatsApp
              <span aria-hidden="true">→</span>
            </a>
          </div>

          <div className="relative hidden h-[22rem] md:block lg:h-[28rem]">
            <svg className="pointer-events-none absolute top-4 left-8 h-24 w-64 text-white/90" viewBox="0 0 280 80" fill="none" aria-hidden="true">
              <path d="M8 58 C 70 28, 150 12, 250 18" stroke="currentColor" strokeWidth="2" strokeDasharray="6 7" />
              <path className="hero-plane" d="M0 0 L18 6 L0 12 L4 6 Z" fill="currentColor" />
            </svg>
            {polaroids.map((card) => (
              <div
                key={card.name}
                className={`absolute w-[8.5rem] bg-white p-1.5 pb-7 shadow-[0_14px_30px_rgba(1,38,107,0.22)] transition duration-300 hover:-translate-y-1 hover:rotate-0 hover:shadow-[0_18px_36px_rgba(1,38,107,0.28)] sm:w-40 ${card.className}`}
              >
                <Image src={card.src} alt={card.name} width={240} height={180} className="h-28 w-full object-cover sm:h-32" />
                <p className="absolute right-0 bottom-1.5 left-0 text-center text-[11px] font-semibold text-navy">{card.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute right-0 bottom-0 left-0 z-20 translate-y-1/2 px-4">
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-y-4 rounded-[2rem] bg-white px-4 py-5 shadow-[0_16px_40px_rgba(1,38,107,0.12)] ring-1 ring-slate-100 md:grid-cols-4 md:rounded-full md:px-2 md:py-5">
            {trustItems.map((item, i) => (
              <div key={item.title} className={`flex items-center gap-3 px-3 md:justify-center md:px-4 ${i > 0 ? "md:border-l md:border-slate-200" : ""}`}>
                <span className="text-navy">{item.icon}</span>
                <p className="text-[13px] leading-snug font-semibold text-navy">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white pt-28 pb-16 md:pt-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="mb-8 flex items-end justify-between gap-4">
              <h2 className="text-3xl font-extrabold text-navy md:text-4xl">
                Explore <span className="mark-line">Top Destinations</span>
              </h2>
              <Link href="/tour-packages" className="hidden text-sm font-semibold text-navy hover:text-navy-light sm:inline">
                View All Destinations →
              </Link>
            </div>
          </Reveal>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-6">
            {destinations.map((dest, i) => (
              <Reveal key={dest.name} delay={i * 70}>
                <Link href={dest.link} className="group relative block overflow-hidden rounded-2xl shadow-md">
                  <Image
                    src={dest.image}
                    alt={dest.name}
                    width={400}
                    height={500}
                    className="h-48 w-full object-cover transition duration-500 group-hover:scale-110 sm:h-56"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/10 to-transparent" />
                  <div className="absolute bottom-3 left-3 text-white">
                    <h3 className="text-lg font-extrabold">{dest.name}</h3>
                    <p className="text-xs text-white/90">{dest.tagline}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
          <Link href="/tour-packages" className="mt-4 inline-block text-sm font-semibold text-navy sm:hidden">
            View All Destinations →
          </Link>
        </div>
      </section>

      <section className="bg-white py-10 md:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="grid items-center gap-8 lg:grid-cols-[0.8fr_1.2fr]">
              <h2 className="text-3xl font-extrabold text-navy md:text-4xl">
                Why Travel with
                <br />
                <span className="mark-line">Christ Holidays?</span>
              </h2>
              <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
                {whyItems.map((item) => (
                  <div key={item.title} className="flex flex-col items-center px-2 text-center">
                    <span className={`mb-3 ${item.color}`}>{item.icon}</span>
                    <p className="text-sm leading-snug font-semibold text-navy">{item.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-4 py-6 sm:px-6 lg:px-8">
        <Reveal>
          <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[1.8rem] bg-navy px-5 py-8 text-white shadow-[0_16px_40px_rgba(1,38,107,0.25)] sm:px-8 lg:px-10">
            <Image
              src="/assets/home/mountains-side.jpg"
              alt=""
              fill
              className="object-cover opacity-25"
              sizes="1200px"
            />
            <div className="absolute inset-0 bg-linear-to-r from-navy via-navy/90 to-navy-light/80" />
            <div className="relative flex flex-col items-center gap-8 lg:flex-row lg:gap-10">
              <div className="flex shrink-0 items-end">
                <div className="relative">
                  <div className="absolute -top-2 -right-3 text-2xl text-yellow" aria-hidden="true">✦</div>
                  <div className="absolute top-6 -right-5 text-yellow/80" aria-hidden="true">✦</div>
                  <div className="h-44 w-[7.2rem] rounded-[1.6rem] border-[5px] border-slate-900 bg-[#25D366] p-3 shadow-[0_16px_30px_rgba(0,0,0,0.35)] sm:h-52 sm:w-36">
                    <div className="flex h-full flex-col items-center justify-center text-white">
                      <WhatsAppIcon className="h-16 w-16" />
                      <p className="mt-2 text-[11px] font-bold tracking-wide">WhatsApp</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 text-center lg:text-left">
                <h2 className="text-2xl font-extrabold leading-tight sm:text-3xl md:text-4xl">
                  Let&apos;s Plan Your <span className="mark text-navy">Dream Trip</span>
                  <br />
                  on WhatsApp!
                </h2>
                <p className="mt-3 max-w-lg text-sm text-blue-100 sm:text-base">
                  Get instant itinerary, package options and travel guidance from our travel experts.
                </p>
              </div>
              <div className="flex shrink-0 flex-col items-center">
                <a
                  href={whatsappLink("Hello Christ Holidays, I want to plan my dream trip on WhatsApp.")}
                  className="inline-flex items-center gap-2 rounded-full bg-yellow px-6 py-3.5 text-center text-sm font-bold text-navy shadow-lg transition hover:-translate-y-0.5 hover:bg-yellow-dark sm:text-base"
                >
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#25D366] text-white">
                    <WhatsAppIcon className="h-4 w-4" />
                  </span>
                  Chat with Our Travel Expert on WhatsApp →
                </a>
                <div className="mt-4 flex flex-wrap justify-center gap-x-4 gap-y-1 text-xs font-medium text-blue-100">
                  {["Quick Reply", "Personalized Plans", "No Obligation"].map((item) => (
                    <span key={item} className="inline-flex items-center gap-1">
                      <span className="flex h-4 w-4 items-center justify-center rounded-full border border-white/70 text-[10px]">✓</span>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="mb-8 flex items-end justify-between gap-4">
              <h2 className="text-3xl font-extrabold text-navy md:text-4xl">
                Featured <span className="mark-line">Holiday Packages</span>
              </h2>
              <Link href="/tour-packages" className="hidden text-sm font-semibold text-navy hover:text-navy-light sm:inline">
                View All Packages →
              </Link>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((pkg, i) => (
              <Reveal key={pkg.slug} delay={i * 80}>
                <article className="group overflow-hidden rounded-2xl bg-white shadow-[0_8px_24px_rgba(1,38,107,0.08)] ring-1 ring-slate-100 transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_18px_36px_rgba(1,38,107,0.16)]">
                  <Link href={`/tour-packages/${pkg.slug}`} className="relative block">
                    <Image src={pkg.image} alt={pkg.title} width={500} height={320} className="h-44 w-full object-cover transition duration-500 group-hover:scale-105" />
                    <span className="absolute top-3 right-3 rounded-full bg-yellow px-3 py-1 text-[11px] font-bold text-navy shadow-sm">
                      {pkg.duration}
                    </span>
                  </Link>
                  <div className="flex items-end justify-between gap-3 p-4">
                    <div>
                      <h3 className="font-extrabold text-navy">
                        <Link href={`/tour-packages/${pkg.slug}`} className="hover:underline">
                          {pkg.title}
                        </Link>
                      </h3>
                      <p className="mt-1 text-sm font-medium text-slate-600">
                        From <span className="font-bold text-price">{pkg.price}</span>
                      </p>
                    </div>
                    <a
                      href={whatsappLink(`Hello Christ Holidays, I am interested in the ${pkg.title}.`)}
                      className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white shadow-md transition hover:scale-110"
                      aria-label={`Enquire about ${pkg.title} on WhatsApp`}
                    >
                      <WhatsAppIcon className="h-6 w-6" />
                    </a>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
          <p className="mt-4 text-xs text-slate-500">* Starting prices, subject to dates, availability and confirmation.</p>
          <Link href="/tour-packages" className="mt-3 inline-block text-sm font-semibold text-navy sm:hidden">
            View All Packages →
          </Link>
        </div>
      </section>

      <section className="form-mountains py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="grid items-center gap-8 lg:grid-cols-[0.7fr_1.3fr]">
              <div>
                <h2 className="text-3xl font-extrabold text-navy md:text-4xl">
                  Plan a <span className="mark-line">Custom Trip</span>
                </h2>
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-navy/80">
                  Tell us your travel plans and our team will get in touch with the best options.
                </p>
              </div>
              <TripForm />
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
