"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroPremium() {
  return (
    <section className="relative h-screen w-full overflow-hidden">

      {/* 1️⃣ Background animé */}
      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: 1.08 }}
        transition={{
          duration: 20,
          ease: "linear",
          repeat: Infinity,
          repeatType: "mirror",
        }}
        className="absolute inset-0"
      >
        <Image
          src="/hero/hero-agriculture.jpg"
          alt="Sustainable agriculture technology"
          fill
          priority
          className="object-cover"
        />
      </motion.div>

      {/* 2️⃣ Overlay animé (gradient respirant) */}
      <motion.div
        initial={{ opacity: 0.55 }}
        animate={{ opacity: 0.75 }}
        transition={{
          duration: 6,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "mirror",
        }}
        className="absolute inset-0 `bg-gradient-to-r from-black/70 via-black/40 to-transparent"
      />

      {/* 3️⃣ Contenu */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="max-w-xl"
        >
          <p className="text-emerald-400 text-sm uppercase tracking-widest mb-4">
            Agricultural Intelligence Platform
          </p>

          <h1 className="text-white text-4xl md:text-6xl font-semibold leading-tight mb-6">
            Data-driven agriculture for a sustainable future
          </h1>

          <p className="text-slate-200 text-lg mb-8">
            We combine advanced sensing, AI and biological intelligence
            to help farmers, institutions and governments make better decisions.
          </p>

          <div className="flex items-center gap-4">
            <Link
              href="/solutions"
              className="px-6 py-3 rounded-xl bg-emerald-600 text-white font-medium hover:bg-emerald-700 transition"
            >
              Explore solutions
            </Link>

            <Link
              href="/technology"
              className="px-6 py-3 rounded-xl border border-white/40 text-white hover:bg-white/10 transition"
            >
              Our technology
            </Link>
          </div>
        </motion.div>
      </div>

      {/* 4️⃣ Fade bas */}
      <div className="absolute bottom-0 inset-x-0 h-32 `bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
