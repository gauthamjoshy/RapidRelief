import React, { useEffect, useState } from "react";
import AdminSidebar from "../components/AdminSideBar";
import { FaHourglassStart, FaUsers } from "react-icons/fa6";
import { GoOrganization } from "react-icons/go";
import { MdAirplanemodeInactive, MdFreeCancellation, MdOutlineAccessTimeFilled } from "react-icons/md";
import { BiSolidReport } from "react-icons/bi";
import { getAllOrgAdminAPI } from "../../../service/allAPI";


function ManageOrganizations() {

  const [org, setAllOrg] = useState([])

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

  useEffect(() => {
    getAllOrgAdmin()
  }, [])

  return (

    <>
      <div className="grid md:grid-cols-[1fr_4fr] bg-gray-100 h-screen ">
        <div>
          <AdminSidebar />
        </div>
        <div className="me-10 bg-gray-100">
          <h1 className="text-3xl font-bold text-blue-900 my-6">
            Manage Organizations
          </h1>
          {/*  */}
          {/* TOP STATS ROW */}
          {/* <div className="flex gap-3 mt-5"> */}
            <div className="mt-5">
            {/* Total Reports */}
            <div className="flex-1 bg-white shadow p-5 rounded-xl border w-fit">
              <div className="flex items-center gap-2">
                <GoOrganization className="text-blue-800 text-xl" />
                <h1 className="font-semibold text-gray-700">No of Organizations</h1>
              </div>
              <h1 className="text-3xl font-bold text-blue-900 mt-2">25</h1>
            </div>

            {/* Pending Reports */}
            {/* <div className="flex-1 bg-white shadow p-5 rounded-xl border">
              <div className="flex items-center gap-2">
                <FaHourglassStart className="text-yellow-500 text-xl" />
                <h1 className="font-semibold text-gray-700">Task on Progress</h1>
              </div>
              <h1 className="text-3xl font-bold text-yellow-600 mt-2">5</h1>
            </div> */}

            {/* Organizations */}
            {/* <div className="flex-1 bg-white shadow p-5 rounded-xl border">
              <div className="flex items-center gap-2">
                <MdFreeCancellation className="text-green-700 text-xl" />
                <h1 className="font-semibold text-gray-700">Free to Help</h1>
              </div>
              <h1 className="text-3xl font-bold text-green-700 mt-2">10</h1>
            </div> */}

            {/* Users */}
            {/* <div className="flex-1 bg-white shadow p-5 rounded-xl border">
              <div className="flex items-center gap-2">
                <MdAirplanemodeInactive className="text-red-600 text-xl" />
                <h1 className="font-semibold text-gray-700">Inactive</h1>
              </div>
              <h1 className="text-3xl font-bold text-red-600 mt-2">50</h1>
            </div> */}
          </div>
          {/*  */}
          <div className="bg-white p-6 rounded-xl shadow-md border mt-6">


            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 border-b">
                      Organization
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 border-b">
                     Volunteer Count
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 border-b">
                      Medical Team Count
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 border-b">
                      Food Availability
                    </th>
                    <th className="px-6 py-3 text-center text-sm font-semibold text-gray-700 border-b">
                      Actions
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-200">

                  {/* ROW 1 */}
                  {org?.length > 0 ?
                    org.map((item, index) => (
                      <tr key={index}>
                        <td className="px-6 py-4 font-semibold text-gray-800">{item?.username}</td>
                        <td className="px-6 py-4 text-gray-700">{item?.volunteerCount}</td>
                        <td className="px-6 py-4 text-gray-700">{item?.medicalTeamCount}</td>
                        <td className="px-6 py-4">
                          <span className={item.foodAvailability == "Available"? "bg-green-100 text-green-700 px-3 py-1 text-xs rounded-full font-semibold": "bg-red-100 text-red-700 px-3 py-1 text-xs rounded-full font-semibold" }>
                            {item?.foodAvailability}
                          </span>
                        </td>
                        <td className="px-6 py-4 flex justify-center gap-3">

                          {/* <button className="px-3 py-1 rounded-md text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700">
                        Edit
                      </button> */}

                          <button className="px-3 py-1 rounded-md text-sm font-semibold text-white bg-red-600 hover:bg-red-700">
                            Delete
                          </button>

                        </td>
                      </tr>
                    ))
                    :
                    <h1>No Organizations found</h1>
                  }


                </tbody>
              </table>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default ManageOrganizations;
