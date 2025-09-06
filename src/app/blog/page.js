import { getAllBlogPosts } from '../../../lib/contentful';
import BlogGrid from '../../components/BlogGrid';
import BlogHero from '../../components/BlogHero';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';

export const metadata = {
  title: "Blog – Serenya Wellness & Therapy Template",
  description: "Share insights, tips, and stories with Serenya's peaceful blog layout. A content space designed for wellness, personal development, and mindful living.",
  openGraph: {
    title: "Blog – Serenya Wellness & Therapy Template",
    description: "Share insights, tips, and stories with Serenya's peaceful blog layout. A content space designed for wellness, personal development, and mindful living.",
  },
  twitter: {
    title: "Blog – Serenya Wellness & Therapy Template",
    description: "Share insights, tips, and stories with Serenya's peaceful blog layout. A content space designed for wellness, personal development, and mindful living.",
    card: "summary_large_image",
  },
};

export default async function BlogPage() {
  let blogData = { posts: [], total: 0, hasMore: false };

  try {
    // Try to fetch from Contentful first
    console.log('Fetching blog posts from Contentful...');
    blogData = await getAllBlogPosts(10, 0);
    console.log('Successfully fetched from Contentful:', blogData.posts.length, 'posts');
  } catch (error) {
    console.error('Error fetching from Contentful, will use fallback data in BlogGrid:', error);
  }

  return (
    <>
      <Navbar />
      <BlogHero />
      <BlogGrid posts={blogData.posts} />
      <Footer />
    </>
  );
}
