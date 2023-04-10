import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AiOutlineHome } from 'react-icons/ai'
import { BsPersonFillAdd } from 'react-icons/bs'
import { BiNote } from 'react-icons/bi'
import { SlLogout } from 'react-icons/sl'
import { IoIosSettings } from 'react-icons/io'
import './AdminSidebar.css'

function AdminSidebar() {
  const history = useNavigate()
  const logout = ()=>{
    localStorage.removeItem('authToken')
    history('/login')

  }
  return (
    <div className='main-sidebar'>
        <div className='top-items'>
            <Link to='/' className='sidebar-items-top'><p><AiOutlineHome/> Home</p></Link>
            <Link to='/add-user' className='sidebar-items-top'><p><BsPersonFillAdd/> Add User</p></Link>
            <Link to='/add-notes' className='sidebar-items-top'><p><BiNote/> Add Note</p></Link>
            <Link className='sidebar-items-top'><p><BiNote/> Notes</p></Link>
            <Link to='/' className='sidebar-items-top'><p><IoIosSettings/> Settings</p></Link>
        </div>
        <div className='top-items'>
            <p className='sidebar-items' onClick={logout}><SlLogout/> Logout</p>
        </div>
        

    </div>
  )
}

export default AdminSidebar