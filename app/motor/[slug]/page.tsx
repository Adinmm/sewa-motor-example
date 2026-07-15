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
    title: `Sewa ${m.name} di Rental Motor Anda — ${formatRupiah(m.pricePerDay)}/hari`,
    description: `${m.tagline}. ${m.description.slice(0, 110)}`,
    openGraph: {
      title: `${m.name} — Rental Motor Anda Moto Rent`,
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
      {/* Breadcrumb / Back Link */}
      <div className="mx-auto max-w-7xl px-6 pt-10 lg:px-10">
        <Link href="/motor" className="inline-flex items-center gap-2 text-sm font-semibold text-sky-700 hover:text-emerald-600 transition">
          <ArrowLeft className="size-4" /> KemRental Motor Anda ke daftar motor
        </Link>
      </div>

      {/* Main Detail Section */}
      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-12 lg:grid-cols-12 lg:gap-16 lg:px-10 lg:py-16">
        <div className="lg:col-span-7">
          <div className="overflow-hidden rounded-3xl bg-amber-50/40 border border-amber-100 aspect-video lg:aspect-auto lg:h-[480px]">
            <img src={motor.image} alt={motor.name} className="h-full w-full object-cover" />
          </div>
        </div>

        <div className="lg:col-span-5 flex flex-col justify-center">
          <p className="text-xs font-bold uppercase tracking-wider text-orange-600">{motor.brand} · {motor.category}</p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-sky-950 md:text-5xl">{motor.name}</h1>
          <p className="mt-4 text-base leading-relaxed text-sky-900">{motor.tagline}</p>

          {/* Pricing Card */}
          <div className="mt-8 rounded-2xl border border-amber-200 bg-amber-50/40 p-6 shadow-sm shadow-amber-100/50">
            <p className="text-xs font-bold uppercase tracking-wider text-amber-800">Pilihan Sewa</p>
            <div className="mt-4 space-y-3">
              {[
                { l: "Harian", p: motor.pricePerDay, s: "/ hari" },
                { l: "Mingguan", p: motor.priceWeekly, s: "/ 7 hari" },
                { l: "Bulanan", p: motor.priceMonthly, s: "/ 30 hari" },
              ].map((row) => (
                <div key={row.l} className="flex items-center justify-between border-b border-amber-200/60 pb-3 last:border-0 last:pb-0">
                  <span className="text-sm font-semibold text-sky-950">{row.l}</span>
                  <span className="text-base font-bold text-emerald-700">
                    {formatRupiah(row.p)}
                    <span className="text-xs font-medium text-sky-700"> {row.s}</span>
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-col gap-3">
              <a
                href={waLink(`Halo, saya mau booking ${motor.name} (${formatRupiah(motor.pricePerDay)}/hari).`)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md bg-emerald-600 px-5 py-3.5 text-sm font-semibold text-white shadow-sm shadow-emerald-200 transition hover:bg-emerald-700"
              >
                Booking via WhatsApp
              </a>
              <a 
                href={`tel:${SITE.whatsapp}`} 
                className="inline-flex items-center justify-center rounded-md border border-emerald-200 bg-emerald-50 px-5 py-3.5 text-sm font-semibold text-emerald-800 transition hover:bg-emerald-100/80"
              >
                Telepon Kami
              </a>
            </div>
          </div>

          {/* Features Checklist */}
          <ul className="mt-6 grid grid-cols-2 gap-3">
            {motor.features.map((f) => (
              <li key={f} className="flex items-center gap-2 text-sm font-medium text-sky-900">
                <Check className="size-4 text-emerald-600 shrink-0 stroke-[2.5]" /> {f}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Specifications Section */}
      <section className="border-y border-sky-100 bg-sky-50">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-600">Spesifikasi</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-sky-950">Tentang {motor.name}</h2>
            </div>
            <div className="lg:col-span-8">
              <p className="text-base leading-relaxed text-sky-900">{motor.description}</p>

              <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-sky-200/80 bg-sky-200/60 sm:grid-cols-2 lg:grid-cols-3">
                {specItems.map((s) => (
                  <div key={s.label} className="bg-white p-5">
                    <div className="flex items-center gap-2 text-sky-700">
                      <s.icon className="size-4 text-emerald-600 shrink-0" />
                      <span className="text-xs font-bold uppercase tracking-wider text-sky-700">{s.label}</span>
                    </div>
                    <p className="mt-2 text-base font-bold text-sky-950">{s.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Fleet Section */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
        <h2 className="text-3xl font-bold tracking-tight text-sky-950">Motor Lainnya</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {related.map((m) => <MotorCard key={m.slug} motor={m} />)}
        </div>
      </section>
    </div>
  );
}