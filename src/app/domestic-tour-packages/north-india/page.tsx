import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "North India Tour Packages",
  description: "Kashmir, Himachal, Uttarakhand, Rajasthan and more with Christ Holidays.",
};

export default function NorthIndiaPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-blue-900 mb-4">North India Tour Packages</h1>
      <p className="text-lg text-gray-700 mb-6">
        Experience the majestic mountains, deserts, spiritual centres and royal heritage of North India.
      </p>
      <div className="grid sm:grid-cols-2 gap-6 mb-10">
        {["Kashmir", "Himachal Pradesh", "Uttarakhand", "Rajasthan", "Uttar Pradesh", "Punjab"].map((place) => (
          <div key={place} className="border rounded-xl p-5">
            <h2 className="font-bold text-xl">{place}</h2>
          </div>
        ))}
      </div>
      <a href="https://wa.me/919629879026?text=Hello%20Christ%20Holidays%2C%20I%20am%20interested%20in%20North%20India%20packages." className="inline-flex bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold">Enquire on WhatsApp</a>
    </div>
  );
}
