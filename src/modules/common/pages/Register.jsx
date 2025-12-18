import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { orgRegisterAPI, userRegisterAPI } from "../../../service/allAPI";
import { toast } from "react-toastify";

function Register({ orgRegister }) {
  const [userDetails, setUserDetails] = useState({
    username: "",
    email: "",
    password: ""
  })
  // console.log(userDetails);
  const [orgDetails, setOrgDetails] = useState({
    username: "",
    email: "",
    password: "",
    volunteerCount: "",
    medicalTeamCount: "",
    vehicleCount: "",
    foodAvailability: "",
    about: ""

  })
  // console.log(orgDetails);

  const navigate = useNavigate()

  const handleUserRegister = async () => {
    const { username, email, password } = userDetails
    try {
      if (!username || !email || !password) {
        toast.info(`Please fill the details completely`)
      } else {
        const result = await userRegisterAPI(userDetails)
        if (result.status == 200) {
          toast.success(`Registered Successfully...Please Login`)
          setUserDetails({
            username: "",
            email: "",
            password: ""
          })
          navigate("/user-login")
          console.log(result);

        } else {
          toast.warning(`User Already Exists... Please Login`)
        }
      }

    } catch (error) {
      toast.error(`Something went wrong`)

    }
  }

  const handleOrgRegister = async () => {
    const { username, email, password, volunteerCount, medicalTeamCount, vehicleCount, foodAvailability, about } = orgDetails
    try {
      if (!username || !email || !password || !volunteerCount || !medicalTeamCount || !vehicleCount || !foodAvailability || !about) {
        toast.info(`Please fill the details completely`)
      } else {
        const result = await orgRegisterAPI(orgDetails)
        if (result.status == 200) {
          toast.success(`Registered Successfully...Please Login`)
          console.log(result);
          setOrgDetails({
            username: "",
            email: "",
            password: "",
            volunteerCount: "",
            medicalTeamCount: "",
            vehicleCount: "",
            foodAvailability: "",
            about: ""
          })        
          setTimeout(()=>{
            navigate("/org-login")
          }, 2000)
        }else{
          toast.warning(`Organization Already Exists...Please Login...!`)
        }
      }

    } catch (error) {
      toast.error(`Something went wrong`)

    }
  }

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
              {!orgRegister ?
                <input value={userDetails.username} onChange={(e) => setUserDetails({ ...userDetails, username: e.target.value })}
                  type="text"
                  className="w-full mt-2 p-3 rounded-xl bg-white/90 text-black border border-transparent focus:ring-2 focus:ring-yellow-400 outline-none"
                  placeholder="Enter your username"
                />
                :
                <input value={orgDetails.username} onChange={(e) => setOrgDetails({ ...orgDetails, username: e.target.value })}
                  type="text"
                  className="w-full mt-2 p-3 rounded-xl bg-white/90 text-black border border-transparent focus:ring-2 focus:ring-yellow-400 outline-none"
                  placeholder="Enter your organization username"
                />
              }
            </div>

            {/* Email */}
            <div>
              <label className="font-semibold">Email</label>
              {!orgRegister ?
                <input value={userDetails.email} onChange={(e) => setUserDetails({ ...userDetails, email: e.target.value })}
                  type="email"
                  className="w-full mt-2 p-3 rounded-xl bg-white/90 text-black border border-transparent focus:ring-2 focus:ring-yellow-400 outline-none"
                  placeholder="Enter your email"
                />
                :
                <input value={orgDetails.email} onChange={(e) => setOrgDetails({ ...orgDetails, email: e.target.value })}
                  type="email"
                  className="w-full mt-2 p-3 rounded-xl bg-white/90 text-black border border-transparent focus:ring-2 focus:ring-yellow-400 outline-none"
                  placeholder="Enter your organization email"
                />
              }
            </div>

            {/* Password */}
            <div>
              <label className="font-semibold">Password</label>
              {!orgRegister ?
                <input value={userDetails.password} onChange={(e) => setUserDetails({ ...userDetails, password: e.target.value })}
                  type="password"
                  className="w-full mt-2 p-3 rounded-xl bg-white/90 text-black border border-transparent focus:ring-2 focus:ring-yellow-400 outline-none"
                  placeholder="Enter your password"
                />
                :
                <input value={orgDetails.password} onChange={(e) => setOrgDetails({ ...orgDetails, password: e.target.value })}
                  type="password"
                  className="w-full mt-2 p-3 rounded-xl bg-white/90 text-black border border-transparent focus:ring-2 focus:ring-yellow-400 outline-none"
                  placeholder="Enter your organization password"
                />}
            </div>

            {/* volunteer count */}
            {orgRegister &&
              <div>
                <label className="font-semibold">Volunteer Count</label>
                <input value={orgDetails.volunteerCount} onChange={(e) => setOrgDetails({ ...orgDetails, volunteerCount: e.target.value })}
                  type="number"
                  className="w-full mt-2 p-3 rounded-xl bg-white/90 text-black border border-transparent focus:ring-2 focus:ring-yellow-400 outline-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                  placeholder="Enter The number of volunteers"
                />
              </div>}

            {/* medical team count */}
            {orgRegister &&
              <div>
                <label className="font-semibold">Medical Team Count</label>
                <select value={orgDetails.medicalTeamCount} onChange={(e) => setOrgDetails({ ...orgDetails, medicalTeamCount: e.target.value })} name="" className="w-full mt-2 p-3 rounded-xl bg-white/90 text-black border border-transparent focus:ring-2 focus:ring-yellow-400 outline-none">
                  <option value=""> -- Select  -- </option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>}

            {/* vehicle count */}
            {orgRegister &&
              <div>
                <label className="font-semibold">Vehicle Count</label>
                <input value={orgDetails.vehicleCount} onChange={(e) => setOrgDetails({ ...orgDetails, vehicleCount: e.target.value })}
                  type="number"
                  className="w-full mt-2 p-3 rounded-xl bg-white/90 text-black border border-transparent focus:ring-2 focus:ring-yellow-400 outline-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                  placeholder="Enter The number of vehicles"
                />
              </div>}

            {/* food availability */}
            {orgRegister &&
              <div>
                <label className="font-semibold">Food Availability</label>
                <select value={orgDetails.foodAvailability} onChange={(e) => setOrgDetails({ ...orgDetails, foodAvailability: e.target.value })} name="" className="w-full mt-2 p-3 rounded-xl bg-white/90 text-black border border-transparent focus:ring-2 focus:ring-yellow-400 outline-none">
                  <option value=""> -- Select  -- </option>
                  <option value="Available">Available</option>
                  <option value="Unavailable">Unavailable</option>
                </select>
              </div>}

            {/* description */}
            {orgRegister &&
              <div>
                <label className="font-semibold">About</label>
                <textarea name="" value={orgDetails.about} onChange={(e) => setOrgDetails({ ...orgDetails, about: e.target.value })} rows={4} placeholder="Enter a short description about your organization" className="w-full mt-2 p-3 rounded-xl bg-white/90 text-black border border-transparent focus:ring-2 focus:ring-yellow-400 outline-none resize-none">

                </textarea>
              </div>}

            {/* SIGN UP BUTTON */}
            <button type="button" onClick={orgRegister ? handleOrgRegister : handleUserRegister} className="w-full py-3 mt-4 rounded-xl bg-yellow-400 text-black font-bold text-lg shadow-md hover:bg-yellow-300 transition">
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
