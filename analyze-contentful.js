/**
 * Analyze existing Contentful structure
 */

const contentful = require('contentful');

const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID || 'xy11ilji5bsd',
  environment: process.env.CONTENTFUL_ENVIRONMENT || 'master',
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || 'kbroWMzPe-FlQNIuQWomfGwI8F4-3oGthAqVlBfl_LE'
});

async function analyzeStructure() {
  try {
    // Get the specific entry
    const entry = await client.getEntry('fAPrcF7LN1hgPnSuuJ0gs');
    console.log('📋 Current entry structure:');
    console.log('Fields available:', Object.keys(entry.fields));
    console.log('\nField details:');
    Object.entries(entry.fields).forEach(([key, value]) => {
      console.log(`  ${key}:`, typeof value === 'object' ? JSON.stringify(value, null, 2) : value);
    });

    // Get the content type structure
    const contentType = await client.getContentType('blogPost');
    console.log('\n📝 Content type structure:');
    contentType.fields.forEach(field => {
      console.log(`  - ${field.name} (${field.id}): ${field.type}${field.required ? ' *required' : ''}`);
    });

  } catch (error) {
    console.error('Error:', error.message);
  }
}

analyzeStructure();
