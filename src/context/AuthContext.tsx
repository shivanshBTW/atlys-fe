import { createContext } from "react";

// Create auth context
export const AuthContext = createContext<{
  isAuthenticated: boolean;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
  showAuthModal: boolean;
  setShowAuthModal: React.Dispatch<React.SetStateAction<boolean>>;
  currentUser: { email: string } | null;
  setCurrentUser: React.Dispatch<
    React.SetStateAction<{ email: string } | null>
  >;
}>({
  isAuthenticated: false,
  setIsAuthenticated: () => {},
  showAuthModal: false,
  setShowAuthModal: () => {},
  currentUser: null,
  setCurrentUser: () => {},
});
