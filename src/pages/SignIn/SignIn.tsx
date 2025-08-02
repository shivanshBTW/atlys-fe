import { TbLogout } from "react-icons/tb";
import { Link } from "react-router-dom";
import { Navbar } from "../../components/Navbar";
import { SignInForm } from "../../components/SignInForm";

export const SignIn = () => {
  return (
    <>
      <Navbar />
      <div className="animate-fadeIn flex min-h-screen items-center justify-center bg-white p-4">
        <div className="animate-scaleIn rounded-[30px] bg-gray-100 p-3 opacity-0">
          <div className="flex w-full max-w-md min-w-sm flex-col gap-8 rounded-[21px] bg-white p-8 pb-12">
            <div className="flex flex-col gap-2 text-center">
              <div className="mx-auto flex aspect-square size-13 flex-row items-center justify-center rounded-full bg-gray-100">
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
              Don't have an account?{" "}
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
