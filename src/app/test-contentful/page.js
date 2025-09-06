import { getContentTypes, testContentfulConnection } from '../../../lib/contentful';

export default async function ContentfulTestPage() {
  let connectionStatus = 'Not tested';
  let entryData = null;
  let contentTypes = null;
  let error = null;

  try {
    // Test the connection with your specific entry ID
    entryData = await testContentfulConnection('fAPrcF7LN1hgPnSuuJ0gs');
    connectionStatus = 'Success ✅';
    
    // Get available content types
    contentTypes = await getContentTypes();
  } catch (err) {
    connectionStatus = 'Failed ❌';
    error = err.message;
  }

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h1>Contentful API Test</h1>
      
      <div style={{ marginBottom: '2rem' }}>
        <h2>Connection Status: {connectionStatus}</h2>
        
        {error && (
          <div style={{ 
            background: '#ffebee', 
            color: '#c62828', 
            padding: '1rem', 
            borderRadius: '4px',
            marginBottom: '1rem'
          }}>
            <strong>Error:</strong> {error}
          </div>
        )}
      </div>

      {entryData && (
        <div style={{ marginBottom: '2rem' }}>
          <h2>Entry Data (ID: fAPrcF7LN1hgPnSuuJ0gs)</h2>
          <div style={{ 
            background: '#f5f5f5', 
            padding: '1rem', 
            borderRadius: '4px',
            overflow: 'auto'
          }}>
            <h3>Entry Information:</h3>
            <p><strong>Content Type:</strong> {entryData.sys.contentType.sys.id}</p>
            <p><strong>Created:</strong> {new Date(entryData.sys.createdAt).toLocaleString()}</p>
            <p><strong>Updated:</strong> {new Date(entryData.sys.updatedAt).toLocaleString()}</p>
            
            <h3>Fields:</h3>
            <pre style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>
              {JSON.stringify(entryData.fields, null, 2)}
            </pre>
          </div>
        </div>
      )}

      {contentTypes && (
        <div style={{ marginBottom: '2rem' }}>
          <h2>Available Content Types</h2>
          <div style={{ 
            background: '#f5f5f5', 
            padding: '1rem', 
            borderRadius: '4px'
          }}>
            {contentTypes.items.map(ct => (
              <div key={ct.sys.id} style={{ marginBottom: '1rem', borderBottom: '1px solid #ddd', paddingBottom: '1rem' }}>
                <h3>{ct.name} (ID: {ct.sys.id})</h3>
                <p><strong>Fields:</strong></p>
                <ul>
                  {ct.fields.map(field => (
                    <li key={field.id}>
                      <strong>{field.name}</strong> ({field.id}) - Type: {field.type}
                      {field.required && <span style={{ color: 'red' }}> *required</span>}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}

      <div style={{ marginTop: '2rem', padding: '1rem', background: '#e3f2fd', borderRadius: '4px' }}>
        <h3>Next Steps:</h3>
        <ol>
          <li>If connection failed, check your environment variables in .env.local</li>
          <li>Create a "blogPost" content type in Contentful using the provided JSON structure</li>
          <li>Add some blog post entries to test the BlogPost component</li>
          <li>Visit <code>/blog/your-post-slug</code> to see your content</li>
        </ol>
      </div>
    </div>
  );
}

// Metadata for the test page
export const metadata = {
  title: 'Contentful API Test',
  description: 'Testing Contentful API connection and configuration',
};
