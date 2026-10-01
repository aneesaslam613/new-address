import { Helmet } from '@dr.pogodin/react-helmet';
import { Link } from 'react-router';
import { getBlogPosts } from '@/lib/blog';
import { Calendar, Tag, ArrowRight } from 'lucide-react';

export default function BlogPage() {
  const posts = getBlogPosts();
  const site = 'https://arseenenterprises.com';

  return (
    <>
      <Helmet>
        <title>Blog — Procurement & Fulfillment Insights | Arseen Enterprises LLC</title>
        <meta name="description" content="Insights on custom product procurement, international order fulfillment, and shipment coordination from Arseen Enterprises LLC." />
        <link rel="canonical" href={`${site}/blog`} />
        <meta property="og:title" content="Blog — Procurement & Fulfillment Insights | Arseen Enterprises LLC" />
        <meta property="og:description" content="Insights on custom product procurement, international order fulfillment, and shipment coordination." />
        <meta property="og:url" content={`${site}/blog`} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <main>
        {/* Hero */}
        <section className="bg-primary py-20 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm font-semibold uppercase tracking-widest mb-3 text-accent">Insights</p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-primary-foreground mb-4">
              Procurement & Fulfillment Blog
            </h1>
            <p className="text-primary-foreground/70 text-lg">
              Practical guidance on international product procurement, order fulfillment coordination, and shipment support.
            </p>
          </div>
        </section>

        {/* Posts */}
        <section className="py-16 px-6 bg-background">
          <div className="max-w-4xl mx-auto">
            {posts.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-muted-foreground">No posts published yet. Check back soon.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {posts.map((post) => (
                  <article key={post.slug} className="rounded-xl border border-border overflow-hidden hover:shadow-md transition-shadow bg-card">
                    {post.featuredImage && (
                      <Link to={`/blog/${post.slug}`}>
                        <img
                          src={post.featuredImage}
                          alt={post.title}
                          className="w-full h-48 object-cover"
                          loading="lazy"
                          width={600}
                          height={300}
                        />
                      </Link>
                    )}
                    <div className="p-6">
                      <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          <time dateTime={post.publishedAt}>
                            {new Date(post.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                          </time>
                        </span>
                        {post.tags?.[0] && (
                          <span className="flex items-center gap-1">
                            <Tag className="w-3 h-3" />
                            <span>{post.tags[0]}</span>
                          </span>
                        )}
                      </div>
                      <h2 className="font-bold text-lg mb-2 text-primary leading-snug">
                        <Link to={`/blog/${post.slug}`} className="hover:underline">
                          {post.title}
                        </Link>
                      </h2>
                      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{post.excerpt}</p>
                      <Link
                        to={`/blog/${post.slug}`}
                        className="inline-flex items-center gap-1 text-sm font-semibold text-secondary hover:underline"
                      >
                        Read more <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
    </>
  );
}
