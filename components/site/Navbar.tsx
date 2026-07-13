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
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-10">
        <Link href="/" className="flex items-center gap-2">
          <span className="grid size-8 place-items-center rounded-lg bg-foreground text-background text-sm font-bold">
            B
          </span>
          <span className="text-base font-semibold tracking-tight">{SITE.name}</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              href={l.to}
              className={cn(
                "rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-secondary",
                isActive(l.to)
                  ? "text-foreground bg-secondary"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            href="/motor"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Booking Sekarang
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          className="grid size-10 place-items-center rounded-md hover:bg-secondary md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3">
            {links.map((l) => (
              <Link
                key={l.to}
                href={l.to}
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-md px-4 py-3 text-sm font-medium hover:bg-secondary hover:text-foreground",
                  isActive(l.to) ? "bg-secondary text-foreground" : "text-muted-foreground",
                )}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/motor"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-md bg-primary px-4 py-3 text-sm font-medium text-primary-foreground"
            >
              Booking Sekarang
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
