import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { ServicesSection } from "@/components/sections/services-section";
import { AboutSection } from "@/components/sections/about-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { FaqSection } from "@/components/sections/faq-section";
import { NewsletterSection } from "@/components/sections/newsletter-section";
import { Toaster } from "@/components/ui/toaster";
import { MotionProvider } from "@/components/providers/motion-provider";
import { ContactSection } from "@/components/sections/contact-section";
import { NewsSection } from "@/components/sections/news-section";
import { RippleProvider } from "@/components/providers/ripple-provider";

export default function Home() {
  return (
    <MotionProvider>
      <RippleProvider>
        <div className="flex flex-col min-h-screen bg-background">
          <Header />
          <main className="flex-grow">
            <HeroSection />
            <ServicesSection />
            <AboutSection />
            <ProjectsSection />
            <NewsSection />
            <FaqSection />
            <NewsletterSection />
            <ContactSection />
          </main>
          <Footer />
          <Toaster />
        </div>
      </RippleProvider>
    </MotionProvider>
  );
}
