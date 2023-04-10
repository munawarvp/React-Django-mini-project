import React from 'react'
import AdminSidebar from '../components/AdminSidebar'
import Navbar from '../components/Navbar'
import UpdateUser from '../components/UpdateUser'

function UpdateUserPage() {
  return (
    <div>
        <Navbar/>
        <div style={{display:"flex"}}>
            <AdminSidebar/>
            <UpdateUser/>
        </div>
    </div>
  )
}

export default UpdateUserPage