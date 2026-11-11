import Link from "next/link";
export default function LocationsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-primary mb-6">Our Locations</h1>
      <div className="space-y-4">
        <Link href="/locations/salem" className="block border rounded-xl p-6 hover:shadow-md">Salem (Head Office) →</Link>
        <Link href="/locations/madurai" className="block border rounded-xl p-6 hover:shadow-md">Madurai →</Link>
        <Link href="/locations/thoothukudi" className="block border rounded-xl p-6 hover:shadow-md">Thoothukudi →</Link>
      </div>
    </div>
  );
}
