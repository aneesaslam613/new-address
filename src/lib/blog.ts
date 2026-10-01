export interface BlogPost {
  slug: string;
  title: string;
  publishedAt: string;
  published: boolean;
  excerpt: string;
  tags: string[];
  featuredImage?: string;
  body: string;
}

function parseFrontmatter(raw: string): { meta: Record<string, unknown>; body: string } {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) return { meta: {}, body: raw };
  const meta: Record<string, unknown> = {};
  for (const line of match[1].split('\n')) {
    const colon = line.indexOf(':');
    if (colon === -1) continue;
    const key = line.slice(0, colon).trim();
    const val = line.slice(colon + 1).trim().replace(/^["']|["']$/g, '');
    if (val.startsWith('[')) {
      try { meta[key] = JSON.parse(val.replace(/'/g, '"')); } catch { meta[key] = val; }
    } else if (val === 'true') {
      meta[key] = true;
    } else if (val === 'false') {
      meta[key] = false;
    } else {
      meta[key] = val;
    }
  }
  return { meta, body: match[2] };
}

const modules = import.meta.glob('/src/blog-posts/*.md', { query: '?raw', import: 'default', eager: true }) as Record<string, string>;

function loadPosts(): BlogPost[] {
  return Object.entries(modules).map(([path, raw]) => {
    const slug = path.replace(/^.*\/([^/]+)\.md$/, '$1');
    const { meta, body } = parseFrontmatter(raw);
    return {
      slug,
      title: (meta.title as string) ?? slug,
      publishedAt: (meta.publishedAt as string) ?? '',
      published: (meta.published as boolean) ?? false,
      excerpt: (meta.excerpt as string) ?? '',
      tags: (meta.tags as string[]) ?? [],
      featuredImage: meta.featuredImage as string | undefined,
      body,
    };
  });
}

export function getBlogPosts(): BlogPost[] {
  const now = new Date();
  return loadPosts()
    .filter((p) => p.published && new Date(p.publishedAt) <= now)
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return loadPosts().find((p) => p.slug === slug);
}
