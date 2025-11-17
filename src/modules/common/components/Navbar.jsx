import React from 'react'
import { FaFacebookSquare, FaHandsHelping, FaInstagram, FaPhone, FaUser } from 'react-icons/fa'
import { FaPersonShelter, FaXTwitter } from 'react-icons/fa6'
import { IoIosWarning } from 'react-icons/io'
import { MdOutlineSos } from 'react-icons/md'
import { PiSpeakerHighFill } from 'react-icons/pi'


function Navbar() {
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
          <button className="bg-white font-medium px-2 py-1 rounded flex items-center gap-1 hover:bg-gray-200 transition cursor-pointer md:me-4 me-2">
            <FaUser /> Login
          </button>

        </div>

      </div>

      {/* moving div  */}
      <div className=' w-full py-3 bg-red-500 overflow-x-hidden '>
        <div id='motionBar' className='flex gap-10 overflow-x-auto whitespace-nowrap'>
          <span className=" font-semibold text-white flex items-center ">
            <IoIosWarning className='text-yellow-300 me-1 ' /> Stay calm and assess the situation
          </span>

          <span className=" font-semibold text-white flex items-center">
            <FaPhone className='text-pink-800 me-1' /> Conatct emergency services immedieatly
          </span>

          <span className=" font-semibold text-white flex items-center">
            <FaPersonShelter className='text-green-500 me-1' /> Move to a safe location
          </span>

          <span className=" font-semibold text-white flex items-center">
            <PiSpeakerHighFill className='text-blue-500 me-1' /> Follow official instructions and updations
          </span>

          <span className=" font-semibold text-white flex items-center">
            <FaHandsHelping className='text-orange-300 me-1' /> Help others if it is safe to do
          </span>

        </div>

      </div>


    </>
  )
}

export default Navbar