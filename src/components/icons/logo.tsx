import Image from 'next/image';
import type { HTMLAttributes } from 'react';

export function Logo(props: HTMLAttributes<HTMLDivElement>) {
  return (
    <div {...props}>
      <Image
        src="/Kawachi_logo_design4.jpg"
        alt="Kawachi Infratech Logo"
        width={180}
        height={40}
        className="w-auto h-10 mix-blend-screen"
        priority
      />
    </div>
  );
}
