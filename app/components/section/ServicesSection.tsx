

'use client';

import SectionHeader from "../ui/SectionHeader";
import ServiceCard from "../cards/ServicesCard";
import { services } from "../../../data/services";

export default function ServicesSection() {
  return (
    <section className="max-w-6xl mx-auto px-6">
      <SectionHeader
        title="Our Services"
        subtitle="What we offer to help agriculture and biotechnology sectors"
        center
      />
      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service) => (
          <ServiceCard
            key={service.title}
            title={service.title}
            description={service.description}
            icon={service.icon}
          />
        ))}
      </div>
    </section>
  );
}
