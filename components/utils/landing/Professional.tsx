import React from 'react'
import GratImg from '../GratImg'
import { landingExporter } from '@/public/landing/image/landingExporter'
import {Typography} from "@/utils/landingK"
import GratButton from '../GratButton'
import Link from 'next/link'
import SectionHeader from '../sectionHeader'
 
export default function Professional() {
  return (
    <section className='mt-12'>
        <SectionHeader ptext='Best way to get target customers' text='Become Professional' src={landingExporter.Cv}/>
      <div className=' flex flex-wrap md:flex-nowrap py-24 items-center bg-grat-pink cont'>
        <div className='w-full'>
          <h1 className='massive-text font-[600] text-grat-black'>{Typography.profesionalText}</h1>
        </div>
        <div className='mt-6 flex justify-center md:mt-0 w-[500px]'>
          <div className='pb-2'><Link href={"/"}><GratButton text='Switch Pro'/></Link></div>
        </div>
    </div>
    </section>
  
  )
}
