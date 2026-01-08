import React, { useEffect, useState } from 'react'
import OrgNavbar from '../components/OrgNavbar'
import OrgSidebar from '../components/OrgSidebar'
import Footer from '../../common/components/Footer'
import { getAllAssignedReportAPI } from '../../../service/allAPI'

function OrgRecievedMessages() {

    const [orgReports, setOrgReports] = useState([])
    const [token, setToken] = useState("")

    // fetch org messages
    const getOrgRecievedMessages = async () => {
        if (token) {
            const reqHeader = {
                "Authorization": `Bearer ${token}`
            }

            try {
                const result = await getAllAssignedReportAPI(reqHeader)

                if (result.status === 200) {
                    const allReports = result.data
                    const trimmedReports = allReports.filter(
                        (card) => card.adminToOrgMessage != null
                    )
                    setOrgReports(trimmedReports)
                } else {
                    console.log("No messages yet")
                }

            } catch (error) {
                console.log("Fetching org messages failed", error)
            }
        }
    }

    // get token
    useEffect(() => {
        if (sessionStorage.getItem("token")) {
            setToken(sessionStorage.getItem("token"))
        }
    }, [])

    // call API when token is ready
    useEffect(() => {
        getOrgRecievedMessages()
    }, [token])

    return (
        <>
            <OrgNavbar />

            {/* main */}
            <div className='grid md:grid-cols-[1fr_4fr] bg-gray-100'>

                {/* sidebar */}
                <div>
                    <OrgSidebar />
                </div>

                {/* right div */}
                <div className='md:mb-10'>

                    <div className='md:my-10'>
                        <h1 className="text-3xl font-bold text-blue-900">
                            View Messages
                        </h1>
                    </div>

                    {/* content */}
                    <div className='grid md:grid-cols-3 pe-10 mt-5 gap-5'>

                        {orgReports?.length > 0 ?
                            orgReports.map((item, index) => (

                                <div
                                    key={index}
                                    className="bg-white shadow-lg rounded-b-4xl rounded-t-sm p-5 border border-b-15 border-s-3 border-orange-600 hover:shadow-xl transition"
                                >

                                    {/* Header */}
                                    <div className="flex justify-between items-center">
                                        <h3 className="text-lg font-bold text-gray-800">
                                            {item?.incidentOverview?.slice(0, 35)}
                                        </h3>
                                        <span className="bg-red-600 text-white px-2 py-1 rounded font-bold">
                                            {item?.severity}
                                        </span>
                                    </div>

                                    {/* Divider */}
                                    <div className="h-0.5 bg-gray-200 mt-5"></div>

                                    {/* Reporter Info */}
                                    <p className="mt-3 text-gray-700">
                                        <span className="font-semibold">Reported by:</span> {item?.name}
                                    </p>

                                    <p className="text-gray-600 mt-1">
                                        Location : {item?.location}
                                    </p>

                                    <p className="text-gray-600 mt-1">
                                        Updated at : {new Date(item?.updatedAt).toLocaleString()}
                                    </p>

                                    <p className="mt-2  text-black">
                                        <span className="font-semibold">
                                            Organization Assigned:
                                        </span>{" "}
                                        {item?.assignedOrganization}
                                    </p>


                                    {/* Org Reply */}
                                    {item?.orgIssue && (
                                        <>
                                            <div className='mt-4 text-blue-600'>
                                                <p>
                                                    Message from :
                                                    <span className='font-bold'> {item?.assignedOrganization}</span>
                                                </p>
                                            </div>

                                            <div className="mt-3 bg-blue-100 p-3 rounded-lg border">
                                                <p className="text-gray-800  leading-relaxed">
                                                    “{item?.orgIssue}”
                                                </p>
                                            </div>
                                        </>
                                    )}

                                    {/* Org Message */}
                                    <div className='mt-3 text-orange-600'>
                                        <p>
                                            Reply from :
                                            <span className='font-bold'> Admin</span>
                                        </p>
                                    </div>

                                    <div className="mt-3 bg-orange-100 p-3 rounded-lg border">
                                        <p className="text-gray-800 text-sm leading-relaxed">
                                            “{item?.adminToOrgMessage}”
                                        </p>
                                    </div>

                                </div>

                            ))
                            :
                            <h1 className="text-center text-gray-500 text-4xl">
                                No messages yet...!
                            </h1>
                        }

                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default OrgRecievedMessages
