import React from 'react'
import SectionHeader from '../SectionHeader'
import { BlogList } from '@/utils/landingK'
import GratImg from '../GratImg'
import GratButton from '../GratButton'
import Link from 'next/link'

export default function Blog() {
  return (
    <section className='mt-12 md:mt-24 cont'>
      <SectionHeader text='BEST DISCUSSION IN THE WEEK' ptext='Excertation lorem responds fugal' color='text-grat-black uppercase'/>
      <div className='flex flex-wrap justify-center mt-6'>
        {BlogList.map((item,key)=>{
          return(
            <div key={key} className='mx-3 xl:mx-1 w-[376px] mb-8 rounded-[10px] border border-grat-gray'>
              <div className='rounded-tr-lg rounded-tl-lg w-full h-[256px] overflow-hidden'>
                <GratImg src={item.image} piority={true}/>
              </div>
              <div className=' pb-4 px-3'>
                <h1 className='text-base mt-2 mb-1 font-[500] text-grat-green'>{item.text1}</h1>
                <p className='text-lg leading-[28px] sm:text-xl lg:text-[24px] uppercase'>{item.text2}</p>
                <div className='flex justify-between pt-4 items-center'>
                    <span className='text-[#9095A0FF] text-sm'>{item.time}</span>
                    <span className='p-2 bg-grat-offwhite rounded-[14px]'>{item.duration}</span>
                </div>
              </div>
            </div>
          )
        })}
      </div>
      <Link href={"/"}><GratButton text='See More Articles' className='mt-8 block mx-auto'/></Link>
    </section>
  )
}
