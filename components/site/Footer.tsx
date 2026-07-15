import Link from "next/link";
import { Mail, MapPin, Phone, Instagram, Facebook } from "lucide-react";
import { SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-amber-200/60 bg-amber-50/40">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand Info */}
          <div className="lg:col-span-5">
            <Link href="/" className="flex items-center gap-2">
              <span className="grid size-8 place-items-center rounded-lg bg-emerald-600 text-white text-sm font-bold shadow-sm shadow-emerald-100">
                B
              </span>
              <span className="text-base font-bold tracking-tight text-sky-950">{SITE.name}</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-sky-900">
              Layanan rental motor terpercaya di Rental Motor Anda sejak 2015. Armada terawat,
              proses cepat, dan harga transparan tanpa biaya tersembunyi.
            </p>
            {/* Social Media Links - Consistent & Professional Styling */}
            <div className="mt-6 flex gap-3">
              <a 
                href="#" 
                aria-label="Instagram" 
                className="grid size-10 place-items-center rounded-md border border-sky-200/80 bg-white text-sky-800 transition hover:border-emerald-500 hover:bg-sky-50/40 hover:text-emerald-700"
              >
                <Instagram className="size-4" />
              </a>
              <a 
                href="#" 
                aria-label="Facebook" 
                className="grid size-10 place-items-center rounded-md border border-sky-200/80 bg-white text-sky-800 transition hover:border-emerald-500 hover:bg-sky-50/40 hover:text-emerald-700"
              >
                <Facebook className="size-4" />
              </a>
            </div>
          </div>

          {/* Navigasi */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold text-sky-950">Navigasi</h4>
            <ul className="mt-4 space-y-3 text-sm font-medium text-sky-800">
              <li><Link href="/" className="transition hover:text-emerald-600">Home</Link></li>
              <li><Link href="/motor" className="transition hover:text-emerald-600">Motor</Link></li>
              <li><Link href="/tentang" className="transition hover:text-emerald-600">Tentang</Link></li>
              <li><Link href="/kontak" className="transition hover:text-emerald-600">Kontak</Link></li>
            </ul>
          </div>

          {/* Layanan */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold text-sky-950">Layanan</h4>
            <ul className="mt-4 space-y-3 text-sm font-medium text-sky-800">
              <li className="hover:text-emerald-600 transition duration-200 cursor-default">Rental Harian</li>
              <li className="hover:text-emerald-600 transition duration-200 cursor-default">Rental Mingguan</li>
              <li className="hover:text-emerald-600 transition duration-200 cursor-default">Rental Bulanan</li>
              <li className="hover:text-emerald-600 transition duration-200 cursor-default">Antar Jemput</li>
            </ul>
          </div>

          {/* Hubungi Kami */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold text-sky-950">Hubungi Kami</h4>
            <ul className="mt-4 space-y-3 text-sm font-medium text-sky-900">
              <li className="flex gap-3">
                <Phone className="mt-0.5 size-4 shrink-0 text-emerald-600" />
                <span>{SITE.whatsappDisplay}</span>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 size-4 shrink-0 text-emerald-600" />
                <span>{SITE.email}</span>
              </li>
              <li className="flex gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-emerald-600" />
                <span>{SITE.address}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-amber-200/60 pt-8 text-xs font-semibold text-sky-700 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} {SITE.name}. Semua hak dilindungi.</p>
          <p className="text-sky-800">Dibuat dengan cermat di Rental Motor Anda, Indonesia.</p>
        </div>
      </div>
    </footer>
  );
}