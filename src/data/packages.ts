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
];

export const featuredPackageSlugs = [
  "dubai-5-days-4-nights",
  "singapore-4-days-3-nights",
  "kashmir-6-days-5-nights",
  "bali-5-days-4-nights",
];

export const destinations = [
  { name: "Kashmir", region: "North India", image: "/assets/home/kashmir.jpg", link: "/domestic-tour-packages/north-india/kashmir" },
  { name: "Kerala", region: "South India", image: "/assets/home/kerala.jpg", link: "/domestic-tour-packages/south-india/kerala" },
  { name: "Goa", region: "South India", image: "/assets/home/goa.jpg", link: "/domestic-tour-packages/south-india/goa" },
  { name: "Ooty", region: "South India", image: "/assets/home/ooty.jpg", link: "/domestic-tour-packages/south-india/ooty" },
  { name: "Andaman", region: "Islands", image: "/assets/home/andaman.jpg", link: "/domestic-tour-packages/islands/andaman" },
  { name: "Dubai", region: "Middle East", image: "/assets/home/dubai.jpg", link: "/international-tour-packages/middle-east/dubai" },
  { name: "Singapore", region: "Asia", image: "/assets/home/singapore.jpg", link: "/international-tour-packages/asia/singapore" },
  { name: "Thailand", region: "Asia", image: "/assets/home/thailand.jpg", link: "/international-tour-packages/asia/thailand" },
  { name: "Bali", region: "Asia", image: "/assets/home/bali.jpg", link: "/international-tour-packages/asia/bali" },
  { name: "Maldives", region: "Asia", image: "/assets/home/maldives.jpg", link: "/international-tour-packages/asia/maldives" },
  { name: "Malaysia", region: "Asia", image: "/assets/home/malaysia.jpg", link: "/international-tour-packages/asia/malaysia" },
  { name: "Sri Lanka", region: "Asia", image: "/assets/home/srilanka.jpg", link: "/international-tour-packages/asia/sri-lanka" },
];
