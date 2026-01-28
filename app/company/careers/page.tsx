// components/sections/HeroViventStyle.tsx
'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";

export default function HeroViventStyle() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center justify-center">

      {/* Background image avec animation subtile */}
      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: 1.05 }}
        transition={{
          duration: 25,
          ease: "linear",
          repeat: Infinity,
          repeatType: "mirror",
        }}
        className="absolute inset-0"
      >
        <Image
          src="/hero/hero-biotech.jpg"
          alt="Sustainable agriculture technology in Africa"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>

      {/* Overlay avec gradient */}
      <div className="absolute inset-0 `bg-gradient-to-r from-gray-900/85 via-gray-900/70 to-transparent" />
      <div className="absolute inset-0 `bg-gradient-to-t from-gray-900/30 via-transparent to-gray-900/20" />

      {/* Contenu principal - CENTRÉ */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="text-center"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-10">
            <span className="text-sm text-white font-medium tracking-widest">
              AFRICA NATURE INITIATIVE
            </span>
          </div>

          {/* Titre principal */}
          <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 leading-tight">
            <span className="block">DO YOU WANT TO HELP US MAKE AGRICULTURE MORE SUSTAINABLE?</span>
            <span className="block text-emerald-400 mt-4">We will help you succeed at making a real difference.</span>
          </h1>

          {/* Sous-titre */}
          <p className=" text-gray-200 text-xl md:text-2xl mb-12 leading-relaxed max-w-3xl mx-auto">
            Des solutions innovantes pour transformer l&apos;agriculture africaine 
            vers plus de durabilité et de résilience.
            <span className="block mt-6 text-lg text-emerald-300 font-medium">
              Africa Nature - Cultivons l&apos;avenir ensemble
            </span>
          </p>

          {/* CTA Buttons - BOUTONS PLUS CONSEQUENTS */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              href="/solutions"
              className="group inline-flex items-center justify-center gap-3 px-12 py-5 bg-emerald-600 text-white text-lg font-semibold rounded-xl hover:bg-emerald-700 transition-all duration-300 shadow-2xl hover:shadow-3xl hover:scale-105 active:scale-95 min-w-62.5"
            >
              <span>Découvrir nos solutions</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </Link>
            
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-3 px-12 py-5 bg-white/10 backdrop-blur-lg text-white text-lg font-semibold rounded-xl border-2 border-white/30 hover:bg-white/20 hover:border-white/50 transition-all duration-300 hover:scale-105 active:scale-95 min-w-62.5"
            >
              <span>Nous contacter</span>
              <Play className="w-5 h-5" />
            </Link>
          </div>

          {/* Quick stats - PLUS VISIBLE */}
          <div className="grid grid-cols-3 gap-8 mt-20 pt-12 border-t border-white/20 max-w-2xl mx-auto">
            {[
              { value: '500K+', label: 'Agriculteurs formés' },
              { value: '40%', label: 'Économie d\'eau' },
              { value: '15+', label: 'Pays partenaires' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-300 text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
      >
        <div className="flex flex-col items-center">
          <span className="text-xs text-gray-300 mb-3 tracking-wider font-medium">
            EXPLORER
          </span>
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-px h-16 `bg-gradient-to-b from-emerald-400 via-emerald-300 to-transparent"
          />
        </div>
      </motion.div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 inset-x-0 h-40 `bg-gradient-to-t from-gray-900 to-transparent" />
    </section>
  );
}