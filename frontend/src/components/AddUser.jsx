import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function AddUser() {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const history = useNavigate()

    const addUser = async (e) => {
        e.preventDefault()
    
        const user = await fetch('http://localhost:8000/api/register', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            username,
            email,
            password
          })
        })
    
        await history('/')
      }

  return (
    <div className='dashboard-div'>
        <div className='table-div'>
            <h1>Add User</h1>
        </div>
        <div className='form-contain' >
            <form className='add-user-form' onSubmit={addUser}>
                <h2>Add New User Here</h2>
                <input className='add-user-input' type="text" name='username' placeholder='username'
                onChange={e=>setUsername(e.target.value)}
                />
                <input className='add-user-input' type="email" name='email' placeholder='email'
                onChange={e=>setEmail(e.target.value)}
                />
                <input className='add-user-input' type="password" name='password' placeholder='password'
                onChange={e=>setPassword(e.target.value)}
                />
                <input className='add-user-button' type="submit" value='Add User'/>
            </form>
        </div>
    </div>
  )
}

export default AddUser