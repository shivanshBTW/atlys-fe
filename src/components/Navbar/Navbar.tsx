import { Link } from 'react-router-dom';
import { useNavbar } from './useNavbar';
import { TbCreativeCommons, TbLogout } from 'react-icons/tb';

export const Navbar = () => {
  const { isAuthenticated, handleLogout } = useNavbar();

  return (
    <nav className="py-4">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link
              to="/"
              className="text-md font-bold flex flex-row items-center gap-1"
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
                  className="transition-colors gap-1 text-sm flex flex-row items-center"
                >
                  Logout <TbLogout size={20} />
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                {/* <span className="text-gray-700">{currentUser?.email}</span> */}
                <Link
                  to="/signin"
                  className="transition-colors gap-1 text-sm flex flex-row items-center"
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
