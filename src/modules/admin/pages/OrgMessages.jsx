import React, { useState } from 'react'
import AdminSidebar from '../components/AdminSideBar'
import { IoMdCloseCircle } from 'react-icons/io'


function OrgMessages() {
    const [openModal, setOpenModal] = useState(false)
    return (
        <>
            <div className="grid md:grid-cols-[1fr_4fr] bg-gray-100 h-screen">
                <div>
                    <AdminSidebar />
                </div>
                <div className="me-10 bg-gray-100 pb-10">
                    <h1 className="text-3xl font-bold text-blue-900 my-6">Messages From Organizations</h1>

                    <div className='grid md:grid-cols-3 px-5 mt-5 gap-5'>
                        {/* message card */}
                        {/* card-1 */}
                        <div className="bg-white shadow-lg rounded-b-4xl rounded-t-sm p-5 border border-b-15 border-s-4 border-orange-600 hover:shadow-xl transition">

                            {/* Header */}
                            <div className="flex justify-between items-center">
                                <h3 className="text-lg font-bold text-gray-800">
                                    Landslide - Road Blocked
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

                            {/* Organization Message */}
                            <div className='mt-2 text-orange-500'>
                                <p>Message from : <span className='font-bold'>NDRF Team 7</span></p>
                            </div>

                            <div className="mt-4 bg-gray-100 p-3 rounded-lg border">
                                <p className="text-gray-800 text-sm leading-relaxed">
                                    We have reached the affected area, but the situation looks a little bit out of control. We need more volunteers for support
                                </p>
                            </div>

                            {/* button */}
                            <div className='flex justify-center items-center mt-5'>
                                <button onClick={() => setOpenModal(true)} className='bg-blue-900 text-white border rounded py-1 px-3 cursor-pointer hover:bg-white hover:text-blue-900 hover:border-blue-900'>Reply</button>
                            </div>

                        </div>

                        {/* card-1 */}
                        <div className="bg-white shadow-lg rounded-b-4xl rounded-t-sm p-5 border border-b-15 border-s-4 border-orange-600 hover:shadow-xl transition">

                            {/* Header */}
                            <div className="flex justify-between items-center">
                                <h3 className="text-lg font-bold text-gray-800">
                                    Landslide - Road Blocked
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

                            {/* Organization Message */}
                            <div className='mt-2 text-orange-500'>
                                <p>Message from : <span className='font-bold'>NDRF Team 7</span></p>
                            </div>

                            <div className="mt-4 bg-gray-100 p-3 rounded-lg border">
                                <p className="text-gray-800 text-sm leading-relaxed">
                                    We have reached the affected area, but the situation looks a little bit out of control. We need more volunteers for support
                                </p>
                            </div>

                            {/* button */}
                            <div className='flex justify-center items-center mt-5'>
                                <button onClick={() => setOpenModal(true)} className='bg-blue-900 text-white border rounded py-1 px-3 cursor-pointer hover:bg-white hover:text-blue-900 hover:border-blue-900'>Reply</button>
                            </div>

                        </div>

                        {/* card-1 */}
                        <div className="bg-white shadow-lg rounded-b-4xl rounded-t-sm p-5 border border-b-15 border-s-4 border-orange-600 hover:shadow-xl transition">

                            {/* Header */}
                            <div className="flex justify-between items-center">
                                <h3 className="text-lg font-bold text-gray-800">
                                    Landslide - Road Blocked
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

                            {/* Organization Message */}
                            <div className='mt-2 text-orange-500'>
                                <p>Message from : <span className='font-bold'>NDRF Team 7</span></p>
                            </div>

                            <div className="mt-4 bg-gray-100 p-3 rounded-lg border">
                                <p className="text-gray-800 text-sm leading-relaxed">
                                    We have reached the affected area, but the situation looks a little bit out of control. We need more volunteers for support
                                </p>
                            </div>

                            {/* button */}
                            <div className='flex justify-center items-center mt-5'>
                                <button onClick={() => setOpenModal(true)} className='bg-blue-900 text-white border rounded py-1 px-3 cursor-pointer hover:bg-white hover:text-blue-900 hover:border-blue-900'>Reply</button>
                            </div>

                        </div>

                        {/* card-1 */}
                        <div className="bg-white shadow-lg rounded-b-4xl rounded-t-sm p-5 border border-b-15 border-s-4 border-orange-600 hover:shadow-xl transition">

                            {/* Header */}
                            <div className="flex justify-between items-center">
                                <h3 className="text-lg font-bold text-gray-800">
                                    Landslide - Road Blocked
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

                            {/* Organization Message */}
                            <div className='mt-2 text-orange-500'>
                                <p>Message from : <span className='font-bold'>NDRF Team 7</span></p>
                            </div>

                            <div className="mt-4 bg-gray-100 p-3 rounded-lg border">
                                <p className="text-gray-800 text-sm leading-relaxed">
                                    We have reached the affected area, but the situation looks a little bit out of control. We need more volunteers for support
                                </p>
                            </div>

                            {/* button */}
                            <div className='flex justify-center items-center mt-5'>
                                <button onClick={() => setOpenModal(true)} className='bg-blue-900 text-white border rounded py-1 px-3 cursor-pointer hover:bg-white hover:text-blue-900 hover:border-blue-900'>Reply</button>
                            </div>

                        </div>





                    </div>

                    {/* reply modal */}
                    {openModal &&
                        <div className='relative z-10 overflow-y-auto'>
                            <div className='bg-gray-200/75 fixed inset-0'>
                                <div className='flex justify-center items-center min-h-screen'>
                                    <div id='animationModal' className="bg-white p-6 rounded-2xl shadow-xl w-full max-w-lg border">

                                        {/* Header */}
                                        <div className="flex justify-between items-center mb-4">
                                            <h1 className="text-xl font-bold text-blue-900">Reply Message</h1>

                                            <IoMdCloseCircle onClick={() => setOpenModal(!openModal)}
                                                className="text-red-600 text-3xl cursor-pointer hover:scale-110 transition"
                                            />
                                        </div>

                                        {/* Divider */}
                                        <div className="h-0.5 bg-gray-200 mb-5"></div>

                                        {/* Input Box */}
                                        <label className="text-gray-700 font-semibold text-sm">
                                            Enter your reply
                                        </label>
                                        <textarea
                                            rows="4"
                                            placeholder="Enter your reply to the user here                                                                 (eg : Sorry for the inconvenience, necessary actions will be taken soon)"
                                            className="w-full mt-2 p-3 bg-gray-100 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition resize-none"
                                        ></textarea>

                                        {/* Action Buttons */}
                                        <div className="flex justify-end mt-5">
                                            <button className="px-5 py-2 bg-blue-900 text-white rounded-xl hover:bg-blue-700 transition">
                                                Send Reply
                                            </button>
                                        </div>

                                    </div>


                                </div>

                            </div>

                        </div>
                    }
                </div>
            </div>
        </>
    )
}

export default OrgMessages
