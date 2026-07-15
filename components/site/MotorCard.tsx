import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { type Motor, formatRupiah } from "@/data/motors";

export function MotorCard({ motor }: { motor: Motor }) {
  return (
    <Link
      href={`/motor/${motor.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-amber-100 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-md hover:shadow-amber-100/40"
    >
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden bg-amber-50/40">
        <img
          src={motor.image}
          alt={motor.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 rounded-full bg-sky-950/90 px-3 py-1 text-xs font-bold text-white backdrop-blur-sm">
          {motor.category}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-orange-600">{motor.brand}</p>
            <h3 className="mt-1 text-lg font-bold tracking-tight text-sky-950">{motor.name}</h3>
          </div>
          <ArrowUpRight className="size-5 shrink-0 text-sky-400 transition group-hover:text-emerald-600" />
        </div>
        
        <p className="mt-2 line-clamp-2 text-sm font-medium text-sky-900 flex-1">{motor.tagline}</p>

        {/* Footer Card */}
        <div className="mt-6 flex items-end justify-between border-t border-amber-200/60 pt-4">
          <div>
            <p className="text-xs font-semibold text-sky-700">Mulai dari</p>
            <p className="text-lg font-bold text-emerald-700">
              {formatRupiah(motor.pricePerDay)}
              <span className="text-xs font-normal text-sky-700"> / hari</span>
            </p>
          </div>
          <span className="rounded-md bg-emerald-600 px-4 py-2 text-xs font-semibold text-white shadow-sm shadow-emerald-200 transition group-hover:bg-emerald-700">
            Sewa Motor
          </span>
        </div>
      </div>
    </Link>
  );
}