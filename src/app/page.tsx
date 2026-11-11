import Image from "next/image";
import Link from "next/link";
import { packages, destinations } from "@/data/packages";

export default function Home() {
  return (
    <div>
      <section className="relative bg-gradient-to-br from-sky-100 via-blue-50 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Plan Your <span className="bg-accent px-2 rounded">Next Holiday</span><br />with Experts
            </h1>
            <p className="mt-4 text-lg text-gray-700">
              Domestic & International Packages | Honeymoon | Group Tours | Visa & Flight Support
            </p>
            <a
              href="https://wa.me/919629879026?text=Hello%20Christ%20Holidays%2C%20I%20want%20instant%20trip%20plans."
              className="mt-6 inline-flex items-center gap-2 bg-accent text-black px-6 py-3 rounded-full font-semibold text-lg hover:bg-yellow-400 transition shadow-lg"
            >
              Get Instant Trip Plans on WhatsApp →
            </a>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1200&q=80"
              alt="Couple exploring mountains and lake"
              width={800}
              height={600}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Explore Top Destinations</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {destinations.map((dest) => (
              <Link key={dest.name} href={dest.link} className="group relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition">
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

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Featured Holiday Packages</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {packages.slice(0, 4).map((pkg) => (
              <div key={pkg.slug} className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition">
                <Image src={pkg.image} alt={pkg.title} width={400} height={250} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="font-bold text-lg">{pkg.title}</h3>
                  <p className="text-primary font-semibold mt-1">{pkg.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
