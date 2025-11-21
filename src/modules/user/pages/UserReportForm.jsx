import React from 'react'
import UserNavbar from '../components/UserNavbar';
import { FaCameraRetro } from 'react-icons/fa';
import { FaLocationCrosshairs } from 'react-icons/fa6';
import Footer from '../../common/components/Footer';

function UserReportForm() {
  return (
    <>
      {/* Navbar */}
      <UserNavbar />

      {/* form */}
      <div className='grid grid-cols-6 bg-gray-200 pb-30 rounded-lg'>
        <div className='col-span-1 rounded-lg'></div>

        <div className='col-span-4 bg-white mt-20 rounded-lg'>

          {/* title */}
          <div className='w-full rounded-lg'>
            <h3 className='text-center font-bold text-2xl md:py-4 py-2 bg-blue-950 text-white rounded-t-lg'>Report Incident</h3>

          </div>

          {/* upload images */}
          <div>
            <div className="md:ms-10 mt-10">
              <h3 className="text-xl text-blue-950 font-bold ms-3 mb-3">Upload Images</h3>

              <div className='md:ms-40 md:px-0 px-5'>
                <label htmlFor="disasterImage"
                  className="border border-dashed border-gray-500 rounded-lg md:w-150 md:h-52 h-35 
                 flex flex-col justify-center items-center gap-3 cursor-pointer
                 hover:bg-gray-100 transition"
                >
                  <FaCameraRetro className="text-5xl text-gray-500" />
                  <span className="text-gray-600 text-sm">Click to upload (Max Size: 5MB)</span>

                  <input type="file" multiple id="disasterImage" className="hidden" />
                </label>
              </div>
            </div>

          </div>

          {/* location */}
          <div>
            <div className="md:ms-10 ms-3 mt-10">
              <h3 className="text-xl text-blue-950 font-bold mb-3">Share Your Location</h3>
              <div className='md:flex md:mx-0 mx-5'>
                <div>
                  <input type="text" placeholder='Enter Address/ Place Name/ Pincode etc... ' className='border border-gray-500 md:p-3 p-1 md:w-100 w-full rounded-s' />
                </div>
                <div className='md:mt-0 mt-2'>
                  <button className='bg-blue-900 text-white md:p-3 p-1 rounded-e md:w-56 w-full flex justify-center items-center gap-2 cursor-pointer hover:text-blue-900 hover:border hover:border-blue-900 hover:bg-white transition '> <FaLocationCrosshairs /> Use Current Location</button>
                </div>
              </div>

            </div>
          </div>

          {/* contact and description */}
          <div className='md:flex md:mx-10 md:mt-5 mt-3 md:gap-5'>
            <div className='md:w-1/2 w-full md:px-0 px-5'>
              <h3 className="text-xl text-blue-950 font-bold mb-3">Your Contact Information</h3>
              <div className='border rounded border-gray-500 w-full md:mt-4'>
                <div className='w-full'>
                  <input type="text" placeholder='Name' className='md:p-3 p-1 w-full outline-none placeholder:ps-2' />
                  <hr className='md:mx-5 mx-2' />
                </div>
                <div className='w-full'>
                  <input type="number" placeholder='Contact Number' className='md:p-3 p-1 w-full outline-none placeholder:ps-2 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none' />
                  <hr className='md:mx-5 mx-2' />
                </div>
                <div className='w-full'>
                  <input type="text" placeholder='Your Address' className='md:p-3 p-1 w-full outline-none placeholder:ps-2' />
                </div>
              </div>
            </div>

            <div className='md:w-1/2 w-full md:px-0 px-5 mt-1'>
              <h3 className="text-xl text-blue-950 font-bold mb-3">Description</h3>
              <div>
                <textarea className='w-full border border-gray-500 rounded resize-none placeholder:p-4 px-3 py-3 ' rows={5} placeholder='Briefly describe what happened? (eg: Major landslide at Kannur near old bridge) ' />
              </div>
            </div>
          </div>

          {/* button */}
          <div className='md:my-5 my-2 md:mx-10 mx-5 md:pb-5'>
            <button className='bg-red-600 border text-white font-bold text-xl p-3 rounded w-full hover:border-red-500 hover:text-red-500 hover:bg-white cursor-pointer transition'>Submit Report</button>
          </div>



        </div>

        <div className='col-span-1'></div>

      </div>

      {/* footer */}
      <Footer/>

    </>
  )
}

export default UserReportForm