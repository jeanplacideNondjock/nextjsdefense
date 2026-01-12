"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const benefits = [
  {
    title: "Real-time crop insights",
    description:
      "Measure plant health 24/7 so you can act before problems become visible.",
    imgSrc: "/background/back.webp", // ← remplace ici
  },
  {
    title: "Predict stress & disease",
    description:
      "Identify stresses, pests and disease early using biosignal patterns.",
    imgSrc: "/science/lab2.jpg", // ← remplace ici
  },
  {
    title: "Boost farm efficiency",
    description:
      "Optimize irrigation, inputs and scheduling for better yields.",
    imgSrc: "/background/back3.jpg", // ← remplace ici
  },
];

export default function BenefitsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 space-y-12 text-center">
        
        <h2 className="text-3xl font-semibold text-[#004F9F]">
          What this means for your farm
        </h2>

        <div className="grid gap-10 md:grid-cols-3 lg:gap-12">

          {benefits.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              className="flex flex-col items-center text-center space-y-5"
            >
              
              {/* IMAGE */}
              <div className="relative w-full h-50 md:h-55 lg:h-60 overflow-hidden rounded-xl shadow-md">
                <Image
                  src={item.imgSrc}
                  alt={item.title}
                  fill
                  className="object-cover object-center"
                />
              </div>

              {/* TITRE */}
              <h3 className="text-xl font-semibold text-gray-800">
                {item.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-gray-600">
                {item.description}
              </p>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
