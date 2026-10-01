import { Helmet } from '@dr.pogodin/react-helmet';
import { Link, useParams } from 'react-router';
import { getPostBySlug } from '@/lib/blog';
import { Calendar, Tag, ArrowLeft, ArrowRight } from 'lucide-react';

function renderMarkdown(body: string): string {
  return body
    .replace(/^### (.+)$/gm, '<h3 class="text-xl font-bold text-primary mt-8 mb-3">$1</h3>')
    .replace(/^## (.+)$/gm, '<h2 class="text-2xl font-bold text-primary mt-10 mb-4">$1</h2>')
    .replace(/^# (.+)$/gm, '<h1 class="text-3xl font-bold text-primary mt-10 mb-4">$1</h1>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-secondary font-semibold hover:underline">$1</a>')
    .replace(/^- (.+)$/gm, '<li class="ml-4 list-disc text-foreground">$1</li>')
    .replace(/(<li[^>]*>.*<\/li>\n?)+/g, (m) => `<ul class="my-4 space-y-1">${m}</ul>`)
    .replace(/^(?!<[hul]|$)(.+)$/gm, '<p class="text-foreground leading-relaxed my-4">$1</p>')
    .replace(/\n{2,}/g, '\n');
}

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;
  const site = 'https://arseenenterprises.com';

  if (!post) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center px-6 py-20">
          <h1 className="text-2xl font-bold text-primary mb-4">Post Not Found</h1>
          <p className="text-muted-foreground mb-6">This post may not be published yet or the URL may be incorrect.</p>
          <Link to="/blog" className="inline-flex items-center gap-2 text-secondary font-semibold hover:underline">
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>
        </div>
      </main>
    );
  }

  const pageUrl = `${site}/blog/${post.slug}`;

  return (
    <>
      <Helmet>
        <title>{post.title} | Arseen Enterprises LLC</title>
        <meta name="description" content={post.excerpt} />
        <link rel="canonical" href={pageUrl} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:type" content="article" />
        {post.featuredImage && <meta property="og:image" content={`${site}${post.featuredImage}`} />}
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: post.title,
          description: post.excerpt,
          datePublished: post.publishedAt,
          url: pageUrl,
          author: { '@type': 'Organization', name: 'Arseen Enterprises LLC', url: site },
          publisher: { '@type': 'Organization', name: 'Arseen Enterprises LLC', url: site },
          ...(post.featuredImage ? { image: `${site}${post.featuredImage}` } : {}),
        })}</script>
      </Helmet>

      <main>
        {/* Hero */}
        <section className="bg-primary py-16 px-6">
          <div className="max-w-3xl mx-auto">
            <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-primary-foreground/60 hover:text-primary-foreground mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4" /> Back to Blog
            </Link>
            <div className="flex items-center gap-3 text-xs text-primary-foreground/60 mb-4">
              <span className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                <time dateTime={post.publishedAt}>
                  {new Date(post.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </time>
              </span>
              {post.tags?.map((tag) => (
                <span key={tag} className="flex items-center gap-1">
                  <Tag className="w-3 h-3" /><span>{tag}</span>
                </span>
              ))}
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-primary-foreground leading-tight">
              {post.title}
            </h1>
          </div>
        </section>

        {/* Featured image */}
        {post.featuredImage && (
          <div className="max-w-3xl mx-auto px-6 -mt-8">
            <img
              src={post.featuredImage}
              alt={post.title}
              className="w-full h-64 md:h-80 object-cover rounded-xl shadow-lg"
              loading="eager"
              fetchPriority="high"
              width={900}
              height={400}
            />
          </div>
        )}

        {/* Body */}
        <article className="max-w-3xl mx-auto px-6 py-12">
          <div
            className="prose-like"
            dangerouslySetInnerHTML={{ __html: renderMarkdown(post.body) }}
          />
        </article>

        {/* CTA */}
        <section className="bg-muted py-12 px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-primary mb-3">Ready to Get Started?</h2>
            <p className="text-muted-foreground mb-6">Submit your product requirements and receive a written quotation from Arseen Enterprises LLC.</p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold bg-secondary text-secondary-foreground hover:opacity-90 transition-opacity"
            >
              Request a Quotation <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
