interface BenefitCardProps {
  title: string;
  description: string;
}

export default function BenefitCard({ title, description }: BenefitCardProps) {
  return (
    <div className="bg-[#1c2b3a] text-white rounded-lg p-6">
      <h3 className="text-lg font-bold text-[#e8813a] mb-2">{title}</h3>
      <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
    </div>
  );
}
