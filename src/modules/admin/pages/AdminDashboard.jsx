import React from "react";
import { BiSolidReport } from "react-icons/bi";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import { GoOrganization } from "react-icons/go";
import { FaUsers, FaFireAlt, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import AdminSidebar from "../components/AdminSideBar";
function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* LEFT SIDEBAR */}
      <AdminSidebar/>

      {/* RIGHT CONTENT AREA */}
      <div className="flex-1 md:ml-64 p-4 md:p-8">
        {/* PAGE TITLE */}
        <div className="flex justify-between">
          <h1 className="text-3xl font-bold text-blue-900 mb-6">
            Admin Dashboard
          </h1>
  
          {/* <div>
            <button className="p-2 bg-red-500 rounded-lg text-white border">Logout</button>
          </div> */}
        </div>

        {/* TOP STATS ROW */}
        <div className="flex gap-3 mb-8">
          {/* Total Reports */}
          <div className="flex-1 bg-white shadow p-5 rounded-xl border">
            <div className="flex items-center gap-2">
              <BiSolidReport className="text-blue-800 text-xl" />
              <h1 className="font-semibold text-gray-700">Total Reports</h1>
            </div>
            <h1 className="text-3xl font-bold text-blue-900 mt-2">25</h1>
          </div>

          {/* Pending Reports */}
          <div className="flex-1 bg-white shadow p-5 rounded-xl border">
            <div className="flex items-center gap-2">
              <MdOutlineAccessTimeFilled className="text-yellow-500 text-xl" />
              <h1 className="font-semibold text-gray-700">Pending Reports</h1>
            </div>
            <h1 className="text-3xl font-bold text-yellow-600 mt-2">5</h1>
          </div>

          {/* Organizations */}
          <div className="flex-1 bg-white shadow p-5 rounded-xl border">
            <div className="flex items-center gap-2">
              <GoOrganization className="text-green-700 text-xl" />
              <h1 className="font-semibold text-gray-700">Organizations</h1>
            </div>
            <h1 className="text-3xl font-bold text-green-700 mt-2">10</h1>
          </div>

          {/* Users */}
          <div className="flex-1 bg-white shadow p-5 rounded-xl border">
            <div className="flex items-center gap-2">
              <FaUsers className="text-red-600 text-xl" />
              <h1 className="font-semibold text-gray-700">Users</h1>
            </div>
            <h1 className="text-3xl font-bold text-red-600 mt-2">50</h1>
          </div>
        </div>

        {/* AI-GENERATED INCIDENT REPORT */}
        <div className="bg-white shadow-lg rounded-xl p-8 border">
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

          {/* ACTION BUTTONS */}
          <div className="flex gap-4 mt-8">
            <button className="bg-blue-900 border text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-white hover:text-blue-900 hover:border-blue-900 transition">
              Approve 
            </button>
            <button className="bg-red-500 border text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-500 hover:border-red-500 transition">
              Reject
            </button>
          </div>
        </div>

        {/* END */}
      </div>
    </div>
  );
}

export default AdminDashboard;
