import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import type { SubmitHandler } from 'react-hook-form';
import { useAuth } from '../../hooks/useAuth';

interface SignUpFormInputs {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export const useSignUp = () => {
  const { setIsAuthenticated, setCurrentUser } = useAuth();
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
    navigate('/');
  };

  return {
    register,
    handleSubmit,
    errors,
    password,
    onSubmit,
  };
};
