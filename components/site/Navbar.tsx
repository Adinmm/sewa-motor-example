"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

const links = [
  { to: "/", label: "Home" },
  { to: "/motor", label: "Motor" },
  { to: "/tentang", label: "Tentang" },
  { to: "/kontak", label: "Kontak" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (to: string) =>
    to === "/" ? pathname === "/" : pathname.startsWith(to);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-sky-100 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-10">
        
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <span className="grid size-8 place-items-center rounded-lg bg-emerald-600 text-white text-sm font-bold shadow-sm shadow-emerald-100 transition-transform duration-200 group-hover:scale-105">
            B
          </span>
          <span className="text-base font-bold tracking-tight text-sky-950">{SITE.name}</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              href={l.to}
              className={cn(
                "rounded-md px-4 py-2 text-sm font-semibold transition duration-200",
                isActive(l.to)
                  ? "text-emerald-700 bg-emerald-50/60"
                  : "text-sky-900 hover:text-emerald-600 hover:bg-sky-50/40",
              )}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden md:block">
          <Link
            href="/motor"
            className="inline-flex items-center justify-center rounded-md bg-emerald-600 px-5 py-2 text-sm font-bold text-white shadow-sm shadow-emerald-100 transition duration-200 hover:bg-emerald-700"
          >
            Booking Sekarang
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          aria-label="Toggle menu"
          className="grid size-10 place-items-center rounded-md border border-transparent text-sky-950 transition hover:bg-sky-50/80 md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {/* Mobile Navigation Panel */}
      {open && (
        <div className="border-t border-sky-100 bg-white md:hidden animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4">
            {links.map((l) => (
              <Link
                key={l.to}
                href={l.to}
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-md px-4 py-3 text-sm font-semibold transition duration-150",
                  isActive(l.to) 
                    ? "bg-emerald-50 text-emerald-700" 
                    : "text-sky-900 hover:bg-sky-50 hover:text-sky-950",
                )}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/motor"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex items-center justify-center rounded-md bg-emerald-600 px-4 py-3 text-sm font-bold text-white shadow-sm shadow-emerald-100 transition hover:bg-emerald-700"
            >
              Booking Sekarang
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}