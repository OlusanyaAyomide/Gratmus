import React,{useEffect} from 'react'
import { toggleAnimation,toggleCenter } from '@/utils/animation'
import { motion,useAnimation } from 'framer-motion'
import { useAppDispatch, useAppSelector } from '@/hooks/reduxhooks'
import { layOutActions } from '@/store/layoutSlice'

interface ToggleInterface{
  md?:boolean
  onClick:()=>void
  isActive:boolean
}

export default function ToggleButton({md=false,onClick,isActive}:ToggleInterface){
    const dispatch = useAppDispatch()
    const control = useAnimation()
    const handleChange =()=>{
      onClick()
  }

  useEffect(()=>{
    if(isActive){control.start("animate")}
    else{
      control.start("animateback")}
      
  },[isActive])

  return (
    <button className={`flex ${md?"lg:hidden":"md:hidden"} ml-6 flex-col justify-between h-[24px] w-[30px] cursor-pointer`} onClick={handleChange}>
    <motion.span className='toggler' variants={toggleAnimation(1)} initial="initial" animate={control}></motion.span>
    <motion.span className='toggler' variants={toggleCenter()} initial="initial" animate={control}></motion.span>
    <motion.span className='toggler' variants={toggleAnimation(3)} initial="initial" animate={control}></motion.span>
</button>
  )
}
