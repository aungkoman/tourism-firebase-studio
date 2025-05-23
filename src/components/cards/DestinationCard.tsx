import Image from 'next/image';
import Link from 'next/link';
import type { Destination } from '@/lib/types';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin } from 'lucide-react';

interface DestinationCardProps {
  destination: Destination;
}

export default function DestinationCard({ destination }: DestinationCardProps) {
  return (
    <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
      <CardHeader className="p-0 relative h-48 w-full">
        <Image
          src={destination.imageUrl}
          alt={destination.name}
          layout="fill"
          objectFit="cover"
          data-ai-hint={destination.dataAiHint}
        />
      </CardHeader>
      <CardContent className="p-6 flex-grow">
        <CardTitle className="text-xl font-semibold mb-2 text-primary group-hover:text-accent transition-colors">
          {destination.name}
        </CardTitle>
        <p className="text-sm text-muted-foreground mb-3 line-clamp-3">{destination.description}</p>
        <div className="flex items-center text-xs text-muted-foreground">
          <MapPin className="w-3 h-3 mr-1.5 text-primary" />
          <span>{destination.region}</span>
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button asChild variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
          <Link href={`/destinations/${destination.id}`}>Explore</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
