"use client";

import React from 'react';
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const Orb = ({ className, size, top, left, animation }: { className?: string, size: number, top: string, left: string, animation: string }) => {
  const [style, setStyle] = React.useState({});

  React.useEffect(() => {
    setStyle({
      width: `${size}rem`,
      height: `${size}rem`,
      top,
      left,
      animation: `${animation} 6s ease-in-out infinite`,
    });
  }, [size, top, left, animation]);
  
  return <div className={cn("absolute rounded-full bg-gradient-to-br from-cyan-500/30 to-purple-500/30 blur-3xl", className)} style={style} />;
};

export function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="home" className="relative h-screen min-h-[700px] w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-background z-0" />
      
      {/* Animated Orbs */}
      <Orb size={18} top="5%" left="10%" animation="float" />
      <Orb size={14} top="15%" left="80%" animation="float" />
      <Orb size={12} top="70%" left="25%" animation="float" />
      <Orb size={16} top="60%" left="90%" animation="float" />
      <div className="absolute inset-0 bg-black/30 z-10" />

      <motion.div 
        className="relative z-20 container mx-auto px-4 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-4xl mx-auto">
          <motion.h1 
            className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-gradient"
            style={{ textShadow: '0 0 25px hsl(var(--primary) / 0.5), 0 0 50px hsl(var(--gradient-to) / 0.3)' }}
            variants={itemVariants}
          >
            Engineering Infrastructure for the Future
          </motion.h1>

          <motion.div 
            className="p-6 md:p-8 rounded-xl glassmorphic max-w-3xl mx-auto mb-10"
            variants={itemVariants}
          >
            <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto mb-4">
              Leading Construction & Infrastructure Development Across India
            </p>
            <p className="text-base text-muted-foreground max-w-3xl mx-auto">
              Kawachi Infratech delivers innovative, scalable, and sustainable engineering solutions with cutting-edge technology, BIM integration, and proven expertise.
            </p>
          </motion.div>

          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            variants={itemVariants}
          >
            <Button asChild size="lg" className="btn-gradient rounded-lg shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40">
              <Link href="#projects">
                Explore Projects
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="neumorphic-outline text-foreground hover:text-primary hover:border-primary">
              <Link href="#services">
                Our Services
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="neumorphic-outline text-foreground hover:text-primary hover:border-primary">
              <Link href="#contact">
                Get Quote
              </Link>
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
