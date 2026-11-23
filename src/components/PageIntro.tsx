import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import type { Crumb } from "@/lib/content";
import { breadcrumbLd } from "@/lib/seo";

export default function PageIntro({
  crumbs,
  eyebrow,
  title,
  intro,
}: {
  crumbs: Crumb[];
  eyebrow?: string;
  title: string;
  intro?: string;
}) {
  return (
    <section className="bg-linear-to-br from-sky via-sky-deep to-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <Breadcrumbs crumbs={crumbs} />
        {eyebrow && <p className="mt-4 text-sm font-semibold tracking-wide text-navy uppercase">{eyebrow}</p>}
        <h1 className="mt-3 max-w-4xl text-4xl font-extrabold tracking-tight text-navy md:text-5xl">{title}</h1>
        {intro && <p className="mt-5 max-w-2xl text-lg text-navy/80">{intro}</p>}
      </div>
      <JsonLd data={breadcrumbLd(crumbs)} />
    </section>
  );
}
