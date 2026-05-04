import React from "react"
import { Link } from "react-router-dom"

const HeroBottomText = () => {
  return (
    <div className='relative w-full '>
      {/* Paragraph - absolutely positioned on top-right of links */}
      <div className='absolute right-0 lg:right-20 bottom-28 lg:bottom-52'>
        <p className='text-xs lg:text-sm leading-relaxed text-justify w-64 lg:w-[17vw]' style={{ textIndent: '2rem' }}>
          K72 est une agence qui pense chaque action pour nourrir la marque. 
          Demain, dans 5 mois et dans 5 ans. On cherche la friction qui crée 
          l'étincelle pour générer de l'émotion. Pour assurer une relation 
          honnête, on est sans filtre, on dit ce qui doit être dit, 
          on fait ce qui doit être fait.
        </p>
      </div>

      {/* Links container */}
      <div className='flex items-center justify-center gap-2 lg:gap-4'>
        <div className="h-[5vw] w-[25vw] leading-none flex items-center justify-center rounded-full border-2 border-white hover:border-[#D3FD50]">
        <Link 
          to='/projects'
          className=' hover:text-[#D3FD50] 
                     flex items-center px-3 pt-1 lg:px-14 lg:h-44 
                     border-white rounded-full uppercase transition-all duration-300'
        >
          <span className='text-[4.5vw]'>Projects</span>
        </Link>
        </div>
        
        <div className="h-[5vw] w-[25vw] leading-none flex items-center justify-center rounded-full border-2 border-white hover:border-[#D3FD50]">
        <Link 
          to='/agency'
          className=' hover:text-[#D3FD50] 
                     flex items-center px-3 pt-1 lg:px-14 lg:h-44 
                     border-white rounded-full uppercase transition-all duration-300'
        >
          <span className='text-[4.5vw]'>agency</span>
        </Link>
        </div>
      </div>
    </div>
  )
}

export default HeroBottomText