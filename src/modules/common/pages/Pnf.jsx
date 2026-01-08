import React from 'react'
import { Link } from 'react-router-dom'

function Pnf() {
  return (
    <>
    <div className='bg-linear-to-r from-indigo-900 to-blue-300 h-screen w-full flex justify-center items-center'>
      <div className='text-center text-white'>
          <h1 className='font-bold text-8xl'>404</h1>
          <h2 className='font-semibold text-4xl mt-1'>Oops! Page Not Found</h2>
          <p className='mt-1 mb-5'>The Page You Are looking For Doesn't Exist or has Been Moved.</p>
          <Link to={"/"} className=' rounded-xl bg-white text-violet-900 font-bold p-2 hover:bg-violet-900 hover:text-white transition' >Go Home</Link>
      </div>
    </div>
    </>
  )
}

export default Pnf