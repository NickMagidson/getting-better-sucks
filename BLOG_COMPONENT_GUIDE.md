# BlogPost Component - CMS Integration Guide

This document explains how to use the BlogPost component and integrate it with a Content Management System (CMS) like Contentful.

## Component Overview

The `BlogPost` component has been converted from the original Webflow design to a fully functional Next.js component that:

- ✅ Preserves the exact Webflow layout and styling
- ✅ Uses Next.js Image optimization
- ✅ Supports dynamic routing with App Router
- ✅ Includes SEO metadata generation
- ✅ Ready for CMS integration (Contentful, Strapi, etc.)
- ✅ Includes newsletter subscription functionality
- ✅ Social sharing capabilities
- ✅ Related posts section
- ✅ Responsive design maintained

## File Structure

```
src/
├── components/
│   └── BlogPost.jsx          # Main blog post component
└── app/
    └── blog/
        └── [slug]/
            └── page.js        # Dynamic blog post page
```

## Component Features

### 1. CMS-Ready Props Structure

The component expects the following data structure from your CMS:

```javascript
const post = {
  title: "Blog Post Title",
  description: "Post description/excerpt",
  publishDate: "January 4, 2025",
  slug: "blog-post-slug",
  featuredImage: {
    url: "/path/to/image.jpg",
    alt: "Image alt text"
  },
  content: "<p>Rich text content...</p>", // HTML or Rich Text
  seo: {
    metaTitle: "SEO optimized title",
    metaDescription: "SEO meta description"
  }
}
```

### 2. Related Posts

```javascript
const relatedPosts = [
  {
    title: "Related Post Title",
    description: "Post description",
    publishDate: "Date",
    slug: "post-slug",
    featuredImage: { url: "/image.jpg", alt: "Alt text" }
  }
]
```

### 3. Social Sharing

The component includes pre-configured social sharing with dynamic URLs:

```javascript
const socialShareUrls = {
  facebook: "https://facebook.com/share...",
  twitter: "https://twitter.com/intent/tweet...",
  linkedin: "https://linkedin.com/sharing...",
  copy: "https://yoursite.com/blog/post-slug"
}
```

## CMS Integration Options

### Option 1: Contentful Integration

1. **Install Contentful SDK:**
```bash
npm install contentful
```

2. **Environment Variables (.env.local):**
```env
CONTENTFUL_SPACE_ID=your_space_id
CONTENTFUL_ACCESS_TOKEN=your_access_token
```

3. **Content Type Structure in Contentful:**

| Field Name | Field Type | Description |
|------------|------------|-------------|
| title | Short Text | Blog post title |
| description | Long Text | Post excerpt/description |
| publishDate | Date | Publication date |
| slug | Short Text | URL slug (unique) |
| featuredImage | Media | Hero image |
| content | Rich Text | Main blog content |
| metaTitle | Short Text | SEO title |
| metaDescription | Long Text | SEO description |

4. **API Integration Example:**

```javascript
// lib/contentful.js
import { createClient } from 'contentful';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export async function getBlogPost(slug) {
  const entries = await client.getEntries({
    content_type: 'blogPost',
    'fields.slug': slug,
    limit: 1,
  });
  
  if (entries.items.length === 0) return null;
  
  const post = entries.items[0].fields;
  return {
    title: post.title,
    description: post.description,
    publishDate: new Date(post.publishDate).toLocaleDateString(),
    slug: post.slug,
    featuredImage: {
      url: `https:${post.featuredImage.fields.file.url}`,
      alt: post.featuredImage.fields.title || post.title
    },
    content: documentToHtmlString(post.content), // If using Rich Text
    seo: {
      metaTitle: post.metaTitle || post.title,
      metaDescription: post.metaDescription || post.description
    }
  };
}

export async function getAllBlogPosts() {
  const entries = await client.getEntries({
    content_type: 'blogPost',
    order: '-fields.publishDate',
  });
  
  return entries.items.map(item => ({
    // Transform fields as needed
  }));
}
```

### Option 2: Strapi Integration

1. **Install Strapi SDK:**
```bash
npm install @strapi/strapi
```

2. **API Integration:**
```javascript
// lib/strapi.js
const STRAPI_URL = process.env.STRAPI_URL || 'http://localhost:1337';

export async function getBlogPost(slug) {
  const response = await fetch(
    `${STRAPI_URL}/api/blog-posts?filters[slug][$eq]=${slug}&populate=*`
  );
  const data = await response.json();
  
  if (data.data.length === 0) return null;
  
  const post = data.data[0].attributes;
  return {
    title: post.title,
    description: post.description,
    publishDate: new Date(post.publishDate).toLocaleDateString(),
    slug: post.slug,
    featuredImage: {
      url: `${STRAPI_URL}${post.featuredImage.data.attributes.url}`,
      alt: post.featuredImage.data.attributes.alternativeText || post.title
    },
    content: post.content,
    seo: {
      metaTitle: post.seo?.metaTitle || post.title,
      metaDescription: post.seo?.metaDescription || post.description
    }
  };
}
```

## Usage Examples

### Basic Usage with Static Data

```jsx
import BlogPost from '../../../components/BlogPost';

export default function BlogPostPage() {
  const post = {
    title: "My Blog Post",
    description: "This is a great blog post",
    publishDate: "January 4, 2025",
    slug: "my-blog-post",
    featuredImage: {
      url: "/blog-image.jpg",
      alt: "Blog post image"
    },
    content: "<p>Blog content here...</p>"
  };

  return <BlogPost post={post} />;
}
```

### Dynamic Usage with CMS

```jsx
import BlogPost from '../../../components/BlogPost';
import { getBlogPost, getRelatedPosts } from '../../../lib/contentful';

export default async function BlogPostPage({ params }) {
  const [post, relatedPosts] = await Promise.all([
    getBlogPost(params.slug),
    getRelatedPosts(params.slug, 3)
  ]);

  if (!post) {
    notFound();
  }

  return (
    <BlogPost 
      post={post} 
      relatedPosts={relatedPosts}
      socialShareUrls={{
        facebook: `https://facebook.com/sharer?u=${encodeURIComponent(`https://yoursite.com/blog/${params.slug}`)}`,
        twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(`https://yoursite.com/blog/${params.slug}`)}&text=${encodeURIComponent(post.title)}`,
        linkedin: `https://linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://yoursite.com/blog/${params.slug}`)}`,
        copy: `https://yoursite.com/blog/${params.slug}`
      }}
    />
  );
}
```

## Newsletter Integration

The component includes a newsletter signup form. To integrate with your email service:

### Mailchimp Integration

```javascript
// api/newsletter/route.js
export async function POST(request) {
  const { email } = await request.json();
  
  const response = await fetch(`https://${process.env.MAILCHIMP_DC}.api.mailchimp.com/3.0/lists/${process.env.MAILCHIMP_LIST_ID}/members`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.MAILCHIMP_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email_address: email,
      status: 'subscribed',
    }),
  });

  if (response.ok) {
    return Response.json({ success: true });
  } else {
    return Response.json({ error: 'Subscription failed' }, { status: 400 });
  }
}
```

### ConvertKit Integration

```javascript
// api/newsletter/route.js
export async function POST(request) {
  const { email } = await request.json();
  
  const response = await fetch(`https://api.convertkit.com/v3/forms/${process.env.CONVERTKIT_FORM_ID}/subscribe`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      api_key: process.env.CONVERTKIT_API_KEY,
      email: email,
    }),
  });

  if (response.ok) {
    return Response.json({ success: true });
  } else {
    return Response.json({ error: 'Subscription failed' }, { status: 400 });
  }
}
```

## SEO & Metadata

The dynamic route page includes comprehensive SEO support:

- Dynamic meta titles and descriptions
- Open Graph tags for social sharing
- Twitter Card support
- Canonical URLs
- Structured data (can be added)

## Styling Notes

The component maintains all original Webflow classes and styling. The CSS is expected to be imported globally:

```javascript
// app/layout.js
import './webflow.css'; // Your Webflow CSS
```

## Performance Optimizations

- Uses Next.js Image component for optimized loading
- Implements proper loading states
- Supports static generation with `generateStaticParams`
- Includes proper error boundaries

## Deployment Considerations

1. **Environment Variables:** Ensure all CMS API keys are set in production
2. **Image Optimization:** Configure Next.js for your image CDN
3. **Caching:** Consider implementing ISR (Incremental Static Regeneration)
4. **Error Handling:** Add proper error boundaries and 404 pages

## Testing the Component

You can test the component by visiting:
- `/blog/business-consulting-101` - Sample post with mock data
- `/blog/navigating-business-challenges` - Another sample post

## Future Enhancements

- [ ] Add comment system integration
- [ ] Implement reading time calculation
- [ ] Add table of contents generation
- [ ] Include author information
- [ ] Add tags/categories support
- [ ] Implement search functionality
- [ ] Add analytics tracking
