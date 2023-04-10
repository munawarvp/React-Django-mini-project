import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'
import {FaEdit} from 'react-icons/fa'
import {MdDeleteForever} from 'react-icons/md'
import { Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import { Toaster } from 'react-hot-toast';
import './AdminSidebar.css'


function AdminDashboard() {
    const [userList, setUserList] = useState([])

    useEffect(()=>{
        
        async function getUserList(){
            const response = await axios.get('http://localhost:8000/api/class-userlist/')
            // console.log(request.data.username);
            setUserList(response.data)
        }
        getUserList();
        
    },[])
    // console.log(userList);

    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                const user = axios.delete(`http://localhost:8000/api/user-delete/${id}/`).then(
                    async function getUserList(){
                        const request = await axios.get('http://localhost:8000/api/user-list/')
                        // console.log(request.data.username);
                        setUserList(request.data)
                    }
                )
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            }
          })
        }
     
    async function serachUser(keyword){
        const request = await axios.get(`http://localhost:8000/api/class-userlist/?search=${keyword}`)
        console.log(request.data);
        if (request.data.length === 0){
            toast.error('No users found')
        }
        setUserList(request.data)
    }
    
  return (
    <div className='dashboard-div'>
        <Toaster position='top-center' reverseOrder='false' ></Toaster>
        <div className='header-div'>
            <h1>Dashboard</h1>
            <input className='user-search' type="text" placeholder='Search User'
            onChange={e => serachUser(e.target.value)}
            />
        </div>
        <div className='table-div'>
            <h1>User List</h1>
            <table id="customers">
                <tr>
                    <th>ID</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th className='action-col'>Actions</th>
                </tr>
                {userList.map((user)=>(
                    <tr>
                        <td>{user.id}</td>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        <td className='action-col' style={{display:"flex"}}><Link className='action-text' to={`/update-user/`+user.id}><p className='edit'><FaEdit/> Edit</p></Link>
                        <p className='delete' onClick={()=>handleDelete(user.id)}><MdDeleteForever/> Delete</p></td>
                    </tr>
                ))}
                
            </table>
        </div>
        
    </div>
  )
}

export default AdminDashboard