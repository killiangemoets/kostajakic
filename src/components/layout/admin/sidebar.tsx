"use client";

import { SIDEBAR_ITEMS } from "@/constants/sidebar";
import { cn } from "@/utils/tailwind";
import type { LinkProps } from "next/link";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { FC, SVGProps } from "react";

const isActiveLink = (pathname: string, currentHref: LinkProps["href"]) => {
  const currentStringHref = currentHref.toString();
  if (pathname.startsWith(currentStringHref)) return true;
  return false;
};

export const SidebarLink = ({ name, href, Icon }: { name: string; href: LinkProps["href"]; Icon: FC<SVGProps<SVGSVGElement>> }) => {
  const pathname = usePathname();
  const isActive = isActiveLink(pathname, href);
  return (
    <Link
      href={href}
      className={cn(
        "flex items-center gap-3 rounded-lg px-3 py-3 transition-all duration-300 hover:bg-slate-200",
        isActive && "bg-slate-200"
      )}
    >
      <Icon className="h-4 w-4" />
      {name}
    </Link>
  );
};

export const Sidebar = () => {
  return (
    <nav className="grid items-start px-2 text-sm font-medium lg:px-4 space-y-1">
      {SIDEBAR_ITEMS.map((item) => (
        <SidebarLink key={item.name} name={item.name} href={item.href} Icon={item.icon} />
      ))}
    </nav>
  );
};
