import Image from 'next/image';
import Link from 'next/link';

// Fallback blog post data - used when Contentful is unavailable
const fallbackBlogPosts = [
  {
    id: 'business-consulting-101',
    title: 'Business Consulting 101: A Comprehensive Guide',
    description: 'A comprehensive guide to understanding business consulting, its benefits, types, and how to choose the right consultant.',
    publishDate: 'January 4, 2025',
    featuredImage: {
      url: '/6844bb1f53fa2b65f941ef9b_Blog_Images_03.jpg',
      alt: 'Business consulting guide'
    },
    slug: 'business-consulting-101'
  },
  {
    id: 'effective-leadership-in-business',
    title: 'Effective Leadership in Business: Best Practices',
    description: 'Best practices for effective leadership in business, highlighting key characteristics of successful leaders.',
    publishDate: 'January 4, 2025',
    featuredImage: {
      url: '/6844bae51cb96c5fd37072ff_Blog_Images_01.jpg',
      alt: 'Leadership in business'
    },
    slug: 'effective-leadership-in-business'
  },
  {
    id: 'the-role-of-technology-in-business',
    title: 'The Role of Technology in Modern Business',
    description: 'An overview of the impact of technology on modern business operations and its benefits.',
    publishDate: 'January 4, 2025',
    featuredImage: {
      url: '/6844baf9d29deecec6ac0b05_Blog_Images_02.jpg',
      alt: 'Technology in business'
    },
    slug: 'the-role-of-technology-in-business'
  },
  {
    id: 'strategic-planning-in-business',
    title: 'Strategic Planning in Business: Key Insights',
    description: 'An exploration of strategic planning in business, outlining its importance and the steps involved in the process.',
    publishDate: 'January 4, 2025',
    featuredImage: {
      url: '/6844bb2ea37eff1cf4462c82_Blog_Images_04.jpg',
      alt: 'Strategic planning'
    },
    slug: 'strategic-planning-in-business'
  },
  {
    id: 'navigating-business-challenges',
    title: 'Navigating Business Challenges: Strategies for Success',
    description: 'Strategies for overcoming common business challenges and ensuring success in a competitive landscape.',
    publishDate: 'January 4, 2025',
    featuredImage: {
      url: '/6844bb3b2da81548f6440053_Blog_Images_05.jpg',
      alt: 'Business challenges'
    },
    slug: 'navigating-business-challenges'
  }
];

// Converted from Webflow blog grid section
// Preserves the 2-column grid layout and blog item styling
export default function BlogGrid({ posts = [] }) {
  // Use Contentful posts if available, otherwise fallback to mock data
  const blogPosts = posts.length > 0 ? posts : fallbackBlogPosts;

  return (
    <div className="section">
      <div className="container">
        <div className="blog-grid-twos-wrapper space-bott w-dyn-list">
          <div className="blog-grid-2x w-dyn-items" role="list">
            {blogPosts.map((post) => (
              <div key={post.id || post.slug} className="blog-grid-twos-item w-dyn-item" role="listitem">
                <Link className="blog-item boxed w-inline-block" href={`/blog/${post.slug}`}>
                  <Image 
                    alt={post.featuredImage?.alt || post.title}
                    className="blog-thumbnail" 
                    src={post.featuredImage?.url || post.image}
                    width={400}
                    height={300}
                    style={{
                      width: '100%',
                      height: 'auto'
                    }}
                  />
                  <div className="blog-conte">
                    <div className="blog-date">{post.publishDate || post.date}</div>
                    <div className="blog-title">{post.title}</div>
                    <p>{post.description || post.excerpt}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
