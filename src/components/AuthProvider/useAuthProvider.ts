import { useEffect, useState } from "react";

export const useAuthProvider = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    const stored = localStorage.getItem("isAuthenticated");
    return stored === "true";
  });

  const [showAuthModal, setShowAuthModal] = useState(false);
  const [currentUser, setCurrentUser] = useState<{ email: string } | null>(
    () => {
      const stored = localStorage.getItem("currentUser");
      return stored ? JSON.parse(stored) : null;
    },
  );

  useEffect(() => {
    localStorage.setItem("isAuthenticated", String(isAuthenticated));
  }, [isAuthenticated]);

  useEffect(() => {
    if (currentUser) {
      localStorage.setItem("currentUser", JSON.stringify(currentUser));
    } else {
      localStorage.removeItem("currentUser");
    }
  }, [currentUser]);

  return {
    isAuthenticated,
    setIsAuthenticated,
    showAuthModal,
    setShowAuthModal,
    currentUser,
    setCurrentUser,
  };
};
