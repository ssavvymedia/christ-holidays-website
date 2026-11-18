import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Middle East Tour Packages",
  description: "Dubai, Abu Dhabi and other Middle East packages.",
};

export default function MiddleEastPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-blue-900 mb-4">Middle East Tour Packages</h1>
      <p className="text-lg text-gray-700 mb-6">Luxury city experiences, desert safaris and modern attractions.</p>
      <div className="grid sm:grid-cols-2 gap-6 mb-10">
        <div className="border rounded-2xl p-6"><h2 className="font-bold text-xl">Dubai</h2><p className="text-gray-600 mt-1">Burj Khalifa, desert safari, Marina and shopping.</p></div>
        <div className="border rounded-2xl p-6"><h2 className="font-bold text-xl">Abu Dhabi</h2><p className="text-gray-600 mt-1">Sheikh Zayed Mosque, Ferrari World and more.</p></div>
      </div>
      <a href="https://wa.me/919629879026?text=Hello%20Christ%20Holidays%2C%20I%20am%20interested%20in%20Dubai%20packages." className="inline-flex bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold">Enquire on WhatsApp</a>
    </div>
  );
}
