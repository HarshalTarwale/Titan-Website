import React from 'react'
import Navbar from '../Components/Navbar'
import Video from '../Components/Video'
import Heading3 from '../Components/Heading3'
import WatchCatalog from '../Components/Watchcatelog'

const Edge = () => {
  return (
    <div className='bg-black w-full min-h-[100vh]'>
        {/* Navbar */}
        <Navbar/>

        {/* Videos */}
        <Video 
          src={`${import.meta.env.BASE_URL}public/Edge/Edge video.mp4`}
        />

        {/* Edge Catalog Section with overlayed heading */}
        <div className='relative w-full mt-[15vh] mb-[15vh]'>
          {/* Edge Heading - Absolute positioned behind cards */}
          <div className='absolute top-0 left-0 right-0 z-0'>
            <Heading3 text="EDGE" />
          </div>

          {/* Watch Catalog - Positioned over heading */}
          <div className='relative z-10 text-white mt-[12vh]'>
            <WatchCatalog />
          </div>
        </div>
      
    </div>
  )
}

export default Edge
