

'use client';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  center?: boolean;
}

export default function SectionHeader({ title, subtitle, center = false }: SectionHeaderProps) {
  return (
    <div className={`mb-12 ${center ? 'text-center' : ''}`}>
      <h2 className="text-4xl font-bold mb-4">{title}</h2>
      {subtitle && <p className="text-gray-600 text-lg">{subtitle}</p>}
    </div>
  );
}
