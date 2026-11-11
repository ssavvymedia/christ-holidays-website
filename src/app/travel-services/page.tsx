export default function TravelServicesPage() {
  const services = ["Flight Booking", "Group Flight Booking", "Visa Assistance", "Hotel Booking", "Customized Holidays"];
  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-primary mb-4">Travel Services</h1>
      <div className="grid md:grid-cols-2 gap-6 mt-8">
        {services.map(s => (
          <div key={s} className="border rounded-2xl p-6">
            <h2 className="text-xl font-bold">{s}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
