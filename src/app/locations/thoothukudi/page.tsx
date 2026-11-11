import type { Metadata } from "next";

export const metadata: Metadata = { title: "Thoothukudi Office" };

export default function ThoothukudiPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      <h1 className="mb-4 text-4xl font-bold text-navy">Thoothukudi Office</h1>
      <p className="mt-4"><strong>Phone:</strong> <a href="tel:+917708104235" className="text-navy">+91 77081 04235</a></p>
    </div>
  );
}
