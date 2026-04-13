"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search, MapPin } from "lucide-react";

const categories = ["Buy", "Sell", "Rent", "Lease"];
const types = ["Residential", "Commercial", "Industrial"];

export default function QuickSearch() {
  const [category, setCategory] = useState("Buy");
  const [type, setType] = useState("Residential");
  const [location, setLocation] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    const params = new URLSearchParams({
      category: category.toLowerCase(),
      type: type.toLowerCase(),
      ...(location && { location }),
    });
    router.push(`/properties?${params.toString()}`);
  };

  return (
    <section className="bg-surface py-0 -mt-px">
      <div className="max-w-5xl mx-auto px-6">
        <div className="bg-surface-elevated border border-border-dark p-8 -translate-y-12 shadow-2xl">
          {/* Category tabs */}
          <div className="flex gap-1 mb-6 border-b border-border-dark pb-5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-5 py-2.5 font-josefin text-sm tracking-[0.1em] uppercase transition-all duration-200 min-h-[44px] ${
                  category === cat
                    ? "bg-gold text-bg"
                    : "text-text-muted hover:text-gold"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search row */}
          <div className="flex flex-col md:flex-row gap-4">
            {/* Property type */}
            <div className="flex gap-2">
              {types.map((t) => (
                <button
                  key={t}
                  onClick={() => setType(t)}
                  className={`px-4 py-2.5 font-josefin text-sm tracking-wide border transition-all duration-200 min-h-[44px] whitespace-nowrap ${
                    type === t
                      ? "border-gold text-gold"
                      : "border-border-dark text-text-muted hover:border-gold/50 hover:text-gold/70"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>

            {/* Location input */}
            <div className="flex-1 relative">
              <MapPin size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gold" />
              <input
                type="text"
                placeholder="Enter sector or area..."
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                className="w-full h-full min-h-[44px] bg-surface border border-border-dark text-text-secondary font-josefin text-sm pl-10 pr-4 focus:outline-none focus:border-gold/50 transition-colors placeholder:text-text-muted"
              />
            </div>

            {/* Search button */}
            <button
              onClick={handleSearch}
              className="flex items-center justify-center gap-2 px-7 py-3 bg-gold text-bg font-josefin text-sm font-500 tracking-[0.15em] uppercase hover:bg-gold-accent transition-colors min-h-[44px]"
            >
              <Search size={16} />
              Search
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
