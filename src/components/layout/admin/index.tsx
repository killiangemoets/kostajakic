"use client";

import { Header } from "./header";
import { Sidebar } from "./sidebar";
import { Typography } from "@/components/typography";
import { FULL_NAME } from "@/constants/contact";
import { useScreenWidth } from "@/hooks/useScreenWidth";
import { getInitials } from "@/utils/format";
import { cn } from "@/utils/tailwind";
import Link from "next/link";
import { type ReactNode } from "react";

const Profile = ({ isPhone = false }: { isPhone?: boolean }) => {
  return (
    <Link href="/backoffice" className="outline-none">
      <Typography.body className="font-black italic">{isPhone ? getInitials(FULL_NAME) : FULL_NAME}</Typography.body>
    </Link>
  );
};

export const Navigation = ({ children, extra, className }: { children: ReactNode; extra?: ReactNode; className?: string }) => {
  const { widthSize } = useScreenWidth();
  const isPhone = ["xxs", "xs", "sm", "md"].includes(widthSize);
  return (
    <div className="grid min-h-screen w-full">
      <div className="border-r bg-primary-700/70 w-[56px] lg:w-[200px] fixed h-screen">
        <div className="flex h-full max-h-screen flex-col gap-12 inset-x-0 top-0">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <Profile isPhone={isPhone} />
          </div>
          <div className="flex-1">
            <Sidebar isPhone={isPhone} />
          </div>
        </div>
      </div>
      <div className="flex flex-col ml-[56px] lg:ml-[200px] pt-14 pb-4">
        <Header extra={extra} className="fixed ml-[56px] lg:ml-[200px]" />
        <main className={cn("py-8 pt-12 px-6 sm:px-8 md:px-12", className)}>{children}</main>
      </div>
    </div>
  );
};
