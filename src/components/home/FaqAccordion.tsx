"use client";

import { useState } from "react";

export type FaqItem = { question: string; answer: string };

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-slate-200 overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-100">
      {items.map((item, index) => {
        const isOpen = open === index;
        return (
          <div key={item.question}>
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : index)}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
            >
              <span className="font-semibold text-navy">{item.question}</span>
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-sky text-sm font-bold text-navy">
                {isOpen ? "−" : "+"}
              </span>
            </button>
            {isOpen && <p className="px-5 pb-5 text-sm leading-relaxed text-slate-600">{item.answer}</p>}
          </div>
        );
      })}
    </div>
  );
}
