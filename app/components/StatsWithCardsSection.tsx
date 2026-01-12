"use client";

import CurveAnimation from "./animations/CurveAnimation";
import ArrowAnimation from "./animations/ArrowAnimation";
import StatsBarsAnimation from "./animations/StatsBarsAnimation";
import HorizontalScroller from "./HorizontalAutoScroller";
import { solutions } from "../../data/solutions";

export default function StatsWithCardsSection() {
  return (
    <section className="relative py-24 bg-white">
      {/* Titre principal */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-4xl font-bold text-green-700 mb-4">
          Ready to revolutionize your product development and growing processes?
        </h2>
        <p className="text-gray-600 text-lg">
          Discover how our advanced agricultural solutions help farmers, breeders, and institutions achieve better results with AI, biosensing, and sustainable practices.
        </p>
      </div>

      {/* Courbe + flèche + stats alignés horizontalement */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-12 max-w-6xl mx-auto">
        <div className="flex-1">
          <CurveAnimation />
          <p className="mt-4 text-center text-gray-600 text-sm md:text-base">
            Smart Fertilisers
          </p>
        </div>

        <div className="flex-1">
          <ArrowAnimation />
          <p className="mt-4 text-center text-gray-600 text-sm md:text-base">
            Breeders / Seed Companies
          </p>
        </div>

        <div className="flex-1">
          <StatsBarsAnimation />
          <p className="mt-4 text-center text-gray-600 text-sm md:text-base">
            Real-time Analytics
          </p>
        </div>
      </div>

      {/* Titre introductif du carousel */}
      <div className="mt-20 text-center">
        <h3 className="text-3xl font-bold text-green-700 mb-4">
          Sustainable Agriculture Solutions
        </h3>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Explore our solutions through interactive cards designed to give you actionable insights and inspiration.
        </p>
      </div>

      {/* Carousel HorizontalScroller */}
      <div className="mt-12 max-w-6xl mx-auto">
        <HorizontalScroller items={solutions} />
      </div>
    </section>
  );
}
