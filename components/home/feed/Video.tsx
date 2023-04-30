import GratImg from '@/components/utils/GratImg'
import React from 'react'
import { PostInterface } from './Post'
import { homeResource } from '@/public/home/homeExporter'
export default function Video(item:PostInterface) {
  return (
    <div className='overflow-hidden mx-2 mt-3 rounded-sm h-[210px] lg:h-[340px] xl:[320px] md:h-[300px] sm:h-[330px]'>
      <GratImg src={homeResource.VideoTemp}/>
    </div>
  )
}
