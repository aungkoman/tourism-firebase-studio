import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, ArrowRight } from 'lucide-react';
import HeroSection from '@/components/shared/HeroSection';
import SectionTitle from '@/components/shared/SectionTitle';
import DestinationCard from '@/components/cards/DestinationCard';
import ExperienceCard from '@/components/cards/ExperienceCard';
import PromotionCard from '@/components/cards/PromotionCard';
import { destinations, experiences, promotions } from '@/lib/placeholder-data';

export default function HomePage() {
  return (
    <div className="space-y-16">
      <HeroSection
        title="Discover the Golden Land"
        subtitle="Your ultimate guide to the wonders of Myanmar. Plan your unforgettable journey today."
        imageUrl="https://placehold.co/1600x900.png"
        dataAiHint="myanmar landscape pagoda"
      >
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-lg">
          <Input
            type="search"
            placeholder="Where do you want to go?"
            className="h-12 text-lg bg-white/90 placeholder:text-muted-foreground text-foreground"
            aria-label="Search destinations"
          />
          <Button size="lg" className="h-12 bg-accent hover:bg-accent/90 text-accent-foreground w-full sm:w-auto">
            <Search className="mr-2 h-5 w-5" /> Search
          </Button>
        </div>
      </HeroSection>

      <section>
        <SectionTitle
          title="Top Destinations to Explore"
          subtitle="From ancient temples to pristine beaches, find your next adventure in Myanmar."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {destinations.slice(0, 4).map((dest) => (
            <DestinationCard key={dest.id} destination={dest} />
          ))}
        </div>
        <div className="text-center mt-8">
          <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            <Link href="/destinations">View All Destinations <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </section>

      <section>
        <SectionTitle
          title="Unforgettable Experiences"
          subtitle="Immerse yourself in the unique culture, nature, and adventures Myanmar has to offer."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {experiences.slice(0, 4).map((exp) => (
            <ExperienceCard key={exp.id} experience={exp} />
          ))}
        </div>
         <div className="text-center mt-8">
          <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            <Link href="/attractions">Discover More Experiences <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </section>
      
      <section className="bg-secondary/50 p-8 rounded-lg shadow-md">
        <SectionTitle
          title="AI Powered Trip Planner"
          subtitle="Let our smart AI craft a personalized itinerary for your dream Myanmar adventure. Just tell us your preferences and we'll handle the rest!"
        />
        <div className="text-center">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link href="/trip-planner">
              Plan Your Trip Now <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <section>
        <SectionTitle
          title="Special Offers & Promotions"
          subtitle="Grab the latest deals and make your Myanmar trip even more memorable."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {promotions.slice(0, 3).map((promo) => (
            <PromotionCard key={promo.id} promotion={promo} />
          ))}
        </div>
        <div className="text-center mt-8">
          <Button asChild variant="outline" size="lg" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
            <Link href="/promotions">See All Promotions <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
