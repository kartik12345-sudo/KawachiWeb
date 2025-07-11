"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const Orb = ({ className }: { className: string }) => {
  return <div className={`absolute rounded-full bg-cyan-500/20 blur-xl animate-float ${className}`} />;
};

export function HeroSection() {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }
    
  return (
    <section id="home" className="relative h-screen min-h-[700px] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black z-0" />
        
        {/* Animated Orbs */}
        <Orb className="w-48 h-48 top-[10%] left-[5%]" />
        <Orb className="w-32 h-32 top-[20%] right-[10%]" style={{ animationDelay: '2s' }}/>
        <Orb className="w-24 h-24 bottom-[30%] left-[20%]" style={{ animationDelay: '4s' }}/>
        <Orb className="w-40 h-40 bottom-[15%] right-[15%]" style={{ animationDelay: '1s' }}/>


      <div className="relative z-20 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-gradient animate-fade-in-up">
            Engineering Infrastructure for the Future
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Leading Construction & Infrastructure Development Across India
          </p>
          <p className="text-base text-white/60 max-w-3xl mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            Kawachi Infratech delivers innovative, scalable, and sustainable engineering solutions with cutting-edge technology, BIM integration, and proven expertise.
          </p>
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <Button asChild size="lg" className="btn-gradient rounded-lg">
              <Link href="#projects">
                Explore Projects
              </Link>
            </Button>
             <Button asChild size="lg" variant="outline" className="border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 hover:text-cyan-300 rounded-lg">
              <Link href="#services">
                Our Services
              </Link>
            </Button>
             <Button asChild size="lg" variant="outline" className="border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 hover:text-cyan-300 rounded-lg">
              <Link href="#contact">
                Get Quote
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-10 z-20">
        <div className="w-8 h-8 rounded-full border-2 border-white/50 flex items-center justify-center">
            <span className="font-bold text-white/50">N</span>
        </div>
      </div>
    </section>
  );
}
