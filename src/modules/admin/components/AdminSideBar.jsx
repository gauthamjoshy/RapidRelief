import React, { useState } from 'react'
import { MdDashboard } from 'react-icons/md'
import { FaCircleCheck, FaUsers } from 'react-icons/fa6'
import { GrOrganization } from 'react-icons/gr'
import { Link } from 'react-router-dom'
import { LuMessageSquareMore, LuMessagesSquare } from 'react-icons/lu'

function AdminSidebar() {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* MOBILE TOP BAR */}
      <div className="md:hidden flex items-center justify-between bg-blue-900 text-white px-4 py-3">
        <div className="flex items-center gap-2 font-bold text-lg">
          <div className="bg-white text-blue-900 rounded-full w-8 h-8 flex items-center justify-center font-black">
            R
          </div>
          RapidRelief Admin
        </div>

        <button onClick={() => setOpen(!open)} className="text-3xl">
          ☰
        </button>
      </div>

      {/* SIDEBAR */}
      <div
        className={`bg-blue-900 text-white w-64 h-screen fixed top-0 left-0 p-6 shadow-xl z-50 transform transition-transform duration-300 ${open ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 `}>
        <h1 className="text-2xl font-bold mb-10 hidden md:block">
          Admin Panel
        </h1>

        {/* NAVIGATION */}
        <nav className="flex flex-col gap-3">
          <Link to={"/admin-dashboard"} className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-blue-800">
            <span className="text-3xl"><MdDashboard /></span>
            <span className="text-lg">Dashboard</span>
          </Link>

          <Link to={"/admin-reports"} className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-blue-800">
            <span className="text-3xl"><FaCircleCheck /></span>
            <span className="text-lg">Approved Reports</span>
          </Link>

          <Link to={"/admin-organizatons"} className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-blue-800">
            <span className="text-3xl"><GrOrganization /></span>
            <span className="text-lg">Manage Organizations</span>
          </Link>

          <Link to={"/admin-users"} className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-blue-800">
            <span className="text-3xl"><FaUsers /></span>
            <span className="text-lg">Manage Users</span>
          </Link>

          <Link to={"/admin-user-messages"} className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-blue-800">
            <span className="text-3xl text-yellow-500"><LuMessageSquareMore id='upDown' /></span>
            <span className="text-lg">User Messages</span>
          </Link>
          <Link to={"/admin-org-messages"} className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-blue-800">
            <span className="text-3xl"><LuMessagesSquare /></span>
            <span className="text-lg">Organizatins Messages</span>
          </Link>

          <div className='flex justify-start items-center md:ms-4'>
            <button className="py-2 px-3 font-medium bg-red-500 rounded-lg text-white border cursor-pointer hover:bg-white hover:text-red-500 hover:border-red-500">Logout</button>
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

export default AdminSidebar
