import React, { useEffect, useState } from 'react'
import OrgNavbar from '../components/OrgNavbar'
import Footer from '../../common/components/Footer'
import OrgSidebar from '../components/OrgSidebar'
import { BiSolidReport } from 'react-icons/bi'
import { MdOutlineAccessTimeFilled, MdOutlinePendingActions } from 'react-icons/md'
import { TiMessages } from 'react-icons/ti'
import { FaFireAlt, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa'
import { IoMdCloseCircle } from 'react-icons/io'
import { RxCrossCircled } from 'react-icons/rx'

function OrgDashboard() {

  // state for opening report issue modal
  const [openModal, setOpenModal] = useState(false)
  const[existingOrganization, setExistingOrganization] = useState("")
  
  
  
  
    useEffect(()=>{
      const name = JSON.parse(sessionStorage.getItem("existingOrganization"))
      console.log(name);
      setExistingOrganization(name)
      
    },[])
  

  return (
    <>
      <OrgNavbar />

      {/* main */}
      <div className='grid md:grid-cols-[1fr_4fr] bg-gray-100'>

        {/* side bar */}
        <div>
          <OrgSidebar />
        </div>

        {/* right div */}
        <div className='md:mb-10'>
          {/* heading */}
          <div className='md:my-10'>
            <h1 className="text-3xl font-bold text-blue-900">Welcome <span className='font-extrabold text-red-500'>{existingOrganization?.username}</span> </h1>

          </div>
          {/* TOP STATS ROW */}
          <div className="flex md:gap-10 gap mb-8 md:pe-15 md:w-full  ">
            {/* Total Reports */}
            <div className="flex-1 bg-white shadow md:p-5 p-3 rounded-xl border">
              <div className="flex items-center md:gap-2">
                <BiSolidReport className="text-blue-800 text-xl" />
                <h1 className="font-semibold text-gray-700">Assigned Tasks</h1>
              </div>
              <h1 className="text-3xl font-bold text-blue-900 mt-2">2</h1>
            </div>

            {/* Pending Reports */}
            <div className="flex-1 bg-white shadow md:p-5 p-3 rounded-xl border">
              <div className="flex items-center md:gap-2">
                <MdOutlinePendingActions className="text-orange-500 text-xl" />
                <h1 className="font-semibold text-gray-700">Pending</h1>
              </div>
              <h1 className="text-3xl font-bold text-orange-600 mt-2">1</h1>
            </div>

            {/* Pending Reports */}
            <div className="flex-1 bg-white shadow md:p-5 p-3 rounded-xl border">
              <div className="flex items-center md:gap-2">
                <MdOutlineAccessTimeFilled className="text-yellow-500 text-xl" />
                <h1 className="font-semibold text-gray-700">In Progress</h1>
              </div>
              <h1 className="text-3xl font-bold text-yellow-600 mt-2">1</h1>
            </div>

            {/* Rejected Reports */}
            <div className="flex-1 bg-white shadow md:p-5 p-3 rounded-xl border">
              <div className="flex items-center md:gap-2">
                <RxCrossCircled className="text-red-500 text-xl" />
                <h1 className="font-semibold text-gray-700">Rejected Reports</h1>
              </div>
              <h1 className="text-3xl font-bold text-red-600 mt-2">1</h1>
            </div>

            {/* Organizations */}
            <div className="flex-1 bg-white shadow md:p-5 p-3 rounded-xl border">
              <div className="flex items-center md:gap-2">
                <TiMessages className="text-green-700 text-xl" />
                <h1 className="font-semibold text-gray-700">Message from Admin</h1>
              </div>
              <h1 className="text-3xl font-bold text-green-700 mt-2">1</h1>
            </div>


          </div>

          {/* heading */}
          <h1 className="text-3xl font-bold text-orange-700 mb-6">
            Pending Reports
          </h1>

          {/* report card */}
          <div className="bg-white shadow-lg rounded-xl p-8 border me-10">
            {/* Header */}
            <div className="flex justify-between items-start">
              <h1 className="text-2xl font-bold text-blue-900">
                AI-Generated Incident Report
              </h1>
              <span className="bg-red-100 text-red-600 px-4 py-2 rounded-lg text-sm font-semibold">
                Pending 
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

            {/* ACTION BUTTONS */}
            <div className="flex gap-4 mt-8">
              <button className="bg-blue-900 border text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-white hover:text-blue-900 hover:border-blue-900 transition">
                Accept
              </button>
              <button onClick={()=>setOpenModal(true)} className="bg-red-500 border text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-500 hover:border-red-500 transition">
                Reject
              </button>
            </div>
          </div>



          {/* modal */}
          {openModal &&
            <div className='relative z-10 overflow-y-auto'>
              <div className='bg-gray-200/75 fixed inset-0'>
                <div className='flex justify-center items-center min-h-screen'>
                  <div id='animationModal' className="bg-white p-6 rounded-2xl shadow-xl w-full max-w-lg border">

                    {/* Header */}
                    <div className="flex justify-between items-center mb-4">
                      <h1 className="text-xl font-bold text-blue-900">Reason for Rejection</h1>

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
                      placeholder="Enter your reply to the admin here                                                                 (eg : Apologies for the inconvenience, but we are unable to process your request)"
                      className="w-full mt-2 p-3 bg-gray-100 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition resize-none"
                    ></textarea>

                    {/* Action Buttons */}
                    <div className="flex justify-end mt-5">
                      <button className="px-5 py-2 bg-blue-900 text-white rounded-xl hover:bg-blue-700 transition">
                        Submit
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

export default OrgDashboard