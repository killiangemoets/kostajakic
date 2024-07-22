import { cn } from "@/utils/tailwind";
import React from "react";

export const Typography = {
  h1: ({ className, children, ...props }: React.ComponentPropsWithoutRef<"h1">) => (
    <h1 className={cn("text-heading-1 2xl:text-[72px] 2xl:leading-[80px] uppercase", className)} {...props}>
      {children}
    </h1>
  ),
  h2: ({ className, children, ...props }: React.ComponentPropsWithoutRef<"h2">) => (
    <h2 className={cn("text-heading-3 uppercase", className)} {...props}>
      {children}
    </h2>
  ),
  h3: ({ className, children, ...props }: React.ComponentPropsWithoutRef<"h3">) => (
    <h3 className={cn("text-heading-2 uppercase", className)} {...props}>
      {children}
    </h3>
  ),
  h4: ({ className, children, ...props }: React.ComponentPropsWithoutRef<"h4">) => (
    <h4 className={cn("text-heading-4", className)} {...props}>
      {children}
    </h4>
  ),
  body: ({ className, children, ...props }: React.ComponentPropsWithoutRef<"p">) => (
    <p className={cn("text-base md:text-lg xl:text-xl", className)} {...props}>
      {children}
    </p>
  ),
  note: ({ className, children, ...props }: React.ComponentPropsWithoutRef<"p">) => (
    <p className={cn("text-sm md:text-base xl:text-lg font-medium", className)} {...props}>
      {children}
    </p>
  ),
  error: ({ className, children, ...props }: React.ComponentPropsWithoutRef<"p">) => (
    <p className={cn("text-destructive text-sm font-medium tracking-wide", className)} {...props}>
      {children}
    </p>
  ),
};
