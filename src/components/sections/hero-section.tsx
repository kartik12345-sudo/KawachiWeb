"use client";

import React from 'react';
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Logo } from '../icons/logo';

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
      
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-cyan-400/20 to-transparent blur-3xl" />
      <div className="absolute inset-0 bg-black/30 z-10" />

      <motion.div 
        className="relative z-20 container mx-auto px-4 text-center flex flex-col items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="mb-8">
           <Logo />
        </motion.div>
        <motion.h1 
          className="font-bold text-4xl md:text-6xl lg:text-7xl tracking-tight mb-4 text-gradient-hero"
          style={{ textShadow: '0 0 25px hsl(var(--primary) / 0.5), 0 0 50px hsl(var(--gradient-via) / 0.3)' }}
          variants={itemVariants}
        >
          Kawachi Infratech Private
        </motion.h1>
        <motion.h1 
          className="font-bold text-4xl md:text-6xl lg:text-7xl tracking-tight mb-6 text-gradient-hero"
          style={{ textShadow: '0 0 25px hsl(var(--primary) / 0.5), 0 0 50px hsl(var(--gradient-via) / 0.3)' }}
          variants={itemVariants}
        >
          Limited
        </motion.h1>

        <motion.p 
          className="text-lg text-blue-300 mb-6"
          variants={itemVariants}
        >
          Engineering Infrastructure for the Future
        </motion.p>
        
        <motion.div 
          className="max-w-3xl mx-auto mb-10"
          variants={itemVariants}
        >
          <p className="text-base text-muted-foreground max-w-3xl mx-auto">
            We are a forward-thinking infrastructure company delivering innovative, scalable, and sustainable engineering solutions across India's public and private sectors. Since our incorporation in 2021, we have been committed to transforming the infrastructure landscape with cutting-edge technology and engineering excellence.
          </p>
        </motion.div>

        <motion.div 
          className="flex flex-wrap justify-center gap-4"
          variants={itemVariants}
        >
          <Button asChild size="lg" className="btn-gradient rounded-lg shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40">
            <Link href="#projects">
              Company Profile
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="neumorphic-outline text-foreground hover:text-primary hover:border-primary">
            <Link href="#contact">
              Get In Touch
            </Link>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
