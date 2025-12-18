import React from 'react'
import OrgNavbar from '../components/OrgNavbar'
import OrgSidebar from '../components/OrgSidebar'
import Footer from '../../common/components/Footer'

function ManageProfile() {
    return (
        <>
            <OrgNavbar />

            <div className="grid md:grid-cols-[1fr_4fr] bg-gray-100 min-h-screen ">
                <div>
                    <OrgSidebar />

                </div>

                {/* right div */}
                <div className='mt-10'>
                    <div className=''>
                        <h1 className="text-3xl font-bold text-blue-900 mb-6">
                            Update Profile
                        </h1>

                    </div>

                    {/* profile card */}
                    <form className="md:ms-10 md:my-10 bg-white shadow-lg rounded-xl p-6 border border-gray-200 w-1/2">

                        {/* Heading */}
                        <h1 className="text-2xl font-bold text-blue-900 mb-6">Operational Capacity</h1>

                        {/* description */}
                        {/* <p className='bg-blue-100 p-3 my-2 rounded-xl'>A certified emergency response organization with trained volunteers specialized in flood rescue, medical aid, and debris clearing.</p> */}
                        <div className='mb-4'>
                            <label className="block font-semibold text-gray-700 mb-1">Description</label>
                            <textarea rows={5} className='bg-blue-100 p-3 my-2 rounded-xl border focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition w-full resize-none' />

                        </div>
                        {/* volunteer count */}
                        <div className="mb-4">
                            <label className="block font-semibold text-gray-700 mb-1">Volunteer Count</label>
                            <input
                                type="number"
                                className="w-full px-3 py-2 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none" />
                        </div>

                        {/* medical team */}
                        <div className="mb-4">
                            <label className="block font-semibold text-gray-700 mb-1">Medical Team Count</label>
                            <select className="w-full px-3 py-2 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition">
                                <option>    --  Select  --  </option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>

                        {/* vehicle count */}
                        <div className="mb-4">
                            <label className="block font-semibold text-gray-700 mb-1">Vehicle Count</label>
                            <input
                                type="number"
                                className="w-full px-3 py-2 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none" />
                        </div>

                        {/* food */}
                        <div className="mb-4">
                            <label className="block font-semibold text-gray-700 mb-1">Food Availability</label>
                            <select
                                className="w-full px-3 py-2 border rounded-lg bg-gray-50 focus:ring-2 :ring-blue-600 focus:border-blue-600 outline-none transition">
                                <option>    --  Select  --  </option>
                                <option>Yes</option>
                                <option>No</option>
                            </select>
                        </div>

                        {/* status */}
                        <div className="mb-6">
                            <label className="block font-semibold text-gray-700 mb-1">Operational Status</label>
                            <select className="w-full px-3 py-2 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition">
                                <option>    --  Select  --  </option>
                                <option>Available</option>
                                <option>Unavailable</option>
                            </select>
                        </div>

                        {/* button */}
                        <div className="w-full mt-12">
                            <button className="bg-blue-900 text-white font-semibold px-5 py-3 rounded-lg hover:bg-blue-700 transition shadow-md w-full">
                                Update
                            </button>
                        </div>

                    </form>


                </div>

            </div>

            <Footer />

        </>
    )
}

export default ManageProfile