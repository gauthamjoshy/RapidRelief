import React, { useEffect, useState } from "react";
import AdminSidebar from "../components/AdminSideBar";
import { FaUser, FaUsers, FaUserSlash } from "react-icons/fa6";
import { FaUserCircle } from "react-icons/fa";
import { getAllUsersAdminAPI } from "../../../service/allAPI";


function ManageOrganizations() {

  const [users, setAllUsers] = useState([])

  const getAllUseresAdmin = async () => {
    try {
      const result = await getAllUsersAdminAPI()
      // console.log(result);
      setAllUsers(result.data);

    } catch (error) {
      console.log(error);

    }
  }
  console.log(users)

  useEffect(() => {
    getAllUseresAdmin()
  }, [])

  return (

    <>
      <div className="grid md:grid-cols-[1fr_4fr] bg-gray-100 h-screen ">
        <div>
          <AdminSidebar />
        </div>
        <div className="me-10 bg-gray-100">
          <h1 className="text-3xl font-bold text-blue-900 my-6">
            Manage Users
          </h1>
          {/*  */}
          {/* TOP STATS ROW */}
          {/* <div className="flex gap-3 mt-5"> */}
          <div className="mt-5">
            {/* Total Reports */}
            <div className=" bg-white shadow p-5 rounded-xl border w-fit">
              <div className="flex items-center gap-2">
                <FaUsers className="text-blue-800 text-xl" />
                <h1 className="font-semibold text-gray-700">No of Users</h1>
              </div>
              <h1 className="text-3xl font-bold text-blue-900 mt-2">25</h1>
            </div>


            {/* Organizations */}
            {/* <div className="flex-1 bg-white shadow p-5 rounded-xl border">
              <div className="flex items-center gap-2">
                <FaUser className="text-green-700 text-xl" />
                <h1 className="font-semibold text-gray-700">Active</h1>
              </div>
              <h1 className="text-3xl font-bold text-green-700 mt-2">10</h1>
            </div> */}

            {/* Users */}
            {/* <div className="flex-1 bg-white shadow p-5 rounded-xl border">
              <div className="flex items-center gap-2">
                <FaUserSlash className="text-red-600 text-xl" />
                <h1 className="font-semibold text-gray-700">Inactive</h1>
              </div>
              <h1 className="text-3xl font-bold text-red-600 mt-2">50</h1>
            </div> */}

            {/* Pending Reports */}
            {/* <div className="flex-1 bg-white shadow p-5 rounded-xl border">
              <div className="flex items-center gap-2">
                <FaHourglassStart className="text-yellow-500 text-xl" />
                <h1 className="font-semibold text-gray-700">Task on Progress</h1>
              </div>
              <h1 className="text-3xl font-bold text-yellow-600 mt-2">5</h1>
            </div> */}
          </div>

          {/*  */}
          <div className="bg-white p-6 rounded-xl shadow-md border mt-6">


            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">

                {/* TABLE HEAD */}
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 border-b">User</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 border-b">Name</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 border-b">Email</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 border-b">Status</th>
                    <th className="px-6 py-3 text-center text-sm font-semibold text-gray-700 border-b">Actions</th>
                  </tr>
                </thead>

                {/* TABLE BODY */}
                <tbody className="divide-y divide-gray-200">

                  {/* ROW 1 */}
                  {users?.length > 0 ?
                    users.map((item, index) => (
                      <tr key={index}>
                        <td className="px-6 py-4 flex items-center gap-3">
                          <FaUserCircle className="text-3xl text-gray-500" />
                        </td>

                        <td className="px-6 py-4 font-semibold text-gray-800">{item?.username}</td>
                        <td className="px-6 py-4 text-gray-700">{item?.email}</td>



                        <td className="px-6 py-4">
                          <span className="bg-green-100 text-green-700 px-3 py-1 text-xs rounded-full font-semibold">
                            Active
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
                    <h1>No Users Found</h1>
                  }

                  {/* ROW 2 */}
                  <tr>
                    <td className="px-6 py-4 flex items-center gap-3">
                      <FaUserCircle className="text-3xl text-gray-500" />
                    </td>

                    <td className="px-6 py-4 font-semibold text-gray-800">Sneha Nair</td>
                    <td className="px-6 py-4 text-gray-700">sneha.nair@example.com</td>


                    <td className="px-6 py-4">
                      <span className="bg-green-100 text-green-700 px-3 py-1 text-xs rounded-full font-semibold">
                        Active
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
