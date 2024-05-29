import { InputContainer } from "./input-container";
import type { InputProps, LabeledInputProps } from "@/types/inputs";
import clsx from "clsx";
import { forwardRef } from "react";

type TextInputProps = React.ComponentPropsWithRef<"input"> & InputProps;

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(function TextInput({ isError, className, ...props }, forwardedRef) {
  return (
    <input
      id={props.name}
      ref={forwardedRef}
      className={clsx(
        "rounded-md focus:outline-none py-2.5 text-white placeholder:text-white/80",
        props.readOnly ? "text-neutral-300 rounded-lg bg-transparent border-none" : "text-white bg-white/20 border-[0.2px] px-5",
        !props.readOnly && isError ? "border-destructive  border focus:border-required hover:border-destructive" : "border-neutral-300",
        className
      )}
      {...props}
    />
  );
});

type LabeledTextInputProps = React.ComponentPropsWithRef<"input"> & LabeledInputProps;

export const LabeledTextInput = forwardRef<HTMLInputElement, LabeledTextInputProps>(function LabeledTextInput(
  { name, label, required, error, containerClassName, ...props },
  forwardedRef
) {
  return (
    <InputContainer name={name} label={label} required={required} error={error} className={containerClassName}>
      <TextInput ref={forwardedRef} name={name} isError={Boolean(error)} {...props} />
    </InputContainer>
  );
});
