import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { HeroArray, HeroContainer, HeroImgContainer, chatAnimation } from '@/utils/animation'
import GratImg from '../GratImg'


export default function HeroView() {
  const [active,setActive] = useState({image1:0,image2:3})
  useEffect(()=>{
    const interval = setInterval(()=>{
      setActive(prev=>{
        if (prev.image1 < 2){
          return{image1:prev.image1+1,image2:prev.image2+1}
        }
        else{
         return{image1:0,image2:3} 
        }
      })
    }, 60000);
    return()=>{
      clearInterval(interval)
    }
  },[])
  return (
    <motion.div className='h-[347px] r w-[347px] bg-grat-green relative rounded-full' variants={HeroContainer} initial="initial" animate="animate">
      <motion.div variants={HeroImgContainer(true)} initial="initial" animate="animate" className='w-[70px] h-[70px] md:h-[94px] md:w-[94px] z-20 absolute -top-6 left-[138.5px] md:left-[126.5px] rounded-full'>
         <GratImg  src={HeroArray[active.image1]} />
      </motion.div>
      <motion.div variants={HeroImgContainer(true)} initial="initial" animate="animate" className='w-[70px] h-[70px] md:h-[94px] md:w-[94px] z-20 absolute -bottom-6 left-[138.5px]  md:left-[126.5px] rounded-full'>
         <GratImg src={HeroArray[active.image2]} />
      </motion.div>
      <motion.div variants={chatAnimation} initial="initial" animate="animate" className="flex absolute top-16 left-12 bg-white rounded-[8px] py-6 px-3 w-[204px]">
            <div>
            <div className='h-[34px] w-[34px] flex items-center mr-3'>
              <GratImg  src={HeroArray[active.image1]}  />
            </div>
            </div>
            <span className='text-[14px] font-[500] leading-4'>Hello How are you doing and how was your day</span>
        </motion.div>
        <motion.div variants={chatAnimation} initial="initial" animate="animate" className="flex absolute bottom-16 right-12 bg-white rounded-[8px] py-6 px-3 w-[204px]">
            <div>
            <div className='h-[34px] w-[34px] flex items-center mr-3'>
              <GratImg  src={HeroArray[active.image2]}  />
            </div>
            </div>
            <span className='text-[14px] font-[500] leading-4 transition-all duration-500'>Am good,what of you</span>
        </motion.div>
    </motion.div>
  )
}

