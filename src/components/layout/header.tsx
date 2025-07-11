"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/icons/logo";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Portfolio" },
  { href: "#about", label: "About" },
  { href: "#news", label: "News" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const menuVariants = {
    hidden: { opacity: 0, y: "-100%" },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
        staggerChildren: 0.1,
      } 
    },
    exit: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const navItemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled ? "bg-background/80 shadow-md backdrop-blur-md border-b border-white/10" : "bg-transparent"
        )}
      >
        <div className="container mx-auto px-4">
          <div className="flex h-24 items-center justify-between">
            <Link href="#home" className="relative z-10">
              <Logo />
            </Link>
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary hover:drop-shadow-[0_0_8px_hsl(var(--primary))]"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="flex items-center gap-4">
               <Button asChild className="hidden md:inline-flex btn-gradient rounded-lg shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40">
                <Link href="#contact">Get a Quote</Link>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden text-foreground"
                onClick={toggleMenu}
                aria-label="Toggle menu"
              >
                <AnimatePresence initial={false} mode="wait">
                  <motion.div
                    key={isMenuOpen ? 'x' : 'menu'}
                    initial={{ rotate: 45, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -45, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                  </motion.div>
                </AnimatePresence>
              </Button>
            </div>
          </div>
        </div>
      </header>
      
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl md:hidden"
            onClick={() => setIsMenuOpen(false)}
          >
            <div className="container mx-auto px-4 flex flex-col items-center justify-center h-full">
              <motion.nav 
                className="flex flex-col items-center gap-8"
              >
                {navLinks.map((link) => (
                  <motion.div key={link.href} variants={navItemVariants}>
                    <Link
                      href={link.href}
                      className="text-3xl font-bold text-foreground transition-colors hover:text-primary"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </motion.nav>
              <motion.div variants={navItemVariants} className="mt-12">
                <Button asChild className="btn-gradient rounded-lg shadow-lg shadow-cyan-500/20" size="lg" onClick={() => setIsMenuOpen(false)}>
                  <Link href="#contact">Get a Quote</Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
