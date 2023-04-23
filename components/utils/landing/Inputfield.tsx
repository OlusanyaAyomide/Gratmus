import React from 'react'
import GratImg from '../GratImg'
import {FaAngleDown} from "react-icons/fa"
import { landingExporter } from '@/public/landing/image/landingExporter'

export default function Inputfield() {
  return (
    <div className='flex items-center mx-auto max-w-[774px]'>
    <div className='flex w-full bg-grat-offwhite items-center rounded-tl-[6px] rounded-bl-[6px]'>
      <div><div className='h-[24px] ml-2 sm:ml-8 w-[24px]'><GratImg src={landingExporter.lefticon}/></div></div>
      <input type="text" className='w-full outline-none bg-transparent pl-2 text-lg py-3 pr-4 lg:border-r-2 lg:border-white' placeholder='Search for new friends' />
      <div className='lg:flex text-lg font-[500] lg:ml-6 '>
        <span className='hidden lg:block mr-5'>Location</span>
        <button className='text-[24px] mr-1 sm:mx-2 text-grat-black font-light'><FaAngleDown/></button>
      </div>
    </div>
    <div>
    <button className='text-white px-6 sm:px-12 flex item-center h-[51px] bg-grat-green rounded-tr-[26px] rounded-br-[26px] active:bg-grat-green whitespace-nowrap active:text-white transition-all duration-300  hover:text-grat-green hover:bg-white sm:hover:px-[47px] hover:border hover:border-grat-green'>
      <span className='mt-[12px]'>Search</span>
    </button>
    </div>
  </div>
  )
}
