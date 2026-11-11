"use client";

import { FormEvent, useState } from "react";
import { whatsappLink } from "@/lib/site";

export default function TripForm() {
  const [travelType, setTravelType] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [travellers, setTravellers] = useState("");

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    const parts = [
      "Hello Christ Holidays, I would like to plan a custom trip.",
      travelType && `Travel type: ${travelType}`,
      destination && `Destination: ${destination}`,
      date && `Travel date: ${date}`,
      travellers && `Travellers: ${travellers}`,
    ].filter(Boolean);
    window.open(whatsappLink(parts.join(" ")), "_blank", "noopener,noreferrer");
  }

  const field =
    "h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-navy shadow-sm outline-none transition placeholder:text-slate-400 focus:border-navy focus:ring-2 focus:ring-navy/10";

  return (
    <form onSubmit={onSubmit} className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
      <select required value={travelType} onChange={(e) => setTravelType(e.target.value)} className={field}>
        <option value="">Travel Type</option>
        <option>Domestic</option>
        <option>International</option>
        <option>Honeymoon</option>
        <option>Group Tour</option>
      </select>
      <input
        type="text"
        required
        placeholder="Destination"
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
        className={field}
      />
      <label className="relative block">
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className={`${field} pr-3`} />
      </label>
      <input
        type="number"
        min="1"
        placeholder="No. of Travellers"
        value={travellers}
        onChange={(e) => setTravellers(e.target.value)}
        className={field}
      />
      <button
        type="submit"
        className="inline-flex h-12 items-center justify-center rounded-xl bg-navy px-5 text-sm font-bold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-navy-light"
      >
        Get a Call Back →
      </button>
    </form>
  );
}
