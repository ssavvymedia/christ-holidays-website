"use client";

import { FormEvent, useState } from "react";
import { whatsappLink } from "@/lib/site";

const field =
  "mt-1 h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-navy shadow-sm outline-none placeholder:text-slate-500 focus:border-navy focus:ring-2 focus:ring-navy/15";

export default function EnquiryForm({
  defaultDestination = "",
  submitLabel = "Send on WhatsApp",
}: {
  defaultDestination?: string;
  submitLabel?: string;
}) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [destination, setDestination] = useState(defaultDestination);
  const [dates, setDates] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    if (!name.trim() || !phone.trim()) {
      setError("Enter your name and phone number so the team can reply.");
      return;
    }
    setError("");
    const text = [
      "Hello Christ Holidays, I would like to enquire about a trip.",
      `Name: ${name.trim()}`,
      `Phone: ${phone.trim()}`,
      email.trim() && `Email: ${email.trim()}`,
      destination.trim() && `Destination: ${destination.trim()}`,
      dates.trim() && `Travel dates: ${dates.trim()}`,
      message.trim() && `Message: ${message.trim()}`,
    ]
      .filter(Boolean)
      .join("\n");
    const url = whatsappLink(text);
    const opened = window.open(url, "_blank", "noopener,noreferrer");
    if (!opened) window.location.href = url;
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4" noValidate>
      <div>
        <label htmlFor="enquiry-name" className="text-sm font-semibold text-navy">
          Your name
        </label>
        <input id="enquiry-name" name="name" type="text" autoComplete="name" required value={name} onChange={(event) => setName(event.target.value)} className={field} />
      </div>
      <div>
        <label htmlFor="enquiry-phone" className="text-sm font-semibold text-navy">
          Phone number
        </label>
        <input id="enquiry-phone" name="phone" type="tel" autoComplete="tel" required value={phone} onChange={(event) => setPhone(event.target.value)} className={field} />
      </div>
      <div>
        <label htmlFor="enquiry-email" className="text-sm font-semibold text-navy">
          Email <span className="font-normal text-slate-600">(optional)</span>
        </label>
        <input id="enquiry-email" name="email" type="email" autoComplete="email" value={email} onChange={(event) => setEmail(event.target.value)} className={field} />
      </div>
      <div>
        <label htmlFor="enquiry-destination" className="text-sm font-semibold text-navy">
          Destination or trip type
        </label>
        <input id="enquiry-destination" name="destination" type="text" value={destination} onChange={(event) => setDestination(event.target.value)} className={field} />
      </div>
      <div>
        <label htmlFor="enquiry-dates" className="text-sm font-semibold text-navy">
          Travel dates
        </label>
        <input id="enquiry-dates" name="dates" type="text" placeholder="For example, 12–16 April" value={dates} onChange={(event) => setDates(event.target.value)} className={field} />
      </div>
      <div>
        <label htmlFor="enquiry-message" className="text-sm font-semibold text-navy">
          Message
        </label>
        <textarea id="enquiry-message" name="message" rows={4} value={message} onChange={(event) => setMessage(event.target.value)} className={`${field} h-auto py-3`} />
      </div>
      {error && (
        <p role="alert" className="text-sm font-medium text-red-800">
          {error}
        </p>
      )}
      <button type="submit" className="inline-flex min-h-11 w-full items-center justify-center rounded-full bg-navy px-5 py-3 text-sm font-bold text-white hover:bg-navy-light">
        {submitLabel}
      </button>
      <p className="text-xs leading-relaxed text-slate-600">
        This opens WhatsApp with your message to the Salem number. Nothing is stored on the website.
      </p>
    </form>
  );
}
