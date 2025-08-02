import type { InputHTMLAttributes } from "react";
import { cn } from "../../utils/cn";

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export const TextField = ({
  label,
  type,
  placeholder,
  error,
  ...rest
}: TextFieldProps) => {
  return (
    <div>
      <label
        htmlFor="name"
        className="mb-1 block text-sm font-semibold text-black"
      >
        {label}
      </label>
      <input
        type={type}
        className={cn(
          `w-full rounded-md bg-gray-100 px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none`,
          { "border border-red-500": error },
        )}
        placeholder={placeholder}
        {...rest}
      />
      {!!error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
};
