import type { Metadata } from "next";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPolicy() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16 prose prose-blue">
      <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
      <p className="text-sm text-gray-500 mb-8">Last updated: November 2026</p>
      <p>Christ Holidays & Travels (“we”, “our”) collects only the information necessary to respond to your travel enquiry and provide services.</p>
      <h2 className="text-2xl font-bold mt-8 mb-3">Information We Collect</h2>
      <ul className="list-disc pl-5 space-y-1">
        <li>Name, phone number, email and WhatsApp details</li>
        <li>Travel preferences, dates, destinations and passenger details</li>
        <li>Any documents or notes you voluntarily share</li>
      </ul>
      <h2 className="text-2xl font-bold mt-8 mb-3">How We Use Your Information</h2>
      <p>We use your details solely to prepare itineraries, quotations, bookings and customer support. We do not sell your data to third parties.</p>
      <h2 className="text-2xl font-bold mt-8 mb-3">Data Sharing</h2>
      <p>We may share necessary information with hotels, transport providers and suppliers only for the purpose of fulfilling your travel arrangements.</p>
      <h2 className="text-2xl font-bold mt-8 mb-3">Your Rights</h2>
      <p>You may request access, correction or deletion of your personal data by contacting us at christholidaystravels@gmail.com.</p>
      <p className="text-sm text-gray-500 mt-10">This is a placeholder policy. Please review and finalise with legal advice before production use.</p>
    </div>
  );
}
