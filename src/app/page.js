import FAQSection from "@/components/FAQSection";
import FeaturesGrid from "@/components/FeaturesGrid";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import JourneySection from "@/components/JourneySection";
import Navbar from "@/components/Navbar";
import SafeSpaceSection from "@/components/SafeSpaceSection";
import TestimonialsSection from "@/components/TestimonialsSection";


export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturesGrid />
      <SafeSpaceSection />
      <JourneySection />
      <TestimonialsSection />
      <FAQSection />
      <Footer />
    </>
  );
}
