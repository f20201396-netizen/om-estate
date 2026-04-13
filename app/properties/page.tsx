"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import PropertyCard from "@/components/properties/PropertyCard";
import PropertyFilters from "@/components/properties/PropertyFilters";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { properties } from "@/lib/data";
import { Property } from "@/lib/types";

interface Filters {
  category: string;
  type: string;
  minPrice: string;
  maxPrice: string;
  location: string;
}

function PropertiesContent() {
  const searchParams = useSearchParams();

  const [filters, setFilters] = useState<Filters>({
    category: searchParams.get("category") || "all",
    type: searchParams.get("type") || "all",
    minPrice: "",
    maxPrice: "",
    location: searchParams.get("location") || "all",
  });

  useEffect(() => {
    setFilters((prev) => ({
      ...prev,
      category: searchParams.get("category") || "all",
      type: searchParams.get("type") || "all",
      location: searchParams.get("location") || "all",
    }));
  }, [searchParams]);

  const handleFilterChange = (key: keyof Filters, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const handleReset = () => {
    setFilters({ category: "all", type: "all", minPrice: "", maxPrice: "", location: "all" });
  };

  const filtered = properties.filter((p: Property) => {
    if (filters.category !== "all" && p.category !== filters.category) return false;
    if (filters.type !== "all" && p.type !== filters.type) return false;
    if (filters.location !== "all" && !p.location.toLowerCase().includes(filters.location.toLowerCase())) return false;
    if (filters.minPrice && p.price < Number(filters.minPrice)) return false;
    if (filters.maxPrice && p.price > Number(filters.maxPrice)) return false;
    return true;
  });

  return (
    <div className="pt-20">
      {/* Page Header */}
      <div className="bg-surface border-b border-border-dark py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="font-josefin text-xs tracking-[0.35em] uppercase text-gold mb-3">
            All Properties
          </p>
          <h1
            className="font-cinzel font-semibold text-white"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
          >
            Property Listings
          </h1>
          <p className="font-josefin text-text-muted mt-3 text-sm">
            {filtered.length} properties found · Faridabad, Haryana
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Filters */}
        <div className="mb-8">
          <PropertyFilters filters={filters} onChange={handleFilterChange} onReset={handleReset} />
        </div>

        {/* Results */}
        {filtered.length === 0 ? (
          <div className="py-24 text-center">
            <p className="font-cinzel text-2xl text-text-muted mb-4">No Properties Found</p>
            <p className="font-josefin text-text-muted text-sm mb-6">
              Try adjusting your filters to see more results.
            </p>
            <button
              onClick={handleReset}
              className="px-6 py-3 border border-gold text-gold font-josefin text-sm tracking-widest uppercase hover:bg-gold hover:text-bg transition-all"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((property, i) => (
              <AnimatedSection key={property.id} delay={Math.min(i * 0.07, 0.5)}>
                <PropertyCard property={property} />
              </AnimatedSection>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function PropertiesPage() {
  return (
    <Suspense fallback={<div className="pt-20 min-h-screen bg-bg" />}>
      <PropertiesContent />
    </Suspense>
  );
}
