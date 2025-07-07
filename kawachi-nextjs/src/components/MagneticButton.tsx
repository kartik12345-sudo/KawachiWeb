"use client";

import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  variant?: "primary" | "secondary";
  disabled?: boolean;
}

export default function MagneticButton({
  children,
  className = "",
  onClick,
  href,
  variant = "primary",
  disabled = false,
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement & HTMLButtonElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 300, mass: 0.5 };
  const xSpring = useSpring(x, springConfig);
  const ySpring = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current || disabled) return;

    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;

    // Limit magnetic effect to small movements (1-2px as requested)
    const maxDistance = 60;
    const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

    if (distance < maxDistance) {
      const force = (maxDistance - distance) / maxDistance;
      x.set(distanceX * force * 0.05); // Very subtle movement
      y.set(distanceY * force * 0.05);
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  const baseClasses = `
    relative overflow-hidden rounded-xl font-semibold transition-all duration-300
    transform-gpu will-change-transform cursor-pointer
    ${disabled ? "opacity-50 cursor-not-allowed" : ""}
  `;

  const variantClasses = {
    primary: `
      bg-gradient-to-r from-kawachi-primary via-kawachi-secondary to-kawachi-accent
      text-black px-8 py-4 text-lg
      hover:shadow-epic hover:scale-105
      active:scale-95
    `,
    secondary: `
      border-2 border-kawachi-primary bg-transparent text-kawachi-primary
      px-8 py-4 text-lg hover:bg-kawachi-primary/10
      hover:shadow-glow hover:scale-105
      active:scale-95
    `,
  };

  const Component = href ? motion.a : motion.button;

  const componentProps = href
    ? { href, target: href.startsWith("http") ? "_blank" : undefined }
    : { onClick: disabled ? undefined : onClick, type: "button" as const };

  return (
    <Component
      ref={ref}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      style={{ x: xSpring, y: ySpring }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: disabled ? 1 : 1.05 }}
      whileTap={{ scale: disabled ? 1 : 0.95 }}
      data-magnetic
      {...componentProps}
    >
      {/* Shimmer effect */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)",
          transform: "translateX(-100%)",
        }}
        animate={isHovered ? { transform: "translateX(100%)" } : {}}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      />

      {/* Glow effect */}
      {isHovered && (
        <motion.div
          className="absolute inset-0 rounded-xl"
          style={{
            background:
              variant === "primary"
                ? "radial-gradient(circle, rgba(0, 255, 255, 0.3) 0%, transparent 70%)"
                : "radial-gradient(circle, rgba(0, 255, 255, 0.2) 0%, transparent 70%)",
            filter: "blur(10px)",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />
      )}

      {/* Content */}
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
    </Component>
  );
}
