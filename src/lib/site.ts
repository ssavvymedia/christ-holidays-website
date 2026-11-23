export const SITE_URL = "https://christholidaystravels.com";
export const SITE_NAME = "Christ Holidays & Travels";
export const LEGAL_NAME = "Christ Holiday's & Travels Pvt. Ltd.";
export const EMAIL = "christholidaystravels@gmail.com";
export const WHATSAPP_NUMBER = "919629879026";
export const WHATSAPP_DISPLAY = "+91 96298 79026";
export const WHATSAPP_URL = "https://wa.me/919629879026";

export const founder = {
  name: "Dr. B. Absal Sherif",
  qualifications: "BBA, MBA, Doctorate of Commerce",
  yearsInTravel: "18 years in travel, working in the industry since 2008",
  founded: 2017,
  previous: ["Country Club", "Club Mahindra", "Sterling Holidays", "Radisson Hotel Group"],
} as const;

export type Branch = {
  id: "salem" | "madurai" | "thoothukudi";
  city: string;
  alsoKnownAs?: string;
  label: string;
  shortLabel: string;
  display: string;
  tel: string;
  phone: string;
  path: string;
  headOffice?: boolean;
};

export const branches: readonly Branch[] = [
  {
    id: "salem",
    city: "Salem",
    label: "Salem (Head Office)",
    shortLabel: "Salem",
    display: "+91 96298 79026",
    tel: "tel:+919629879026",
    phone: "+919629879026",
    path: "/locations/salem",
    headOffice: true,
  },
  {
    id: "madurai",
    city: "Madurai",
    label: "Madurai",
    shortLabel: "Madurai",
    display: "+91 63743 95526",
    tel: "tel:+916374395526",
    phone: "+916374395526",
    path: "/locations/madurai",
  },
  {
    id: "thoothukudi",
    city: "Thoothukudi",
    alsoKnownAs: "Tuticorin",
    label: "Thoothukudi (Tuticorin)",
    shortLabel: "Thoothukudi",
    display: "+91 77081 04235",
    tel: "tel:+917708104235",
    phone: "+917708104235",
    path: "/locations/thoothukudi",
  },
] as const;

export function whatsappLink(message?: string) {
  if (!message) return WHATSAPP_URL;
  return `${WHATSAPP_URL}?text=${encodeURIComponent(message)}`;
}

export type NavItem = {
  href: string;
  label: string;
  children?: { href: string; label: string }[];
};

export const mainNav: NavItem[] = [
  { href: "/", label: "Home" },
  {
    href: "/domestic-tour-packages",
    label: "Domestic",
    children: [
      { href: "/domestic-tour-packages/south-india", label: "South India" },
      { href: "/domestic-tour-packages/north-india", label: "North India" },
      { href: "/domestic-tour-packages/islands", label: "Islands" },
      { href: "/domestic-tour-packages/east-india", label: "East India" },
    ],
  },
  {
    href: "/international-tour-packages",
    label: "International",
    children: [
      { href: "/international-tour-packages/asia", label: "Asia" },
      { href: "/international-tour-packages/middle-east", label: "Middle East" },
      { href: "/international-tour-packages/europe", label: "Europe" },
    ],
  },
  { href: "/destinations", label: "Destinations" },
  { href: "/travel-experiences/honeymoon-packages", label: "Honeymoon" },
  {
    href: "/travel-experiences/group-tours",
    label: "Groups",
    children: [
      { href: "/travel-experiences/group-tours", label: "Group Tours" },
      { href: "/travel-experiences/corporate-tours", label: "Corporate Tours" },
    ],
  },
  {
    href: "/travel-services",
    label: "Services",
    children: [
      { href: "/travel-services#flights", label: "Flights" },
      { href: "/travel-services#hotels", label: "Hotels" },
      { href: "/travel-services#visa", label: "Visa Assistance" },
    ],
  },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export type Faq = { question: string; answer: string };

export const faqs: Faq[] = [
  {
    question: "How do I enquire about a holiday?",
    answer:
      "Message Christ Holidays & Travels on WhatsApp at +91 96298 79026, call the Salem, Madurai or Thoothukudi office, or use the enquiry form. Tell us the destination, dates and number of travellers. The team replies with options.",
  },
  {
    question: "Are package prices listed on the website?",
    answer:
      "No confirmed fares are published here. Holiday prices change with dates, hotels and what you include. Enquire for the price, and use the written quote as the figure to confirm.",
  },
  {
    question: "Can you plan a custom trip?",
    answer:
      "Yes. Share the destination, travel dates, who is travelling and any preferences such as a slower pace, a honeymoon, or travel with children. The team suggests an outline for you to review before anything is booked.",
  },
  {
    question: "Do you help with visas, flights and hotels?",
    answer:
      "Visa guidance, flight options and hotel bookings can be arranged with a holiday. Flight and hotel choices are confirmed with you. A visa application is prepared from the documents you provide. The embassy or authority decides the visa, not the agency.",
  },
  {
    question: "Which offices can I contact?",
    answer:
      "There are three offices in Tamil Nadu. Salem is the head office on +91 96298 79026, which is also the WhatsApp number. Madurai is +91 63743 95526. Thoothukudi, also called Tuticorin, is +91 77081 04235.",
  },
  {
    question: "What should I share to get a quote?",
    answer:
      "Destination or region, approximate dates, number of adults and children, and the kind of stay you prefer. Mention a honeymoon, a family trip, a group or a company tour if that applies. A street address for the office is shared when you arrange a visit.",
  },
  {
    question: "Can you arrange honeymoon, group and corporate travel?",
    answer:
      "Yes. Honeymoon, family, friends' group and corporate trips are planned from the same offices. Share the group size and the purpose of the trip so the itinerary, stays and transfers can be coordinated.",
  },
  {
    question: "What is included in a package?",
    answer:
      "The website describes the kind of holiday that can be planned. Stays, meals, transfers, sightseeing and tickets are listed in the quotation you receive. Only that quote confirms what is included and what is extra.",
  },
  {
    question: "How do payments and cancellations work?",
    answer:
      "This website does not take card payments. Any advance, balance date and cancellation terms are written in the quotation, because they depend on the hotels, airlines and other suppliers for that trip.",
  },
  {
    question: "Do you have a published street address?",
    answer:
      "Street addresses are not listed on this website. Call or WhatsApp the Salem, Madurai or Thoothukudi team and they will explain how to visit or continue the enquiry by phone.",
  },
];
