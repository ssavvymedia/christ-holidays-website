export type Package = {
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
};

export const packages: Package[] = [
  {
    slug: "dubai-5-days-4-nights",
    title: "Dubai Getaway",
    destination: "Dubai",
    region: "Middle East",
    category: "international",
    duration: "5D / 4N",
    price: "From ₹49,999*",
    highlights: ["City highlights", "Desert safari", "Marina experience", "Shopping time"],
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80",
    overview: "Discover the glamour of Dubai with iconic landmarks, desert adventures and modern city stays.",
    itinerary: [
      { day: 1, title: "Arrival in Dubai", description: "Airport transfer to the hotel. Evening at leisure." },
      { day: 2, title: "City Tour", description: "Visit well-known city landmarks and leisure spots." },
      { day: 3, title: "Desert Safari", description: "Afternoon desert safari with dinner." },
      { day: 4, title: "Marina & Free Time", description: "Marina visit and time for shopping or optional activities." },
      { day: 5, title: "Departure", description: "Airport transfer for departure." },
    ],
    inclusions: ["Hotel accommodation", "Daily breakfast", "Airport transfers", "Selected sightseeing"],
    exclusions: ["International flights", "Visa", "Meals not mentioned", "Optional activities"],
  },
  {
    slug: "singapore-4-days-3-nights",
    title: "Singapore Escape",
    destination: "Singapore",
    region: "Asia",
    category: "international",
    duration: "4D / 3N",
    price: "₹54,999*",
    highlights: ["City tour", "Gardens and waterfront", "Sentosa or similar attraction", "Shopping time"],
    image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1200&q=80",
    overview: "A compact Singapore holiday covering key city highlights, leisure time and comfortable stays.",
    itinerary: [
      { day: 1, title: "Arrival in Singapore", description: "Airport transfer to the hotel. Evening at leisure." },
      { day: 2, title: "City Highlights", description: "Guided or independent sightseeing of popular city attractions." },
      { day: 3, title: "Leisure Day", description: "Sentosa or similar attraction, with time for shopping." },
      { day: 4, title: "Departure", description: "Airport transfer for departure." },
    ],
    inclusions: ["Hotel accommodation", "Daily breakfast", "Airport transfers", "Selected sightseeing"],
    exclusions: ["International flights", "Visa", "Meals not mentioned", "Optional activities"],
  },
  {
    slug: "kashmir-6-days-5-nights",
    title: "Kashmir Holiday",
    destination: "Kashmir",
    region: "North India",
    category: "domestic",
    duration: "6D / 5N",
    price: "₹39,999*",
    highlights: ["Srinagar stay", "Gondola or similar experience", "Valley sightseeing", "Houseboat or garden visit"],
    image: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1200&q=80",
    overview: "A restful Kashmir holiday with scenic stays, valley views and carefully planned transfers.",
    itinerary: [
      { day: 1, title: "Arrival in Srinagar", description: "Transfer to the hotel or houseboat. Evening at leisure." },
      { day: 2, title: "Srinagar Sightseeing", description: "Visit gardens and local highlights." },
      { day: 3, title: "Gulmarg or similar", description: "Day trip for mountain views and leisure." },
      { day: 4, title: "Pahalgam or similar", description: "Scenic drive and valley sightseeing." },
      { day: 5, title: "Leisure in Srinagar", description: "Free time or optional local experiences." },
      { day: 6, title: "Departure", description: "Transfer for departure." },
    ],
    inclusions: ["Accommodation as per itinerary", "Daily breakfast", "Transfers", "Selected sightseeing"],
    exclusions: ["Flights", "Lunch and dinner unless specified", "Personal expenses", "Entry fees and optional activities"],
  },
  {
    slug: "bali-5-days-4-nights",
    title: "Bali Retreat",
    destination: "Bali",
    region: "Asia",
    category: "international",
    duration: "5D / 4N",
    price: "₹59,999*",
    highlights: ["Beach stay", "Temple or cultural visit", "Leisure time", "Local sightseeing"],
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80",
    overview: "A relaxed Bali holiday with beach time, cultural visits and comfortable stays.",
    itinerary: [
      { day: 1, title: "Arrival in Bali", description: "Airport transfer to the hotel. Evening at leisure." },
      { day: 2, title: "Cultural Sightseeing", description: "Visit selected temples or cultural highlights." },
      { day: 3, title: "Leisure Day", description: "Beach time or optional activities." },
      { day: 4, title: "Local Experiences", description: "Free day for shopping, spa or further sightseeing." },
      { day: 5, title: "Departure", description: "Airport transfer for departure." },
    ],
    inclusions: ["Hotel accommodation", "Daily breakfast", "Airport transfers", "Selected sightseeing"],
    exclusions: ["International flights", "Visa", "Meals not mentioned", "Optional activities"],
  },
  {
    slug: "kerala-5-days-4-nights",
    title: "Kerala Backwaters & Hills",
    destination: "Kerala",
    region: "South India",
    category: "domestic",
    duration: "5D / 4N",
    price: "Request a Quote",
    highlights: ["Munnar hills", "Alleppey houseboat", "Tea plantations", "Backwater cruise"],
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
    slug: "thailand-5-days-4-nights",
    title: "Thailand Getaway",
    destination: "Thailand",
    region: "Asia",
    category: "international",
    duration: "5 Days / 4 Nights",
    price: "Request a Quote",
    highlights: ["Bangkok or Phuket highlights", "Temple or cultural visit", "Leisure time", "Local sightseeing"],
    image: "/assets/home/thailand.jpg",
    overview: "A flexible Thailand holiday covering popular city or beach highlights, with stays and transfers planned around your dates.",
    itinerary: [
      { day: 1, title: "Arrival", description: "Airport transfer to the hotel. Evening at leisure." },
      { day: 2, title: "City or beach highlights", description: "Visit selected local attractions." },
      { day: 3, title: "Leisure day", description: "Free time or optional activities." },
      { day: 4, title: "Sightseeing", description: "Further local experiences as per the agreed plan." },
      { day: 5, title: "Departure", description: "Airport transfer for departure." },
    ],
    inclusions: ["Hotel accommodation", "Daily breakfast", "Airport transfers", "Selected sightseeing"],
    exclusions: ["International flights", "Visa", "Meals not mentioned", "Optional activities"],
  },
  {
    slug: "maldives-5-days-4-nights",
    title: "Maldives Island Stay",
    destination: "Maldives",
    region: "Asia",
    category: "international",
    duration: "5 Days / 4 Nights",
    price: "Request a Quote",
    highlights: ["Island or resort stay", "Beach leisure", "Water activities as optional", "Relaxed pace"],
    image: "/assets/home/maldives.jpg",
    overview: "A restful Maldives stay focused on comfortable accommodation and unhurried beach time. Final resort options are shared on enquiry.",
    itinerary: [
      { day: 1, title: "Arrival", description: "Transfer to the reserved property. Evening at leisure." },
      { day: 2, title: "Island leisure", description: "Beach time or optional water activities." },
      { day: 3, title: "At leisure", description: "Free day to enjoy the property and surroundings." },
      { day: 4, title: "Leisure day", description: "Optional experiences as per the property." },
      { day: 5, title: "Departure", description: "Transfer for departure." },
    ],
    inclusions: ["Accommodation as per the agreed plan", "Daily breakfast", "Return transfers as specified"],
    exclusions: ["International flights", "Visa or entry formalities", "Meals not mentioned", "Optional activities"],
  },
  {
    slug: "andaman-6-days-5-nights",
    title: "Andaman Island Holiday",
    destination: "Andaman",
    region: "Islands",
    category: "domestic",
    duration: "6 Days / 5 Nights",
    price: "Request a Quote",
    highlights: ["Port Blair stay", "Island sightseeing", "Beach time", "Ferry transfers as planned"],
    image: "/assets/home/andaman.jpg",
    overview: "An Andaman holiday with island stays, beach time and planned transfers. The final island combination is confirmed after enquiry.",
    itinerary: [
      { day: 1, title: "Arrival in Port Blair", description: "Airport transfer to the hotel. Evening at leisure." },
      { day: 2, title: "Local sightseeing", description: "Visit selected nearby attractions." },
      { day: 3, title: "Island day", description: "Ferry transfer and time at a nearby island, as planned." },
      { day: 4, title: "Beach leisure", description: "Free time or optional water activities." },
      { day: 5, title: "Leisure or sightseeing", description: "Further local experiences as per the agreed plan." },
      { day: 6, title: "Departure", description: "Airport transfer for departure." },
    ],
    inclusions: ["Accommodation as per itinerary", "Daily breakfast", "Transfers as specified", "Selected sightseeing"],
    exclusions: ["Flights", "Lunch and dinner unless specified", "Entry fees and optional activities", "Personal expenses"],
  },
];

export const featuredPackageSlugs = [
  "dubai-5-days-4-nights",
  "singapore-4-days-3-nights",
  "kashmir-6-days-5-nights",
  "bali-5-days-4-nights",
];

export const destinations = [
  { name: "Kashmir", region: "North India", image: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=800&q=80", link: "/domestic-tour-packages/north-india" },
  { name: "Dubai", region: "Middle East", image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80", link: "/international-tour-packages/middle-east" },
  { name: "Singapore", region: "Asia", image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=800&q=80", link: "/international-tour-packages/asia" },
  { name: "Thailand", region: "Asia", image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=800&q=80", link: "/international-tour-packages/asia" },
  { name: "Bali", region: "Asia", image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80", link: "/international-tour-packages/asia" },
  { name: "Europe", region: "Europe", image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80", link: "/international-tour-packages/europe" },
];
