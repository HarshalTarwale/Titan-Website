import React from 'react'
import Navbar from '../Components/Navbar'
import Video from '../Components/Video'

const Nebula = () => {
  return (
    <div className='w-full min-h-screen'>
      {/* Navbar */}
      <Navbar />

      {/* video */}
      <Video
        src={`${import.meta.env.BASE_URL}public/Nebula/Hero-section-video.mp4`}/>


    </div>
  )
}

export default Nebula
