import type { Metadata } from "next";
import Link from "next/link";
import { SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: `Page not found | ${SITE_NAME}` },
  description: "This page is not on the Christ Holidays & Travels website. Go back to the homepage or contact the Salem, Madurai or Thoothukudi office.",
  robots: { index: false, follow: false },
  alternates: { canonical: null },
  openGraph: null,
  twitter: null,
};

export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-20">
      <p className="text-sm font-semibold tracking-wide text-navy uppercase">404</p>
      <h1 className="mt-3 text-4xl font-extrabold text-navy">This page is not available</h1>
      <p className="mt-4 text-slate-700">
        The link may be out of date. The homepage, destinations and contact page are the reliable places to continue.
      </p>
      <div className="mt-8 flex flex-wrap gap-4">
        <Link href="/" className="inline-flex min-h-11 items-center rounded-full bg-navy px-5 py-2 font-semibold text-white">
          Home
        </Link>
        <Link href="/destinations" className="inline-flex min-h-11 items-center rounded-full bg-yellow px-5 py-2 font-semibold text-navy">
          Destinations
        </Link>
        <Link href="/contact" className="inline-flex min-h-11 items-center font-semibold text-navy underline">
          Contact
        </Link>
      </div>
    </div>
  );
}
