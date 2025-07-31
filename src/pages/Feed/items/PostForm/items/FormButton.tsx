import type { ButtonHTMLAttributes } from 'react';

export const FormButton = ({
  className,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className={`text-gray-500 hover:text-gray-700 p-2 rounded hover:bg-gray-100 ${className}`}
      {...props}
    ></button>
  );
};
