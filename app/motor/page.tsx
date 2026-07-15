import type { Metadata } from "next";
import { MotorList } from "@/components/site/MotorList";

export const metadata: Metadata = {
  title: "Daftar Motor — Bali Moto Rent",
  description:
    "Pilihan motor matic, sport, dan trail untuk disewa di Bali. Honda Scoopy, Vario, PCX, NMAX, BeAT, Kawasaki KLX.",
};

export default function MotorPage() {
  return (
    <div>
      <section className="border-b border-amber-100 bg-amber-50/40">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-600">Katalog</p>
          <h1 className="mt-3 max-w-3xl text-5xl font-bold tracking-tight text-sky-950 md:text-6xl">
            Pilih motor untuk petualangan Bali Anda
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-sky-900">
            Semua motor diservis rutin, lengkap dengan STNK original, 2 helm SNI,
            dan jas hujan bersih. Harga transparan tanpa biaya tersembunyi.
          </p>
        </div>
      </section>
      
      <MotorList />
    </div>
  );
}