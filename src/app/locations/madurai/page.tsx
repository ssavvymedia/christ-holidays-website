import type { Metadata } from "next";

export const metadata: Metadata = { title: "Madurai Office" };

export default function MaduraiPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      <h1 className="mb-4 text-4xl font-bold text-navy">Madurai Office</h1>
      <p className="mt-4"><strong>Phone:</strong> <a href="tel:+916374395526" className="text-navy">+91 63743 95526</a></p>
    </div>
  );
}
