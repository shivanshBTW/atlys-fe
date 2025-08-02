import type { ButtonHTMLAttributes, PropsWithChildren } from "react";
import { cn } from "../../../../../utils/cn";

interface FormatItemProps
  extends PropsWithChildren,
    ButtonHTMLAttributes<HTMLButtonElement> {
  isActive: boolean;
}

export const FormatItem = ({
  children,
  isActive,
  ...rest
}: FormatItemProps) => {
  return (
    <button
      type="button"
      className={cn("rounded p-2", {
        "bg-white shadow-sm": isActive,
        "hover:bg-gray-100": !isActive,
      })}
      {...rest}
    >
      {children}
    </button>
  );
};
