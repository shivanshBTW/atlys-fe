import type { ButtonHTMLAttributes } from 'react';

export const Button = ({
  children,
  className,
  ...rest
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className={`w-full bg-[#5057EA] text-white text-sm py-3 rounded-xl hover:bg-blue-700 transition-colors ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};
