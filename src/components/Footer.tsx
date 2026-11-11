import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Christ Holidays & Travels</h3>
            <p className="text-blue-100 text-sm">Thoughtfully planned holidays from the first enquiry to your journey home.</p>
            <div className="mt-4 text-sm text-blue-100">
              <p>Salem (HO), Madurai, Thoothukudi</p>
              <p className="mt-2">Phone: +91 77081 04235</p>
              <p>WhatsApp: +91 96298 79026</p>
              <p>Email: christholidaystravels@gmail.com</p>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Explore</h4>
            <ul className="space-y-2 text-sm text-blue-100">
              <li><Link href="/domestic-tour-packages" className="hover:text-accent">Domestic Tours</Link></li>
              <li><Link href="/international-tour-packages" className="hover:text-accent">International Tours</Link></li>
              <li><Link href="/travel-experiences/honeymoon-packages" className="hover:text-accent">Honeymoon Packages</Link></li>
              <li><Link href="/travel-services" className="hover:text-accent">Travel Services</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Popular Destinations</h4>
            <ul className="space-y-2 text-sm text-blue-100">
              <li><Link href="/domestic-tour-packages/south-india/kerala" className="hover:text-accent">Kerala</Link></li>
              <li><Link href="/domestic-tour-packages/north-india/kashmir" className="hover:text-accent">Kashmir</Link></li>
              <li><Link href="/international-tour-packages/middle-east/dubai" className="hover:text-accent">Dubai</Link></li>
              <li><Link href="/international-tour-packages/asia/singapore" className="hover:text-accent">Singapore</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-blue-100">
              <li><Link href="/legal/privacy-policy" className="hover:text-accent">Privacy Policy</Link></li>
              <li><Link href="/legal/terms-and-conditions" className="hover:text-accent">Terms & Conditions</Link></li>
              <li><Link href="/contact" className="hover:text-accent">Contact Us</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-blue-800 mt-8 pt-8 text-center text-sm text-blue-200">
          <p>&copy; {new Date().getFullYear()} Christ Holidays & Travels Pvt. Ltd. All rights reserved.</p>
          <p className="mt-1">Verify all contact details and package information with the business before booking.</p>
        </div>
      </div>
    </footer>
  );
}
