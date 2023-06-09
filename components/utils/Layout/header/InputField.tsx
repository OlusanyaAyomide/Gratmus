import React from 'react'
import GratImg from '../../GratImg'
import { homeResource } from '@/public/home/homeExporter'

export default function InputField() {
  return (
    <div className='  flex w-full md:w-[600px] lg:max-w-[450px]  lg:w-full ml-2'>
        <input type="text"  placeholder='Search' className='outline-none border border-[#9095A0FF]  px-4 rounded-tl-[20px] rounded-bl-[20px] w-full sm:max-w-[380px] md:max-w-[600px] lg:max-w-[400px] xl:max-w-[291px]'/>
        <button className=' bg-grat-green px-4  py-[2px] rounded-tr-[20px] rounded-br-[20px] flex items-center justify-center'>
          <GratImg src={homeResource.Search} className='h-[36px] w-[36px]'/>
        </button>
    </div>
  )
}
