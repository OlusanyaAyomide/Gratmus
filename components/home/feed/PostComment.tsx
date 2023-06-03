import React from 'react'
import { PostInterface } from './Post'
import {AiFillHeart,AiOutlineEye} from "react-icons/ai"
import {IoMdThumbsUp} from "react-icons/io"
import { homeResource } from '@/public/home/homeExporter'
import GratImg from '@/components/utils/GratImg'
import {BsFillChatLeftFill} from "react-icons/bs"
import BidButon from '@/components/utils/BidButon'


export default function PostComment(item:PostInterface) {
  const isOrganization = item.type === "organization"?true:false
  return (
    <div className='mx-2'>
      <div className='flex items-center justify-between flex-wrap border-b 1 py-2 border-[#BCC1CAFF]'>
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
      <div className='flex flex-wrap justify-between items-center pt-2'>
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
         <div>
          <div className='hidden  sm:flex  items-center'>
          {isOrganization && <BidButon text='demo'/>}
           <div className=' overflow-hidden h-[20px] w-[20px] rounded-full bg-grat-profile-green '>{<GratImg src={item.profile}/>}</div>
          </div>
         </div>
         {isOrganization &&
          <div className='w-full flex justify-center sm:hidden mt-2 mx-auto'>
            <BidButon text='demo'/>
          </div>}
      </div>
      <div className='border mt-8 rounded-lg border-grat-light-gray p-5 mb-4'>
        <div className='flex'>
          <div>
            <div className='bg-[#FFE6D5] h-9 w-9 rounded-full overflow-hidden'>
              <GratImg src={item.profile}/>
            </div>
          </div>
          <div className='w-full pl-2  text-sm'>
            <h1>Habeeb Story <span className='text-grat-light ml-3'>10:50 Am</span> </h1>
            <span className='mt-1 block'>Impressive</span>
            <div className='flex items-center'>
              <h1 className='flex items-center'><span className='mr-2 text-base text-[#9095A0FF]'><IoMdThumbsUp/></span> 20</h1>
              <h1 className='flex items-center'><span className=' mr-2 ml-4 text-sm text-[#9095A0FF]'><BsFillChatLeftFill/></span>31</h1>
            </div>
          </div>
        </div>
       </div>

    </div>
  )
}
