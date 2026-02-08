// @ts-ignore - For browser usage, we'll use a mock implementation
const fs = {
  writeFile: async (path: string, content: string) => {
    console.log('Writing to file:', path, content);
  }
};

export interface SitemapEntry {
  url: string;
  lastModified?: string;
  changeFrequency?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
}

export async function generateSitemap(entries: SitemapEntry[]): Promise<string> {
  const baseUrl = process.env.VITE_BASE_URL || 'https://example.com';

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries.map(entry => {
  const loc = `${baseUrl}${entry.url}`;
  const lastmod = entry.lastModified || new Date().toISOString().split('T')[0];
  const changefreq = entry.changeFrequency || 'weekly';
  const priority = entry.priority?.toString() || '0.5';

  return `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}).join('\n')}
</urlset>`;

  return sitemap;
}

export async function generateRobotsTxt(): Promise<string> {
  const baseUrl = process.env.VITE_BASE_URL || 'https://example.com';
  const sitemapUrl = `${baseUrl}/sitemap.xml`;

  return `User-agent: *
Allow: /

Sitemap: ${sitemapUrl}`;
}

export async function writeSitemapToFile(sitemap: string, _outputDir: string): Promise<void> {
  // For browser usage, we'll log the sitemap instead of writing to file
  console.log('Sitemap:', sitemap);
}

export async function writeRobotsToFile(robotsTxt: string, _outputDir: string): Promise<void> {
  // For browser usage, we'll log the robots.txt instead of writing to file
  console.log('Robots.txt:', robotsTxt);
}