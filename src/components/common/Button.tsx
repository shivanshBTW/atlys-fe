import type { ButtonHTMLAttributes } from "react";

export const Button = ({
  children,
  className,
  ...rest
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className={`w-full rounded-xl bg-[#5057EA] py-3 text-sm text-white transition-colors hover:bg-blue-700 ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};
