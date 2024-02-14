import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import Wathqny from "/wathqny.config"

export async function GET(context) {
  const docs = await getCollection('docs');
  return rss({
    title: Wathqny.siteName,
    description: Wathqny.description,
    site: context.site,
    items: docs.map((doc) => ({
      title: doc.data.title,
      description: doc.data.description,
      pubDate: doc.data.date,z,
      link: `/docs/${doc.data.category.toLowerCase() + doc.data.href}`,
    })),
  });
}