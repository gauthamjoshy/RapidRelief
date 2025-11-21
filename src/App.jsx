import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './modules/common/pages/Home'
import Login from './modules/common/pages/Login'
import Register from './modules/common/pages/Register'
import UserDashboard from './modules/user/pages/UserDashboard'
import UserReportForm from './modules/user/pages/UserReportForm'
import UserReportStatus from './modules/user/pages/UserReportStatus'
import AdminDashboard from './modules/admin/pages/AdminDashboard'
import ApprovedReports from './modules/admin/pages/ApprovedReports'
import ManageOrganizations from './modules/admin/pages/ManageOrganizations'
import OrgDashboard from './modules/organization/pages/OrgDashboard'
import ViewReports from './modules/organization/pages/ViewReports'
import UpdateHelpStatus from './modules/organization/pages/UpdateHelpStatus'
import { useEffect, useState } from 'react'
import PreLoader from './modules/common/pages/PreLoader'
import ManageUsers from './modules/admin/pages/ManageUsers'
import UserMessages from './modules/admin/pages/UserMessages'
import OrgMessages from './modules/admin/pages/OrgMessages'

function App() {
  const [loader, setloader] = useState(true)
  useEffect(()=>{
    setTimeout(()=>{
      setloader(false)
    }, 1000)
  }, [])

  // states for login
  // const [adminLogin, setAdminLogin] = useState()
  // const [userRegister, setUserRegister] = useState()
  // const [userLogin, setUserLogin] = useState()
  // const [orgRegister, setOrgRegister] = useState()
  // const [orgLogin, setOrgLogin] = useState()
  




  return (
    <>

      <Routes>
        {/* common */}
        <Route path='/' element={loader? <PreLoader/>: <Home />} />

        {/* login */}
        <Route path='/admin-login' element={<Login adminLogin />} />
        <Route path='/user-login' element={<Login userLogin />} />
        <Route path='/org-login' element={<Login orgLogin />} />

        {/* register */}
        <Route path='/user-register' element={<Register />} />
        <Route path='/org-register' element={<Register orgRegister />} />


        {/* user */}
        <Route path='/user-dashboard' element={<UserDashboard />} />
        <Route path='/user-report' element={<UserReportForm />} />
        <Route path='/user-status' element={<UserReportStatus />} />


        {/* admin */}
        <Route path='/admin-dashboard' element={<AdminDashboard />} />
        <Route path='/admin-reports' element={<ApprovedReports />} />
        <Route path='/admin-organizatons' element={<ManageOrganizations />} />
        <Route path='/admin-users' element={<ManageUsers />} />
        <Route path='/admin-user-messages' element={<UserMessages />} />
        <Route path='/admin-org-messages' element={< OrgMessages/>} />


        {/* organization */}
        <Route path='/org-dashboard' element={<OrgDashboard />} />
        <Route path='/org-reports' element={<ViewReports />} />
        <Route path='/org-update' element={<UpdateHelpStatus />} />


      </Routes >

    </>
  )
}

export default App
