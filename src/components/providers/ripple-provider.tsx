"use client";

import React, { useCallback, useEffect } from 'react';

export function RippleProvider({ children }: { children: React.ReactNode }) {
  const createRipple = useCallback((event: MouseEvent) => {
    const target = event.currentTarget as HTMLElement;
    if (!target) return;

    // Check if the user is on a touch device
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      return;
    }
    
    // Check if the click is on a button or link specifically
    const button = target.closest('button, a, [role="button"]');
    if (!button) return;

    const rect = button.getBoundingClientRect();
    const ripple = document.createElement('span');

    ripple.className = 'ripple';
    ripple.style.left = `${event.clientX - rect.left}px`;
    ripple.style.top = `${event.clientY - rect.top}px`;
    
    button.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 600);
  }, []);

  useEffect(() => {
    document.addEventListener('click', createRipple);
    return () => {
      document.removeEventListener('click', createRipple);
    };
  }, [createRipple]);

  return <>{children}</>;
}
