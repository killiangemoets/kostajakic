"use client";

import { Button } from "@/components/ui/button";
import { SIDEBAR_ITEMS } from "@/constants/navigation";
import { cn } from "@/utils/tailwind";
import { LogOut } from "lucide-react";
import { signOut } from "next-auth/react";
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
        "text-md font-bold flex items-center gap-3 rounded-lg px-3 py-3 transition-all duration-300 hover:bg-primary hover:text-primary-700",
        isActive && "bg-primary text-primary-700"
      )}
    >
      <Icon className="h-4 w-4" />
      {name}
    </Link>
  );
};

export const Sidebar = () => {
  return (
    <nav className="flex flex-col justify-between pb-8 px-2 h-full text-sm font-medium lg:px-4 space-y-1">
      <div className="grid gap-2 items-start ">
        {SIDEBAR_ITEMS.map((item) => (
          <SidebarLink key={item.name} name={item.name} href={item.href} Icon={item.icon} />
        ))}
      </div>
      <Button variant="ghost" className="w-fit font-bold" onClick={() => signOut()}>
        <LogOut className="pr-2 w-6 h-6" />
        <p>Log out</p>
      </Button>
    </nav>
  );
};
