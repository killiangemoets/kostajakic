"use client";

import { DesktopNavbar } from "./desktop";
import { PhoneNavbar } from "./phone";
import { useScreenWidth } from "@/hooks/useScreenWidth";

export const Navbar = () => {
  const { widthSize } = useScreenWidth();

  return <>{["xxs", "xs", "sm", "md"].includes(widthSize) ? <PhoneNavbar /> : <DesktopNavbar />}</>;
};
