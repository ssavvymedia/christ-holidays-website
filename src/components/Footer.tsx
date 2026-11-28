import Image from "next/image";
import Link from "next/link";
import { branches, EMAIL, LEGAL_NAME, whatsappLink } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-6">
          <div className="sm:col-span-2">
            <div className="mb-4 inline-block rounded-md bg-white p-1.5">
              <span className="relative block h-12 w-[9.7rem] md:h-14 md:w-[11.3rem]">
                <Image
                  src="/assets/logo.png"
                  alt="Christ Holiday's & Travels Pvt Ltd"
                  fill
                  sizes="180px"
                  className="object-contain object-left"
                />
              </span>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-blue-100">
              Holiday planning from the first enquiry to your journey home. Travel agency offices in Salem, Madurai and Thoothukudi (Tuticorin), Tamil Nadu.
            </p>
            <div className="mt-4 space-y-1 text-sm text-blue-100">
              {branches.map((branch) => (
                <p key={branch.id}>
                  <Link href={branch.path} className="hover:text-yellow">
                    {branch.label}
                  </Link>
                  {": "}
                  <a href={branch.tel} className="hover:text-yellow">
                    {branch.display}
                  </a>
                </p>
              ))}
              <p>
                WhatsApp:{" "}
                <a href={whatsappLink()} className="hover:text-yellow">
                  +91 96298 79026
                </a>
              </p>
              <p>
                Email:{" "}
                <a href={`mailto:${EMAIL}`} className="hover:text-yellow">
                  {EMAIL}
                </a>
              </p>
            </div>
          </div>
          <div>
            <h2 className="mb-4 text-base font-semibold">Explore</h2>
            <ul className="space-y-2 text-sm text-blue-100">
              <li><Link href="/domestic-tour-packages" className="hover:text-yellow">Domestic Tours</Link></li>
              <li><Link href="/international-tour-packages" className="hover:text-yellow">International Tours</Link></li>
              <li><Link href="/destinations" className="hover:text-yellow">Destinations</Link></li>
              <li><Link href="/tour-packages" className="hover:text-yellow">Sample Packages</Link></li>
              <li><Link href="/travel-experiences/honeymoon-packages" className="hover:text-yellow">Honeymoon Packages</Link></li>
              <li><Link href="/travel-experiences/group-tours" className="hover:text-yellow">Group Tours</Link></li>
              <li><Link href="/travel-experiences/corporate-tours" className="hover:text-yellow">Corporate Tours</Link></li>
              <li><Link href="/faq" className="hover:text-yellow">FAQs</Link></li>
            </ul>
          </div>
          <div>
            <h2 className="mb-4 text-base font-semibold">Destinations</h2>
            <ul className="space-y-2 text-sm text-blue-100">
              <li><Link href="/domestic-tour-packages/south-india/kerala" className="hover:text-yellow">Kerala</Link></li>
              <li><Link href="/domestic-tour-packages/north-india/kashmir" className="hover:text-yellow">Kashmir</Link></li>
              <li><Link href="/international-tour-packages/middle-east/dubai" className="hover:text-yellow">Dubai</Link></li>
              <li><Link href="/international-tour-packages/asia" className="hover:text-yellow">Singapore, Bali and Thailand</Link></li>
              <li><Link href="/international-tour-packages/europe" className="hover:text-yellow">Europe</Link></li>
            </ul>
          </div>
          <div>
            <h2 className="mb-4 text-base font-semibold">Travel Services</h2>
            <ul className="space-y-2 text-sm text-blue-100">
              <li><Link href="/travel-services#visa" className="hover:text-yellow">Visa Assistance</Link></li>
              <li><Link href="/travel-services#flights" className="hover:text-yellow">Flight Booking</Link></li>
              <li><Link href="/travel-services#hotels" className="hover:text-yellow">Hotel Booking</Link></li>
              <li><Link href="/contact" className="hover:text-yellow">Customised Holidays</Link></li>
            </ul>
          </div>
          <div>
            <h2 className="mb-4 text-base font-semibold">Company</h2>
            <ul className="space-y-2 text-sm text-blue-100">
              <li><Link href="/about" className="hover:text-yellow">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-yellow">Contact Us</Link></li>
              <li><Link href="/locations" className="hover:text-yellow">Our Offices</Link></li>
              <li><Link href="/locations/salem" className="hover:text-yellow">Salem</Link></li>
              <li><Link href="/locations/madurai" className="hover:text-yellow">Madurai</Link></li>
              <li><Link href="/locations/thoothukudi" className="hover:text-yellow">Thoothukudi</Link></li>
              <li><Link href="/legal/privacy-policy" className="hover:text-yellow">Privacy Policy</Link></li>
              <li><Link href="/legal/terms-and-conditions" className="hover:text-yellow">Terms and Conditions</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-white/15 pt-8 text-sm text-blue-100 sm:flex-row sm:items-center">
          <div>
            <p>&copy; {new Date().getFullYear()} {LEGAL_NAME}. All rights reserved.</p>
            <p className="mt-1">Prices are shared after you enquire. This website does not show confirmed fares.</p>
          </div>
          <a
            href={whatsappLink("Hello Christ Holidays, I would like to plan a trip.")}
            className="inline-flex min-h-11 items-center rounded-full bg-yellow px-4 py-2 font-semibold text-navy hover:bg-yellow-dark"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </footer>
  );
}
