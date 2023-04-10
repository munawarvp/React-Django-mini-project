import React from 'react'
import Navbar from '../components/Navbar'
import AdminSidebar from '../components/AdminSidebar'
import AddUser from '../components/AddUser'

function AddUserPage() {
  return (
    <>
        <Navbar/>
        <div style={{display:'flex'}}>
            <AdminSidebar/>
            <AddUser/>
        </div>
    </>
  )
}

export default AddUserPage