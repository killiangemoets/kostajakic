"use client";

import { DesktopNavbar } from "./desktop";
import { PhonseNavbar } from "./phone";
import { useScreenWidth } from "@/hooks/useScreenWidth";

export const Navbar = () => {
  const { widthSize } = useScreenWidth();

  return <>{["xs", "sm", "md"].includes(widthSize) ? <PhonseNavbar /> : <DesktopNavbar />}</>;
};
