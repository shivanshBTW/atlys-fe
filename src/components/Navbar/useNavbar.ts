import { useAuth } from "../../hooks/useAuth";

export const useNavbar = () => {
  const { isAuthenticated, setIsAuthenticated, currentUser, setCurrentUser } =
    useAuth();

  const handleLogout = () => {
    setIsAuthenticated(false);
    setCurrentUser(null);
  };

  const isLoginPage =
    window.location.pathname === "/signup" ||
    window.location.pathname === "/signin";

  return {
    isAuthenticated,
    currentUser,
    handleLogout,
    isLoginPage,
  };
};
