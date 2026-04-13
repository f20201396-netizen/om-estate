"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface PropertyGalleryProps {
  images: string[];
  title: string;
}

export default function PropertyGallery({ images, title }: PropertyGalleryProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const openLightbox = (i: number) => {
    setActiveIndex(i);
    setLightboxOpen(true);
  };

  const prev = () => setActiveIndex((i) => (i - 1 + images.length) % images.length);
  const next = () => setActiveIndex((i) => (i + 1) % images.length);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
        {images.map((src, i) => (
          <div
            key={i}
            className={`relative cursor-pointer overflow-hidden group ${
              i === 0 ? "col-span-2 md:col-span-2 row-span-2 h-80" : "h-40"
            }`}
            onClick={() => openLightbox(i)}
          >
            <Image
              src={src}
              alt={`${title} — image ${i + 1}`}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-bg/0 group-hover:bg-bg/20 transition-colors" />
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-bg/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setLightboxOpen(false)}
        >
          <button
            onClick={(e) => { e.stopPropagation(); setLightboxOpen(false); }}
            className="absolute top-6 right-6 text-white hover:text-gold transition-colors"
          >
            <X size={28} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-6 top-1/2 -translate-y-1/2 text-white hover:text-gold transition-colors p-2"
          >
            <ChevronLeft size={36} />
          </button>
          <div
            className="relative w-full max-w-4xl aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[activeIndex]}
              alt={`${title} — ${activeIndex + 1}`}
              fill
              className="object-contain"
            />
          </div>
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-6 top-1/2 -translate-y-1/2 text-white hover:text-gold transition-colors p-2"
          >
            <ChevronRight size={36} />
          </button>
          <p className="absolute bottom-6 left-1/2 -translate-x-1/2 font-josefin text-sm text-text-muted">
            {activeIndex + 1} / {images.length}
          </p>
        </div>
      )}
    </>
  );
}
