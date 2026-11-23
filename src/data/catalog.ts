import type { PageContent, PageFaq } from "@/lib/content";

function faqsFor(place: string): PageFaq[] {
  return [
    {
      question: `How do I enquire about a ${place} holiday?`,
      answer: `Message Christ Holidays & Travels on WhatsApp at +91 96298 79026, or call Salem, Madurai or Thoothukudi (Tuticorin). Share your dates, group size and the kind of ${place} trip you want. The team replies with an outline.`,
    },
    {
      question: `Do you publish ${place} package prices?`,
      answer: `No. Enquire for the price. The figure depends on dates, hotels and what is included, and the written quote is the one to confirm.`,
    },
    {
      question: `Can a ${place} trip be a honeymoon, family holiday or group tour?`,
      answer: `Yes. Say who is travelling and the pace you want. Stays, transfers and sightseeing are agreed before anything is booked.`,
    },
  ];
}

const home = { name: "Home", path: "/" };

export const pages = {
  domestic: {
    path: "/domestic-tour-packages",
    title: "Domestic Tour Packages",
    description: "Domestic holidays across India, planned by Christ Holidays & Travels from Salem, Madurai and Thoothukudi. Enquire for the price.",
    crumbs: [home, { name: "Domestic Tours", path: "/domestic-tour-packages" }],
    eyebrow: "India holidays",
    h1: "Domestic Tour Packages",
    intro: [
      "Christ Holidays & Travels plans holidays inside India for families, couples and groups travelling from Tamil Nadu and beyond.",
      "South India, North India, the islands and East India are the regions this site covers in detail. Other states can be planned on enquiry. No fare on this page is a confirmed price.",
    ],
    sections: [
      {
        heading: "Regions we plan",
        cards: [
          { title: "South India", text: "Kerala, Goa, Ooty, Munnar and Coorg, with other southern states on enquiry.", href: "/domestic-tour-packages/south-india" },
          { title: "North India", text: "Kashmir, Manali and Rajasthan, plus other northern routes on enquiry.", href: "/domestic-tour-packages/north-india" },
          { title: "Islands", text: "Andaman beach holidays. Other island trips can be discussed.", href: "/domestic-tour-packages/islands" },
          { title: "East India", text: "Sikkim, Darjeeling and Meghalaya, arranged once dates are known.", href: "/domestic-tour-packages/east-india" },
        ],
      },
      {
        heading: "How a domestic holiday is put together",
        bullets: [
          "You share the places, dates and number of travellers.",
          "The team suggests a route that fits the driving or train time.",
          "Hotels and cars are named in the quote, not assumed from this page.",
          "You confirm, and the Salem, Madurai or Thoothukudi office coordinates the trip.",
        ],
      },
    ],
    faqs: faqsFor("domestic"),
    related: [
      { title: "All destinations", text: "A list of the places with their own pages.", href: "/destinations" },
      { title: "Sample packages", text: "Day-by-day outlines. Enquire for the price.", href: "/tour-packages" },
      { title: "Honeymoon packages", text: "Quieter trips for two.", href: "/travel-experiences/honeymoon-packages" },
    ],
    whatsapp: "Hello Christ Holidays, I would like a domestic holiday quote.",
  },
  southIndia: {
    path: "/domestic-tour-packages/south-india",
    title: "South India Tour Packages",
    description: "South India holidays including Kerala, Goa, Ooty and Coorg, planned from our Salem, Madurai and Tuticorin offices. Enquire for the price.",
    crumbs: [home, { name: "Domestic Tours", path: "/domestic-tour-packages" }, { name: "South India", path: "/domestic-tour-packages/south-india" }],
    eyebrow: "Domestic tours",
    h1: "South India Tour Packages",
    intro: [
      "South India trips from Christ Holidays & Travels cover the hills, backwaters, beaches and plantation country that travellers usually combine.",
      "Kerala, Munnar, Goa, Ooty and Coorg each have a page. Trips through the rest of Tamil Nadu, Karnataka, Andhra Pradesh and Telangana are planned when you tell us the towns.",
    ],
    sections: [
      {
        heading: "Places with their own pages",
        cards: [
          { title: "Kerala", text: "Backwaters, Munnar and the coast.", href: "/domestic-tour-packages/south-india/kerala" },
          { title: "Munnar", text: "Tea gardens and a cool hill stay.", href: "/domestic-tour-packages/south-india/munnar" },
          { title: "Goa", text: "North or South Goa beach time.", href: "/domestic-tour-packages/south-india/goa" },
          { title: "Ooty", text: "Nilgiri hills, close to our Tamil Nadu offices.", href: "/domestic-tour-packages/south-india/ooty" },
          { title: "Coorg", text: "Coffee country in Karnataka.", href: "/domestic-tour-packages/south-india/coorg" },
        ],
      },
      {
        heading: "Other South Indian routes",
        paragraphs: [
          "Madurai, Kanyakumari, Kodaikanal, Mysuru, Hampi, Tirupati and Hyderabad are not given separate package pages. Tell the Salem, Madurai or Thoothukudi office which towns you want and enquire for the price.",
        ],
      },
    ],
    faqs: faqsFor("South India"),
    related: [
      { title: "Andaman", text: "An island holiday if you want beaches further afield.", href: "/domestic-tour-packages/islands/andaman" },
      { title: "Group tours", text: "For families and larger groups travelling together.", href: "/travel-experiences/group-tours" },
    ],
    whatsapp: "Hello Christ Holidays, I am interested in a South India holiday.",
  },
  kerala: {
    path: "/domestic-tour-packages/south-india/kerala",
    title: "Kerala Tour Packages",
    description: "Kerala holidays with Munnar, the backwaters and the coast. Christ Holidays & Travels in Salem, Madurai and Thoothukudi will quote after you enquire.",
    crumbs: [home, { name: "Domestic Tours", path: "/domestic-tour-packages" }, { name: "South India", path: "/domestic-tour-packages/south-india" }, { name: "Kerala", path: "/domestic-tour-packages/south-india/kerala" }],
    eyebrow: "South India",
    h1: "Kerala Tour Packages",
    image: { src: "/assets/home/kerala.jpg", alt: "Palm-lined backwaters in Kerala" },
    intro: [
      "Kerala trips usually mix the hills, the backwaters and a little time on the coast. Christ Holidays & Travels builds that route around your dates rather than a fixed departure.",
      "A common request is Kochi or Munnar, then Alleppey. Thekkady, Kovalam and Varkala can be added. Enquire for the price.",
    ],
    sections: [
      {
        heading: "Places travellers ask to include",
        cards: [
          { title: "Alleppey backwaters", text: "A houseboat night is a frequent request. Meals on board are confirmed in the quote." },
          { title: "Munnar", text: "Tea gardens and a cooler stay. There is a separate Munnar page if the hills are the focus.", href: "/domestic-tour-packages/south-india/munnar" },
          { title: "Thekkady", text: "Periyar wildlife and spice plantations, often as a night between the hills and the water." },
          { title: "Kovalam and Varkala", text: "Beach time on the Arabian Sea if you want a coastal finish." },
        ],
      },
      {
        heading: "When people usually travel",
        paragraphs: [
          "September to March is the period most visitors choose for sightseeing. June to August is greener and is the season some travellers pick for Ayurveda stays. Weather is never guaranteed.",
        ],
      },
      {
        heading: "Sample ideas",
        paragraphs: ["These are starting points. The quote names the hotels and the price."],
        cards: [
          { title: "Kochi, Munnar and Alleppey", text: "About five days. Enquire for the price.", enquire: true },
          { title: "Kerala honeymoon", text: "A slower route with a houseboat night if you want one.", enquire: true, href: "/travel-experiences/honeymoon-packages" },
          { title: "Family hills and beaches", text: "Munnar plus a beach, with driving time kept sensible.", enquire: true },
        ],
      },
    ],
    faqs: faqsFor("Kerala"),
    related: [
      { title: "Munnar", href: "/domestic-tour-packages/south-india/munnar", text: "A hill-focused Kerala stay." },
      { title: "Kerala sample package", href: "/tour-packages/kerala-5-days-4-nights", text: "A five-day outline. Enquire for the price." },
    ],
    whatsapp: "Hello Christ Holidays, I am interested in a Kerala holiday.",
  },
  munnar: {
    path: "/domestic-tour-packages/south-india/munnar",
    title: "Munnar Tour Packages",
    description: "Munnar hill holidays with tea gardens and optional Thekkady. Ask Christ Holidays & Travels in Salem, Madurai or Tuticorin for a quote.",
    crumbs: [home, { name: "Domestic Tours", path: "/domestic-tour-packages" }, { name: "South India", path: "/domestic-tour-packages/south-india" }, { name: "Munnar", path: "/domestic-tour-packages/south-india/munnar" }],
    eyebrow: "Kerala hills",
    h1: "Munnar Tour Packages",
    intro: [
      "Munnar is the hill station travellers add when they want tea gardens and cooler weather inside a Kerala trip, or as a short break on its own.",
      "Eravikulam National Park, Mattupetty, Echo Point and the tea museum are the usual stops. Park days depend on the season. Enquire for the price.",
    ],
    sections: [
      {
        heading: "What a Munnar stay can include",
        bullets: [
          "Tea museum and plantation viewpoints",
          "Eravikulam National Park, when it is open to visitors",
          "Mattupetty Dam and Echo Point",
          "Attukal or another waterfall, if the road and weather allow",
          "A night in Thekkady on the way in or out",
        ],
      },
      {
        heading: "Sample ideas",
        cards: [
          { title: "Munnar hill stay", text: "Two or three nights in the hills.", enquire: true },
          { title: "Munnar honeymoon", text: "A quieter hotel and a slower sightseeing plan.", enquire: true },
          { title: "Munnar and Thekkady", text: "Hills plus a wildlife stop.", enquire: true },
        ],
      },
    ],
    faqs: faqsFor("Munnar"),
    related: [
      { title: "Kerala", href: "/domestic-tour-packages/south-india/kerala", text: "Add the backwaters to a Munnar stay." },
      { title: "Ooty", href: "/domestic-tour-packages/south-india/ooty", text: "Another hill option, in Tamil Nadu." },
    ],
    whatsapp: "Hello Christ Holidays, I am interested in a Munnar holiday.",
  },
  goa: {
    path: "/domestic-tour-packages/south-india/goa",
    title: "Goa Tour Packages",
    description: "Goa beach holidays for couples and families. Christ Holidays & Travels quotes North or South Goa stays from its Salem, Madurai and Thoothukudi offices.",
    crumbs: [home, { name: "Domestic Tours", path: "/domestic-tour-packages" }, { name: "South India", path: "/domestic-tour-packages/south-india" }, { name: "Goa", path: "/domestic-tour-packages/south-india/goa" }],
    eyebrow: "Beaches",
    h1: "Goa Tour Packages",
    image: { src: "/assets/home/goa.jpg", alt: "A wide sandy beach in Goa" },
    intro: [
      "Goa plans from Christ Holidays & Travels are beach stays first. Sightseeing is added only if you want churches, forts or a spice plantation.",
      "North Goa is busier. South Goa is usually quieter. Say which you prefer, and enquire for the price.",
    ],
    sections: [
      {
        heading: "Ways to spend the days",
        bullets: [
          "Beaches from Baga and Calangute to Palolem and Agonda",
          "Water sports, booked locally or added in the quote",
          "Old Goa churches, forts and a spice plantation",
          "A stay that does none of that and simply uses the beach",
        ],
      },
      {
        heading: "Sample ideas",
        cards: [
          { title: "Goa beach stay", text: "Three or four nights in one hotel.", enquire: true },
          { title: "North and South Goa", text: "Two bases if you want both sides of the state.", enquire: true },
          { title: "Goa honeymoon", text: "A quieter South Goa hotel is a common request.", enquire: true },
        ],
      },
    ],
    faqs: faqsFor("Goa"),
    related: [
      { title: "Goa sample package", href: "/tour-packages/goa-4-days-3-nights", text: "A four-day outline." },
      { title: "Andaman", href: "/domestic-tour-packages/islands/andaman", text: "Another beach holiday, by air and ferry." },
    ],
    whatsapp: "Hello Christ Holidays, I am interested in a Goa holiday.",
  },
  ooty: {
    path: "/domestic-tour-packages/south-india/ooty",
    title: "Ooty Tour Packages",
    description: "Ooty and Coonoor hill holidays in the Nilgiris, planned by a Salem, Madurai and Tuticorin travel agency. Enquire for the price.",
    crumbs: [home, { name: "Domestic Tours", path: "/domestic-tour-packages" }, { name: "South India", path: "/domestic-tour-packages/south-india" }, { name: "Ooty", path: "/domestic-tour-packages/south-india/ooty" }],
    eyebrow: "Tamil Nadu",
    h1: "Ooty Tour Packages",
    image: { src: "/assets/home/ooty.jpg", alt: "Tea-covered hills in the Nilgiris near Ooty" },
    intro: [
      "Ooty is the Nilgiri hill station most travellers from Salem, Madurai and Thoothukudi can reach without a flight. Christ Holidays & Travels plans short family stays and slightly longer trips that add Coonoor.",
      "The Botanical Garden, Ooty Lake, Doddabetta and a tea-factory visit are the usual requests. The toy train depends on railway schedules.",
    ],
    sections: [
      {
        heading: "Stops people ask for",
        bullets: [
          "Government Botanical Garden and Ooty Lake",
          "Doddabetta Peak, weather permitting",
          "A tea factory or museum visit",
          "Coonoor and, if seats are available, the Nilgiri Mountain Railway",
        ],
      },
      {
        heading: "Sample ideas",
        cards: [
          { title: "Ooty weekend", text: "Two nights, with pickup from the railhead or by road.", enquire: true },
          { title: "Ooty and Coonoor", text: "A little more time in the hills.", enquire: true },
          { title: "Family hill trip", text: "A slower plan with short sightseeing days.", enquire: true },
        ],
      },
    ],
    faqs: faqsFor("Ooty"),
    related: [
      { title: "Ooty sample package", href: "/tour-packages/ooty-3-days-2-nights", text: "A three-day outline." },
      { title: "Coorg", href: "/domestic-tour-packages/south-india/coorg", text: "A Karnataka hill alternative." },
    ],
    whatsapp: "Hello Christ Holidays, I am interested in an Ooty holiday.",
  },
  coorg: {
    path: "/domestic-tour-packages/south-india/coorg",
    title: "Coorg Tour Packages",
    description: "Coorg coffee-country holidays with waterfalls and plantation stays. Enquire for the price with Christ Holidays & Travels.",
    crumbs: [home, { name: "Domestic Tours", path: "/domestic-tour-packages" }, { name: "South India", path: "/domestic-tour-packages/south-india" }, { name: "Coorg", path: "/domestic-tour-packages/south-india/coorg" }],
    eyebrow: "Karnataka",
    h1: "Coorg Tour Packages",
    intro: [
      "Coorg, or Kodagu, is a plantation district in Karnataka. Travellers ask for homestays or small hotels, Abbey Falls, Raja’s Seat and a relaxed driving pace.",
      "Mysuru can be added on the way. Dubare is optional. Enquire for the price from the Salem, Madurai or Thoothukudi office.",
    ],
    sections: [
      {
        heading: "What can be included",
        bullets: [
          "A plantation stay and a short estate walk, if the property offers one",
          "Abbey Falls and Raja’s Seat",
          "Dubare as an optional stop",
          "A Mysuru night if you want palaces as well as hills",
        ],
      },
      {
        heading: "Sample ideas",
        cards: [
          { title: "Coorg nature stay", text: "Two or three nights among the estates.", enquire: true },
          { title: "Coorg honeymoon", text: "A quieter property and fewer road hours.", enquire: true },
          { title: "Coorg and Mysuru", text: "Hills plus a city night.", enquire: true },
        ],
      },
    ],
    faqs: faqsFor("Coorg"),
    related: [
      { title: "Ooty", href: "/domestic-tour-packages/south-india/ooty", text: "The Nilgiri alternative in Tamil Nadu." },
      { title: "South India", href: "/domestic-tour-packages/south-india", text: "Other southern routes." },
    ],
    whatsapp: "Hello Christ Holidays, I am interested in a Coorg holiday.",
  },
  northIndia: {
    path: "/domestic-tour-packages/north-india",
    title: "North India Tour Packages",
    description: "Kashmir, Manali and Rajasthan holidays from Christ Holidays & Travels. Other North India routes are quoted on enquiry from Salem, Madurai and Tuticorin.",
    crumbs: [home, { name: "Domestic Tours", path: "/domestic-tour-packages" }, { name: "North India", path: "/domestic-tour-packages/north-india" }],
    eyebrow: "Domestic tours",
    h1: "North India Tour Packages",
    intro: [
      "North India holidays on this site focus on Kashmir, Manali and Rajasthan, which are the routes travellers ask about most.",
      "Uttarakhand, Uttar Pradesh beyond the Golden Triangle, Punjab and other Himachal towns are planned when you name them. Enquire for the price.",
    ],
    sections: [
      {
        heading: "Places with their own pages",
        cards: [
          { title: "Kashmir", text: "Srinagar, Gulmarg and Pahalgam.", href: "/domestic-tour-packages/north-india/kashmir" },
          { title: "Manali", text: "A Himachal hill stay, with Solang Valley.", href: "/domestic-tour-packages/north-india/manali" },
          { title: "Rajasthan", text: "Jaipur, Udaipur, Jaisalmer and the Golden Triangle.", href: "/domestic-tour-packages/north-india/rajasthan" },
        ],
      },
      {
        heading: "Also planned on enquiry",
        paragraphs: [
          "If you want Shimla, Dalhousie, Nainital, Mussoorie, Varanasi, Amritsar or Delhi on their own, say so in the enquiry. The team will tell you whether the dates work and what the trip would cost.",
        ],
      },
    ],
    faqs: faqsFor("North India"),
    related: [
      { title: "Sample packages", href: "/tour-packages", text: "Including a Kashmir outline." },
      { title: "Honeymoon packages", href: "/travel-experiences/honeymoon-packages", text: "Kashmir is a frequent honeymoon request." },
    ],
    whatsapp: "Hello Christ Holidays, I am interested in a North India holiday.",
  },
  kashmir: {
    path: "/domestic-tour-packages/north-india/kashmir",
    title: "Kashmir Tour Packages",
    description: "Kashmir holidays covering Srinagar, Gulmarg and Pahalgam. Enquire for the price with Christ Holidays & Travels in Salem, Madurai or Thoothukudi.",
    crumbs: [home, { name: "Domestic Tours", path: "/domestic-tour-packages" }, { name: "North India", path: "/domestic-tour-packages/north-india" }, { name: "Kashmir", path: "/domestic-tour-packages/north-india/kashmir" }],
    eyebrow: "North India",
    h1: "Kashmir Tour Packages",
    image: { src: "/assets/home/kashmir.jpg", alt: "A mountain lake in Kashmir" },
    intro: [
      "Kashmir plans from Christ Holidays & Travels are usually based in Srinagar, with day trips to Gulmarg and Pahalgam. A houseboat night is something you can ask for. It is not assumed.",
      "Sonamarg is seasonal. Gondola tickets and union cabs are priced locally and appear in the quote only if you want them included.",
    ],
    sections: [
      {
        heading: "Places travellers ask to see",
        bullets: [
          "Srinagar gardens and a visit on Dal Lake",
          "Gulmarg for the meadows, and the gondola if you choose to ride it",
          "Pahalgam and the valley around it",
          "Sonamarg when the road is open",
        ],
      },
      {
        heading: "Season",
        paragraphs: [
          "March to October is when most sightseeing trips run. December to February is the period people choose for snow in Gulmarg. Conditions change every year.",
        ],
      },
      {
        heading: "Sample ideas",
        cards: [
          { title: "Srinagar, Gulmarg and Pahalgam", text: "About six days. Enquire for the price.", enquire: true, href: "/tour-packages/kashmir-6-days-5-nights" },
          { title: "Kashmir honeymoon", text: "A slower stay with more free time.", enquire: true },
          { title: "Kashmir with family", text: "Shorter drives and a hotel base rather than a houseboat, if you prefer.", enquire: true },
        ],
      },
    ],
    faqs: faqsFor("Kashmir"),
    related: [
      { title: "Manali", href: "/domestic-tour-packages/north-india/manali", text: "Another mountain option, in Himachal." },
      { title: "North India", href: "/domestic-tour-packages/north-india", text: "Rajasthan and other northern routes." },
    ],
    whatsapp: "Hello Christ Holidays, I am interested in a Kashmir holiday.",
  },
  manali: {
    path: "/domestic-tour-packages/north-india/manali",
    title: "Manali Tour Packages",
    description: "Manali and Solang Valley holidays in Himachal. Christ Holidays & Travels confirms the route and the price after you enquire.",
    crumbs: [home, { name: "Domestic Tours", path: "/domestic-tour-packages" }, { name: "North India", path: "/domestic-tour-packages/north-india" }, { name: "Manali", path: "/domestic-tour-packages/north-india/manali" }],
    eyebrow: "Himachal Pradesh",
    h1: "Manali Tour Packages",
    intro: [
      "Manali trips are hill stays built around Mall Road, Old Manali, Hadimba Temple and Solang Valley. Rohtang Pass or Atal Tunnel outings depend on permits and weather, so they are optional in the quote.",
      "Travellers from Tamil Nadu usually fly to Chandigarh or Delhi and then take a car. The transfer time is part of the plan. Enquire for the price.",
    ],
    sections: [
      {
        heading: "What people include",
        bullets: [
          "Solang Valley",
          "Hadimba Temple and Mall Road",
          "Time in Old Manali",
          "Rohtang or a similar high pass only when it is open and you want it",
        ],
      },
      {
        heading: "Sample ideas",
        cards: [
          { title: "Manali stay", text: "Three or four nights in one hotel.", enquire: true },
          { title: "Manali and Solang", text: "A sightseeing day in the valley.", enquire: true },
          { title: "Manali honeymoon", text: "A quieter property and fewer excursions.", enquire: true },
        ],
      },
    ],
    faqs: faqsFor("Manali"),
    related: [
      { title: "Kashmir", href: "/domestic-tour-packages/north-india/kashmir", text: "A valley holiday further north." },
      { title: "Group tours", href: "/travel-experiences/group-tours", text: "Useful if several families travel together." },
    ],
    whatsapp: "Hello Christ Holidays, I am interested in a Manali holiday.",
  },
  rajasthan: {
    path: "/domestic-tour-packages/north-india/rajasthan",
    title: "Rajasthan Tour Packages",
    description: "Rajasthan holidays covering Jaipur, Udaipur, Jaisalmer and the Golden Triangle. Enquire for the price with Christ Holidays & Travels.",
    crumbs: [home, { name: "Domestic Tours", path: "/domestic-tour-packages" }, { name: "North India", path: "/domestic-tour-packages/north-india" }, { name: "Rajasthan", path: "/domestic-tour-packages/north-india/rajasthan" }],
    eyebrow: "North India",
    h1: "Rajasthan Tour Packages",
    intro: [
      "Rajasthan routes are built from the cities you actually want to see. A short trip might be Jaipur only. A longer one can link Udaipur, Jodhpur and Jaisalmer, or follow the Golden Triangle of Delhi, Agra and Jaipur.",
      "Driving days in Rajasthan are long. The quote will say so, and it will carry the price. Nothing here is a fixed departure.",
    ],
    sections: [
      {
        heading: "Cities travellers name",
        cards: [
          { title: "Jaipur", text: "City palaces, forts and the old town." },
          { title: "Udaipur", text: "Lakes and a slower couple of days. A frequent honeymoon request." },
          { title: "Jaisalmer", text: "The fort and a desert outing, if you want one." },
          { title: "Golden Triangle", text: "Delhi, Agra and Jaipur, including the Taj Mahal in Agra." },
        ],
      },
      {
        heading: "Sample ideas",
        cards: [
          { title: "Jaipur and Udaipur", text: "A first Rajasthan trip without too many hotel changes.", enquire: true },
          { title: "Golden Triangle", text: "Delhi, Agra and Jaipur over several days.", enquire: true },
          { title: "Rajasthan honeymoon", text: "Often Udaipur, with another city if you have the nights.", enquire: true },
        ],
      },
    ],
    faqs: faqsFor("Rajasthan"),
    related: [
      { title: "North India", href: "/domestic-tour-packages/north-india", text: "Kashmir and Manali as well." },
      { title: "Honeymoon packages", href: "/travel-experiences/honeymoon-packages", text: "Udaipur is one of the options couples ask about." },
    ],
    whatsapp: "Hello Christ Holidays, I am interested in a Rajasthan holiday.",
  },
  islands: {
    path: "/domestic-tour-packages/islands",
    title: "Island Tour Packages",
    description: "Andaman island holidays from Christ Holidays & Travels. Other Indian island trips are discussed on enquiry. Offices in Salem, Madurai and Tuticorin.",
    crumbs: [home, { name: "Domestic Tours", path: "/domestic-tour-packages" }, { name: "Islands", path: "/domestic-tour-packages/islands" }],
    eyebrow: "Domestic tours",
    h1: "Island Tour Packages",
    intro: [
      "The island holiday described on this website is the Andaman Islands: Port Blair, Havelock and Neil Island.",
      "Lakshadweep and other islands are not given a fixed package here. If you have dates in mind, ask the Salem, Madurai or Thoothukudi office what can be arranged and enquire for the price.",
    ],
    sections: [
      {
        heading: "Andaman",
        paragraphs: ["Ferries set the shape of an Andaman trip. The sample package shows one possible order of islands."],
        cards: [
          { title: "Andaman page", text: "Beaches, Cellular Jail and how the islands fit together.", href: "/domestic-tour-packages/islands/andaman" },
          { title: "Sample Andaman outline", text: "Six days. Enquire for the price.", href: "/tour-packages/andaman-6-days-5-nights", enquire: true },
        ],
      },
    ],
    faqs: faqsFor("island"),
    related: [
      { title: "Goa", href: "/domestic-tour-packages/south-india/goa", text: "A mainland beach alternative." },
      { title: "Maldives", href: "/international-tour-packages/asia/maldives", text: "An international island stay." },
    ],
    whatsapp: "Hello Christ Holidays, I am interested in an island holiday.",
  },
  andaman: {
    path: "/domestic-tour-packages/islands/andaman",
    title: "Andaman Tour Packages",
    description: "Andaman holidays covering Port Blair, Havelock and Neil Island. Enquire for the price with Christ Holidays & Travels in Tamil Nadu.",
    crumbs: [home, { name: "Domestic Tours", path: "/domestic-tour-packages" }, { name: "Islands", path: "/domestic-tour-packages/islands" }, { name: "Andaman", path: "/domestic-tour-packages/islands/andaman" }],
    eyebrow: "Islands",
    h1: "Andaman Tour Packages",
    image: { src: "/assets/home/andaman.jpg", alt: "Clear shallow water along an Andaman beach" },
    intro: [
      "An Andaman holiday runs on flights into Port Blair and ferries between the islands. Christ Holidays & Travels plans the order of Port Blair, Havelock (Swaraj Dweep) and Neil Island (Shaheed Dweep) around those timings.",
      "Radhanagar Beach, the Cellular Jail and a glass-bottom boat or snorkelling stop are common requests. Water activities are optional. Enquire for the price.",
    ],
    sections: [
      {
        heading: "Islands and stops",
        bullets: [
          "Port Blair, including the Cellular Jail when you want a city day",
          "Havelock (Swaraj Dweep) and Radhanagar Beach",
          "Neil Island (Shaheed Dweep) for a quieter beach day",
          "Snorkelling or a glass-bottom boat, if you want them in the quote",
        ],
      },
      {
        heading: "Sample ideas",
        cards: [
          { title: "Port Blair, Havelock and Neil", text: "About six days. Ferry days are part of the holiday.", enquire: true, href: "/tour-packages/andaman-6-days-5-nights" },
          { title: "Andaman honeymoon", text: "More beach time and fewer transfers.", enquire: true },
          { title: "Andaman with family", text: "A pace that suits children, with activities only if you want them.", enquire: true },
        ],
      },
    ],
    faqs: faqsFor("Andaman"),
    related: [
      { title: "Islands", href: "/domestic-tour-packages/islands", text: "How other island requests are handled." },
      { title: "Honeymoon packages", href: "/travel-experiences/honeymoon-packages", text: "Andaman is one of the honeymoon options." },
    ],
    whatsapp: "Hello Christ Holidays, I am interested in an Andaman holiday.",
  },
  eastIndia: {
    path: "/domestic-tour-packages/east-india",
    title: "East India Tour Packages",
    description: "Sikkim, Darjeeling and Meghalaya holidays planned on enquiry by Christ Holidays & Travels. No fixed price is listed. Offices in Salem, Madurai and Tuticorin.",
    crumbs: [home, { name: "Domestic Tours", path: "/domestic-tour-packages" }, { name: "East India", path: "/domestic-tour-packages/east-india" }],
    eyebrow: "Domestic tours",
    h1: "East India Tour Packages",
    intro: [
      "East India trips are arranged once you share dates. This page does not sell a fixed departure or a published fare.",
      "Sikkim, Darjeeling and Meghalaya are the requests the team can plan. Gangtok, Pelling, Cherrapunji and Shillong are towns you can name in the enquiry.",
    ],
    sections: [
      {
        heading: "Places you can ask about",
        cards: [
          { title: "Sikkim", text: "Gangtok and, if the roads and permits allow, higher valleys such as Tsomgo. Permits are explained in the quote." },
          { title: "Darjeeling", text: "A hill stay that can stand alone or connect with Sikkim." },
          { title: "Meghalaya", text: "Shillong and Cherrapunji, with living-root bridges only if you want the extra travel time." },
        ],
      },
      {
        heading: "What to send",
        bullets: [
          "The month you hope to travel",
          "How many nights you have",
          "Whether anyone in the group prefers to avoid long mountain drives",
        ],
      },
    ],
    faqs: faqsFor("East India"),
    related: [
      { title: "Domestic tours", href: "/domestic-tour-packages", text: "South India, North India and the islands." },
      { title: "Contact", href: "/contact", text: "Send the dates if you are not sure which state fits." },
    ],
    whatsapp: "Hello Christ Holidays, I am interested in an East India holiday.",
  },
  international: {
    path: "/international-tour-packages",
    title: "International Tour Packages",
    description: "International holidays to Asia, the Middle East and Europe, planned by Christ Holidays & Travels from Salem, Madurai and Thoothukudi. Enquire for the price.",
    crumbs: [home, { name: "International Tours", path: "/international-tour-packages" }],
    eyebrow: "Overseas holidays",
    h1: "International Tour Packages",
    intro: [
      "Christ Holidays & Travels plans international holidays together with flights, hotels and visa guidance when you need them. The pages below describe the regions the site covers.",
      "A visa is never guaranteed. The quote separates the holiday cost from tickets, visa fees and anything optional.",
    ],
    sections: [
      {
        heading: "Regions",
        cards: [
          { title: "Asia", text: "Singapore, Bali, Thailand, Malaysia, the Maldives and Sri Lanka.", href: "/international-tour-packages/asia" },
          { title: "Middle East", text: "Dubai, with Abu Dhabi as a day you can add.", href: "/international-tour-packages/middle-east" },
          { title: "Europe", text: "A multi-city plan based on the countries you choose.", href: "/international-tour-packages/europe" },
          { title: "Africa", text: "No fixed package. Tell us the country and the dates.", href: "/international-tour-packages/africa" },
          { title: "The Americas", text: "No fixed package. Tell us the country and the dates.", href: "/international-tour-packages/americas" },
        ],
      },
    ],
    faqs: faqsFor("international"),
    related: [
      { title: "Visa, flights and hotels", href: "/travel-services", text: "Support that can sit alongside the holiday." },
      { title: "Sample packages", href: "/tour-packages", text: "Outlines for Dubai, Singapore, Bali and others." },
    ],
    whatsapp: "Hello Christ Holidays, I would like an international holiday quote.",
  },
  asia: {
    path: "/international-tour-packages/asia",
    title: "Asia Tour Packages",
    description: "Asia holidays to Singapore, Thailand, Bali, Malaysia, the Maldives and Sri Lanka. Christ Holidays & Travels quotes from Salem, Madurai and Tuticorin.",
    crumbs: [home, { name: "International Tours", path: "/international-tour-packages" }, { name: "Asia", path: "/international-tour-packages/asia" }],
    eyebrow: "International tours",
    h1: "Asia Tour Packages",
    intro: [
      "The Asia pages cover the countries travellers from our Tamil Nadu offices ask for most often.",
      "Vietnam, Japan, Nepal and other Asian countries do not have their own package pages. Name the country in your enquiry and the team will say what can be arranged, then enquire for the price.",
    ],
    sections: [
      {
        heading: "Countries with pages",
        cards: [
          { title: "Singapore", href: "/international-tour-packages/asia/singapore", text: "A short city holiday." },
          { title: "Thailand", href: "/international-tour-packages/asia/thailand", text: "Bangkok, Pattaya or Phuket." },
          { title: "Bali", href: "/international-tour-packages/asia/bali", text: "Beaches and Ubud." },
          { title: "Malaysia", href: "/international-tour-packages/asia/malaysia", text: "Kuala Lumpur, Langkawi and Penang." },
          { title: "Maldives", href: "/international-tour-packages/asia/maldives", text: "An island resort stay." },
          { title: "Sri Lanka", href: "/international-tour-packages/asia/sri-lanka", text: "Culture, tea country and a beach." },
        ],
      },
    ],
    faqs: faqsFor("Asia"),
    related: [
      { title: "Middle East", href: "/international-tour-packages/middle-east", text: "Dubai and Abu Dhabi." },
      { title: "Honeymoon packages", href: "/travel-experiences/honeymoon-packages", text: "Bali and the Maldives are frequent requests." },
    ],
    whatsapp: "Hello Christ Holidays, I am interested in an Asia holiday.",
  },
  singapore: {
    path: "/international-tour-packages/asia/singapore",
    title: "Singapore Tour Packages",
    description: "Singapore city holidays with Gardens by the Bay, Sentosa and family sightseeing. Enquire for the price with Christ Holidays & Travels.",
    crumbs: [home, { name: "International Tours", path: "/international-tour-packages" }, { name: "Asia", path: "/international-tour-packages/asia" }, { name: "Singapore", path: "/international-tour-packages/asia/singapore" }],
    eyebrow: "Asia",
    h1: "Singapore Tour Packages",
    image: { src: "/assets/home/singapore.jpg", alt: "Singapore skyline along the waterfront" },
    intro: [
      "Singapore works well as a short city holiday, especially for families. Christ Holidays & Travels can pair it with Malaysia or Bali if you have extra nights.",
      "Gardens by the Bay, Sentosa, Universal Studios and the night safari are ticketed. They go in the quote only when you want them. Enquire for the price.",
    ],
    sections: [
      {
        heading: "Stops families ask about",
        bullets: [
          "Gardens by the Bay and the Marina Bay area",
          "Sentosa and Universal Studios",
          "Singapore Zoo or the Night Safari",
          "Time on Orchard Road",
        ],
      },
      {
        heading: "Sample ideas",
        cards: [
          { title: "Singapore city stay", text: "Four days. See the sample outline.", enquire: true, href: "/tour-packages/singapore-4-days-3-nights" },
          { title: "Singapore with family", text: "One or two ticketed attractions, not a packed timetable.", enquire: true },
          { title: "Singapore and Malaysia", text: "A second country if you have the nights.", enquire: true, href: "/international-tour-packages/asia/malaysia" },
        ],
      },
    ],
    faqs: faqsFor("Singapore"),
    related: [
      { title: "Malaysia", href: "/international-tour-packages/asia/malaysia", text: "Often combined with Singapore." },
      { title: "Visa assistance", href: "/travel-services#visa", text: "Entry rules change, so ask before you book flights." },
    ],
    whatsapp: "Hello Christ Holidays, I am interested in a Singapore holiday.",
  },
  thailand: {
    path: "/international-tour-packages/asia/thailand",
    title: "Thailand Tour Packages",
    description: "Thailand holidays for Bangkok, Pattaya and Phuket. Christ Holidays & Travels in Salem, Madurai and Thoothukudi will quote after you enquire.",
    crumbs: [home, { name: "International Tours", path: "/international-tour-packages" }, { name: "Asia", path: "/international-tour-packages/asia" }, { name: "Thailand", path: "/international-tour-packages/asia/thailand" }],
    eyebrow: "Asia",
    h1: "Thailand Tour Packages",
    image: { src: "/assets/home/thailand.jpg", alt: "A temple roof in Thailand" },
    intro: [
      "Thailand trips are shaped by the base you choose. Bangkok and Pattaya suit a first city-and-beach visit. Phuket suits travellers who want the beach to be the point of the trip.",
      "Temple visits, island boats and shows are optional. Enquire for the price, including flights if you want them arranged.",
    ],
    sections: [
      {
        heading: "Sample ideas",
        cards: [
          { title: "Bangkok and Pattaya", text: "A first Thailand trip with a city and a beach.", enquire: true },
          { title: "Phuket beach stay", text: "More time on the island, fewer city sights.", enquire: true },
          { title: "Thailand honeymoon", text: "A slower beach plan.", enquire: true, href: "/travel-experiences/honeymoon-packages" },
          { title: "Thailand with family", text: "One base where possible, so the group is not changing hotels daily.", enquire: true },
        ],
      },
    ],
    faqs: faqsFor("Thailand"),
    related: [
      { title: "Thailand sample package", href: "/tour-packages/thailand-5-days-4-nights", text: "A five-day outline." },
      { title: "Asia", href: "/international-tour-packages/asia", text: "Singapore, Bali, Malaysia and more." },
    ],
    whatsapp: "Hello Christ Holidays, I am interested in a Thailand holiday.",
  },
  bali: {
    path: "/international-tour-packages/asia/bali",
    title: "Bali Tour Packages",
    description: "Bali holidays with Ubud, temples and beach time. Enquire for the price with Christ Holidays & Travels, a travel agency in Salem, Madurai and Tuticorin.",
    crumbs: [home, { name: "International Tours", path: "/international-tour-packages" }, { name: "Asia", path: "/international-tour-packages/asia" }, { name: "Bali", path: "/international-tour-packages/asia/bali" }],
    eyebrow: "Asia",
    h1: "Bali Tour Packages",
    image: { src: "/assets/home/bali.jpg", alt: "A traditional gateway and greenery in Bali" },
    intro: [
      "Bali plans usually split nights between a beach area such as Seminyak, Nusa Dua or Uluwatu and a quieter stay around Ubud. You can also stay in one area.",
      "Tanah Lot, Uluwatu, the rice terraces and a temple visit are the sights people name. A spa or cooking class can be added. Enquire for the price.",
    ],
    sections: [
      {
        heading: "What a Bali week can hold",
        bullets: [
          "Beach time in Seminyak, Nusa Dua or Uluwatu",
          "A day in Ubud for markets, terraces or a temple",
          "Tanah Lot or Uluwatu at sunset",
          "A free day with nothing booked",
        ],
      },
      {
        heading: "Sample ideas",
        cards: [
          { title: "Ubud and the beach", text: "The usual split stay.", enquire: true, href: "/tour-packages/bali-5-days-4-nights" },
          { title: "Bali honeymoon", text: "Fewer transfers and a later start to the days.", enquire: true },
          { title: "Bali with family", text: "One hotel base if travelling with children.", enquire: true },
          { title: "Singapore and Bali", text: "Two countries if you have a longer holiday.", enquire: true },
        ],
      },
    ],
    faqs: faqsFor("Bali"),
    related: [
      { title: "Singapore", href: "/international-tour-packages/asia/singapore", text: "A city stop some travellers add before Bali." },
      { title: "Honeymoon packages", href: "/travel-experiences/honeymoon-packages", text: "See other honeymoon destinations." },
    ],
    whatsapp: "Hello Christ Holidays, I am interested in a Bali holiday.",
  },
  malaysia: {
    path: "/international-tour-packages/asia/malaysia",
    title: "Malaysia Tour Packages",
    description: "Malaysia holidays for Kuala Lumpur, Langkawi and Penang. Ask Christ Holidays & Travels for a quote. Offices in Salem, Madurai and Thoothukudi.",
    crumbs: [home, { name: "International Tours", path: "/international-tour-packages" }, { name: "Asia", path: "/international-tour-packages/asia" }, { name: "Malaysia", path: "/international-tour-packages/asia/malaysia" }],
    eyebrow: "Asia",
    h1: "Malaysia Tour Packages",
    image: { src: "/assets/home/malaysia.jpg", alt: "The Petronas Towers in Kuala Lumpur" },
    intro: [
      "Malaysia trips often start in Kuala Lumpur and add either Langkawi or Penang. Doing both in a short holiday means another flight, so the quote will show that clearly.",
      "City tours, the cable car in Langkawi and George Town walks are planned to your pace. Enquire for the price.",
    ],
    sections: [
      {
        heading: "Places",
        cards: [
          { title: "Kuala Lumpur", text: "The towers area, shopping and a city tour." },
          { title: "Langkawi", text: "Beaches, the cable car and island time." },
          { title: "Penang", text: "George Town and its street food, at your own pace." },
          { title: "With Singapore", text: "A dual-country trip if the dates allow.", href: "/international-tour-packages/asia/singapore" },
        ],
      },
    ],
    faqs: faqsFor("Malaysia"),
    related: [
      { title: "Malaysia sample package", href: "/tour-packages/malaysia-5-days-4-nights", text: "A five-day outline." },
      { title: "Singapore", href: "/international-tour-packages/asia/singapore", text: "The neighbouring city break." },
    ],
    whatsapp: "Hello Christ Holidays, I am interested in a Malaysia holiday.",
  },
  maldives: {
    path: "/international-tour-packages/asia/maldives",
    title: "Maldives Tour Packages",
    description: "Maldives island stays planned around your dates and resort choice. Enquire for the price with Christ Holidays & Travels in Tamil Nadu.",
    crumbs: [home, { name: "International Tours", path: "/international-tour-packages" }, { name: "Asia", path: "/international-tour-packages/asia" }, { name: "Maldives", path: "/international-tour-packages/asia/maldives" }],
    eyebrow: "Asia",
    h1: "Maldives Tour Packages",
    image: { src: "/assets/home/maldives.jpg", alt: "Shallow turquoise water meeting a white Maldives beach" },
    intro: [
      "A Maldives holiday is a resort stay. The island, the transfer from Malé and the meal plan change the price more than the number of sightseeing days, because there is little sightseeing in the usual sense.",
      "Christ Holidays & Travels will ask which resort level you have in mind and then enquire for the price with the property. Speedboat and seaplane transfers are quoted separately when they apply.",
    ],
    sections: [
      {
        heading: "Who these stays suit",
        bullets: [
          "Couples who want a quiet island, including honeymoons",
          "Travellers marking an anniversary or another occasion",
          "Anyone who wants most of the day unscheduled",
        ],
      },
      {
        heading: "Sample ideas",
        cards: [
          { title: "Four-night island stay", text: "A common length. The resort is chosen with you.", enquire: true, href: "/tour-packages/maldives-5-days-4-nights" },
          { title: "Shorter stay", text: "Three nights when leave is limited.", enquire: true },
          { title: "Honeymoon", text: "Tell us the dates and any meal plan you prefer.", enquire: true },
        ],
      },
    ],
    faqs: faqsFor("Maldives"),
    related: [
      { title: "Bali", href: "/international-tour-packages/asia/bali", text: "An island trip with more sightseeing." },
      { title: "Andaman", href: "/domestic-tour-packages/islands/andaman", text: "A domestic island alternative." },
    ],
    whatsapp: "Hello Christ Holidays, I am interested in a Maldives holiday.",
  },
  sriLanka: {
    path: "/international-tour-packages/asia/sri-lanka",
    title: "Sri Lanka Tour Packages",
    description: "Sri Lanka holidays through the cultural triangle, Kandy, tea country and the coast. Enquire for the price with Christ Holidays & Travels.",
    crumbs: [home, { name: "International Tours", path: "/international-tour-packages" }, { name: "Asia", path: "/international-tour-packages/asia" }, { name: "Sri Lanka", path: "/international-tour-packages/asia/sri-lanka" }],
    eyebrow: "Asia",
    h1: "Sri Lanka Tour Packages",
    image: { src: "/assets/home/srilanka.jpg", alt: "Green hillsides and a coastal road in Sri Lanka" },
    intro: [
      "Sri Lanka rewards a loop rather than a single hotel. A typical request runs from the cultural triangle to Kandy, Nuwara Eliya and a southern beach such as Bentota or Mirissa.",
      "Sigiriya, the Temple of the Tooth and a safari in Yala or Udawalawe are optional stops. Distances are longer than they look on a map. Enquire for the price.",
    ],
    sections: [
      {
        heading: "Stops you can include",
        bullets: [
          "Sigiriya or Dambulla in the cultural triangle",
          "Kandy and the Temple of the Tooth",
          "Nuwara Eliya and a tea estate",
          "A beach at Bentota, Galle or Mirissa",
          "A safari only if you want the extra driving",
        ],
      },
      {
        heading: "Sample ideas",
        cards: [
          { title: "Culture and a beach", text: "About six days. See the sample outline.", enquire: true, href: "/tour-packages/sri-lanka-6-days-5-nights" },
          { title: "Hill country and beach", text: "Less archaeology, more scenery.", enquire: true },
          { title: "Sri Lanka honeymoon", text: "Fewer hotel changes.", enquire: true },
        ],
      },
    ],
    faqs: faqsFor("Sri Lanka"),
    related: [
      { title: "Kerala", href: "/domestic-tour-packages/south-india/kerala", text: "A South Indian trip with a similar mix of hills and water." },
      { title: "Asia", href: "/international-tour-packages/asia", text: "Other Asian countries." },
    ],
    whatsapp: "Hello Christ Holidays, I am interested in a Sri Lanka holiday.",
  },
  middleEast: {
    path: "/international-tour-packages/middle-east",
    title: "Middle East Tour Packages",
    description: "Dubai holidays, with Abu Dhabi available as an extra day. Enquire for the price with Christ Holidays & Travels in Salem, Madurai and Thoothukudi.",
    crumbs: [home, { name: "International Tours", path: "/international-tour-packages" }, { name: "Middle East", path: "/international-tour-packages/middle-east" }],
    eyebrow: "International tours",
    h1: "Middle East Tour Packages",
    intro: [
      "Dubai is the Middle East city this website describes in full. Abu Dhabi can be a day trip from Dubai. Other Gulf cities are quoted only after you name them.",
      "Desert outings, downtown tickets and marina time are chosen with you. Enquire for the price.",
    ],
    sections: [
      {
        heading: "Where to start",
        cards: [
          { title: "Dubai", text: "City landmarks, a desert outing and time to shop.", href: "/international-tour-packages/middle-east/dubai" },
          { title: "Abu Dhabi day", text: "The Sheikh Zayed Grand Mosque is the usual request. It is added to a Dubai stay, not sold here as a separate fare.", href: "/contact" },
        ],
      },
    ],
    faqs: faqsFor("Middle East"),
    related: [
      { title: "Dubai sample package", href: "/tour-packages/dubai-5-days-4-nights", text: "A five-day outline." },
      { title: "Visa assistance", href: "/travel-services#visa", text: "Ask about entry rules before you pay for flights." },
    ],
    whatsapp: "Hello Christ Holidays, I am interested in a Middle East holiday.",
  },
  dubai: {
    path: "/international-tour-packages/middle-east/dubai",
    title: "Dubai Tour Packages",
    description: "Dubai holidays with city time, a desert outing and an optional Abu Dhabi day. Enquire for the price with Christ Holidays & Travels.",
    crumbs: [home, { name: "International Tours", path: "/international-tour-packages" }, { name: "Middle East", path: "/international-tour-packages/middle-east" }, { name: "Dubai", path: "/international-tour-packages/middle-east/dubai" }],
    eyebrow: "Middle East",
    h1: "Dubai Tour Packages",
    image: { src: "/assets/home/dubai.jpg", alt: "Dubai city skyline reflected in the water" },
    intro: [
      "A Dubai holiday from Christ Holidays & Travels is a hotel stay plus the outings you actually want. Burj Khalifa tickets, a desert safari, a marina cruise and an Abu Dhabi day are all optional.",
      "The quote lists which of those are included. Shopping time does not need to be booked. Enquire for the price.",
    ],
    sections: [
      {
        heading: "Experiences you can add",
        bullets: [
          "Downtown, including the Burj Khalifa if you want tickets",
          "A desert safari",
          "Dubai Marina and Palm Jumeirah viewpoints",
          "Souks and malls, in your own time",
          "A day in Abu Dhabi",
        ],
      },
      {
        heading: "Sample ideas",
        cards: [
          { title: "Dubai city stay", text: "Five days with a desert outing if you want it.", enquire: true, href: "/tour-packages/dubai-5-days-4-nights" },
          { title: "Dubai and Abu Dhabi", text: "One day out of the city.", enquire: true },
          { title: "Dubai honeymoon", text: "A slower plan and a hotel chosen with you.", enquire: true },
        ],
      },
    ],
    faqs: faqsFor("Dubai"),
    related: [
      { title: "Middle East", href: "/international-tour-packages/middle-east", text: "How Abu Dhabi fits a Dubai trip." },
      { title: "Flights", href: "/travel-services#flights", text: "Ask for flight options with the hotel plan." },
    ],
    whatsapp: "Hello Christ Holidays, I am interested in a Dubai holiday.",
  },
  europe: {
    path: "/international-tour-packages/europe",
    title: "Europe Tour Packages",
    description: "Europe holidays built around the countries and dates you choose. No fixed fare is published. Enquire with Christ Holidays & Travels in Salem, Madurai or Tuticorin.",
    crumbs: [home, { name: "International Tours", path: "/international-tour-packages" }, { name: "Europe", path: "/international-tour-packages/europe" }],
    eyebrow: "International tours",
    h1: "Europe Tour Packages",
    image: { src: "/assets/home/europe.jpg", alt: "A European old-town street" },
    intro: [
      "Europe trips are custom. Christ Holidays & Travels does not publish a single Europe package price, because the countries, the month and the hotels change the cost completely.",
      "Tell the team which cities matter. France, Switzerland, Italy, Austria and the Netherlands are frequent requests. Schengen visa guidance can be part of the conversation. Approval is not guaranteed.",
    ],
    sections: [
      {
        heading: "How to start",
        bullets: [
          "List the cities in the order you imagine them",
          "Say the month, and how many nights you can take",
          "Say whether you prefer trains or short flights between cities",
          "Mention if this is a honeymoon, a family trip or a group",
        ],
      },
      {
        heading: "A sample shape, not a booking",
        paragraphs: [
          "A first Europe holiday is often two or three cities with a travel day between them. The sample package shows that shape. Your quote will name the cities and the price.",
        ],
        cards: [
          { title: "Europe sample outline", text: "A multi-city skeleton. Enquire for the price.", href: "/tour-packages/europe-multi-city", enquire: true },
        ],
      },
    ],
    faqs: faqsFor("Europe"),
    related: [
      { title: "Visa assistance", href: "/travel-services#visa", text: "Documents and appointments, without a promise of approval." },
      { title: "Honeymoon packages", href: "/travel-experiences/honeymoon-packages", text: "Europe is one of the honeymoon options." },
    ],
    whatsapp: "Hello Christ Holidays, I am interested in a Europe holiday.",
  },
  africa: {
    path: "/international-tour-packages/africa",
    title: "Africa Tour Enquiries",
    description: "Africa travel enquiries with Christ Holidays & Travels. No fixed Africa package or price is published. Offices in Salem, Madurai and Thoothukudi.",
    crumbs: [home, { name: "International Tours", path: "/international-tour-packages" }, { name: "Africa", path: "/international-tour-packages/africa" }],
    eyebrow: "On enquiry",
    h1: "Africa Tour Enquiries",
    intro: [
      "There is no fixed Africa package on this website. If you are travelling to Kenya, South Africa, Egypt, Mauritius or another African country, send the destination and the dates.",
      "The Salem, Madurai or Thoothukudi team will tell you whether hotels and flights can be arranged, and will enquire for the price. Visa rules are checked for that country. Approval is not guaranteed.",
    ],
    sections: [
      {
        heading: "What helps the reply",
        bullets: [
          "The country and the cities or parks you hope to see",
          "Travel month and trip length",
          "Number of travellers",
          "Whether you need flights, hotels, or both",
        ],
      },
    ],
    faqs: faqsFor("Africa"),
    related: [
      { title: "International tours", href: "/international-tour-packages", text: "Asia, the Middle East and Europe have fuller pages." },
      { title: "Contact", href: "/contact", text: "Send the enquiry in writing if you prefer." },
    ],
    whatsapp: "Hello Christ Holidays, I would like to ask about travel to Africa.",
  },
  americas: {
    path: "/international-tour-packages/americas",
    title: "Americas Tour Enquiries",
    description: "USA, Canada and other Americas travel enquiries. Christ Holidays & Travels does not publish a fixed price. Ask the Salem, Madurai or Tuticorin office.",
    crumbs: [home, { name: "International Tours", path: "/international-tour-packages" }, { name: "Americas", path: "/international-tour-packages/americas" }],
    eyebrow: "On enquiry",
    h1: "Americas Tour Enquiries",
    intro: [
      "There is no fixed United States, Canada or South America package on this website. Share the cities, the month and who is travelling.",
      "Flights and hotels can be requested. Visa guidance is limited to explaining the steps. The embassy decides the application. Enquire for the price once the route is clear.",
    ],
    sections: [
      {
        heading: "Countries people ask about",
        paragraphs: [
          "The United States, Canada and a few South American cities come up in enquiries. Naming the cities matters more than naming the continent, because a coast-to-coast trip is a different holiday from a single-city stay.",
        ],
      },
    ],
    faqs: faqsFor("Americas"),
    related: [
      { title: "Travel services", href: "/travel-services", text: "Flights, hotels and visa guidance." },
      { title: "Europe", href: "/international-tour-packages/europe", text: "Another long-haul trip that is planned city by city." },
    ],
    whatsapp: "Hello Christ Holidays, I would like to ask about travel to the Americas.",
  },
  honeymoon: {
    path: "/travel-experiences/honeymoon-packages",
    title: "Honeymoon Packages",
    description: "Honeymoon planning for Kerala, Kashmir, Dubai, Bali, the Maldives, Andaman and other destinations. Enquire for the price with Christ Holidays & Travels.",
    crumbs: [home, { name: "Honeymoon", path: "/travel-experiences/honeymoon-packages" }],
    eyebrow: "For two",
    h1: "Honeymoon Packages",
    intro: [
      "Honeymoon trips are planned around the two of you: fewer early starts, a hotel you have both seen pictures of, and sightseeing only where you want it.",
      "Christ Holidays & Travels does not publish honeymoon fares. The destinations below are the ones couples ask about. Other places are welcome. Offices in Salem, Madurai and Thoothukudi (Tuticorin) can all take the enquiry.",
    ],
    sections: [
      {
        heading: "Destinations couples ask about",
        cards: [
          { title: "Kerala", text: "Hills and a backwater night.", href: "/domestic-tour-packages/south-india/kerala" },
          { title: "Kashmir", text: "A quieter valley stay.", href: "/domestic-tour-packages/north-india/kashmir" },
          { title: "Dubai", text: "A city hotel and optional desert time.", href: "/international-tour-packages/middle-east/dubai" },
          { title: "Bali", text: "A beach and Ubud, or one of the two.", href: "/international-tour-packages/asia/bali" },
          { title: "Maldives", text: "An island resort. The resort sets the price.", href: "/international-tour-packages/asia/maldives" },
          { title: "Andaman", text: "Beaches closer to home.", href: "/domestic-tour-packages/islands/andaman" },
          { title: "Europe", text: "Cities chosen by you.", href: "/international-tour-packages/europe" },
        ],
      },
      {
        heading: "What to tell us",
        bullets: [
          "Preferred destination, or two options",
          "Travel dates and how fixed they are",
          "The kind of hotel you hope for",
          "Any flights or visa help you need",
        ],
      },
    ],
    faqs: faqsFor("honeymoon"),
    related: [
      { title: "Contact", href: "/contact", text: "Send both names and a phone number." },
      { title: "Visa and flights", href: "/travel-services", text: "Useful for international honeymoons." },
    ],
    whatsapp: "Hello Christ Holidays, we are planning a honeymoon and would like a quote.",
  },
  groupTours: {
    path: "/travel-experiences/group-tours",
    title: "Group Tours",
    description: "Group holidays for families, friends and larger parties, coordinated by Christ Holidays & Travels in Salem, Madurai and Thoothukudi. Enquire for the price.",
    crumbs: [home, { name: "Group Tours", path: "/travel-experiences/group-tours" }],
    eyebrow: "Travel together",
    h1: "Group Tours",
    intro: [
      "Group travel needs one itinerary, enough rooms of the right type, and a single person the group can call. Christ Holidays & Travels coordinates that from Salem, Madurai and Thoothukudi.",
      "These are custom group trips, not a calendar of fixed departures. Corporate groups have their own page. Enquire for the price once the headcount is roughly known.",
    ],
    sections: [
      {
        heading: "Who the group might be",
        cards: [
          { title: "Families travelling together", text: "Several households, one plan, rooms that match who shares with whom." },
          { title: "Friends", text: "A shared itinerary with some free time built in." },
          { title: "College or school groups", text: "Possible when dates, teacher contacts and the destination are clear. Ask before assuming a date is free." },
          { title: "Company groups", text: "Offsites and incentive trips are described on the corporate page.", href: "/travel-experiences/corporate-tours" },
        ],
      },
      {
        heading: "What the coordinator needs",
        bullets: [
          "Approximate number of adults and children",
          "Destination and dates",
          "Whether rooms are twin, double or family",
          "One group leader's phone number",
        ],
      },
    ],
    faqs: faqsFor("group"),
    related: [
      { title: "Corporate tours", href: "/travel-experiences/corporate-tours", text: "For company offsites and team travel." },
      { title: "Domestic tours", href: "/domestic-tour-packages", text: "Regions that work well for groups." },
    ],
    whatsapp: "Hello Christ Holidays, we are planning a group tour.",
  },
  corporate: {
    path: "/travel-experiences/corporate-tours",
    title: "Corporate Tours",
    description: "Corporate offsites and team travel coordinated by Christ Holidays & Travels. One point of contact in Salem, Madurai or Thoothukudi. Enquire for the price.",
    crumbs: [home, { name: "Corporate Tours", path: "/travel-experiences/corporate-tours" }],
    eyebrow: "Company travel",
    h1: "Corporate Tours",
    intro: [
      "Corporate travel here means a company offsite, an incentive trip or a team movement where stays and transfers need to line up. Christ Holidays & Travels gives the company one point of contact at the Salem, Madurai or Thoothukudi office.",
      "There is no published corporate rate. The quote depends on the city, the dates and the room count. This website does not list client names or claim a preferred-supplier status with any hotel group.",
    ],
    sections: [
      {
        heading: "What can be coordinated",
        bullets: [
          "Hotel rooms for a team, blocked only after you confirm the quote",
          "Airport and venue transfers",
          "A simple leisure add-on if the offsite includes a free day",
          "Flight options for the group, requested from airlines rather than promised as a special fare",
        ],
      },
      {
        heading: "What to send the office",
        bullets: [
          "Company contact name and phone number",
          "City or destination",
          "Dates and whether they can move",
          "Number of people and the meeting-space need, if any",
        ],
      },
    ],
    faqs: [
      {
        question: "Do you publish corporate package rates?",
        answer: "No. Enquire for the price. Room rates and transport change with dates and numbers, so the quote is the document to approve.",
      },
      {
        question: "Can one office handle the whole group?",
        answer: "Yes. Choose Salem, Madurai or Thoothukudi (Tuticorin) as the contact. WhatsApp messages go to the Salem number, +91 96298 79026.",
      },
      {
        question: "Is a meeting venue included automatically?",
        answer: "Only if you ask for one and the quote lists it. Many teams only need rooms and transfers.",
      },
    ],
    related: [
      { title: "Group tours", href: "/travel-experiences/group-tours", text: "For families and friends rather than a company." },
      { title: "Flights and hotels", href: "/travel-services", text: "The same services, booked alongside the offsite." },
    ],
    whatsapp: "Hello Christ Holidays, we would like a quote for a corporate trip.",
  },
} satisfies Record<string, PageContent>;

export type PageId = keyof typeof pages;
