import React,{useEffect} from 'react'
import { toggleAnimation,toggleCenter } from '@/utils/animation'
import { motion,useAnimation } from 'framer-motion'
import { useAppDispatch, useAppSelector } from '@/hooks/reduxhooks'
import { layOutActions } from '@/store/layoutSlice'



export default function ToggleButton() {
    const dispatch = useAppDispatch()
    const {navActive} = useAppSelector((state=>state.layout))
    const control = useAnimation()
    const handleChange =()=>{
    dispatch(layOutActions.setNav())
  }

  useEffect(()=>{
    if(navActive){control.start("animate")}
    else{
      control.start("animateback")}
      
  },[navActive])

  return (
    <button className='flex md:hidden ml-6 flex-col justify-between h-[24px] w-[30px] cursor-pointer' onClick={handleChange}>
    <motion.span className='toggler' variants={toggleAnimation(1)} initial="initial" animate={control}></motion.span>
    <motion.span className='toggler' variants={toggleCenter()} initial="initial" animate={control}></motion.span>
    <motion.span className='toggler' variants={toggleAnimation(3)} initial="initial" animate={control}></motion.span>
</button>
  )
}
