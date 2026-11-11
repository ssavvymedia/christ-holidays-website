import type { Metadata } from "next";
import { whatsappLink } from "@/lib/site";

export const metadata: Metadata = { title: "Salem Office" };

export default function SalemPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      <h1 className="mb-4 text-4xl font-bold text-navy">Salem Office</h1>
      <p>Head Office</p>
      <p className="mt-4"><strong>Phone:</strong> <a href="tel:+919629879026" className="text-navy">+91 96298 79026</a></p>
      <p><strong>WhatsApp:</strong> <a href={whatsappLink()} className="text-navy">+91 96298 79026</a></p>
    </div>
  );
}
