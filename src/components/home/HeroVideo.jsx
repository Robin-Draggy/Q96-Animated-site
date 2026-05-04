import React from 'react'

const HeroVideo = () => {
  return (
    <div>
        <video className='h-full w-full object-cover' autoPlay loop muted src="../../public/video.mp4"></video>
    </div>
  )
}

export default HeroVideo