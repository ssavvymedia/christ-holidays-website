import Link from "next/link";
import type { Crumb } from "@/lib/content";

export default function Breadcrumbs({ crumbs }: { crumbs: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-1 text-sm text-navy/80">
        {crumbs.map((crumb, index) => {
          const last = index === crumbs.length - 1;
          return (
            <li key={crumb.path} className="inline-flex items-center gap-1">
              {index > 0 && (
                <span aria-hidden="true" className="px-1 text-slate-400">
                  /
                </span>
              )}
              {last ? (
                <span aria-current="page" className="font-semibold text-navy">
                  {crumb.name}
                </span>
              ) : (
                <Link href={crumb.path} className="hover:underline">
                  {crumb.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
