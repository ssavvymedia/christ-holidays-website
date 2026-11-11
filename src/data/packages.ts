export interface Package {
  slug: string;
  title: string;
  destination: string;
  region: string;
  category: "domestic" | "international";
  duration: string;
  price: string;
  highlights: string[];
  image: string;
  overview: string;
  itinerary: { day: number; title: string; description: string }[];
  inclusions: string[];
  exclusions: string[];
}

export const packages: Package[] = [
  {
    slug: "kerala-5-days-4-nights",
    title: "Kerala Backwaters & Hills Escape",
    destination: "Kerala",
    region: "South India",
    category: "domestic",
    duration: "5 Days / 4 Nights",
    price: "Request a Quote",
    highlights: ["Houseboat stay in Alleppey", "Munnar tea gardens", "Wildlife safari options", "Authentic Kerala cuisine"],
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80",
    overview: "Experience the serene backwaters and lush green hills of Kerala with carefully planned stays and transfers.",
    itinerary: [
      { day: 1, title: "Arrival in Cochin", description: "Airport pickup and transfer to hotel. Evening free for local exploration." },
      { day: 2, title: "Munnar Hills", description: "Drive to Munnar. Visit tea plantations and viewpoints." },
      { day: 3, title: "Alleppey Houseboat", description: "Transfer to houseboat for overnight cruise through backwaters." },
      { day: 4, title: "Backwaters & Return", description: "Morning on houseboat, then transfer back to Cochin." },
      { day: 5, title: "Departure", description: "Airport drop for departure." },
    ],
    inclusions: ["Accommodation as per itinerary", "Daily breakfast", "Private transfers", "Houseboat cruise"],
    exclusions: ["Flights", "Lunch & dinner unless specified", "Personal expenses", "Entry fees"],
  },
  {
    slug: "dubai-5-days-4-nights",
    title: "Dubai Luxury City Experience",
    destination: "Dubai",
    region: "Middle East",
    category: "international",
    duration: "5 Days / 4 Nights",
    price: "Request a Quote",
    highlights: ["Burj Khalifa visit", "Desert safari", "Dubai Marina cruise", "Shopping & attractions"],
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80",
    overview: "Discover the glamour of Dubai with iconic landmarks, desert adventures and modern luxury.",
    itinerary: [
      { day: 1, title: "Arrival Dubai", description: "Airport transfer to hotel. Evening at leisure." },
      { day: 2, title: "City Tour", description: "Visit Burj Khalifa, Dubai Mall and Palm Jumeirah." },
      { day: 3, title: "Desert Safari", description: "Afternoon desert safari with BBQ dinner." },
      { day: 4, title: "Marina & Free Time", description: "Marina cruise and shopping time." },
      { day: 5, title: "Departure", description: "Airport transfer." },
    ],
    inclusions: ["Hotel accommodation", "Daily breakfast", "Airport transfers", "City tour", "Desert safari"],
    exclusions: ["International flights", "Visa", "Meals not mentioned", "Optional activities"],
  },
];

export const destinations = [
  { name: "Kerala", region: "South India", image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80", link: "/domestic-tour-packages/south-india/kerala" },
  { name: "Kashmir", region: "North India", image: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=800&q=80", link: "/domestic-tour-packages/north-india/kashmir" },
  { name: "Dubai", region: "Middle East", image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80", link: "/international-tour-packages/middle-east/dubai" },
  { name: "Singapore", region: "Asia", image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=800&q=80", link: "/international-tour-packages/asia/singapore" },
  { name: "Thailand", region: "Asia", image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=800&q=80", link: "/international-tour-packages/asia/thailand" },
  { name: "Andaman", region: "Islands", image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80", link: "/domestic-tour-packages/islands/andaman" },
];
