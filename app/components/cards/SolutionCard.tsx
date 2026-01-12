
import { ReactNode } from "react";
import Image from "next/image";
import {motion} from 'framer-motion'
interface SolutionCardProps {
  title: string;
  description: string;
  icon?: ReactNode;
}

function SolutionCard({ title, description, image }: { title: string; description: string; image: string }) {
  return (
    <motion.div
      className="`min-w-[250px] bg-white rounded-xl shadow-lg overflow-hidden `flex-shrink-0 hover:shadow-2xl transition"
      whileHover={{ scale: 1.05 }}
    >
      <div className="relative h-40 w-full">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </motion.div>
  );
}
