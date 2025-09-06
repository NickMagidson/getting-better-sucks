/**
 * Quick Contentful Test Script
 * Run this to test your Contentful connection: node test-contentful.js
 */

const contentful = require('contentful');

const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID || 'xy11ilji5bsd',
  environment: process.env.CONTENTFUL_ENVIRONMENT || 'master',
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || 'kbroWMzPe-FlQNIuQWomfGwI8F4-3oGthAqVlBfl_LE'
});

async function testConnection() {
  console.log('🔍 Testing Contentful connection...\n');

  try {
    // Test getting a specific entry
    console.log('1. Testing getEntry with ID: fAPrcF7LN1hgPnSuuJ0gs');
    const entry = await client.getEntry('fAPrcF7LN1hgPnSuuJ0gs');
    console.log('✅ Entry retrieved successfully!');
    console.log('   Content Type:', entry.sys.contentType.sys.id);
    console.log('   Created:', new Date(entry.sys.createdAt).toLocaleDateString());
    console.log('   Fields:', Object.keys(entry.fields).join(', '));
    console.log();

    // Test getting content types
    console.log('2. Getting available content types...');
    const contentTypes = await client.getContentTypes();
    console.log('✅ Content types retrieved successfully!');
    console.log('   Available content types:');
    contentTypes.items.forEach(ct => {
      console.log(`   - ${ct.name} (${ct.sys.id})`);
    });
    console.log();

    // Test getting entries with blogPost content type (if it exists)
    console.log('3. Testing blogPost content type...');
    try {
      const blogPosts = await client.getEntries({
        content_type: 'blogPost',
        limit: 5
      });
      console.log(`✅ Found ${blogPosts.items.length} blog posts!`);
      blogPosts.items.forEach(post => {
        console.log(`   - ${post.fields.title || 'Untitled'} (${post.fields.slug || 'no-slug'})`);
      });
    } catch (blogError) {
      console.log('⚠️  blogPost content type not found yet');
      console.log('   You need to create the blogPost content type first');
    }
    console.log();

    console.log('🎉 Contentful connection is working properly!');
    console.log('   Next steps:');
    console.log('   1. Create the blogPost content type using the provided JSON');
    console.log('   2. Add some blog post entries');
    console.log('   3. Test your Next.js blog at /blog/your-post-slug');

  } catch (error) {
    console.error('❌ Connection failed:', error.message);
    console.error('\n🔧 Troubleshooting:');
    console.error('   1. Check your space ID: xy11ilji5bsd');
    console.error('   2. Check your access token is correct');
    console.error('   3. Make sure the entry ID fAPrcF7LN1hgPnSuuJ0gs exists');
    console.error('   4. Verify your Contentful space is published');
  }
}

// Run the test
testConnection();
