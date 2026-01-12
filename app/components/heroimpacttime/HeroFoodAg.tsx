"use client";
import Image from "next/image";

export default function HeroFoodAg() {
  return (
    <section className="relative w-full h-[80vh] flex items-center justify-center">
      {/* Image de fond */}
      <div className="absolute inset-0">
        <Image
          src="/hero-agriculture.jpg"
          alt="Agriculture background"
          fill
          className="object-cover object-center"
          priority // charge en priorité pour haute qualité
        />
        <div className="absolute inset-0 bg-black/40"></div> {/* Overlay sombre pour contraste */}
      </div>

      {/* Contenu */}
      <div className="relative z-10 text-center px-6">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
          Solutions for <span className="text-green-500">food & ag inputs supplier</span>
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-8">
          Shaping the future of sustainable and smart agriculture
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition">
            Get in touch
          </button>
          <button className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition">
            Download our brochure
          </button>
        </div>
      </div>
    </section>
  );
}
