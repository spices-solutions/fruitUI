import rss from '@astrojs/rss'
import { getCollection } from 'astro:content'
import Wathqny from 'config'

export async function GET(context) {
  const blog = await getCollection('blog')
  return rss({
    title: Wathqny.siteName,
    description: Wathqny.description,
    site: context.site,
    items: blog.map(post => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: `/blog/${post.data.link}`,
    })),
  })
}
