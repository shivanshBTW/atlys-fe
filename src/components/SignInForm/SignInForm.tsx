import { Button } from '../common/Button';
import { TextField } from '../common/TextField';
import { useSignInForm } from './useSignInForm';

interface SignInFormProps {
  isModal?: boolean;
  onSuccess?: () => void;
}

export const SignInForm = ({ isModal = false, onSuccess }: SignInFormProps) => {
  const { register, handleSubmit, errors, onSubmit } = useSignInForm({
    isModal,
    onSuccess,
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-4">
        <TextField
          label="Email"
          type="email"
          placeholder="your@email.com"
          error={errors.email?.message}
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid email address',
            },
          })}
        />
      </div>

      <div className="mb-6">
        <TextField
          label="Password"
          type="password"
          placeholder="••••••••"
          error={errors.password?.message}
          {...register('password', {
            required: 'Password is required',
            minLength: {
              value: 6,
              message: 'Password must be at least 6 characters',
            },
          })}
        />
        <div className="flex justify-end items-center mb-1">
          <a href="#" className="text-xs text-blue-600 hover:underline">
            Forgot password?
          </a>
        </div>
      </div>

      <Button type="submit">Sign In</Button>
    </form>
  );
};
