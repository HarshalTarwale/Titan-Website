import React from 'react'
import Navbar from '../Components/Navbar.jsx'
import Button1 from '../Components/Button1.jsx'
import Watchs from '../Components/Smart Components/Watchs.jsx'

const AllProducts = () => {
  return (
    <div className='bg-black min-h-screen w-full'>
      <Navbar/>
      <div className='Buttons w-full flex justify-center gap-[4vh] mt-[15vh] pt-[3vh] text-white '>
        <Button1 text="Smart" />
        <Button1 text="Raga" />
        <Button1 text="Nebula" />
        <Button1 text="Xylys" />
        <Button1 text="Fastract" />
      </div>

      <Watchs />
      
    </div>
  )
}

export default AllProducts
