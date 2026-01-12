"use client";

import UseCaseCard from "../cards/UseCaseCard";
import { useCases } from "../../../data/useCases";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function UseCasesSection() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  if (inView) controls.start("visible");

  return (
    <section className="py-24 bg-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-green-700 mb-4">
            Agriculture
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Practical applications of biosensing technology across agriculture
            and food systems.
          </p>
        </div>

        {/* Grid */}
        <motion.div
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
          initial="hidden"
          animate={controls}
          variants={{
            visible: { transition: { staggerChildren: 0.15 } },
          }}
        >
          {useCases.map((useCase) => (
            <UseCaseCard
              key={useCase.title}
              title={useCase.title}
              description={useCase.description}
              image={useCase.image}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
