import type { Metadata } from "next";
import type { Crumb, PageFaq } from "@/lib/content";
import { branches, EMAIL, founder, LEGAL_NAME, SITE_NAME, SITE_URL, type Branch } from "@/lib/site";

const ogImage = {
  url: "/og.png",
  width: 1200,
  height: 630,
  alt: "Christ Holidays & Travels logo and the line: holiday planning from Salem, Madurai and Thoothukudi",
};

type MetaInput = {
  title: string;
  description: string;
  path: string;
  absolute?: boolean;
};

export function pageMetadata({ title, description, path, absolute = false }: MetaInput): Metadata {
  const fullTitle = absolute ? title : `${title} | ${SITE_NAME}`;
  return {
    title: absolute ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "en_IN",
      url: path,
      siteName: SITE_NAME,
      title: fullTitle,
      description,
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage.url],
    },
  };
}

function absolute(path: string) {
  return path === "/" ? SITE_URL : `${SITE_URL}${path}`;
}

export function breadcrumbLd(crumbs: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: absolute(crumb.path),
    })),
  };
}

export function faqLd(items: PageFaq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

function postalAddress(branch: Branch) {
  return {
    "@type": "PostalAddress",
    addressLocality: branch.city,
    addressRegion: "Tamil Nadu",
    addressCountry: "IN",
  };
}

function officeNode(branch: Branch) {
  const name = branch.alsoKnownAs
    ? `${SITE_NAME} — ${branch.city} (${branch.alsoKnownAs})`
    : `${SITE_NAME} — ${branch.city}`;
  return {
    "@type": ["TravelAgency", "LocalBusiness"],
    "@id": `${SITE_URL}/#${branch.id}`,
    name,
    url: absolute(branch.path),
    telephone: branch.phone,
    image: `${SITE_URL}/assets/logo.png`,
    parentOrganization: { "@id": `${SITE_URL}/#organization` },
    address: postalAddress(branch),
    areaServed: [
      { "@type": "City", name: branch.city },
      { "@type": "AdministrativeArea", name: "Tamil Nadu" },
      { "@type": "Country", name: "India" },
    ],
  };
}

export function locationLd(branch: Branch) {
  return {
    "@context": "https://schema.org",
    ...officeNode(branch),
  };
}

export function organizationGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE_NAME,
        inLanguage: "en-IN",
        publisher: { "@id": `${SITE_URL}/#organization` },
      },
      {
        "@type": ["Organization", "TravelAgency"],
        "@id": `${SITE_URL}/#organization`,
        name: SITE_NAME,
        legalName: LEGAL_NAME,
        url: SITE_URL,
        logo: {
          "@type": "ImageObject",
          url: `${SITE_URL}/assets/logo.png`,
          width: 396,
          height: 123,
        },
        image: `${SITE_URL}/assets/logo.png`,
        email: EMAIL,
        telephone: "+919629879026",
        description:
          "Christ Holidays & Travels was founded in 2017 by Dr. B. Absal Sherif. The company plans domestic and international holidays from offices in Salem, Madurai and Thoothukudi, Tamil Nadu, India.",
        founder: { "@id": `${SITE_URL}/#founder` },
        location: branches.map((branch) => ({ "@id": `${SITE_URL}/#${branch.id}` })),
        subOrganization: branches.map((branch) => ({ "@id": `${SITE_URL}/#${branch.id}` })),
        contactPoint: branches.map((branch) => ({
          "@type": "ContactPoint",
          telephone: branch.phone,
          contactType: "customer service",
          areaServed: "IN",
          availableLanguage: "en",
        })),
      },
      {
        "@type": "Person",
        "@id": `${SITE_URL}/#founder`,
        name: founder.name,
        jobTitle: "Founder",
        image: `${SITE_URL}/assets/about/founder-portrait.jpg`,
        description: `${founder.qualifications}. ${founder.yearsInTravel}. Previously at ${founder.previous.join(", ")}. Founded ${SITE_NAME} in ${founder.founded}.`,
        worksFor: { "@id": `${SITE_URL}/#organization` },
      },
      ...branches.map(officeNode),
    ],
  };
}
