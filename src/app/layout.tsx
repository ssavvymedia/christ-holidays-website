import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Christ Holidays & Travels | Premium Domestic & International Tour Packages",
    template: "%s | Christ Holidays & Travels",
  },
  description: "Thoughtfully planned holidays, memorable destinations and travel support from the first enquiry to your journey home. Explore domestic and international tour packages with Christ Holidays.",
  keywords: ["tour packages", "holiday packages", "domestic tours", "international tours", "Christ Holidays", "travel agency Salem"],
  openGraph: {
    title: "Christ Holidays & Travels",
    description: "Travel Beyond Ordinary. Explore the World with Christ Holidays.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-black font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
