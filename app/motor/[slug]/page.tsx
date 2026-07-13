import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, Check, Fuel, Gauge, Settings2, Users, Zap, ShieldCheck } from "lucide-react";
import { getMotor, motors, formatRupiah } from "@/data/motors";
import { SITE, waLink } from "@/lib/site";
import { MotorCard } from "@/components/site/MotorCard";

export function generateStaticParams() {
  return motors.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> },
): Promise<Metadata> {
  const { slug } = await params;
  const m = getMotor(slug);
  if (!m) return { title: "Motor tidak ditemukan" };
  return {
    title: `Sewa ${m.name} di Bali — ${formatRupiah(m.pricePerDay)}/hari`,
    description: `${m.tagline}. ${m.description.slice(0, 110)}`,
    openGraph: {
      title: `${m.name} — Bali Moto Rent`,
      description: m.tagline,
      images: [m.image],
    },
  };
}

export default async function MotorDetailPage(
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;
  const motor = getMotor(slug);
  if (!motor) notFound();

  const related = motors.filter((m) => m.slug !== motor.slug).slice(0, 3);

  const specItems = [
    { icon: Zap, label: "Mesin", value: motor.specs.engine },
    { icon: Settings2, label: "Transmisi", value: motor.specs.transmission },
    { icon: Fuel, label: "Bahan bakar", value: motor.specs.fuel },
    { icon: Users, label: "Kapasitas", value: `${motor.specs.seats} orang` },
    { icon: Gauge, label: "Konsumsi BBM", value: motor.specs.consumption },
    { icon: ShieldCheck, label: "Top speed", value: motor.specs.topSpeed },
  ];

  return (
    <div>
      <div className="mx-auto max-w-7xl px-6 pt-10 lg:px-10">
        <Link href="/motor" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="size-4" /> Kembali ke daftar motor
        </Link>
      </div>

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-12 lg:grid-cols-12 lg:gap-16 lg:px-10 lg:py-16">
        <div className="lg:col-span-7">
          <div className="overflow-hidden rounded-3xl bg-surface">
            <img src={motor.image} alt={motor.name} className="h-full w-full object-cover" />
          </div>
        </div>

        <div className="lg:col-span-5">
          <p className="text-xs uppercase tracking-wider text-muted-foreground">{motor.brand} · {motor.category}</p>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight md:text-5xl">{motor.name}</h1>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">{motor.tagline}</p>

          <div className="mt-8 rounded-2xl border border-border p-6">
            <p className="text-xs uppercase tracking-wider text-muted-foreground">Pilihan Sewa</p>
            <div className="mt-4 space-y-3">
              {[
                { l: "Harian", p: motor.pricePerDay, s: "/ hari" },
                { l: "Mingguan", p: motor.priceWeekly, s: "/ 7 hari" },
                { l: "Bulanan", p: motor.priceMonthly, s: "/ 30 hari" },
              ].map((row) => (
                <div key={row.l} className="flex items-center justify-between border-b border-border pb-3 last:border-0 last:pb-0">
                  <span className="text-sm text-muted-foreground">{row.l}</span>
                  <span className="text-base font-semibold">
                    {formatRupiah(row.p)}
                    <span className="text-xs font-normal text-muted-foreground"> {row.s}</span>
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-col gap-3">
              <a
                href={waLink(`Halo, saya mau booking ${motor.name} (${formatRupiah(motor.pricePerDay)}/hari).`)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md bg-foreground px-5 py-3.5 text-sm font-medium text-background transition hover:bg-foreground/90"
              >
                Booking via WhatsApp
              </a>
              <a href={`tel:${SITE.whatsapp}`} className="inline-flex items-center justify-center rounded-md border border-border px-5 py-3.5 text-sm font-medium hover:bg-secondary">
                Telepon Kami
              </a>
            </div>
          </div>

          <ul className="mt-6 grid grid-cols-2 gap-2">
            {motor.features.map((f) => (
              <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                <Check className="size-4 text-primary" /> {f}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-y border-border bg-surface">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Deskripsi</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight">Tentang {motor.name}</h2>
            </div>
            <div className="lg:col-span-8">
              <p className="text-base leading-relaxed text-foreground">{motor.description}</p>

              <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
                {specItems.map((s) => (
                  <div key={s.label} className="bg-background p-5">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <s.icon className="size-4" />
                      <span className="text-xs uppercase tracking-wider">{s.label}</span>
                    </div>
                    <p className="mt-2 text-base font-semibold">{s.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <h2 className="text-3xl font-semibold tracking-tight">Motor lainnya</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {related.map((m) => <MotorCard key={m.slug} motor={m} />)}
        </div>
      </section>
    </div>
  );
}
