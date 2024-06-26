import { Header } from "./header";
import { Sidebar } from "./sidebar";
import { cn } from "@/utils/tailwind";
import { type ReactNode } from "react";

const Profile = () => {
  return <div>Kosta Jakic</div>;
};

export const Navigation = ({ children, extra, className }: { children: ReactNode; extra?: ReactNode; className?: string }) => {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[200px_1fr] lg:grid-cols-[220px_1fr]">
      <div className="hidden border-r bg-primary-700/70 md:block">
        <div className="flex h-full max-h-screen flex-col gap-12 sticky inset-x-0 top-0">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <Profile />
          </div>
          <div className="flex-1">
            <Sidebar />
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <Header extra={extra} />
        <main className={cn("pt-16 py-8 px-12", className)}>{children}</main>
      </div>
    </div>
  );
};
