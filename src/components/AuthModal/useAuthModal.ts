import { useState, useCallback } from "react";
import { useAuth } from "../../hooks/useAuth";

export const useAuthModal = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [isClosing, setIsClosing] = useState(false);
  const { setShowAuthModal } = useAuth();

  const handleClose = useCallback(() => {
    setIsClosing(true);
    setTimeout(() => {
      setShowAuthModal(false);
    }, 300);
  }, [setShowAuthModal]);

  const toggleAuthMode = useCallback(() => {
    setIsSignIn((prev) => !prev);
  }, []);

  return {
    isSignIn,
    isClosing,
    handleClose,
    toggleAuthMode,
  };
};
