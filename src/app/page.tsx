import Image from "next/image";
import Link from "next/link";
import TripForm from "@/components/TripForm";
import Reveal from "@/components/Reveal";
import { WhatsAppIcon } from "@/components/icons";
import DestinationExplorer, { type Destination } from "@/components/home/DestinationExplorer";
import FaqAccordion from "@/components/home/FaqAccordion";
import { branches, EMAIL, whatsappLink } from "@/lib/site";

const trustItems = [
  {
    title: "Handpicked Tour Packages",
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
        <rect x="4" y="5" width="16" height="16" rx="2" />
        <path d="M8 3v4M16 3v4M4 10h16" />
      </svg>
    ),
  },
  {
    title: "Trusted & Experienced Team",
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
        <path d="M12 3 4.5 6.5v5.3c0 4.6 3.2 8.1 7.5 9.2 4.3-1.1 7.5-4.6 7.5-9.2V6.5L12 3Z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "End-to-End Travel Support",
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
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
      <svg viewBox="0 0 24 24" className="h-7 w-7 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
        <circle cx="9" cy="8" r="3" />
        <circle cx="16" cy="9" r="2.4" />
        <path d="M3.5 19c.5-3 2.8-5 5.5-5s5 2 5.5 5" />
        <path d="M14 19c.3-2 1.6-3.6 3.5-3.6 1.8 0 3.1 1.5 3.5 3.6" />
      </svg>
    ),
  },
];

const destinations: Destination[] = [
  { name: "Kashmir", tagline: "Serene Valleys", image: "/assets/home/kashmir.jpg", link: "/domestic-tour-packages/north-india", region: "domestic" },
  { name: "Kerala", tagline: "Backwaters & Hills", image: "/assets/home/kerala.jpg", link: "/domestic-tour-packages/south-india", region: "domestic" },
  { name: "Goa", tagline: "Sun & Beaches", image: "/assets/home/goa.jpg", link: "/domestic-tour-packages/south-india", region: "domestic" },
  { name: "Ooty", tagline: "Nilgiri Hills", image: "/assets/home/ooty.jpg", link: "/domestic-tour-packages/south-india", region: "domestic" },
  { name: "Andaman", tagline: "Island Escape", image: "/assets/home/andaman.jpg", link: "/domestic-tour-packages", region: "domestic" },
  { name: "Dubai", tagline: "City of Wonders", image: "/assets/home/dubai.jpg", link: "/international-tour-packages/middle-east", region: "international" },
  { name: "Singapore", tagline: "Modern & Magical", image: "/assets/home/singapore.jpg", link: "/international-tour-packages/asia", region: "international" },
  { name: "Thailand", tagline: "Beaches & Beyond", image: "/assets/home/thailand.jpg", link: "/international-tour-packages/asia", region: "international" },
  { name: "Bali", tagline: "Island of Bliss", image: "/assets/home/bali.jpg", link: "/international-tour-packages/asia", region: "international" },
  { name: "Maldives", tagline: "Turquoise Atolls", image: "/assets/home/maldives.jpg", link: "/international-tour-packages/asia", region: "international" },
  { name: "Malaysia", tagline: "Cities & Islands", image: "/assets/home/malaysia.jpg", link: "/international-tour-packages/asia", region: "international" },
  { name: "Sri Lanka", tagline: "Isle of Serenity", image: "/assets/home/srilanka.jpg", link: "/international-tour-packages/asia", region: "international" },
  { name: "Europe", tagline: "A Multi-Country Experience", image: "/assets/home/europe.jpg", link: "/international-tour-packages/europe", region: "international" },
];

const whyItems = [
  { title: "Thoughtful Travel Planning", color: "text-yellow-dark", icon: (
    <svg viewBox="0 0 24 24" className="h-9 w-9" fill="currentColor" aria-hidden="true"><path d="M12 2.5 14.5 9H21l-5.2 3.9L17.9 20 12 15.8 6.1 20l2.1-7.1L3 9h6.5L12 2.5Z" /></svg>
  )},
  { title: "Clear Itineraries & Value", color: "text-navy", icon: (
    <svg viewBox="0 0 24 24" className="h-9 w-9" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><path d="M8 4h8v3c0 2.2-1.8 4-4 4s-4-1.8-4-4V4Z" /><path d="M8 5H6.5A2.5 2.5 0 0 0 4 7.5V9c0 3 3.6 5 8 5s8-2 8-5V7.5A2.5 2.5 0 0 0 17.5 5H16" /><path d="M12 14v6M9 20h6" /></svg>
  )},
  { title: "Trusted Hotels & Stays", color: "text-yellow-dark", icon: (
    <svg viewBox="0 0 24 24" className="h-9 w-9" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><path d="M4 20V8l8-4 8 4v12" /><path d="M9 20v-6h6v6" /><path d="M4 20h16" /></svg>
  )},
  { title: "Dedicated Travel Support", color: "text-navy", icon: (
    <svg viewBox="0 0 24 24" className="h-9 w-9" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><path d="M4 14v-2a8 8 0 0 1 16 0v2" /><rect x="2.5" y="13" width="5" height="7" rx="1.5" /><rect x="16.5" y="13" width="5" height="7" rx="1.5" /></svg>
  )},
  { title: "Great for Families, Groups & Corporates", color: "text-navy-light", icon: (
    <svg viewBox="0 0 24 24" className="h-9 w-9" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><circle cx="9" cy="8" r="3" /><circle cx="16" cy="9" r="2.4" /><path d="M3.5 19c.5-3 2.8-5 5.5-5s5 2 5.5 5M14 19c.3-2 1.6-3.6 3.5-3.6 1.8 0 3.1 1.5 3.5 3.6" /></svg>
  )},
];

const featured = [
  { slug: "dubai-5-days-4-nights", title: "Dubai Tour Package", duration: "5 Days / 4 Nights", price: "From ₹49,999*", image: "/assets/home/dubai.jpg", inclusions: ["Stay", "Breakfast", "Transfers", "Sightseeing"] },
  { slug: "singapore-4-days-3-nights", title: "Singapore Tour Package", duration: "4 Days / 3 Nights", price: "From ₹54,999*", image: "/assets/home/singapore.jpg", inclusions: ["Stay", "Breakfast", "Transfers", "Sightseeing"] },
  { slug: "kashmir-6-days-5-nights", title: "Kashmir Tour Package", duration: "6 Days / 5 Nights", price: "From ₹39,999*", image: "/assets/home/kashmir.jpg", inclusions: ["Stay", "Breakfast", "Transfers", "Sightseeing"] },
  { slug: "bali-5-days-4-nights", title: "Bali Tour Package", duration: "5 Days / 4 Nights", price: "From ₹59,999*", image: "/assets/home/bali-temple.jpg", inclusions: ["Stay", "Breakfast", "Transfers", "Sightseeing"] },
  { slug: "kerala-5-days-4-nights", title: "Kerala Tour Package", duration: "5 Days / 4 Nights", price: "Request a Quote", image: "/assets/home/kerala.jpg", inclusions: ["Stay", "Breakfast", "Transfers", "Houseboat"] },
  { slug: "thailand-5-days-4-nights", title: "Thailand Tour Package", duration: "5 Days / 4 Nights", price: "Request a Quote", image: "/assets/home/thailand.jpg", inclusions: ["Stay", "Breakfast", "Transfers", "Sightseeing"] },
  { slug: "maldives-5-days-4-nights", title: "Maldives Tour Package", duration: "5 Days / 4 Nights", price: "Request a Quote", image: "/assets/home/maldives.jpg", inclusions: ["Stay", "Breakfast", "Transfers"] },
  { slug: "andaman-6-days-5-nights", title: "Andaman Tour Package", duration: "6 Days / 5 Nights", price: "Request a Quote", image: "/assets/home/andaman.jpg", inclusions: ["Stay", "Breakfast", "Transfers", "Sightseeing"] },
];

const honeymoons = [
  { name: "Maldives", text: "Quiet island stays and unhurried beach time, planned around your dates.", image: "/assets/home/maldives.jpg" },
  { name: "Bali", text: "A relaxed mix of beaches, cultural visits and comfortable stays.", image: "/assets/home/bali-temple.jpg" },
  { name: "Kashmir", text: "Scenic valleys and peaceful stays for a slower, romantic getaway.", image: "/assets/home/kashmir.jpg" },
  { name: "Europe", text: "A multi-city itinerary shaped to your pace, season and budget.", image: "/assets/home/europe.jpg" },
];

const tripStyles = [
  { title: "Group Tours", text: "Travel with family or friends. Share the group size, destination and dates and we will help plan a suitable itinerary.", href: "/travel-experiences/group-tours", image: "/assets/home/singapore.jpg" },
  { title: "Family Holidays", text: "Trips paced for parents and children, with stays and sightseeing agreed in advance.", href: "/contact", image: "/assets/home/goa.jpg" },
  { title: "Corporate Travel", text: "Offsites and group movements with coordinated stays, transfers and a single point of contact.", href: "/travel-experiences/group-tours", image: "/assets/home/dubai.jpg" },
];

const services = [
  { title: "Visa Assistance", text: "Guidance on documents, appointments and application steps for the destinations we plan.", href: "/travel-services" },
  { title: "Flight Booking", text: "Help with flight options, including group travel, to match your holiday dates.", href: "/travel-services" },
  { title: "Hotel Booking", text: "Stays shortlisted to your budget, location and travel style, then confirmed with you.", href: "/travel-services" },
  { title: "Customised Holidays", text: "A trip outline built around your destination, dates and preferences.", href: "/contact" },
];

const steps = [
  { step: "1", title: "Share your plans", text: "Tell us the destination, travel dates, group size and any preferences on WhatsApp or through the form." },
  { step: "2", title: "Review a proposed itinerary", text: "We come back with a suggested plan, stay options and a quote for you to review." },
  { step: "3", title: "Confirm the details", text: "Once you are happy with the outline, we confirm bookings and share the final plan." },
  { step: "4", title: "Travel with support", text: "Stay in touch with the team for coordination before and during the trip." },
];

const faqs = [
  { question: "How do I enquire about a package?", answer: "Use the WhatsApp buttons on this page, call one of our offices, or send your destination and dates through the custom trip form. The team will get back to you with options." },
  { question: "Are the prices shown final?", answer: "Prices marked with * are starting prices and depend on travel dates, availability and the final hotels and transfers. A confirmed quote is shared after enquiry." },
  { question: "Can you plan a custom trip?", answer: "Yes. Share the destination, dates, number of travellers and any special requests, and the team will suggest a suitable outline." },
  { question: "Do you help with visas and flights?", answer: "Visa assistance, flight booking and hotel booking are part of our travel services and can be arranged along with a holiday package." },
  { question: "Which cities can I contact?", answer: "You can reach the team in Salem (head office), Madurai and Thoothukudi. Phone numbers for each office are listed below, and WhatsApp messages go to the Salem number unless you prefer to call another branch." },
];

const polaroids = [
  { name: "Paris", src: "/assets/home/paris.jpg", className: "top-2 right-2 rotate-[8deg] sm:right-6 lg:-right-2" },
  { name: "Dubai", src: "/assets/home/dubai.jpg", className: "top-28 right-10 -rotate-[6deg] sm:top-32 sm:right-16 lg:right-8" },
  { name: "Maldives", src: "/assets/home/maldives.jpg", className: "top-52 right-0 rotate-[4deg] sm:top-60 sm:right-6 lg:-right-1" },
];

export default function Home() {
  return (
    <div className="bg-white">
      <section className="relative isolate">
        <div className="relative min-h-[34rem] overflow-hidden lg:min-h-[38rem]">
          <Image
            src="/assets/home/hero.jpg"
            alt="Mountain lake holiday destination"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-linear-to-r from-sky/95 via-sky/70 to-transparent md:from-sky/90 md:via-sky/50 md:to-transparent" />
          <div className="absolute inset-0 bg-linear-to-t from-white/50 via-transparent to-transparent" />

          <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-4 pt-10 pb-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:pt-16 lg:pb-20">
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
        </div>

        <div className="relative z-20 mx-auto -mt-8 max-w-6xl px-4 sm:-mt-10 md:-mt-12">
          <div className="grid grid-cols-2 gap-y-5 rounded-3xl bg-white px-4 py-6 shadow-[0_16px_40px_rgba(1,38,107,0.12)] ring-1 ring-slate-100 md:grid-cols-4 md:rounded-full md:px-2 md:py-6">
            {trustItems.map((item, i) => (
              <div
                key={item.title}
                className={`flex items-start gap-3 px-3 md:items-center md:justify-center md:px-4 ${i > 0 ? "md:border-l md:border-slate-200" : ""}`}
              >
                <span className="text-navy">{item.icon}</span>
                <p className="text-[13px] leading-snug font-semibold text-navy">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="destinations" className="bg-white pt-12 pb-16 md:pt-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="mb-6 flex items-end justify-between gap-4">
              <h2 className="text-3xl font-extrabold text-navy md:text-4xl">
                Explore <span className="mark-line">Top Destinations</span>
              </h2>
              <Link href="/tour-packages" className="hidden text-sm font-semibold text-navy hover:text-navy-light sm:inline">
                View All Destinations →
              </Link>
            </div>
          </Reveal>
          <DestinationExplorer destinations={destinations} />
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
            <Image src="/assets/home/mountains-side.jpg" alt="" fill className="object-cover opacity-25" sizes="1200px" />
            <div className="absolute inset-0 bg-linear-to-r from-navy via-navy/90 to-navy-light/80" />
            <div className="relative flex flex-col items-center gap-8 lg:flex-row lg:gap-10">
              <div className="relative shrink-0">
                <div className="absolute -top-2 -right-3 text-2xl text-yellow" aria-hidden="true">✦</div>
                <div className="h-44 w-[7.2rem] rounded-[1.6rem] border-[5px] border-slate-900 bg-[#25D366] p-3 shadow-[0_16px_30px_rgba(0,0,0,0.35)] sm:h-52 sm:w-36">
                  <div className="flex h-full flex-col items-center justify-center text-white">
                    <WhatsAppIcon className="h-16 w-16" />
                    <p className="mt-2 text-[11px] font-bold tracking-wide">WhatsApp</p>
                  </div>
                </div>
              </div>
              <div className="flex-1 text-center lg:text-left">
                <h2 className="text-2xl leading-tight font-extrabold sm:text-3xl md:text-4xl">
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

      <section id="packages" className="bg-white py-16">
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
              <Reveal key={pkg.slug} delay={i * 50}>
                <article className="group overflow-hidden rounded-2xl bg-white shadow-[0_8px_24px_rgba(1,38,107,0.08)] ring-1 ring-slate-100 transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_18px_36px_rgba(1,38,107,0.16)]">
                  <Link href={`/tour-packages/${pkg.slug}`} className="relative block">
                    <Image src={pkg.image} alt={pkg.title} width={500} height={320} className="h-44 w-full object-cover transition duration-500 group-hover:scale-105" />
                    <span className="absolute top-3 right-3 rounded-full bg-yellow px-3 py-1 text-[11px] font-bold text-navy shadow-sm">
                      {pkg.duration}
                    </span>
                  </Link>
                  <div className="p-4">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="font-extrabold text-navy">
                          <Link href={`/tour-packages/${pkg.slug}`} className="hover:underline">{pkg.title}</Link>
                        </h3>
                        <p className="mt-1 text-sm font-medium text-slate-600">
                          {pkg.price.startsWith("From") || pkg.price.includes("₹") ? (
                            <>From <span className="font-bold text-price">{pkg.price.replace(/^From\s+/i, "")}</span></>
                          ) : (
                            <span className="font-semibold text-navy">{pkg.price}</span>
                          )}
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
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {pkg.inclusions.map((chip) => (
                        <span key={chip} className="rounded-full bg-sky px-2.5 py-1 text-[11px] font-semibold text-navy">
                          {chip}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
          <p className="mt-4 text-xs text-slate-500">* Starting prices, subject to dates, availability and confirmation. Other packages are quoted after enquiry.</p>
          <Link href="/tour-packages" className="mt-3 inline-block text-sm font-semibold text-navy sm:hidden">
            View All Packages →
          </Link>
        </div>
      </section>

      <section id="honeymoon" className="bg-sky/60 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="mb-8 flex items-end justify-between gap-4">
              <div>
                <h2 className="text-3xl font-extrabold text-navy md:text-4xl">
                  <span className="mark-line">Honeymoon</span> Packages
                </h2>
                <p className="mt-2 max-w-xl text-sm text-navy/80">
                  Quiet, well-paced getaways. Share your dates and preferred destination and we will suggest a suitable plan.
                </p>
              </div>
              <Link href="/travel-experiences/honeymoon-packages" className="hidden text-sm font-semibold text-navy hover:text-navy-light sm:inline">
                View Honeymoon Page →
              </Link>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {honeymoons.map((item, i) => (
              <Reveal key={item.name} delay={i * 60}>
                <article className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-100">
                  <Image src={item.image} alt={item.name} width={500} height={280} className="h-40 w-full object-cover" />
                  <div className="p-4">
                    <h3 className="font-extrabold text-navy">{item.name}</h3>
                    <p className="mt-2 text-sm text-slate-600">{item.text}</p>
                    <a
                      href={whatsappLink(`Hello Christ Holidays, we are planning a honeymoon in ${item.name}.`)}
                      className="mt-3 inline-flex text-sm font-semibold text-navy hover:underline"
                    >
                      Enquire on WhatsApp →
                    </a>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="groups" className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="mb-3 text-3xl font-extrabold text-navy md:text-4xl">
              Group Tours, <span className="mark-line">Families & Corporates</span>
            </h2>
            <p className="mb-8 max-w-2xl text-sm text-navy/80">
              Whether you are travelling as a family, a larger group or a company team, we help coordinate stays, transfers and a clear itinerary.
            </p>
          </Reveal>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {tripStyles.map((item, i) => (
              <Reveal key={item.title} delay={i * 70}>
                <article className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-100 transition hover:-translate-y-1 hover:shadow-lg">
                  <Image src={item.image} alt="" width={600} height={280} className="h-40 w-full object-cover" />
                  <div className="p-5">
                    <h3 className="text-xl font-extrabold text-navy">{item.title}</h3>
                    <p className="mt-2 text-sm text-slate-600">{item.text}</p>
                    <Link href={item.href} className="mt-3 inline-block text-sm font-semibold text-navy hover:underline">
                      Learn more →
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="bg-sky/50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="mb-3 text-3xl font-extrabold text-navy md:text-4xl">
              Visa, Flights & <span className="mark-line">Travel Support</span>
            </h2>
            <p className="mb-8 max-w-2xl text-sm text-navy/80">
              Holiday planning can include visa guidance, flight options and hotel bookings, handled alongside your itinerary.
            </p>
          </Reveal>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((item, i) => (
              <Reveal key={item.title} delay={i * 60}>
                <Link href={item.href} className="block rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100 transition hover:-translate-y-1 hover:shadow-lg">
                  <h3 className="font-extrabold text-navy">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{item.text}</p>
                  <span className="mt-3 inline-block text-sm font-semibold text-navy">View services →</span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="mb-8 text-center text-3xl font-extrabold text-navy md:text-4xl">
              How It <span className="mark-line">Works</span>
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((item, i) => (
              <Reveal key={item.step} delay={i * 70}>
                <div className="rounded-2xl bg-sky/70 p-6">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-yellow font-extrabold text-navy">
                    {item.step}
                  </span>
                  <h3 className="mt-4 font-extrabold text-navy">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="bg-sky/40 py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="mb-8 text-center text-3xl font-extrabold text-navy md:text-4xl">
              Frequently Asked <span className="mark-line">Questions</span>
            </h2>
          </Reveal>
          <FaqAccordion items={faqs} />
        </div>
      </section>

      <section id="branches" className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="mb-3 text-3xl font-extrabold text-navy md:text-4xl">
              Our Offices in <span className="mark-line">Tamil Nadu</span>
            </h2>
            <p className="mb-8 max-w-2xl text-sm text-navy/80">
              Call the branch nearest you, or message us on WhatsApp. Email: {EMAIL}
            </p>
          </Reveal>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {branches.map((branch, i) => (
              <Reveal key={branch.city} delay={i * 70}>
                <article className="rounded-2xl bg-sky/60 p-6 ring-1 ring-slate-100">
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
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="plan" className="form-mountains py-14">
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

      <section className="bg-navy py-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 text-center sm:px-6 lg:flex-row lg:px-8 lg:text-left">
          <div>
            <h2 className="text-2xl font-extrabold text-white md:text-3xl">Ready to plan your next holiday?</h2>
            <p className="mt-2 text-blue-100">Share your destination and dates — the team in Salem, Madurai or Thoothukudi will help you get started.</p>
          </div>
          <a
            href={whatsappLink("Hello Christ Holidays, I am ready to plan my next holiday.")}
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-yellow px-6 py-3.5 font-bold text-navy transition hover:-translate-y-0.5 hover:bg-yellow-dark"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Start on WhatsApp →
          </a>
        </div>
      </section>
    </div>
  );
}
