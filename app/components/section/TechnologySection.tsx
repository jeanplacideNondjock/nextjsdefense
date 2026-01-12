'use client';

import SectionHeader from "./../ui/SectionHeader";
import UseCaseCard from "./../cards/UseCaseCard";
import { useCases } from "../../../data/useCases";

export default function TechnologySection() {
  return (
    <section className="max-w-6xl mx-auto px-6">
      <SectionHeader title="our Technology" subtitle="How our biosensing solutions are applied in real life" center />
      <div className="grid md:grid-cols-3 gap-8">
        {useCases.map((uc) => (
          <UseCaseCard key={uc.title} title={uc.title} description={uc.description} image={uc.image} />
        ))}
      </div>
    </section>
  );
}
