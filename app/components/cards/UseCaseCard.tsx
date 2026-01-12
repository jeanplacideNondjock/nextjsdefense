"use client";

import Image from "next/image";

interface UseCaseCardProps {
  title: string;
  description: string;
  image: string;
}

export default function UseCaseCard({ title, description, image }: UseCaseCardProps) {
  return (
    <div className="group rounded-xl overflow-hidden border bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer">
      
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 `bg-gradient-to-t from-green-700/20 via-green-700/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Text */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-green-700 mb-2 group-hover:underline group-hover:text-green-800 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
