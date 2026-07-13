import type { Metadata } from "next";
import { Mail, MapPin, Phone, MessageCircle, Clock } from "lucide-react";
import { SITE, waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Kontak — Bali Moto Rent",
  description: "Hubungi Bali Moto Rent via WhatsApp, telepon, atau kunjungi kantor kami di Sunset Road, Kuta, Bali.",
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
      <section className="border-b border-border bg-surface">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Kontak</p>
          <h1 className="mt-3 max-w-3xl text-5xl font-semibold tracking-tight md:text-6xl">
            Mari bicara. Kami siap bantu.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
            WhatsApp adalah cara tercepat menghubungi kami — biasanya direspon
            dalam 5 menit di jam operasional.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-12 lg:gap-16 lg:px-10 lg:py-24">
        <div className="lg:col-span-5">
          <div className="space-y-1">
            {items.map((c) => {
              const Inner = (
                <>
                  <div className="grid size-11 shrink-0 place-items-center rounded-lg border border-border bg-background">
                    <c.icon className="size-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">{c.l}</p>
                    <p className="mt-1 text-sm font-medium text-foreground">{c.v}</p>
                  </div>
                </>
              );
              return c.href ? (
                <a
                  key={c.l}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 border-b border-border py-5 transition hover:bg-surface"
                >
                  {Inner}
                </a>
              ) : (
                <div key={c.l} className="flex items-start gap-4 border-b border-border py-5">
                  {Inner}
                </div>
              );
            })}
          </div>

          <a
            href={waLink("Halo, saya ingin booking motor.")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-md bg-whatsapp px-5 py-3.5 text-sm font-medium text-whatsapp-foreground transition hover:opacity-90"
          >
            <MessageCircle className="size-4" /> Chat WhatsApp Sekarang
          </a>
        </div>

        <div className="lg:col-span-7">
          <div className="overflow-hidden rounded-2xl border border-border">
            <iframe
              title="Lokasi Bali Moto Rent"
              src={SITE.mapsEmbed}
              className="h-[480px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
