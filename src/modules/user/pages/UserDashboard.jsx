import React from 'react'
import UserSideBar from '../components/UserSideBar'
import UserNavbar from '../components/UserNavbar'
import Footer from '../../common/components/Footer'
import { RiAlarmWarningFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import { MdOutlineAccessTimeFilled } from 'react-icons/md'
import { BiSolidReport } from 'react-icons/bi'
import { TiMessages } from 'react-icons/ti'

function UserDashboard() {
  return (
    <>
      <UserNavbar />
      <div className='grid md:grid-cols-[1fr_4fr] bg-gray-100'>
        {/* sidebar */}
        <div >
          <UserSideBar />
        </div>

        {/* right div */}
        <div>
          <div className='md:my-10'>
            <h1 className="text-3xl font-bold text-blue-900">Welcome <span>User</span> </h1>

          </div>

          {/* TOP STATS ROW */}
          <div className="flex md:gap-10 gap mb-8 md:pe-15 md:w-full  ">
            {/* Total Reports */}
            <div className="flex-1 bg-white shadow md:p-5 p-3 rounded-xl border">
              <div className="flex items-center md:gap-2">
                <BiSolidReport className="text-blue-800 text-xl" />
                <h1 className="font-semibold text-gray-700">Total Reports Submitted</h1>
              </div>
              <h1 className="text-3xl font-bold text-blue-900 mt-2">2</h1>
            </div>

            {/* Pending Reports */}
            <div className="flex-1 bg-white shadow md:p-5 p-3 rounded-xl border">
              <div className="flex items-center md:gap-2">
                <MdOutlineAccessTimeFilled className="text-yellow-500 text-xl" />
                <h1 className="font-semibold text-gray-700">Under Verification</h1>
              </div>
              <h1 className="text-3xl font-bold text-yellow-600 mt-2">1</h1>
            </div>

            {/* Organizations */}
            <div className="flex-1 bg-white shadow md:p-5 p-3 rounded-xl border">
              <div className="flex items-center md:gap-2">
                <TiMessages className="text-green-700 text-xl" />
                <h1 className="font-semibold text-gray-700">New Messages</h1>
              </div>
              <h1 className="text-3xl font-bold text-green-700 mt-2">1</h1>
            </div>


          </div>

          {/* report button */}
          <div className='flex justify-center items-center my-28 md:w-auto w-screen md:px-0 px-10'>
            <Link to={"/user-report"} id='reportBtn' className='flex bg-red-600 text-white justify-center items-center gap-5 px-2 py-3 rounded-lg font-bold border text-xl hover:text-red-600 hover:bg-white hover:border-red-600 transition cursor-pointer w-150 z-5'>
              <RiAlarmWarningFill className='text-4xl mb-2' />
              Report a Disaster Occurence
            </Link>
          </div>


          {/* table of emergency contacts */}
        <div id='emergency' className='md:my-20 my-10 md:w-full w-screen'>
          <h1 className="text-3xl font-bold text-blue-900">Emergency Helpline Numbers</h1>
          <div className='md:flex justify-center items-center mt-10'>
            <table className='rounded shadow-2xl shadow-black bg-blue-100 md:w-200'>
              <thead className='bg-linear-to-r from-indigo-900 to-blue-300 text-white text-xl'>
                <tr className=''>
                  <th className='px-3 py-2 border-e-3 '>No</th>
                  <th className='px-3 py-2 border-e-3 '> Organization Name</th>
                  <th className='px-3 py-2 '>Helpline Number</th>
                </tr>
              </thead>
    
              <tbody className='border-t-3 border-white text-lg '>
                <tr className='hover:bg-blue-200'>
                  <td className='px-5 py-2 border-e-3 border-white'>1</td>
                  <td className='px-10 py-2 border-e-3 border-white'>Fire & Rescue</td>
                  <td className='px-10 py-2'>101</td>
                </tr>
                <tr className='hover:bg-blue-200'>
                  <td className='px-5 py-2 border-e-3 border-white'>1</td>
                  <td className='px-10 py-2 border-e-3 border-white'>Fire & Rescue</td>
                  <td className='px-10 py-2'>101</td>
                </tr>
                <tr className='hover:bg-blue-200'>
                  <td className='px-5 py-2 border-e-3 border-white'>1</td>
                  <td className='px-10 py-2 border-e-3 border-white'>Fire & Rescue</td>
                  <td className='px-10 py-2'>101</td>
                </tr>
                <tr className='hover:bg-blue-200'>
                  <td className='px-5 py-2 border-e-3 border-white'>1</td>
                  <td className='px-10 py-2 border-e-3 border-white'>Fire & Rescue</td>
                  <td className='px-10 py-2'>101</td>
                </tr>
                <tr className='hover:bg-blue-200'>
                  <td className='px-5 py-2 border-e-3 border-white'>1</td>
                  <td className='px-10 py-2 border-e-3 border-white'>Fire & Rescue</td>
                  <td className='px-10 py-2'>101</td>
                </tr>
                <tr className='hover:bg-blue-200'>
                  <td className='px-5 py-2 border-e-3 border-white'>1</td>
                  <td className='px-10 py-2 border-e-3 border-white'>Fire & Rescue</td>
                  <td className='px-10 py-2'>101</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>


        </div>

      </div>


      <Footer />


    </>
  )
}

export default UserDashboard