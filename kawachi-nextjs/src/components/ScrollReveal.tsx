"use client";

import { useEffect, useRef } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right";
}

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  duration = 0.6,
  direction = "up",
}: ScrollRevealProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      },
    );

    // Set initial state
    element.style.opacity = "0";
    element.style.transform = getInitialTransform(direction);
    element.style.transition = `opacity ${duration}s ease-out ${delay}s, transform ${duration}s ease-out ${delay}s`;

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [delay, duration, direction]);

  const getInitialTransform = (dir: string) => {
    switch (dir) {
      case "up":
        return "translateY(60px)";
      case "down":
        return "translateY(-60px)";
      case "left":
        return "translateX(60px)";
      case "right":
        return "translateX(-60px)";
      default:
        return "translateY(60px)";
    }
  };

  return (
    <div ref={elementRef} className={`scroll-reveal ${className}`}>
      {children}
      <style jsx>{`
        .scroll-reveal.animate-in {
          opacity: 1 !important;
          transform: translate(0, 0) !important;
        }
      `}</style>
    </div>
  );
}

// Performance optimization hook for lazy loading images
export const useLazyLoading = () => {
  useEffect(() => {
    if ("IntersectionObserver" in window) {
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            if (img.dataset.src) {
              img.src = img.dataset.src;
              img.classList.remove("loading");
              observer.unobserve(img);
            }
          }
        });
      });

      const images = document.querySelectorAll("img[data-src]");
      images.forEach((img) => imageObserver.observe(img));

      return () => imageObserver.disconnect();
    }
  }, []);
};

// Smooth scroll utility
export const smoothScrollTo = (elementId: string) => {
  const element = document.getElementById(elementId.replace("#", ""));
  if (element) {
    const offsetTop = element.offsetTop - 80; // Account for fixed header
    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    });
  }
};

// Performance monitoring
export const usePerformanceMonitoring = () => {
  useEffect(() => {
    // Monitor performance metrics
    if ("performance" in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === "navigation") {
            console.log("Navigation Performance:", {
              domContentLoaded:
                entry.domContentLoadedEventEnd -
                entry.domContentLoadedEventStart,
              loadComplete: entry.loadEventEnd - entry.loadEventStart,
            });
          }
        }
      });

      observer.observe({ entryTypes: ["navigation"] });

      return () => observer.disconnect();
    }
  }, []);
};
