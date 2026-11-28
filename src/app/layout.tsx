import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { organizationGraph } from "@/lib/seo";
import { SITE_NAME, SITE_URL } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID || "G-6KYT5MDJXE";

const description =
  "Christ Holidays & Travels plans domestic and international holidays from Salem, Madurai and Thoothukudi (Tuticorin), Tamil Nadu. Enquire for package prices, honeymoons, group and corporate tours, flights, hotels and visa support.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Holiday Packages from Salem, Madurai and Tuticorin`,
    template: `%s | ${SITE_NAME}`,
  },
  description,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  keywords: [
    "Christ Holidays & Travels",
    "travel agency Salem",
    "tour operator Madurai",
    "travel agency Tuticorin",
    "travel agency Thoothukudi",
    "domestic tour packages Tamil Nadu",
    "international tour packages",
    "honeymoon packages",
    "group tours",
    "corporate tours",
    "visa assistance",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName: SITE_NAME,
    title: `${SITE_NAME} | Holiday Packages from Salem, Madurai and Tuticorin`,
    description,
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Christ Holidays & Travels logo and the line: holiday planning from Salem, Madurai and Thoothukudi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | Holiday Packages from Salem, Madurai and Tuticorin`,
    description,
    images: ["/og.png"],
  },
  robots: { index: true, follow: true },
  formatDetection: { telephone: true, email: true, address: false },
};

export const viewport: Viewport = {
  themeColor: "#01266b",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-slate-900 font-sans">
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_MEASUREMENT_ID}');`}
        </Script>
        <a
          href="#content"
          className="absolute left-4 top-4 z-[100] -translate-y-24 rounded-full bg-yellow px-4 py-2 font-semibold text-navy focus:translate-y-0"
        >
          Skip to content
        </a>
        <JsonLd data={organizationGraph()} />
        <Header />
        <main id="content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
