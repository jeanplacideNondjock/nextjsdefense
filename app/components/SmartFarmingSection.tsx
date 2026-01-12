

"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type SolutionItem = {
  label: string;
  image: string;
};

interface SmartFarmingSectionProps {
  title?: string;
  items: SolutionItem[];
}

export default function SmartFarmingSection({
  title = "Smart farming solutions",
  items,
}: SmartFarmingSectionProps) {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Carousel */}
        <div className="relative w-full overflow-hidden mb-10">
          <motion.div
            className="flex gap-12 w-max mx-auto"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 30,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {[...items, ...items].map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center gap-4 shrink-0"
              >
                <div className="relative w-40 h-40 rounded-full overflow-hidden border border-slate-200">
                  <Image
                    src={item.image}
                    alt={item.label}
                    fill
                    className="object-cover"
                  />
                </div>
                <span className="text-sm font-medium text-slate-700 whitespace-nowrap">
                  {item.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Section title */}
        <h2 className="text-3xl font-bold text-blue-800">{title}</h2>
      </div>
    </section>
  );
}
