"use client";

import Image from "next/image";
import HeroSection from "../../components/HeroSection";
import MissionSection from "../../components/MissionSection";
import BenefitsSection from "../../components/BenefitsSection";
import DownloadDataSection from "../../components/DownloadDataSection";
export default function AcademicScientistSection() {
  return (
    <section className="max-w-full mx-auto px-6 lg:px-0  space-y-16">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <h2 className="text-3xl lg:text-4xl font-semibold text-[#0C322C]">
          Tools for Academics & Scientists
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          Advanced biosignal technology designed to support research,
          academia, plant physiology, AI-driven modeling and beyond.
        </p>
      </div>

      {/* Feature Block */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        
        {/* Image */}
        <div className="relative h-80 w-full rounded-lg overflow-hidden shadow-md">
          <Image
            src="/technology/science.webp"
            alt="Research Image"
            fill
            className="object-cover"
          />
        </div>
           
        {/* Text */}
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-[#0C322C]">
            Real-time Biosignal Monitoring
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Capture and analyze real-time physiological plant signals for
            research and experimental design. Built for labs, greenhouse
            facilities, and academic programs.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-600">
            <li>Continuous streaming data</li>
            <li>Custom output formats for machine learning</li>
            <li>Compatible with standard lab environments</li>
          </ul>
        </div>

      </div>

      {/* Call to action */}
      <div className="text-center">
        <a
          href="#"
          className="inline-block bg-[#0C322C] text-white px-6 py-3 rounded-md hover:opacity-90 transition"
        >
          Request Research Access
        </a>
             <HeroSection/>
              <MissionSection/>
              <BenefitsSection/>
              <DownloadDataSection/>
      </div>
    </section>
  );
}
