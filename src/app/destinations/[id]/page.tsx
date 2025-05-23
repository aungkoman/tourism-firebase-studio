import Image from 'next/image';
import { destinations } from '@/lib/placeholder-data';
import { Button } from '@/components/ui/button';
import { ArrowLeft, MapPin, Star, Sun, Info } from 'lucide-react';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import SectionTitle from '@/components/shared/SectionTitle';

export async function generateStaticParams() {
  return destinations.map(destination => ({
    id: destination.id,
  }));
}

export default function DestinationDetailPage({ params }: { params: { id: string } }) {
  const destination = destinations.find(d => d.id === params.id);

  if (!destination) {
    return (
      <div className="text-center py-10">
        <h1 className="text-2xl font-semibold">Destination not found</h1>
        <Button asChild variant="link" className="mt-4 text-primary">
          <Link href="/destinations">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Destinations
          </Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-12">
      <div className="relative h-[300px] md:h-[450px] rounded-lg overflow-hidden shadow-xl">
        <Image
          src={destination.imageUrl}
          alt={destination.name}
          layout="fill"
          objectFit="cover"
          data-ai-hint={destination.dataAiHint}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 p-6 md:p-10">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-2 drop-shadow-lg">{destination.name}</h1>
          <div className="flex items-center text-lg text-gray-200 drop-shadow-md">
            <MapPin className="w-5 h-5 mr-2" />
            <span>{destination.region}</span>
          </div>
        </div>
      </div>
      
      <Button asChild variant="outline" className="mb-8">
        <Link href="/destinations">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to All Destinations
        </Link>
      </Button>

      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl text-primary">About {destination.name}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-foreground/80 leading-relaxed">
            {destination.longDescription || destination.description}
          </p>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-2 gap-8">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl text-primary flex items-center"><Star className="mr-2 h-5 w-5" /> Experience Highlights</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-foreground/80">
              {destination.highlights.map((highlight, index) => (
                <li key={index}>{highlight}</li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl text-primary flex items-center"><Info className="mr-2 h-5 w-5" /> Travel Tips</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-foreground/80">
              {destination.travelTips.map((tip, index) => (
                <li key={index}>{tip}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      {destination.gallery && destination.gallery.length > 0 && (
        <section>
          <SectionTitle title="Photo Gallery" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {destination.gallery.map((image, index) => (
              <div key={index} className="relative h-64 rounded-lg overflow-hidden shadow-md hover:scale-105 transition-transform duration-300">
                <Image
                  src={image.url}
                  alt={`${destination.name} gallery image ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  data-ai-hint={image.dataAiHint}
                />
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
