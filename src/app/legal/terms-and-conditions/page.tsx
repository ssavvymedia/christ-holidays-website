import type { Metadata } from "next";

export const metadata: Metadata = { title: "Terms and Conditions" };

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-6">Terms and Conditions</h1>
      <p className="text-sm text-gray-500 mb-8">Last updated: November 2026</p>
      <h2 className="text-2xl font-bold mt-6 mb-3">Quotations & Bookings</h2>
      <p>All packages and prices are subject to availability and confirmation. Final pricing, inclusions and terms will be shared upon enquiry.</p>
      <h2 className="text-2xl font-bold mt-6 mb-3">Payments</h2>
      <p>Advance payment is required to confirm most bookings. Balance must be cleared as per the payment schedule mentioned in your quotation.</p>
      <h2 className="text-2xl font-bold mt-6 mb-3">Cancellations & Amendments</h2>
      <p>Cancellation and amendment charges vary by supplier and season. Specific terms will be provided with your booking confirmation.</p>
      <h2 className="text-2xl font-bold mt-6 mb-3">Liability</h2>
      <p>Christ Holidays & Travels acts as an agent for hotels, transport and other suppliers. We are not liable for acts, omissions or service failures of third-party providers.</p>
      <p className="text-sm text-gray-500 mt-10">Placeholder content — please review and customise with your legal advisor before launch.</p>
    </div>
  );
}
