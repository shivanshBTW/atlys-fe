import { Link } from 'react-router-dom';
import { Navbar } from '../../components/Navbar';
import { SignInForm } from '../../components/SignInForm';

export const SignIn = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-white p-4 animate-fadeIn">
        <div className="bg-gray-100 rounded-[30px] p-3 ">
          <div className="bg-white rounded-[21px] p-8 w-full max-w-md animate-scaleIn opacity-0 min-w-sm">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold">Welcome Back</h1>
              <p className="text-gray-600 mt-2">Sign in to continue to Atlys</p>
            </div>

            <SignInForm />
          </div>

          <div className="mt-2 mb-1 text-center">
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
