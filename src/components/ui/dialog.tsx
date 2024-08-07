import { cn } from "@/utils/tailwind";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import type { ReactNode } from "react";
import React from "react";

type ModalProps = DialogPrimitive.DialogContentProps & {
  showCloseButton?: boolean;
};

export const DialogGroup = {
  Root: DialogPrimitive.Root,
  Trigger: DialogPrimitive.Trigger,
  Modal: ({ showCloseButton = true, children, className, ...props }: ModalProps) => (
    <DialogPrimitive.Portal>
      <DialogPrimitive.Overlay
        style={{
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
        }}
        className="fixed inset-0  z-10 flex items-center justify-center"
      >
        <DialogPrimitive.Content className={cn("relative outline-none", className)} {...props}>
          {children}
          {showCloseButton && (
            <DialogPrimitive.Close className="absolute right-7 top-7 z-10">
              <X className="h-6 w-6 text-primary hover:text-primary-200 duration-300 ease-in-out" />
            </DialogPrimitive.Close>
          )}
        </DialogPrimitive.Content>
      </DialogPrimitive.Overlay>
    </DialogPrimitive.Portal>
  ),
};

export const Dialog = ({
  modal,
  open,
  onOpenChange,
  children,
  ...props
}: ModalProps & {
  modal: ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}) => {
  return (
    <DialogGroup.Root open={open} onOpenChange={onOpenChange}>
      <DialogGroup.Modal {...props}>{modal}</DialogGroup.Modal>
      <DialogGroup.Trigger asChild>{children}</DialogGroup.Trigger>
    </DialogGroup.Root>
  );
};
