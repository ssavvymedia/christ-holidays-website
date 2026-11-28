import Link from "next/link";
import { WhatsAppIcon } from "@/components/icons";
import { whatsappLink } from "@/lib/site";

export default function EnquiryBand({
  title,
  text,
  message,
}: {
  title: string;
  text: string;
  message: string;
}) {
  return (
    <section className="bg-navy py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 text-center sm:px-6 lg:flex-row lg:px-8 lg:text-left">
        <div>
          <h2 className="text-2xl font-extrabold text-white md:text-3xl">{title}</h2>
          <p className="mt-2 max-w-xl text-blue-100">{text}</p>
        </div>
        <div className="flex flex-col items-center gap-3 sm:flex-row">
          <a
            href={whatsappLink(message)}
            className="inline-flex min-h-11 items-center gap-2 rounded-full bg-yellow px-6 py-3 font-bold text-navy hover:bg-yellow-dark"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Enquire on WhatsApp
          </a>
          <Link href="/contact" className="inline-flex min-h-11 items-center font-semibold text-white underline-offset-4 hover:underline">
            Contact form
          </Link>
        </div>
      </div>
    </section>
  );
}
