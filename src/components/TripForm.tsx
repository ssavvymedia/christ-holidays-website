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
    const url = whatsappLink(parts.join(" "));
    const opened = window.open(url, "_blank", "noopener,noreferrer");
    if (!opened) window.location.href = url;
  }

  const field =
    "h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-navy shadow-sm outline-none transition placeholder:text-slate-500 focus:border-navy focus:ring-2 focus:ring-navy/15";

  return (
    <form onSubmit={onSubmit} className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
      <div>
        <label htmlFor="trip-type" className="sr-only">
          Travel type
        </label>
        <select id="trip-type" required value={travelType} onChange={(event) => setTravelType(event.target.value)} className={field}>
          <option value="">Travel type</option>
          <option>Domestic</option>
          <option>International</option>
          <option>Honeymoon</option>
          <option>Group tour</option>
          <option>Corporate tour</option>
        </select>
      </div>
      <div>
        <label htmlFor="trip-destination" className="sr-only">
          Destination
        </label>
        <input
          id="trip-destination"
          type="text"
          required
          placeholder="Destination"
          value={destination}
          onChange={(event) => setDestination(event.target.value)}
          className={field}
        />
      </div>
      <div>
        <label htmlFor="trip-date" className="sr-only">
          Travel date
        </label>
        <input id="trip-date" type="date" value={date} onChange={(event) => setDate(event.target.value)} className={field} />
      </div>
      <div>
        <label htmlFor="trip-travellers" className="sr-only">
          Number of travellers
        </label>
        <input
          id="trip-travellers"
          type="number"
          min="1"
          placeholder="Number of travellers"
          value={travellers}
          onChange={(event) => setTravellers(event.target.value)}
          className={field}
        />
      </div>
      <button
        type="submit"
        className="inline-flex h-12 items-center justify-center rounded-xl bg-navy px-5 text-sm font-bold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-navy-light"
      >
        Send on WhatsApp
      </button>
    </form>
  );
}
