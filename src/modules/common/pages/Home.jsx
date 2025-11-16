import React from 'react'
import Navbar from '../components/Navbar'
import { Carousel } from "flowbite-react";

function Home() {
  return (
    <>
      <Navbar />
      <div className='w-full grid md:grid-cols-2'>

        <div>
          <div>
            <h1>Report disasters faster.Save lives quicker</h1>
            <p>Upload images, add your location, contact details and a short description. Our AI estimates damage and helps admins exchange verified reports to local relief organizations.</p>
          </div>
          <div>
            <button>Report Disaster</button>
          </div>
        </div>

        <div>
          <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
            <Carousel>
              <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                Slide 1
              </div>
              <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                Slide 2
              </div>
              <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                Slide 3
              </div>
            </Carousel>
          </div>
        </div>

      </div>

    </>
  )
}

export default Home