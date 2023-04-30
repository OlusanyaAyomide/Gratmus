import React from 'react'
import { PostInterface } from './Post'
import GratImg from '@/components/utils/GratImg'
import { homeResource } from '@/public/home/homeExporter'

export default function PostHead(item:PostInterface) {
  const isOrganization = item.type === "organization"?true:false
  return (
    <div className='flex w-full flex-1 justify-between bg-red'>
    <div>
      <div className="flex items-center">
         <span className='font-sarabun font-semibold text-lg lg:text-xl'>{item.name}</span>
         {item.verified && <GratImg className='mt-[1px] ml-2 h-[18px] w-[18px]' src={homeResource.CheckMark}/>}
      </div>
      <span className="block text-[#424955FF] font-600 text-base">{!isOrganization?item.postedAt:"Sponsored Ad"}</span>
    </div>
    <div>
    {!item.following && <div className='flex  items-center mb-1 relative z-20'><button className='text-bold text-lg font-sarabun text-grat-green mr-[6px]'>Follow</button>
    <div className='h-[16px] w-[16px] rounded-sm flex items-center justify-center  bg-grat-green text-white'><span className='mb-[1.3px]'>+</span></div>
    </div>}
    {isOrganization && <button className='bg-grat-green mt-1 rounded-[4px] px-2 py-[2px] whitespace-nowrap btn1-hover text-white'>Bid Now</button>}
    </div>
  </div>
  )
}
