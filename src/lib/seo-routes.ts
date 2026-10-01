/**
 * Auto-synced registry of publicly-crawlable routes. Consumed by the
 * /sitemap.xml handler in src/server/entry.ts.
 *
 * DO NOT add or remove paths by hand. Static paths are mirrored here from
 * src/routes.tsx automatically whenever that file is edited (any manual
 * path edit would be overwritten on the next routes.tsx change). For sync
 * to pick up a route, its `path` must be a literal string starting with "/";
 * template literals and identifier refs are skipped, and dynamic-param routes
 * like "/products/:id" are excluded.
 *
 * The only fields safe to hand-edit are the per-entry metadata below, after a
 * sync:
 * - `priority` (0.0–1.0): Home = 1.0, main sections = 0.8, deep pages = 0.5.
 * - `changefreq` and `lastmod`.
 */

export interface SeoRoute {
  path: string;
  changefreq?:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never";
  priority?: number;
  lastmod?: string;
}

export const seoRoutes: SeoRoute[] = [
  { path: "/", changefreq: "weekly", priority: 1.0 },
  { path: "/about", changefreq: "monthly", priority: 0.8 },
  { path: "/services", changefreq: "monthly", priority: 0.8 },
  { path: "/how-it-works", changefreq: "monthly", priority: 0.8 },
  { path: "/contact", changefreq: "monthly", priority: 0.8 },
  { path: "/pricing", changefreq: "monthly", priority: 0.8 },
  { path: "/shipping", changefreq: "monthly", priority: 0.8 },
  { path: "/tracking", changefreq: "monthly", priority: 0.8 },
  { path: "/company-info", changefreq: "monthly", priority: 0.8 },
  { path: "/prohibited-products", changefreq: "monthly", priority: 0.8 },
  { path: "/privacy", changefreq: "monthly", priority: 0.8 },
  { path: "/terms", changefreq: "monthly", priority: 0.8 },
  { path: "/refund-policy", changefreq: "monthly", priority: 0.8 },
  { path: "/proof-of-delivery", changefreq: "monthly", priority: 0.8 },
  { path: "/shipping-policy", changefreq: "monthly", priority: 0.8 },
  { path: "/acceptable-use", changefreq: "monthly", priority: 0.8 },
  { path: "/billing-policy", changefreq: "monthly", priority: 0.8 },
  { path: "/cancellation-policy", changefreq: "monthly", priority: 0.8 },
  { path: "/blog", changefreq: "monthly", priority: 0.8 },
];
