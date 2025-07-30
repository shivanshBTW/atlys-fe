import { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { SignInForm } from '../SignInForm';
import { SignUpForm } from '../SignUpForm';

export const AuthModal = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const { setShowAuthModal } = useAuth();

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 animate-fadeIn">
      <div className="bg-white rounded-lg p-6 w-full max-w-md animate-scaleIn opacity-0">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">
            {isSignIn ? 'Sign In' : 'Sign Up'}
          </h2>
          <button
            onClick={() => setShowAuthModal(false)}
            className="text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>

        {isSignIn ? (
          <SignInForm isModal={true} />
        ) : (
          <SignUpForm isModal={true} />
        )}

        <div className="mt-4 text-center">
          <button
            onClick={() => setIsSignIn(!isSignIn)}
            className="text-blue-600 hover:underline"
          >
            {isSignIn
              ? 'Need an account? Sign up'
              : 'Already have an account? Sign in'}
          </button>
        </div>
      </div>
    </div>
  );
};
