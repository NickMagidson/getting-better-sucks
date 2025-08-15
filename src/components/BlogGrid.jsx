import Image from 'next/image';
import Link from 'next/link';

// Blog post data - in a real app, this would come from a CMS or API
const blogPosts = [
  {
    id: 'business-consulting-101',
    title: 'Business Consulting 101: A Comprehensive Guide',
    excerpt: 'A comprehensive guide to understanding business consulting, its benefits, types, and how to choose the right consultant.',
    date: 'January 4, 2025',
    image: '/6844bb1f53fa2b65f941ef9b_Blog_Images_03.jpg',
    slug: '/post/business-consulting-101'
  },
  {
    id: 'effective-leadership-in-business',
    title: 'Effective Leadership in Business: Best Practices',
    excerpt: 'Best practices for effective leadership in business, highlighting key characteristics of successful leaders.',
    date: 'January 4, 2025',
    image: '/6844bae51cb96c5fd37072ff_Blog_Images_01.jpg',
    slug: '/post/effective-leadership-in-business'
  },
  {
    id: 'the-role-of-technology-in-business',
    title: 'The Role of Technology in Modern Business',
    excerpt: 'An overview of the impact of technology on modern business operations and its benefits.',
    date: 'January 4, 2025',
    image: '/6844baf9d29deecec6ac0b05_Blog_Images_02.jpg',
    slug: '/post/the-role-of-technology-in-business'
  },
  {
    id: 'strategic-planning-in-business',
    title: 'Strategic Planning in Business: Key Insights',
    excerpt: 'An exploration of strategic planning in business, outlining its importance and the steps involved in the process.',
    date: 'January 4, 2025',
    image: '/6844bb2ea37eff1cf4462c82_Blog_Images_04.jpg',
    slug: '/post/strategic-planning-in-business'
  },
  {
    id: 'navigating-business-challenges',
    title: 'Navigating Business Challenges: Strategies for Success',
    excerpt: 'Strategies for overcoming common business challenges and ensuring success in a competitive landscape.',
    date: 'January 4, 2025',
    image: '/6844bb3b2da81548f6440053_Blog_Images_05.jpg',
    slug: '/post/navigating-business-challenges'
  }
];

// Converted from Webflow blog grid section
// Preserves the 2-column grid layout and blog item styling
export default function BlogGrid() {
  return (
    <div className="section">
      <div className="container">
        <div className="blog-grid-twos-wrapper space-bott w-dyn-list">
          <div className="blog-grid-2x w-dyn-items" role="list">
            {blogPosts.map((post) => (
              <div key={post.id} className="blog-grid-twos-item w-dyn-item" role="listitem">
                <Link className="blog-item boxed w-inline-block" href={post.slug}>
                  <Image 
                    alt={post.title}
                    className="blog-thumbnail" 
                    src={post.image}
                    width={400}
                    height={300}
                    style={{
                      width: '100%',
                      height: 'auto'
                    }}
                  />
                  <div className="blog-conte">
                    <div className="blog-date">{post.date}</div>
                    <div className="blog-title">{post.title}</div>
                    <p>{post.excerpt}</p>
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
