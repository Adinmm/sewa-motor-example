import Link from "next/link";
import { ArrowRight, ShieldCheck, Clock, MapPin, Star, BadgeCheck, Truck, Wallet } from "lucide-react";
import { motors, formatRupiah } from "@/data/motors";
import { MotorCard } from "@/components/site/MotorCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bali Moto Rent — Sewa Motor di Bali Mulai 70rb / Hari",
  description:
    "Sewa motor di Bali dengan armada terawat: Scoopy, Vario, NMAX, PCX, KLX. Antar jemput gratis area Kuta, Seminyak, Canggu, Ubud.",
};

export default function HomePage() {
  const featured = motors.slice(0, 3);

  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 pb-16 pt-16 lg:grid-cols-12 lg:gap-8 lg:px-10 lg:pb-24 lg:pt-24">
          <div className="lg:col-span-6 lg:pt-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-muted-foreground">
              <span className="size-1.5 rounded-full bg-primary" />
              Trusted sejak 2015 · 10.000+ wisatawan
            </div>
            <h1 className="mt-6 text-balance text-5xl font-semibold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
              Rental Motor Bali
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
              Sewa motor mudah, cepat, dan terpercaya di Bali. Armada terawat,
              proses booking 5 menit, antar jemput gratis ke hotel Anda.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Link href="/motor" className="inline-flex items-center gap-2 rounded-md bg-foreground px-6 py-3.5 text-sm font-medium text-background transition hover:bg-foreground/90">
                Booking Sekarang <ArrowRight className="size-4" />
              </Link>
              <Link href="/motor" className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-6 py-3.5 text-sm font-medium transition hover:bg-secondary">
                Lihat Daftar Motor
              </Link>
            </div>

            <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-border pt-8">
              <div>
                <dt className="text-xs uppercase tracking-wider text-muted-foreground">Motor</dt>
                <dd className="mt-1 text-2xl font-semibold">50+</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wider text-muted-foreground">Rating</dt>
                <dd className="mt-1 flex items-center gap-1 text-2xl font-semibold">
                  4.9 <Star className="size-4 fill-foreground" />
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wider text-muted-foreground">Pelanggan</dt>
                <dd className="mt-1 text-2xl font-semibold">10k+</dd>
              </div>
            </dl>
          </div>

          <div className="relative lg:col-span-6">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-surface lg:aspect-[4/5]">
              <img src="/hero-bali.jpg" alt="Berkeliling Bali dengan motor sewaan" className="h-full w-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-border bg-background p-5 shadow-card sm:block lg:max-w-xs">
              <p className="text-xs uppercase tracking-wider text-muted-foreground">Mulai dari</p>
              <p className="mt-1 text-2xl font-semibold">{formatRupiah(70000)}<span className="text-sm font-normal text-muted-foreground"> / hari</span></p>
              <p className="mt-2 text-xs text-muted-foreground">Sudah termasuk 2 helm SNI & jas hujan.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-surface">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px bg-border lg:grid-cols-4">
          {[
            { icon: ShieldCheck, t: "Motor Terawat", d: "Service rutin tiap minggu" },
            { icon: Clock, t: "Booking 5 Menit", d: "Proses cepat & tanpa ribet" },
            { icon: Truck, t: "Antar Jemput Gratis", d: "Area Kuta, Seminyak, Canggu" },
            { icon: Wallet, t: "Harga Transparan", d: "Tanpa biaya tersembunyi" },
          ].map((f) => (
            <div key={f.t} className="flex items-start gap-4 bg-surface p-6 lg:p-8">
              <f.icon className="size-5 shrink-0 text-primary" />
              <div>
                <p className="text-sm font-semibold">{f.t}</p>
                <p className="mt-1 text-xs text-muted-foreground">{f.d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Pilihan Populer</p>
            <h2 className="mt-3 max-w-2xl text-4xl font-semibold tracking-tight md:text-5xl">
              Motor favorit wisatawan di Bali
            </h2>
          </div>
          <Link href="/motor" className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary">
            Lihat semua motor <ArrowRight className="size-4" />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((m) => <MotorCard key={m.slug} motor={m} />)}
        </div>
      </section>

      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Cara Kerja</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
              Tiga langkah, motor siap di tangan Anda
            </h2>
          </div>

          <div className="mt-14 grid gap-12 lg:grid-cols-3">
            {[
              { n: "01", t: "Pilih motor", d: "Telusuri katalog lengkap dengan harga transparan dan spesifikasi detail." },
              { n: "02", t: "Booking via WhatsApp", d: "Konfirmasi tanggal & lokasi pengantaran. Tim kami merespon dalam menit." },
              { n: "03", t: "Nikmati Bali", d: "Motor diantar ke hotel atau bandara. Cukup tunjukkan KTP/Passport saat serah terima." },
            ].map((s) => (
              <div key={s.n} className="border-t border-border pt-6">
                <p className="text-sm font-mono text-muted-foreground">{s.n}</p>
                <h3 className="mt-3 text-xl font-semibold">{s.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Testimoni</p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
            Dipercaya wisatawan dari seluruh dunia
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            { n: "Sarah W.", l: "Australia", q: "Smooth process from start to finish. The Vario was clean and reliable. Highly recommended!" },
            { n: "Andi P.", l: "Jakarta", q: "Pelayanan cepat, motor bersih, harga jujur. Sudah langganan tiap ke Bali." },
            { n: "Yuki T.", l: "Japan", q: "Very kind staff, delivered on time at our hotel in Canggu. Will rent again next trip." },
          ].map((t) => (
            <figure key={t.n} className="rounded-2xl border border-border bg-card p-7">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-foreground text-foreground" />
                ))}
              </div>
              <blockquote className="mt-5 text-sm leading-relaxed text-foreground">&ldquo;{t.q}&rdquo;</blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-4">
                <div className="grid size-9 place-items-center rounded-full bg-secondary text-sm font-semibold">{t.n[0]}</div>
                <div>
                  <p className="text-sm font-medium">{t.n}</p>
                  <p className="text-xs text-muted-foreground">{t.l}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-10">
        <div className="overflow-hidden rounded-3xl bg-foreground px-8 py-16 text-background lg:px-16 lg:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">Siap menjelajah Bali?</h2>
              <p className="mt-4 max-w-md text-base leading-relaxed text-background/70">
                Booking sekarang dan dapatkan diskon 10% untuk sewa minimal 3 hari.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <Link href="/motor" className="inline-flex items-center gap-2 rounded-md bg-background px-6 py-3.5 text-sm font-medium text-foreground hover:bg-background/90">
                Booking Sekarang <ArrowRight className="size-4" />
              </Link>
              <Link href="/kontak" className="inline-flex items-center gap-2 rounded-md border border-background/30 px-6 py-3.5 text-sm font-medium text-background hover:bg-background/10">
                <MapPin className="size-4" /> Lokasi Kami
              </Link>
            </div>
          </div>
          <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t border-background/15 pt-8 text-sm text-background/70">
            {["KTP / Passport saja", "Tanpa deposit besar", "Antar jemput gratis", "Asuransi motor"].map((x) => (
              <span key={x} className="inline-flex items-center gap-2">
                <BadgeCheck className="size-4" /> {x}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
