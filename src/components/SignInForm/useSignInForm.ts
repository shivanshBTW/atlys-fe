import { useForm } from 'react-hook-form';
import type { SubmitHandler } from 'react-hook-form';
import { useAuth } from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

export interface SignInFormInputs {
  email: string;
  password: string;
}

interface UseSignInFormProps {
  isModal?: boolean;
  onSuccess?: () => void;
}

export const useSignInForm = ({
  isModal = false,
  onSuccess,
}: UseSignInFormProps = {}) => {
  const { setIsAuthenticated, setCurrentUser, setShowAuthModal } = useAuth();
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

      if (isModal) {
        setShowAuthModal(false);
      } else {
        navigate('/');
      }

      if (onSuccess) {
        onSuccess();
      }
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
