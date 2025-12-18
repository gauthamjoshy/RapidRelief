import React, { useState } from 'react'
import AdminSidebar from '../components/AdminSideBar'
import { FaFireAlt, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa'
import { MdOutlineReportProblem } from 'react-icons/md'

function AllReports() {

    // states for switching report card status
    const [reportAVisibility, setReportAVisibility] = useState(true)
    const [reportBVisibility, setReportBVisibility] = useState(false)
    const [reportCVisibility, setReportCVisibility] = useState(false)

    return (
        <>
            <div className="grid md:grid-cols-[1fr_4fr] bg-gray-100 min-h-screen ">

                <div>
                    <AdminSidebar />
                </div>

                {/* right div */}
                <div className="">
                    <div className='p-6'>
                        <h1 className="text-3xl font-bold text-blue-900 mb-6">
                            All Reports
                        </h1>

                    </div>


                    {/* buttons of divs */}
                    <div className="flex justify-center items-center cursor-pointer">

                        {/* Under Review */}
                        <div onClick={() => { setReportAVisibility(true); setReportBVisibility(false); setReportCVisibility(false) }} className={reportAVisibility ? "border-2 border-blue-950 rounded-t px-3 py-2 font-semibold bg-orange-600 text-white" : "border-2 border-blue-950 rounded-t px-3 py-2 font-semibold bg-orange-100 hover:bg-orange-400"}>
                            All Reports
                        </div>

                        {/* All Reports */}
                        <div onClick={() => { setReportAVisibility(false); setReportBVisibility(true); setReportCVisibility(false) }} className={reportBVisibility ? "border-2 border-blue-950 rounded-t px-3 py-2 font-semibold bg-orange-600 text-white" : "border-2 border-blue-950 rounded-t px-3 py-2 font-semibold bg-orange-100 hover:bg-orange-400"}>
                            Rejected Reports
                        </div>

                        {/* Reports rejected by organization*/}
                        <div onClick={() => { setReportAVisibility(false); setReportBVisibility(false); setReportCVisibility(true) }} className={reportCVisibility ? "border-2 border-blue-950 rounded-t px-3 py-2 font-semibold bg-orange-600 text-white" : "border-2 border-blue-950 rounded-t px-3 py-2 font-semibold bg-orange-100 hover:bg-orange-400"}>
                            Volunteer Rejected Reports
                        </div>

                    </div>

                    {/* content */}
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


                                </div>

                            </div>
                        }
                        {reportBVisibility &&
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 bg-gray-100 md:my-20 pe-10">

                                {/* CARD 1 */}
                                <div className="bg-white shadow-lg rounded-xl p-5 border">
                                    <div className="flex justify-between">
                                        <h3 className="text-lg font-bold text-gray-800">
                                            Landslide – Road Blocked
                                        </h3>

                                        <div>
                                            <span className="bg-red-200 p-1 rounded ">Rejected</span>
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

                                    <div className='mt-4 text-red-600'>
                                        <p>Reason for rejection:</p>
                                    </div>

                                    <div className="mt-4 bg-red-100 p-3 rounded-lg border">
                                        <p className="text-gray-800 text-sm leading-relaxed">
                                            Not genuine
                                        </p>
                                    </div>
                                </div>

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

                                    <div className="flex gap-3 mt-4">
                                        <button onClick={() => setModal(!modal)} className="bg-blue-900 text-white px-3 py-2 rounded-md text-sm font-semibold hover:bg-blue-700">
                                            Assign Volunteer
                                        </button>
                                        <button className="bg-red-500 text-white px-3 py-2 rounded-md text-sm font-semibold hover:bg-red-600">
                                            Reject
                                        </button>
                                    </div>
                                </div>

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

                                    <div className="flex gap-3 mt-4">
                                        <button onClick={() => setModal(!modal)} className="bg-blue-900 text-white px-3 py-2 rounded-md text-sm font-semibold hover:bg-blue-700">
                                            Assign Volunteer
                                        </button>
                                        <button className="bg-red-500 text-white px-3 py-2 rounded-md text-sm font-semibold hover:bg-red-600">
                                            Reject
                                        </button>
                                    </div>
                                </div>

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

                                    <div className="flex gap-3 mt-4">
                                        <button onClick={() => setModal(!modal)} className="bg-blue-900 text-white px-3 py-2 rounded-md text-sm font-semibold hover:bg-blue-700">
                                            Assign Volunteer
                                        </button>
                                        <button className="bg-red-500 text-white px-3 py-2 rounded-md text-sm font-semibold hover:bg-red-600">
                                            Reject
                                        </button>
                                    </div>
                                </div>

                            </div>
                        }
                        {reportCVisibility &&
                            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 bg-gray-100 md:my-20 pe-10'>
                                <div className="bg-white shadow-lg rounded-xl p-5 border">
                                    <div className="flex justify-between">
                                        <h3 className="text-lg font-bold text-gray-800">
                                            Landslide – Road Blocked
                                        </h3>
    
                                        <div>
                                            <span className="bg-red-200 p-1 rounded ">Rejected</span>
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

                                    <div className='mt-4 text-black'>
                                        <p>Assigned Organization : <span className='text-blue-700 font-bold bg-blue-100 px-2 py-1 rounded-xl'>NDRF Team 7</span></p>
                                    </div>
    
                                    <div className='mt-4 text-red-600'>
                                        <p>Reason for rejection:</p>
                                    </div>
    
                                    <div className="mt-4 bg-red-100 p-3 rounded-lg border">
                                        <p className="text-gray-800 text-sm leading-relaxed">
                                            We are unavailable at the moment, apologies!
                                        </p>
                                    </div>
                                </div>
                            </div>

                        }
                    </div>


                </div>
            </div>

        </>
    )
}

export default AllReports