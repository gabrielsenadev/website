'use client';

import { usePathname } from "next/navigation";

export function RouteView() {
  const pathname = usePathname();
  return (
    <p className="text-white px-6 font-bold">gabrielsenadev{pathname}</p>
  )
}
