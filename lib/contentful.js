/**
 * Contentful Integration Example
 * 
 * This file demonstrates how to integrate the BlogPost component with Contentful CMS.
 * Copy and modify this code based on your specific Contentful setup.
 */

import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { createClient } from 'contentful';

// Initialize Contentful client - credentials from environment variables
const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  environment: process.env.CONTENTFUL_ENVIRONMENT || 'master',
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

/**
 * Test Contentful connection and fetch a specific entry
 */
export async function testContentfulConnection(entryId = 'fAPrcF7LN1hgPnSuuJ0gs') {
  try {
    console.log('Testing Contentful connection...');
    const entry = await client.getEntry(entryId);
    console.log('Contentful connection successful!');
    console.log('Entry data:', entry);
    return entry;
  } catch (error) {
    console.error('Contentful connection failed:', error);
    throw error;
  }
}

/**
 * Get all content types to understand your Contentful structure
 */
export async function getContentTypes() {
  try {
    const contentTypes = await client.getContentTypes();
    console.log('Available content types:', contentTypes.items.map(ct => ({
      id: ct.sys.id,
      name: ct.name,
      fields: ct.fields.map(f => ({ id: f.id, name: f.name, type: f.type }))
    })));
    return contentTypes;
  } catch (error) {
    console.error('Error fetching content types:', error);
    throw error;
  }
}

/**
 * Fetch a single blog post by slug
 */
export async function getBlogPost(slug) {
  try {
    // Get all blog posts since we don't have a slug field yet
    const allEntries = await client.getEntries({
      content_type: 'blogPost',
      include: 2,
    });
    
    // Find entry where title converts to the requested slug
    const matchingEntry = allEntries.items.find(item => {
      const generatedSlug = generateSlugFromTitle(item.fields.title);
      return generatedSlug === slug;
    });
    
    if (!matchingEntry) {
      return null;
    }

    const fields = matchingEntry.fields;

    return {
      title: fields.title,
      description: fields.description,
      publishDate: new Date(fields.publishDate).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }),
      slug: generateSlugFromTitle(fields.title),
      featuredImage: {
        url: `https:${fields.featuredImage.fields.file.url}`,
        alt: fields.featuredImage.fields.title || fields.title,
      },
      content: documentToHtmlString(fields.content),
      seo: {
        metaTitle: fields.metaTitle || fields.title,
        metaDescription: fields.metaDescription || fields.description,
      },
      // Include any additional fields you need
      tags: fields.tags || [],
      category: fields.category?.fields?.name || null,
      author: fields.author || null,
    };
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return null;
  }
}

/**
 * Generate URL-friendly slug from title
 */
function generateSlugFromTitle(title) {
  if (!title) return 'untitled';
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

/**
 * Fetch all blog posts for listing pages
 */
export async function getAllBlogPosts(limit = 10, skip = 0) {
  try {
    const entries = await client.getEntries({
      content_type: 'blogPost',
      limit,
      skip,
      order: '-fields.publishDate',
      include: 2,
    });

    return {
      posts: entries.items.map(transformBlogPostSummary),
      total: entries.total,
      hasMore: entries.total > skip + limit,
    };
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return { posts: [], total: 0, hasMore: false };
  }
}

/**
 * Fetch related posts (excluding current post)
 */
export async function getRelatedPosts(currentSlug, limit = 3) {
  try {
    // Get all posts since we don't have slug field yet
    const entries = await client.getEntries({
      content_type: 'blogPost',
      limit: limit + 1, // Get one extra to account for filtering
      order: '-fields.publishDate',
      include: 2,
    });

    // Filter out the current post by comparing generated slugs
    const filteredPosts = entries.items.filter(item => {
      const itemSlug = generateSlugFromTitle(item.fields.title);
      return itemSlug !== currentSlug;
    });

    // Return only the requested number of posts
    return filteredPosts.slice(0, limit).map(transformBlogPostSummary);
  } catch (error) {
    console.error('Error fetching related posts:', error);
    return [];
  }
}

/**
 * Search blog posts by query
 */
export async function searchBlogPosts(query, limit = 10) {
  try {
    const entries = await client.getEntries({
      content_type: 'blogPost',
      query,
      limit,
      order: '-fields.publishDate',
      include: 2,
    });

    return entries.items.map(transformBlogPostSummary);
  } catch (error) {
    console.error('Error searching blog posts:', error);
    return [];
  }
}

/**
 * Get posts by category
 */
export async function getBlogPostsByCategory(categorySlug, limit = 10, skip = 0) {
  try {
    const entries = await client.getEntries({
      content_type: 'blogPost',
      'fields.category.fields.slug': categorySlug,
      limit,
      skip,
      order: '-fields.publishDate',
      include: 2,
    });

    return {
      posts: entries.items.map(transformBlogPostSummary),
      total: entries.total,
      hasMore: entries.total > skip + limit,
    };
  } catch (error) {
    console.error('Error fetching posts by category:', error);
    return { posts: [], total: 0, hasMore: false };
  }
}

/**
 * Transform blog post for summary/listing views
 */
function transformBlogPostSummary(post) {
  const fields = post.fields;
  
  return {
    title: fields.title,
    description: fields.description,
    publishDate: new Date(fields.publishDate).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }),
    slug: generateSlugFromTitle(fields.title),
    featuredImage: {
      url: `https:${fields.featuredImage.fields.file.url}`,
      alt: fields.featuredImage.fields.title || fields.title,
    },
    category: fields.category?.fields?.name || null,
    tags: fields.tags || [],
    readingTime: calculateReadingTime(fields.content),
  };
}

/**
 * Calculate estimated reading time
 */
function calculateReadingTime(richTextContent) {
  if (!richTextContent) return '1 min read';
  
  // Convert rich text to plain text for word count
  const plainText = documentToHtmlString(richTextContent)
    .replace(/<[^>]*>/g, '') // Remove HTML tags
    .replace(/\s+/g, ' ') // Normalize whitespace
    .trim();
  
  const wordsPerMinute = 200;
  const wordCount = plainText.split(' ').length;
  const readingTime = Math.ceil(wordCount / wordsPerMinute);
  
  return `${readingTime} min read`;
}

/**
 * Get all blog post slugs for static generation
 */
export async function getAllBlogPostSlugs() {
  try {
    const entries = await client.getEntries({
      content_type: 'blogPost',
      select: 'fields.title',
      limit: 1000,
    });

    return entries.items.map(item => generateSlugFromTitle(item.fields.title));
  } catch (error) {
    console.error('Error fetching blog post slugs:', error);
    return [];
  }
}

/**
 * Example usage in a Next.js page:
 * 
 * // app/blog/[slug]/page.js
 * import { getBlogPost, getRelatedPosts } from '../../../lib/contentful';
 * import BlogPost from '../../../components/BlogPost';
 * 
 * export async function generateStaticParams() {
 *   const slugs = await getAllBlogPostSlugs();
 *   return slugs.map(slug => ({ slug }));
 * }
 * 
 * export async function generateMetadata({ params }) {
 *   const post = await getBlogPost(params.slug);
 *   if (!post) return { title: 'Post Not Found' };
 *   
 *   return {
 *     title: post.seo.metaTitle,
 *     description: post.seo.metaDescription,
 *     openGraph: {
 *       title: post.seo.metaTitle,
 *       description: post.seo.metaDescription,
 *       images: [post.featuredImage.url],
 *       type: 'article',
 *     },
 *   };
 * }
 * 
 * export default async function BlogPostPage({ params }) {
 *   const [post, relatedPosts] = await Promise.all([
 *     getBlogPost(params.slug),
 *     getRelatedPosts(params.slug, 3)
 *   ]);
 * 
 *   if (!post) notFound();
 * 
 *   return (
 *     <BlogPost 
 *       post={post} 
 *       relatedPosts={relatedPosts}
 *       socialShareUrls={{
 *         facebook: `https://facebook.com/sharer?u=${encodeURIComponent(`https://yoursite.com/blog/${params.slug}`)}`,
 *         twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(`https://yoursite.com/blog/${params.slug}`)}&text=${encodeURIComponent(post.title)}`,
 *         linkedin: `https://linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://yoursite.com/blog/${params.slug}`)}`,
 *         copy: `https://yoursite.com/blog/${params.slug}`
 *       }}
 *     />
 *   );
 * }
 */

/*
Contentful Content Type Structure:
==================================

blogPost:
  - title: Short Text (required)
  - description: Long Text (required)
  - slug: Short Text (required, unique)
  - publishDate: Date (required)
  - featuredImage: Media (required)
  - content: Rich Text (required)
  - metaTitle: Short Text
  - metaDescription: Long Text
  - tags: Short Text (multiple values)
  - category: Reference (to Category content type)
  - author: Reference (to Author content type)

category:
  - name: Short Text (required)
  - slug: Short Text (required, unique)
  - description: Long Text

author:
  - name: Short Text (required)
  - bio: Long Text
  - avatar: Media
  - socialLinks: JSON Object

Environment Variables:
=====================
CONTENTFUL_SPACE_ID=your_space_id
CONTENTFUL_ACCESS_TOKEN=your_delivery_api_token
CONTENTFUL_PREVIEW_ACCESS_TOKEN=your_preview_api_token (for draft content)

Dependencies:
============
npm install contentful @contentful/rich-text-html-renderer
*/

export default {
  getBlogPost,
  getAllBlogPosts,
  getRelatedPosts,
  searchBlogPosts,
  getBlogPostsByCategory,
  getAllBlogPostSlugs,
};
