import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Our Locations" };

export default function LocationsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-blue-900 mb-4">Our Locations</h1>
      <p className="text-lg text-gray-700 mb-10">Visit or contact any of our offices for personalised travel planning.</p>
      <div className="space-y-6">
        <Link href="/locations/salem" className="block border rounded-2xl p-6 hover:shadow-lg transition">
          <h2 className="text-2xl font-bold">Salem (Head Office)</h2>
          <p className="text-gray-600 mt-1">Primary office for enquiries and bookings</p>
        </Link>
        <Link href="/locations/madurai" className="block border rounded-2xl p-6 hover:shadow-lg transition">
          <h2 className="text-2xl font-bold">Madurai</h2>
          <p className="text-gray-600 mt-1">Branch office</p>
        </Link>
        <Link href="/locations/thoothukudi" className="block border rounded-2xl p-6 hover:shadow-lg transition">
          <h2 className="text-2xl font-bold">Thoothukudi</h2>
          <p className="text-gray-600 mt-1">Branch office</p>
        </Link>
      </div>
    </div>
  );
}
