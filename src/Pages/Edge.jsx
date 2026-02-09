import React from 'react'
import Navbar from '../Components/Navbar'
import Video from '../Components/Video'

const Edge = () => {
  return (
    <div className='w-full min-h-[100vh]'>
        {/* Navbar */}
        <Navbar/>

        {/* Videos */}
        <Video 
          src={`${import.meta.env.BASE_URL}public/Edge/Edge video.mp4`}
        />


      
    </div>
  )
}

export default Edge
