"use client";

import { useMediaQuery } from "react-responsive";
import { MobileHeader } from "./MobileHeader";
import { DesktopHeader } from "./DesktopHeader";
import { useEffect, useState } from "react";

export function Header() {
  const [isDesktop, setIsDesktop] = useState(false);

  const isMobile = useMediaQuery({ maxWidth: 767 });

  useEffect(() => {
    setIsDesktop(!isMobile);
  }, [isMobile]);

  return isDesktop ? <DesktopHeader /> : <MobileHeader />
}
