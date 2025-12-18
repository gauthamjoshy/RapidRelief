import React, { useState } from 'react'
import { MdDashboard, MdOutlineReportGmailerrorred } from 'react-icons/md'
import { FaMessage } from 'react-icons/fa6'
import { GrStatusInfo } from 'react-icons/gr'
import { Link } from 'react-router-dom'
import { CgProfile } from 'react-icons/cg'

function OrgSidebar() {
  const [open, setOpen] = useState(false)
  return (
    <>
      {/* MOBILE TOP BAR */}
      <div className="w-screen md:hidden flex items-center justify-between bg-linear-to-br from-blue-900 via-blue-700 to-blue-400 text-white px-4 py-3">
        <div className="flex items-center gap-2 font-bold text-lg">
          <div className="bg-white text-blue-900 rounded-full w-8 h-8 flex items-center justify-center font-black">
            R
          </div>
          RapidRelief Volunteer
        </div>

        <button onClick={() => setOpen(!open)} className="text-3xl">
          ☰
        </button>
      </div>

      {/* SIDEBAR */}
      <div
        className={`bg-blue-900 text-white w-64 md:h-full h-0 p-6 shadow-xl z-50 transform transition-transform duration-300 ${open ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 `}>
        <h1 className="text-2xl font-bold mb-10 hidden md:block">
          Volunteer Pannel
        </h1>

        {/* NAVIGATION */}
        <nav className="flex flex-col gap-3">
          <Link to={"/org-dashboard"} className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-blue-800">
            <span className="text-3xl"><MdDashboard /></span>
            <span className="text-lg">Dashboard</span>
          </Link>

          <Link to={"/org-reports"} className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-blue-800">
            <span className="text-3xl"><MdOutlineReportGmailerrorred /></span>
            <span className="text-lg">View Report Status</span>
          </Link>

          <Link to={"/org-recieved-messages"} className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-blue-800 text-yellow-600">
            <span id='upDown' className="text-3xl"><FaMessage /></span>
            <span className="text-lg">Messages</span>
          </Link>

          <Link to={"/org-profile"} className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-blue-800">
            <span className="text-3xl"><CgProfile /></span>
            <span className="text-lg">Manage Your Profile</span>
          </Link>

          <div className='flex justify-start items-center md:ms-4'>
            <button className="py-2 px-3 font-medium bg-red-500 rounded-lg text-white border-black cursor-pointer hover:bg-white hover:text-red-500 hover:border-red-500 transition">Logout</button>
          </div>


        </nav>
      </div>

      {/* MOBILE OVERLAY */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 md:hidden"
        />
      )}
    </>
  )
}

export default OrgSidebar