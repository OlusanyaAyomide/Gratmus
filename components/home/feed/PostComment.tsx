import React from 'react'
import { PostInterface } from './Post'
import {AiFillHeart,AiOutlineEye} from "react-icons/ai"
import {IoMdThumbsUp} from "react-icons/io"
import { homeResource } from '@/public/home/homeExporter'
import GratImg from '@/components/utils/GratImg'

export default function PostComment(item:PostInterface) {
  return (
    <div className='mx-2'>
      <div className='flex items-center justify-between flex-wrap border-b mt-1 py-2 border-[#BCC1CAFF]'>
        <span className='text-xs'>Comment {item.comments}</span>
        <div className='text-xs flex items-center'>
          <span className='text-grat-black text-lg mb-0.5'><IoMdThumbsUp/></span>
          <span className='text-grat-black ml-.5 text-lg'><AiFillHeart/></span>
          Jessica williams and 14 others
        </div>
        <div className='flex items-center'>
          <span className='text-lg'><AiOutlineEye/></span>
           <span className='text-xs'>Views  {item.views}</span>
        </div>
      </div>
      <div className='flex justify-between items-center pt-2'>
       <div className='flex items-center'>
        <button className='h-[16px] w-[16px]'><GratImg src={homeResource.React}/></button>
        <span className='text-xs ml-1'>React</span>
       </div>
       <div className='flex items-center'>
        <button className='h-[16px] w-[16px]'><GratImg src={homeResource.Discuss}/></button>
        <span className='text-xs ml-1'>Discuss</span>
       </div>
       <div className='flex items-center'>
        <button className='h-[16px] w-[16px]'><GratImg src={homeResource.Share}/></button>
        <span className='text-xs ml-1'>Share</span>
       </div>
       <div className='hidden sm:block md:hidden lg:block overflow-hidden h-[20px] w-[20px] rounded-full bg-grat-profile-green '>{<GratImg src={item.profile}/>}</div>
      </div>
    </div>
  )
}
