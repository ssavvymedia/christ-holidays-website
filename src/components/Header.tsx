"use client";

import Link from "next/link";
import { useState } from "react";
import { branches, whatsappLink } from "@/lib/site";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/domestic-tour-packages", label: "Domestic Tours" },
  { href: "/international-tour-packages", label: "International Tours" },
  { href: "/travel-experiences/honeymoon-packages", label: "Honeymoon" },
  { href: "/travel-experiences/group-tours", label: "Group Tours" },
  { href: "/travel-services", label: "Travel Services" },
  { href: "/about", label: "About Us" },
];

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 shrink-0" fill="currentColor" aria-hidden="true">
      <path d="M6.6 10.8c1.4 2.7 3.9 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.2 1.2.4 2.5.6 3.8.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.8 21 3 13.2 3 3.7 3 3.1 3.4 2.7 4 2.7h3.5c.6 0 1 .4 1 1 0 1.3.2 2.6.6 3.8.1.4 0 .8-.2 1.1l-2.3 2.2Z" />
    </svg>
  );
}

function WhatsAppIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M12.04 2C6.58 2 2.15 6.4 2.15 11.86c0 1.74.46 3.44 1.32 4.94L2 22l5.35-1.4a10 10 0 0 0 4.69 1.2h.04c5.46 0 9.89-4.4 9.89-9.86C21.97 6.4 17.5 2 12.04 2Zm5.75 14.2c-.24.68-1.4 1.3-1.94 1.35-.5.05-1.12.07-1.81-.11-.42-.12-.95-.31-1.64-.6-2.88-1.25-4.76-4.15-4.9-4.34-.14-.2-1.16-1.54-1.16-2.94 0-1.4.73-2.08.99-2.37.26-.29.57-.36.76-.36.19 0 .38 0 .54.01.17.01.41-.07.64.49.24.58.81 2 .88 2.14.07.14.12.31.02.5-.1.19-.14.31-.28.48-.14.16-.3.37-.42.49-.14.14-.28.3-.12.58.16.29.72 1.18 1.54 1.91 1.06.95 1.95 1.24 2.24 1.38.29.14.45.12.62-.07.17-.19.72-.84.91-1.13.19-.29.38-.24.64-.14.26.1 1.66.78 1.95.92.29.14.48.21.55.33.07.12.07.7-.17 1.38Z" />
    </svg>
  );
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="border-b border-slate-100 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-3 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div className="flex items-center gap-4">
            <Link href="/" className="shrink-0">
              <img
                src="/assets/logo.png"
                alt="Christ Holiday's & Travels Pvt Ltd. — Your Travel Designer"
                className="h-12 w-auto md:h-14"
              />
            </Link>
            <span className="hidden border-l border-navy/20 pl-4 text-sm font-medium text-navy md:inline">
              Your Trusted Travel Partner
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {branches.map((branch) => (
              <a key={branch.city} href={branch.tel} className="city-pill">
                <PhoneIcon />
                <span>
                  {branch.city} {branch.display}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-navy text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <nav className="hidden items-center gap-6 py-3 text-[13px] font-medium xl:flex xl:gap-7">
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className={
                  index === 0
                    ? "border-b-2 border-yellow pb-0.5 text-yellow"
                    : "hover:text-yellow"
                }
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <a
            href={whatsappLink("Hello Christ Holidays, I want to plan my trip.")}
            className="my-2 inline-flex items-center gap-2 rounded-full bg-yellow px-4 py-2 text-xs font-bold text-navy transition hover:bg-yellow-dark sm:text-sm"
          >
            <WhatsAppIcon />
            Plan Your Trip on WhatsApp
          </a>
          <button
            type="button"
            className="xl:hidden"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((open) => !open)}
          >
            <span className="text-2xl leading-none">{mobileOpen ? "✕" : "☰"}</span>
          </button>
        </div>
        {mobileOpen && (
          <div className="space-y-1 bg-navy-dark px-4 py-3 xl:hidden">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block py-2 text-sm"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link href="/contact" className="block py-2 text-sm" onClick={() => setMobileOpen(false)}>
              Contact
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
