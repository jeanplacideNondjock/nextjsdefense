"use client";

import { motion } from "framer-motion";

export default function StatsBarsAnimation() {
  const bars = [60, 80, 40]; // valeurs en % pour hauteur des barres

  return (
    <div className="flex justify-center items-end gap-6 h-32 md:h-40">
      {bars.map((height, i) => (
        <motion.div
          key={i}
          className="w-6 bg-green-700 rounded-lg"
          animate={{ height: [0, height, 0] }}
          transition={{
            duration: 1.5 + i * 0.3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
