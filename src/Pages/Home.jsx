import React from 'react'
import Navbar from '../Components/Navbar.jsx'
import Heading1 from '../Components/Heading1.jsx'
import Video from '../Components/Video.jsx'
import HomeGrid from '../Components/Home Components/HomeGrid.jsx'
import NewArrival from '../Components/Home Components/NewArrival.jsx'
import WatchCard from '../Components/WatchCard.jsx'
import BestSeller from '../Components/Home Components/BestSeller.jsx'


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

        {/* New Arrival Section */}
        <div className='NewArrival text-white mt-[30vh]'>
             <NewArrival />
        </div>

        {/* Best Sellers Section */}
        <BestSeller />
      
    </div>
  )
}

export default Home
