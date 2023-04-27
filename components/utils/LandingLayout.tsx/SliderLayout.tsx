import React from 'react'
import { motion } from 'framer-motion'

const slider ={
  initial:{
    x:"50vw",
    opacity:0.5,
  },
  animate:{
    x:"0",
    opacity:1,
    transition:{
      duration:0.3,
   
    },
  },
  exit:{
    x:"-50vw",
    opacity:0.5,
    transition:{
      duration:0.2
    }
  }
}
export default function SliderLayout({children}:{children:React.ReactNode}) {
  return (
    <div className='overflow-hidden'>
      <motion.section initial="initial" animate="animate" exit="exit" variants={slider}>
        {children}
    </motion.section>   
    </div>

  )
}
