
"use client";
import React, { useMemo, useState, useEffect } from 'react';

export function AnimatedBackground() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const dots = useMemo(() => {
    if (!isMounted) return [];
    
    const numDots = 50;
    const colors = ['#00FFFF', '#FF00FF', '#00F5A0'];
    return Array.from({ length: numDots }).map((_, i) => {
      const size = Math.random() * 3 + 1;
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      const duration = Math.random() * 10 + 10;
      const delay = Math.random() * 10;
      const color = colors[Math.floor(Math.random() * colors.length)];

      const xEnd = x + (Math.random() - 0.5) * 40;
      const yEnd = y + (Math.random() - 0.5) * 40;
      
      return (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            left: `${x}%`,
            top: `${y}%`,
            backgroundColor: color,
            filter: `blur(${Math.random() * 3 + 1}px)`,
            animation: `dots ${duration}s infinite alternate ease-in-out`,
            animationDelay: `${delay}s`,
            // @ts-ignore
            '--x-end': `${xEnd - x}vw`,
            '--y-end': `${yEnd - y}vh`,
          }}
        />
      );
    });
  }, [isMounted]);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="absolute inset-0 bg-background z-0 overflow-hidden">
      {dots}
    </div>
  );
}
