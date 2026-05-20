import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { InfoSection } from "./components/InfoSection";
import { TournamentSection } from "./components/TournamentSection";
import { ScheduleSection } from "./components/ScheduleSection";
import { RegistrationSection } from "./components/RegistrationSection";
import { BarSection } from "./components/BarSection";
import { GallerySection } from "./components/GallerySection";
import { SocialSection } from "./components/SocialSection";
import { FAQSection } from "./components/FAQSection";
import { CTASection } from "./components/CTASection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <InfoSection />
      <TournamentSection />
      <ScheduleSection />
      <RegistrationSection />
      <BarSection />
      <GallerySection />
      <SocialSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
}
