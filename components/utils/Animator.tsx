import React from 'react'
import {motion} from "framer-motion"

interface MotionInterface{
  x?:number
  y?:number
  opacity?:number
  rotate?:number
  duration?:number
  exit?:boolean
  hold?:boolean
}

interface AnimnatInterface extends MotionInterface {
  children:React.ReactNode,
  className?:string

}

const variants=({x,y,opacity,rotate,duration,exit}:MotionInterface)=>{
  return{
    initial:{
      x,y,opacity,rotate ,
      transition:{
        duration
      }
    },
    animate:{
      x:0,y:0,opacity:1,rotate:0,
      transition:{
        duration
      }
    },
    // exit:{
    //   x:0,
    //   transition:{
    //     duration:5
    //   }
    // }
    	

  }
}
const initialData={}

export default function Animator({children,x=0,y=0,opacity=1,rotate=0,duration=0.4,exit=false,className,hold=false}:AnimnatInterface) {
  
  return (
    <motion.div className={className?className:""} initial="initial" animate="animate" exit={exit?"initial":""} variants={!hold?variants({x,y,opacity,rotate,duration,exit}):variants({x:0,y:0,opacity:1,rotate:0,duration:0})}>
      {children}
    </motion.div>
  )
}
