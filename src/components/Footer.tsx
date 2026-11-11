import Link from "next/link";
import { branches, EMAIL, whatsappLink } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-6">
          <div className="sm:col-span-2">
            <img
              src="/assets/logo.png"
              alt="Christ Holiday's & Travels Pvt Ltd."
              width={396}
              height={123}
              className="mb-4 h-12 w-auto max-w-[240px] rounded-md bg-white object-contain p-1.5 md:h-14"
            />
            <p className="max-w-sm text-sm text-blue-100">
              Thoughtfully planned holidays from the first enquiry to your journey home. Offices in Salem, Madurai and Thoothukudi.
            </p>
            <div className="mt-4 space-y-1 text-sm text-blue-100">
              {branches.map((branch) => (
                <p key={branch.city}>
                  {branch.label}:{" "}
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
              <p>Email: {EMAIL}</p>
            </div>
          </div>
          <div>
            <h4 className="mb-4 font-semibold">Explore</h4>
            <ul className="space-y-2 text-sm text-blue-100">
              <li><Link href="/domestic-tour-packages" className="hover:text-yellow">Domestic Tours</Link></li>
              <li><Link href="/international-tour-packages" className="hover:text-yellow">International Tours</Link></li>
              <li><Link href="/tour-packages" className="hover:text-yellow">All Packages</Link></li>
              <li><Link href="/travel-experiences/honeymoon-packages" className="hover:text-yellow">Honeymoon Packages</Link></li>
              <li><Link href="/travel-experiences/group-tours" className="hover:text-yellow">Group Tours</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-semibold">Destinations</h4>
            <ul className="space-y-2 text-sm text-blue-100">
              <li><Link href="/domestic-tour-packages/south-india" className="hover:text-yellow">Kerala & South India</Link></li>
              <li><Link href="/domestic-tour-packages/north-india" className="hover:text-yellow">Kashmir & North India</Link></li>
              <li><Link href="/international-tour-packages/middle-east" className="hover:text-yellow">Dubai</Link></li>
              <li><Link href="/international-tour-packages/asia" className="hover:text-yellow">Singapore, Bali & Thailand</Link></li>
              <li><Link href="/international-tour-packages/europe" className="hover:text-yellow">Europe</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-semibold">Travel Services</h4>
            <ul className="space-y-2 text-sm text-blue-100">
              <li><Link href="/travel-services" className="hover:text-yellow">Visa Assistance</Link></li>
              <li><Link href="/travel-services" className="hover:text-yellow">Flight Booking</Link></li>
              <li><Link href="/travel-services" className="hover:text-yellow">Hotel Booking</Link></li>
              <li><Link href="/contact" className="hover:text-yellow">Customised Holidays</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-semibold">Company</h4>
            <ul className="space-y-2 text-sm text-blue-100">
              <li><Link href="/about" className="hover:text-yellow">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-yellow">Contact Us</Link></li>
              <li><Link href="/locations" className="hover:text-yellow">Our Offices</Link></li>
              <li><Link href="/locations/salem" className="hover:text-yellow">Salem</Link></li>
              <li><Link href="/locations/madurai" className="hover:text-yellow">Madurai</Link></li>
              <li><Link href="/locations/thoothukudi" className="hover:text-yellow">Thoothukudi</Link></li>
              <li><Link href="/legal/privacy-policy" className="hover:text-yellow">Privacy Policy</Link></li>
              <li><Link href="/legal/terms-and-conditions" className="hover:text-yellow">Terms & Conditions</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-navy-light pt-8 text-sm text-blue-200 sm:flex-row sm:items-center">
          <div>
            <p>&copy; {new Date().getFullYear()} Christ Holiday&apos;s &amp; Travels Pvt. Ltd. All rights reserved.</p>
            <p className="mt-1">Package prices marked with * are starting prices and subject to confirmation.</p>
          </div>
          <a
            href={whatsappLink("Hello Christ Holidays, I would like to plan a trip.")}
            className="inline-flex rounded-full bg-yellow px-4 py-2 font-semibold text-navy hover:bg-yellow-dark"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </footer>
  );
}
