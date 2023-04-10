import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './navbar.css'
import { useSelector } from 'react-redux';
import { getLocal } from '../helpers/auth';
import jwt_decode from "jwt-decode"

import { SlLogout } from 'react-icons/sl'
import { CgProfile } from 'react-icons/cg'


function Navbar() {
  const {username} = jwt_decode(getLocal())
  const history = useNavigate()
  const {user,count} = useSelector((state) => state.auth);
  const logout = ()=>{
    localStorage.removeItem('authToken')
    history('/login')

  }
  return (
    <div className='main-nav'>
        <Link className='nav-items' to='/'>Home</Link>
        <div className='nav-right'>
          {username && <p className='logout-text' onClick={logout}><SlLogout/> Logout</p>}
          <Link className='logout-text' to='user-profile'><p><CgProfile/> {username}</p></Link>
          
        </div>
        
    </div>
  )
}

export default Navbar