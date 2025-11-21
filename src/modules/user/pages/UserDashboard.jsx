import React from 'react'
import UserSideBar from '../components/UserSideBar'
import UserNavbar from '../components/UserNavbar'
import Footer from '../../common/components/Footer'

function UserDashboard() {
  return (
    <>
      <UserNavbar/>
      <div className='grid md:grid-cols-2'>
        <div>
          <UserSideBar />
        </div>
        <div>
          <div className='pt-150'>

          </div>
        </div>
      </div>
      <Footer/>

    </>
  )
}

export default UserDashboard