import React from 'react'
import { FaFacebookSquare, FaHandsHelping, FaInstagram, FaPhone, FaUser } from 'react-icons/fa'
import { FaPersonShelter, FaXTwitter } from 'react-icons/fa6'
import { IoIosWarning } from 'react-icons/io'
import { MdOutlineSos } from 'react-icons/md'
import { PiSpeakerHighFill } from 'react-icons/pi'

function AdminNavbar() {
  return (
    <>
      {/* header */}

      <div className='grid grid-cols-2 md:grid-cols-3 p-3 bg-linear-to-r from-indigo-900 to-blue-300'>

        {/* logo */}
        <div className='flex items-center '>
          <img width={"50px"} height={"50px"} className='cursor-pointerm rounded' src="https://img.freepik.com/premium-vector/emergency-exit-icon-black-filled-silhouette-vector-isolated-white-background_1311181-2193.jpg" alt="" />
          <h1 className='font-extrabold text-2xl ms-2 md:hidden'>RapidRelief</h1>

        </div>

        {/* title */}
        <div className='md:flex justify-center items-center hidden'>
          <h1 className='font-extrabold text-3xl'>RapidRelief</h1>

        </div>

        {/* social media and login */}
        <div className="flex justify-end items-center gap-3">

          <div className="hidden md:flex items-center gap-3 cursor-pointer">
            <FaInstagram className='text-2xl' />
            <FaXTwitter className='text-2xl' />
            <FaFacebookSquare className='text-2xl' />
          </div>

          {/* login button */}
          <button className="bg-red-500 text-white font-medium px-2 py-1 rounded flex items-center gap-1 hover:bg-white hover:text-red-500 transition cursor-pointer md:me-4 me-2">
            <FaUser /> Logout
          </button>

        </div>

      </div>




    </>
  )
}

export default AdminNavbar
