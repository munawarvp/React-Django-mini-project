import { createSlice } from "@reduxjs/toolkit";
import jwt_decode from "jwt-decode"
import { useNavigate } from 'react-router-dom'

const INITIAL_STATE = {
    user: null,
    authToken: null,
    count: 0
}

// let history = useNavigate()

const authSlice = createSlice({
    name: "auth",
    initialState: INITIAL_STATE,
    reducers: {
        change: (state)=> {
            state.count = 1;
            
        },
        loginUser: async (state, action) => {
            // console.log(action.payload.target.username.value);
            //start
            // let response = await fetch('http://localhost:8000/api/token/', {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type':'application/json'
            //     },
            //     body: JSON.stringify({'username': action.payload.target.username.value, 'password': action.payload.target.password.value})
            // })

            
            // let data = await response.json()
            // let sample = jwt_decode(data.access)
            
            // if(response.status === 200){
            //     state.authToken = data
            //     state.user = jwt_decode(data.access)
            //     localStorage.setItem('authToken', JSON.stringify(data))
                
            //     // console.log(state.user);
            // }else{
            //     alert('something wrong')
            // }
            //end
            // .then((response)=>response.json()).then((data)=>{
            //     console.log(data);
            // })
            
        },
        updateAuthToken:(state,action)=>{
            state.authToken = action.payload;
        },
        updateUser:(state,action)=>{
            state.user = action.payload;
        }
    }
})

export const { loginUser, change,updateAuthToken,updateUser } = authSlice.actions

export default authSlice.reducer