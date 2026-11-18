import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact Christ Holidays & Travels – Salem, Madurai, Thoothukudi. Phone, WhatsApp and enquiry form.",
};

export default function ContactPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-blue-900 mb-8">Contact Us</h1>
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <p className="mb-4"><strong>Phone:</strong> <a href="tel:+917708104235" className="text-blue-700">+91 770 8104 235</a></p>
          <p className="mb-4"><strong>WhatsApp:</strong> <a href="https://wa.me/919629879026" className="text-blue-700">+91 962 9879 026</a></p>
          <p className="mb-4"><strong>Email:</strong> christholidaystravels@gmail.com</p>
          <p className="mb-6"><strong>Offices:</strong> Salem (Head Office), Madurai, Thoothukudi</p>
          <a href="https://wa.me/919629879026?text=Hello%20Christ%20Holidays%2C%20I%20would%20like%20to%20enquire%20about%20a%20trip." className="inline-flex bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold">Chat on WhatsApp</a>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-8 border">
          <h3 className="text-xl font-semibold mb-4">Send an Enquiry</h3>
          <form className="space-y-4">
            <input type="text" placeholder="Your Name" className="w-full border rounded-lg px-4 py-3" />
            <input type="tel" placeholder="Phone Number" className="w-full border rounded-lg px-4 py-3" />
            <input type="email" placeholder="Email" className="w-full border rounded-lg px-4 py-3" />
            <input type="text" placeholder="Destination / Trip Type" className="w-full border rounded-lg px-4 py-3" />
            <textarea placeholder="Your Message" rows={4} className="w-full border rounded-lg px-4 py-3" />
            <button type="button" className="w-full bg-blue-800 text-white py-3 rounded-lg font-semibold hover:bg-blue-900">Submit Enquiry</button>
          </form>
          <p className="text-xs text-gray-500 mt-3">Form submissions currently open WhatsApp or email. Full CRM integration coming soon.</p>
        </div>
      </div>
    </div>
  );
}
