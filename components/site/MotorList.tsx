"use client";

import { useState, useMemo } from "react";
import { motors } from "@/data/motors";
import { MotorCard } from "@/components/site/MotorCard";
import { Label } from "../ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";

const categories = ["Semua", "Matic", "Sport", "Trail"] as const;

export function MotorList() {
  const [cat, setCat] = useState<(typeof categories)[number]>("Semua");
  const [sort, setSort] = useState<"low" | "high">("low");

  const list = useMemo(() => {
    const filtered = cat === "Semua" ? motors : motors.filter((m) => m.category === cat);
    return [...filtered].sort((a, b) =>
      sort === "low" ? a.pricePerDay - b.pricePerDay : b.pricePerDay - a.pricePerDay,
    );
  }, [cat, sort]);

  return (
    <section className="mx-auto max-w-7xl px-6 py-12 lg:px-10 lg:py-16">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border pb-6">
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={
                "rounded-full border px-4 py-2 text-xs font-medium transition " +
                (cat === c
                  ? "border-foreground bg-foreground text-background"
                  : "border-border text-muted-foreground hover:text-foreground")
              }
            >
              {c}
            </button>
          ))}
        </div>
   <div className="flex items-center gap-3 text-sm">
  <Label htmlFor="sort" className="text-muted-foreground">
    Urutkan
  </Label>

  <Select
    value={sort}
    onValueChange={(value) => setSort(value as "low" | "high")}
  >
    <SelectTrigger id="sort" className="w-45">
      <SelectValue placeholder="Pilih urutan" />
    </SelectTrigger>

    <SelectContent>
      <SelectItem value="low">Harga terendah</SelectItem>
      <SelectItem value="high">Harga tertinggi</SelectItem>
    </SelectContent>
  </Select>
</div>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {list.map((m) => <MotorCard key={m.slug} motor={m} />)}
      </div>
    </section>
  );
}
