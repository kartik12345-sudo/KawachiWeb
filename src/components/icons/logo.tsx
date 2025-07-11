import type { SVGProps } from "react";

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 50"
      width="120"
      height="30"
      {...props}
    >
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: 'hsl(var(--primary))', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: 'hsl(var(--accent))', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <path d="M 10 10 L 30 40 L 50 10" stroke="url(#grad1)" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <text
        x="60"
        y="32"
        fontFamily="var(--font-headline)"
        fontSize="24"
        fontWeight="bold"
        fill="hsl(var(--foreground))"
      >
        KAWACHI
      </text>
    </svg>
  );
}
