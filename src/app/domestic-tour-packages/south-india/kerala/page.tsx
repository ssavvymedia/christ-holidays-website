import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kerala Tour Packages",
  description: "Kerala backwaters, Munnar, Alleppey houseboats and more with Christ Holidays.",
};

export default function KeralaPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-blue-900 mb-4">Kerala Tour Packages</h1>
      <p className="text-lg text-gray-700 mb-6">
        Experience the serene backwaters, misty hills of Munnar, beaches and rich culture of God’s Own Country.
      </p>
      <div className="space-y-4 mb-10">
        <div className="border rounded-xl p-5"><h2 className="font-bold text-xl">Alleppey Houseboat Packages</h2><p className="text-gray-600 mt-1">Overnight cruises through the backwaters.</p></div>
        <div className="border rounded-xl p-5"><h2 className="font-bold text-xl">Munnar Hill Station</h2><p className="text-gray-600 mt-1">Tea gardens, viewpoints and cool climate.</p></div>
        <div className="border rounded-xl p-5"><h2 className="font-bold text-xl">Kerala Family & Honeymoon Packages</h2><p className="text-gray-600 mt-1">Customised combinations of backwaters, hills and beaches.</p></div>
      </div>
      <a href="https://wa.me/919629879026?text=Hello%20Christ%20Holidays%2C%20I%20am%20interested%20in%20Kerala%20packages." className="inline-flex bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold">Enquire on WhatsApp</a>
    </div>
  );
}
