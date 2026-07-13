import Link from "next/link";
import { Mail, MapPin, Phone, Instagram, Facebook } from "lucide-react";
import { SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Link href="/" className="flex items-center gap-2">
              <span className="grid size-8 place-items-center rounded-lg bg-foreground text-background text-sm font-bold">
                B
              </span>
              <span className="text-base font-semibold tracking-tight">{SITE.name}</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Layanan rental motor terpercaya di Bali sejak 2015. Armada terawat,
              proses cepat, dan harga transparan tanpa biaya tersembunyi.
            </p>
            <div className="mt-6 flex gap-3">
              <a href="#" aria-label="Instagram" className="grid size-10 place-items-center rounded-md border border-border text-muted-foreground transition hover:text-foreground">
                <Instagram className="size-4" />
              </a>
              <a href="#" aria-label="Facebook" className="grid size-10 place-items-center rounded-md border border-border text-muted-foreground transition hover:text-foreground">
                <Facebook className="size-4" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold">Navigasi</h4>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li><Link href="/" className="hover:text-foreground">Home</Link></li>
              <li><Link href="/motor" className="hover:text-foreground">Motor</Link></li>
              <li><Link href="/tentang" className="hover:text-foreground">Tentang</Link></li>
              <li><Link href="/kontak" className="hover:text-foreground">Kontak</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold">Layanan</h4>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li>Rental Harian</li>
              <li>Rental Mingguan</li>
              <li>Rental Bulanan</li>
              <li>Antar Jemput</li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-sm font-semibold">Hubungi Kami</h4>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-3"><Phone className="mt-0.5 size-4 shrink-0" /><span>{SITE.whatsappDisplay}</span></li>
              <li className="flex gap-3"><Mail className="mt-0.5 size-4 shrink-0" /><span>{SITE.email}</span></li>
              <li className="flex gap-3"><MapPin className="mt-0.5 size-4 shrink-0" /><span>{SITE.address}</span></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} {SITE.name}. Semua hak dilindungi.</p>
          <p>Dibuat dengan cermat di Bali, Indonesia.</p>
        </div>
      </div>
    </footer>
  );
}
