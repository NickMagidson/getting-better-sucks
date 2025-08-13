import ContactPage from "@/components/ContactPage";
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

// Metadata for the contact page
export const metadata = {
  title: 'Contact - Serenya Wellness Template',
  description: 'Connect with clients through Serenya\'s calming contact page - perfect for therapists, personal trainers, and holistic coaches ready to support others.',
  openGraph: {
    title: 'Contact - Serenya Wellness Template',
    description: 'Connect with clients through Serenya\'s calming contact page - perfect for therapists, personal trainers, and holistic coaches ready to support others.',
  },
  twitter: {
    title: 'Contact - Serenya Wellness Template',
    description: 'Connect with clients through Serenya\'s calming contact page - perfect for therapists, personal trainers, and holistic coaches ready to support others.',
    card: 'summary_large_image',
  },
};

// Contact page - converted from Webflow contact/index.html
// Uses App Router structure with server components for metadata
export default function Contact() {
  return (
    <>
      <Navbar />
      <main>
        <ContactPage />
      </main>
      <Footer />
    </>
  );
}
