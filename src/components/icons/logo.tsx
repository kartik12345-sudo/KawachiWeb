import Image from 'next/image';
import type { HTMLAttributes } from 'react';

export function Logo(props: HTMLAttributes<HTMLDivElement>) {
  return (
    <div {...props}>
      <Image
        src="/logo.png"
        alt="Kawachi Infratech Logo"
        width={180}
        height={40}
        className="w-auto h-10"
        priority
      />
    </div>
  );
}
