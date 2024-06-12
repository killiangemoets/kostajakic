import { LabeledTextInput, TextInput } from "@/components/inputs/text";
import type { RHFInputProps, RHFLabeledInputProps } from "@/types/inputs";
import get from "lodash/get";
import React from "react";
import type { FieldError, FieldValues } from "react-hook-form";
import { useFormContext } from "react-hook-form";

type RHFTextInputProps<TFormValues> = Omit<React.ComponentPropsWithRef<"input">, "name"> & RHFInputProps<TFormValues>;

export const RHFTextInput = <TFormValues extends FieldValues>({ name, rules = {}, required, ...props }: RHFTextInputProps<TFormValues>) => {
  const {
    register,
    formState: { errors },
  } = useFormContext<TFormValues>();

  const error = get(errors, name) as FieldError | undefined;

  return <TextInput isError={Boolean(error)} {...props} {...register(name, { ...rules, required })} />;
};

type RHFLabeledTextInputProps<TFormValues> = React.ComponentPropsWithRef<"input"> & RHFLabeledInputProps<TFormValues>;

export const RHFLabeledTextInput = <TFormValues extends FieldValues>({
  label,
  name,
  required,
  containerClassName,
  rules = {},
  ...props
}: RHFLabeledTextInputProps<TFormValues>) => {
  const {
    register,
    formState: { errors },
  } = useFormContext<TFormValues>();

  const error = get(errors, name) as FieldError | undefined;
  return (
    <LabeledTextInput
      label={label}
      required={required}
      error={error?.message}
      containerClassName={containerClassName}
      {...props}
      {...register(name, { ...rules, required })}
    />
  );
};
