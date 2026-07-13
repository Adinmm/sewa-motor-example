import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { type Motor, formatRupiah } from "@/data/motors";

export function MotorCard({ motor }: { motor: Motor }) {
  return (
    <Link
      href={`/motor/${motor.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-foreground/20 hover:shadow-card"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-surface">
        <img
          src={motor.image}
          alt={motor.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1 text-xs font-medium text-foreground backdrop-blur">
          {motor.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs uppercase tracking-wider text-muted-foreground">{motor.brand}</p>
            <h3 className="mt-1 text-lg font-semibold">{motor.name}</h3>
          </div>
          <ArrowUpRight className="size-5 shrink-0 text-muted-foreground transition group-hover:text-foreground" />
        </div>
        <p className="mt-2 line-clamp-2 text-sm text-muted-foreground  h-full">{motor.tagline}</p>

        <div className="mt-6 flex items-end justify-between border-t border-border pt-4 ">
          <div>
            <p className="text-xs text-muted-foreground">Mulai dari</p>
            <p className="text-lg font-semibold">
              {formatRupiah(motor.pricePerDay)}
              <span className="text-sm font-normal text-muted-foreground"> / hari</span>
            </p>
          </div>
          <span className="rounded-md bg-foreground px-3 py-2 text-xs font-medium text-background transition group-hover:bg-primary">
            Sewa
          </span>
        </div>
      </div>
    </Link>
  );
}
