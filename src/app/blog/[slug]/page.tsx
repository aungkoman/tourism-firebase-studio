import Image from 'next/image';
import { blogPosts } from '@/lib/placeholder-data';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, User, Tag } from 'lucide-react';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

export async function generateStaticParams() {
  return blogPosts.map(post => ({
    slug: post.slug,
  }));
}

// A simple markdown to HTML converter (can be replaced with a proper library like 'marked' or 'react-markdown')
function簡易MarkdownToHtml(markdown: string) {
  return markdown
    .split('\n\n')
    .map(paragraph => {
      if (paragraph.startsWith('### ')) {
        return `<h3 class="text-xl font-semibold mt-6 mb-2 text-primary">${paragraph.substring(4)}</h3>`;
      }
      if (paragraph.startsWith('## ')) {
        return `<h2 class="text-2xl font-semibold mt-8 mb-3 text-primary">${paragraph.substring(3)}</h2>`;
      }
      if (paragraph.startsWith('# ')) {
        return `<h1 class="text-3xl font-bold mt-10 mb-4 text-primary">${paragraph.substring(2)}</h1>`;
      }
      if (paragraph.startsWith('- ')) {
        const items = paragraph.split('\n').map(item => `<li class="mb-1">${item.substring(2)}</li>`).join('');
        return `<ul class="list-disc list-inside my-4 ml-4">${items}</ul>`;
      }
      return `<p class="mb-4 leading-relaxed text-foreground/80">${paragraph}</p>`;
    })
    .join('');
}


export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find(p => p.slug === params.slug);

  if (!post) {
    return (
      <div className="text-center py-10">
        <h1 className="text-2xl font-semibold">Blog post not found</h1>
        <Button asChild variant="link" className="mt-4 text-primary">
          <Link href="/blog">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
          </Link>
        </Button>
      </div>
    );
  }

  const htmlContent = 簡易MarkdownToHtml(post.content);

  return (
    <article className="max-w-3xl mx-auto">
      <Button asChild variant="outline" className="mb-8">
        <Link href="/blog">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
        </Link>
      </Button>

      <header className="mb-8">
        {post.category && (
          <Badge variant="secondary" className="mb-2 text-sm bg-accent text-accent-foreground">{post.category}</Badge>
        )}
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4 leading-tight">{post.title}</h1>
        <div className="flex flex-wrap items-center space-x-4 text-sm text-muted-foreground">
          <div className="flex items-center">
            <User className="w-4 h-4 mr-1.5" />
            <span>By {post.author}</span>
          </div>
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-1.5" />
            <span>Published on {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
          </div>
        </div>
      </header>

      {post.imageUrl && (
        <div className="relative h-64 md:h-96 rounded-lg overflow-hidden shadow-lg mb-8">
          <Image
            src={post.imageUrl}
            alt={post.title}
            layout="fill"
            objectFit="cover"
            data-ai-hint={post.dataAiHint}
            priority
          />
        </div>
      )}
      
      <Separator className="my-8" />

      <div
        className="prose prose-lg max-w-none dark:prose-invert prose-headings:text-primary prose-a:text-accent hover:prose-a:text-accent/80"
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
      
      <Separator className="my-12" />

      <div className="text-center">
        <Button asChild variant="default" size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
          <Link href="/trip-planner">
            Plan Your Own Adventure <ArrowLeft className="ml-2 h-4 w-4 rotate-180" />
          </Link>
        </Button>
      </div>
    </article>
  );
}
