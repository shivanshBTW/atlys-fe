import type { ButtonHTMLAttributes } from "react";
import { cn } from "../../../../../utils/cn";

export const FormButton = ({
  className,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className={cn(
        "rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700",
        className,
      )}
      {...props}
    ></button>
  );
};
