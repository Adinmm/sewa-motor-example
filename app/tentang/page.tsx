import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, Award, Leaf, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Tentang Kami — Bali Moto Rent",
  description: "Bali Moto Rent adalah layanan rental motor terpercaya di Bali sejak 2015.",
};

export default function AboutPage() {
  return (
    <div>
      <section className="border-b border-border bg-surface">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Tentang Kami</p>
          <h1 className="mt-3 max-w-4xl text-5xl font-semibold tracking-tight md:text-6xl">
            Membantu wisatawan menjelajah Bali sejak 2015.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Bermula dari 5 unit motor di garasi rumah, kini kami melayani lebih
            dari 10.000 wisatawan setiap tahunnya dengan armada berkualitas dan
            pelayanan profesional.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:grid lg:grid-cols-12 lg:gap-16 lg:px-10 lg:py-28">
        <div className="lg:col-span-4">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Cerita Kami</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">Lokal, profesional, jujur</h2>
        </div>
        <div className="mt-8 space-y-6 text-base leading-relaxed text-foreground lg:col-span-8 lg:mt-0">
          <p>
            Kami percaya cara terbaik menikmati Bali adalah dengan motor — bebas
            menelusuri jalan kecil, berhenti di warung lokal, dan menikmati
            sunset di tepi pantai. Karena itu, sejak 2015 kami menyediakan
            layanan rental motor yang fokus pada tiga hal: armada terawat,
            harga jujur, dan pelayanan ramah.
          </p>
          <p>
            Setiap motor diservis rutin setiap minggu, dilengkapi STNK original,
            dan diasuransikan. Tim kami fasih berbahasa Inggris dan siap
            membantu mulai dari rekomendasi rute hingga rekomendasi bengkel
            terdekat saat Anda butuh bantuan di jalan.
          </p>
        </div>
      </section>

      <section className="border-y border-border bg-surface">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid gap-10 lg:grid-cols-3">
            {[
              { icon: Award, t: "Kualitas armada", d: "Service rutin setiap minggu, ban dicek setiap penyewaan, oli diganti tepat waktu." },
              { icon: Users, t: "Pelayanan personal", d: "Tim lokal yang ramah, fasih bahasa Inggris, dan paham seluruh sudut Bali." },
              { icon: Leaf, t: "Berkomitmen lokal", d: "Kami bekerja sama dengan bengkel & UMKM lokal untuk mendukung ekonomi Bali." },
            ].map((v) => (
              <div key={v.t}>
                <v.icon className="size-6 text-primary" />
                <h3 className="mt-5 text-xl font-semibold">{v.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="grid gap-10 border-y border-border py-12 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["10+", "Tahun pengalaman"],
            ["50+", "Unit motor terawat"],
            ["10.000+", "Pelanggan puas"],
            ["4.9/5", "Rating Google"],
          ].map(([n, l]) => (
            <div key={l}>
              <p className="text-4xl font-semibold tracking-tight md:text-5xl">{n}</p>
              <p className="mt-2 text-sm text-muted-foreground">{l}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-between gap-6 rounded-3xl bg-foreground p-10 text-background lg:p-14">
          <div>
            <h3 className="text-3xl font-semibold tracking-tight md:text-4xl">Siap mulai?</h3>
            <p className="mt-3 max-w-md text-background/70">Pilih motor favorit Anda dan booking dalam hitungan menit.</p>
          </div>
          <Link href="/motor" className="inline-flex items-center gap-2 rounded-md bg-background px-6 py-3.5 text-sm font-medium text-foreground hover:bg-background/90">
            Lihat motor <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
