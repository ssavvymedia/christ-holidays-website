import Image from "next/image";
import Link from "next/link";
import { packages, destinations } from "@/data/packages";

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-sky-50 via-blue-50 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Plan Your <span className="bg-yellow-400 px-2 rounded">Next Holiday</span><br />with Experts
            </h1>
            <p className="mt-4 text-lg text-gray-700">
              Domestic & International Packages | Honeymoon | Group Tours | Visa & Flight Support
            </p>
            <a
              href="https://wa.me/919629879026?text=Hello%20Christ%20Holidays%2C%20I%20want%20instant%20trip%20plans."
              className="mt-6 inline-flex items-center gap-2 bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold text-lg hover:bg-yellow-500 transition shadow-lg"
            >
              💬 Get Instant Trip Plans on WhatsApp →
            </a>
          </div>
          <div className="relative">
            <Image
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1200&q=80"
              alt="Couple exploring mountains and lake"
              width={800}
              height={500}
              className="w-full rounded-2xl shadow-2xl object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-white -mt-4 relative z-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-lg p-5 grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm">
            <div><span className="text-2xl">📅</span><p className="font-semibold mt-1">Handpicked Tour Packages</p></div>
            <div><span className="text-2xl">🛡️</span><p className="font-semibold mt-1">Trusted & Experienced Team</p></div>
            <div><span className="text-2xl">🎧</span><p className="font-semibold mt-1">End-to-End Travel Support</p></div>
            <div><span className="text-2xl">👥</span><p className="font-semibold mt-1">Customised Trips for Families, Groups & Corporates</p></div>
          </div>
        </div>
      </section>

      {/* Destinations */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-end mb-8">
            <h2 className="text-3xl font-bold">Explore Top Destinations</h2>
            <Link href="/tour-packages" className="text-blue-700 font-medium">View All Destinations →</Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {destinations.map((dest) => (
              <Link key={dest.name} href={dest.link} className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition">
                <Image src={dest.image} alt={dest.name} width={300} height={200} className="w-full h-40 object-cover group-hover:scale-105 transition" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-3 left-3 text-white">
                  <h3 className="font-bold">{dest.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Packages */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-end mb-8">
            <h2 className="text-3xl font-bold">Featured Holiday Packages</h2>
            <Link href="/tour-packages" className="text-blue-700 font-medium">View All Packages →</Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {packages.map((pkg) => (
              <div key={pkg.slug} className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition">
                <div className="relative">
                  <Image src={pkg.image} alt={pkg.title} width={400} height={250} className="w-full h-48 object-cover" />
                  <span className="absolute top-3 left-3 bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full">{pkg.duration}</span>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg">{pkg.title}</h3>
                  <p className="text-blue-700 font-semibold mt-1">{pkg.price}</p>
                  <a href={`https://wa.me/919629879026?text=Hello%20Christ%20Holidays%2C%20I%20am%20interested%20in%20the%20${encodeURIComponent(pkg.title)}%20package.`} className="mt-3 inline-flex items-center gap-1 text-green-600 font-medium text-sm">
                    💬 Enquire on WhatsApp
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Trip Form */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Plan a Custom Trip</h2>
            <p className="text-gray-600 mb-6">Tell us your travel plans and our team will get in touch with the best options.</p>
            <form className="grid grid-cols-1 md:grid-cols-5 gap-4">
              <select className="border border-gray-300 rounded-lg px-4 py-3"><option>Travel Type</option><option>Domestic</option><option>International</option><option>Honeymoon</option></select>
              <input type="text" placeholder="Destination" className="border border-gray-300 rounded-lg px-4 py-3" />
              <input type="date" className="border border-gray-300 rounded-lg px-4 py-3" />
              <input type="number" placeholder="No. of Travellers" className="border border-gray-300 rounded-lg px-4 py-3" min="1" />
              <button type="button" className="bg-blue-800 text-white rounded-lg px-6 py-3 font-semibold hover:bg-blue-900 transition">Get a Call Back →</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
