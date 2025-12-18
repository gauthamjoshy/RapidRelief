import React from 'react'


function OrgNavbar() {
    return (
        <>
            {/* header */}

            <div className='grid grid-cols-2 md:grid-cols-3 p-3 bg-linear-to-r from-indigo-900 to-blue-300 w-screen'>

                {/* logo */}
                <div className='flex items-center '>
                    <img width={"50px"} height={"50px"} className='cursor-pointerm rounded' src="https://img.freepik.com/premium-vector/emergency-exit-icon-black-filled-silhouette-vector-isolated-white-background_1311181-2193.jpg" alt="" />
                    <h1 className='font-extrabold text-2xl ms-2 md:hidden'>RapidRelief</h1>

                </div>

                {/* title */}
                <div className='md:flex justify-center items-center hidden'>
                    <h1 className='font-extrabold text-3xl'>RapidRelief</h1>

                </div>


            </div>


        </>
    )
}

export default OrgNavbar