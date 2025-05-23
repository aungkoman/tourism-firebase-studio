import SectionTitle from '@/components/shared/SectionTitle';
import PromotionCard from '@/components/cards/PromotionCard';
import { promotions } from '@/lib/placeholder-data';

export default function PromotionsPage() {
  return (
    <div className="space-y-12">
      <SectionTitle
        title="Latest Deals & Promotions"
        subtitle="Make your Myanmar adventure even more affordable and exciting with our special offers."
      />
      {promotions.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {promotions.map(promo => (
            <PromotionCard key={promo.id} promotion={promo} />
          ))}
        </div>
      ) : (
         <p className="text-center text-muted-foreground text-lg">
          No promotions available at the moment. Check back soon!
        </p>
      )}
    </div>
  );
}
