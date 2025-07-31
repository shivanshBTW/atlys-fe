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
      className={`p-2 rounded ${isActive ? 'bg-white' : 'hover:bg-gray-100'}`}
      title="Numbered List"
      {...rest}
    >
      {children}
    </button>
  );
};
