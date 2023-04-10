import { Link, useHistory, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { loginUser} from '../redux/AuthContext'
import './LoginPage.css'
import { useEffect } from 'react'
import login from '../helpers/auth';
import { updateAuthToken,updateUser } from '../redux/AuthContext';
import jwt_decode from "jwt-decode"
import { getLocal } from "../helpers/auth";
import { Toaster } from 'react-hot-toast';

function LoginPage() {
  console.log('s');
  const history = useNavigate()
  const {user,authToken} = useSelector((state) => state.auth);
  const dispatch= useDispatch();
  const response = getLocal();
  
  useEffect(()=>{
    console.log(response);
    if (response) {
      history('/')
    }
  })


  const handleSubmit = async(e)=> {
    e.preventDefault()
    const response = await login(e);
    // if (response) {
    //   history('/')
    // }
    const decoded = jwt_decode(response.access)
    dispatch(updateUser(decoded));
    dispatch(updateAuthToken(response))
  }
  
  return (
    <div className='main-div'>
      <Toaster position='top-center' reverseOrder='false' ></Toaster>
      <div className='login-content'>
        <h1 className='login-text'>Login</h1>
        <p>Please Enter Your Login Details</p>
        <form className='login-input'onSubmit={handleSubmit} >
          <input className='input-field' type="email" name='username' placeholder='email'/>
          <input className='input-field' type="password" name='password' placeholder='password'/>
          <input className='login-btn' type="submit" value='LOGIN' />
          <div className='signup-navi'>
            <p>Not yet registered..?</p>
            <p><Link className='lo-sign' to='/signup'>SignUp</Link></p>
          </div>
        </form>
      </div>
        
    </div>
  )
}

export default LoginPage