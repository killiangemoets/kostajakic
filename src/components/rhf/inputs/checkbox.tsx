import { CheckboxInput, LabeledCheckboxInput } from "@/components/inputs/checkbox";
import type { RHFInputProps, RHFLabeledInputProps } from "@/types/inputs";
import get from "lodash/get";
import React from "react";
import type { FieldError, FieldValues } from "react-hook-form";
import { useFormContext } from "react-hook-form";

type RHFCheckboxInputProps<TFormValues> = Omit<React.ComponentPropsWithRef<"input">, "type"> & RHFInputProps<TFormValues>;

export const RHFCheckboxInput = <TFormValues extends FieldValues>({
  name,
  rules = {},
  required,
  ...props
}: RHFCheckboxInputProps<TFormValues>) => {
  const {
    register,
    formState: { errors },
  } = useFormContext<TFormValues>();

  const error = get(errors, name) as FieldError | undefined;

  return <CheckboxInput isError={Boolean(error)} {...props} {...register(name, { ...rules, required })} />;
};

type RHFLabeledCheckboxInputProps<TFormValues> = Omit<React.ComponentPropsWithRef<"input">, "type"> & RHFLabeledInputProps<TFormValues>;

export const RHFLabeledCheckboxInput = <TFormValues extends FieldValues>({
  label,
  name,
  required,
  containerClassName,
  rules = {},
  ...props
}: RHFLabeledCheckboxInputProps<TFormValues>) => {
  const {
    register,
    formState: { errors },
  } = useFormContext<TFormValues>();

  const error = get(errors, name) as FieldError | undefined;

  return (
    <LabeledCheckboxInput
      label={label}
      required={required}
      error={error?.message}
      containerClassName={containerClassName}
      {...props}
      {...register(name, { ...rules, required })}
    />
  );
};
