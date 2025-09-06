/**
 * Test the blog post retrieval with current content
 */

const { getBlogPost, getAllBlogPostSlugs } = require('./lib/contentful.js');

async function testBlogPost() {
  try {
    console.log('🔍 Testing blog post retrieval...\n');

    // Get all available slugs
    console.log('1. Getting all blog post slugs...');
    const slugs = await getAllBlogPostSlugs();
    console.log('Available slugs:', slugs);
    console.log();

    // Test with the generated slug for "How to ADHD"
    const testSlug = 'how-to-adhd';
    console.log(`2. Testing getBlogPost with slug: "${testSlug}"`);
    const post = await getBlogPost(testSlug);
    
    if (post) {
      console.log('✅ Blog post retrieved successfully!');
      console.log('   Title:', post.title);
      console.log('   Slug:', post.slug);
      console.log('   Description:', post.description);
      console.log('   Publish Date:', post.publishDate);
      console.log('   Featured Image URL:', post.featuredImage.url);
      console.log('   Content length:', post.content.length, 'characters');
      console.log();
      console.log('🎉 Contentful integration is working!');
      console.log('   You can now visit: http://localhost:3000/blog/how-to-adhd');
    } else {
      console.log('❌ No blog post found with that slug');
      console.log('   Make sure your content is published in Contentful');
    }

  } catch (error) {
    console.error('❌ Error testing blog post:', error.message);
  }
}

testBlogPost();
