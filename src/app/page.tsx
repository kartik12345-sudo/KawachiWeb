import { Header } from "@/components/layout/header";
import { HeroSection } from "@/components/sections/hero-section";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <HeroSection />
      </main>
    </div>
  );
}
