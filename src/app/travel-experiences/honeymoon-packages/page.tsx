import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Honeymoon Packages",
  description: "Romantic honeymoon packages for Kerala, Kashmir, Dubai, Singapore, Bali and more.",
};

export default function HoneymoonPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-blue-900 mb-4">Honeymoon Packages</h1>
      <p className="text-lg text-gray-700 mb-6">
        Celebrate your special moments with thoughtfully planned romantic getaways. From private houseboats in Kerala to luxury stays in Dubai and Bali.
      </p>
      <div className="grid sm:grid-cols-2 gap-6 mb-10">
        {["Kerala Honeymoon", "Kashmir Honeymoon", "Dubai Honeymoon", "Singapore + Bali", "Maldives", "Andaman"].map((pkg) => (
          <div key={pkg} className="border rounded-2xl p-6 hover:shadow-md transition">
            <h2 className="font-bold text-xl">{pkg}</h2>
          </div>
        ))}
      </div>
      <a href="https://wa.me/919629879026?text=Hello%20Christ%20Holidays%2C%20we%20are%20planning%20our%20honeymoon." className="inline-flex bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold">Plan Your Honeymoon on WhatsApp</a>
    </div>
  );
}
