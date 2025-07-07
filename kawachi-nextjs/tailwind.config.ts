import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "dm-sans": ["DM Sans", "sans-serif"],
      },
      colors: {
        kawachi: {
          primary: "#00ffff",
          secondary: "#0080ff",
          accent: "#ff00ff",
          tertiary: "#ff6b6b",
          quaternary: "#4ecdc4",
          dark: "#0a0a0a",
          darker: "#050505",
          space: "#000000",
        },
      },
      animation: {
        "cursor-pulse": "cursorPulse 3s ease-in-out infinite",
        "planet-rotate": "planetRotate 60s linear infinite",
        float: "float 6s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite alternate",
        typewriter: "typewriter 3s steps(40) 1s 1 normal both",
        "cursor-blink": "cursorBlink 1s infinite",
        ripple: "ripple 0.6s ease-out forwards",
        "hero-glow": "heroGlow 4s linear infinite",
        "gravity-pulse": "gravityPulse 2s ease-in-out infinite",
      },
      keyframes: {
        cursorPulse: {
          "0%, 100%": { transform: "scale(1)", filter: "brightness(1.2)" },
          "50%": { transform: "scale(1.1)", filter: "brightness(1.5)" },
        },
        planetRotate: {
          "0%": { transform: "rotateY(0deg)" },
          "100%": { transform: "rotateY(360deg)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-20px) rotate(180deg)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 20px rgba(0, 255, 255, 0.5)" },
          "100%": { boxShadow: "0 0 40px rgba(0, 255, 255, 0.8)" },
        },
        typewriter: {
          "0%": { width: "0" },
          "100%": { width: "100%" },
        },
        cursorBlink: {
          "0%, 50%": { opacity: "1" },
          "51%, 100%": { opacity: "0" },
        },
        ripple: {
          "0%": { transform: "scale(0)", opacity: "1" },
          "100%": { transform: "scale(10)", opacity: "0" },
        },
        heroGlow: {
          "0%": {
            transform: "translateX(-100%) translateY(-100%) rotate(0deg)",
          },
          "100%": {
            transform: "translateX(100%) translateY(100%) rotate(360deg)",
          },
        },
        gravityPulse: {
          "0%, 100%": { transform: "scale(1) rotate(0deg)" },
          "50%": { transform: "scale(1.2) rotate(180deg)" },
        },
      },
      backdropBlur: {
        intense: "20px",
      },
      boxShadow: {
        glow: "0 0 30px rgba(0, 255, 255, 0.3)",
        epic: "0 0 60px rgba(0, 255, 255, 0.4), 0 0 120px rgba(255, 0, 255, 0.2)",
        card: "0 8px 32px rgba(0, 0, 0, 0.5)",
      },
    },
  },
  plugins: [],
} satisfies Config;
