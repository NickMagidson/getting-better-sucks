import AboutHero from '../../components/AboutHero';
import FinalCTASection from '../../components/FinalCTASection';
import FixedNavbar from '../../components/FixedNavbar';
import Footer from '../../components/Footer';
import JourneyTimelineSection from '../../components/JourneyTimelineSection';
import MyApproachSection from '../../components/MyApproachSection';
import QualificationsSection from '../../components/QualificationsSection';

// Metadata for the about page
export const metadata = {
  title: "About Serenya – Peaceful Wellness Template",
  description: "Learn more about Serenya, the soft and modern Webflow template for therapists, wellness coaches, and holistic professionals seeking a soothing, personal brand.",
  openGraph: {
    title: "About Serenya – Peaceful Wellness Template",
    description: "Learn more about Serenya, the soft and modern Webflow template for therapists, wellness coaches, and holistic professionals seeking a soothing, personal brand.",
    type: "website",
  },
  twitter: {
    title: "About Serenya – Peaceful Wellness Template",
    description: "Learn more about Serenya, the soft and modern Webflow template for therapists, wellness coaches, and holistic professionals seeking a soothing, personal brand.",
    card: "summary_large_image",
  },
};

// About page component - converted from Webflow about page
export default function AboutPage() {
  return (
    <>
      {/* Fixed Navigation */}
      <FixedNavbar />
      
      {/* Main Content */}
      <main>
        {/* About Hero Section */}
        <AboutHero />
        
        {/* My Approach Section */}
        <MyApproachSection />
        
        {/* Journey Timeline Section */}
        <JourneyTimelineSection />
        
        {/* Qualifications Section */}
        <QualificationsSection />
        
        {/* Final CTA Section */}
        <FinalCTASection />
      </main>
      
      {/* Footer */}
      <Footer />
    </>
  );
}
