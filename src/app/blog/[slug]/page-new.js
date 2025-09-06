// Force dynamic rendering to avoid build-time API calls
export const dynamic = 'force-dynamic';

// Export generateStaticParams for static generation
export async function generateStaticParams() {
  return [
    { slug: 'business-consulting-101' },
    { slug: 'navigating-business-challenges' },
  ];
}

// Generate metadata for SEO
export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  
  return {
    title: `Blog Post: ${resolvedParams.slug}`,
    description: 'Blog post content',
  };
}

export default async function BlogPostPage({ params }) {
  const resolvedParams = await params;
  
  return (
    <div>
      <h1>Blog Post: {resolvedParams.slug}</h1>
      <p>Blog post content will be restored after fixing build issues.</p>
    </div>
  );
}
