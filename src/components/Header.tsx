"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { WhatsAppIcon } from "@/components/icons";
import { branches, mainNav, WHATSAPP_DISPLAY, whatsappLink, type NavItem } from "@/lib/site";

function PhoneGlyph() {
  return (
    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-yellow text-navy ring-1 ring-[#b38f00]">
      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor" aria-hidden="true">
        <path d="M6.6 10.8c1.4 2.7 3.9 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.2 1.2.4 2.5.6 3.8.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.8 21 3 13.2 3 3.7 3 3.1 3.4 2.7 4 2.7h3.5c.6 0 1 .4 1 1 0 1.3.2 2.6.6 3.8.1.4 0 .8-.2 1.1l-2.3 2.2Z" />
      </svg>
    </span>
  );
}

function Chevron() {
  return (
    <svg viewBox="0 0 20 20" className="h-3 w-3 opacity-80" fill="currentColor" aria-hidden="true">
      <path d="M5.5 7.5 10 12l4.5-4.5" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function pathOf(href: string) {
  return href.split("#")[0];
}

function isCurrent(pathname: string, href: string) {
  const base = pathOf(href);
  if (base === "/") return pathname === "/";
  return pathname === base || pathname.startsWith(`${base}/`);
}

function itemIsCurrent(pathname: string, item: NavItem) {
  return isCurrent(pathname, item.href) || Boolean(item.children?.some((child) => isCurrent(pathname, child.href)));
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white shadow-[0_2px_16px_rgba(1,38,107,0.08)]">
      <div className="bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-2.5 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div className="flex items-center gap-3">
            <Link href="/" className="shrink-0">
              <span className="relative block h-10 w-[8.1rem] sm:h-11 sm:w-[8.9rem] md:h-12 md:w-[9.7rem] lg:h-[3.25rem] lg:w-[10.5rem]">
                <Image
                  src="/assets/logo.png"
                  alt="Christ Holiday's & Travels Pvt Ltd — Your Travel Designer"
                  fill
                  priority
                  sizes="168px"
                  className="object-contain object-left"
                />
              </span>
            </Link>
            <span className="hidden max-w-[8.5rem] border-l border-slate-200 pl-3 text-[12px] leading-tight text-navy md:inline">
              Your Trusted Travel Partner
            </span>
          </div>
          <ul className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[13px] font-semibold text-navy">
            {branches.map((branch) => (
              <li key={branch.id}>
                <a href={branch.tel} className="inline-flex min-h-11 items-center gap-1.5 rounded-full pr-1 hover:text-navy-light">
                  <PhoneGlyph />
                  <span>
                    <span className="block text-[10px] font-bold tracking-wide text-navy uppercase">{branch.shortLabel}</span>
                    {branch.display}
                  </span>
                </a>
              </li>
            ))}
            <li>
              <a href={whatsappLink()} className="inline-flex min-h-11 items-center gap-1.5 rounded-full pr-1 hover:text-navy-light">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#075E54] text-white">
                  <WhatsAppIcon className="h-4 w-4" />
                </span>
                <span>
                  <span className="block text-[10px] font-bold tracking-wide text-navy uppercase">WhatsApp</span>
                  {WHATSAPP_DISPLAY}
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-navy text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-2 px-4 sm:px-6 lg:px-8">
          <nav className="hidden min-w-0 items-center xl:flex" aria-label="Primary">
            {mainNav.map((item) => {
              const current = itemIsCurrent(pathname, item);
              return (
                <div key={item.href} className="nav-drop relative">
                  <Link
                    href={item.href}
                    aria-current={current ? "page" : undefined}
                    className={`inline-flex min-h-11 items-center gap-1 px-2.5 py-3 text-[13px] font-medium transition hover:text-yellow ${
                      current ? "border-b-[3px] border-yellow text-white" : ""
                    }`}
                  >
                    {item.label}
                    {item.children && <Chevron />}
                  </Link>
                  {item.children && (
                    <div className="nav-drop-menu invisible absolute top-full left-0 z-20 min-w-[220px] rounded-xl bg-white py-2 text-navy opacity-0 shadow-lg ring-1 ring-slate-100 transition duration-150">
                      {item.children.map((child) => (
                        <Link key={child.href + child.label} href={child.href} className="block px-4 py-2.5 text-sm hover:bg-sky">
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>
          <a
            href={whatsappLink("Hello Christ Holidays, I want to plan my trip.")}
            className="my-2 ml-auto inline-flex min-h-11 max-w-[calc(100%-3.5rem)] items-center gap-2 rounded-full bg-yellow px-3 py-2 text-xs font-bold text-navy shadow-sm transition hover:-translate-y-0.5 hover:bg-yellow-dark sm:px-4 sm:text-[13px] xl:ml-3"
          >
            <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#075E54] text-white">
              <WhatsAppIcon className="h-3.5 w-3.5" />
            </span>
            <span className="truncate sm:hidden">WhatsApp</span>
            <span className="hidden sm:inline">Plan your trip on WhatsApp</span>
          </a>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-md xl:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            onClick={() => setMobileOpen((open) => !open)}
          >
            <span className="text-2xl leading-none" aria-hidden="true">
              {mobileOpen ? "✕" : "☰"}
            </span>
          </button>
        </div>
        {mobileOpen && (
          <nav id="mobile-nav" className="space-y-1 bg-navy-dark px-4 py-3 xl:hidden" aria-label="Mobile">
            {mainNav.map((item) => (
              <div key={item.href}>
                <Link href={item.href} className="block min-h-11 py-2.5 text-sm" onClick={() => setMobileOpen(false)}>
                  {item.label}
                </Link>
                {item.children?.map((child) => (
                  <Link
                    key={child.href + child.label}
                    href={child.href}
                    className="block min-h-11 py-2 pl-4 text-sm text-blue-100"
                    onClick={() => setMobileOpen(false)}
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
