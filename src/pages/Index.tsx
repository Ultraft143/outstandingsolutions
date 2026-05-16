import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ChallengesSection } from "@/components/ChallengesSection";
import { StatsStrip } from "@/components/StatsStrip";
import { AboutSection } from "@/components/AboutSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ValuesMarquee } from "@/components/ValuesMarquee";
import { DifferenceSection } from "@/components/DifferenceSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ChallengesSection />
        <StatsStrip />
        <AboutSection />
        <ServicesSection />
        <ValuesMarquee />
        <DifferenceSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
