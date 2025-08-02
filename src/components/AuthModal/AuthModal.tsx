import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { SignInForm } from "../SignInForm";
import { SignUpForm } from "../SignUpForm";

export const AuthModal = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const { setShowAuthModal } = useAuth();

  return (
    <div className="animate-fadeIn fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="animate-scaleIn w-full max-w-md rounded-lg bg-white p-6 opacity-0">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold">
            {isSignIn ? "Sign In" : "Sign Up"}
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
              ? "Need an account? Sign up"
              : "Already have an account? Sign in"}
          </button>
        </div>
      </div>
    </div>
  );
};
