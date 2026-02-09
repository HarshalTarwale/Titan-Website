import React from 'react'
import Heading3 from '../Heading3'
import WatchCatalog from '../Watchcatelog'
import Footer from '../Footer'

const Watchs = () => {
  return (
    <div className='w-full relative mt-[30vh]'>
        <div className='flex justify-center absolute top-0 left-1/2 -translate-x-1/2'><Heading3 text="EDGE" /></div>
        <div><WatchCatalog /></div>
        
      
    </div>
  )
}

export default Watchs
