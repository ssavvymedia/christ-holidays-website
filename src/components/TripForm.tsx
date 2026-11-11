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

  return (
    <form onSubmit={onSubmit} className="grid grid-cols-1 gap-4 md:grid-cols-5">
      <select
        required
        value={travelType}
        onChange={(e) => setTravelType(e.target.value)}
        className="rounded-lg border border-slate-300 px-4 py-3 text-sm"
      >
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
        className="rounded-lg border border-slate-300 px-4 py-3 text-sm"
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="rounded-lg border border-slate-300 px-4 py-3 text-sm"
      />
      <input
        type="number"
        min="1"
        placeholder="No. of Travellers"
        value={travellers}
        onChange={(e) => setTravellers(e.target.value)}
        className="rounded-lg border border-slate-300 px-4 py-3 text-sm"
      />
      <button type="submit" className="rounded-lg bg-navy px-6 py-3 font-semibold text-white transition hover:bg-navy-light">
        Get a Call Back →
      </button>
    </form>
  );
}
