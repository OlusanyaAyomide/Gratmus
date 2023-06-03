import GratImg from '@/components/utils/GratImg'
import React, { useEffect, useState } from 'react'
import { PostInterface } from './Post'
import { homeResource } from '@/public/home/homeExporter'
import ReactPlayer from 'react-player'
import { useInView } from 'react-intersection-observer'
export default function Video(item:PostInterface) {
  const {ref,inView} = useInView()
  const [isPlaying,setIsPlaying] = useState(false)
  const [isMounted,setIsMounted] = useState(false)
  useEffect(()=>{
    if(!isMounted){
      setIsMounted(true)
    }
    let id 
    if(inView){
      id = setTimeout(()=>{
        setIsPlaying(true)
      },10000)
    }else{
     clearTimeout(id)
     setIsPlaying(false)
    }

  },[inView,isMounted])
  return (
    <div className='overflow-hidden mx-2 mt-3 rounded-sm h-[210px] lg:h-[340px] xl:[320px] md:h-[300px] sm:h-[330px]' ref={ref}>
      {isMounted && <ReactPlayer playing={isPlaying} controls={isPlaying} url={"/home/Preview.mp4"} style={{height:"100%",width:"100%",objectFit:"cover"}}/>}
    </div>
  )
}
