interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export default function SectionTitle({ title, subtitle, className = '' }: SectionTitleProps) {
  return (
    <div className={`mb-8 text-center ${className}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2">
        {title}
      </h2>
      {subtitle && (
        <p className="text-md md:text-lg text-muted-foreground max-w-xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
