"use client";

import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const stats = [
  { value: 500, suffix: "+", label: "Properties Handled", sublabel: "Across all segments" },
  { value: 12, suffix: "+", label: "Years of Excellence", sublabel: "Trusted since 2012" },
  { value: 2000, suffix: "+", label: "Happy Clients", sublabel: "And growing" },
  { value: 98, suffix: "%", label: "Client Satisfaction", sublabel: "5-star rated" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    const duration = 1500;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref} className="font-cinzel font-bold text-gold" style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}>
      {count}
      {suffix}
    </span>
  );
}

export default function StatsSection() {
  return (
    <section className="section-padding bg-bg px-6 relative overflow-hidden">
      {/* Background decorative element */}
      <div className="absolute inset-0 bg-gradient-to-r from-gold/3 via-transparent to-gold/3 pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <Counter value={stat.value} suffix={stat.suffix} />
              <p className="font-cinzel text-white font-medium text-sm tracking-widest mt-3 mb-1 uppercase">
                {stat.label}
              </p>
              <p className="font-josefin text-text-muted text-xs tracking-wide">{stat.sublabel}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
