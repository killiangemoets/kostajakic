"use client";

import { Typography } from "@/components/typography";
import { SIDEBAR_ITEMS } from "@/constants/navigation";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

const getActiveTitle = (pathname: string) => {
  const title = SIDEBAR_ITEMS.find((item) => pathname.startsWith(item.href))?.name;
  return title;
};

export const Header = ({ extra }: { extra?: ReactNode }) => {
  const pathname = usePathname();
  const title = getActiveTitle(pathname || "");
  return (
    <header className="flex h-14 items-center gap-4 border-b bg-primary-700/70 px-4 lg:h-[60px] lg:px-6 sticky inset-x-0 top-0">
      {<Typography.h4>{title}</Typography.h4>}
      <div className="ml-auto">{extra}</div>
    </header>
  );
};
