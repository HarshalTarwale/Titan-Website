import React from 'react'
import Heading1 from '../Heading1.jsx'

const NewArrival = () => {
  return (
    <div className='w-full flex justify-center px-[10vw] text-white mb-[30vh]'>
        <div className=' w-full '>
            <Heading1 text="New Arrivals" style={{ WebkitTextStroke: '0.5px white' }} />
            <div className='newcard-holder mt-[10vh]'>
                <div className='card h-[50vh] w-[40vh] rounded-[20px]'>
                   <img src="public\Home\Arrival images\OMEGA50 anniversary - Charles Helleu 1.jpg" alt=""  />
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default NewArrival
