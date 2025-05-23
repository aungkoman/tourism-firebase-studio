import Image from 'next/image';

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  imageUrl: string;
  dataAiHint: string;
  children?: React.ReactNode; // For call to action buttons or search bars
}

export default function HeroSection({ title, subtitle, imageUrl, dataAiHint, children }: HeroSectionProps) {
  return (
    <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-xl mb-12">
      <Image
        src={imageUrl}
        alt={title}
        layout="fill"
        objectFit="cover"
        data-ai-hint={dataAiHint}
        className="brightness-50"
        priority
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 bg-black/30">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-md">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-2xl text-gray-200 mb-8 drop-shadow-sm max-w-2xl">
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </div>
  );
}
