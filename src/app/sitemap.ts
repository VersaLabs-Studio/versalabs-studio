import { MetadataRoute } from 'next';
import { getAllSlugs } from '@/lib/catalog-parser';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://versalabs.dev';
  const slugs = getAllSlugs();

  return [
    { url: baseUrl, lastModified: new Date() },
    { url: `${baseUrl}/studio`, lastModified: new Date() },
    { url: `${baseUrl}/about`, lastModified: new Date() },
    { url: `${baseUrl}/contact`, lastModified: new Date() },
    ...slugs.map((slug) => ({
      url: `${baseUrl}/projects/${slug}`,
      lastModified: new Date(),
    })),
  ];
}