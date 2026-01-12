"use client";

import { motion } from "framer-motion";
import { solutions } from "../../../data/solutions";

export default function SolutionsSection() {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {solutions.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="mb-20 max-w-3xl"
          >
            <p className="text-blue-600 text-sm font-semibold uppercase tracking-wide">
              {item.tag}
            </p>

            <h2 className="text-4xl font-bold mt-3">
              {item.title}
            </h2>

            <p className="mt-4 text-slate-600 text-lg">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
