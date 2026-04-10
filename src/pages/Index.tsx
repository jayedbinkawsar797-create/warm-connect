import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ZebraDifference from "@/components/ZebraDifference";
import StatsCounter from "@/components/StatsCounter";
import ModelsShowcase from "@/components/ModelsShowcase";
import ParallaxImageDivider from "@/components/ParallaxImageDivider";
import Configurator from "@/components/Configurator";
import FeaturesGrid from "@/components/FeaturesGrid";
import GalleryStrip from "@/components/GalleryStrip";
import SpecsSection from "@/components/SpecsSection";
import FinancingSection from "@/components/FinancingSection";
import TestimonialSection from "@/components/TestimonialSection";
import CTABanner from "@/components/CTABanner";
import TestDriveForm from "@/components/TestDriveForm";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import StickyReservationBar from "@/components/StickyReservationBar";
import cartWhite from "@/assets/cart-white.webp";
import cartBlue from "@/assets/cart-blue.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ZebraDifference />
      <StatsCounter />
      <ModelsShowcase />
      <ParallaxImageDivider
        image={cartWhite}
        title="Experience Luxury in Motion"
        subtitle="Every detail crafted for those who demand the extraordinary"
        overlay="gold"
      />
      <Configurator />
      <FeaturesGrid />
      <GalleryStrip />
      <ParallaxImageDivider
        image={cartBlue}
        overlay="red"
      />
      <SpecsSection />
      <FinancingSection />
      <TestimonialSection />
      <CTABanner />
      <TestDriveForm />
      <AboutSection />
      <Footer />
      <StickyReservationBar />
    </div>
  );
};

export default Index;
