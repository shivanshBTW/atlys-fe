import { useAuth } from "../../hooks/useAuth";

export const useNavbar = () => {
  const { isAuthenticated, setIsAuthenticated, currentUser, setCurrentUser } =
    useAuth();

  const handleLogout = () => {
    setIsAuthenticated(false);
    setCurrentUser(null);
  };

  return {
    isAuthenticated,
    currentUser,
    handleLogout,
  };
};
