import React from 'react'
import Navbar from '../Components/Navbar.jsx'
import Heading1 from '../Components/Heading1.jsx'
import Video from '../Components/Video.jsx'
import HomeGrid from '../Components/HomeGrid.jsx'


const Home = () => {
  return (
    <div className='bg-black min-h-screen w-full overflow-x-hidden'>
        <Navbar/>
        <Video 
          src={`${import.meta.env.BASE_URL}public/Home/Presenting Titan Edge Mechanical.mp4`}
        />
        
        {/* Explore Section */}
        <div className='Explore text-white mt-[30vh]'>
             <Heading1 text="Explore" style={{ WebkitTextStroke: '0.5px white' }} />
             <HomeGrid />
        </div>
      
    </div>
  )
}

export default Home
