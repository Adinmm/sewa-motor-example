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
      <section className="border-b border-border bg-surface">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Katalog</p>
          <h1 className="mt-3 max-w-3xl text-5xl font-semibold tracking-tight md:text-6xl">
            Pilih motor untuk petualangan Bali Anda
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
            Semua motor diservis rutin, lengkap dengan STNK original, 2 helm SNI,
            dan jas hujan. Harga sudah termasuk pajak.
          </p>
        </div>
      </section>
      <MotorList />
    </div>
  );
}
