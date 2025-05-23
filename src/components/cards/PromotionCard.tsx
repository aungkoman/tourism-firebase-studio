import Image from 'next/image';
import Link from 'next/link';
import type { Promotion } from '@/lib/types';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tag, Calendar } from 'lucide-react';

interface PromotionCardProps {
  promotion: Promotion;
}

export default function PromotionCard({ promotion }: PromotionCardProps) {
  return (
    <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
      <CardHeader className="p-0 relative h-48 w-full">
        <Image
          src={promotion.imageUrl}
          alt={promotion.title}
          layout="fill"
          objectFit="cover"
          data-ai-hint={promotion.dataAiHint}
        />
        {promotion.discountInfo && (
          <div className="absolute top-2 right-2 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-semibold shadow-md">
            {promotion.discountInfo}
          </div>
        )}
      </CardHeader>
      <CardContent className="p-6 flex-grow">
        <CardTitle className="text-lg font-semibold mb-2 text-primary">{promotion.title}</CardTitle>
        <CardDescription className="text-sm text-muted-foreground mb-3 line-clamp-3">{promotion.description}</CardDescription>
        {promotion.validUntil && (
          <div className="flex items-center text-xs text-muted-foreground mt-2">
            <Calendar className="w-3 h-3 mr-1.5 text-primary" />
            <span>Valid until: {new Date(promotion.validUntil).toLocaleDateString()}</span>
          </div>
        )}
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button asChild variant="default" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
          <Link href={`/promotions#${promotion.id}`}>View Deal</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
