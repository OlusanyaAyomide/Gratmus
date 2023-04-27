import React from 'react'
import GratImg from '../../GratImg'
import { homeResource } from '@/public/home/homeExporter'

export default function InputField() {
  return (
    <div className='  flex w-full md:max-w-[350px] lg:max-w-[450px] lg:w-full ml-2'>
        <input type="text"  placeholder='Search' className='outline-none border border-[#9095A0FF]  px-4 rounded-tl-[20px] rounded-bl-[20px] w-full sm:max-w-[380px] md:max-w-[291px] lg:max-w-[400px] xl:max-w-[291px]'/>
        <button className='h-[46px] bg-grat-green px-6 rounded-tr-[20px] rounded-br-[20px] flex items-center justify-center'>
          <GratImg src={homeResource.Search} className='h-[28px] w-[28px]'/>
        </button>
    </div>
  )
}
