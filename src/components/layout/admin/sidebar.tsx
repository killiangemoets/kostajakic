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

export const SidebarLink = ({
  name,
  href,
  Icon,
  isPhone = false,
}: {
  name: string;
  href: LinkProps["href"];
  Icon: FC<SVGProps<SVGSVGElement>>;
  isPhone?: boolean;
}) => {
  const pathname = usePathname();
  const isActive = isActiveLink(pathname, href);
  return (
    <Link
      href={href}
      className={cn(
        "outline-none text-base font-bold flex items-center gap-3 rounded-lg px-3 py-3 transition-all duration-300 hover:bg-primary hover:text-primary-700",
        isActive && "bg-primary text-primary-700"
      )}
    >
      <Icon className="h-4 w-4" />
      {!isPhone && name}
      <span className="sr-only">{name}</span>
    </Link>
  );
};

export const Sidebar = ({ isPhone = false, className }: { isPhone?: boolean; className?: string }) => {
  return (
    <nav className={cn("flex flex-col justify-between pb-8 px-2 h-full text-sm font-medium lg:px-4 space-y-1", className)}>
      <div className="grid gap-2 items-start ">
        {SIDEBAR_ITEMS.map((item) => (
          <SidebarLink key={item.name} name={item.name} href={item.href} Icon={item.icon} isPhone={isPhone} />
        ))}
      </div>
      <Button variant="ghost" className="w-fit font-bold" onClick={() => signOut()}>
        <LogOut className="pr-2 w-6 h-6" />
        {!isPhone && <p>Log out</p>}
      </Button>
    </nav>
  );
};
