import { Link } from 'react-router-dom';
import { Navbar } from '../../components/Navbar';
import { SignUpForm } from '../../components/SignUpForm';

export const SignUp = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4 animate-fadeIn">
        <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md animate-scaleIn opacity-0">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold">Create Account</h1>
            <p className="text-gray-600 mt-2">Join Atlys today</p>
          </div>

          <SignUpForm />

          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Already have an account?{' '}
              <Link to="/signin" className="text-blue-600 hover:underline">
                Sign in
              </Link>
            </p>
          </div>

          <div className="mt-8 border-t pt-6">
            <p className="text-xs text-gray-500 text-center">
              By signing up, you agree to our Terms of Service and Privacy
              Policy
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
