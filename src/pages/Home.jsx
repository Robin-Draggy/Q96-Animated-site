import React from 'react'
import HeroVideo from '../components/home/HeroVideo'
import HeroMainText from '../components/home/HeroMainText'
import HeroBottomText from '../components/home/HeroBottomText'

const Home = () => {
  return (
    <div className="text-white">
        <div className='h-screen w-full fixed'>
            <HeroVideo />
        </div>
        <div className='h-screen w-full relative flex flex-col items-center justify-between'>
            <HeroMainText />
            <HeroBottomText />
        </div>
    </div>
  )
}

export default Home


                                      