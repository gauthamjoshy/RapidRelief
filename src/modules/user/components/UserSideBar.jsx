import React, { useState } from 'react'
import { MdDashboard, MdOutlineReportGmailerrorred } from 'react-icons/md'
import { FaCircleCheck, FaUsers } from 'react-icons/fa6'
import { GrOrganization, GrStatusInfo } from 'react-icons/gr'
import { Link } from 'react-router-dom'

function UserSideBar() {
    const [open, setOpen] = useState(false)
  return (
    <>
          {/* MOBILE TOP BAR */}
          <div className="md:hidden flex items-center justify-between bg-blue-900 text-white px-4 py-3">
            <div className="flex items-center gap-2 font-bold text-lg">
              <div className="bg-white text-blue-900 rounded-full w-8 h-8 flex items-center justify-center font-black">
                R
              </div>
              RapidRelief User
            </div>
    
            <button onClick={() => setOpen(!open)} className="text-3xl">
              ☰
            </button>
          </div>
    
          {/* SIDEBAR */}
          <div
            className={`bg-blue-900 text-white w-64 mt-30 h-auto fixed top-0 left-0 p-6 shadow-xl z-50 transform transition-transform duration-300 ${open ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 `}>
            <h1 className="text-2xl font-bold mb-10 hidden md:block">
              User Pannel
            </h1>
    
            {/* NAVIGATION */}
            <nav className="flex flex-col gap-1">
              <Link to={"/user-dashboard"} className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-blue-800">
                <span className="text-xl"><MdDashboard /></span>
                <span className="text-md">Dashboard</span>
              </Link>
    
              <Link to={"/user-report"} className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-blue-800">
                <span className="text-xl"><MdOutlineReportGmailerrorred /></span>
                <span className="text-md">View Report Status</span>
              </Link>

              <Link to={""} className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-blue-800 text-yellow-600">
                <span id='upDown' className="text-xl"><GrStatusInfo /></span>
                <span className="text-md">Messages</span>
              </Link>
    
              <Link to={""} className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-blue-800">
                <span className="text-xl"><GrStatusInfo /></span>
                <span className="text-md">Emergency Contacts</span>
              </Link>
    
              
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

export default UserSideBar