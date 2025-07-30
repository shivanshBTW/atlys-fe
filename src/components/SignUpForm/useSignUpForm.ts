import { useForm } from 'react-hook-form';
import type { SubmitHandler } from 'react-hook-form';
import { useAuth } from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

export interface SignUpFormInputs {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface UseSignUpFormProps {
  isModal?: boolean;
  onSuccess?: () => void;
}

export const useSignUpForm = ({
  isModal = false,
  onSuccess,
}: UseSignUpFormProps = {}) => {
  const { setIsAuthenticated, setCurrentUser, setShowAuthModal } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<SignUpFormInputs>();

  const password = watch('password');

  const onSubmit: SubmitHandler<SignUpFormInputs> = (data) => {
    const { email } = data;

    // Simulating an API call here
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
  };

  return {
    register,
    handleSubmit,
    errors,
    password,
    onSubmit,
  };
};
