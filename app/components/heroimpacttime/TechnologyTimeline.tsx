

'use client';

import { motion } from "framer-motion";
import { FaSeedling, FaChartLine, FaBrain, FaLeaf } from "react-icons/fa";

const steps = [
  {
    title: "Collect Biological Signals",
    description:
      "Capture real-time biological and environmental signals from crops, soil, and food systems.",
    icon: <FaSeedling />,
  },
  {
    title: "Analyze & Interpret",
    description:
      "Advanced biosignal processing transforms raw data into meaningful insights.",
    icon: <FaChartLine />,
  },
  {
    title: "Intelligent Decision-Making",
    description:
      "AI-powered models support smarter agricultural and biotechnological decisions.",
    icon: <FaBrain />,
  },
  {
    title: "Act & Optimize",
    description:
      "Optimize yields, reduce waste, and improve sustainability across the value chain.",
    icon: <FaLeaf />,
  },
];

export default function TechnologyTimeline() {
  return (
    <section className="py-24 bg-green-50">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-green-700 mb-4">
            How Our Technology Works
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From biological signal collection to actionable intelligence for
            agriculture and biotechnology.
          </p>
        </div>

        {/* Timeline */}
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition text-center"
            >
              <div className="text-4xl text-green-600 mb-4 flex justify-center">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
