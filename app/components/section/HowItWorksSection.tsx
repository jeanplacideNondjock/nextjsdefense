"use client";

import Image from "next/image";
import Link from "next/link";
import { TiArrowRightOutline } from "react-icons/ti";

export default function HowItWorksSection() {
  return (
    <section className="py-32 bg-blue-900">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

        {/* LEFT CONTENT */}
        <div>

          {/* Small title */}
          <p className="text-sm font-medium text-emerald-600 uppercase tracking-wide">
            How it works
          </p>

          {/* Main title */}
          <h2 className="mt-4 text-4xl md:text-5xl font-bold `text-slate-900 leading-tight max-w-xl text-white">
            Sustainable agriculture solutions powered by biosignals
          </h2>

          {/* Green separator */}
          <div className="mt-6 w-20 h-1 bg-emerald-600" />

          {/* Large text */}
          <p className="mt-8 text-lg `text-slate-700 max-w-2xl leading-relaxed text-justify text-white">
           Plants communicate internally using electrical, mechanical and chemical signals. They respond to external changes with characteristic electrical wave patterns. By continuously monitoring selected plants in each field, which is normally about 8 plants per hectare, throughout the crop cycle, our technology provides real-time data on crop health, early detection of crop stress and insights into responses to crop treatments, allowing you to respond effectively to plants’ needs. Using innovative electronics and AI, Vivent Biosensors detects abiotic stresses, like drought and nutrient deficits, and in some crops, biotic stresses, such as nematodes and aphids. Vivent Biosignals crop health metrics integrate with decision support tools, enabling growers to optimise conditions quickly and providing real-time evidence of crop treatment efficacy. This leads to increased yields and environmentally preferable crop protection.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/brochure.pdf"
              className="px-6 py-3 rounded-xl bg-emerald-600 text-white font-medium hover:bg-emerald-700 transition"
            >
              Download brochure
            </Link>

            <Link
              href="/solutions"
              className="px-6 py-3 rounded-xl border border-slate-300 text-white hover:bg-slate-50 transition flex justify-between items-center gap-4"
            >
              Discover more
              <TiArrowRightOutline />
            </Link>
          </div>
        </div>

        {/* RIGHT VISUAL */}
        <div className="relative">
          <Image
            src="/industries/whitepaper.png"
            alt=""
            width={600}
            height={600}
            className="object-contain"
            priority
          />
        </div>

      </div>
    </section>
  );
}
