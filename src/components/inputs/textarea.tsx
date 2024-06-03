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
        "resize-none rounded-md focus:outline-none py-2.5 text-white placeholder:text-white/80",
        props.readOnly ? "text-neutral-300 rounded-lg bg-transparent border-none" : "text-white bg-white/20 border-[0.2px] px-5",
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
