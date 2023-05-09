import { AboutMeText } from '@/utils/Homek'
import React from 'react'
import {BsFillBagFill} from "react-icons/bs"
import Viewmore from '../utils/Viewmore'

export default function AboutMe() {
  return (
    <div className='mt-4 light-border px-2 sm:px-4 py-4'>
      <div className='flex items-center'>
        <span className="text-xl font-semibold">About</span>
        <button className='flex ml-4 items-center whitespace-nowrap bg-[#FFF6F0FF] text-[#FF832BFF] rounded-[14px] py-1 px-2 text-sm' >
          <span><BsFillBagFill/></span>
          <span className='ml-3'>Open to work</span>
        </button>
      </div>
       <Viewmore className='text-sm mt-4' text={AboutMeText} length={60} style='text-[#FF832BFF]  ml-2'/>
    </div>
  )
}
