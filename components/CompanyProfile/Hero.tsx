import React from 'react'
import HeroImages from './HeroImages'
import GratImg from '../utils/GratImg'
import { CompanyExporter } from '@/public/company/CompanyExporter'
import GratButton from '../utils/GratButton'
import { Herotext } from '@/utils/Homek'
import FollowButton from '../utils/FollowButton'

export default function Hero() {
  return (
   <section className='cont mt-12 pb-12'>
    <div className='bg-grat-green py-16  min-h-[280px] flex items-center overflow-hidden w-full relative  rounded-md'>
      <HeroImages/>
     <div className='lg:hidden absolute h-[179px] w-[149px] -right-20 -bottom-20'>
      <GratImg src={CompanyExporter.Rectangle3}/>
     </div>
     <div className='absolute w-[98px] h-[138px] -left-[40px] top-0'>
      <GratImg src={CompanyExporter.Rectangle2}/>
     </div>
     <div className='w-full md:w-[700px] xl:w-[900px] mt-2 py-2 relative z-20 md:pl-12 lg:pl-24'>
        <h1 className='font-sarabun px-6 font-semibold  text-white md:leading-[48px] text-2xl sm:text-3xl md:text-4xl xl:text-5xl'>Connect With right <span className='md:block'>applicants all over the Universe</span> </h1>
        <div className='flex flex-wrap  mt-6 px-6 justify-between max-w-[700px]'>
          <button className='text-sm my-1 px-4 py-[6px] bg-white text-grat-green rounded-[25px]'>Apply</button>
          <button className='text-sm my-1 px-4 py-[6px] bg-white text-grat-green rounded-[25px]'>Post Job</button>
          <button className='text-sm my-1 px-4 py-[6px] bg-white text-grat-green rounded-[25px]'>Meet great minds</button>
          <button className='text-sm my-1 px-4 py-[6px] bg-white text-grat-green rounded-[25px]'>Connections</button>
        </div>  
      </div>
    </div>
    <div className='mt-8  flex flex-wrap lg:flex-nowrap pl-2'>
      <div>
        <div className=' bg-white  relative md:-top-[97px] -top-[87px]  z-20 h-[110px]  p-[3px] w-[110px] md:h-[130px] md:w-[130px] rounded-full' >
          <div className='h-full w-full rounded-full bg-[#13D7E9FF] flex items-center justify-center'>
            <div className='w-[114px] h-[35px]'><GratImg src={CompanyExporter.Logo}/></div>
        </div>
    </div>
      </div>
    <p className='w-full -mt-20 lg:mt-0 lg:w-fit text-sm text-grat-light-text'>{Herotext}</p>
    <FollowButton text='Post A Job' className='lg:ml-6 mt-4 sm:-mt-2 lg:mt-0'/>
    </div>

 
   </section>
  )
}
