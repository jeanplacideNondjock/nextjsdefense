"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[85vh] flex items-center justify-center overflow-hidden">

      {/* BG animé */}
      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: 1.05 }}
        transition={{ duration: 12, repeat: Infinity, repeatType: "reverse" }}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/science/lab1.jpg')"
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 `bg-gradient-to-b from-[#003E7D]/90 to-[#003E7D]/70" />

      {/* Contenu */}
      <div className="relative text-center text-white px-4 max-w-4xl space-y-6">
        
        <h1 className="text-3xl md:text-5xl font-semibold leading-snug">
          Understanding Crops Through Science
        </h1>

        <p className="text-xl md:text-3xl text-[#9CE62A] font-medium">
          Empowering Education, Research & Sustainable Farming
        </p>

        <p className="max-w-2xl mx-auto text-lg text-gray-200">
          We provide scientific tools, data and training materials to help students,
          researchers and agronomists explore plant physiology, biosignals, and
          sustainable agricultural practices.
        </p>

        {/* CTA */}
        <div className="flex items-center gap-6 justify-center pt-4">
          <Link
            href="/programs"
            className="px-6 md:px-8 py-3 rounded-full text-lg font-medium bg-[#9CE62A] text-[#003E7D] hover:opacity-90 transition"
          >
            Educational Programs
          </Link>

          <Link
            href="/resources"
            className="px-6 md:px-8 py-3 rounded-full text-lg font-medium border-2 border-white hover:bg-white hover:text-[#003E7D] transition"
          >
            Scientific Resources
          </Link>
        </div>

      </div>
    </section>
  );
}
