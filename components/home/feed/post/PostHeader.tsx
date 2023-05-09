import React from 'react'
import { FaTimes } from 'react-icons/fa'
import GratImg from '@/components/utils/GratImg'
import { homeResource } from '@/public/home/homeExporter'
import { useAppDispatch } from '@/hooks/reduxhooks'
import { layOutActions } from '@/store/layoutSlice'
export default function PostHeader() {
  const dispatch = useAppDispatch()
  return (
    <>
     <div className='border-b border-grat-light-text items-center flex justify-between   px-3'>
          <span className='text-lg md:text-xl font-semibold'>Create Post</span>
          <button onClick={()=>dispatch(layOutActions.setIsPosting(false))} className='h-[50px] w-[50px] rounded-full hover:bg-grat-light-gray flex items-center justify-center'><span className='text-grat-black text-xl'><FaTimes/></span></button>
      </div>
      <div className='flex items-center mt-2'>
        <div className='h-[70px] w-[70px] rounded-full bg-grat-profile-green overflow-hidden'>
          <GratImg src={homeResource.Person2}/>
        </div>
        <div className='ml-3'>
          <span className='text-lg block font-semibold'>John Smith</span>
          <span className='mt-1'>Business</span>
        </div>
      </div>
    </>
  )
}
