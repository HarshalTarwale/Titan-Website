import React from 'react'
import Navbar from '../Components/Navbar.jsx'


const Home = () => {
  return (
    <div className='bg-black min-h-screen w-full'>
        <Navbar/>
        <div className='h-video w-full flex justify-center pt-[12vh]'>
            <video className='h-[93vh] rounded-[25px]' src={`${import.meta.env.BASE_URL}public/Home/Presenting Titan Edge Mechanical.mp4`} autoPlay muted loop></video>
        </div>
        <div className='Explore text-white'>
            <div><h1 className='text-transparent border-white font-["Zen Dots"]'>Explore</h1></div>
        </div>
      
    </div>
  )
}

export default Home
