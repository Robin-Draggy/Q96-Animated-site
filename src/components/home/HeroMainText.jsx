import React from 'react'
import HeroVideo from './HeroVideo'

const HeroMainText = () => {
  return (
    <div className='font-[lausanne300] pt-5 text-center'>
        <div className='flex items-center justify-center uppercase text-[9vw] leading-[8vw]'>
            L'étincelle
        </div>
        <div className='flex items-start justify-center uppercase text-[9vw] leading-[8vw]'>
            qui
            <div className='h-[7vw] w-[16vw] rounded-full overflow-hidden mb-8'>
                <HeroVideo />
            </div>
            génère
        </div>
        <div className='flex items-center justify-center uppercase text-[9vw] leading-[8vw]'>
            la créativité
        </div>
    </div>
  )
}

export default HeroMainText