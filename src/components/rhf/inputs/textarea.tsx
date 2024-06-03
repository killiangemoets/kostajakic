import { LabeledTextareaInput, TextareaInput } from "@/components/inputs/textarea";
import type { RHFInputProps, RHFLabeledInputProps } from "@/types/inputs";
import get from "lodash/get";
import React from "react";
import type { FieldError, FieldValues } from "react-hook-form";
import { useFormContext } from "react-hook-form";

type RHFTextareaInputProps<TFormValues> = Omit<React.ComponentPropsWithRef<"textarea">, "name"> & RHFInputProps<TFormValues>;

export const RHFTextareaInput = <TFormValues extends FieldValues>({
  name,
  rules = {},
  required,
  ...props
}: RHFTextareaInputProps<TFormValues>) => {
  const {
    register,
    formState: { errors },
  } = useFormContext<TFormValues>();

  const error = get(errors, name) as FieldError | undefined;

  return <TextareaInput isError={Boolean(error)} {...props} {...register(name, { ...rules, required })} />;
};

type RHFLabeledTextareaInputProps<TFormValues> = React.ComponentPropsWithRef<"textarea"> & RHFLabeledInputProps<TFormValues>;

export const RHFLabeledTextareaInput = <TFormValues extends FieldValues>({
  label,
  name,
  required,
  containerClassName,
  rules = {},
  ...props
}: RHFLabeledTextareaInputProps<TFormValues>) => {
  const {
    register,
    formState: { errors },
  } = useFormContext<TFormValues>();

  const error = get(errors, name) as FieldError | undefined;

  return (
    <LabeledTextareaInput
      label={label}
      required={required}
      error={error?.message}
      containerClassName={containerClassName}
      {...props}
      {...register(name, { ...rules, required })}
    />
  );
};
