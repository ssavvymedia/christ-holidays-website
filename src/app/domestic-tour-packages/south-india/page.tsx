import Link from "next/link";
export default function SouthIndiaPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-primary mb-4">South India Tour Packages</h1>
      <p className="text-lg text-gray-700 mb-8">Kerala, Tamil Nadu, Karnataka and Andhra Pradesh.</p>
      <Link href="/domestic-tour-packages/south-india/kerala" className="inline-block border rounded-xl p-6 hover:shadow-md">Kerala Packages →</Link>
    </div>
  );
}
