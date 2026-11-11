import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Christ Holidays & Travels – your trusted partner for domestic and international holidays.",
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-primary mb-6">About Christ Holidays & Travels</h1>
      <p className="text-lg text-gray-700 mb-6">Christ Holidays & Travels is a trusted travel partner helping individuals, families, groups and corporates plan memorable domestic and international holidays.</p>
      <p className="text-gray-700 mb-6">With offices in Salem (Head Office), Madurai and Thoothukudi, we focus on transparent planning, reliable coordination and end-to-end support.</p>
      <div className="bg-blue-50 rounded-2xl p-8 mt-8">
        <h2 className="text-2xl font-bold mb-4">Why Choose Us</h2>
        <ul className="space-y-3 text-gray-700">
          <li>• Thoughtfully planned itineraries</li>
          <li>• Transparent package details</li>
          <li>• Dedicated travel support</li>
          <li>• Customised options for families, groups and corporates</li>
        </ul>
      </div>
    </div>
  );
}
