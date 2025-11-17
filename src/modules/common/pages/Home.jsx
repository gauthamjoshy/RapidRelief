import React from 'react'
import Navbar from '../components/Navbar'
import { GiBrain } from 'react-icons/gi'
import { BsArrowDown, BsArrowRight, BsShieldFillCheck } from 'react-icons/bs'
import { SiMusicbrainz, SiWorldhealthorganization } from 'react-icons/si'
import { FaAmbulance, FaImages } from 'react-icons/fa'
import { MdAdminPanelSettings } from 'react-icons/md'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'


function Home() {
  return (
    <>
      <Navbar />
      {/* 1st section */}
      <div className='w-full grid md:grid-cols-2 '>

        <div className='md:p-20 p-10'>
          <div>
            <h1 className='md:text-5xl text-3xl font-bold'>Report disasters faster.Save lives quicker</h1>
            <p className='font-normal md:mt-5 mt-3'>Upload images, add your location, contact details and a short description. Our AI estimates damage and helps admins exchange verified reports to local relief organizations and extend support.</p>
          </div>
          <div className='md:mt-5 mt-3'>
            <Link className='bg-red-500 text-white md:p-3 p-2 rounded-lg font-bold border hover:text-red-500 hover:bg-white transition cursor-pointer md:mt-5 mt-3'>Report Disaster</Link>
          </div>
        </div>

        <div className='md:p-20 p-10 md:ms-25'>
          <div>
            <img className='w-100 h-68 ' src="https://media.istockphoto.com/id/1463514110/vector/helping-hand-to-earthquake-victims.jpg?s=612x612&w=0&k=20&c=XehJUZhj_9HzEvZyLwS3YBBSC7AZlR62wD4bXlZ7svs=" alt="" />
          </div>

        </div>

      </div>

      {/* 2nd section features */}
      <div className='bg-linear-to-b from-blue-50 to to-blue-300 py-10'>
        <h1 className='text-3xl font-bold text-center'>Features</h1>
        <div className='grid md:grid-cols-3 md:px-28 px-10 md:gap-40 gap-5 md:my-20 my-10'>
          <div className='flex bg-amber-300 px-5 py-10 rounded-2xl w-85 shadow-lg hover:shadow-2xl hover:shadow-indigo-600 transition duration-300'>
            <div>
              <div className='flex items-center justify-center gap-2 px-10'>
                <GiBrain className='text-5xl' />
                <h3 className='font-black text-xl flex flex-wrap'>Damage Analysis by AI</h3>
              </div>
              <p className='font-medium flex flex-wrap justify-center items-center text-center my-3'>Automatic damage assessment from your photos and descreption</p>
            </div>

          </div>

          <div className='flex bg-gray-200 px-5 py-10 rounded-2xl w-85 shadow-lg hover:shadow-2xl hover:shadow-indigo-600 duration-300'>
            <div>
              <div className='flex items-center justify-center gap-2 px-10'>
                <BsShieldFillCheck className='text-5xl text-amber-400' />
                <h3 className='font-black text-xl flex flex-wrap'>Admin Review</h3>
              </div>
              <p className='font-medium flex flex-wrap justify-center items-center text-center my-3'>Fast approval by admin and prioratization of verified reports by admin</p>
            </div>

          </div>

          <div className='flex bg-gray-200 px-5 py-10 rounded-2xl w-85 shadow-lg hover:shadow-2xl hover:shadow-indigo-600 duration-300'>
            <div>
              <div className='flex items-center justify-center gap-2 px-10'>
                <SiWorldhealthorganization className='text-5xl text-amber-400' />
                <h3 className='font-black text-xl flex flex-wrap'>Verified Organizations</h3>
              </div>
              <p className='font-medium flex flex-wrap justify-center items-center text-center my-3'>Connects approved reports with trusted NGOs & responders</p>
            </div>

          </div>


        </div>
      </div>

      {/* 3rd div how it works */}
      <div className='bg-linear-to-b from-blue-300 to-white py-10'>
        <h1 className='text-3xl font-bold text-center'>How It Works</h1>
        {/* <div className='grid md:grid-cols-4 mx-10 gap-10 md:mt-0 mt-5'> */}
        <div className='grid md:grid-cols-4 mx-10 gap-10 md:mt-20 mt-5'>
          <div className='md:flex md:ms-15 ms-4 hover:-translate-y-5 transition duration-400'>
            <div className='text-center'>
              <FaImages className='text-5xl text-red-500 md:ms-24 ms-30' />
              <h1 className='font-bold mt-1'>Report</h1>
              <p className='font-medium mt-2'>Upload disaster photos, location and details</p>
            </div>
            <div>
              <BsArrowRight className='text-5xl mt-5 hidden md:block' />
              <BsArrowDown className='text-5xl mt-5 md:hidden ms-28' />
            </div>

          </div>

          <div className='md:flex md:ms-10 ms-8 hover:-translate-y-5 transition duration-400'>
            <div className='text-center'>
              <SiMusicbrainz className='text-5xl text-orange-500 md:ms-25 ms-26' />
              <h1 className='font-bold mt-1'>AI Analyze</h1>
              <p className='font-medium mt-2'>AI estimates damage and severity</p>
            </div>
            <div>
              <BsArrowRight className='text-5xl mt-5 hidden md:block' />
              <BsArrowDown className='text-5xl mt-8 ms-24  md:hidden' />
            </div>

          </div>

          <div className='md:flex md:ms-10 ms-12 hover:-translate-y-5 transition duration-400'>
            <div className='text-center'>
              <MdAdminPanelSettings className='text-5xl text-yellow-500 md:ms-20 ms-20' />
              <h1 className='font-bold mt-1'>Admin Approves</h1>
              <p className='font-medium mt-2'>Admin review and prioritize</p>
            </div>
            <div>
              <BsArrowRight className='text-5xl mt-5 hidden md:block' />
              <BsArrowDown className='text-5xl mt-8 ms-20 md:hidden' />
            </div>

          </div>

          <div className='flex md:me-15 hover:-translate-y-5 transition duration-400'>
            <div className='text-center'>
              <FaAmbulance className='text-5xl text-green-500 md:ms-27 ms-32' />
              <h1 className='font-bold mt-1'>Relief Sent</h1>
              <p className='font-medium mt-2'>Disaster management organizations are assigned to extend support</p>
            </div>

          </div>

        </div>
      </div>

      {/* button to report disaster */}
      <div className='flex justify-center items-center my-5 md:mb-10'>
        <Link className='bg-red-500 text-white md:p-5 p-3 rounded-2xl font-extrabold text-lg border hover:text-red-500 hover:bg-white transition cursor-pointer md:mt-5 mt-3'>Report Disaster</Link>
      </div>


      {/* Info Section */}
      <div className="my-20 px-10 md:px-20">
        <h1 className="text-3xl font-bold text-center mb-10">Learn More</h1>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Wikipedia Card */}
          <div className="bg-white shadow-xl rounded-3xl p-5 hover:shadow-2xl hover:shadow-yellow-600 transition duration-300  bg-linear-to-tr from-indigo-900 to-blue-50">
            <h2 className="text-xl font-extrabold mb-4 md:py-3 text-center">Emergency Management (Wiki)</h2>

            <div className="w-full aspect-video rounded-xl overflow-hidden  ">
              <iframe
                src="https://en.wikipedia.org/wiki/Emergency_management"
                className="w-full h-full"
                frameBorder="0"
              ></iframe>
            </div>
          </div>

          {/* YouTube Card */}
          <div className="bg-white shadow-2xl rounded-3xl p-5 hover:shadow-2xl hover:shadow-orange-600 transition duration-300  bg-linear-to-tl from-indigo-900 to-blue-50">
            <h2 className="text-xl font-extrabold mb-4 md:py-3 text-center">What is Disaster Management?</h2>

            <div className="w-full aspect-video rounded-3xl overflow-hidden ">
              <iframe
                src="https://www.youtube.com/embed/yNPb4Q90ylY?si=TyKT7CdoHUUvQw9M"
                title="YouTube video"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

        </div>
      </div>

      {/* footer */}
      <Footer/>


    </>
  )
}

export default Home