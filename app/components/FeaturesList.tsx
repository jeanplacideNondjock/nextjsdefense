

import FeatureItem from "./FeatureItem";

export default function FeatureList() {
  const features = [
    "Mesure des signaux électrophysiologiques en temps réel",
    "Compatible laboratoire & extérieur",
    "Visualisation et export des données",
    "Solutions pour recherche & agriculture",
  ];

  return (
    <ul className="mt-6 space-y-3">
      {features.map((text, index) => (
        <FeatureItem key={index} text={text} />
      ))}
    </ul>
  );
}
