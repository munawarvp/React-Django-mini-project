import React from 'react'
import Navbar from '../components/Navbar'
import AdminSidebar from '../components/AdminSidebar'
import AdminDashboard from '../components/AdminDashboard'

function AdminPanelPage() {
  return (
    <div>
        <Navbar/>
        <div style={{display:'flex'}}>
          <AdminSidebar/>
          <AdminDashboard/>
        </div>
        
    </div>
  )
}

export default AdminPanelPage