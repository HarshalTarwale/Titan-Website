import React from 'react'
import Button1 from '../Button1'

const LoginTab = () => {
  return (
    <div className='mt-[20vh] flex w-full justify-center text-white'>
        <div className='bg-gray-500 w-[60%] rounded-[25px] py-[4vh] zen'>
            <div className='w-full flex justify-center text-[3vh]'><h1>LOGIN FOR THE BEST EXPERIENCE</h1></div>
            <div className='button1 w-full flex justify-center gap-[2vh]'>
                <Button1 text="Login" />
            </div>
        </div>
      
    </div>
  )
}

export default LoginTab
