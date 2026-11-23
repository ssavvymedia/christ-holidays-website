import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import EnquiryBand from "@/components/EnquiryBand";
import FaqAccordion from "@/components/home/FaqAccordion";
import JsonLd from "@/components/JsonLd";
import OfficeCards from "@/components/OfficeCards";
import type { Card, PageContent } from "@/lib/content";
import { breadcrumbLd, faqLd } from "@/lib/seo";

function Cards({ cards }: { cards: Card[] }) {
  return (
    <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
      {cards.map((card) => {
        const body = (
          <>
            <h3 className="text-lg font-extrabold text-navy">{card.title}</h3>
            {card.text && <p className="mt-2 text-sm leading-relaxed text-slate-700">{card.text}</p>}
            {card.enquire && <p className="mt-3 text-sm font-semibold text-navy">Enquire for price</p>}
            {card.href && <span className="mt-3 inline-block text-sm font-semibold text-navy">View page</span>}
          </>
        );
        const className = "block rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100 transition hover:-translate-y-0.5 hover:shadow-md";
        return card.href ? (
          <Link key={card.title} href={card.href} className={className}>
            {body}
          </Link>
        ) : (
          <article key={card.title} className={className}>
            {body}
          </article>
        );
      })}
    </div>
  );
}

export default function CatalogView({ page }: { page: PageContent }) {
  return (
    <article className="bg-white">
      <JsonLd data={breadcrumbLd(page.crumbs)} />
      {page.faqs && page.faqs.length > 0 && <JsonLd data={faqLd(page.faqs)} />}

      <section className="bg-linear-to-br from-sky via-sky-deep to-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <Breadcrumbs crumbs={page.crumbs} />
          {page.eyebrow && <p className="mt-4 text-sm font-semibold tracking-wide text-navy uppercase">{page.eyebrow}</p>}
          <div className="mt-3 grid items-center gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <h1 className="text-4xl font-extrabold tracking-tight text-navy md:text-5xl">{page.h1}</h1>
              <div className="mt-5 space-y-4 text-base leading-relaxed text-slate-700">
                {page.intro.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
            {page.image && (
              <Image
                src={page.image.src}
                alt={page.image.alt}
                width={1200}
                height={800}
                priority
                sizes="(min-width: 1024px) 480px, 100vw"
                className="h-64 w-full rounded-3xl object-cover shadow-[0_16px_40px_rgba(1,38,107,0.12)] ring-1 ring-slate-100 sm:h-80"
              />
            )}
          </div>
        </div>
      </section>

      {page.sections.map((section) => (
        <section key={section.heading} className="py-14">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-navy">{section.heading}</h2>
            {section.paragraphs?.map((paragraph) => (
              <p key={paragraph} className="mt-4 max-w-3xl text-base leading-relaxed text-slate-700">
                {paragraph}
              </p>
            ))}
            {section.bullets && (
              <ul className="mt-5 max-w-3xl list-disc space-y-2 pl-5 text-slate-700">
                {section.bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
            {section.cards && <Cards cards={section.cards} />}
          </div>
        </section>
      ))}

      {page.faqs && page.faqs.length > 0 && (
        <section className="bg-sky/40 py-14">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-6 text-center text-3xl font-extrabold text-navy">Questions travellers ask</h2>
            <FaqAccordion items={page.faqs} />
          </div>
        </section>
      )}

      {page.related && page.related.length > 0 && (
        <section className="py-14">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-navy">Related pages</h2>
            <Cards cards={page.related} />
          </div>
        </section>
      )}

      <OfficeCards />
      <EnquiryBand
        title="Enquire for price"
        text="Share your dates and group size. The Salem, Madurai or Thoothukudi team will reply with an outline and a quote."
        message={page.whatsapp}
      />
    </article>
  );
}
