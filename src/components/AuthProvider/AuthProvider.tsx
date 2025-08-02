import { AuthContext } from "../../context/AuthContext";
import { AuthModal } from "../AuthModal";
import { useAuthProvider } from "./useAuthProvider";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const auth = useAuthProvider();

  return (
    <AuthContext.Provider value={auth}>
      {auth.showAuthModal && <AuthModal />}
      {children}
    </AuthContext.Provider>
  );
};
