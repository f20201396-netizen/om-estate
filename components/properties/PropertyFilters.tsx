"use client";

import { SlidersHorizontal, X } from "lucide-react";

interface Filters {
  category: string;
  type: string;
  minPrice: string;
  maxPrice: string;
  location: string;
}

interface PropertyFiltersProps {
  filters: Filters;
  onChange: (key: keyof Filters, value: string) => void;
  onReset: () => void;
}

const categories = ["all", "buy", "sell", "rent", "lease"];
const types = ["all", "residential", "commercial", "industrial"];
const locations = [
  "all",
  "Sector 14", "Sector 15", "Sector 16", "Sector 21",
  "Sector 28", "Sector 46", "Sector 58", "Sector 59",
  "NIT", "Old Faridabad", "Neelam Chowk", "BPTP", "NH-48", "IMT Faridabad",
];

export default function PropertyFilters({ filters, onChange, onReset }: PropertyFiltersProps) {
  const hasActive =
    filters.category !== "all" ||
    filters.type !== "all" ||
    filters.location !== "all" ||
    filters.minPrice !== "" ||
    filters.maxPrice !== "";

  return (
    <div className="bg-surface-elevated border border-border-dark p-6">
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2">
          <SlidersHorizontal size={16} className="text-gold" />
          <span className="font-josefin text-sm tracking-[0.15em] uppercase text-white">Filters</span>
        </div>
        {hasActive && (
          <button
            onClick={onReset}
            className="flex items-center gap-1.5 font-josefin text-xs text-text-muted hover:text-gold transition-colors"
          >
            <X size={12} />
            Reset
          </button>
        )}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {/* Category */}
        <div>
          <label className="font-josefin text-xs tracking-[0.2em] uppercase text-text-muted mb-2 block">
            Category
          </label>
          <select
            value={filters.category}
            onChange={(e) => onChange("category", e.target.value)}
            className="w-full bg-surface border border-border-dark text-text-secondary font-josefin text-sm px-3 py-2.5 focus:outline-none focus:border-gold/50 transition-colors appearance-none cursor-pointer"
          >
            {categories.map((c) => (
              <option key={c} value={c} className="bg-surface">
                {c.charAt(0).toUpperCase() + c.slice(1)}
              </option>
            ))}
          </select>
        </div>

        {/* Type */}
        <div>
          <label className="font-josefin text-xs tracking-[0.2em] uppercase text-text-muted mb-2 block">
            Type
          </label>
          <select
            value={filters.type}
            onChange={(e) => onChange("type", e.target.value)}
            className="w-full bg-surface border border-border-dark text-text-secondary font-josefin text-sm px-3 py-2.5 focus:outline-none focus:border-gold/50 transition-colors appearance-none cursor-pointer"
          >
            {types.map((t) => (
              <option key={t} value={t} className="bg-surface">
                {t.charAt(0).toUpperCase() + t.slice(1)}
              </option>
            ))}
          </select>
        </div>

        {/* Location */}
        <div>
          <label className="font-josefin text-xs tracking-[0.2em] uppercase text-text-muted mb-2 block">
            Location
          </label>
          <select
            value={filters.location}
            onChange={(e) => onChange("location", e.target.value)}
            className="w-full bg-surface border border-border-dark text-text-secondary font-josefin text-sm px-3 py-2.5 focus:outline-none focus:border-gold/50 transition-colors appearance-none cursor-pointer"
          >
            {locations.map((l) => (
              <option key={l} value={l} className="bg-surface">
                {l === "all" ? "All Locations" : l}
              </option>
            ))}
          </select>
        </div>

        {/* Min Price */}
        <div>
          <label className="font-josefin text-xs tracking-[0.2em] uppercase text-text-muted mb-2 block">
            Min Price (₹)
          </label>
          <input
            type="number"
            placeholder="0"
            value={filters.minPrice}
            onChange={(e) => onChange("minPrice", e.target.value)}
            className="w-full bg-surface border border-border-dark text-text-secondary font-josefin text-sm px-3 py-2.5 focus:outline-none focus:border-gold/50 transition-colors placeholder:text-text-muted"
          />
        </div>

        {/* Max Price */}
        <div>
          <label className="font-josefin text-xs tracking-[0.2em] uppercase text-text-muted mb-2 block">
            Max Price (₹)
          </label>
          <input
            type="number"
            placeholder="No limit"
            value={filters.maxPrice}
            onChange={(e) => onChange("maxPrice", e.target.value)}
            className="w-full bg-surface border border-border-dark text-text-secondary font-josefin text-sm px-3 py-2.5 focus:outline-none focus:border-gold/50 transition-colors placeholder:text-text-muted"
          />
        </div>
      </div>
    </div>
  );
}
