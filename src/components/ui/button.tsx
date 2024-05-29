import { cn } from "@/utils/tailwind";
import { Slot } from "@radix-ui/react-slot";
import { type VariantProps, cva } from "class-variance-authority";
import Link from "next/link";
import * as React from "react";

const buttonVariants = cva(
  "uppercase inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        // TODO: change the classes
        default: "",
        destructive: "",
        outline: "border-[1px] ",
        ghost: "font-bold text-2xl",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 px-3",
        lg: "h-10 px-4 py-6",
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
