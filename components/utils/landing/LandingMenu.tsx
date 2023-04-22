import { navLinks } from '@/utils/landingK'
import React from 'react'
import GratImg from '../GratImg'
import { motion } from 'framer-motion'
import { landingAnimation,landingContAnimation } from '@/utils/animation'



export default function LandingMenu() {
  return (
    <motion.div variants={landingContAnimation} initial="initial" animate="animate" className='absolute top-[50px] md:hidden bg-white z-40 sm:top-[54px] left-0 py-4 w-full cont'>
        {navLinks.map((item,key)=>{
            return(
            <motion.div variants={landingAnimation}  className='flex items-center mb-4 font-[600] text-grat-black' key={key}>
              <div className='w-[22px] sm:h-[25px] sm:w-[25px] h-[22px]'>
              <GratImg src={item.image} className='h-full w-full'/>
              </div>
                
                <span className='ml-2'>{item.name}</span>
            </motion.div>
            )
        })}
     
    </motion.div>
  )
}
