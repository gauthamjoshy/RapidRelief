import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { adminLoginAPI } from "../../../service/allAPI";

function Login({ adminLogin, userLogin, orgLogin }) {
  const [adminLoginDetails, setAdminLoginDetails] = useState({
    email: "",
    password: ""
  })
  console.log(adminLoginDetails);

  const [userLoginDetails, setUserLoginDetails] = useState({
    email: "",
    password: ""
  })
  console.log(userLoginDetails);

  const [orgLoginDetails, setOrgLoginDetails] = useState({
    email: "",
    password: ""
  })
  console.log(orgLoginDetails);

  const handleAdminLogin = async () => {
    const { email, password } = adminLoginDetails
    try {
      if (!email || !password) {
        toast.warning(`Please fill the details completely`)
      }else{
        const result = await adminLoginAPI(adminLoginDetails)
        console.log(result);
        if(result.status == 200){
          toast.success(`Login Successful`)
        }else if(result.status == 404){
          toast.error(result.response.data)
        }else{
          toast.error(`Something went wrong again`)
        }
        
      }

    } catch (error) {
      toast.error(`Something went wrong`)
    }
  }
  



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
              {(adminLogin) ?
                <input value={adminLoginDetails.email} onChange={(e) => setAdminLoginDetails({ ...adminLoginDetails, email: e.target.value })}
                  type="email"
                  className="w-full mt-2 p-3 rounded-xl bg-white/90 text-black border border-transparent focus:ring-2 focus:ring-yellow-400 outline-none transition"
                  placeholder="Enter your email"
                />
                : (userLogin) ?
                  <input value={userLoginDetails.email} onChange={(e) => setUserLoginDetails({ ...userLoginDetails, email: e.target.value })}
                    type="email"
                    className="w-full mt-2 p-3 rounded-xl bg-white/90 text-black border border-transparent focus:ring-2 focus:ring-yellow-400 outline-none transition"
                    placeholder="Enter your email"
                  />
                  :
                  <input value={orgLoginDetails.email} onChange={(e) => setOrgLoginDetails({ ...orgLoginDetails, email: e.target.value })}
                    type="email"
                    className="w-full mt-2 p-3 rounded-xl bg-white/90 text-black border border-transparent focus:ring-2 focus:ring-yellow-400 outline-none transition"
                    placeholder="Enter your email"
                  />}

            </div>

            {/* Password */}
            <div>
              <label className="font-semibold">Password</label>
              {(adminLogin) ?
                <input value={adminLoginDetails.password} onChange={(e) => setAdminLoginDetails({ ...adminLoginDetails, password: e.target.value })}
                  type="password"
                  className="w-full mt-2 p-3 rounded-xl bg-white/90 text-black border border-transparent focus:ring-2 focus:ring-yellow-400 outline-none transition"
                  placeholder="Enter your password"
                />
                : (userLogin) ?
                  <input value={userLoginDetails.password} onChange={(e) => setUserLoginDetails({ ...userLoginDetails, password: e.target.value })}
                    type="password"
                    className="w-full mt-2 p-3 rounded-xl bg-white/90 text-black border border-transparent focus:ring-2 focus:ring-yellow-400 outline-none transition"
                    placeholder="Enter your password"
                  />
                  :
                  <input value={orgLoginDetails.password} onChange={(e) => setOrgLoginDetails({ ...orgLoginDetails, password: e.target.value })}
                    type="password"
                    className="w-full mt-2 p-3 rounded-xl bg-white/90 text-black border border-transparent focus:ring-2 focus:ring-yellow-400 outline-none transition"
                    placeholder="Enter your password"
                  />}
            </div>


            {/* LOGIN BUTTON */}
            <button onClick={handleAdminLogin} className="w-full mt-4 py-3 rounded-xl bg-yellow-400 text-black font-bold text-lg shadow-md hover:bg-yellow-300 transition">
              Sign In
            </button>

            {/* GOOGLE BUTTON */}
            {!adminLogin &&
              <div className="mt-6">
                <button className="flex justify-center items-center gap-3 bg-blue-950 text-white py-3 w-full rounded-xl hover:bg-white hover:text-black hover:border-black border transition">
                  <FcGoogle className="text-xl" /> Continue with Google
                </button>
              </div>}

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
