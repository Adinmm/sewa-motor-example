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
      {/* Filter and Sort Toolbar */}
      <div className="flex flex-col gap-4 border-b border-amber-200/60 pb-6 sm:flex-row sm:items-center sm:justify-between">
        {/* Category Buttons */}
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={
                "rounded-full border px-5 py-2 text-xs font-bold transition duration-200 " +
                (cat === c
                  ? "border-emerald-600 bg-emerald-600 text-white shadow-sm shadow-emerald-100"
                  : "border-sky-100 bg-sky-50/40 text-sky-800 hover:border-sky-200 hover:bg-sky-50 hover:text-sky-950")
              }
            >
              {c}
            </button>
          ))}
        </div>
        
        {/* Sort Select */}
        <div className="flex items-center gap-3 text-sm">
          <Label htmlFor="sort" className="font-bold text-sky-950">
            Urutkan
          </Label>

          <Select
            value={sort}
            onValueChange={(value) => setSort(value as "low" | "high")}
          >
            <SelectTrigger 
              id="sort" 
              className="w-44 border-sky-200/80 bg-white font-medium text-sky-950 focus:border-emerald-500 focus:ring-emerald-500/20"
            >
              <SelectValue placeholder="Pilih urutan" />
            </SelectTrigger>

            <SelectContent className="border-sky-100 bg-white text-sky-950">
              <SelectItem value="low" className="font-medium focus:bg-sky-50 focus:text-sky-950 cursor-pointer">
                Harga terendah
              </SelectItem>
              <SelectItem value="high" className="font-medium focus:bg-sky-50 focus:text-sky-950 cursor-pointer">
                Harga tertinggi
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Grid List */}
      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {list.map((m) => (
          <MotorCard key={m.slug} motor={m} />
        ))}
      </div>
    </section>
  );
}