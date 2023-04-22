import { Typography } from '@/utils/landingK'
import React from 'react'
import GratImg from '../GratImg'
import { landingExporter } from '@/public/landing/image/landingExporter'

export default function BuildProfile() {
  return (
    <section className='cont bg-grat-green mt-16 flex flex-wrap overflow-hidden items-center'>
      <div className='w-full md:w-6/12 py-8 '>
      <h1 className='text-white font-sarabun mb-4 text-3xl md:text-4xl lg:text-[40px] leading-[56px]'>{Typography.profileText}</h1>  
      <p className='text-base font-[500]'>{Typography.ProfileTextsm}</p>
      <button className='block mx-auto rounded-sm bg-white mt-4 text-grat-green py-2 px-3'>Sign Up</button>
      </div>
      <div className='w-full mt-6 md:mt-0 md:w-6/12 relative h-[368px]'>
        <div className='h-[136px] w-[136px] absolute left-6  bottom-6 z-20'>
          <GratImg src={landingExporter.Profile1}/>
        </div>
        <div className='bottom-0 left-44 absolute z-20 w-[270px] h-[352px]'>
          <GratImg src={landingExporter.Profile2}/>
        </div>
        <div className='bottom-0 absolute left-20 w-[306px] z-10 h-[475px]'></div>
      </div>
      
    </section>
  )
}
