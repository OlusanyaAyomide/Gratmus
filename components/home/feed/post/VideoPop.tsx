import React,{useRef,useState,useEffect} from 'react'
import { homeResource } from '@/public/home/homeExporter'
import {GoTriangleDown} from "react-icons/go"
import { PostedInterface } from './BottomScroll'
import GratImg from '@/components/utils/GratImg'
import BottomScroll from './BottomScroll'
import { basestate } from './CreatePost'
import BidButon from '@/components/utils/BidButon'
import ReactPlayer from 'react-player'


export default function VideoPop({postStatus,setpostStatus}:PostedInterface) {
  const ref = useRef<HTMLInputElement>(null)
  const [videoURL, setVideoURL] = useState<string | null>(null)
  const handleFileChange = (event:React.ChangeEvent<HTMLInputElement>)=>{
    const file = event.target.files?.[0];
    const videoURL = file?URL.createObjectURL(file):null;
    setVideoURL(videoURL);
  }
  useEffect(()=>{
    return()=>{
      if (videoURL){
          URL.revokeObjectURL(videoURL)
      }
    }
  },[])
  return (
    <div>
      {!videoURL && <span className="block text-2xl mb-2 font-bold">Upload Video</span>}
      <div className='flex mt-1 items-center'>
        <div>
        <div className='h-[44px] overflow-hidden w-[44px] rounded-full border-2 border-grat-green bg-grat-profile-green'><GratImg src={homeResource.Person2}/></div>
        </div>
        <div className='ml-2'>
           <h1 className='text-lg font-semibold'>John Smith</h1>
           <p className='text-sm flex mb-2'><span>Post To Public</span>
            <span className='text-lg  text-black ml-3'><GoTriangleDown/></span>
           </p>
        </div>
        </div>
        {videoURL && <ReactPlayer  url={videoURL} height={180} width={"100%"} controls={false} playing={true}/>}
        <textarea className='h-[140px] mt-4 w-full outline-none resize-none px-2' placeholder='Say something about video'>
        </textarea>
        {!postStatus.videos && <BottomScroll postStatus={postStatus} setpostStatus={setpostStatus}/>}
        {postStatus.videos &&  <div className='flex mt-4 justify-end items-center'>
        <button className='text-base px-2 mr-2 text-grat-light-text' onClick={()=>{
          setVideoURL(null)
          setpostStatus((prev=>{return{...basestate,videos:false};
           }))
        }}>Cancel</button>
         <input accept="video/*"  type="file" ref={ref} onChange={handleFileChange} className='hidden' />
        <BidButon onClick={()=>{ref.current?.click()}} text='Upload Video' className='px-2'/>
      </div>}    
    </div>
  )
}
