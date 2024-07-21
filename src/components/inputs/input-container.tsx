import { Typography } from "@/components/typography";
import { cn } from "@/utils/tailwind";

export const FormLabel: React.FC<
  React.ComponentPropsWithoutRef<"label"> & {
    required?: boolean;
  }
> = ({ children, required, className, ...props }) => (
  <label
    className={cn("text-lg font-metropolis font-bold whitespace-nowrap", required && "after:text-required after:content-['_*']", className)}
    {...props}
  >
    {children}
  </label>
);

type InputContainerProps = React.PropsWithChildren<{
  name?: string;
  label?: string;
  required?: boolean;
  error?: string;
  className?: string;
}>;

export const InputContainer: React.FC<InputContainerProps> = ({ name, label, required, className, error, children }) => {
  return (
    <div className={cn("flex gap-2 flex-col", className)}>
      {label && (
        <FormLabel required={required} htmlFor={name}>
          {label}
        </FormLabel>
      )}
      {children}
      {error && <Typography.error className="ml-2">{error}</Typography.error>}
    </div>
  );
};
