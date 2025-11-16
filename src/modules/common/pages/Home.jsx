import React from 'react'
import Navbar from '../components/Navbar'


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
          
        </div>

      </div>

    </>
  )
}

export default Home