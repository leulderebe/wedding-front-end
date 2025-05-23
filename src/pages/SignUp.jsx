import React from "react";
import SignUpForm from "../components/auth/SignUpForm";
import { ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { FaHome } from "react-icons/fa";

const SignUp = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <ToastContainer />
      {/* Left Side - Image with Quote */}
      <div className="hidden md:flex md:w-1/2 relative bg-purple-100">
        <div className="absolute top-6 left-6 z-20">
          <button
            onClick={() => navigate("/")}
            className="bg-white/80 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
            aria-label="Go to home page"
          >
            <FaHome className="text-purple-600 text-xl" />
          </button>
        </div>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url("/image/venue/5f1889814db54c54ce84efff_weddings.jpg")',
            filter: "brightness(0.7)",
          }}
        />

        {/* Quote Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-12">
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-lg shadow-lg max-w-md">
            <h2 className="text-3xl font-[Playwrite US Trad] text-purple-800 mb-4">
              Join Our Wedding Community
            </h2>
            <p className="text-gray-700 italic">
              Create an account to plan your perfect wedding or showcase your
              services as a vendor.
            </p>
            <p className="mt-2 text-gray-600 font-semibold">
              — Wedding Bliss Team
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - Sign Up Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-6 md:p-12 bg-white">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800">
              Create an Account
            </h1>
            <p className="text-gray-600 mt-2">
              Join us to plan or provide services for perfect weddings
            </p>
          </div>

          <SignUpForm />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
