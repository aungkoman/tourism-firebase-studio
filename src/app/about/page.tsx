import SectionTitle from '@/components/shared/SectionTitle';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { Users, Target, Eye } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="space-y-12">
      <SectionTitle
        title="About Wanderlust Myanmar"
        subtitle="Discover the story behind your trusted guide to the Golden Land."
      />

      <Card className="shadow-lg">
        <CardContent className="p-6 md:p-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative h-80 rounded-lg overflow-hidden">
              <Image 
                src="https://placehold.co/800x600.png" 
                alt="Team working on Wanderlust Myanmar" 
                layout="fill" 
                objectFit="cover"
                data-ai-hint="myanmar team travel" 
              />
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-primary mb-4">Our Story</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Wanderlust Myanmar was born from a deep love for the rich culture, breathtaking landscapes, and warm hospitality of Myanmar. Our mission is to share the magic of this incredible country with the world, making it easier for travelers to explore, discover, and create unforgettable memories.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                We believe in responsible tourism that benefits local communities and preserves the unique heritage of Myanmar. Our platform connects you with authentic experiences, verified local guides, and all the information you need for a seamless journey.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-3 gap-8">
        <Card className="text-center shadow-md hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="mx-auto bg-primary/10 text-primary rounded-full p-3 w-fit mb-2">
              <Target className="h-8 w-8" />
            </div>
            <CardTitle className="text-xl text-primary">Our Mission</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              To promote Myanmar as a premier travel destination, showcasing its diverse attractions and cultural richness while supporting sustainable tourism.
            </p>
          </CardContent>
        </Card>
        <Card className="text-center shadow-md hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="mx-auto bg-primary/10 text-primary rounded-full p-3 w-fit mb-2">
              <Eye className="h-8 w-8" />
            </div>
            <CardTitle className="text-xl text-primary">Our Vision</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              To be the most trusted and comprehensive resource for planning travel to Myanmar, inspiring explorers from around the globe.
            </p>
          </CardContent>
        </Card>
        <Card className="text-center shadow-md hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="mx-auto bg-primary/10 text-primary rounded-full p-3 w-fit mb-2">
              <Users className="h-8 w-8" />
            </div>
            <CardTitle className="text-xl text-primary">Our Team</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              A passionate group of travel enthusiasts, tech innovators, and Myanmar experts dedicated to crafting your perfect journey.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
