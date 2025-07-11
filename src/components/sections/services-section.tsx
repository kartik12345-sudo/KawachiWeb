"use client";

import { useRef } from 'react';
import { Building2, Wrench, DraftingCompass, ClipboardCheck } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { useOnScreen } from '@/hooks/use-on-screen';

const services = [
  {
    icon: Building2,
    title: 'General Construction',
    description: 'Delivering high-quality construction services for residential, commercial, and industrial projects with precision and care.'
  },
  {
    icon: DraftingCompass,
    title: 'Architectural Design',
    description: 'Innovative and sustainable design solutions that blend functionality with aesthetic appeal, tailored to each client\'s vision.'
  },
  {
    icon: ClipboardCheck,
    title: 'Project Management',
    description: 'Comprehensive project management to ensure your project is completed on time, within budget, and to the highest standards.'
  },
  {
    icon: Wrench,
    title: 'Renovation & Remodeling',
    description: 'Transforming existing spaces with modern solutions, improving functionality and adding value to your property.'
  }
];

export function ServicesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref);

  return (
    <section id="services" className="py-20 md:py-32 bg-secondary" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-sm font-bold uppercase text-primary mb-2">Our Services</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Expertise You Can Build On
          </h3>
          <p className="text-muted-foreground">
            We offer a comprehensive range of services to meet the diverse needs of our clients, from initial design to final construction.
          </p>
        </div>

        <div className={isVisible ? 'is-visible' : ''}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={service.title} className="animate-in-view" style={{ transitionDelay: `${index * 150}ms` }}>
                <Card className="text-center h-full hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border-transparent hover:border-primary/20 bg-background">
                  <CardHeader className="items-center">
                    <div className="p-4 bg-primary/10 rounded-full mb-4">
                      <service.icon className="h-8 w-8 text-primary icon-glow" />
                    </div>
                    <CardTitle>{service.title}</CardTitle>
                    <CardDescription className="pt-2">{service.description}</CardDescription>
                  </CardHeader>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
