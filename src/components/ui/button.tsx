import { cn } from "@/utils/tailwind";
import { Slot } from "@radix-ui/react-slot";
import { type VariantProps, cva } from "class-variance-authority";
import Link from "next/link";
import * as React from "react";

const buttonVariants = cva(
  " duration-300 ease-in-out uppercase inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-600 hover:bg-primary-100",
        destructive: "bg-destructive text-primary hover:bg-destructive-dark hover:text-primary",
        outline: "border-[1px] hover:text-primary-200 hover:border-primary-200",
        ghost: "font-bold text-base hover:text-primary-200",
      },
      size: {
        default: "h-10 px-4",
        lg: "h-12 px-4 text-2xl",
        sm: "h-9 px-3",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  href?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant, size, href, children, ...props }, ref) => {
  if (!!href) {
    return (
      <Slot className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props}>
        <Link href={href}>{children}</Link>
      </Slot>
    );
  }

  return (
    <button className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props}>
      {children}
    </button>
  );
});
Button.displayName = "Button";

export { Button, buttonVariants };
