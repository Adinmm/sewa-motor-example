import type { Metadata } from "next";
import { Mail, MapPin, Phone, MessageCircle, Clock } from "lucide-react";
import { SITE, waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Kontak — Bali Moto Rent",
  description: "Hubungi Bali Moto Rent via WhatsApp, telepon, atau kunjungi kantor kami di Bali. Layanan pelanggan responsif dan ramah.",
};

export default function ContactPage() {
  const items = [
    { icon: MessageCircle, l: "WhatsApp", v: SITE.whatsappDisplay, href: waLink("Halo, saya ingin tanya rental motor.") },
    { icon: Phone, l: "Telepon", v: SITE.whatsappDisplay, href: `tel:${SITE.whatsapp}` },
    { icon: Mail, l: "Email", v: SITE.email, href: `mailto:${SITE.email}` },
    { icon: MapPin, l: "Alamat", v: SITE.address, href: SITE.mapsLink },
    { icon: Clock, l: "Jam Operasional", v: SITE.hours, href: undefined as string | undefined },
  ];

  return (
    <div>
      {/* Header Section */}
      <section className="border-b border-amber-100 bg-amber-50/40">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-600">Kontak</p>
          <h1 className="mt-3 max-w-3xl text-5xl font-bold tracking-tight text-sky-950 md:text-6xl">
            Mari bicara. Kami siap membantu Anda.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-sky-900">
            WhatsApp adalah cara tercepat untuk menghubungi tim kami. Biasanya kami merespon 
            dalam waktu kurang dari 5 menit selama jam operasional kerja.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-12 lg:gap-16 lg:px-10 lg:py-24">
        {/* Contact Info Channels */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          <div className="space-y-1">
            {items.map((c) => {
              const Inner = (
                <>
                  <div className="grid size-11 shrink-0 place-items-center rounded-lg border border-sky-100 bg-white shadow-sm text-emerald-600">
                    <c.icon className="size-5 stroke-[2]" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-sky-700">{c.l}</p>
                    <p className="mt-1 text-sm font-semibold text-sky-950 leading-relaxed">{c.v}</p>
                  </div>
                </>
              );
              
              return c.href ? (
                <a
                  key={c.l}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 border-b border-sky-100/70 p-4 -mx-4 rounded-xl transition duration-200 hover:bg-sky-50/50"
                >
                  {Inner}
                </a>
              ) : (
                <div key={c.l} className="flex items-start gap-4 border-b border-sky-100/70 p-4 -mx-4">
                  {Inner}
                </div>
              );
            })}
          </div>

          <div className="mt-8">
            <a
              href={waLink("Halo, saya ingin booking motor.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-emerald-600 px-6 py-3.5 text-sm font-bold text-white shadow-sm shadow-emerald-100 transition duration-200 hover:bg-emerald-700"
            >
              <MessageCircle className="size-4 stroke-[2.5]" /> Chat WhatsApp Sekarang
            </a>
          </div>
        </div>

        {/* Maps Integration */}
        <div className="lg:col-span-7">
          <div className="overflow-hidden rounded-2xl border border-sky-100 bg-sky-50/40 shadow-sm">
            <iframe
              title="Lokasi Kantor Bali Moto Rent"
              src={SITE.mapsEmbed}
              className="h-[480px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
  );
}