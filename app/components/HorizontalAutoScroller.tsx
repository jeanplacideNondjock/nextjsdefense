"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";

interface HorizontalScrollerProps {
  items: { title: string; description: string; image: string }[];
}

export default function HorizontalScroller({ items }: HorizontalScrollerProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll infini
  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const maxScroll = scrollRef.current.scrollWidth / 2; // moitié des éléments car on duplique
        if (scrollRef.current.scrollLeft >= maxScroll) {
          scrollRef.current.scrollLeft = 0;
        } else {
          scrollRef.current.scrollBy({ left: 2, behavior: "smooth" });
        }
      }
    }, 16); // ~60fps

    return () => clearInterval(interval);
  }, []);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="relative w-full select-none">
      {/* Carousel container */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scroll-smooth py-4 px-2 md:px-12 scrollbar-hide cursor-grab"
      >
        {/* On duplique les items pour créer l'effet boucle infinie */}
        {[...items, ...items].map((item, index) => (
          <div
            key={index}
            className="flex-none w-64 snap-start bg-white rounded-xl shadow-lg hover:scale-105 transition-transform cursor-pointer"
          >
            <div className="relative h-40 w-full rounded-t-xl overflow-hidden">
              <Image src={item.image} alt={item.title} fill className="object-cover" />
            </div>
            <div className="p-4">
              <h4 className="font-semibold text-green-700 mb-2">{item.title}</h4>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Flèches */}
      <button
        onClick={scrollLeft}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white shadow-lg p-3 rounded-full hidden md:flex z-10"
      >
        ◀
      </button>
      <button
        onClick={scrollRight}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white shadow-lg p-3 rounded-full hidden md:flex z-10"
      >
        ▶
      </button>
    </div>
  );
}
