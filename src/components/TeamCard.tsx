import Image from "next/image";

interface TeamCardProps {
  name: string;
  title: string;
  bio?: string;
  imageSrc: string;
}

export default function TeamCard({ name, title, bio, imageSrc }: TeamCardProps) {
  return (
    <div className="text-center">
      <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden shadow-lg border-4 border-[#C9A84C]">
        <Image
          src={imageSrc}
          alt={name}
          fill
          className="object-cover object-top"
          sizes="192px"
        />
      </div>
      <div className="mt-4">
        <h3 className="text-xl font-semibold text-[#1B2A4A]">{name}</h3>
        <p className="text-[#C9A84C] font-medium text-sm mt-1">{title}</p>
        {bio && <p className="mt-3 text-gray-600 text-sm leading-relaxed max-w-sm mx-auto">{bio}</p>}
      </div>
    </div>
  );
}
