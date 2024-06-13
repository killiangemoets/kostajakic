import type { SelectProps } from "@radix-ui/react-select";
import type { Path, RegisterOptions } from "react-hook-form";

type InputDefaultProps = {
  required?: boolean;
  name?: string;
  readOnly?: boolean;
};

type InputContainerDefaultProps = {
  containerClassName?: string;
  labelClassName?: string;
  label?: string;
};

export type InputProps = InputDefaultProps & { isError?: boolean };

export type LabeledInputProps = InputDefaultProps & InputContainerDefaultProps & { error?: string };

export type RHFInputProps<TFormValues> = {
  required?: boolean;
  name: Path<TFormValues>;
  readOnly?: boolean;
  rules?: RegisterOptions;
};

export type RHFLabeledInputProps<TFormValues> = RHFInputProps<TFormValues> & InputContainerDefaultProps;

export type MultiOption<T extends string> = { value: T; label: string };

export type DatePickerDefaultProps = {
  placeholder?: string;
  value?: Date;
  onChange?: (value: Date | undefined) => void;
  className?: string;
};

export type DropdownSelectDefaultProps<T extends string> = SelectProps & {
  options: MultiOption<T>[];
  placeholder?: string;
};
