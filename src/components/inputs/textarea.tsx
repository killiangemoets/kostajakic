import { InputContainer } from "./input-container";
import type { InputProps, LabeledInputProps } from "@/types/inputs";
import clsx from "clsx";
import { forwardRef } from "react";

type TextareaInputProps = React.ComponentPropsWithRef<"textarea"> & InputProps;

export const TextareaInput = forwardRef<HTMLTextAreaElement, TextareaInputProps>(function TextareaInput(
  { isError, className, rows, ...props },
  forwardedRef
) {
  return (
    <textarea
      rows={rows ?? 5}
      id={props.name}
      ref={forwardedRef}
      className={clsx(
        "resize-none rounded-md focus:outline-none py-2.5 text-primary placeholder:text-primary/80",
        props.readOnly ? "rounded-lg bg-transparent border-none" : "bg-primary-700/70  border-[0.5px] px-5",
        !props.readOnly && isError ? "border-destructive  border focus:border-required hover:border-destructive" : "border-neutral-300",
        className
      )}
      {...props}
    />
  );
});

type LabeledTextareaInputProps = React.ComponentPropsWithRef<"textarea"> & LabeledInputProps;

export const LabeledTextareaInput = forwardRef<HTMLTextAreaElement, LabeledTextareaInputProps>(function LabeledTextareaInput(
  { label, name, required, containerClassName, error, ...props },
  forwardedRef
) {
  return (
    <InputContainer name={name} label={label} required={required} error={error} className={containerClassName}>
      <TextareaInput ref={forwardedRef} id={name} name={name} isError={Boolean(error)} {...props} />
    </InputContainer>
  );
});
