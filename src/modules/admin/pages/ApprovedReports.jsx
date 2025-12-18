import React, { useState } from "react";
import AdminSidebar from "../components/AdminSideBar";
import { IoMdCloseCircle } from "react-icons/io";
import { ImCross } from "react-icons/im";
import { FaAmbulance, FaPeopleCarry } from "react-icons/fa";
import { GiFirstAidKit } from "react-icons/gi";
import { FaBowlFood } from "react-icons/fa6";
import { BsBuildingFillAdd } from "react-icons/bs";
// import { FaFireAlt, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

function ApprovedReports() {
  const [modal, setModal] = useState(false)

  // state for opening reject modal
  const [openModal, setOpenModal] = useState(false)

  return (
    <>
      <div className="grid md:grid-cols-[1fr_4fr] bg-gray-100 h-screen ">
        <div>
          <AdminSidebar />
        </div>

        <div className="p-5">

          {/* AI-GENERATED INCIDENT REPORT */}
          <div className="p-6">
            <h1 className="text-3xl font-bold text-blue-900 mb-6">
              Approved Incident Reports
            </h1>

            {/* GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 bg-gray-100">

              {/* CARD 1 */}
              <div className="bg-white shadow-lg rounded-xl p-5 border">
                <div className="flex justify-between">
                  <h3 className="text-lg font-bold text-gray-800">
                    Landslide – Road Blocked
                  </h3>

                  <div>
                    <span className="bg-orange-200 p-1 rounded ">Pending</span>
                  </div>
                </div>

                <div className="my-1">
                  <span className="text-white font-semibold bg-red-600 text-sm rounded p-1">
                    Severe
                  </span>
                </div>

                <div>
                  <h1>Reported by: <span>Anil M</span></h1>
                </div>

                <div className="mt-3 text-gray-600 text-sm">
                  <p>Kannur, Kerala</p>
                  <p>26 Jul 2024, 14:30 IST</p>
                </div>

                <div className="flex gap-2 mt-4">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvR4KoAeHHb-WGz75Z2yuMIpjeCqAUbJU7MA&s"
                    className="w-20 h-16 rounded-lg object-cover shadow"
                  />
                  <img
                    src="https://disasterphilanthropy.org/wp-content/uploads/2023/07/2023_07-NY-state-flooding-Canandaigua-Fire-twitter.jpeg"
                    className="w-20 h-16 rounded-lg object-cover shadow"
                  />
                  <img
                    src="https://img.autocarindia.com/ExtraImages/20231101061459_Accident%20image%201.jpg"
                    className="w-20 h-16 rounded-lg object-cover shadow"
                  />
                </div>

                <p className="mt-3 text-gray-700 text-sm">
                  Contact: +91 98765 43210
                </p>

                {/* USER DESCRIPTION */}
                <div className="mt-6">
                  <h2 className="text-lg font-semibold text-gray-700">
                    User-Provided Description
                  </h2>
                  <p className="mt-2 text-gray-600">
                    “Heavy rains caused a massive landslide around 2 PM today near the old bridge.
                    A car is partially buried. Power lines are down. Road is inaccessible.”
                  </p>
                </div>

                <div className=" mt-4">
                  <button onClick={() => setModal(!modal)} className="bg-blue-900 text-white px-3 py-2 rounded-md text-sm font-semibold hover:bg-blue-700">
                    Assign Volunteer
                  </button>
                  
                </div>
              </div>


              {/* CARD 2 */}
              <div className="bg-white shadow-lg rounded-xl p-5 border">
                <div className="flex justify-between">
                  <h3 className="text-lg font-bold text-gray-800">
                    Landslide – Road Blocked
                  </h3>

                  <div>
                    <span className="bg-orange-200 p-1 rounded ">Pending</span>
                  </div>
                </div>

                <div className="my-1">
                  <span className="text-white font-semibold bg-red-600 text-sm rounded p-1">
                    Severe
                  </span>
                </div>

                <div>
                  <h1>Reported by: <span>Anil M</span></h1>
                </div>

                <div className="mt-3 text-gray-600 text-sm">
                  <p>Kannur, Kerala</p>
                  <p>26 Jul 2024, 14:30 IST</p>
                </div>

                <div className="flex gap-2 mt-4">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvR4KoAeHHb-WGz75Z2yuMIpjeCqAUbJU7MA&s"
                    className="w-20 h-16 rounded-lg object-cover shadow"
                  />
                  <img
                    src="https://disasterphilanthropy.org/wp-content/uploads/2023/07/2023_07-NY-state-flooding-Canandaigua-Fire-twitter.jpeg"
                    className="w-20 h-16 rounded-lg object-cover shadow"
                  />
                  <img
                    src="https://img.autocarindia.com/ExtraImages/20231101061459_Accident%20image%201.jpg"
                    className="w-20 h-16 rounded-lg object-cover shadow"
                  />
                </div>

                <p className="mt-3 text-gray-700 text-sm">
                  Contact: +91 98765 43210
                </p>

                <div className="flex gap-3 mt-4">
                  <button className="bg-blue-900 text-white px-3 py-2 rounded-md text-sm font-semibold hover:bg-blue-700">
                    Assign Volunteer
                  </button>
                  <button className="bg-red-500 text-white px-3 py-2 rounded-md text-sm font-semibold hover:bg-red-600">
                    Reject
                  </button>
                </div>
              </div>

              {/* CARD 3 */}
              <div className="bg-white shadow-lg rounded-xl p-5 border">
                <div className="flex justify-between">
                  <h3 className="text-lg font-bold text-gray-800">
                    Landslide – Road Blocked
                  </h3>

                  <div>
                    <span className="bg-orange-200 p-1 rounded ">Pending</span>
                  </div>
                </div>

                <div className="my-1">
                  <span className="text-white font-semibold bg-red-600 text-sm rounded p-1">
                    Severe
                  </span>
                </div>

                <div>
                  <h1>Reported by: <span>Anil M</span></h1>
                </div>

                <div className="mt-3 text-gray-600 text-sm">
                  <p>Kannur, Kerala</p>
                  <p>26 Jul 2024, 14:30 IST</p>
                </div>

                <div className="flex gap-2 mt-4">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvR4KoAeHHb-WGz75Z2yuMIpjeCqAUbJU7MA&s"
                    className="w-20 h-16 rounded-lg object-cover shadow"
                  />
                  <img
                    src="https://disasterphilanthropy.org/wp-content/uploads/2023/07/2023_07-NY-state-flooding-Canandaigua-Fire-twitter.jpeg"
                    className="w-20 h-16 rounded-lg object-cover shadow"
                  />
                  <img
                    src="https://img.autocarindia.com/ExtraImages/20231101061459_Accident%20image%201.jpg"
                    className="w-20 h-16 rounded-lg object-cover shadow"
                  />
                </div>

                <p className="mt-3 text-gray-700 text-sm">
                  Contact: +91 98765 43210
                </p>

                <div className="flex gap-3 mt-4">
                  <button className="bg-blue-900 text-white px-3 py-2 rounded-md text-sm font-semibold hover:bg-blue-700">
                    Assign Volunteer
                  </button>
                  <button className="bg-red-500 text-white px-3 py-2 rounded-md text-sm font-semibold hover:bg-red-600">
                    Reject
                  </button>
                </div>
              </div>

              {/* CARD 4 */}
              <div className="bg-white shadow-lg rounded-xl p-5 border">
                <div className="flex justify-between">
                  <h3 className="text-lg font-bold text-gray-800">
                    Landslide – Road Blocked
                  </h3>

                  <div>
                    <span className="bg-orange-200 p-1 rounded ">Pending</span>
                  </div>
                </div>

                <div className="my-1">
                  <span className="text-white font-semibold bg-red-600 text-sm rounded p-1">
                    Severe
                  </span>
                </div>

                <div>
                  <h1>Reported by: <span>Anil M</span></h1>
                </div>

                <div className="mt-3 text-gray-600 text-sm">
                  <p>Kannur, Kerala</p>
                  <p>26 Jul 2024, 14:30 IST</p>
                </div>

                <div className="flex gap-2 mt-4">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvR4KoAeHHb-WGz75Z2yuMIpjeCqAUbJU7MA&s"
                    className="w-20 h-16 rounded-lg object-cover shadow"
                  />
                  <img
                    src="https://disasterphilanthropy.org/wp-content/uploads/2023/07/2023_07-NY-state-flooding-Canandaigua-Fire-twitter.jpeg"
                    className="w-20 h-16 rounded-lg object-cover shadow"
                  />
                  <img
                    src="https://img.autocarindia.com/ExtraImages/20231101061459_Accident%20image%201.jpg"
                    className="w-20 h-16 rounded-lg object-cover shadow"
                  />
                </div>

                <p className="mt-3 text-gray-700 text-sm">
                  Contact: +91 98765 43210
                </p>

                <div className="flex gap-3 mt-4">
                  <button className="bg-blue-900 text-white px-3 py-2 rounded-md text-sm font-semibold hover:bg-blue-700">
                    Assign Volunteer
                  </button>
                  <button className="bg-red-500 text-white px-3 py-2 rounded-md text-sm font-semibold hover:bg-red-600">
                    Reject
                  </button>
                </div>
              </div>

            </div>

          </div>


          {/* modal */}
          {modal &&
            <div className='relative z-10 overflow-y-auto'>
              <div className='bg-gray-200/95 fixed inset-0'>
                <div className='flex justify-center items-center min-h-screen'>
                  <div id="animationModal" className="scroll-smooth">
                    <div className="flex justify-center items-center my-5 px-3 md:ms-100 ">
                      <h1 className="text-3xl text-blue-950 font-bold">Disaster Relief Organizations</h1>
                      <IoMdCloseCircle
                        className="text-red-600 text-4xl cursor-pointer hover:text-red-700 transition flex justify-end items-center md:ms-80"
                        onClick={() => setModal(!modal)}
                      />
                    </div>
                    <div className='grid md:grid-cols-3 md:ms-40 gap-10 md:pt-7 md:pb-30 md:w-full overflow-y-auto scroll-auto max-h-screen '>
                      {/* cards of different organizations */}
                      {/*  */}
                      <div className="bg-white w-80 p-5 rounded-2xl shadow-lg border hover:shadow-2xl transition gap-5 px-5">

                        {/* <!-- Organization Header --> */}
                        <div className="flex items-center gap-3">
                          <div className="bg-gray-100 border border-red-500 text-white w-12 h-12 flex justify-center items-center rounded-full text-xl font-bold">
                            <BsBuildingFillAdd className="text-red-500" />
                          </div>
                          <div>
                            <h2 className="text-lg font-bold text-gray-900">RedCross Kerala</h2>
                            <p className="text-sm text-gray-500">Disaster Relief Team</p>
                          </div>
                        </div>

                        {/* <!-- Divider --> */}
                        <hr className="my-4" />

                        {/* <!-- Description --> */}
                        <p className="text-sm text-gray-700 leading-relaxed">
                          A certified emergency response organization with trained volunteers specialized
                          in flood rescue, medical aid, and debris clearing.
                        </p>

                        {/* <!-- Resources Section --> */}
                        <h3 className="mt-4 text-sm font-bold text-gray-800">Available Resources</h3>
                        <div className="mt-2 flex flex-wrap gap-2">
                          <span className="bg-blue-100 text-blue-900 text-xs font-semibold px-3 py-1 rounded-full flex gap-2"> <FaPeopleCarry className="text-lg" /> 10 Volunteers</span>
                          <span className="bg-yellow-100 text-yellow-700 text-xs font-semibold px-3 py-1 rounded-full flex gap-2"> <FaAmbulance className="text-lg" /> 2 Ambulances</span>
                          <span className="bg-red-100 text-red-500 text-xs font-semibold px-3 py-1 rounded-full flex gap-2"> <GiFirstAidKit className="text-lg" /> 2 Rescue Kit</span>
                          <span className="bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full flex gap-2"> <FaBowlFood className="text-lg" /> Food Supply</span>
                        </div>

                        {/* <!-- Available Status --> */}
                        <p className="mt-4 text-sm">
                          Status:
                          <span className="font-semibold text-green-600">Available</span>
                        </p>

                        {/* <!-- Assign Button --> */}
                        <button className="mt-5 w-full bg-blue-900 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition">
                          Assign Organization
                        </button>

                      </div>
                      <div className="bg-white w-80 p-5 rounded-2xl shadow-lg border hover:shadow-2xl transition gap-5 px-5">

                        {/* <!-- Organization Header --> */}
                        <div className="flex items-center gap-3">
                          <div className="bg-gray-100 border border-red-500 text-white w-12 h-12 flex justify-center items-center rounded-full text-xl font-bold">
                            <ImCross className="text-red-500" />
                          </div>
                          <div>
                            <h2 className="text-lg font-bold text-gray-900">RedCross Kerala</h2>
                            <p className="text-sm text-gray-500">Disaster Relief Team</p>
                          </div>
                        </div>

                        {/* <!-- Divider --> */}
                        <hr className="my-4" />

                        {/* <!-- Description --> */}
                        <p className="text-sm text-gray-700 leading-relaxed">
                          A certified emergency response organization with trained volunteers specialized
                          in flood rescue, medical aid, and debris clearing.
                        </p>

                        {/* <!-- Resources Section --> */}
                        <h3 className="mt-4 text-sm font-bold text-gray-800">Available Resources</h3>
                        <div className="mt-2 flex flex-wrap gap-2">
                          <span className="bg-blue-100 text-blue-900 text-xs font-semibold px-3 py-1 rounded-full flex gap-2"> <FaPeopleCarry className="text-lg" /> 10 Volunteers</span>
                          <span className="bg-yellow-100 text-yellow-700 text-xs font-semibold px-3 py-1 rounded-full flex gap-2"> <FaAmbulance className="text-lg" /> 2 Ambulances</span>
                          <span className="bg-red-100 text-red-500 text-xs font-semibold px-3 py-1 rounded-full flex gap-2"> <GiFirstAidKit className="text-lg" /> 2 Rescue Kit</span>
                          <span className="bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full flex gap-2"> <FaBowlFood className="text-lg" /> Food Supply</span>
                        </div>

                        {/* <!-- Available Status --> */}
                        <p className="mt-4 text-sm">
                          Status:
                          <span className="font-semibold text-green-600">Available</span>
                        </p>

                        {/* <!-- Assign Button --> */}
                        <button className="mt-5 w-full bg-blue-900 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition">
                          Assign Organization
                        </button>

                      </div>
                      <div className="bg-white w-80 p-5 rounded-2xl shadow-lg border hover:shadow-2xl transition gap-5 px-5">

                        {/* <!-- Organization Header --> */}
                        <div className="flex items-center gap-3">
                          <div className="bg-gray-100 border border-red-500 text-white w-12 h-12 flex justify-center items-center rounded-full text-xl font-bold">
                            <ImCross className="text-red-500" />
                          </div>
                          <div>
                            <h2 className="text-lg font-bold text-gray-900">RedCross Kerala</h2>
                            <p className="text-sm text-gray-500">Disaster Relief Team</p>
                          </div>
                        </div>

                        {/* <!-- Divider --> */}
                        <hr className="my-4" />

                        {/* <!-- Description --> */}
                        <p className="text-sm text-gray-700 leading-relaxed">
                          A certified emergency response organization with trained volunteers specialized
                          in flood rescue, medical aid, and debris clearing.
                        </p>

                        {/* <!-- Resources Section --> */}
                        <h3 className="mt-4 text-sm font-bold text-gray-800">Available Resources</h3>
                        <div className="mt-2 flex flex-wrap gap-2">
                          <span className="bg-blue-100 text-blue-900 text-xs font-semibold px-3 py-1 rounded-full flex gap-2"> <FaPeopleCarry className="text-lg" /> 10 Volunteers</span>
                          <span className="bg-yellow-100 text-yellow-700 text-xs font-semibold px-3 py-1 rounded-full flex gap-2"> <FaAmbulance className="text-lg" /> 2 Ambulances</span>
                          <span className="bg-red-100 text-red-500 text-xs font-semibold px-3 py-1 rounded-full flex gap-2"> <GiFirstAidKit className="text-lg" /> 2 Rescue Kit</span>
                          <span className="bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full flex gap-2"> <FaBowlFood className="text-lg" /> Food Supply</span>
                        </div>

                        {/* <!-- Available Status --> */}
                        <p className="mt-4 text-sm">
                          Status:
                          <span className="font-semibold text-green-600">Available</span>
                        </p>

                        {/* <!-- Assign Button --> */}
                        <button className="mt-5 w-full bg-blue-900 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition">
                          Assign Organization
                        </button>

                      </div>
                      <div className="bg-white w-80 p-5 rounded-2xl shadow-lg border hover:shadow-2xl transition gap-5 px-5">

                        {/* <!-- Organization Header --> */}
                        <div className="flex items-center gap-3">
                          <div className="bg-gray-100 border border-red-500 text-white w-12 h-12 flex justify-center items-center rounded-full text-xl font-bold">
                            <ImCross className="text-red-500" />
                          </div>
                          <div>
                            <h2 className="text-lg font-bold text-gray-900">RedCross Kerala</h2>
                            <p className="text-sm text-gray-500">Disaster Relief Team</p>
                          </div>
                        </div>

                        {/* <!-- Divider --> */}
                        <hr className="my-4" />

                        {/* <!-- Description --> */}
                        <p className="text-sm text-gray-700 leading-relaxed">
                          A certified emergency response organization with trained volunteers specialized
                          in flood rescue, medical aid, and debris clearing.
                        </p>

                        {/* <!-- Resources Section --> */}
                        <h3 className="mt-4 text-sm font-bold text-gray-800">Available Resources</h3>
                        <div className="mt-2 flex flex-wrap gap-2">
                          <span className="bg-blue-100 text-blue-900 text-xs font-semibold px-3 py-1 rounded-full flex gap-2"> <FaPeopleCarry className="text-lg" /> 10 Volunteers</span>
                          <span className="bg-yellow-100 text-yellow-700 text-xs font-semibold px-3 py-1 rounded-full flex gap-2"> <FaAmbulance className="text-lg" /> 2 Ambulances</span>
                          <span className="bg-red-100 text-red-500 text-xs font-semibold px-3 py-1 rounded-full flex gap-2"> <GiFirstAidKit className="text-lg" /> 2 Rescue Kit</span>
                          <span className="bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full flex gap-2"> <FaBowlFood className="text-lg" /> Food Supply</span>
                        </div>

                        {/* <!-- Available Status --> */}
                        <p className="mt-4 text-sm">
                          Status:
                          <span className="font-semibold text-green-600">Available</span>
                        </p>

                        {/* <!-- Assign Button --> */}
                        <button className="mt-5 w-full bg-blue-900 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition">
                          Assign Organization
                        </button>

                      </div>






                      {/*  */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          }

        </div>


        

      </div >
    </>
  );
}

export default ApprovedReports;
