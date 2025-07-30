import type { InputHTMLAttributes } from 'react';

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
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        {label}
      </label>
      <input
        type={type}
        className={`w-full px-3 py-2 border ${
          error ? 'border-red-500' : 'border-gray-300'
        } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
        placeholder={placeholder}
        {...rest}
      />
      {!!error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
};
