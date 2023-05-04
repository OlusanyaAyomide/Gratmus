import GratImg from '@/components/utils/GratImg'
import { homeResource } from '@/public/home/homeExporter'
import { TopButtons } from '@/utils/Homek'
import Link from 'next/link'
import React from 'react'

export default function TopSearch() {
  return (
    <div className='px-4 -mt-4 mb-2  sm:mx-6 rounded-[4px] pt-5 pb-2 bg-white'>
        <div className='flex w-full'>
      <div>
      <div className='bg  bg-grat-profile-green h-[42px] w-[42px] lg:h-[46px] lg:w-[46px] rounded-full overflow-hidden'><GratImg src={homeResource.TopAvatar}/></div>
      </div>
      <div className='w-full max-w-[600px]'>
        <input placeholder='Write a post' type="text" className='px-3 py-2 rounded-[25px] outline-none w-[90%] block mx-auto  hover:base-text border border-grat-light-text' />
      </div>
    </div>
    <div className='flex mx-auto max-w-[500px] justify-between overflow-auto px-8 sm:px-16   flex-wrap '>
            {TopButtons.map((item,key)=>{
              return(
              <div key={key} className={` ${key===3?"mr-6 md:mr-7 ":""} mt-2 mx-3 lg:mx-4 xl:mx-3`}>
                <Link key={key} href={"/"}><button className='flex'>
                    <GratImg className='h-[24px] w-[24px]' src={item.image}/>
                    <span className='base-text hidden whitespace-nowrap'>{item.text}</span>
                </button></Link>
              </div>)
            })}
          </div>
    </div>
          

  )
}
