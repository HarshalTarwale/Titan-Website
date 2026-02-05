import React from 'react'

const Video = ({ 
  src, 
  autoPlay = true, 
  muted = true, 
  loop = true,
  className = '',
  controls = false,
  poster = ''
}) => {
  return (
    <div className='h-video w-full flex justify-center pt-[12vh]'>
      <video 
        className={`h-[93vh] rounded-[25px] ${className}`}
        src={src}
        autoPlay={autoPlay}
        muted={muted}
        loop={loop}
        controls={controls}
        poster={poster}
      />
    </div>
  )
}

export default Video
