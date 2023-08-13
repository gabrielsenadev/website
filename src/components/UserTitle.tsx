'use client';

import Image from "next/image";
import { usePathname } from "next/navigation";

interface UserTitleProps {
  className?: string;
}

export function UserTitle({ className }: UserTitleProps) {
  const pathname = usePathname();
  return (
    <div className={className}>
      <div className="flex flex-row items-center">
        <div className="mr-3">
          <Image
            alt="gabriel sena github profile image"
            src={'https://github.com/gabrielsenadev.png'}
            width={50}
            height={50}
            className="rounded-full"
          />
        </div>
        <div className="flex items-end">
          <p className="text-lg uppercase font-bold tracking-1x sm:tracking-2x">Gabriel Sena</p><span className="text-base">{pathname}</span>
        </div>
      </div>

    </div>
  )
}