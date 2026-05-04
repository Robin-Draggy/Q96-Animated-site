import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'
import { useLocation } from 'react-router-dom'

const StairLoading = ({ children }) => {
    const currentPath = useLocation().pathname;
    const StairRef = useRef(null)
    const pageRef = useRef(null)

    useGSAP(function(){
        // Kill any ongoing animations
        gsap.killTweensOf(StairRef.current);
        gsap.killTweensOf(pageRef.current);
        gsap.killTweensOf(".stair");
        
        // RESET all states before starting new animation
        gsap.set(StairRef.current, { 
            autoAlpha: 1,
            display: 'block'
        })
        
        gsap.set(".stair", { 
            height: "100%",  // Reset to full height
            y: "0%"         // Reset position
        })
        
        gsap.set(pageRef.current, { 
            scale: 1.2, 
            opacity: 0 
        })
        
        // Start animation
        const tl = gsap.timeline();
        
        // Stairs drop down (reveal black screen)
        tl.from(".stair", {
            height: 0,
            duration: 0.6,
            stagger: {
                amount: 0.3
            },
            ease: "power2.inOut"
        }, 0)
        
        // Stairs go up
        tl.to(".stair", {
            y: "-100%",
            duration: 0.6,
            stagger: {
                amount: 0.3
            },
            ease: "power2.inOut"
        }, "+=0.2")
        
        // Hide stairs container
        tl.set(StairRef.current, { 
            autoAlpha: 0
        }, "-=0.3")
        
        // Animate page content from scale 1.2 to 1
        tl.to(pageRef.current, {
            scale: 1,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out"
        }, "-=0.4")
        
    }, [currentPath])
    
    return (
        <div>
            {/* Stair Loader */}
            <div ref={StairRef} className='h-screen w-full fixed z-50 top-0 left-0'>
                <div className='flex h-full w-full'>
                    <div className='h-full w-1/5 bg-black stair'></div>
                    <div className='h-full w-1/5 bg-black stair'></div>
                    <div className='h-full w-1/5 bg-black stair'></div>
                    <div className='h-full w-1/5 bg-black stair'></div>
                    <div className='h-full w-1/5 bg-black stair'></div>
                </div>
            </div>
            
            {/* Page Content */}
            <div ref={pageRef}>
                {children}
            </div>
        </div>
    )
}

export default StairLoading