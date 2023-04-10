import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function UpdateUser() {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const history = useNavigate()

    const id = useParams();
    // console.log('suer id',id);
    const [singleUser, setUser] = useState({
        username: '',
        email: ''
    })
    useEffect(()=>{
        async function getUser(){
            const user = await axios.get(`http://localhost:8000/api/user-update/${id.user_id}/`)
            // console.log(user.data);
            setUser(user.data)
        }
        getUser();
        
    },[])
    // console.log(singleUser);
    const userUpdateForm = async (e)=>{
        e.preventDefault()
        
        const response = await fetch(`http://localhost:8000/api/user-update-form/${id.user_id}/`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                username,
                email,
                password
            })
        }).then(history('/'))

        
    }
  return (
    <div className='dashboard-div'>
        <div className='table-div'>
            <h1>Update User List </h1>
        </div>
        <div className='form-contain' >
            <form className='add-user-form' onSubmit={userUpdateForm}>
                <h2>Update User Here</h2>
                <input className='add-user-input' type="text" name='username' placeholder='username' defaultValue={singleUser.username}
                onChange={e=>setUsername(e.target.value)}
                />
                {/* value={singleUser.username} value={singleUser.email} */}
                <input className='add-user-input' type="email" name='email' placeholder='email' defaultValue={singleUser.email}
                onChange={e=>setEmail(e.target.value)}
                />
                <input className='add-user-input' type="password" name='password' placeholder='password'
                onChange={e=>setPassword(e.target.value)}
                />
                <input className='add-user-button' type="submit" value='Update'/>
            </form>
        </div>
    </div>
  )
}

export default UpdateUser