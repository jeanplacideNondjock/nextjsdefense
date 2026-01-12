

interface Props {
  text: string;
}

export default function FeatureItem({ text }: Props) {
  return (
    <li className="flex items-center gap-3 text-lg text-white">
      <div className="w-3 h-3 bg-viventTeal rounded-full"></div>
      {text}
    </li>
  );
}
