import React from 'react'
import { profileGuide } from '@/utils/Homek'
export default function HelpCenter() {
  return (
    <div>
    <div className='w-fit mx-auto mt-12'>
        <span className="base-text block my-1">{profileGuide.first}</span>
        <span className="base-text block my-1">{profileGuide.second}</span>
        <span className="base-text block my-1">{profileGuide.third}</span>
        <div className='mt-16 flex justify-between'>
          <span className='text-[#E66359FF] base-text'>W Workwise</span>
          <span className='base-text'>@Copyright 2019</span>
          
        </div>
    </div>
    </div>
  )
}
