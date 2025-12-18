import React from 'react'
import OrgNavbar from '../components/OrgNavbar'
import OrgSidebar from '../components/OrgSidebar'
import Footer from '../../common/components/Footer'

function OrgRecievedMessages() {
    return (
        <>

            <OrgNavbar />

            {/* main */}
            <div className='grid md:grid-cols-[1fr_4fr] bg-gray-100'>

                {/* side bar */}
                <div>
                    <OrgSidebar />
                </div>

                {/* right div */}
                <div className='md:mb-10'>

                    <div className='md:my-10'>
                        <h1 className="text-3xl font-bold text-blue-900">View Messages </h1>
                    </div>

                    {/* content */}
                    <div className='grid md:grid-cols-3 pe-10 mt-5 gap-5'>

                        {/* card-1 */}
                        <div className="bg-white shadow-lg rounded-b-4xl rounded-t-sm p-5 border border-b-15 border-s-3 border-orange-600 hover:shadow-xl transition">

                            {/* Header */}
                            <div className="flex justify-between items-center">
                                <h3 className="text-lg font-bold text-gray-800">
                                    Landslide – Road Blocked
                                </h3>
                                <span className="bg-red-600 text-white px-2 py-1 rounded text-sm font-bold">
                                    Severe
                                </span>
                            </div>

                            {/* Divider */}
                            <div className="h-0.5 bg-gray-200 mt-5"></div>

                            {/* Reporter Info */}
                            <p className="mt-3 text-gray-700 text-sm">
                                <span className="font-semibold">Reported by:</span> Anju R
                            </p>

                            <p className="text-gray-600 text-sm">
                                Kuttanad, Kerala — 21 Nov 2024, 6:45 PM
                            </p>

                            <p className="mt-2 text-sm text-black">
                                <span className="font-semibold ">Organization Assigned: </span>NDRF Team 7
                            </p>


                            {/* User Message */}
                            <div className='mt-2 text-orange-600'>
                                <p>Message from : <span className='font-bold'>NDRF Team 7</span></p>
                            </div>

                            <div className="mt-4 bg-orange-100 p-3 rounded-lg border">
                                <p className="text-gray-800 text-sm leading-relaxed">
                                    “We have reached the affected area, but the situation looks a little bit out of control. We need more volunteers for support”
                                </p>
                            </div>

                            {/* admin reply */}
                            <div className='mt-4 text-blue-600'>
                                <p>Reply from : <span className='font-bold'>Admin</span></p>
                            </div>

                            <div className="mt-4 bg-blue-100 p-3 rounded-lg border">
                                <p className="text-gray-800 text-sm leading-relaxed">
                                    “Sorry for the inconvenience, necessary actions will be taken as soon as possible”
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>


            <Footer/>
        </>
    )
}

export default OrgRecievedMessages