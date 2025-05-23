import SectionTitle from '@/components/shared/SectionTitle';
import DestinationCard from '@/components/cards/DestinationCard';
import { destinations, regions } from '@/lib/placeholder-data';
import type { Region } from '@/lib/types';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Search, Filter } from 'lucide-react';

// This component would ideally be a client component if filters were interactive.
// For now, it's a server component displaying all data.
export default function DestinationsPage({
  searchParams,
}: {
  searchParams?: { query?: string; region?: string };
}) {
  const query = searchParams?.query || '';
  const selectedRegion = searchParams?.region || 'all';

  const filteredDestinations = destinations.filter(destination => {
    const matchesQuery = destination.name.toLowerCase().includes(query.toLowerCase()) ||
                         destination.description.toLowerCase().includes(query.toLowerCase());
    const matchesRegion = selectedRegion === 'all' || destination.region.toLowerCase().replace(/\s+/g, '-') === selectedRegion;
    return matchesQuery && matchesRegion;
  });

  return (
    <div className="space-y-12">
      <SectionTitle
        title="Explore Myanmar's Destinations"
        subtitle="Discover the diverse beauty and rich culture of Myanmar, from ancient cities to serene lakes and pristine beaches."
      />
      
      {/* Filter and Search Section - Non-interactive for now, but shows structure */}
      <div className="mb-8 p-6 bg-card rounded-lg shadow">
        <form method="GET" action="/destinations"> {/* Basic form for SSR filtering */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
            <div>
              <label htmlFor="query" className="block text-sm font-medium text-foreground mb-1">Search Destinations</label>
              <div className="relative">
                <Input type="text" name="query" id="query" placeholder="e.g., Bagan, Inle Lake" defaultValue={query} className="pl-10" />
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              </div>
            </div>
            <div>
              <label htmlFor="region" className="block text-sm font-medium text-foreground mb-1">Filter by Region</label>
              <Select name="region" defaultValue={selectedRegion}>
                <SelectTrigger id="region">
                  <SelectValue placeholder="All Regions" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Regions</SelectItem>
                  {regions.map((region: Region) => (
                    <SelectItem key={region.id} value={region.name.toLowerCase().replace(/\s+/g, '-')}>
                      {region.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <Button type="submit" className="bg-primary hover:bg-primary/90 text-primary-foreground md:mt-auto h-10">
              <Filter className="mr-2 h-4 w-4" /> Apply Filters
            </Button>
          </div>
        </form>
      </div>

      {filteredDestinations.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredDestinations.map(dest => (
            <DestinationCard key={dest.id} destination={dest} />
          ))}
        </div>
      ) : (
        <p className="text-center text-muted-foreground text-lg col-span-full">
          No destinations found matching your criteria. Try adjusting your search or filters.
        </p>
      )}
    </div>
  );
}
