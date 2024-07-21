"use client";

import { Header } from "./header";
import { Sidebar } from "./sidebar";
import { Typography } from "@/components/typography";
import { useScreenWidth } from "@/hooks/useScreenWidth";
import { cn } from "@/utils/tailwind";
import Link from "next/link";
import { type ReactNode } from "react";

const Profile = ({ isPhone = false }: { isPhone?: boolean }) => {
  return (
    <Link href="/backoffice" className="outline-none">
      <Typography.body className="font-black italic">{isPhone ? "KJ" : "Kosta Jakic"}</Typography.body>
    </Link>
  );
};

export const Navigation = ({ children, extra, className }: { children: ReactNode; extra?: ReactNode; className?: string }) => {
  const { widthSize } = useScreenWidth();
  const isPhone = ["xxs", "xs", "sm", "md"].includes(widthSize);
  return (
    <div className="grid min-h-screen w-full grid-cols-[56px_1fr] lg:grid-cols-[200px_1fr] ">
      <div className="border-r bg-primary-700/70">
        <div className="flex h-full max-h-screen flex-col gap-12 sticky inset-x-0 top-0">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <Profile isPhone={isPhone} />
          </div>
          <div className="flex-1">
            <Sidebar isPhone={isPhone} />
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <Header extra={extra} />
        <main className={cn("pt-16 py-8 px-6 sm:px-8 md:px-12", className)}>{children}</main>
      </div>
    </div>
  );
};
