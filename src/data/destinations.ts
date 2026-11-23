export type DestinationCard = {
  name: string;
  tagline: string;
  summary: string;
  image?: string;
  link: string;
  region: "domestic" | "international";
};

export const destinationCards: DestinationCard[] = [
  { name: "Kashmir", tagline: "Lakes and valleys", summary: "Srinagar, Gulmarg and Pahalgam, planned around the season.", image: "/assets/home/kashmir.jpg", link: "/domestic-tour-packages/north-india/kashmir", region: "domestic" },
  { name: "Kerala", tagline: "Backwaters and hills", summary: "Munnar, the backwaters and the coast, with the route agreed in the quote.", image: "/assets/home/kerala.jpg", link: "/domestic-tour-packages/south-india/kerala", region: "domestic" },
  { name: "Munnar", tagline: "Tea hills", summary: "A shorter Kerala hill stay, often paired with Thekkady or the backwaters.", link: "/domestic-tour-packages/south-india/munnar", region: "domestic" },
  { name: "Goa", tagline: "Beaches", summary: "North or South Goa beach stays, with sightseeing only if you want it.", image: "/assets/home/goa.jpg", link: "/domestic-tour-packages/south-india/goa", region: "domestic" },
  { name: "Ooty", tagline: "Nilgiri hills", summary: "A cool-weather break in Tamil Nadu, with Coonoor easy to add.", image: "/assets/home/ooty.jpg", link: "/domestic-tour-packages/south-india/ooty", region: "domestic" },
  { name: "Coorg", tagline: "Coffee country", summary: "Plantation stays and waterfalls in Karnataka.", link: "/domestic-tour-packages/south-india/coorg", region: "domestic" },
  { name: "Andaman", tagline: "Island beaches", summary: "Port Blair, Havelock and Neil Island, timed around the ferries.", image: "/assets/home/andaman.jpg", link: "/domestic-tour-packages/islands/andaman", region: "domestic" },
  { name: "Manali", tagline: "Himachal hills", summary: "A mountain stay with Solang Valley, and Rohtang when the road is open.", link: "/domestic-tour-packages/north-india/manali", region: "domestic" },
  { name: "Rajasthan", tagline: "Forts and lakes", summary: "Jaipur, Udaipur, Jaisalmer or a Golden Triangle route.", link: "/domestic-tour-packages/north-india/rajasthan", region: "domestic" },
  { name: "East India", tagline: "Hills and monasteries", summary: "Sikkim, Darjeeling and Meghalaya, planned on enquiry.", link: "/domestic-tour-packages/east-india", region: "domestic" },
  { name: "Dubai", tagline: "City and desert", summary: "A city stay with a desert outing and an optional Abu Dhabi day.", image: "/assets/home/dubai.jpg", link: "/international-tour-packages/middle-east/dubai", region: "international" },
  { name: "Singapore", tagline: "Gardens and Sentosa", summary: "A compact city holiday, useful for families.", image: "/assets/home/singapore.jpg", link: "/international-tour-packages/asia/singapore", region: "international" },
  { name: "Thailand", tagline: "Cities and beaches", summary: "Bangkok, Pattaya or Phuket, depending on the kind of trip.", image: "/assets/home/thailand.jpg", link: "/international-tour-packages/asia/thailand", region: "international" },
  { name: "Bali", tagline: "Temples and beaches", summary: "Ubud, a beach stay, or both.", image: "/assets/home/bali.jpg", link: "/international-tour-packages/asia/bali", region: "international" },
  { name: "Maldives", tagline: "Island stays", summary: "A resort stay. The island and meal plan set the price.", image: "/assets/home/maldives.jpg", link: "/international-tour-packages/asia/maldives", region: "international" },
  { name: "Malaysia", tagline: "City and islands", summary: "Kuala Lumpur with Langkawi or Penang if you want a second stop.", image: "/assets/home/malaysia.jpg", link: "/international-tour-packages/asia/malaysia", region: "international" },
  { name: "Sri Lanka", tagline: "Forts, tea and beaches", summary: "A loop through the cultural triangle, hill country and the coast.", image: "/assets/home/srilanka.jpg", link: "/international-tour-packages/asia/sri-lanka", region: "international" },
  { name: "Europe", tagline: "Cities you choose", summary: "A multi-city plan built around your month and pace.", image: "/assets/home/europe.jpg", link: "/international-tour-packages/europe", region: "international" },
];
