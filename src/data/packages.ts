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
  // ... existing packages remain the same, only destinations updated below
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
