import React from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

function Register({ orgRegister }) {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-linear-to-br from-blue-900 via-blue-700 to-blue-400 p-4">
      
      {/* MAIN WRAPPER */}
      <div className="bg-white/20 backdrop-blur-xl shadow-2xl rounded-3xl w-full max-w-5xl grid md:grid-cols-2 overflow-hidden border border-white/30">

        {/* LEFT FORM SECTION */}
        <div className="px-10 py-16 text-white">

          <h1 className="text-3xl text-center md:text-left font-extrabold mb-4 drop-shadow">
            {orgRegister ? "Create an Organization Account" : "Create a User Account"}
          </h1>

          <p className="text-white/80 mb-10 text-center md:text-left">
            Join the RapidRelief community to contribute or seek help.
          </p>

          <form className="space-y-6">

            {/* Username */}
            <div>
              <label className="font-semibold">Username</label>
              <input
                type="text"
                className="w-full mt-2 p-3 rounded-xl bg-white/90 text-black border border-transparent focus:ring-2 focus:ring-yellow-400 outline-none"
                placeholder="Enter your username"
              />
            </div>

            {/* Email */}
            <div>
              <label className="font-semibold">Email</label>
              <input
                type="email"
                className="w-full mt-2 p-3 rounded-xl bg-white/90 text-black border border-transparent focus:ring-2 focus:ring-yellow-400 outline-none"
                placeholder="Enter your email"
              />
            </div>

            {/* Password */}
            <div>
              <label className="font-semibold">Password</label>
              <input
                type="password"
                className="w-full mt-2 p-3 rounded-xl bg-white/90 text-black border border-transparent focus:ring-2 focus:ring-yellow-400 outline-none"
                placeholder="Enter your password"
              />
            </div>

            {/* SIGN UP BUTTON */}
            <button className="w-full py-3 mt-4 rounded-xl bg-yellow-400 text-black font-bold text-lg shadow-md hover:bg-yellow-300 transition">
              Create Account
            </button>

            {/* LOGIN LINK */}
            <p className="text-sm text-white/80 mt-4 text-center">
              Already have an account?{" "}
              {orgRegister ? (
                <Link
                  to="/org-login"
                  className="font-semibold text-yellow-300 hover:underline"
                >
                  Login
                </Link>
              ) : (
                <Link
                  to="/user-login"
                  className="font-semibold text-yellow-300 hover:underline"
                >
                  Login
                </Link>
              )}
            </p>
          </form>

          {/* GOOGLE BUTTON */}
          <div className="mt-6">
            <button className="flex justify-center items-center gap-3 bg-blue-950 text-white py-3 w-full rounded-xl hover:bg-white hover:text-black hover:border-black border transition">
              <FcGoogle className="text-xl" /> Continue with Google
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE SECTION */}
        <div className="hidden md:flex items-center justify-center bg-white/10 backdrop-blur-lg p-8">

          <img
            src={
              orgRegister
                ? "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcRxtH6RiutN24RIA-tIVXKWtdO-M8nV703NO7kyihSQ8AlzjK5VoIKfyzxNJjDjn_XRF2iZzG99TSItah6WY-pURMZULk_thauni3D2k1_u4pSucKo"
                : "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTfM2bg-vVrKKK9ho1ckdeVQ3ZRrqPyvHo1jOlxaFSf1_48vQi3jvY2gSxdPQCP"
            }
            alt="Register Visual"
            className="w-80 h-80 object-cover rounded-2xl shadow-xl"
          />
        </div>

      </div>
    </div>
  );
}

export default Register;
