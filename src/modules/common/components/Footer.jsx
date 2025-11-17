import React from 'react'
import { BsTwitterX } from 'react-icons/bs'
import { FaLinkedinIn, FaYoutube } from 'react-icons/fa'

function Footer() {
  return (
    <>
      <div className='grid md:grid-cols-2'>
        <div style={{ backgroundImage: "url('https://www.rcrc-resilience-southeastasia.org/wp-content/uploads/2016/10/Koppu_Flood-affected-residents-of-Barangay-Delfin-Albano-Isabela-receive-relief-goods-frm-Red-Cross-Oct-20-2015-October-2015-c-Noel-Celis-IFRC-1024x659.jpg')" }} className='w-full bg-cover bg-center h-75'>
          <div className='flex justify-center items-center mt-25 gap-5'>
            <div className='border-2 border-white rounded-full p-4 hover:-translate-y-5 transition duration-400 cursor-pointer '>
              <FaLinkedinIn className='text-2xl text-white' />
            </div>
            <div className='border-2 border-white rounded-full p-4 hover:-translate-y-5 transition duration-400 cursor-pointer '>
              <BsTwitterX className='text-2xl text-white' />
            </div>
            <div className='border-2 border-white rounded-full p-4 hover:-translate-y-5 transition duration-400 cursor-pointer '>
              <FaYoutube className='text-2xl text-white' />
            </div>
          </div>
          <p className='font-medium text-center text-white mt-2'>Get latest upates from RapidRelief</p>

          <div className='flex justify-center items-center mt-2'>
            <input type="text" placeholder='Email' className='border-white bg-white rounded-s-md px-2 py-3' />
            <button className='border border-black bg-red-500 text-white font-medium px-2 py-3 rounded-e-md cursor-pointer hover:bg-red-800 transition'>Subscribe</button>
          </div>
        </div>


        <div className='bg-linear-to-r from-indigo-900 to-blue-300'>
          <div className='flex justify-center md:gap-50 gap-20 text-white font-medium md:mt-20 mt-10'>
            <div>
              <p>Home</p>
              <p className='mt-2'>Report Disaster</p>
              <p className='mt-2'>Features</p>
            </div>
            <div className='ms-5'>
              <p>Working</p>
              <p className='mt-2'>Learn More</p>
            </div>
          </div>

          <div className='flex  justify-center text-white md:my-6 my-4 '>
            <div className='text-sm ms-14'>
              <p>© 2024-2025 CDRI. All rights reserved</p>
              <p>Privacy Policy</p>
            </div>
            <div className='md:ms-20 me-2 text-2xl font-extrabold'>
              <p className='text-black'>RapidRelief</p>
            </div>
          </div>
        </div>

      </div>

    </>
  )
}

export default Footer