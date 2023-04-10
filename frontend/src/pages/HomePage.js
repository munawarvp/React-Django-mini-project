import React from 'react'
import Navbar from '../components/Navbar'
import { Toaster } from 'react-hot-toast'
import HomeComponent from '../components/HomeComponent'

function HomePage() {
  return (
    <div>
        <Navbar/>
        <Toaster position='top-center' reverseOrder='false' ></Toaster>
        <HomeComponent/>
    </div>
  )
}

export default HomePage