import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Travel Services",
  description: "Flight booking, visa assistance, hotel booking and customised holidays from Christ Holidays.",
};

export default function TravelServicesPage() {
  const services = [
    { title: "Flight Booking", desc: "Domestic and international flight reservations with the best available options." },
    { title: "Group Flight Booking", desc: "Special group fares for families, corporates and tour groups." },
    { title: "Visa Assistance", desc: "Guidance and support for tourist and business visas." },
    { title: "Hotel Booking", desc: "Handpicked hotels across destinations with trusted partners." },
    { title: "Customised Holidays", desc: "Fully tailored itineraries based on your preferences and budget." },
    { title: "Travel Insurance", desc: "Assistance with travel insurance options for your journey." },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-blue-900 mb-4">Travel Services</h1>
      <p className="text-lg text-gray-700 mb-10">Complete travel support from enquiry to your return home.</p>
      <div className="grid md:grid-cols-2 gap-6">
        {services.map((s) => (
          <div key={s.title} className="border rounded-2xl p-6 hover:shadow-md transition">
            <h2 className="text-xl font-bold mb-2">{s.title}</h2>
            <p className="text-gray-600">{s.desc}</p>
          </div>
        ))}
      </div>
      <a href="https://wa.me/919629879026?text=Hello%20Christ%20Holidays%2C%20I%20need%20help%20with%20travel%20services." className="mt-10 inline-flex bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold">Contact Us on WhatsApp</a>
    </div>
  );
}
