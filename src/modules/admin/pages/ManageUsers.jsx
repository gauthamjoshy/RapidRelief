import React from "react";
import AdminSidebar from "../components/AdminSideBar";
import { FaUser, FaUsers, FaUserSlash } from "react-icons/fa6";
import { FaUserCircle } from "react-icons/fa";


function ManageOrganizations() {
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
          <div className="flex gap-3 mt-5">
            {/* Total Reports */}
            <div className="flex-1 bg-white shadow p-5 rounded-xl border">
              <div className="flex items-center gap-2">
                <FaUsers className="text-blue-800 text-xl" />
                <h1 className="font-semibold text-gray-700">No of Users</h1>
              </div>
              <h1 className="text-3xl font-bold text-blue-900 mt-2">25</h1>
            </div>


            {/* Organizations */}
            <div className="flex-1 bg-white shadow p-5 rounded-xl border">
              <div className="flex items-center gap-2">
                <FaUser className="text-green-700 text-xl" />
                <h1 className="font-semibold text-gray-700">Active</h1>
              </div>
              <h1 className="text-3xl font-bold text-green-700 mt-2">10</h1>
            </div>

            {/* Users */}
            <div className="flex-1 bg-white shadow p-5 rounded-xl border">
              <div className="flex items-center gap-2">
                <FaUserSlash className="text-red-600 text-xl" />
                <h1 className="font-semibold text-gray-700">Inactive</h1>
              </div>
              <h1 className="text-3xl font-bold text-red-600 mt-2">50</h1>
            </div>

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
                  <tr>
                    <td className="px-6 py-4 flex items-center gap-3">
                      <FaUserCircle className="text-3xl text-gray-500" />
                    </td>

                    <td className="px-6 py-4 font-semibold text-gray-800">Arjun Kumar</td>
                    <td className="px-6 py-4 text-gray-700">arjun.kumar@example.com</td>

                    

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

                  {/* ROW 3 */}
                  <tr>
                    <td className="px-6 py-4 flex items-center gap-3">
                      <FaUserCircle className="text-3xl text-gray-500" />
                    </td>

                    <td className="px-6 py-4 font-semibold text-gray-800">Vishnu Menon</td>
                    <td className="px-6 py-4 text-gray-700">vishnu.menon@example.com</td>


                    <td className="px-6 py-4">
                      <span className="bg-yellow-100 text-yelow-700 px-3 py-1 text-xs rounded-full font-semibold">
                        Inactive
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
