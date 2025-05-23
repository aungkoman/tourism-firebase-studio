import SectionTitle from '@/components/shared/SectionTitle';
import ExperienceCard from '@/components/cards/ExperienceCard';
import { experiences } from '@/lib/placeholder-data';
import type { Experience } from '@/lib/types';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Filter } from 'lucide-react';

const categories = [
  'All Categories',
  'Nature & Adventure',
  'Culture & Heritage',
  'Beaches & Islands',
  'Festivals & Events',
  'Local Cuisine & Markets',
  'Wellness & Spiritual',
];

export default function AttractionsPage({
  searchParams,
}: {
  searchParams?: { category?: string };
}) {
  const selectedCategory = searchParams?.category || 'All Categories';

  const filteredExperiences = experiences.filter(experience => {
    return selectedCategory === 'All Categories' || experience.category === selectedCategory;
  });

  return (
    <div className="space-y-12">
      <SectionTitle
        title="Attractions & Experiences"
        subtitle="Dive into the heart of Myanmar with diverse activities and sights, from thrilling adventures to serene cultural encounters."
      />

      <div className="mb-8 p-6 bg-card rounded-lg shadow">
        <form method="GET" action="/attractions">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
            <div className="md:col-span-2">
              <label htmlFor="category" className="block text-sm font-medium text-foreground mb-1">Filter by Category</label>
              <Select name="category" defaultValue={selectedCategory}>
                <SelectTrigger id="category">
                  <SelectValue placeholder="All Categories" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map(category => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <Button type="submit" className="bg-primary hover:bg-primary/90 text-primary-foreground h-10">
              <Filter className="mr-2 h-4 w-4" /> Apply Filter
            </Button>
          </div>
        </form>
      </div>

      {filteredExperiences.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredExperiences.map(exp => (
            <ExperienceCard key={exp.id} experience={exp} />
          ))}
        </div>
      ) : (
        <p className="text-center text-muted-foreground text-lg col-span-full">
          No attractions or experiences found for the selected category.
        </p>
      )}
    </div>
  );
}
