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

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <BlogHero />
      <BlogGrid />
      <Footer />
    </>
  );
}
