

'use client';

import { useEffect, useState } from "react";

const stats = [
  { label: "Farmers Reached", value: 1200 },
  { label: "Crops Monitored", value: 3500 },
  { label: "Projects Completed", value: 28 },
];

export default function ImpactStats() {
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    stats.forEach((stat, index) => {
      let start = 0;
      const end = stat.value;
      const duration = 2000;
      const increment = Math.ceil(end / (duration / 50));

      const counter = setInterval(() => {
        start += increment;
        if (start >= end) {
          start = end;
          clearInterval(counter);
        }
        setCounts((prev) => {
          const newCounts = [...prev];
          newCounts[index] = start;
          return newCounts;
        });
      }, 50);
    });
  }, []);

  return (
    <section className="bg-gray-50 py-32">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-12 text-center">
        {stats.map((stat, index) => (
          <div key={stat.label}>
            <p className="text-4xl font-bold text-green-600">{counts[index]}</p>
            <p className="text-gray-600 mt-2">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
