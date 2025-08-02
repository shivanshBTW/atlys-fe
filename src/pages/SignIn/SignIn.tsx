import { Link } from 'react-router-dom';
import { Navbar } from '../../components/Navbar';
import { SignInForm } from '../../components/SignInForm';
import { TbLogout } from 'react-icons/tb';

export const SignIn = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-white p-4 animate-fadeIn">
        <div className="bg-gray-100 rounded-[30px] p-3">
          <div className="bg-white rounded-[21px] p-8 pb-12 w-full max-w-md animate-scaleIn opacity-0 min-w-sm  flex flex-col gap-8">
            <div className="text-center  flex flex-col gap-2">
              <div className="size-13 aspect-square bg-gray-100 flex flex-row justify-center items-center rounded-full mx-auto">
                <TbLogout size={30} />
              </div>
              <div>
                <h1 className="text-xl font-bold">Sign in to continue</h1>
                <p className="text-sm text-gray-600">
                  Sign in to access all the features on this app
                </p>
              </div>
            </div>

            <SignInForm />
          </div>

          <div className="mt-1 py-1 text-center">
            <p className="text-gray-600">
              Don't have an account?{' '}
              <Link to="/signup" className="text-blue-600 hover:underline">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
