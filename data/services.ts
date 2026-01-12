import { ReactNode } from "react";

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: ReactNode;
}

export const services: Service[] = [
  {
    id: "ag-inputs",
    title: "Agricultural Inputs",
    description:
      "Real-time biosensing for seeds, soil health, and crop monitoring.",
    icon: 'FaSeedling ',
  },
  {
    id: "biotech",
    title: "Biotechnology Analysis",
    description:
      "Advanced biological signal intelligence for research and innovation.",
    icon: 'FaMicroscope',
  },
  {
    id: "sustainability",
    title: "Sustainable Farming",
    description:
      "Data-driven insights to improve yields and environmental impact.",
    icon: 'FaLeaf ',
  },
];
