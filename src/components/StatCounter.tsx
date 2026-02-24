interface StatCounterProps {
  value: string;
  label: string;
}

export default function StatCounter({ value, label }: StatCounterProps) {
  return (
    <div className="text-center px-6 py-4">
      <div className="text-4xl md:text-5xl font-bold text-[#00AEEF]">{value}</div>
      <div className="mt-2 text-sm font-medium text-gray-500 uppercase tracking-wider">{label}</div>
    </div>
  );
}
