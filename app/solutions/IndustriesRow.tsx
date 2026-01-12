"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { industries } from "../../data/industries";


 type Item = {
  label:string;
  image:string;
 };
export default function IndustriesRow({items}:{items: Item[]}) {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Tag bleu */}
        <p className="text-blue-600 text-sm font-semibold mb-10">
          Designed for
        </p>

        {/* Carousel */}
        <div className="relative w-full overflow-hidden">
          <motion.div
            className="flex gap-12 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 30,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {[...industries, ...industries].map((item, index) => (
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

      </div>
    </section>
  );
}
