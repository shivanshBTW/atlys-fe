import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import type { SubmitHandler } from 'react-hook-form';
import { useAuth } from '../../hooks/useAuth';

interface SignInFormInputs {
  email: string;
  password: string;
}

export const useSignIn = () => {
  const { setIsAuthenticated, setCurrentUser } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormInputs>();

  // Test accounts
  const testAccounts = [
    { email: 'demo@example.com', password: 'password123' },
    { email: 'test@user.com', password: 'testpass' },
  ];

  const onSubmit: SubmitHandler<SignInFormInputs> = (data) => {
    const { email, password } = data;

    // Simple authentication check
    const isValid = testAccounts.some(
      (account) => account.email === email && account.password === password
    );

    if (isValid) {
      setIsAuthenticated(true);
      setCurrentUser({ email });
      navigate('/');
    } else {
      alert('Invalid credentials. Please try again.');
    }
  };

  return {
    register,
    handleSubmit,
    errors,
    onSubmit,
  };
};
