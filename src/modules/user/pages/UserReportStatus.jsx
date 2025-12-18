import React, { useState } from 'react'
import UserSideBar from '../components/UserSideBar'
import UserNavbar from '../components/UserNavbar'
import Footer from '../../common/components/Footer'
import { FaFireAlt, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa'
import { MdOutlineReportProblem } from 'react-icons/md'
import { IoMdCloseCircle } from 'react-icons/io'


function UserReportStatus() {

  // states for switching report card status
  const [reportAVisibility, setReportAVisibility] = useState(true)
  const [reportBVisibility, setReportBVisibility] = useState(false)

  // state for opening report issue modal
  const [openModal, setOpenModal] = useState(false)
  return (
    <>
      <UserNavbar />
      <div className='grid md:grid-cols-[1fr_4fr] bg-gray-100'>
        {/* sidebar */}
        <div>
          <UserSideBar />
        </div>

        {/* right div */}
        <div>
          <div className='my-10'>
            <h1 className="text-3xl font-bold text-blue-900">View Report Status</h1>

          </div>

          {/* buttons of divs */}
          <div className="flex justify-center items-center cursor-pointer">

            {/* Under Review */}
            <div onClick={() => { setReportAVisibility(true); setReportBVisibility(false); }} className={reportAVisibility ? "border-2 border-blue-950 rounded-t px-3 py-2 font-semibold bg-orange-600 text-white" : "border-b-2 border-blue-950 rounded-t px-3 py-2 font-semibold bg-orange-300 hover:bg-orange-400"}>
              Under Review
            </div>

            {/* All Reports */}
            <div onClick={() => { setReportAVisibility(false); setReportBVisibility(true); }} className={reportBVisibility ? "border-2 border-blue-950 rounded-t px-3 py-2 font-semibold bg-orange-600 text-white" : "border-b-2 border-blue-950 rounded-t px-3 py-2 font-semibold bg-orange-300 hover:bg-orange-400"}>
              All Reports
            </div>

          </div>


          {/* divs */}
          <div>
            {reportAVisibility &&
              <div>
                {/* report card */}
                <div className="bg-white shadow-lg rounded-xl border p-15 md:mx-10 my-20">
                  {/* Header */}
                  <div className="flex justify-between items-start">
                    <h1 className="text-2xl font-bold text-blue-900">
                      AI-Generated Incident Report
                    </h1>
                    <span className="bg-red-100 text-red-600 px-4 py-2 rounded-lg text-sm font-semibold">
                      Pending Review
                    </span>
                  </div>

                  {/* Incident Overview */}
                  <div className="mt-6">
                    <h2 className="text-lg font-semibold text-gray-700">
                      Incident Overview
                    </h2>
                    <p className="text-gray-600 mt-2">
                      Major landslide at Kannur near old bridge. Road completely blocked.
                    </p>
                  </div>

                  {/* Severity */}
                  <div className="mt-6">
                    <h2 className="text-lg font-semibold text-gray-700">
                      AI-Generated Severity
                    </h2>
                    <div className="mt-3 flex items-center gap-3">
                      <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-lg font-bold text-sm flex items-center gap-1">
                        <FaFireAlt /> SEVERE
                      </span>
                      <span className="text-green-600 font-semibold">92% (High)</span>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="mt-6">
                    <h2 className="text-lg font-semibold text-gray-700">
                      Location & Timestamp
                    </h2>

                    <div className="mt-3 flex flex-col gap-2 text-gray-700">
                      <div className="flex items-center gap-2">
                        <FaMapMarkerAlt className="text-blue-700" />
                        Kannur, Kerala, India
                      </div>

                      <div className="text-gray-600 text-sm">GPS: 11.8745° N, 75.3700° E</div>

                      <div className="text-gray-600 text-sm">2024-07-26, 14:30 IST</div>

                      <div className="flex items-center gap-2">
                        <FaPhoneAlt className="text-green-700" />
                        +91 98765 43210
                      </div>
                    </div>
                  </div>

                  {/* IMAGES ROW */}
                  <div className="mt-6">
                    <h2 className="text-lg font-semibold text-gray-700 mb-3">Images</h2>
                    <div className="flex gap-4 overflow-x-auto">
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvR4KoAeHHb-WGz75Z2yuMIpjeCqAUbJU7MA&s"
                        className="w-40 h-28 rounded-lg object-cover shadow"
                      />
                      <img
                        src="https://disasterphilanthropy.org/wp-content/uploads/2023/07/2023_07-NY-state-flooding-Canandaigua-Fire-twitter.jpeg"
                        className="w-40 h-28 rounded-lg object-cover shadow"
                      />
                      <img
                        src="https://img.autocarindia.com/ExtraImages/20231101061459_Accident%20image%201.jpg"
                        className="w-40 h-28 rounded-lg object-cover shadow"
                      />
                    </div>
                  </div>

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

                  {/* KEYWORDS */}
                  <div className="mt-6">
                    <h2 className="text-lg font-semibold text-gray-700">
                      AI-Extracted Keywords
                    </h2>
                    <div className="flex gap-2 mt-2 flex-wrap">
                      {["Landslide", "Power Lines Down", "Car Trapped", "Urgent", "Road Blocked"].map((kw) => (
                        <span
                          key={kw}
                          className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                        >
                          {kw}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* AI ANALYSIS */}
                  <div className="mt-6">
                    <h2 className="text-lg font-semibold text-gray-700">
                      AI Analysis & Recommendations
                    </h2>
                    <p className="text-gray-600 mt-2">
                      The AI system classifies this incident as *high severity*. Immediate intervention
                      is recommended. Dispatch emergency response teams, clear road obstacles, and notify
                      local authorities.
                    </p>
                  </div>


                </div>

              </div>
            }
            {reportBVisibility &&
              <div>
                {/* all report card */}
                <div className="bg-white shadow-lg rounded-xl border p-15 md:mx-10 my-20">
                  {/* Header */}
                  <div className="flex justify-between items-start">
                    <h1 className="text-2xl font-bold text-blue-900">
                      AI-Generated Incident Report
                    </h1>
                    <span className="bg-green-100 text-green-600 px-4 py-2 rounded-lg text-sm font-semibold">
                      Approved
                    </span>
                  </div>

                  {/* Incident Overview */}
                  <div className="mt-6">
                    <h2 className="text-lg font-semibold text-gray-700">
                      Incident Overview
                    </h2>
                    <p className="text-gray-600 mt-2">
                      Major landslide at Kannur near old bridge. Road completely blocked.
                    </p>
                  </div>

                  {/* Severity */}
                  <div className="mt-6">
                    <h2 className="text-lg font-semibold text-gray-700">
                      AI-Generated Severity
                    </h2>
                    <div className="mt-3 flex items-center gap-3">
                      <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-lg font-bold text-sm flex items-center gap-1">
                        <FaFireAlt /> SEVERE
                      </span>
                      <span className="text-green-600 font-semibold">92% (High)</span>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="mt-6">
                    <h2 className="text-lg font-semibold text-gray-700">
                      Location & Timestamp
                    </h2>

                    <div className="mt-3 flex flex-col gap-2 text-gray-700">
                      <div className="flex items-center gap-2">
                        <FaMapMarkerAlt className="text-blue-700" />
                        Kannur, Kerala, India
                      </div>

                      <div className="text-gray-600 text-sm">GPS: 11.8745° N, 75.3700° E</div>

                      <div className="text-gray-600 text-sm">2024-07-26, 14:30 IST</div>

                      <div className="flex items-center gap-2">
                        <FaPhoneAlt className="text-green-700" />
                        +91 98765 43210
                      </div>
                    </div>
                  </div>

                  {/* IMAGES ROW */}
                  <div className="mt-6">
                    <h2 className="text-lg font-semibold text-gray-700 mb-3">Images</h2>
                    <div className="flex gap-4 overflow-x-auto">
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvR4KoAeHHb-WGz75Z2yuMIpjeCqAUbJU7MA&s"
                        className="w-40 h-28 rounded-lg object-cover shadow"
                      />
                      <img
                        src="https://disasterphilanthropy.org/wp-content/uploads/2023/07/2023_07-NY-state-flooding-Canandaigua-Fire-twitter.jpeg"
                        className="w-40 h-28 rounded-lg object-cover shadow"
                      />
                      <img
                        src="https://img.autocarindia.com/ExtraImages/20231101061459_Accident%20image%201.jpg"
                        className="w-40 h-28 rounded-lg object-cover shadow"
                      />
                    </div>
                  </div>

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

                  {/* KEYWORDS */}
                  <div className="mt-6">
                    <h2 className="text-lg font-semibold text-gray-700">
                      AI-Extracted Keywords
                    </h2>
                    <div className="flex gap-2 mt-2 flex-wrap">
                      {["Landslide", "Power Lines Down", "Car Trapped", "Urgent", "Road Blocked"].map((kw) => (
                        <span
                          key={kw}
                          className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                        >
                          {kw}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* AI ANALYSIS */}
                  <div className="mt-6">
                    <h2 className="text-lg font-semibold text-gray-700">
                      AI Analysis & Recommendations
                    </h2>
                    <p className="text-gray-600 mt-2">
                      The AI system classifies this incident as *high severity*. Immediate intervention
                      is recommended. Dispatch emergency response teams, clear road obstacles, and notify
                      local authorities.
                    </p>
                  </div>

                  {/* assigned organization */}
                  <div className='my-5 bg-green-100 rounded-2xl p-2 text-lg text-green-800 font-medium md:max-w-fit'>
                    <h2>Assigned Organization for Help : <span className='text-blue-900 font-bold'>NDRF Team 7</span></h2>
                  </div>

                  {/* report */}
                  <div>
                    <button onClick={()=>setOpenModal(true)} className='flex items-center gap-2 bg-orange-300 p-2 rounded font-medium shadow hover:bg-orange-600 hover:text-white cursor-pointer transition'> <MdOutlineReportProblem /> Report an Issue</button>
                  </div>


                </div>

                <div className="bg-white shadow-lg rounded-xl border p-15 md:mx-10 my-20">
                  {/* Header */}
                  <div className="flex justify-between items-start">
                    <h1 className="text-2xl font-bold text-blue-900">
                      AI-Generated Incident Report
                    </h1>
                    <span className="bg-green-100 text-green-600 px-4 py-2 rounded-lg text-sm font-semibold">
                      Approved
                    </span>
                  </div>

                  {/* Incident Overview */}
                  <div className="mt-6">
                    <h2 className="text-lg font-semibold text-gray-700">
                      Incident Overview
                    </h2>
                    <p className="text-gray-600 mt-2">
                      Major landslide at Kannur near old bridge. Road completely blocked.
                    </p>
                  </div>

                  {/* Severity */}
                  <div className="mt-6">
                    <h2 className="text-lg font-semibold text-gray-700">
                      AI-Generated Severity
                    </h2>
                    <div className="mt-3 flex items-center gap-3">
                      <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-lg font-bold text-sm flex items-center gap-1">
                        <FaFireAlt /> SEVERE
                      </span>
                      <span className="text-green-600 font-semibold">92% (High)</span>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="mt-6">
                    <h2 className="text-lg font-semibold text-gray-700">
                      Location & Timestamp
                    </h2>

                    <div className="mt-3 flex flex-col gap-2 text-gray-700">
                      <div className="flex items-center gap-2">
                        <FaMapMarkerAlt className="text-blue-700" />
                        Kannur, Kerala, India
                      </div>

                      <div className="text-gray-600 text-sm">GPS: 11.8745° N, 75.3700° E</div>

                      <div className="text-gray-600 text-sm">2024-07-26, 14:30 IST</div>

                      <div className="flex items-center gap-2">
                        <FaPhoneAlt className="text-green-700" />
                        +91 98765 43210
                      </div>
                    </div>
                  </div>

                  {/* IMAGES ROW */}
                  <div className="mt-6">
                    <h2 className="text-lg font-semibold text-gray-700 mb-3">Images</h2>
                    <div className="flex gap-4 overflow-x-auto">
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvR4KoAeHHb-WGz75Z2yuMIpjeCqAUbJU7MA&s"
                        className="w-40 h-28 rounded-lg object-cover shadow"
                      />
                      <img
                        src="https://disasterphilanthropy.org/wp-content/uploads/2023/07/2023_07-NY-state-flooding-Canandaigua-Fire-twitter.jpeg"
                        className="w-40 h-28 rounded-lg object-cover shadow"
                      />
                      <img
                        src="https://img.autocarindia.com/ExtraImages/20231101061459_Accident%20image%201.jpg"
                        className="w-40 h-28 rounded-lg object-cover shadow"
                      />
                    </div>
                  </div>

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

                  {/* KEYWORDS */}
                  <div className="mt-6">
                    <h2 className="text-lg font-semibold text-gray-700">
                      AI-Extracted Keywords
                    </h2>
                    <div className="flex gap-2 mt-2 flex-wrap">
                      {["Landslide", "Power Lines Down", "Car Trapped", "Urgent", "Road Blocked"].map((kw) => (
                        <span
                          key={kw}
                          className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                        >
                          {kw}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* AI ANALYSIS */}
                  <div className="mt-6">
                    <h2 className="text-lg font-semibold text-gray-700">
                      AI Analysis & Recommendations
                    </h2>
                    <p className="text-gray-600 mt-2">
                      The AI system classifies this incident as *high severity*. Immediate intervention
                      is recommended. Dispatch emergency response teams, clear road obstacles, and notify
                      local authorities.
                    </p>
                  </div>

                  {/* assigned organization */}
                  <div className='my-5 bg-green-100 rounded-2xl p-2 text-lg text-green-800 font-medium md:max-w-fit'>
                    <h2>Assigned Organization for Help : <span className='text-blue-900 font-bold'>NDRF Team 7</span></h2>
                  </div>

                  {/* report */}
                  <div>
                    <button className='flex items-center gap-2 bg-orange-300 p-2 rounded font-medium shadow hover:bg-orange-600 hover:text-white cursor-pointer transition'> <MdOutlineReportProblem /> Report an Issue</button>
                  </div>


                </div>
              </div>
            }
          </div>


          {/* modal */}
          {openModal&&
            <div className='relative z-10 overflow-y-auto'>
            <div className='bg-gray-200/75 fixed inset-0'>
              <div className='flex justify-center items-center min-h-screen'>
                <div id='animationModal' className="bg-white p-6 rounded-2xl shadow-xl w-full max-w-lg border">

                  {/* Header */}
                  <div className="flex justify-between items-center mb-4">
                    <h1 className="text-xl font-bold text-blue-900">Report an Issue</h1>

                    <IoMdCloseCircle onClick={() => setOpenModal(!openModal)}
                      className="text-red-600 text-3xl cursor-pointer hover:scale-110 transition"
                    />
                  </div>

                  {/* Divider */}
                  <div className="h-0.5 bg-gray-200 mb-5"></div>

                  {/* Input Box */}
                  <label className="text-gray-700 font-semibold text-sm">
                    Enter your message
                  </label>
                  <textarea
                    rows="4"
                    placeholder="Enter your reply to the admin here                                                                 (eg : The team has reached our area, but the provided support is not enough)"
                    className="w-full mt-2 p-3 bg-gray-100 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition resize-none"
                  ></textarea>

                  {/* Action Buttons */}
                  <div className="flex justify-end mt-5">
                    <button className="px-5 py-2 bg-blue-900 text-white rounded-xl hover:bg-blue-700 transition">
                      Report
                    </button>
                  </div>

                </div>

              </div>

            </div>

          </div>
          }


        </div>

      </div>


      <Footer />


    </>
  )
}

export default UserReportStatus