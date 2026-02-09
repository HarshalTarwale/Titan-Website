import React from 'react'
import Heading3 from '../Heading3'
import WatchCatalog from '../Watchcatelog'
import Footer from '../Footer'

const Watchs = () => {
  return (
    <div className='w-full relative pt-[10vh] mt-[15vh]'>
        {/* Background EDGE Heading - Similar to Footer TITAN style */}
        <div className='absolute top-0 left-0 right-0 flex justify-center opacity-50 z-0'>
          <Heading3 text="EDGE" />
        </div>
        
        {/* Watch Catalog - Positioned over half of EDGE text */}
        <div className='relative z-10 mt-[10vh]'>
          <WatchCatalog />
        </div>
        
      
    </div>
  )
}

export default Watchs
