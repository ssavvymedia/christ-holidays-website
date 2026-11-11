"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex flex-wrap justify-between items-center text-sm text-gray-600">
          <div className="flex items-center gap-4">
            <Image src="/logo.webp" alt="Christ Holidays" width={140} height={45} className="h-10 w-auto" />
            <span className="hidden md:inline text-primary font-medium">Your Trusted Travel Partner</span>
          </div>
          <div className="flex flex-wrap items-center gap-4 md:gap-6">
            <a href="tel:+917708104235" className="flex items-center gap-1 hover:text-primary">
              <span className="text-yellow-500">📞</span> +91 770 8104 235
            </a>
            <a href="https://wa.me/919629879026" className="flex items-center gap-1 hover:text-primary">
              <span className="text-green-500">💬</span> +91 962 9879 026
            </a>
            <span className="hidden sm:flex items-center gap-1">
              <span className="text-red-500">📍</span> Salem | Madurai | Thoothukudi
            </span>
          </div>
        </div>
      </div>
      <div className="bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14">
            <nav className="hidden lg:flex items-center space-x-6 text-sm font-medium">
              <Link href="/" className="hover:text-accent border-b-2 border-accent pb-1">Home</Link>
              <Link href="/domestic-tour-packages" className="hover:text-accent">Domestic Tours</Link>
              <Link href="/international-tour-packages" className="hover:text-accent">International Tours</Link>
              <Link href="/travel-experiences/honeymoon-packages" className="hover:text-accent">Honeymoon</Link>
              <Link href="/travel-services" className="hover:text-accent">Travel Services</Link>
              <Link href="/about" className="hover:text-accent">About Us</Link>
            </nav>
            <a href="https://wa.me/919629879026?text=Hello%20Christ%20Holidays%2C%20I%20want%20to%20plan%20my%20trip." className="bg-accent text-black px-4 py-2 rounded-full font-semibold text-sm hover:bg-yellow-400 transition">Plan Your Trip on WhatsApp →</a>
            <button className="lg:hidden text-white" onClick={() => setMobileOpen(!mobileOpen)}>☰</button>
          </div>
        </div>
        {mobileOpen && (
          <div className="lg:hidden bg-primary-dark px-4 py-4 space-y-3">
            <Link href="/" className="block py-2" onClick={() => setMobileOpen(false)}>Home</Link>
            <Link href="/domestic-tour-packages" className="block py-2" onClick={() => setMobileOpen(false)}>Domestic Tours</Link>
            <Link href="/international-tour-packages" className="block py-2" onClick={() => setMobileOpen(false)}>International Tours</Link>
            <Link href="/about" className="block py-2" onClick={() => setMobileOpen(false)}>About</Link>
            <Link href="/contact" className="block py-2" onClick={() => setMobileOpen(false)}>Contact</Link>
          </div>
        )}
      </div>
    </header>
  );
}
