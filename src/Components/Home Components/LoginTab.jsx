import React from 'react'
import Button1 from '../Buttons/Button1'

const LoginTab = () => {
  return (
    <div className='mt-[30vh] mb-[10vh] flex w-full justify-center text-white'>
        <div className='bg-transparent w-[60%] rounded-[25px] py-[4vh] border-[1px] zen'>
            <div className='w-full flex justify-center text-[3vh]'><h1>LOGIN FOR THE BEST EXPERIENCE</h1></div>
            <div className='button1 w-full flex justify-center gap-[2vh] mt-[3vh]'>
                <Button1 text="Login" to="/account" />
                <Button1 text="Create Account" to="/account" />
            </div>
        </div>
      
    </div>
  )
}

export default LoginTab
