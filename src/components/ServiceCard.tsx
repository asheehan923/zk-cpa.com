import Image from "next/image";

interface ServiceCardProps {
  title: string;
  description: string;
  imageSrc?: string;
  icon?: React.ReactNode;
}

export default function ServiceCard({ title, description, imageSrc, icon }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow group border border-gray-100">
      {imageSrc && (
        <div className="relative h-48 w-full">
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, 25vw"
          />
          <div className="absolute inset-0 bg-[#2b3947]/25" />
        </div>
      )}
      <div className="p-6">
        {icon && (
          <div className="w-12 h-12 bg-[#E8F6FD] rounded-lg flex items-center justify-center mb-4 text-[#2b3947]">
            {icon}
          </div>
        )}
        <h3 className="text-lg font-semibold text-[#2b3947] mb-2">{title}</h3>
        <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
