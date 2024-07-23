"use client";

import { Typography } from "@/components/typography";
import { SIDEBAR_ITEMS } from "@/constants/navigation";
import { cn } from "@/utils/tailwind";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

const getActiveTitle = (pathname: string) => {
  const title = SIDEBAR_ITEMS.find((item) => pathname.startsWith(item.href))?.name;
  return title;
};

export const Header = ({ extra, className }: { extra?: ReactNode; className?: string }) => {
  const pathname = usePathname();
  const title = getActiveTitle(pathname || "");
  return (
    <header
      className={cn("z-10 flex h-14 items-center gap-4 border-b bg-primary-700/70 px-4 lg:h-[60px] lg:px-6 inset-x-0 top-0", className)}
    >
      {<Typography.h4>{title}</Typography.h4>}
      <div className="ml-auto">{extra}</div>
    </header>
  );
};
