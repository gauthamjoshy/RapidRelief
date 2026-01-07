import React, { useEffect, useState } from 'react'
import UserSideBar from '../components/UserSideBar'
import UserNavbar from '../components/UserNavbar'
import Footer from '../../common/components/Footer'
import { getEachUserReportAPI } from '../../../service/allAPI'


function UserReportMessage() {

    const [userReport, setUserReport] = useState([])
    const [token, setToken] = useState("")

    const getEachUserReport = async () => {
        if (token) {
            // creating reqHeader
            const reqHeader = {
                "Authorization": `Bearer ${token}`
            }
            try {
                const result = await getEachUserReportAPI(reqHeader)
                // console.log(result);
                if (result.status == 200) {
                    const allResult = (result.data)
                    const trimmedResult = allResult.filter((card) => card.adminToUserMessage != null)
                    //   console.log(trimmedResult);
                    setUserReport(trimmedResult)

                } else {
                    console.log(`No reports submitted yet`);

                }


            } catch (error) {
                console.log(`Report fetch failed`);
            }
        }
    }
    console.log(userReport);



    useEffect(() => {
        if (sessionStorage.getItem("token")) {
            setToken(sessionStorage.getItem("token"))
        }
    }, [])

    useEffect(() => {
        getEachUserReport()
    }, [token])

    return (

        <>
            <UserNavbar />
            <div className='grid md:grid-cols-[1fr_4fr] bg-gray-100'>
                {/* sidebar */}
                <div>
                    <UserSideBar />
                </div>

                {/* right div */}
                <div className='mt-10 mb-20'>
                    <div>
                        <h1 className="text-3xl font-bold text-blue-900">Reply's From Admin</h1>

                    </div>

                    {/* content */}
                    <div className='grid md:grid-cols-3 pe-10 mt-5 gap-5'>
                        {/* message card */}
                        {/* card-1 */}
                        {userReport?.length > 0 ?
                            userReport.map((item, index) => (
                                <div key={index} className="bg-white shadow-lg rounded-b-4xl rounded-t-sm p-5 border border-b-15 border-s-3 border-yellow-600 hover:shadow-xl transition">

                                    {/* Header */}
                                    <div className="flex justify-between items-center">
                                        <h3 className="text-lg font-bold text-gray-800">
                                            {item?.incidentOverview?.slice(0, 30)}
                                        </h3>
                                        <span className="bg-red-600 text-white px-2 py-1 rounded text-sm font-bold">
                                            {item?.severity}
                                        </span>
                                    </div>

                                    {/* Divider */}
                                    <div className="h-0.5 bg-gray-200 mt-5"></div>

                                    {/* Reporter Info */}
                                    <p className="mt-3 text-gray-700 text-sm">
                                        <span className="font-semibold">Reported by:</span> {item?.name}
                                    </p>

                                    <p className="text-gray-600 mt-2">
                                        Location : {item?.location}
                                    </p>

                                    <p className="text-gray-600 mt-2">
                                        Reported at : {item?.updatedAt}
                                    </p>


                                    {/* User Message */}
                                    <div className='mt-2 text-yellow-600'>
                                        <p>Message from : <span className='font-bold'>{item?.name}</span></p>
                                    </div>

                                    <div className="mt-4 bg-yellow-100 p-3 rounded-lg border">
                                        <p className="text-gray-800 text-sm leading-relaxed">
                                            “{item?.userIssue}”
                                        </p>
                                    </div>

                                    {/* admin reply */}
                                    <div className='mt-4 text-blue-600'>
                                        <p>Reply from : <span className='font-bold'>Admin</span></p>
                                    </div>

                                    <div className="mt-4 bg-blue-100 p-3 rounded-lg border">
                                        <p className="text-gray-800 text-sm leading-relaxed">
                                            “{item?.adminToUserMessage}”
                                        </p>
                                    </div>

                                </div>
                            ))

                            :
                            <h1>No Replies yet...!</h1>
                        }


                    </div>


                </div>

            </div>


            <Footer />


        </>
    )
}

export default UserReportMessage