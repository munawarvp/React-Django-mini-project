import React, { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { Toaster } from 'react-hot-toast';
import { toast } from "react-hot-toast";

import './LoginPage.js'

function SignupPage() {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const history = useNavigate()

  const signupSubmit = async (e) => {
    e.preventDefault()

    const response = await fetch('http://localhost:8000/api/register', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        username,
        email,
        password
      })
    })

    // const content = await response.json()
    console.log(response);
    if(response.status === 400){
      toast.error('Enter some details')
      await history('/signup')
    }else{
      await history('/login')
    }    
  }

  return (
    <div className='main-div-signup'>
      <Toaster position='top-center' reverseOrder='false' ></Toaster>
      <div className='login-content'>
        <h1 className='login-text'>SignUp</h1>
        <p>Please Enter Your SignUp Details</p>
        <form className='login-input' onSubmit={signupSubmit} >
          <input className='input-field' type="text" name='username' placeholder='username'
            onChange={e => setUsername(e.target.value)}
          />
          <input className='input-field' type="email" name='email' placeholder='email'
            onChange={e => setEmail(e.target.value)}
          />
          <input className='input-field' type="password" name='password' placeholder='password'
            onChange={e => setPassword(e.target.value)}
          />
          <input className='login-btn' type="submit" value='SIGNUP' />
          <div className='signup-navi'>
            <p>Alredy a member..?</p>
            <p><Link className='lo-sign' to='/login'>Login</Link></p>
          </div>
        </form>
      </div>
        
    </div>
  )
}

export default SignupPage