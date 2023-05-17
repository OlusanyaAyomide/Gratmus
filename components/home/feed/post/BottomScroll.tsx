import React,{useRef, useState} from 'react'
import { BsCameraFill,BsCartDashFill } from 'react-icons/bs'
import {  FaVideo } from 'react-icons/fa'
import {RiLiveFill} from "react-icons/ri"
import {HiHashtag,HiOutlinePresentationChartLine} from "react-icons/hi"
import {BiArrowToRight} from "react-icons/bi"
import {MdLibraryMusic} from "react-icons/md"
import { basestate, postInterface } from './CreatePost'

interface ButtonInterfcae{
  className:string
  icon:JSX.Element
  text:string
  onClick?:()=>void
  
}

export interface PostedInterface{
  setpostStatus:React.Dispatch<React.SetStateAction<postInterface>>
  postStatus:postInterface
}
export default function BottomScroll({setpostStatus,postStatus}:PostedInterface) {
  const ref = useRef<HTMLDivElement>(null)
  const [isScrolled,setIsScrolled] = useState(false)
  const handleScroll = ()=>{
    console.log("heree")
    ref.current?.scrollTo({left:isScrolled?0:1000,behavior:"smooth"})
    setIsScrolled((prev=>!prev))
  }
  const Buttons=({className,icon,text,onClick}:ButtonInterfcae)=>{
    return<div className='w-[20%]  sm:pr-4'>
      <div className=' min-w-[90px]  sm:w-[100px] bg-transparent rounded-md px-1 flex justify-center items-center h-[60px] sm:h-[70px] cursor-pointer'>
        <div onClick={onClick} className='curosor-pointer  bg-grat-white h-[60px] rounded-md sm:h-[70px] px-2 sm:px-4 flex items-center justify-center'>
          <button className={`p-2 rounded-full border-[3px] ${className}`}>
           <span className='text-xl sm:text-2xl'>{icon}</span>
        </button>
      </div>
      </div>
      <h1 className="text-[11px] mt-2 flex whitespace-nowrap text-xs  justify-center text-center">{text}</h1>
   </div> 
    
  }
  return (
    <div className='overflow-hidden '>
      <div ref={ref} className='flex overflow-auto pop-scroll explore  mt-8' >
        <Buttons text="Camera" onClick={()=>{
          setpostStatus((prev=>{return{...basestate,photos:true}}))
        }} className='border-[#47A6F0]' icon={<BsCameraFill/>}/>
        <Buttons onClick={()=>{
          setpostStatus((prev=>{return{...basestate,videos:true}}))
        }} text="Video/Reel" className='border-grat-green' icon={<FaVideo/>}/>
        <Buttons text="Live Event" className='border-[#EF3E45]' icon={<RiLiveFill/>}/>
        <Buttons text="Trending" className='border-grat-green' icon={<HiHashtag/>}/>
        <Buttons onClick={handleScroll} text={isScrolled?"Back":"More"} className={`border-[#9659E9] transition-all duration-300 ${isScrolled?"rotate-180":""}`} icon={<BiArrowToRight/>}/>
        <Buttons text="Presentation" className='border-[#47A6F0]'
          icon={<HiOutlinePresentationChartLine/>}/>
        <Buttons text="Post Market" className='border-grat-green' icon={<BsCartDashFill/>}/>
        <Buttons text="Post Song" className='border-[#EF3E45]' icon={<MdLibraryMusic/>}/>
    </div>
    </div   >

  )
}
