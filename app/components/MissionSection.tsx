

"use client";

export default function MissionSection() {
  return (
    <section className="w-full bg-white py-20 px-6">
      <div className="max-w-5xl mx-auto text-center space-y-10">
        
        {/* Sous-titre vert */}
        <h3 className="text-xl md:text-2xl font-medium text-[#8BC53F]">
          Plants are talking, we let you listen in
        </h3>

        {/* Titre principal bleu */}
        <h1 className="text-3xl md:text-5xl font-semibold leading-tight text-[#004F9F]">
          Harnessing biosignals to make agriculture more<br className="hidden md:block" />
          sustainable
        </h1>

        {/* Paragraphe principal */}
        <p className="text-lg md:text-xl text-gray-800 leading-relaxed">
          At Vivent Biosignals, we believe everyone deserves access to healthy food and a thriving planet.
          That’s why we help crops speak for themselves. By tapping into plant’s own signalling network,
          our advanced <span className="font-semibold">biosensors</span> and <span className="font-semibold">AI algorithms</span> decode how
          crops respond to their environment—in real-time and often well before visual symptoms.
          If you are farming in fields, greenhouses, or indoor farms, developing next-generation crop treatments
          or biostimulants, breeding more resilient plant varieties, or advancing cutting-edge plant science:
        </p>

        {/* Phrase centrale */}
        <p className="text-lg md:text-xl text-gray-900 italic">
          … our technology shows you what plants need, when they need it.
        </p>

        {/* Deuxième paragraphe */}
        <p className="text-lg md:text-xl text-gray-800 leading-relaxed">
          <span className="font-semibold">Make Plant-Driven Decisions.</span> When you measure crop health 24/7,
          you can manage it more precisely. The result? Better yields, smarter use of resources and a lighter
          environmental footprint. Let’s make agriculture more efficient, resilient, and plant-powered.
          After all, plants know best!
        </p>
      </div>
    </section>
  );
}
