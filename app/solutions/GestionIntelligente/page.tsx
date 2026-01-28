'use client';

import TechnologySection from "../../components/section/TechnologySection";
import ServicesSection from "../../components/section/ServicesSection";

export default function BiotechnologyPage() {
  return (
   <main className="py-32 max-w-6xl mx-auto px-6">
  <div className="flex flex-col items-center justify-center space-y-24">
    {/* Section du titre */}
    <section className="flex flex-col items-center justify-center text-center w-full">
      <h1 className="text-5xl font-bold mb-6">Biotechnology</h1>
      <p className="text-lg text-gray-600 max-w-3xl">
        Cutting-edge biotechnology solutions powered by biological signal analysis.
      </p>
    </section>

    {/* Conteneur pour les autres sections avec centrage */}
    <div className="flex flex-col items-center justify-center w-full space-y-24">
      <div className="w-full flex justify-center">
        <TechnologySection />
      </div>
      
      <div className="w-full flex justify-center">
        <ServicesSection />
      </div>
    </div>
  </div>
</main>
  );
}
