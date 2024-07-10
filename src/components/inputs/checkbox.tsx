import { InputContainer } from "./input-container";
import type { InputProps, LabeledInputProps } from "@/types/inputs";
import { cn } from "@/utils/tailwind";
import { forwardRef } from "react";

type CheckboxInputProps = Omit<React.ComponentPropsWithRef<"input">, "type"> & InputProps;

export const CheckboxInput = forwardRef<HTMLInputElement, CheckboxInputProps>(function MultipleChoiceInput(
  { isError, className, ...props },
  forwardedRef
) {
  return (
    <div className="flex items-center gap-2.5">
      <input
        id={props.name}
        type="checkbox"
        ref={forwardedRef}
        className={cn(
          "appearance-none rounded-sm after:rounded-sm flex h-5 w-5 cursor-pointer items-center justify-center border-[0.5px] border-primary bg-primary-700/70 ring-0 ring-offset-0 after:inline-block after:content-[''] after:checked:h-4 after:checked:w-4 after:checked:bg-primary after:indeterminate:h-px after:indeterminate:w-2.5 after:indeterminate:bg-red-500 disabled:cursor-default",
          { "border-destructive after:checked:bg-destructive": isError },
          className
        )}
        {...props}
      />
      <label htmlFor={props.name} className={cn("cursor-pointer capitalize font-medium", { "text-destructive": isError })}>
        {props.name}
      </label>
    </div>
  );
});

type LabeledCheckboxInputProps = Omit<React.ComponentPropsWithRef<"input">, "type"> & LabeledInputProps;

export const LabeledCheckboxInput = forwardRef<HTMLInputElement, LabeledCheckboxInputProps>(function LabeledCheckboxInput(
  { label, name, required, containerClassName, error, ...props },
  forwardedRef
) {
  return (
    <InputContainer name={name} label={label} required={required} error={error} className={containerClassName}>
      <CheckboxInput ref={forwardedRef} id={name} name={name} isError={Boolean(error)} {...props} />
    </InputContainer>
  );
});
