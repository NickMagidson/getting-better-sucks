// Force dynamic rendering to avoid build-time API calls
export const dynamic = 'force-dynamic';

export default function ContentfulTestPage() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h1>Contentful API Test</h1>
      
      <div style={{ marginBottom: '2rem' }}>
        <h2>Connection Status: Test page temporarily disabled during build fixes</h2>
        
        <div style={{ 
          background: '#e3f2fd', 
          padding: '1rem', 
          borderRadius: '4px', 
          marginTop: '1rem' 
        }}>
          <p>This test page will be restored after resolving build issues.</p>
        </div>
      </div>
    </div>
  );
}
