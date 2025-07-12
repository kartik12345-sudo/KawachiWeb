"use client";

import { useRef } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { useOnScreen } from '@/hooks/use-on-screen';
import Link from 'next/link';

const projects = [
  {
    title: 'Skylark Bridge',
    slug: 'skylark-bridge',
    location: 'Metropolis, USA',
    category: 'Infrastructure',
    image: { src: 'https://images.unsplash.com/photo-1429041966141-44d228a42775?q=80&w=600&h=400&fit=crop', hint: 'suspension bridge' },
  },
  {
    title: 'Apex Tower',
    slug: 'apex-tower',
    location: 'Gotham City, USA',
    category: 'Commercial',
    image: { src: 'https://images.unsplash.com/photo-1582211516142-a0a149a46327?q=80&w=600&h=400&fit=crop', hint: 'modern skyscraper' },
  },
  {
    title: 'Coastal Highway Expansion',
    slug: 'coastal-highway-expansion',
    location: 'Star City, USA',
    category: 'Transportation',
    image: { src: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=600&h=400&fit=crop', hint: 'coastal highway' },
  },
  {
    title: 'Olympus Stadium',
    slug: 'olympus-stadium',
    location: 'Central City, USA',
    category: 'Recreational',
    image: { src: 'https://images.unsplash.com/photo-1596249313364-24538b726c59?q=80&w=600&h=400&fit=crop', hint: 'sports stadium' },
  },
];

export function ProjectsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref, { threshold: 0.1 });

  return (
    <section id="projects" className="py-20 md:py-32 bg-background overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-sm font-bold uppercase text-primary mb-2">Our Portfolio</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Showcasing Our Finest Work
          </h3>
          <p className="text-muted-foreground">
            Explore a selection of our landmark projects that demonstrate our commitment to excellence and innovation in construction.
          </p>
        </div>

        <div className={isVisible ? 'is-visible' : ''}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={project.title} className="animate-in-view" style={{ transitionDelay: `${index * 150}ms` }}>
                <Card className="overflow-hidden group h-full flex flex-col">
                  <CardContent className="p-0 relative">
                    <Image
                      src={project.image.src}
                      alt={project.title}
                      data-ai-hint={project.image.hint}
                      width={600}
                      height={400}
                      className="object-cover w-full h-64 group-hover:scale-105 transition-transform duration-500"
                    />
                     <Badge variant="default" className="absolute top-4 right-4 bg-primary/80 backdrop-blur-sm">{project.category}</Badge>
                  </CardContent>
                  <CardFooter className="p-6 bg-secondary flex-grow flex-col items-start">
                    <h4 className="text-xl font-bold mb-1">{project.title}</h4>
                    <p className="text-muted-foreground mb-4">{project.location}</p>
                    <Button asChild variant="link" className="p-0 h-auto mt-auto">
                      <Link href={`/project/${project.slug}`}>
                        View Project Details <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
