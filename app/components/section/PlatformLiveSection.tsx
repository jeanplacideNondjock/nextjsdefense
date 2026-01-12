"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { platformKeywords } from "../../../data/platformkeywords";

export default function PlatformLiveSection() {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = platformKeywords[index];
    let timeout: NodeJS.Timeout;

    if (!deleting && text.length < current.length) {
      timeout = setTimeout(() => {
        setText(current.slice(0, text.length + 1));
      }, 80);
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(() => {
        setText(current.slice(0, text.length - 1));
      }, 40);
    } else if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), 1200);
    } else if (deleting && text === "") {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % platformKeywords.length);
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, index]);

  return (
   <section className="py-32 bg-slate-50">
  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">

 <div className="relative">
  <Image
    src="/industries/computerp.png"
    alt="Platform dashboard"
    width={720}
    height={480}
    className="
      relative
      z-0
    bg-transparent
   
    "
  />

  {/* Ombre diffuse sous l'ordi */}
  <div className="
    absolute
    -bottom-10
    left-1/2
    -translate-x-1/2
    w-[80%]
    h-16
    bg-black/10
    blur-2xl
    rounded-full
  " />
</div>



    {/* Texte - DROITE */}
    <div className="order-1 md:order-2">
      <p className="text-blue-600 text-sm font-semibold mb-4">
        Our Platform
      </p>

      <h2 className="text-4xl md:text-5xl font-semibold mb-6">
        One platform for{" "}
        <span className="text-emerald-600">
          {text}
          <span className="animate-pulse">|</span>
        </span>
      </h2>

      <p className="text-slate-600 max-w-md">
        Our biosensing platform captures real-time plant signals and turns
        them into actionable intelligence across agricultural systems.
      </p>
    </div>

  </div>
</section>

  );
}
