"use client";

import { useRef } from 'react';
import { Building2, Wrench, DraftingCompass, ClipboardCheck } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';

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
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="services" className="py-20 md:py-32 bg-secondary/30 overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm font-bold uppercase text-primary mb-2">Our Services</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
            Let's Build the Future
          </h3>
          <p className="text-muted-foreground">
            We offer a comprehensive range of services to meet the diverse needs of our clients, from initial design to final construction.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {services.map((service) => (
            <motion.div key={service.title} variants={itemVariants}>
              <Card className="text-center h-full glassmorphic group hover:-translate-y-2 transition-transform duration-300 hover:shadow-2xl hover:shadow-cyan-500/10">
                <CardHeader className="items-center p-6 md:p-8">
                  <motion.div 
                    className="p-4 bg-primary/10 rounded-full mb-4 border border-primary/20 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20"
                    whileHover={{ rotate: 15 }}
                  >
                    <service.icon className="h-8 w-8 text-primary icon-glow transition-all duration-300 group-hover:text-white" />
                  </motion.div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="pt-2 text-muted-foreground">{service.description}</CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
