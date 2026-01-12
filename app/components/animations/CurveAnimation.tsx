"use client";

import { motion } from "framer-motion";

export default function CurveAnimation() {
  return (
    <motion.svg
      viewBox="0 0 224 126"
      className="w-full h-32 md:h-40"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        d="M224,0 C224,0 0,0 0,0 C0,0 0,126 0,126 C0,126 224,126 224,126 C224,126 224,0 224,0z"
        fill="none"
        stroke="#10B981" // vert similaire au site
        strokeWidth={6}
        strokeLinecap="round"
        animate={{ pathLength: [0, 1, 0] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.svg>
  );
}
