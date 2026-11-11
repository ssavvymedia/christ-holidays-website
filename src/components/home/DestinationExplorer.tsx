"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export type Destination = {
  name: string;
  tagline: string;
  image: string;
  link: string;
  region: "domestic" | "international";
};

const tabs = [
  { id: "all", label: "All" },
  { id: "domestic", label: "Domestic" },
  { id: "international", label: "International" },
] as const;

export default function DestinationExplorer({ destinations }: { destinations: Destination[] }) {
  const [tab, setTab] = useState<(typeof tabs)[number]["id"]>("all");
  const visible = useMemo(
    () => (tab === "all" ? destinations : destinations.filter((d) => d.region === tab)),
    [destinations, tab],
  );

  return (
    <div>
      <div className="mb-6 flex flex-wrap items-center gap-2">
        {tabs.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setTab(item.id)}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
              tab === item.id
                ? "bg-navy text-white shadow-sm"
                : "bg-sky text-navy hover:bg-sky-deep"
            }`}
            aria-pressed={tab === item.id}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-4 xl:grid-cols-6">
        {visible.map((dest) => (
          <Link key={dest.name} href={dest.link} className="group relative block overflow-hidden rounded-2xl shadow-md">
            <Image
              src={dest.image}
              alt={dest.name}
              width={400}
              height={500}
              className="h-48 w-full object-cover transition duration-500 group-hover:scale-110 sm:h-56"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/10 to-transparent" />
            <div className="absolute bottom-3 left-3 text-white">
              <h3 className="text-lg font-extrabold">{dest.name}</h3>
              <p className="text-xs text-white/90">{dest.tagline}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
