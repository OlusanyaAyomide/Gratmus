import React from 'react'
import GratImg from '../utils/GratImg'
import { CompanyExporter } from '@/public/company/CompanyExporter'


export default function HeroImages() {
  return (
    <div className='hidden z-10 lg:block absolute w-[550px] right-0 h-full'>
      <div className='relative  w-full h-full'>
        <div className='absolute h-[326px] w-[200px] right-20'>
         <GratImg src={CompanyExporter.Bulb} className='h-[64px] w-[64px] absolute z-30 top-36 -right-[32px]'/>
          <GratImg src={CompanyExporter.Rectangle1} piority={true} className='z-10 absolute top-2' />
        </div>
        <div className='absolute left-0 bottom-0 z-10 h-[298px] w-[220px]'>
          <GratImg src={CompanyExporter.Man}/>
        </div>
      </div>
      <div className='absolute left-32 bottom-0 z-20 h-[272px] w-[200px]'>
          <GratImg src={CompanyExporter.HeroGirl}/>
       </div>
       <div className='absolute h-[179px] w-[149px]  -z-10 -left-5 -bottom-10'>
      <GratImg src={CompanyExporter.Rectangle3}/>
     </div>
  </div>
  )
}
