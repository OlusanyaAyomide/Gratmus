import React from 'react'
import {RiLiveFill} from "react-icons/ri"
import {HiHashtag,HiOutlinePresentationChartLine} from "react-icons/hi"
import {BiArrowToRight,} from "react-icons/bi"
import {MdLibraryMusic} from "react-icons/md"
import { BsBook, BsCameraFill,BsCartDashFill } from 'react-icons/bs'

interface ButtonInterfcae{
  className:string
  icon:JSX.Element
  onClick:()=>void
}
export default function ChangeInterest() {
  const Buttons=({className,icon,onClick}:ButtonInterfcae)=>{
    return <div className={`w-[42px] mx-2 sm:mx-3 border-2  h-[42px] flex justify-center items-center rounded-full ${className}`}>
      <span className='text-2xl'>{icon}</span>
    </div>
    
  }
  return (
    <div className='mt-2  items-center px-1 py-2 flex border rounded-[6px] border-grat-gray/50 justify-between'>
      <span className='text-grat-gray'>Change Interest</span>
      <div className='flex'>
        <Buttons icon={<BsCameraFill/>} className='border-[#2E52D7]' onClick={()=>{}}/>
        <Buttons icon={<BsBook/>} className='border-[#F22128]' onClick={()=>{}}/>
        <Buttons icon={<HiOutlinePresentationChartLine/>} className='border-[#1091F4]' onClick={()=>{}}/>
      </div>
    </div>
  )
}
