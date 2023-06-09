import React from 'react'
import { PostInterface } from './Post'
import GratImg from '@/components/utils/GratImg'
import { homeResource } from '@/public/home/homeExporter'
import BidButon from '@/components/utils/BidButon'

export default function PostHead(item:PostInterface) {
  const isOrganization = item.type === "organization"?true:false
  return (
    <div className='flex flex-wrap sm:flex-nowrap w-full flex-1 justify-between bg-red'>
    <div>
      <div className="flex items-center">
         <span className='font-sarabun font-semibold text-base sm:text-lg'>{item.name}</span>
         {item.verified && <GratImg className='mt-[1px] ml-2 h-[18px] w-[18px]' src={homeResource.CheckMark}/>}
      </div>
      <span className="block text-[#424955FF] font-600 text-base">{!isOrganization?item.postedAt:"Sponsored Ad"}</span>
    </div>
    <div className='flex  w-full sm:w-fit justify-between items-center  sm:block'>
    {!item.following && <div className='flex  items-center mb-1 relative z-10'><button className='text-bold text-lg font-sarabun text-grat-green mr-[6px]'>Follow</button>
    <div className='h-[16px] w-[16px] rounded-sm flex items-center justify-center  bg-grat-green text-white'><span className='mb-[1.3px]'>+</span></div>
    </div>}
    {isOrganization && <BidButon text='Bid Now' className='mr-8 sm:mr-0'/>}
    </div>
  </div>
  )
}
