"use client";

import { useMediaQuery } from "react-responsive";
import { MobileHeader } from "./MobileHeader";
import { DesktopHeader } from "./DesktopHeader";

export function Header() {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return isMobile ? <MobileHeader /> : <DesktopHeader />
}
