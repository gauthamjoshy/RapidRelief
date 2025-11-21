import React from "react";
import { Link } from "react-router-dom";

function Login({ adminLogin, userLogin, orgLogin }) {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-linear-to-br from-blue-900 via-blue-700 to-blue-400 p-4">

      {/* OUTER CARD */}
      <div className="bg-white/20 backdrop-blur-lg shadow-2xl rounded-3xl w-full max-w-5xl grid md:grid-cols-2 overflow-hidden border border-white/30">

        {/* LEFT FORM SECTION */}
        <div className="px-10 py-16 text-white">

          {/* HEADING */}
          <h1 className="text-3xl text-center md:text-left font-extrabold mb-6 drop-shadow-lg">
            {adminLogin && "Admin Login"}
            {userLogin && "User Login"}
            {orgLogin && "Organization Login"}
          </h1>

          <p className="text-white/80 text-center md:text-left mb-10">
            Securely sign in to your RapidRelief account.
          </p>

          {/* FORM */}
          <form className="space-y-6">

            {/* Email */}
            <div>
              <label className="font-semibold">Email</label>
              <input
                type="email"
                className="w-full mt-2 p-3 rounded-xl bg-white/90 text-black border border-transparent focus:ring-2 focus:ring-yellow-400 outline-none transition"
                placeholder="Enter your email"
              />
            </div>

            {/* Password */}
            <div>
              <label className="font-semibold">Password</label>
              <input
                type="password"
                className="w-full mt-2 p-3 rounded-xl bg-white/90 text-black border border-transparent focus:ring-2 focus:ring-yellow-400 outline-none transition"
                placeholder="Enter your password"
              />
            </div>

            {/* LOGIN BUTTON */}
            <button className="w-full mt-4 py-3 rounded-xl bg-yellow-400 text-black font-bold text-lg shadow-md hover:bg-yellow-300 transition">
              Sign In
            </button>

            {/* SIGN UP */}
            <p className="text-sm text-white/80 mt-4 text-center">
              Don't have an account?{" "}
              <Link
                to="/user-register"
                className="font-semibold text-yellow-300 hover:underline"
              >
                Sign Up
              </Link>
            </p>
          </form>
        </div>

        {/* RIGHT IMAGE SECTION */}
        <div className="hidden md:flex items-center justify-center bg-white/10 backdrop-blur-lg p-8">

          <img
            src={
              adminLogin
                ? "https://static.vecteezy.com/system/resources/previews/020/101/791/non_2x/admin-login-blue-gradient-concept-icon-administrator-account-learning-management-system-access-abstract-idea-thin-line-illustration-isolated-outline-drawing-vector.jpg"
                : userLogin
                ? "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRLCRDHK6VdBms0e5rHpa3zOkgX2PbwhUIRMRpizGgT9I-XCOv1lExOR0z2oDyr"
                : "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcSTruVnGf-Butv2VUQfw2RRPTdu-5ffDTJ2azoR6D6bOtEtZjzqQeQOSflb-rSU38ygHHViSllVgNTzVIkoTTndTlmgZ_FuWXTHGKCLRhpGXazk9TE"
            }
            alt="Login Visual"
            className="rounded-2xl shadow-xl w-80 h-80 object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default Login;
