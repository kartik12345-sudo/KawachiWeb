"use client";

import { useRef } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { CheckCircle } from 'lucide-react';
import { useOnScreen } from '@/hooks/use-on-screen';

export function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref, { threshold: 0.2 });

  const keyPoints = [
    "Commitment to Quality",
    "Sustainable Practices",
    "Client-Centric Approach"
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-background overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className={isVisible ? 'is-visible' : ''}>
            <div className="animate-in-view" style={{ transitionDelay: '200ms' }}>
              <Image
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=600&h=700&fit=crop"
                alt="Construction team meeting"
                data-ai-hint="construction team"
                width={600}
                height={700}
                className="rounded-lg shadow-2xl object-cover w-full h-full"
              />
            </div>
          </div>
          <div className={isVisible ? 'is-visible' : ''}>
            <div className="animate-in-view" style={{ transitionDelay: '400ms' }}>
              <h2 className="text-sm font-bold uppercase text-primary mb-2">About Kawachi</h2>
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                Pioneering the Future of Construction
              </h3>
              <p className="text-muted-foreground mb-6">
                For over two decades, Kawachi Infratech has been a leader in the civil engineering and construction industry. Our mission is to deliver high-quality, innovative, and sustainable infrastructure projects that stand the test of time and contribute to a better future.
              </p>
              <ul className="space-y-4 mb-8">
                {keyPoints.map((point, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-accent icon-glow" />
                    <span className="font-semibold">{point}</span>
                  </li>
                ))}
              </ul>
              <Button asChild size="lg" variant="outline">
                <Link href="/project/pioneering-the-future">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
