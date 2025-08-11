import Navbar from '@/components/Navbar';

export default function TestNavbar() {
  return (
    <div>
      <Navbar />
      <main style={{ padding: '2rem' }}>
        <h1>Navbar Test Page</h1>
        <p>This page demonstrates the converted Webflow navbar component.</p>
        <div style={{ height: '200vh', background: 'linear-gradient(to bottom, #f0f0f0, #e0e0e0)' }}>
          <p>Scroll to test the sticky navbar behavior.</p>
        </div>
      </main>
    </div>
  );
}
