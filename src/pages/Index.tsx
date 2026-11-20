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
import { Seo } from "@/components/Seo";
import { BUSINESS, SITE_NAME, SITE_URL, absoluteUrl } from "@/lib/site";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "AccountingService",
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  description:
    "Gabinete de consultoria financeira, contabilidade, fiscalidade e gestão de recursos humanos para empresas.",
  url: absoluteUrl("/"),
  logo: absoluteUrl("/logo.png"),
  image: absoluteUrl("/og-image.jpg"),
  email: BUSINESS.email,
  telephone: BUSINESS.telephone,
  address: {
    "@type": "PostalAddress",
    streetAddress: BUSINESS.streetAddress,
    postalCode: BUSINESS.postalCode,
    addressLocality: BUSINESS.locality,
    addressCountry: BUSINESS.country,
  },
  areaServed: { "@type": "Country", name: "Portugal" },
  openingHoursSpecification: [
    { opens: "09:00", closes: "13:00" },
    { opens: "14:00", closes: "18:00" },
  ].map((hours) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    ...hours,
  })),
  knowsAbout: [
    "Consultoria Financeira",
    "Contabilidade",
    "Fiscalidade",
    "Gestão de Recursos Humanos",
    "Incentivos IEFP",
  ],
};

const Index = () => {
  return (
    <div className="min-h-screen">
      <Seo
        path="/"
        title="Outstanding Solutions | Consultoria Financeira em Torres Vedras"
        description="Consultoria financeira, contabilidade, fiscalidade e gestão de RH para empresas. Uma parceria próxima que transforma números em decisões com confiança."
        jsonLd={organizationJsonLd}
      />
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
