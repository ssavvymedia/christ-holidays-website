import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Group Tours",
  description: "Fixed departure and custom group tours for families, corporates and friends.",
};

export default function GroupToursPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-blue-900 mb-4">Group Tours</h1>
      <p className="text-lg text-gray-700 mb-6">
        Travel together with friends, family or colleagues. We organise both fixed-departure group tours and fully customised group holidays.
      </p>
      <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-10">
        <li>Family group holidays</li>
        <li>Corporate offsites and incentive tours</li>
        <li>College and school groups</li>
        <li>Custom group itineraries with dedicated coordinator</li>
      </ul>
      <a href="https://wa.me/919629879026?text=Hello%20Christ%20Holidays%2C%20we%20are%20planning%20a%20group%20tour." className="inline-flex bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold">Plan a Group Tour on WhatsApp</a>
    </div>
  );
}
