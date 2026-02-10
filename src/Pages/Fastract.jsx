import React from 'react'
import Navbar from '../Components/Navbar'
import Video from '../Components/Video'
import Watchs from '../Components/Fastract Components/Watchs'
import Footer from '../Components/Footer'

const Fastract = () => {
  return (
    <div className='w-full min-h-screen'>
      {/* Navbar */}
      <Navbar />

      {/* Video */}
      <Video 
        src={`${import.meta.env.BASE_URL}public/Fastract/Luxury Watch Ad.mp4`}
      />

      {/* Watches */}
      <Watchs />

      {/* Footer with custom heading */}
      <Footer headingText="FASTRACT" />
    </div>
  )
}

export default Fastract
