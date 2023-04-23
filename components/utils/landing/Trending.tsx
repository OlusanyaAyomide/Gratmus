import React from 'react'
import SectionHeader from '../SectionHeader'
import { TagList, Typography } from '@/utils/landingK'
import GratButton from '../GratButton'

export default function Trending() {
  return (
    <section className='mt-12 cont'>
      <SectionHeader text='Trending Tags' ptext='What Many People Are Discussing'/>
      <div className='flex items-center flex-wrap'>
        <div className='w-full lg:w-6/12 md:pr-8'>
          <span className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[85px] text-[#565E6CFF]'>{Typography.TrendingText}</span>
        </div>
        <div className='w-full lg:w-6/12 lg:pl-4 flex flex-wrap mt-6 lg:mt-0'>
          {TagList.map((item,key)=>{
              return(
                <div className='mx-1 sm:mx-4 ' key={key}><GratButton text={item} type={2} className='px-8 py-2 my-1  sm:px-[46px] sm:py-3 md:my-2'/></div>
              )
          })}
        </div>
      </div>
      <GratButton className='block mx-auto mt-6' text='Join The Trend'/>
    </section>
  )
}
