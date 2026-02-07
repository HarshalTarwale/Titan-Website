import React, { useEffect, useRef } from 'react'
import Heading1 from '../Heading1'
import WatchCard from '../WatchCard'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

const BestSeller = () => {
  // Refs for targeting animation elements
  const line1Ref = useRef(null)
  const line2Ref = useRef(null)

  useEffect(() => {
    // ========================================
    // 🎬 LINE 1 SCROLLTRIGGER ANIMATION
    // ========================================
    gsap.fromTo(
      line1Ref.current.children, // Target all child elements (WatchCards)
      {
        // 🔧 INITIAL STATE (before animation)
        opacity: 0,           // 🎨 EDIT: Starting opacity (0 = invisible, 1 = visible)
        y: 100,              // 🎨 EDIT: Starting Y position (pixels from final position)
        scale: 0.8,          // 🎨 EDIT: Starting scale (0.8 = 80% of original size)
      },
      {
        // 🔧 FINAL STATE (after animation)
        opacity: 1,          // 🎨 EDIT: Ending opacity
        y: 0,                // 🎨 EDIT: Ending Y position (0 = original position)
        scale: 1,            // 🎨 EDIT: Ending scale (1 = original size)
        duration: 1,         // 🎨 EDIT: Animation duration in seconds
        ease: 'power2.out',  // 🎨 EDIT: Easing function (power1/power2/power3/power4, elastic, back)
        scrollTrigger: {
          trigger: line1Ref.current,    // Element that triggers the animation
          start: 'top 80%',               // 🎨 EDIT: When animation starts (trigger top at viewport 80%)
          end: 'top 90%',              // 🎨 EDIT: When animation ends
          scrub: 3,                       // 🎨 EDIT: Smooth scrubbing (1-3 seconds, or true for instant, false to disable)
          toggleActions: 'play none none reverse', // 🎨 EDIT: onEnter onLeave onEnterBack onLeaveBack
          // markers: true,                // 🐛 DEBUG: Uncomment to see trigger markers
        },
      }
    )

    // ========================================
    // 🎬 LINE 2 SCROLLTRIGGER ANIMATION
    // ========================================
    gsap.fromTo(
      line2Ref.current.children, // Target all child elements (WatchCards)
      {
        // 🔧 INITIAL STATE (before animation)
        opacity: 0,           // 🎨 EDIT: Starting opacity
        y: 100,              // 🎨 EDIT: Starting Y position
        scale: 0.8,          // 🎨 EDIT: Starting scale
      },
      {
        // 🔧 FINAL STATE (after animation)
       opacity: 1,          // 🎨 EDIT: Ending opacity
        y: 0,                // 🎨 EDIT: Ending Y position (0 = original position)
        scale: 1,            // 🎨 EDIT: Ending scale (1 = original size)
        duration: 1,         // 🎨 EDIT: Animation duration in seconds
        ease: 'power2.out',  // 🎨 EDIT: Easing function (power1/power2/power3/power4, elastic, back)
        scrollTrigger: {
          trigger: line2Ref.current,    // Element that triggers the animation
          start: 'top 80%',               // 🎨 EDIT: When animation starts (trigger top at viewport 80%)
          end: 'top 90%',              // 🎨 EDIT: When animation ends
          scrub: 3,                       // 🎨 EDIT: Smooth scrubbing (1-3 seconds, or true for instant, false to disable)
          toggleActions: 'play none none reverse', // 🎨 EDIT: onEnter onLeave onEnterBack onLeaveBack
          // markers: true,           // 🐛 DEBUG: Uncomment to see trigger markers
        },
      }
    )

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <div className=' w-full flex justify-center px-[12vw] mt-[20vh]'>
        <div className=' w-full'>
            <div className='flex w-full justify-center'><Heading1 text={'Best Sellers'}/></div>
            <div className='best-container w-full'>
                {/* 🎬 LINE 1 - Cards with stagger animation */}
                <div ref={line1Ref} className='line1 mt-[5vh] flex justify-center gap-[4vh] w-full'>
                    <WatchCard 
                        imageSrc={'public/Home/Best sellers/Vintage Charm Meets Modern Tech_ The Seiko Speedtimer SSC937P1 Review (Solar-Powered Chronograph) — MTR Watches 1.png'} 
                        title={'Titan Neon Analog Watch'} 
                        description={'Steel Strap watch for Men'} 
                        price={'₹ 1,995'} 
                        rating={'4.5'}
                    />
                    <WatchCard 
                        imageSrc={'public/Home/Best sellers/Rolex Sky Dweller 1.png'} 
                        title={'Titan Neon Analog Watch'} 
                        description={'Steel Strap watch for Men'} 
                        price={'₹ 1,995'} 
                        rating={'4.5'}
                    />
                    <WatchCard 
                        imageSrc={'public/Home/Best sellers/Poetry in motion 1.png'} 
                        title={'Titan Neon Analog Watch'} 
                        description={'Steel Strap watch for Men'} 
                        price={'₹ 1,995'} 
                        rating={'4.5'}
                    />
                    <WatchCard 
                        imageSrc={'public/Home/Best sellers/Premium Photo _ Man watch mockup without brand in flat photography 1.png'} 
                        title={'Titan Neon Analog Watch'} 
                        description={'Steel Strap watch for Men'} 
                        price={'₹ 1,995'} 
                        rating={'4.5'}
                    />
                </div>
                {/* 🎬 LINE 2 - Cards with stagger animation */}
                <div ref={line2Ref} className='line2 mt-[5vh] flex justify-center gap-[4vh] w-full'>
                    <WatchCard 
                        imageSrc={'public/Home/Best sellers/CITIZEN X PANTONE tsuyosa Automatic NJ0158-89Z 1.png'} 
                        title={'Titan Neon Analog Watch'} 
                        description={'Steel Strap watch for Men'} 
                        price={'₹ 1,995'} 
                        rating={'4.5'}
                    />
                    <WatchCard 
                        imageSrc={'public/Home/Best sellers/CITIZEN X PANTONE Tsuyosa Automatic NJ0158-89Y 1.png'} 
                        title={'Titan Neon Analog Watch'} 
                        description={'Steel Strap watch for Men'} 
                        price={'₹ 1,995'} 
                        rating={'4.5'}
                    />
                    <WatchCard 
                        imageSrc={'public/Home/Best sellers/CITIZEN X PANTONE tsuyosa Automatic NJ0158-89X 1.png'} 
                        title={'Titan Neon Analog Watch'} 
                        description={'Steel Strap watch for Men'} 
                        price={'₹ 1,995'} 
                        rating={'4.5'}
                    />
                    <WatchCard 
                        imageSrc={'public/Home/Best sellers/G-SHOCK CASIOAK FULL METAL TIFFANY 1.png'} 
                        title={'Titan Neon Analog Watch'} 
                        description={'Steel Strap watch for Men'} 
                        price={'₹ 1,995'} 
                        rating={'4.5'}
                    />
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default BestSeller
