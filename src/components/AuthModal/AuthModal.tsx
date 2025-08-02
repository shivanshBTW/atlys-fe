import { useState, useCallback } from "react";
import { useAuth } from "../../hooks/useAuth";
import { SignInForm } from "../SignInForm";
import { SignUpForm } from "../SignUpForm";
import { TbLogout } from "react-icons/tb";

export const AuthModal = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [isClosing, setIsClosing] = useState(false);
  const { setShowAuthModal } = useAuth();

  const handleClose = useCallback(() => {
    setIsClosing(true);
    setTimeout(() => {
      setShowAuthModal(false);
    }, 300); // Same duration as our animations
  }, [setShowAuthModal]);

  return (
    <>
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center bg-black/50 ${isClosing ? "animate-fadeOut" : "animate-fadeIn"}`}
      >
        <div
          className={`rounded-[30px] bg-gray-100 p-3 ${isClosing ? "animate-scaleOut" : "animate-scaleIn opacity-0"}`}
        >
          <div className="flex w-full max-w-xs flex-col gap-8 rounded-[21px] bg-white p-8 pb-12 sm:max-w-md">
            <button
              onClick={handleClose}
              className="absolute top-6 right-6 text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
            <div className="flex flex-col gap-2 text-center">
              <div className="mx-auto flex aspect-square size-13 flex-row items-center justify-center rounded-full bg-gray-100">
                <TbLogout size={30} />
              </div>
              <div>
                <h1 className="text-xl font-bold">Sign in to continue</h1>
                <p className="text-sm text-gray-600">
                  Sign in to access all the features on this app
                </p>
              </div>
            </div>

            {isSignIn ? (
              <SignInForm isModal={true} />
            ) : (
              <SignUpForm isModal={true} />
            )}
          </div>

          <div className="mt-1 py-1 text-center">
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
    </>
  );
};
