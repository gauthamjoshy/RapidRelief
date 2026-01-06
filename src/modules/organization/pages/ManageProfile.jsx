import React, { useEffect, useState } from 'react'
import OrgNavbar from '../components/OrgNavbar'
import OrgSidebar from '../components/OrgSidebar'
import Footer from '../../common/components/Footer'
import { toast } from 'react-toastify'
import { updateOrgProfileAPI } from '../../../service/allAPI'

function ManageProfile() {

    const [currentorg, setCurrentorg] = useState({
        about: "",
        username: "",
        volunteerCount: "",
        medicalTeamCount: "",
        vehicleCount: "",
        foodAvailability: "",
        status: "",
        password: "",
        confirmPassword: ""
    })


    const [token, setToken] = useState("")
    // const [existingOrg, setExistingOrg] = useState("")
    console.log(currentorg);
    // console.log(token);

    // update
    const handleUpdate = async () => {
        const { about, username, volunteerCount, medicalTeamCount, vehicleCount, foodAvailability, status, password, confirmPassword } = currentorg

        if (!username || !password || !confirmPassword || !status) {
            toast.info(`Please fill the details completely`)
        } else {
            if (password != confirmPassword) {
                toast.warning(`Password mismatch`)
            } else {
                // reqHeader
                const reqHeader = {
                    "Authorization": `Bearer ${token}`
                }

                const result = await updateOrgProfileAPI(currentorg, reqHeader)
                console.log(result);
                sessionStorage.setItem("existingOrganization", JSON.stringify(result.data))
                toast.success(`profile updated successfully`)
                
            }
        }
    }





    useEffect(() => {
        if (sessionStorage.getItem("token")) {
            setToken(sessionStorage.getItem("token"))

            const user = JSON.parse(sessionStorage.getItem("existingOrganization"))
            setCurrentorg({
                about: user.about,
                username: user.username,
                volunteerCount: user.vehicleCount,
                medicalTeamCount: user.medicalTeamCount,
                vehicleCount: user.vehicleCount,
                foodAvailability: user.foodAvailability,
                status: user.status,
                password: user.password
            })
        }
    }, [])

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
                            <label className="block font-semibold text-gray-700 mb-1">About</label>
                            <textarea value={currentorg.about} onChange={(e) => setCurrentorg({ ...currentorg, about: e.target.value })} rows={5} className='bg-blue-100 p-3 my-2 rounded-xl border focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition w-full resize-none' />

                        </div>

                        {/* Username */}
                        <div className="mb-4">
                            <label className="block font-semibold text-gray-700 mb-1">Username</label>
                            <input value={currentorg.username} onChange={(e) => setCurrentorg({ ...currentorg, username: e.target.value })}
                                type="text"
                                className="w-full px-3 py-2 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition" />
                        </div>

                        {/* volunteer count */}
                        <div className="mb-4">
                            <label className="block font-semibold text-gray-700 mb-1">Volunteer Count</label>
                            <input value={currentorg.volunteerCount} onChange={(e) => setCurrentorg({ ...currentorg, volunteerCount: e.target.value })}
                                type="number"
                                className="w-full px-3 py-2 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none" />
                        </div>

                        {/* medical team */}
                        <div className="mb-4">
                            <label className="block font-semibold text-gray-700 mb-1">Medical Team Count</label>
                            <select value={currentorg.medicalTeamCount} onChange={(e) => setCurrentorg({ ...currentorg, medicalTeamCount: e.target.value })} className="w-full px-3 py-2 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition">
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
                            <input value={currentorg.vehicleCount} onChange={(e) => setCurrentorg({ ...currentorg, vehicleCount: e.target.value })}
                                type="number"
                                className="w-full px-3 py-2 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none" />
                        </div>

                        {/* food */}
                        <div className="mb-4">
                            <label className="block font-semibold text-gray-700 mb-1">Food Availability</label>
                            <select value={currentorg.foodAvailability} onChange={(e) => setCurrentorg({ ...currentorg, foodAvailability: e.target.value })}
                                className="w-full px-3 py-2 border rounded-lg bg-gray-50 focus:ring-2 :ring-blue-600 focus:border-blue-600 outline-none transition">
                                <option>    --  Select  --  </option>
                                <option>Available</option>
                                <option>Unavailable</option>
                            </select>
                        </div>

                        {/* status */}
                        <div className="mb-6">
                            <label className="block font-semibold text-gray-700 mb-1">Operational Status</label>
                            <select value={currentorg.status} onChange={(e) => setCurrentorg({ ...currentorg, status: e.target.value })} className="w-full px-3 py-2 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition">
                                <option>    --  Select  --  </option>
                                <option>Available</option>
                                <option>Unavailable</option>
                            </select>
                        </div>

                        {/* password */}
                        <div className="mb-4">
                            <label className="block font-semibold text-gray-700 mb-1">Password</label>
                            <input value={currentorg.password} onChange={(e) => setCurrentorg({ ...currentorg, password: e.target.value })}
                                type="text"
                                className="w-full px-3 py-2 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition" />
                        </div>

                        {/* confirm password */}
                        <div className="mb-4">
                            <label className="block font-semibold text-gray-700 mb-1">Confirm Password</label>
                            <input value={currentorg.confirmPassword} onChange={(e) => setCurrentorg({ ...currentorg, confirmPassword: e.target.value })}
                                type="text"
                                className="w-full px-3 py-2 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition" />
                        </div>

                        {/* button */}
                        <div className="w-full mt-12">
                            <button type='button' onClick={handleUpdate} className="bg-blue-900 text-white font-semibold px-5 py-3 rounded-lg hover:bg-blue-700 transition shadow-md w-full">
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