"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { solutions } from "../../data/solutions";

export default function SolutionsCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll infini fluide
  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const el = scrollRef.current;
        const half = el.scrollWidth / 2;

        if (el.scrollLeft >= half) {
          el.style.scrollBehavior = "auto";
          el.scrollLeft = 0; // reset invisible
          el.style.scrollBehavior = "smooth";
        } else {
          el.scrollBy({ left: 300, behavior: "smooth" });
        }
      }
    }, 1800);

    return () => clearInterval(interval);
  }, []);

  const scrollLeft = () => scrollRef.current?.scrollBy({ left: -300, behavior: "smooth" });
  const scrollRight = () => scrollRef.current?.scrollBy({ left: 300, behavior: "smooth" });

  return (
    <div className="relative w-full select-none">
      
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold">Sustainable Agriculture Solutions</h2>
        <p className="text-gray-600 mt-3">Powered by AI, designed for real-world impact.</p>
      </div>

      <button onClick={scrollLeft} className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white shadow-lg p-3 rounded-full hidden md:flex">
        ←
      </button>
      <button onClick={scrollRight} className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white shadow-lg p-3 rounded-full hidden md:flex">
        →
      </button>

      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scroll-smooth px-2 md:px-12 py-4 scrollbar-hide"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {solutions.concat(solutions).map((item, index) => (
          <div
            key={index}
            className="min-w-65 snap-start bg-white rounded-xl shadow-md hover:shadow-xl transition p-4 shrink-0"
          >
            <div className="relative w-full h-40 rounded-lg overflow-hidden mb-4">
              <Image src={item.image} alt={item.title} fill className="object-cover" />
            </div>
            <h3 className="text-lg font-bold">{item.title}</h3>
            <p className="text-gray-600 text-sm mt-2">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
