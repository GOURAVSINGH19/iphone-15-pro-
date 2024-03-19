import React , {useEffect, useState} from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import {heroVideo,smallHeroVideo} from '../utils/index'
function Hero() {
    const [VideoSrc, setVideoSrc] = useState(window.innerWidth < 760 ?smallHeroVideo : heroVideo)

    const handleVideoSrcset=()=>{
        if(window.innerWidth < 768){
            setVideoSrc(smallHeroVideo)
        }
        else{
            setVideoSrc(heroVideo)
        }
    }

    useEffect(()=>{
        window.addEventListener('resize',handleVideoSrcset)
        return ()=>{
            window.removeEventListener('resize',handleVideoSrcset)
        }
    },[])
    useGSAP(()=>{
        gsap.to('#hero', {
            duration: 1,
            opacity: 1,
            ease: 'power1.inOut',
            delay:2,
        }),
        gsap.to(('#cta'),{
            duration: 1,
            opacity: 1,
            translateY: 0,
            delay:2,
            y:-100
        })
    },[]);

  return (
    <section className='w-full nav-height bg-black relative'>
        <div className='h-5/6 w-full flex-center flex-col '>
            <p id="hero" className='hero-title '>iPhone 15 Pro</p>
            <div className='md:w-10/12 w-7/12 '>
                <video className=' pointer-events-none' autoPlay muted playsInline={true} key={VideoSrc}>
                    <source src={VideoSrc} type='video/mp4' className='video'/>
                </video>
            </div>
        </div>

        <div id='cta' className='flex flex-col items-center opacity-0 translate-y-10'>
            <a href="#hightlight" className='btn'>Buy</a>
            <p>From $199/month or $999</p>
        </div>
    </section>
  )
}

export default Hero