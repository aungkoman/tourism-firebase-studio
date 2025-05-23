import SectionTitle from '@/components/shared/SectionTitle';
import BlogPostCard from '@/components/cards/BlogPostCard';
import { blogPosts } from '@/lib/placeholder-data';

export default function BlogPage() {
  return (
    <div className="space-y-12">
      <SectionTitle
        title="Wanderlust Myanmar Blog"
        subtitle="Get inspired with travel stories, tips, and insights for your journey through the Golden Land."
      />
      {blogPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map(post => (
            <BlogPostCard key={post.id} post={post} />
          ))}
        </div>
      ): (
        <p className="text-center text-muted-foreground text-lg">
          No blog posts yet. Stay tuned for inspiring stories!
        </p>
      )}
    </div>
  );
}
