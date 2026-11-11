"use client";

import Link from "next/link";
import { useState } from "react";
import { branches, whatsappLink } from "@/lib/site";
import { WhatsAppIcon } from "@/components/icons";

type NavItem = {
  href: string;
  label: string;
  children?: { href: string; label: string }[];
};

const navItems: NavItem[] = [
  { href: "/", label: "Home" },
  {
    href: "/domestic-tour-packages",
    label: "Domestic Tours",
    children: [
      { href: "/domestic-tour-packages/south-india", label: "South India" },
      { href: "/domestic-tour-packages/north-india", label: "North India" },
    ],
  },
  {
    href: "/international-tour-packages",
    label: "International Tours",
    children: [
      { href: "/international-tour-packages/asia", label: "Asia" },
      { href: "/international-tour-packages/middle-east", label: "Middle East" },
      { href: "/international-tour-packages/europe", label: "Europe" },
    ],
  },
  {
    href: "/travel-experiences/honeymoon-packages",
    label: "Honeymoon",
    children: [{ href: "/travel-experiences/honeymoon-packages", label: "Honeymoon Packages" }],
  },
  { href: "/travel-experiences/group-tours", label: "Group Tours" },
  {
    href: "/travel-services",
    label: "Travel Services",
    children: [{ href: "/travel-services", label: "All Travel Services" }],
  },
  { href: "/about", label: "About Us" },
];

function PhoneGlyph() {
  return (
    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-yellow text-navy">
      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor" aria-hidden="true">
        <path d="M6.6 10.8c1.4 2.7 3.9 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.2 1.2.4 2.5.6 3.8.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.8 21 3 13.2 3 3.7 3 3.1 3.4 2.7 4 2.7h3.5c.6 0 1 .4 1 1 0 1.3.2 2.6.6 3.8.1.4 0 .8-.2 1.1l-2.3 2.2Z" />
      </svg>
    </span>
  );
}

function PinGlyph() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 text-yellow-dark" fill="currentColor" aria-hidden="true">
      <path d="M12 2C8.1 2 5 5.1 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5Z" />
    </svg>
  );
}

function Chevron() {
  return (
    <svg viewBox="0 0 20 20" className="h-3 w-3 opacity-80" fill="currentColor" aria-hidden="true">
      <path d="M5.5 7.5 10 12l4.5-4.5" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-[0_2px_16px_rgba(1,38,107,0.08)]">
      <div className="bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-2.5 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div className="flex items-center gap-3">
            <Link href="/" className="shrink-0">
              <img
                src="/assets/logo.png"
                alt="Christ Holiday's & Travels Pvt Ltd. — Your Travel Designer"
                className="h-11 w-auto md:h-12"
              />
            </Link>
            <span className="hidden max-w-[8.5rem] border-l border-slate-200 pl-3 text-[12px] leading-tight text-navy/80 md:inline">
              Your Trusted Travel Partner
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[13px] font-semibold text-navy">
            <a href="tel:+917708104235" className="inline-flex items-center gap-1.5 hover:text-navy-light">
              <PhoneGlyph />
              <span>+91 770 8104 235</span>
            </a>
            <a
              href={whatsappLink()}
              className="inline-flex items-center gap-1.5 hover:text-navy-light"
            >
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#25D366] text-white">
                <WhatsAppIcon className="h-3.5 w-3.5" />
              </span>
              <span>+91 962 9879 026</span>
            </a>
            <div className="flex flex-wrap items-center gap-1 text-[13px] font-semibold">
              <PinGlyph />
              {branches.map((branch, i) => (
                <span key={branch.city} className="inline-flex items-center">
                  {i > 0 && <span className="mx-1.5 text-slate-300">|</span>}
                  <a href={branch.tel} className="rounded-full px-1.5 py-0.5 transition hover:bg-sky hover:text-navy" title={`${branch.city} ${branch.display}`}>
                    {branch.city}
                  </a>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-navy text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
          <nav className="hidden items-center gap-1 py-0 text-[13px] font-medium xl:flex xl:gap-0.5">
            {navItems.map((item, index) => (
              <div key={item.href} className="nav-drop relative">
                <Link
                  href={item.href}
                  className={`inline-flex items-center gap-1 px-3 py-3.5 transition hover:text-yellow ${
                    index === 0 ? "border-b-[3px] border-yellow text-white" : ""
                  }`}
                >
                  {item.label}
                  {item.children && <Chevron />}
                </Link>
                {item.children && (
                  <div className="nav-drop-menu invisible absolute top-full left-0 z-20 min-w-[200px] rounded-xl bg-white py-2 text-navy opacity-0 shadow-lg ring-1 ring-slate-100 transition duration-150">
                    {item.children.map((child) => (
                      <Link
                        key={child.href + child.label}
                        href={child.href}
                        className="block px-4 py-2 text-sm hover:bg-sky"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
          <a
            href={whatsappLink("Hello Christ Holidays, I want to plan my trip.")}
            className="my-2 ml-auto inline-flex items-center gap-2 rounded-full bg-yellow px-4 py-2 text-xs font-bold text-navy shadow-sm transition hover:-translate-y-0.5 hover:bg-yellow-dark hover:shadow-md sm:text-[13px] xl:ml-4"
          >
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#25D366] text-white">
              <WhatsAppIcon className="h-3.5 w-3.5" />
            </span>
            Plan Your Trip on WhatsApp
            <span aria-hidden="true">→</span>
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
              <div key={item.href}>
                <Link href={item.href} className="block py-2 text-sm" onClick={() => setMobileOpen(false)}>
                  {item.label}
                </Link>
                {item.children?.map((child) => (
                  <Link
                    key={child.href + child.label}
                    href={child.href}
                    className="block py-1.5 pl-4 text-sm text-blue-100"
                    onClick={() => setMobileOpen(false)}
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
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
