import React, { useEffect, useState } from "react";
import AdminSidebar from "../components/AdminSideBar";
import { IoMdCloseCircle } from "react-icons/io";
// import { ImCross } from "react-icons/im";
import { FaAmbulance, FaPeopleCarry } from "react-icons/fa";
import { GiFirstAidKit } from "react-icons/gi";
import { FaBowlFood } from "react-icons/fa6";
import { BsBuildingFillAdd } from "react-icons/bs";
import { assignOrgAPI, getAllOrgAdminAPI, getAllReportsAdminAPI } from "../../../service/allAPI";
// import { FaFireAlt, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

function ApprovedReports() {
  const [modal, setModal] = useState(false)

  // state for opening reject modal
  const [openModal, setOpenModal] = useState(false)


  const [adminReports, setAdminReports] = useState([])
  const [org, setAllOrg] = useState([])
  const [selectedReportId, setSelectedReportId] = useState("")
  // console.log(selectedReportId);
  

  const getAllReportsAdmin = async () => {
    const result = await getAllReportsAdminAPI()
    // console.log(result);
    setAdminReports(result.data)

  }
  // console.log(adminReports);

  
  const getAllOrgAdmin = async () => {
    try {
      const result = await getAllOrgAdminAPI()
      // console.log(result);
      setAllOrg(result.data);

    } catch (error) {
      console.log(error);

    }
  }
  console.log(org)


  // assign org
  const assignOrg = async (username)=>{
    // console.log(username);
    const reqBody = {username}
    // const id = selectedReportId
    try{
      // const result = await assignOrgAPI(id, reqBody)
      const result = await assignOrgAPI(selectedReportId, reqBody)
      console.log(result);   

    }catch(error){
      console.log(error);
      
    }    
  }




  useEffect(() => {
    getAllReportsAdmin()
  }, [])

  useEffect(() => {
    getAllOrgAdmin()
  }, [])

  return (
    <>
      <div className="grid md:grid-cols-[1fr_4fr] bg-gray-100 h-screen ">
        <div>
          <AdminSidebar />
        </div>

        <div className="p-5">

          {/* AI-GENERATED INCIDENT REPORT */}
          <div className="p-6">
            <h1 className="text-3xl font-bold text-blue-900 mb-6">
              Approved Incident Reports
            </h1>

            {/* GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 bg-gray-100">

              {/* CARD 1 */}
              {adminReports?.length > 0 ? (
                adminReports.filter((report) => report.status == "approved").map((item, index) => (
                  <div key={index} className="bg-white shadow-lg rounded-xl p-5 border">
                    <div className="flex justify-between">
                      <h3 className="text-lg font-bold text-gray-800">
                        {item?.incidentOverview}
                      </h3>

                      <div>
                        <span className="bg-orange-200 p-1 rounded ">{item?.status}</span>
                      </div>
                    </div>

                    <div className="my-1">
                      <span className="text-white font-semibold bg-red-600 text-sm rounded p-1">
                        {item?.severity}
                      </span>
                    </div>

                    <div>
                      <h1>Reported by: <span>{item?.name}</span></h1>
                    </div>

                    <div className="mt-3 text-gray-600 text-sm">
                      <p>{item?.location}</p>
                      <p>{item?.updatedAt}</p>
                    </div>

                    <div className="flex gap-2 mt-4">
                      {item?.images.length > 0 ? (
                        item.images.map((img, index) => (
                          <img
                            key={index}
                            src={img}
                            className="w-20 h-16 rounded-lg object-cover shadow"
                          />
                        ))
                      )
                        :
                        <p>No images</p>
                      }


                    </div>

                    <p className="mt-3 text-gray-700 text-sm">
                      <span className="font-bold text-lg">Contact : </span>{item?.pNum}
                    </p>

                    {/* USER DESCRIPTION */}
                    <div className="mt-6">
                      <h2 className="text-lg font-semibold text-gray-700">
                        User-Provided Description
                      </h2>
                      <p className="mt-2 text-gray-600">
                        {item?.description}
                      </p>
                    </div>

                    <div className=" mt-4">
                      <button onClick={() => {setModal(!modal), setSelectedReportId(item?._id)}} className="bg-blue-900 text-white px-3 py-2 rounded-md text-sm font-semibold hover:bg-blue-700">
                        Assign Volunteer
                      </button>

                    </div>
                  </div>
                ))

              )
                :
                (
                  <h1>No reports approved yet...!</h1>
                )

              }

            </div>

          </div>


          {/* modal */}
          {modal &&
            <div className='relative z-10 overflow-y-auto'>
              <div className='bg-gray-200/95 fixed inset-0'>
                <div className='flex justify-center items-center min-h-screen'>
                  <div id="animationModal" className="scroll-smooth">
                    <div className="flex justify-center items-center my-5 px-3 md:ms-100 ">
                      <h1 className="text-3xl text-blue-950 font-bold">Disaster Relief Organizations</h1>
                      <IoMdCloseCircle
                        className="text-red-600 text-4xl cursor-pointer hover:text-red-700 transition flex justify-end items-center md:ms-80"
                        onClick={() => setModal(!modal)}
                      />
                    </div>
                    <div className='grid md:grid-cols-3 md:ms-40 gap-10 md:pt-7 md:pb-30 md:w-full overflow-y-auto scroll-auto max-h-screen '>
                      {/* cards of different organizations */}
                      {/*  */}
                      {
                        org?.length > 0 ? (
                          org.map((item, index) => (
                            <div key={index} className="bg-white w-80 p-5 rounded-2xl shadow-lg border hover:shadow-2xl transition gap-5 px-5">

                              {/* <!-- Organization Header --> */}
                              <div className="flex items-center gap-3">
                                <div className="bg-gray-100 border border-red-500 text-white w-12 h-12 flex justify-center items-center rounded-full text-xl font-bold">
                                  <BsBuildingFillAdd className="text-red-500" />
                                </div>
                                <div>
                                  <h2 className="text-lg font-bold text-gray-900">{item?.username}</h2>
                                  <p className="text-sm text-gray-500">{item?.role}</p>
                                </div>
                              </div>

                              {/* <!-- Divider --> */}
                              <hr className="my-4" />

                              {/* <!-- Description --> */}
                              <p className="text-sm text-gray-700 leading-relaxed">
                                A certified emergency response organization with trained volunteers specialized
                                in flood rescue, medical aid, and debris clearing.
                              </p>

                              {/* <!-- Resources Section --> */}
                              <h3 className="mt-4 text-sm font-bold text-gray-800">Available Resources</h3>
                              <div className="mt-2 flex flex-wrap gap-2">
                                <span className="bg-blue-100 text-blue-900 text-xs font-semibold px-3 py-1 rounded-full flex gap-2"> <FaPeopleCarry className="text-lg" />Organization : {item?.username}</span>
                                <span className="bg-yellow-100 text-yellow-700 text-xs font-semibold px-3 py-1 rounded-full flex gap-2"> <FaAmbulance className="text-lg" />Vehicle Count : {item?.vehicleCount}</span>
                                <span className="bg-red-100 text-red-500 text-xs font-semibold px-3 py-1 rounded-full flex gap-2"> <GiFirstAidKit className="text-lg" />Medical Team Count :  {item?.medicalTeamCount}</span>
                                <span className="bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full flex gap-2"> <FaBowlFood className="text-lg" />Food Availability : {item?.foodAvailability}</span>
                              </div>

                              {/* <!-- Available Status --> */}
                              <p className="mt-4 text-sm">
                                Status:
                                <span className="font-semibold text-green-600">Available</span>
                              </p>

                              {/* <!-- Assign Button --> */}
                              <button onClick={()=>assignOrg(item?.username)} className="mt-5 w-full bg-blue-900 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition">
                                Assign Organization
                              </button>

                            </div>
                          ))
                        )
                          :
                          <h1>No Organizations found</h1>
                      }



                      {/*  */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          }

        </div>




      </div >
    </>
  );
}

export default ApprovedReports;
