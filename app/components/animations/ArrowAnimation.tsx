"use client";

import { motion } from "framer-motion";

export default function ArrowAnimation() {
  return (
    <motion.div
      className="flex justify-center"
      animate={{ y: [0, 10, 0] }}
      transition={{
        duration: 1.2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <svg
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#10B981"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="inline-block"
      >
        <line x1="12" y1="5" x2="12" y2="19" />
        <polyline points="19 12 12 19 5 12" />
      </svg>
    </motion.div>
  );
}
