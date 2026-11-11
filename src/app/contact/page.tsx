import type { Metadata } from "next";

export const metadata: Metadata = { title: "Contact Us" };

export default function ContactPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-primary mb-8">Contact Us</h1>
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <p><strong>Phone:</strong> <a href="tel:+917708104235" className="text-primary">+91 770 8104 235</a></p>
          <p className="mt-2"><strong>WhatsApp:</strong> <a href="https://wa.me/919629879026" className="text-primary">+91 962 9879 026</a></p>
          <p className="mt-2"><strong>Email:</strong> christholidaystravels@gmail.com</p>
          <p className="mt-2"><strong>Offices:</strong> Salem (HO), Madurai, Thoothukudi</p>
          <a href="https://wa.me/919629879026" className="mt-6 inline-flex bg-accent text-black px-6 py-3 rounded-full font-semibold">Chat on WhatsApp</a>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-xl font-semibold mb-4">Send an Enquiry</h3>
          <form className="space-y-4">
            <input type="text" placeholder="Your Name" className="w-full border rounded-lg px-4 py-3" />
            <input type="tel" placeholder="Phone Number" className="w-full border rounded-lg px-4 py-3" />
            <input type="text" placeholder="Destination" className="w-full border rounded-lg px-4 py-3" />
            <textarea placeholder="Your Message" rows={4} className="w-full border rounded-lg px-4 py-3" />
            <button type="button" className="w-full bg-primary text-white py-3 rounded-lg font-semibold">Submit Enquiry</button>
          </form>
        </div>
      </div>
    </div>
  );
}
