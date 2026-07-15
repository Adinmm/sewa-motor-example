import Link from "next/link";
import { ArrowRight, ShieldCheck, Clock, MapPin, Star, BadgeCheck, Truck, Wallet } from "lucide-react";
import { motors, formatRupiah } from "@/data/motors";
import { MotorCard } from "@/components/site/MotorCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rental Motor Anda Moto Rent — Sewa Motor di Rental Motor Anda Mulai 70rb / Hari",
  description:
    "Sewa motor di Rental Motor Anda dengan armada terawat: Scoopy, Vario, NMAX, PCX, KLX. Antar jemput gratis area Kuta, Seminyak, Canggu, Ubud.",
};

export default function HomePage() {
  const featured = motors.slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-amber-50/40 border-b border-amber-100">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 pb-16 pt-16 lg:grid-cols-12 lg:gap-8 lg:px-10 lg:pb-24 lg:pt-24">
          <div className="lg:col-span-6 lg:pt-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-100/80 px-3 py-1 text-xs font-semibold text-amber-900">
              <span className="size-1.5 rounded-full bg-emerald-500" />
              Trusted sejak 2015 · 10.000+ wisatawan
            </div>
            <h1 className="mt-6 text-balance text-5xl font-bold leading-[1.05] tracking-tight text-sky-950 md:text-6xl lg:text-7xl">
              Rental Motor Rental Motor Anda
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-sky-900">
              Sewa motor mudah, cepat, dan terpercaya di Rental Motor Anda. Armada terawat,
              proses booking 5 menit, antar jemput gratis ke hotel Anda.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Link href="/motor" className="inline-flex items-center gap-2 rounded-md bg-emerald-600 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-emerald-700 shadow-sm shadow-emerald-200">
                Booking Sekarang <ArrowRight className="size-4" />
              </Link>
              <Link href="/motor" className="inline-flex items-center gap-2 rounded-md border border-emerald-200 bg-emerald-50 px-6 py-3.5 text-sm font-semibold text-emerald-800 transition hover:bg-emerald-100">
                Lihat Daftar Motor
              </Link>
            </div>

            <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-amber-200/60 pt-8">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-sky-700">Motor</dt>
                <dd className="mt-1 text-2xl font-bold text-emerald-700">50+</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-sky-700">Rating</dt>
                <dd className="mt-1 flex items-center gap-1 text-2xl font-bold text-amber-600">
                  4.9 <Star className="size-4 fill-amber-400 text-amber-500" />
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-sky-700">Pelanggan</dt>
                <dd className="mt-1 text-2xl font-bold text-emerald-700">10k+</dd>
              </div>
            </dl>
          </div>

          <div className="relative lg:col-span-6">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-amber-100/50 border border-amber-100">
              <img src="/hero-bali.jpg" alt="Berkeliling Rental Motor Anda dengan motor sewaan" className="h-full w-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-amber-200 bg-white p-5 shadow-md shadow-amber-100/40 sm:block lg:max-w-xs">
              <p className="text-xs font-semibold uppercase tracking-wider text-amber-700">Mulai dari</p>
              <p className="mt-1 text-2xl font-bold text-emerald-700">{formatRupiah(70000)}<span className="text-sm font-normal text-sky-700"> / hari</span></p>
              <p className="mt-2 text-xs font-medium text-sky-900">Sudah termasuk 2 helm SNI & jas hujan bersih.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid Bar */}
      <section className="border-b border-sky-100 bg-sky-50">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px bg-sky-200/60 lg:grid-cols-4">
          {[
            { icon: ShieldCheck, t: "Motor Terawat", d: "Service rutin tiap minggu" },
            { icon: Clock, t: "Booking 5 Menit", d: "Proses cepat & tanpa ribet" },
            { icon: Truck, t: "Antar Jemput Gratis", d: "Area Kuta, Seminyak, Canggu" },
            { icon: Wallet, t: "Harga Transparan", d: "Tanpa biaya tersembunyi" },
          ].map((f) => (
            <div key={f.t} className="flex items-start gap-4 bg-sky-50 p-6 lg:p-8">
              <f.icon className="size-5 shrink-0 text-sky-600" />
              <div>
                <p className="text-sm font-bold text-sky-950">{f.t}</p>
                <p className="mt-1 text-xs font-medium text-sky-800">{f.d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Fleet */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-600">Pilihan Populer</p>
            <h2 className="mt-3 max-w-2xl text-4xl font-bold tracking-tight text-sky-950 md:text-5xl">
              Motor favorit wisatawan di Rental Motor Anda
            </h2>
          </div>
          <Link href="/motor" className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 hover:text-emerald-700 transition">
            Lihat semua motor <ArrowRight className="size-4" />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((m) => <MotorCard key={m.slug} motor={m} />)}
        </div>
      </section>

      {/* How it Works */}
      <section className="border-y border-amber-100 bg-amber-50/40">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-600">Cara Kerja</p>
            <h2 className="mt-3 text-4xl font-bold tracking-tight text-sky-950 md:text-5xl">
              Tiga langkah, motor siap di tangan Anda
            </h2>
          </div>

          <div className="mt-14 grid gap-12 lg:grid-cols-3">
            {[
              { n: "01", t: "Pilih motor", d: "Telusuri katalog lengkap dengan harga transparan dan spesifikasi detail." },
              { n: "02", t: "Booking via WhatsApp", d: "Konfirmasi tanggal & lokasi pengantaran. Tim kami merespon dalam hitungan menit." },
              { n: "03", t: "Nikmati Rental Motor Anda", d: "Motor diantar ke hotel atau bandara. Cukup tunjukkan KTP/Passport saat serah terima." },
            ].map((s) => (
              <div key={s.n} className="border-t border-amber-200/60 pt-6">
                <p className="text-sm font-bold font-mono text-emerald-600">{s.n}</p>
                <h3 className="mt-3 text-xl font-bold text-sky-950">{s.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-sky-900">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-600">Testimoni</p>
          <h2 className="mt-3 text-4xl font-bold tracking-tight text-sky-950 md:text-5xl">
            Dipercaya wisatawan dari seluruh dunia
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            { n: "Sarah W.", l: "Australia", q: "Smooth process from start to finish. The Vario was clean and reliable. Highly recommended!" },
            { n: "Andi P.", l: "Jakarta", q: "Pelayanan cepat, motor bersih, harga jujur. Sudah langganan tiap ke Rental Motor Anda." },
            { n: "Yuki T.", l: "Japan", q: "Very kind staff, delivered on time at our hotel in Canggu. Will rent again next trip." },
          ].map((t) => (
            <figure key={t.n} className="rounded-2xl border border-sky-100 bg-white p-7 shadow-sm shadow-sky-100/50">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-amber-400 text-amber-500" />
                ))}
              </div>
              <blockquote className="mt-5 text-sm leading-relaxed text-sky-900">&ldquo;{t.q}&rdquo;</blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-sky-100 pt-4">
                <div className="grid size-9 place-items-center rounded-full bg-emerald-600 text-sm font-semibold text-white">{t.n[0]}</div>
                <div>
                  <p className="text-sm font-bold text-sky-950">{t.n}</p>
                  <p className="text-xs font-medium text-sky-700">{t.l}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* CTA Box */}
      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-10">
        <div className="overflow-hidden rounded-3xl bg-emerald-800 px-8 py-16 text-white lg:px-16 lg:py-20 shadow-md shadow-emerald-800/10">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-4xl font-bold tracking-tight md:text-5xl">Siap menjelajah Rental Motor Anda?</h2>
              <p className="mt-4 max-w-md text-base leading-relaxed text-emerald-100">
                Booking sekarang dan dapatkan diskon 10% untuk durasi sewa minimal 3 hari.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <Link href="/motor" className="inline-flex items-center gap-2 rounded-md bg-white px-6 py-3.5 text-sm font-semibold text-emerald-800 hover:bg-emerald-50 transition">
                Booking Sekarang <ArrowRight className="size-4" />
              </Link>
              <Link href="/kontak" className="inline-flex items-center gap-2 rounded-md border border-white/30 px-6 py-3.5 text-sm font-semibold text-white hover:bg-emerald-900 transition">
                <MapPin className="size-4" /> Lokasi Kami
              </Link>
            </div>
          </div>
          <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t border-emerald-700 pt-8 text-sm font-medium text-emerald-100">
            {["KTP / Passport saja", "Tanpa deposit besar", "Antar jemput gratis", "Asuransi motor"].map((x) => (
              <span key={x} className="inline-flex items-center gap-2">
                <BadgeCheck className="size-4 text-emerald-300" /> {x}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}