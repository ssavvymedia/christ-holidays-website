import Link from "next/link";
import { branches, EMAIL, whatsappLink } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <img src="/assets/logo.png" alt="Christ Holiday's & Travels" className="mb-4 h-14 w-auto rounded bg-white p-1" />
            <p className="text-sm text-blue-100">
              Thoughtfully planned holidays from the first enquiry to your journey home.
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
              <li><Link href="/travel-experiences/honeymoon-packages" className="hover:text-yellow">Honeymoon Packages</Link></li>
              <li><Link href="/travel-experiences/group-tours" className="hover:text-yellow">Group Tours</Link></li>
              <li><Link href="/travel-services" className="hover:text-yellow">Travel Services</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-semibold">Popular Destinations</h4>
            <ul className="space-y-2 text-sm text-blue-100">
              <li><Link href="/domestic-tour-packages/north-india" className="hover:text-yellow">Kashmir</Link></li>
              <li><Link href="/international-tour-packages/middle-east" className="hover:text-yellow">Dubai</Link></li>
              <li><Link href="/international-tour-packages/asia" className="hover:text-yellow">Singapore</Link></li>
              <li><Link href="/international-tour-packages/asia" className="hover:text-yellow">Thailand</Link></li>
              <li><Link href="/international-tour-packages/asia" className="hover:text-yellow">Bali</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-semibold">Company</h4>
            <ul className="space-y-2 text-sm text-blue-100">
              <li><Link href="/about" className="hover:text-yellow">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-yellow">Contact Us</Link></li>
              <li><Link href="/locations" className="hover:text-yellow">Our Offices</Link></li>
              <li><Link href="/legal/privacy-policy" className="hover:text-yellow">Privacy Policy</Link></li>
              <li><Link href="/legal/terms-and-conditions" className="hover:text-yellow">Terms & Conditions</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-navy-light pt-8 text-center text-sm text-blue-200">
          <p>&copy; {new Date().getFullYear()} Christ Holiday&apos;s &amp; Travels Pvt. Ltd. All rights reserved.</p>
          <p className="mt-1">Package prices marked with * are starting prices and subject to confirmation.</p>
        </div>
      </div>
    </footer>
  );
}
