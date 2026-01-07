import React, { useEffect, useState } from 'react'
import UserSideBar from '../components/UserSideBar'
import UserNavbar from '../components/UserNavbar'
import Footer from '../../common/components/Footer'
import { FaFireAlt, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa'
import { MdOutlineReportProblem } from 'react-icons/md'
import { IoMdCloseCircle } from 'react-icons/io'
import { getEachUserPendingReportAPI, getEachUserReportAPI, reportUserissueAPI } from '../../../service/allAPI'
import { toast } from 'react-toastify'


function UserReportStatus() {

  // states for switching report card status
  const [reportAVisibility, setReportAVisibility] = useState(true)
  const [reportBVisibility, setReportBVisibility] = useState(false)

  // state for opening report issue modal
  const [openModal, setOpenModal] = useState(false)


  // logic
  const [userReport, setUserReport] = useState([])
  const [token, setToken] = useState("")
  // console.log(token);
  const [pendingReport, setPendingReport] = useState([])
  const [userIssue, setUserIssue] = useState("")
  const [userIssueId, setUserIssueId] = useState("")
  console.log(userIssue);
  console.log(userIssueId);


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
          setUserReport(result.data)
        } else {
          console.log(`No reports submitted yet`);

        }


      } catch (error) {
        console.log(`Report fetch failed`);
      }
    }
  }
  console.log(userReport);


  // get pending reports
  const getPendingreports = async () => {

    if (token) {
      // creating reqHeader
      const reqHeader = {
        "Authorization": `Bearer ${token}`
      }
      try {
        const result = await getEachUserPendingReportAPI(reqHeader)
        // console.log(result);
        if (result.status == 200) {
          setPendingReport(result.data)
        } else {
          console.log(`No pending reports`);

        }


      } catch (error) {
        console.log(`Report fetch failed`);
      }
    }
  }
  console.log(pendingReport);


  // report user issue
  const reportUserIssue = async () => {

    // reqheader
    const reqHeader = {
      "Authorization": `Bearer ${token}`
    }

    if (!userIssue) {
      toast.warning(`Please enter a valid issue`)
    } else {

      try {
        const result = await reportUserissueAPI(userIssueId, { userIssue }, reqHeader)
        console.log(result);
        if (result.status == 200) {
          toast.success(`Issue has been submitted`)
          setUserIssueId("")
          setUserIssue("")
          setOpenModal(false)
        }

      } catch (error) {
        console.log(`Error`);
      }

    }

  }




  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      setToken(sessionStorage.getItem("token"))
    }
  }, [])

  useEffect(() => {
    getEachUserReport()
  }, [token])

  useEffect(() => {
    getPendingreports()
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
        <div>
          <div className='my-10'>
            <h1 className="text-3xl font-bold text-blue-900">View Report Status</h1>

          </div>

          {/* buttons of divs */}
          <div className="flex justify-center items-center cursor-pointer">

            {/* Under Review */}
            <div onClick={() => { setReportAVisibility(true); setReportBVisibility(false); }} className={reportAVisibility ? "border-2 border-blue-950 rounded-t px-3 py-2 font-semibold bg-orange-600 text-white" : "border-b-2 border-blue-950 rounded-t px-3 py-2 font-semibold bg-orange-300 hover:bg-orange-400"}>
              Under Review
            </div>

            {/* All Reports */}
            <div onClick={() => { setReportAVisibility(false); setReportBVisibility(true); }} className={reportBVisibility ? "border-2 border-blue-950 rounded-t px-3 py-2 font-semibold bg-orange-600 text-white" : "border-b-2 border-blue-950 rounded-t px-3 py-2 font-semibold bg-orange-300 hover:bg-orange-400"}>
              All Reports
            </div>

          </div>


          {/* divs */}
          <div>
            {reportAVisibility &&
              <div>
                {/* report card */}
                {
                  <div>
                    {pendingReport?.length > 0 ? (
                      pendingReport.map((pending, index) => (
                        <div key={index}>
                          {/* all report card */}
                          <div className="bg-white shadow-lg rounded-xl border p-15 md:mx-10 my-20">
                            {/* Header */}
                            <div className="flex justify-between items-start">
                              <h1 className="text-2xl font-bold text-blue-900">
                                AI-Generated Incident Report
                              </h1>
                              <span className="bg-green-100 text-green-600 px-4 py-2 rounded-lg text-sm font-semibold">
                                {pending?.status}
                              </span>
                            </div>

                            {/* Incident Overview */}
                            <div className="mt-6">
                              <h2 className="text-lg font-semibold text-gray-700">
                                Incident Overview
                              </h2>
                              <p className="text-gray-600 mt-2">
                                {pending?.incidentOverview}
                              </p>
                            </div>

                            {/* Severity */}
                            <div className="mt-6">
                              <h2 className="text-lg font-semibold text-gray-700">
                                AI-Generated Severity
                              </h2>
                              <div className="mt-3 flex items-center gap-3">
                                <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-lg font-bold text-sm flex items-center gap-1">
                                  <FaFireAlt />{pending?.severity}
                                </span>
                              </div>
                            </div>

                            {/* Location */}
                            <div className="mt-6">
                              <h2 className="text-lg font-semibold text-gray-700">
                                Location & Timestamp
                              </h2>

                              <div className="mt-3 flex flex-col gap-2 text-gray-700">
                                <div className="flex items-center gap-2">
                                  <FaMapMarkerAlt className="text-blue-700" />
                                  {pending?.location}
                                </div>

                                <div className="text-gray-600 text-sm"><span className="text-lg font-semibold text-gray-700">Updated at: </span>{pending?.updatedAt}</div>

                                <div className="text-gray-600 "><span className="text-lg font-semibold text-gray-700">Reported by: </span>{pending?.name}</div>

                                <div className="flex items-center gap-2">
                                  <FaPhoneAlt className="text-green-700" />
                                  {pending?.pNum}
                                </div>
                              </div>
                            </div>

                            {/* IMAGES ROW */}
                            <div className="mt-6">
                              <h2 className="text-lg font-semibold text-gray-700 mb-3">Images</h2>
                              <div className="flex gap-4 overflow-x-auto">

                                {
                                  pending?.images.map((img, index) => (
                                    <img key={index}
                                      src={img}
                                      className="w-40 h-28 rounded-lg object-cover shadow"
                                    />
                                  ))
                                }
                              </div>
                            </div>

                            {/* USER DESCRIPTION */}
                            <div className="mt-6">
                              <h2 className="text-lg font-semibold text-gray-700">
                                User-Provided Description
                              </h2>
                              <p className="mt-2 text-gray-600">
                                {pending?.description}
                              </p>
                            </div>

                            {/* KEYWORDS */}
                            <div className="mt-6">
                              <h2 className="text-lg font-semibold text-gray-700">
                                AI-Extracted Keywords
                              </h2>
                              <div className="flex gap-2 mt-2 flex-wrap">
                                {pending.keywords.map((key, index) => (
                                  <span key={index} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">{key}</span>
                                ))

                                }
                              </div>
                            </div>

                            {/* AI ANALYSIS */}
                            <div className="mt-6">
                              <h2 className="text-lg font-semibold text-gray-700">
                                AI Analysis & Recommendations
                              </h2>
                              <p className="text-gray-600 mt-2">
                                {pending?.aiAnalysisAndRecommendations}
                              </p>
                            </div>

                            {/* assigned organization */}
                            <div className='my-5 bg-green-100 rounded-2xl p-2 text-lg text-green-800 font-medium md:max-w-fit'>
                              <h2>Assigned Organization for Help : <span className='text-blue-900 font-bold'>{pending?.assignedOrganization}</span></h2>
                            </div>




                          </div>


                        </div>
                      ))
                    )

                      :
                      (
                        <h1>No Reports found</h1>
                      )}
                  </div>

                }

              </div>
            }
            {reportBVisibility &&
              <div>
                {userReport?.length > 0 ? (
                  userReport.map((item, index) => (
                    <div key={index}>
                      {/* all report card */}
                      <div className="bg-white shadow-lg rounded-xl border p-15 md:mx-10 my-20">
                        {/* Header */}
                        <div className="flex justify-between items-start">
                          <h1 className="text-2xl font-bold text-blue-900">
                            AI-Generated Incident Report
                          </h1>
                          <span className={item?.status != "rejected" ? "bg-green-100 text-green-600 px-4 py-2 rounded-lg text-sm font-semibold" : "bg-red-100 text-red-600 px-4 py-2 rounded-lg text-sm font-semibold"}>
                            {item?.status}
                          </span>
                        </div>

                        {/* Incident Overview */}
                        <div className="mt-6">
                          <h2 className="text-lg font-semibold text-gray-700">
                            Incident Overview
                          </h2>
                          <p className="text-gray-600 mt-2">
                            {item?.incidentOverview}
                          </p>
                        </div>

                        {/* Severity */}
                        <div className="mt-6">
                          <h2 className="text-lg font-semibold text-gray-700">
                            AI-Generated Severity
                          </h2>
                          <div className="mt-3 flex items-center gap-3">
                            <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-lg font-bold text-sm flex items-center gap-1">
                              <FaFireAlt />{item?.severity}
                            </span>
                          </div>
                        </div>

                        {/* Location */}
                        <div className="mt-6">
                          <h2 className="text-lg font-semibold text-gray-700">
                            Location & Timestamp
                          </h2>

                          <div className="mt-3 flex flex-col gap-2 text-gray-700">
                            <div className="flex items-center gap-2">
                              <FaMapMarkerAlt className="text-blue-700" />
                              {item?.location}
                            </div>

                            <div className="text-gray-600 text-sm"><span className="text-lg font-semibold text-gray-700">Updated at: </span>{item?.updatedAt}</div>

                            <div className="text-gray-600 "><span className="text-lg font-semibold text-gray-700">Reported by: </span>{item?.name}</div>

                            <div className="flex items-center gap-2">
                              <FaPhoneAlt className="text-green-700" />
                              {item?.pNum}
                            </div>
                          </div>
                        </div>

                        {/* IMAGES ROW */}
                        <div className="mt-6">
                          <h2 className="text-lg font-semibold text-gray-700 mb-3">Images</h2>
                          <div className="flex gap-4 overflow-x-auto">

                            {
                              item?.images.map((img, index) => (
                                <img key={index}
                                  src={img}
                                  className="w-40 h-28 rounded-lg object-cover shadow"
                                />
                              ))
                            }
                          </div>
                        </div>

                        {/* USER DESCRIPTION */}
                        <div className="mt-6">
                          <h2 className="text-lg font-semibold text-gray-700">
                            User-Provided Description
                          </h2>
                          <p className="mt-2 text-gray-600">
                            {item?.description}
                          </p>
                        </div>

                        {/* KEYWORDS */}
                        <div className="mt-6">
                          <h2 className="text-lg font-semibold text-gray-700">
                            AI-Extracted Keywords
                          </h2>
                          <div className="flex gap-2 mt-2 flex-wrap">
                            {item.keywords.map((key, index) => (
                              <span key={index} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">{key}</span>
                            ))

                            }
                          </div>
                        </div>

                        {/* AI ANALYSIS */}
                        <div className="mt-6">
                          <h2 className="text-lg font-semibold text-gray-700">
                            AI Analysis & Recommendations
                          </h2>
                          <p className="text-gray-600 mt-2">
                            {item?.aiAnalysisAndRecommendations}
                          </p>
                        </div>

                        {item?.status == "rejected" && item?.rejectionReason && (
                          <div className="mt-6 bg-red-100 border border-red-300 rounded-xl p-4">
                            <h2 className="text-lg font-semibold text-red-700">
                              Reason for Rejection
                            </h2>
                            <p className="text-red-600 mt-2">
                              {item.rejectionReason}
                            </p>
                          </div>
                        )}


                        {/* assigned organization */}
                        {item?.assignedOrganization.trim() != "" &&
                          <div className='my-5 bg-green-100 rounded-2xl p-2 text-lg text-green-800 font-medium md:max-w-fit'>
                            <h2>Assigned Organization for Help : <span className='text-blue-900 font-bold'>{item?.assignedOrganization}</span></h2>
                          </div>
                        }

                        {/* report */}
                        {item?.status == "completed" &&
                          <div>
                            <button onClick={() => { setOpenModal(true), setUserIssueId(item?._id) }} className='flex items-center gap-2 bg-orange-300 p-2 rounded font-medium shadow hover:bg-orange-600 hover:text-white cursor-pointer transition'> <MdOutlineReportProblem /> Report an Issue</button>
                          </div>}


                      </div>


                    </div>
                  ))
                )

                  :
                  (
                    <h1>No Reports found</h1>
                  )}

              </div>
            }
          </div>


          {/* modal */}
          {openModal &&
            <div className='relative z-10 overflow-y-auto'>
              <div className='bg-gray-200/75 fixed inset-0'>
                <div className='flex justify-center items-center min-h-screen'>
                  <div id='animationModal' className="bg-white p-6 rounded-2xl shadow-xl w-full max-w-lg border">

                    {/* Header */}
                    <div className="flex justify-between items-center mb-4">
                      <h1 className="text-xl font-bold text-blue-900">Report an Issue</h1>

                      <IoMdCloseCircle onClick={() => setOpenModal(!openModal)}
                        className="text-red-600 text-3xl cursor-pointer hover:scale-110 transition"
                      />
                    </div>

                    {/* Divider */}
                    <div className="h-0.5 bg-gray-200 mb-5"></div>

                    {/* Input Box */}
                    <label className="text-gray-700 font-semibold text-sm">
                      Enter your message
                    </label>
                    <textarea value={userIssue} onChange={(e) => setUserIssue(e.target.value)}
                      rows="4"
                      placeholder="Enter your reply to the admin here                                                                 (eg : The team has reached our area, but the provided support is not enough)"
                      className="w-full mt-2 p-3 bg-gray-100 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition resize-none"
                    ></textarea>

                    {/* Action Buttons */}
                    <div className="flex justify-end mt-5">
                      <button type='button' onClick={reportUserIssue} className="px-5 py-2 bg-blue-900 text-white rounded-xl hover:bg-blue-700 transition">
                        Report
                      </button>
                    </div>

                  </div>

                </div>

              </div>

            </div>
          }


        </div>

      </div>


      <Footer />


    </>
  )
}

export default UserReportStatus