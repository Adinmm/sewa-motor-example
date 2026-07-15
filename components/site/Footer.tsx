import Link from "next/link";
import { Mail, MapPin, Phone, Instagram, Facebook } from "lucide-react";
import { SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-slate-800/80 bg-slate-950 text-slate-400">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand Info */}
          <div className="lg:col-span-5">
            <Link href="/" className="flex items-center gap-2 group">
              <span className="grid size-8 place-items-center rounded-lg bg-emerald-600 text-white text-sm font-bold shadow-sm shadow-emerald-900/50 transition-transform duration-200 group-hover:scale-105">
                B
              </span>
              <span className="text-base font-bold tracking-tight text-white">{SITE.name}</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">
              Layanan rental motor terpercaya di Rental Motor Anda sejak 2015. Armada terawat,
              proses cepat, dan harga transparan tanpa biaya tersembunyi.
            </p>
            {/* Social Media Links - Consistent Dark Theme */}
            <div className="mt-6 flex gap-3">
              <a 
                href="#" 
                aria-label="Instagram" 
                className="grid size-10 place-items-center rounded-md border border-slate-800 bg-slate-900/50 text-slate-400 transition duration-200 hover:border-emerald-500 hover:bg-slate-900 hover:text-emerald-400"
              >
                <Instagram className="size-4" />
              </a>
              <a 
                href="#" 
                aria-label="Facebook" 
                className="grid size-10 place-items-center rounded-md border border-slate-800 bg-slate-900/50 text-slate-400 transition duration-200 hover:border-emerald-500 hover:bg-slate-900 hover:text-emerald-400"
              >
                <Facebook className="size-4" />
              </a>
            </div>
          </div>

          {/* Navigasi */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold text-white">Navigasi</h4>
            <ul className="mt-4 space-y-3 text-sm font-medium text-slate-400">
              <li><Link href="/" className="transition duration-200 hover:text-emerald-400">Home</Link></li>
              <li><Link href="/motor" className="transition duration-200 hover:text-emerald-400">Motor</Link></li>
              <li><Link href="/tentang" className="transition duration-200 hover:text-emerald-400">Tentang</Link></li>
              <li><Link href="/kontak" className="transition duration-200 hover:text-emerald-400">Kontak</Link></li>
            </ul>
          </div>

          {/* Layanan */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold text-white">Layanan</h4>
            <ul className="mt-4 space-y-3 text-sm font-medium text-slate-400">
              <li className="hover:text-emerald-400 transition duration-200 cursor-default">Rental Harian</li>
              <li className="hover:text-emerald-400 transition duration-200 cursor-default">Rental Mingguan</li>
              <li className="hover:text-emerald-400 transition duration-200 cursor-default">Rental Bulanan</li>
              <li className="hover:text-emerald-400 transition duration-200 cursor-default">Antar Jemput</li>
            </ul>
          </div>

          {/* Hubungi Kami */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold text-white">Hubungi Kami</h4>
            <ul className="mt-4 space-y-3 text-sm font-medium text-slate-300">
              <li className="flex gap-3 items-center">
                <Phone className="size-4 shrink-0 text-emerald-500" />
                <span>{SITE.whatsappDisplay}</span>
              </li>
              <li className="flex gap-3 items-center">
                <Mail className="size-4 shrink-0 text-emerald-500" />
                <span>{SITE.email}</span>
              </li>
              <li className="flex gap-3 items-start">
                <MapPin className="mt-0.5 size-4 shrink-0 text-emerald-500" />
                <span>{SITE.address}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-slate-800/80 pt-8 text-xs font-semibold text-slate-500 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} {SITE.name}. Semua hak dilindungi.</p>
          <p className="text-slate-400">Dibuat dengan cermat di Rental Motor Anda, Indonesia.</p>
        </div>
      </div>
    </footer>
  );
}