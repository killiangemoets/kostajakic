"use client";

import { Button } from "@/components/ui/button";
import { NAVBAR_ITEMS } from "@/constants/navigation";
import { cn } from "@/utils/tailwind";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export const PhoneNavbar = ({ className }: { className?: string }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={cn("flex flex-col gap-16 z-10", className)}>
      <div className="flex justify-between">
        <Button size="lg" className="mt-0 bg-slate-400 rounded-full" variant="ghost" href="/">
          LOGO
          <span className="sr-only">Home</span>
        </Button>
        <Button
          aria-label="menu"
          size="lg"
          variant="ghost"
          onClick={() => {
            setIsMenuOpen(true);
          }}
        >
          <Menu className="w-8 h-8" />
          <span className="hidden">menu</span>
        </Button>
      </div>
      <div
        style={{
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
        }}
        className={cn(" bg-primary-700/60 w-full h-screen fixed top-0 left-0 flex flex-col gap-12", !isMenuOpen && "hidden")}
      >
        <div className="pt-8 flex items-center w-full justify-between px-8">
          <Button size="lg" variant="ghost" className="ml-auto" aria-label="close" onClick={() => setIsMenuOpen((value) => !value)}>
            <X className="w-8 h-8" />
            <span className="hidden">close</span>
          </Button>
        </div>
        <nav>
          <ul className=" flex flex-col items-center gap-8">
            {NAVBAR_ITEMS.map((item) => (
              <li key={item.name}>
                <Button
                  onClick={() => {
                    setIsMenuOpen(false);
                  }}
                  key={item.name}
                  size="lg"
                  variant="ghost"
                  href={item.href}
                >
                  {item.name}
                </Button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};
