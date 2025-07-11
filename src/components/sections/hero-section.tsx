import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section id="home" className="relative h-screen min-h-[700px] w-full flex items-center justify-center text-white">
      <div className="absolute inset-0 bg-primary/40 z-10" />
      <Image
        src="https://placehold.co/1920x1080.png"
        alt="Modern architecture background"
        data-ai-hint="modern architecture"
        fill
        className="object-cover"
        priority
      />
      <div className="relative z-20 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-shadow-lg animate-fade-in-up">
            Engineering Tomorrow's Infrastructure, Today.
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto mb-10 text-shadow animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Kawachi Infratech is at the forefront of innovation, building resilient and sustainable solutions for a connected world.
          </p>
          <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="#projects">
                Explore Our Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
