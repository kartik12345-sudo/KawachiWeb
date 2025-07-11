"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface NavigationProps {
  className?: string;
}

export default function Navigation({ className = "" }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const menuItems = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "About", href: "#about" },
    { label: "Sponsors", href: "#sponsors" },
    { label: "News", href: "#news" },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleMenuClick = (href: string) => {
    closeMenu();
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 bg-kawachi-space/95 backdrop-blur-lg border-b border-kawachi-primary/20 ${className}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-kawachi-primary via-kawachi-secondary to-kawachi-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">K</span>
              </div>
              <span className="text-kawachi-primary font-bold text-xl">
                Kawachi
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {menuItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleMenuClick(item.href)}
                  className="text-white hover:text-kawachi-primary transition-colors duration-300 font-medium"
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => handleMenuClick("#contact")}
                className="px-6 py-2 bg-gradient-to-r from-kawachi-primary to-kawachi-secondary rounded-full text-white font-medium hover:scale-105 transition-transform duration-300"
              >
                Contact
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="relative w-8 h-8 flex flex-col justify-center items-center z-50"
                aria-label={isOpen ? "Close menu" : "Open menu"}
              >
                <motion.div
                  className="w-6 h-0.5 bg-kawachi-primary origin-center"
                  animate={{
                    rotate: isOpen ? 45 : 0,
                    y: isOpen ? 0 : -4,
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                />
                <motion.div
                  className="w-6 h-0.5 bg-kawachi-primary origin-center"
                  animate={{
                    opacity: isOpen ? 0 : 1,
                    x: isOpen ? -8 : 0,
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                />
                <motion.div
                  className="w-6 h-0.5 bg-kawachi-primary origin-center"
                  animate={{
                    rotate: isOpen ? -45 : 0,
                    y: isOpen ? 0 : 4,
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-kawachi-space/95 backdrop-blur-lg md:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full space-y-8 px-8">
              {/* Gradient decoration */}
              <div className="absolute left-8 top-1/2 transform -translate-y-1/2">
                <div className="w-8 h-32 bg-gradient-to-b from-kawachi-primary to-kawachi-accent rounded-full" />
              </div>

              {/* Menu Items */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.4 }}
                className="flex flex-col space-y-6 text-center"
              >
                {menuItems.map((item, index) => (
                  <motion.button
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + index * 0.1, duration: 0.4 }}
                    onClick={() => handleMenuClick(item.href)}
                    className="text-white text-xl font-medium hover:text-kawachi-primary transition-colors duration-300 py-2 px-6 rounded-full border border-white/10 hover:border-kawachi-primary/50"
                  >
                    {item.label}
                  </motion.button>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.4 }}
                className="flex flex-col space-y-4 mt-8"
              >
                <button
                  onClick={() => handleMenuClick("#portfolio")}
                  className="px-8 py-3 bg-gradient-to-r from-kawachi-primary to-kawachi-secondary rounded-full text-white font-medium text-lg"
                >
                  Explore Projects
                </button>
                <button
                  onClick={() => handleMenuClick("#services")}
                  className="px-8 py-3 border-2 border-kawachi-primary text-kawachi-primary rounded-full font-medium text-lg hover:bg-kawachi-primary hover:text-white transition-all duration-300"
                >
                  Our Services
                </button>
                <button
                  onClick={() => handleMenuClick("#contact")}
                  className="px-8 py-3 border-2 border-kawachi-secondary text-kawachi-secondary rounded-full font-medium text-lg hover:bg-kawachi-secondary hover:text-white transition-all duration-300"
                >
                  Get Quote
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
