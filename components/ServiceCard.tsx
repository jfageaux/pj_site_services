interface ServiceCardProps {
  title: string;
  icon: string;
  items: string[];
}

export default function ServiceCard({ title, icon, items }: ServiceCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="text-3xl mb-3">{icon}</div>
      <h3 className="text-lg font-bold text-[#1c2b3a] mb-3">{title}</h3>
      <ul className="space-y-1">
        {items.map((item) => (
          <li key={item} className="text-sm text-gray-600 flex items-start gap-2">
            <span className="text-[#e8813a] mt-0.5">›</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
