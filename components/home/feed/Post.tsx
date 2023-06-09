import GratImg from '@/components/utils/GratImg'
import { homeResource } from '@/public/home/homeExporter'
import { StaticImageData } from 'next/image'
import React from 'react'
import PostText from './PostText'
import Audio from './Audio'
import PostHead from './PostHead'
import PostComment from './PostComment'
import Video from './Video'

export interface PostInterface{
    name:string
    verified:boolean
    profile:StaticImageData
    type:string
    postedAt:string
    nickName:string | boolean
    following:boolean
    jobText:string
    tags:string[],
    tagList:string[]
    hasImage:boolean
    openforJob?:boolean
    postImage?:StaticImageData | null
    views:number
    comments:number
    likedBy:string,
    postText:string
    video?:string | null
    audio?:string | null
    
}

export default function Post(item:PostInterface) {
  return (
    <div  className='px-4 relative mt-2 sm:mt-4 my-2  sm:mx-6 rounded-[4px] py-8 pb-2 bg-white'>
      <button className='absolute top-1 right-2'><GratImg src={homeResource.More}/></button>
      <div className='flex'>
        <div>
          <div className='flex-none w-[60px] overflow-hidden bg-grat-profile-green rounded-full mr-2 md:h-[52px] md:w-[52px] lg:h-[64px] lg:w-[64px]'>
            <GratImg src={item.profile}/>
          </div>
        </div>
       <PostHead {...item}/>
      </div>
      <PostText {...item}/>
      {item.postImage && <div className='overflow-hidden mx-2 mt-3 rounded-sm h-[210px] lg:h-[340px] xl:[320px] md:h-[300px] sm:h-[330px]'><GratImg src={item.postImage}/></div>}
      {item.video  && <Video {...item}/>}
      {item.audio  && <Audio {...item}/>}
      <PostComment {...item}/>
      
    </div>
  )
}
