import { Link } from "react-router-dom";
import { useNavbar } from "./useNavbar";
import { TbCreativeCommons, TbLogout } from "react-icons/tb";

export const Navbar = () => {
  const { isAuthenticated, handleLogout, isLoginPage } = useNavbar();

  return (
    <nav className="py-4">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link
              to="/"
              className="text-md flex flex-row items-center gap-1 font-bold"
            >
              <TbCreativeCommons size={30} />
              Foo-Rum
            </Link>
          </div>

          <div className="flex items-center">
            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                {/* <span className="text-gray-700">{currentUser?.email}</span> */}
                <button
                  onClick={handleLogout}
                  className="flex flex-row items-center gap-1 text-sm transition-colors"
                >
                  Logout <TbLogout size={20} />
                </button>
              </div>
            ) : isLoginPage ? (
              <div className="flex items-center space-x-4">
                <Link
                  to="/"
                  className="flex flex-row items-center gap-1 text-sm font-semibold transition-colors"
                >
                  Back to Home
                </Link>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link
                  to="/signin"
                  className="flex flex-row items-center gap-1 text-sm transition-colors"
                >
                  Login <TbLogout size={20} />
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
