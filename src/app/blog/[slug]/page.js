import { notFound } from 'next/navigation';
import { getAllBlogPostSlugs, getBlogPost, getRelatedPosts } from '../../../../lib/contentful';
import BlogPost from '../../../components/BlogPost';
import Footer from '../../../components/Footer';
import Navbar from '../../../components/Navbar';

// Fallback mock data for development/testing
const mockBlogPosts = {
  'business-consulting-101': {
    title: "Business Consulting 101: A Comprehensive Guide",
    description: "A comprehensive guide to understanding business consulting, its benefits, types, and how to choose the right consultant.",
    publishDate: "January 4, 2025",
    slug: "business-consulting-101",
    featuredImage: {
      url: "/water.jpg",
      alt: "Business consulting guide illustration"
    },
    content: `
      <h4>Understanding Business Consulting</h4>
      <p>Business consulting is a vital service that helps organizations improve their performance and efficiency. Consultants analyze businesses and create solutions to help them achieve their goals. This guide will explore the various aspects of business consulting, including its benefits, types, and how to choose the right consultant for your needs.</p>
      <h4>Benefits of Business Consulting</h4>
      <p>Engaging a business consultant can provide numerous advantages. They bring expertise and an outside perspective, which can be invaluable for identifying issues and opportunities. Additionally, consultants can help implement strategies that lead to increased productivity and profitability.</p>
      <blockquote>Consultants can help you see the bigger picture.</blockquote>
      <h2>Types of Business Consulting</h2>
      <ul role="list">
        <li><strong>Management Consulting</strong>: Focuses on improving organizational performance.</li>
        <li><strong>IT Consulting</strong>: Helps businesses leverage technology effectively.</li>
        <li><strong>Financial Consulting</strong>: Aids in financial planning and management.</li>
      </ul>
      <p>Choosing the right type of consultant is crucial for achieving your business objectives.</p>
    `,
    seo: {
      metaTitle: "Business Consulting 101: A Comprehensive Guide – Serenya",
      metaDescription: "A comprehensive guide to understanding business consulting, its benefits, types, and how to choose the right consultant."
    }
  },
  'navigating-business-challenges': {
    title: "Navigating Business Challenges: Strategies for Success",
    description: "Strategies for overcoming common business challenges and ensuring success in a competitive landscape.",
    publishDate: "January 4, 2025",
    slug: "navigating-business-challenges",
    featuredImage: {
      url: "/683caab15ddff5862cbab458/6844bb3b2da81548f6440053_Blog_Images_05.jpg",
      alt: "Business challenges illustration"
    },
    content: `
      <h4>Common Business Challenges</h4>
      <p>Every business faces challenges, from market competition to internal operational issues. Understanding these challenges is the first step toward overcoming them effectively.</p>
      <h4>Strategic Solutions</h4>
      <p>Successful businesses develop comprehensive strategies to address challenges proactively rather than reactively.</p>
    `,
    seo: {
      metaTitle: "Navigating Business Challenges: Strategies for Success – Serenya",
      metaDescription: "Strategies for overcoming common business challenges and ensuring success in a competitive landscape."
    }
  }
};

const relatedPostsData = [
  {
    title: "Effective Leadership in Business: Best Practices",
    description: "Best practices for effective leadership in business, highlighting key characteristics of successful leaders.",
    publishDate: "January 4, 2025",
    slug: "effective-leadership-in-business",
    featuredImage: {
      url: "/683caab15ddff5862cbab458/6844bae51cb96c5fd37072ff_Blog_Images_01.jpg",
      alt: "Leadership in business illustration"
    }
  },
  {
    title: "The Role of Technology in Modern Business",
    description: "An overview of the impact of technology on modern business operations and its benefits.",
    publishDate: "January 4, 2025",
    slug: "the-role-of-technology-in-business",
    featuredImage: {
      url: "/683caab15ddff5862cbab458/6844baf9d29deecec6ac0b05_Blog_Images_02.jpg",
      alt: "Technology in business illustration"
    }
  }
];

// Generate metadata for SEO
export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  
  try {
    // Try to fetch from Contentful first
    const post = await getBlogPost(resolvedParams.slug);
    
    if (post) {
      return {
        title: post.seo.metaTitle,
        description: post.seo.metaDescription,
        openGraph: {
          title: post.seo.metaTitle,
          description: post.seo.metaDescription,
          images: [post.featuredImage.url],
          type: 'article',
          publishedTime: post.publishDate,
        },
        twitter: {
          card: 'summary_large_image',
          title: post.seo.metaTitle,
          description: post.seo.metaDescription,
          images: [post.featuredImage.url],
        },
      };
    }
  } catch (error) {
    console.error('Error fetching post metadata from Contentful:', error);
  }

  // Fallback to mock data
  const mockPost = mockBlogPosts[resolvedParams.slug];
  
  if (!mockPost) {
    return {
      title: 'Post Not Found',
      description: 'The blog post you are looking for does not exist.'
    };
  }

  return {
    title: mockPost.seo.metaTitle,
    description: mockPost.seo.metaDescription,
    openGraph: {
      title: mockPost.seo.metaTitle,
      description: mockPost.seo.metaDescription,
      images: [mockPost.featuredImage.url],
      type: 'article',
      publishedTime: mockPost.publishDate,
    },
    twitter: {
      card: 'summary_large_image',
      title: mockPost.seo.metaTitle,
      description: mockPost.seo.metaDescription,
      images: [mockPost.featuredImage.url],
    },
  };
}

// Generate static params for static generation
export async function generateStaticParams() {
  try {
    // Try to get slugs from Contentful
    const slugs = await getAllBlogPostSlugs();
    if (slugs && slugs.length > 0) {
      return slugs.map((slug) => ({
        slug: slug,
      }));
    }
  } catch (error) {
    console.error('Error fetching blog post slugs from Contentful:', error);
  }

  // Fallback to mock data
  return Object.keys(mockBlogPosts).map((slug) => ({
    slug: slug,
  }));
}

export default async function BlogPostPage({ params }) {
  const resolvedParams = await params;
  let post = null;
  let relatedPosts = [];

  try {
    // Try to fetch from Contentful first
    console.log('Attempting to fetch from Contentful:', resolvedParams.slug);
    const [contentfulPost, contentfulRelatedPosts] = await Promise.all([
      getBlogPost(resolvedParams.slug),
      getRelatedPosts(resolvedParams.slug, 3)
    ]);

    if (contentfulPost) {
      post = contentfulPost;
      relatedPosts = contentfulRelatedPosts || [];
      console.log('Successfully fetched from Contentful');
    }
  } catch (error) {
    console.error('Error fetching from Contentful, falling back to mock data:', error);
  }

  // Fallback to mock data if Contentful fails
  if (!post) {
    console.log('Using mock data for:', resolvedParams.slug);
    post = mockBlogPosts[resolvedParams.slug];
    
    if (!post) {
      notFound();
    }

    // Filter out current post from related posts mock data
    relatedPosts = relatedPostsData.filter(
      relatedPost => relatedPost.slug !== resolvedParams.slug
    );
  }

  return (
    <>
      <Navbar />
      <BlogPost 
        post={post} 
        relatedPosts={relatedPosts}
        socialShareUrls={{
          facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`https://yourdomain.com/blog/${resolvedParams.slug}`)}`,
          twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(`https://yourdomain.com/blog/${resolvedParams.slug}`)}&text=${encodeURIComponent(post.title)}`,
          linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://yourdomain.com/blog/${resolvedParams.slug}`)}`,
          copy: `https://yourdomain.com/blog/${resolvedParams.slug}`
        }}
      />
      <Footer />
    </>
  );
}

/*
CMS Integration Notes:
========================

To integrate with Contentful:

1. Install Contentful SDK:
   npm install contentful

2. Replace the mock data with Contentful API calls:

import { createClient } from 'contentful';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export async function generateStaticParams() {
  const entries = await client.getEntries({ content_type: 'blogPost' });
  return entries.items.map((item) => ({
    slug: item.fields.slug,
  }));
}

async function getBlogPost(slug) {
  const entries = await client.getEntries({
    content_type: 'blogPost',
    'fields.slug': slug,
    limit: 1,
  });
  
  if (entries.items.length === 0) return null;
  
  return entries.items[0].fields;
}

3. Content Type Structure in Contentful:
   - title: Short Text
   - description: Long Text
   - publishDate: Date
   - slug: Short Text
   - featuredImage: Media
   - content: Rich Text
   - metaTitle: Short Text
   - metaDescription: Long Text

4. Environment Variables (.env.local):
   CONTENTFUL_SPACE_ID=your_space_id
   CONTENTFUL_ACCESS_TOKEN=your_access_token
*/
