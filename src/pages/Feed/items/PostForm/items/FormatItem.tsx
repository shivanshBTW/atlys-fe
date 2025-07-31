import type { ButtonHTMLAttributes, PropsWithChildren } from 'react';

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
      className={`p-2 rounded ${
        isActive ? 'bg-white shadow-sm' : 'hover:bg-gray-100'
      }`}
      {...rest}
    >
      {children}
    </button>
  );
};
