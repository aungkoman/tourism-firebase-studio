import Image from 'next/image';
import Link from 'next/link';
import type { Experience } from '@/lib/types';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Zap } from 'lucide-react';

interface ExperienceCardProps {
  experience: Experience;
}

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
      <CardHeader className="p-0 relative h-48 w-full">
        <Image
          src={experience.imageUrl}
          alt={experience.name}
          layout="fill"
          objectFit="cover"
          data-ai-hint={experience.dataAiHint}
        />
      </CardHeader>
      <CardContent className="p-6 flex-grow">
        <CardTitle className="text-lg font-semibold mb-2 text-primary">{experience.name}</CardTitle>
        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{experience.description}</p>
         <div className="flex items-center text-xs text-muted-foreground">
          <Zap className="w-3 h-3 mr-1.5 text-accent" />
          <span>{experience.category}</span>
        </div>
      </CardContent>
       <CardFooter className="p-6 pt-0">
        {/* Link can be updated if individual experience pages are created */}
        <Button asChild variant="outline" className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground">
          <Link href={`/attractions#${experience.id}`}>Learn More</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
